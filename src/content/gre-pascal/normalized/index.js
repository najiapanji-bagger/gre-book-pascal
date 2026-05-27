import chapter4Data from "../raw/accepted_chapters/chapter-04-sentence-equivalence/chapter4_sentence_equivalence_100_data_from_explanations.json"
import chapter5Data from "../raw/accepted_chapters/chapter-05-logic-based-reading/chapter-05-data.json"
import chapter6Data from "../raw/accepted_chapters/chapter-06-verbal-practice-sets/chapter-06-data.json"
import chapter7Data from "../raw/accepted_chapters/chapter-07-mathematics-review/chapter-07-data.json"
import chapter8Data from "../raw/accepted_chapters/chapter-08-math-review-practice/chapter-08-data.json"
import chapter9Data from "../raw/accepted_chapters/chapter-09-quantitative-practice-sets/chapter-09-data.json"

import chapter3FullExplanations from "../raw/accepted_chapters/chapter-03-text-completions/full_explanations.md?raw"
import chapter3Handover from "../raw/accepted_chapters/chapter-03-text-completions/handover.md?raw"
import chapter7ConceptNotes from "../raw/accepted_chapters/chapter-07-mathematics-review/chapter-07-concept-notes.md?raw"
import chapter7FormulaSheet from "../raw/accepted_chapters/chapter-07-mathematics-review/chapter-07-formula-sheet.md?raw"
import chapter7WorkedExamples from "../raw/accepted_chapters/chapter-07-mathematics-review/chapter-07-worked-examples.md?raw"

const chapterTitles = {
  3: "Text Completions",
  4: "Sentence Equivalence",
  5: "Logic-Based Reading Comprehension",
  6: "Verbal Practice Sets",
  7: "Mathematics Review",
  8: "Mathematics Review Practice",
  9: "Quantitative Practice Sets",
}

function normalizeChoices(choices) {
  if (!choices) return []
  if (Array.isArray(choices)) {
    return choices.map((choice, index) => {
      if (typeof choice === "string") return { key: String.fromCharCode(65 + index), text: choice }
      return { key: String(choice.key || choice.label || String.fromCharCode(65 + index)), text: String(choice.text || choice.value || "") }
    })
  }
  return Object.entries(choices).map(([key, text]) => ({ key, text: String(text || "") }))
}

function normalizeList(value) {
  if (!value) return []
  if (Array.isArray(value)) return value.map(String).filter(Boolean)
  return String(value).split(/[,;/]/).map((item) => item.trim()).filter(Boolean)
}

function normalizeText(value) {
  if (!value) return ""
  if (Array.isArray(value)) return value.map(normalizeText).filter(Boolean).join("\n")
  if (typeof value === "object") return Object.entries(value).map(([key, item]) => `${key}: ${normalizeText(item)}`).join("\n")
  return String(value)
}

function normalizeImagePath(item) {
  const source = String(item.imagePath || item.sourcePage || "")
  const match = source.match(/page[_-]?(\d{1,3})/i)
  if (!match) return ""
  return `/book-images/page_${match[1].padStart(3, "0")}.jpg`
}

function normalizeSourcePage(item) {
  const source = String(item.sourcePage || item.imagePath || "")
  const match = source.match(/(\d{1,3})/)
  return match ? Number(match[1]) : undefined
}

function normalizeQuestion(raw, defaults = {}) {
  const chapter = Number(raw.chapter || defaults.chapter)
  const chapterTitle = raw.chapterTitle || defaults.chapterTitle || chapterTitles[chapter]
  const correctAnswerKeys = normalizeList(raw.correctAnswerKeys || raw.correctAnswerPair || raw.finalAnswer)
  const correctAnswerTexts = normalizeList(raw.correctAnswerTexts || raw.correctAnswerPair)
  const needsReview = Boolean(raw.needsReview || raw.reviewNotes || !raw.prompt && !raw.promptOrParaphrase)

  return {
    id: String(raw.id || `ch${String(chapter).padStart(2, "0")}-item-${raw.questionNumber || raw.globalQuestionNumber || "unknown"}`),
    chapter,
    chapterTitle,
    itemNumber: raw.questionNumber || raw.globalQuestionNumber || raw.questionNumberWithinSet,
    practiceSet: raw.practiceSet,
    part: raw.part,
    type: raw.type || raw.questionType || raw.quantQuestionType || defaults.type || "study_item",
    sourcePage: normalizeSourcePage(raw),
    imagePath: normalizeImagePath(raw),
    prompt: raw.prompt || raw.promptOrParaphrase || "",
    passage: raw.passage || "",
    questionStem: raw.questionStem || "",
    choices: normalizeChoices(raw.choices),
    correctAnswerKeys,
    correctAnswerTexts,
    explanation: raw.fullExplanationMarkdown || raw.explanation || raw.logicalReasoning || "",
    logic: raw.logic || raw.logicalReasoning || "",
    answerLogic: raw.answerLogic || "",
    solutionSteps: normalizeList(raw.solutionSteps),
    formulaUsed: normalizeList(raw.formulaUsed),
    wrongChoices: Array.isArray(raw.wrongChoices) ? raw.wrongChoices : [],
    finalAnswer: raw.finalAnswer || correctAnswerKeys.join(", "),
    confidence: raw.confidence == null ? "accepted" : String(raw.confidence),
    needsReview,
    reviewNotes: raw.reviewNotes || "",
    tags: raw.tags || [],
  }
}

