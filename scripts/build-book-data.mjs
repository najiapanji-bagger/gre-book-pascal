import fs from "node:fs"
import path from "node:path"

const PAGE_COUNT = 239
const root = process.cwd()
const ocrDir = path.join(root, "book-ocr")
const dataDir = path.join(root, "public", "book-data")

const sectionMap = [
  { title: "Cover", startPage: 1, endPage: 1 },
  { title: "Table of Contents", startPage: 2, endPage: 3 },
  { title: "Preface", startPage: 4, endPage: 8 },
  { title: "Analytical Writing", startPage: 9, endPage: 19 },
  { title: "Introduction to Text Completions and Sentence Equivalence", startPage: 20, endPage: 40 },
  { title: "Text Completions", startPage: 41, endPage: 60 },
  { title: "Sentence Equivalence", startPage: 61, endPage: 71 },
  { title: "Logic Based Reading Comprehension", startPage: 72, endPage: 79 },
  { title: "Verbal Practice Sets", startPage: 80, endPage: 142 },
  { title: "Mathematics Review", startPage: 143, endPage: 150 },
  { title: "Mathematics Review Practice", startPage: 151, endPage: 169 },
  { title: "Quantitative Practice Sets", startPage: 170, endPage: 223 },
  { title: "Vocabulary Review", startPage: 224, endPage: 239 },
]

const stopWords = new Set([
  "a", "an", "and", "answer", "answers", "as", "book", "by", "chapter", "choice", "choices",
  "directions", "for", "from", "gre", "in", "is", "it", "math", "of", "on", "or", "page",
  "pascal", "practice", "question", "questions", "review", "section", "set", "the", "to",
  "vocabulary", "with", "you", "your",
])

function pad(page) {
  return String(page).padStart(3, "0")
}

function sectionForPage(page) {
  return sectionMap.find((section) => page >= section.startPage && page <= section.endPage)?.title || "Unknown"
}

function cleanText(text) {
  return text
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim()
}

function lineClean(line) {
  return line.replace(/\s+/g, " ").trim()
}

function readPageText(page) {
  const file = path.join(ocrDir, `page_${pad(page)}.txt`)
  if (!fs.existsSync(file)) return null
  return fs.readFileSync(file, "utf8")
}

function buildPages() {
  const pages = []
  for (let page = 1; page <= PAGE_COUNT; page += 1) {
    const rawText = readPageText(page)
    pages.push({
      page,
      image: `/images/page_${pad(page)}.jpg`,
      section: sectionForPage(page),
      rawText: rawText || "",
      cleanText: rawText ? cleanText(rawText) : "",
      status: rawText ? "ocr-complete" : "ocr-missing",
    })
  }
  return pages
}

function questionStart(line) {
  const trimmed = lineClean(line)
  if (/^(?:question\s*)?\d{1,3}[\).]\s+\S/i.test(trimmed)) return true
  if (/^\d{1,3}\s{2,}\S/.test(line) && trimmed.length > 20) return true
  return false
}

function optionPositions(text) {
  const positions = []
  const regex = /(^|\n|\s)(?:\(?([A-I])\)|([A-I])[\).])\s+/g
  let match
  while ((match = regex.exec(text)) !== null) {
    const label = match[2] || match[3]
    const index = match.index + match[1].length
    positions.push({ label, index })
  }
  return positions
}

function extractOptions(text) {
  const positions = optionPositions(text)
  if (!positions.length) return { prompt: text.trim(), options: [] }

  const first = positions[0]
  const prompt = text.slice(0, first.index).trim()
  const options = positions.map((position, index) => {
    const next = positions[index + 1]
    const raw = text.slice(position.index, next ? next.index : text.length)
    const cleaned = raw.replace(/^(?:\(?[A-I]\)|[A-I][\).])\s+/, "").trim()
    return { label: position.label, text: cleaned }
  }).filter((option) => option.text.length > 0)

  return { prompt, options }
}

function inferQuestionType(section, options, prompt) {
  if (!options.length) return "open-response"
  if (/sentence equivalence/i.test(section)) return "multi-choice"
  if (/text completion/i.test(section) || /blank/i.test(prompt)) return "text-completion"
  return "single-choice"
}

function printedQuestionNumber(text) {
  const match = lineClean(text).match(/^(?:question\s*)?(\d{1,3})[\).]/i)
  return match ? Number(match[1]) : null
}

function extractQuestionsFromPage(pageObject) {
  if (pageObject.page < 9 || pageObject.page > 223) return []

  const lines = pageObject.cleanText.split("\n")
  const starts = []
  for (let index = 0; index < lines.length; index += 1) {
    if (questionStart(lines[index])) starts.push(index)
  }
  if (!starts.length) return []

  const questions = []
  for (let i = 0; i < starts.length; i += 1) {
    const start = starts[i]
    const end = starts[i + 1] ?? lines.length
    const block = lines.slice(start, end).map(lineClean).join("\n").trim()
    if (block.length < 30) continue

    const { prompt, options } = extractOptions(block)
    const number = printedQuestionNumber(block)
    if (!prompt && !options.length) continue

    questions.push({
      id: `p${pad(pageObject.page)}-q${pad(questions.length + 1)}`,
      page: pageObject.page,
      section: pageObject.section,
      type: inferQuestionType(pageObject.section, options, prompt),
      prompt,
      options,
      answer: null,
      explanation: "",
      sourceImage: pageObject.image,
      status: "needs-answer-review",
      printedNumber: number,
    })
  }
  return questions
}

