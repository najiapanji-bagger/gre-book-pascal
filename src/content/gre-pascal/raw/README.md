# GRE Pascal Website Codex Update Package

This package is for updating the GRE Pascal Book website in Codex.

## User decision

Use the currently available chapter data as accepted/pass for website update.

Focus on:
- Chapter 3
- Chapter 4
- Chapter 5
- Chapter 6
- Chapter 7
- Chapter 8
- Chapter 9

Ignore for now:
- Chapter 1
- Chapter 2
- Appendix / Vocabulary Review

## Folder map

```text
accepted_chapters/
  chapter-03-text-completions/
  chapter-04-sentence-equivalence/
  chapter-05-logic-based-reading/
  chapter-06-verbal-practice-sets/
  chapter-07-mathematics-review/
  chapter-08-math-review-practice/
  chapter-09-quantitative-practice-sets/

codex/
  CODEX_IMPLEMENTATION_PROMPT.md
  WEBSITE_DATA_NORMALIZATION_NOTES.md

reports/
  PROJECT_STATUS_FOR_CODEX.md

source_packages/
  original/relevant ZIPs and handover references

source_assets/
  images.zip
```

## Data policy

- Treat the chapter files in `accepted_chapters/` as the source of truth for the next website update.
- Do not block integration because some data is draft-like.
- Render uncertain or placeholder items with a `Needs Review` badge instead of omitting them.
- Do not invent missing book content.
- Normalize schemas in the website code, but preserve original source files.

## Recommended Codex task

Open `codex/CODEX_IMPLEMENTATION_PROMPT.md` and follow it.
