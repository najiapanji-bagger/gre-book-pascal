import fs from "node:fs"
import path from "node:path"

const PAGE_COUNT = 239
const root = process.cwd()
const dataDir = path.join(root, "public", "book-data")
const ocrDir = path.join(root, "book-ocr")

function readJson(name) {
  const file = path.join(dataDir, name)
  if (!fs.existsSync(file)) {
    console.error(`Missing required data file: public/book-data/${name}`)
    process.exit(1)
  }
  return JSON.parse(fs.readFileSync(file, "utf8"))
}

function pad(page) {
  return String(page).padStart(3, "0")
}

const pages = readJson("pages.json")
const questions = readJson("questions.json")
const vocabulary = readJson("vocabulary.json")
readJson("sections.json")

const missingOcr = []
for (let page = 1; page <= PAGE_COUNT; page += 1) {
  if (!fs.existsSync(path.join(ocrDir, `page_${pad(page)}.txt`))) missingOcr.push(page)
}

const lowConfidencePages = pages.filter((page) => (
  typeof page.confidence === "number" && page.confidence < 70
)).map((page) => page.page)

const stats = {
  totalPagesExpected: PAGE_COUNT,
  ocrPagesGenerated: PAGE_COUNT - missingOcr.length,
  pagesMissingOcr: missingOcr,
  questionsExtracted: questions.length,
  questionsWithAnswers: questions.filter((question) => question.answer).length,
  questionsMissingAnswers: questions.filter((question) => !question.answer).length,
  vocabularyWordsExtracted: vocabulary.length,
  pagesWithLowOcrConfidence: lowConfidencePages,
}

console.log(JSON.stringify(stats, null, 2))

if (pages.length !== PAGE_COUNT) {
  console.error(`Expected ${PAGE_COUNT} page records, found ${pages.length}.`)
  process.exit(1)
}

if (missingOcr.length) {
  console.error(`Missing OCR for ${missingOcr.length} page(s).`)
  process.exit(1)
}

if (!questions.length) {
  console.error("No questions were extracted from OCR text.")
  process.exit(1)
}

if (!vocabulary.length) {
  console.error("No vocabulary words were extracted from OCR text.")
  process.exit(1)
}

console.log("OK: book data audit passed.")