function normalizeConceptExample(raw, index) {
  return {
    id: `ch07-example-${String(raw.id || index + 1).padStart(2, "0")}`,
    chapter: 7,
    chapterTitle: chapterTitles[7],
    itemNumber: raw.id || index + 1,
    type: "worked_example",
    sourcePage: normalizeSourcePage(raw),
    imagePath: normalizeImagePath(raw),
    prompt: raw.problem || raw.source || "",
    choices: [],
    correctAnswerKeys: [],
    correctAnswerTexts: normalizeList(raw.answer),
    explanation: normalizeText(raw.solution_steps),
    solutionSteps: normalizeList(raw.solution_steps),
    formulaUsed: [],
    finalAnswer: normalizeText(raw.answer),
    confidence: "accepted",
    needsReview: false,
    reviewNotes: "",
    tags: ["concept", "worked-example"],
  }
}

const chapter3Notes = [
  { id: "ch03-full-explanations", title: "Full Explanations", body: chapter3FullExplanations },
  { id: "ch03-handover", title: "Handover Notes", body: chapter3Handover },
]

const chapter7Notes = [
  { id: "ch07-concept-notes", title: "Concept Notes", body: chapter7ConceptNotes },
  { id: "ch07-formula-sheet", title: "Formula Sheet", body: chapter7FormulaSheet },
  { id: "ch07-worked-examples", title: "Worked Examples", body: chapter7WorkedExamples },
]

export const acceptedChapters = [
  {
    chapter: 3,
    title: chapterTitles[3],
    status: "accepted",
    mode: "study_notes",
    notes: chapter3Notes,
    items: [],
    needsReviewCount: 0,
    sourceSummary: "Markdown explanations accepted; per-question JSON conversion remains a later enhancement.",
  },
  {
    chapter: 4,
    title: chapterTitles[4],
    status: "accepted",
    mode: "questions",
    notes: [],
    items: chapter4Data.map((item) => normalizeQuestion(item, { chapter: 4, type: "sentence_equivalence" })),
    sourceSummary: "100 sentence-equivalence explanations normalized from accepted JSON.",
  },
  {
    chapter: 5,
    title: chapterTitles[5],
    status: "accepted",
    mode: "questions",
    notes: [],
    items: chapter5Data.map((item) => normalizeQuestion(item, { chapter: 5 })),
    sourceSummary: "30 logic-based reading questions normalized from accepted JSON.",
  },
  {
    chapter: 6,
    title: chapterTitles[6],
    status: "accepted finalized draft",
    mode: "questions",
    notes: [],
    items: chapter6Data.map((item) => normalizeQuestion(item, { chapter: 6 })),
    sourceSummary: "108 verbal practice questions normalized from finalized package.",
  },
  {
    chapter: 7,
    title: chapterTitles[7],
    status: "accepted near-final",
    mode: "concepts",
    notes: chapter7Notes,
    conceptSections: chapter7Data.sections || [],
    items: (chapter7Data.examples || []).map(normalizeConceptExample),
    needsReviewNotes: chapter7Data.needs_review || [],
    sourceSummary: "Concept chapter rendered as lessons, formulas, and worked examples.",
  },
  {
    chapter: 8,
    title: chapterTitles[8],
    status: "accepted",
    mode: "questions",
    notes: [],
    items: chapter8Data.map((item) => normalizeQuestion(item, { chapter: 8 })),
    sourceSummary: "60 mathematics review practice items normalized from accepted JSON.",
  },
  {
    chapter: 9,
    title: chapterTitles[9],
    status: "accepted as-is",
    mode: "questions",
    notes: [],
    items: chapter9Data.map((item) => normalizeQuestion(item, { chapter: 9 })),
    sourceSummary: "Stage 2 quantitative practice data accepted as-is; placeholders render with Needs Review.",
  },
].map((chapter) => ({
  ...chapter,
  itemCount: chapter.items.length,
  needsReviewCount: chapter.items.filter((item) => item.needsReview).length + (chapter.needsReviewNotes?.length || 0),
}))

export const acceptedChapterItems = acceptedChapters.flatMap((chapter) => chapter.items)

export const acceptedChapterStats = {
  chapterCount: acceptedChapters.length,
  itemCount: acceptedChapterItems.length,
  needsReviewCount: acceptedChapters.reduce((sum, chapter) => sum + chapter.needsReviewCount, 0),
  noteCount: acceptedChapters.reduce((sum, chapter) => sum + chapter.notes.length, 0),
}
