# GRE Pascal Book Website — Chapter 4 System Update Document

## 1. Purpose

This document defines the recommended system format for converting **Chapter 4 — Sentence Equivalence** into a working website module.

The goal is not only to store answers in markdown, but to transform the solved Chapter 4 content into structured data that can be loaded dynamically by the web application. The website should allow users to:

1. navigate Chapter 4 questions;
2. read the original prompt and answer choices;
3. select answers;
4. reveal the correct pair;
5. view detailed explanations;
6. understand clue keywords from the question;
7. understand why incorrect choices are wrong;
8. view the original page image;
9. track completion/progress.

This follows the original project direction from the handover: the GRE Pascal Book should become an interactive web application where users can work through every question, view answers and explanations, track progress, and reference the original page images.

---

## 2. Recommended format

### Primary format: JSON or TypeScript data file

For the website, the best format is:

```text
JSON / TypeScript structured data
```

Recommended final format:

```text
/src/data/chapter-04-sentence-equivalence.ts
```

or

```text
/public/data/chapter-04-sentence-equivalence.json
```

### Why JSON/TypeScript is better than markdown for the app

| Format | Best use | Recommendation |
|---|---|---|
| Markdown | Human-readable explanation archive | Keep as backup/source notes |
| JSON | App-readable structured data | Best for website rendering |
| TypeScript export | App-readable + type safety | Best if the app uses React/Vite/Next |
| CSV | Simple answer table only | Not enough for explanations |
| Markdown only | Good for reading, bad for dynamic website | Not recommended as main app data |

### Final recommendation

Use **TypeScript data file** if the website is React/Vite/Next:

```ts
export const chapter4Questions = [...]
```

Use **JSON file** if the app will load content dynamically from `/public/data`.

---

## 3. Proposed file structure

Recommended repository structure:

```text
gre-book-pascal/
  src/
    data/
      chapter-04-sentence-equivalence.ts
    types/
      question.ts
    components/
      QuestionCard.tsx
      AnswerChoices.tsx
      ExplanationPanel.tsx
      KeywordLogicTable.tsx
      PageImageViewer.tsx
      ProgressTracker.tsx
    pages/
      Chapter4Page.tsx
  public/
    book-images/
      page_061.jpg
      page_062.jpg
      page_063.jpg
      ...
  docs/
    chapter-04/
      q001-q018.md
      q019-q030.md
      q031-q040.md
      q041-q050.md
      q051-q060.md
      q061-q070.md
      q071-q080.md
      q081-q090.md
      q091-q100.md
      chapter-04-status.md
```

---

## 4. Core data schema

Every Chapter 4 question should be stored as one object.

### TypeScript interface

```ts
export type ChoiceKey = "A" | "B" | "C" | "D" | "E" | "F";

export interface QuestionChoice {
  key: ChoiceKey;
  text: string;
}

export interface ClueKeyword {
  phrase: string;
  meaning: string;
  logic: string;
}

export interface WrongChoiceExplanation {
  key: ChoiceKey;
  text: string;
  reason: string;
}

export interface Citation {
  label: string;
  source: string;
  note?: string;
}

export interface GREQuestion {
  id: string;
  chapter: 4;
  chapterTitle: "Sentence Equivalence";
  questionNumber: number;
  type: "sentence_equivalence";
  sourcePage?: number;
  imagePath?: string;

  prompt: string;
  choices: QuestionChoice[];

  correctAnswerKeys: ChoiceKey[];
  correctAnswerTexts: string[];

  clueKeywords: ClueKeyword[];

  sentenceLogic: string;
  answerLogic: string;

  correctWordMeanings: {
    word: string;
    meaning: string;
  }[];

  wrongChoices: WrongChoiceExplanation[];

  finalAnswer: string;

  difficulty?: "easy" | "medium" | "hard";
  tags?: string[];

  citations?: Citation[];
}
```

---

## 5. Example data object

Below is an example format for Chapter 4 Question 19.