function parseAnswerCandidates(pages) {
  const candidates = []
  for (const page of pages) {
    if (!/(answer key|answers|explanations|solutions)/i.test(page.cleanText)) continue

    const lines = page.cleanText.split("\n").map(lineClean).filter(Boolean)
    for (const line of lines) {
      const regex = /(?:^|\s)(\d{1,3})[\).:-]\s*([A-I](?:\s*[,/&]\s*[A-I])*)\b/g
      let match
      while ((match = regex.exec(line)) !== null) {
        candidates.push({
          page: page.page,
          section: page.section,
          number: Number(match[1]),
          answer: match[2].replace(/\s+/g, ""),
        })
      }
    }
  }
  return candidates
}

function applyAnswerCandidates(questions, candidates) {
  return questions.map((question) => {
    if (!question.printedNumber) return question
    const matches = candidates.filter((candidate) => (
      candidate.number === question.printedNumber && candidate.section === question.section
    ))
    const uniqueAnswers = [...new Set(matches.map((match) => match.answer))]
    if (uniqueAnswers.length !== 1) return question
    return {
      ...question,
      answer: uniqueAnswers[0],
      status: "answer-found",
    }
  })
}

function vocabularyCandidate(line) {
  const cleaned = lineClean(line)
  if (cleaned.length < 3 || cleaned.length > 120) return null
  if (/\d/.test(cleaned)) return null

  const separatorMatch = cleaned.match(/^([A-Za-z][A-Za-z' -]{2,35})(?:\s+[-:]\s+|\s{2,})(.*)$/)
  const word = separatorMatch ? separatorMatch[1] : cleaned.split(/\s+/)[0]
  const normalized = word.replace(/^[^A-Za-z]+|[^A-Za-z'-]+$/g, "").trim()
  const lowered = normalized.toLowerCase()

  if (normalized.length < 3 || normalized.length > 32) return null
  if (stopWords.has(lowered)) return null
  if (!/^[A-Za-z][A-Za-z'-]+$/.test(normalized)) return null

  const hasDictionaryShape = Boolean(separatorMatch) || /^[A-Z][A-Za-z'-]+$/.test(normalized)
  if (!hasDictionaryShape) return null

  return normalized.toLowerCase()
}

function extractVocabulary(pages) {
  const seen = new Map()
  const addWord = (word, page) => {
    const normalized = word.replace(/^[^A-Za-z]+|[^A-Za-z'-]+$/g, "").trim().toLowerCase()
    if (!normalized || stopWords.has(normalized) || seen.has(normalized)) return
    if (!/^[a-z][a-z'-]+$/.test(normalized) || normalized.length < 3 || normalized.length > 32) return
    seen.set(normalized, {
      word: normalized,
      page: page.page,
      definition: "",
      synonyms: [],
      example: "",
      status: "word-extracted",
    })
  }

  for (const page of pages.filter((item) => item.page >= 224 && item.page <= 239)) {
    const lines = page.cleanText.split("\n")
    for (const line of lines) {
      const numberedEntry = /(?:^|\s)[+|]?\d{1,4}[.,]\s*([A-Za-z][A-Za-z'-]{2,})\b/g
      let match
      while ((match = numberedEntry.exec(line)) !== null) {
        addWord(match[1], page)
      }

      const word = vocabularyCandidate(line)
      if (!word || seen.has(word)) continue
      addWord(word, page)
    }
  }
  return [...seen.values()].sort((a, b) => a.word.localeCompare(b.word) || a.page - b.page)
}

fs.mkdirSync(dataDir, { recursive: true })

const pages = buildPages()
const sections = sectionMap.map((section) => ({
  ...section,
  pageCount: section.endPage - section.startPage + 1,
  ocrPages: pages.filter((page) => page.section === section.title && page.status === "ocr-complete").length,
}))

let questions = pages.flatMap(extractQuestionsFromPage)
questions = applyAnswerCandidates(questions, parseAnswerCandidates(pages))
const vocabulary = extractVocabulary(pages)

fs.writeFileSync(path.join(dataDir, "pages.json"), `${JSON.stringify(pages, null, 2)}\n`)
fs.writeFileSync(path.join(dataDir, "sections.json"), `${JSON.stringify(sections, null, 2)}\n`)
fs.writeFileSync(path.join(dataDir, "questions.json"), `${JSON.stringify(questions, null, 2)}\n`)
fs.writeFileSync(path.join(dataDir, "vocabulary.json"), `${JSON.stringify(vocabulary, null, 2)}\n`)

console.log(`OK: wrote ${pages.length} pages, ${questions.length} questions, and ${vocabulary.length} vocabulary words.`)