```ts
export const chapter4Questions: GREQuestion[] = [
  {
    id: "ch04-q019",
    chapter: 4,
    chapterTitle: "Sentence Equivalence",
    questionNumber: 19,
    type: "sentence_equivalence",
    sourcePage: 65,
    imagePath: "/book-images/page_065.jpg",

    prompt:
      "The sentence describes a moderate activist who still advocated strong views, but to reach middle-of-the-road voters she had to _____ her views.",

    choices: [
      { key: "A", text: "abridge" },
      { key: "B", text: "amalgamate" },
      { key: "C", text: "restrain" },
      { key: "D", text: "undermine" },
      { key: "E", text: "temper" },
      { key: "F", text: "galvanize" }
    ],

    correctAnswerKeys: ["C", "E"],
    correctAnswerTexts: ["restrain", "temper"],

    clueKeywords: [
      {
        phrase: "moderate activist",
        meaning: "a person whose views are not extreme or who must appear balanced",
        logic:
          "This points toward a word meaning to reduce, soften, or moderate the expression of her views."
      },
      {
        phrase: "middle-of-the-road voters",
        meaning: "centrist voters who may reject extreme statements",
        logic:
          "To appeal to centrist voters, she needs to tone down or hold back her views."
      }
    ],

    sentenceLogic:
      "The sentence contrasts the activist's strong views with the need to appeal to moderate voters. The blank must mean to soften, moderate, or hold back those views.",

    answerLogic:
      "'Restrain' means to hold back or control, and 'temper' means to moderate or soften. Both produce the same sentence meaning.",

    correctWordMeanings: [
      {
        word: "restrain",
        meaning: "to hold back, control, or prevent from full expression"
      },
      {
        word: "temper",
        meaning: "to moderate, soften, or make less extreme"
      }
    ],

    wrongChoices: [
      {
        key: "A",
        text: "abridge",
        reason:
          "Abridge means to shorten a text or speech, not to moderate one's views."
      },
      {
        key: "B",
        text: "amalgamate",
        reason:
          "Amalgamate means to combine, which does not fit the logic of softening views."
      },
      {
        key: "D",
        text: "undermine",
        reason:
          "Undermine means to weaken or damage, not to make views more moderate."
      },
      {
        key: "F",
        text: "galvanize",
        reason:
          "Galvanize means to excite or stimulate into action, nearly the opposite of restraining."
      }
    ],

    finalAnswer: "C and E — restrain / temper",

    difficulty: "medium",
    tags: ["moderation", "contrast", "politics", "tone-down"],

    citations: [
      {
        label: "Dictionary definition of restrain",
        source: "Cambridge / Merriam-Webster / dictionary source used in explanation"
      },
      {
        label: "Dictionary definition of temper",
        source: "Cambridge / Merriam-Webster / dictionary source used in explanation"
      }
    ]
  }
];
```

---

## 6. Required fields for website rendering

For the app to work properly, these fields should be mandatory:

| Field | Required? | Purpose |
|---|---:|---|
| `id` | Yes | Unique question ID |
| `chapter` | Yes | Chapter number |
| `questionNumber` | Yes | Display and navigation |
| `type` | Yes | Allows app to render Sentence Equivalence layout |
| `prompt` | Yes | Main question text |
| `choices` | Yes | Six answer choices |
| `correctAnswerKeys` | Yes | Used for answer checking |
| `correctAnswerTexts` | Yes | Used in answer reveal |
| `clueKeywords` | Yes | Explains how to solve from question logic |
| `sentenceLogic` | Yes | Explains overall reasoning |
| `answerLogic` | Yes | Explains why correct pair fits |
| `correctWordMeanings` | Yes | Vocabulary learning |
| `wrongChoices` | Yes | Explains incorrect options |
| `finalAnswer` | Yes | Display final answer |
| `imagePath` | Strongly recommended | Shows original book page |

---

## 7. UI behavior for Chapter 4

### Question page

Each question page should show:

1. chapter title;
2. question number;
3. original prompt;
4. six choices;
5. answer selection;
6. submit/check button;
7. answer reveal;
8. explanation tabs:
   - Sentence Logic
   - Clue Keywords
   - Correct Word Meanings
   - Why Other Options Are Wrong
   - Original Page Image

### Suggested tabs

```text
[Question] [Keywords] [Answer Logic] [Wrong Options] [Original Page]
```

### Progress tracker

Store progress in local storage first:

```ts
localStorage.setItem("ch04-q019-status", "completed");
```

Later, if the app has backend/auth, migrate this to a database.

---

## 8. Chapter 4 data conversion plan

### Current source files

Chapter 4 explanations currently exist in markdown files:

```text
chapter4_q1_explanation.md
chapter4_q2-8_explanations.md
chapter4_q9-18_explanations.md
chapter4_q19-30_explanations.md
chapter4_q31-40_explanations.md
chapter4_q41-50_explanations.md
chapter4_q51-60_explanations.md
chapter4_q61-70_explanations.md
chapter4_q71-80_explanations.md
chapter4_q81-90_explanations.md
chapter4_q91-100_explanations.md
```

### Conversion steps

1. Read each markdown file.
2. Split content by question heading.
3. Extract:
   - question number;
   - prompt;
   - answer choices;
   - correct answer pair;
   - keyword clues;
   - explanation;
   - wrong option analysis;
   - citations;
   - page image reference.
4. Normalize into the `GREQuestion` schema.
5. Save as:
   - `src/data/chapter-04-sentence-equivalence.ts`, or
   - `public/data/chapter-04-sentence-equivalence.json`.

---

## 9. Validation rules

Before using the file in the website, validate:

| Rule | Check |
|---|---|
| Total question count | Must equal 100 |
| Each question has six choices | `choices.length === 6` |
| Each question has two correct answers | `correctAnswerKeys.length === 2` |
| Correct answer keys exist in choices | Must match A–F |
| Every question has keyword logic | `clueKeywords.length >= 1` |
| Every wrong choice has reason | Four wrong choices explained |
| IDs are unique | No duplicate `id` |
| Page images exist | `imagePath` points to existing file |

---

## 10. Recommended route structure

For the website:

```text
/chapter/4
/chapter/4/question/1
/chapter/4/question/2
...
/chapter/4/question/100
```

or:

```text
/verbal/sentence-equivalence
/verbal/sentence-equivalence/1
```

Recommended: use chapter-based route because the whole book will eventually be included.

---

## 11. Suggested component structure

```text
QuestionCard
  - renders prompt and choices

AnswerChoices
  - handles checkbox selection
  - validates exactly two choices for sentence equivalence

ExplanationPanel
  - shows correct answer, sentence logic, and detailed explanation

KeywordLogicTable
  - shows clues from the question and what they mean

WrongOptionsTable
  - explains why each distractor is wrong

PageImageViewer
  - displays scanned original page

ProgressTracker
  - marks completed/uncompleted questions
```

---

## 12. Data example for answer checking

```ts
function checkSentenceEquivalenceAnswer(
  selected: ChoiceKey[],
  correct: ChoiceKey[]
): boolean {
  if (selected.length !== 2) return false;

  const selectedSorted = [...selected].sort().join(",");
  const correctSorted = [...correct].sort().join(",");

  return selectedSorted === correctSorted;
}
```

---

## 13. Recommended final app data architecture

Use this layered architecture:

```text
Markdown explanations
        ↓
Parser / manual conversion
        ↓
Structured TypeScript or JSON data
        ↓
React UI
        ↓
LocalStorage progress tracking
        ↓
Future backend database
```

The app should not parse markdown live in production. Markdown should be used as editorial source material only. The app should consume structured data.

---

## 14. Chapter 4 publishing checklist

Before publishing Chapter 4 in the website:

- [ ] Put all 100 questions into `chapter-04-sentence-equivalence.ts`.
- [ ] Confirm every question has six choices.
- [ ] Confirm every question has two correct answers.
- [ ] Add clue keywords from the question.
- [ ] Add meaning of each clue keyword.
- [ ] Add sentence logic.
- [ ] Add correct word definitions.
- [ ] Add why other choices are wrong.
- [ ] Add original page image path.
- [ ] Test navigation Q1–Q100.
- [ ] Test answer selection.
- [ ] Test answer reveal.
- [ ] Test progress tracking.
- [ ] Commit data and components to GitHub.

---

## 15. Final recommendation

For Chapter 4, the website should be built from a **structured TypeScript data file**:

```text
src/data/chapter-04-sentence-equivalence.ts
```

This format is best because:

1. it supports React components directly;
2. it prevents broken rendering from markdown formatting differences;
3. it allows validation before publishing;
4. it supports future database migration;
5. it supports progress tracking, search, filtering, and quiz mode.

Markdown files should remain as backup/reference documents, but the live website should use structured data.
