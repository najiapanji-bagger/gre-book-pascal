import React, { useEffect, useMemo, useState } from "react"
import {
  BookOpen,
  CheckCircle2,
  FileImage,
  Filter,
  ListChecks,
  Search,
  Sparkles,
} from "lucide-react"

const PAGE_COUNT = 239
const ALL = "all"
const pad = (value) => String(value).padStart(3, "0")
const imagePath = (page) => `/images/page_${pad(page)}.jpg`

const tabs = [
  { id: "read", label: "Read Book", icon: BookOpen },
  { id: "questions", label: "Practice Questions", icon: ListChecks },
  { id: "vocabulary", label: "Vocabulary", icon: Sparkles },
  { id: "images", label: "Original Pages", icon: FileImage },
  { id: "audit", label: "Coverage Audit", icon: CheckCircle2 },
]

function App() {
  const [activeTab, setActiveTab] = useState("read")
  const [data, setData] = useState({ pages: [], sections: [], questions: [], vocabulary: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    let cancelled = false
    async function loadBookData() {
      try {
        const [pages, sections, questions, vocabulary] = await Promise.all([
          fetchJson("/book-data/pages.json"),
          fetchJson("/book-data/sections.json"),
          fetchJson("/book-data/questions.json"),
          fetchJson("/book-data/vocabulary.json"),
        ])
        if (!cancelled) setData({ pages, sections, questions, vocabulary })
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    loadBookData()
    return () => {
      cancelled = true
    }
  }, [])

  const audit = useMemo(() => buildAudit(data), [data])

  return (
    <main className="min-h-screen bg-stone-50 text-zinc-950">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">GRE Pascal Book</p>
            <h1 className="mt-1 text-3xl font-bold tracking-normal">Text-first study companion</h1>
          </div>
          <nav className="flex flex-wrap gap-2" aria-label="Main tabs">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const selected = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-semibold transition ${
                    selected
                      ? "border-zinc-950 bg-zinc-950 text-white"
                      : "border-zinc-300 bg-white text-zinc-800 hover:border-emerald-700"
                  }`}
                >
                  <Icon size={17} aria-hidden="true" />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6">
        {loading ? <SystemMessage title="Loading book data" body="Reading generated OCR JSON files." /> : null}
        {!loading && error ? (
          <SystemMessage title="Book data missing" body={`Run npm run ocr, npm run build:data, then npm run audit:book. ${error}`} />
        ) : null}
        {!loading && !error ? (
          <>
            {activeTab === "read" ? <ReadBook pages={data.pages} sections={data.sections} /> : null}
            {activeTab === "questions" ? <PracticeQuestions questions={data.questions} sections={data.sections} /> : null}
            {activeTab === "vocabulary" ? <Vocabulary vocabulary={data.vocabulary} sections={data.sections} /> : null}
            {activeTab === "images" ? <OriginalPages sections={data.sections} /> : null}
            {activeTab === "audit" ? <CoverageAudit audit={audit} sections={data.sections} /> : null}
          </>
        ) : null}
      </div>
    </main>
  )
}

async function fetchJson(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`${url} returned ${response.status}`)
  return response.json()
}

function ReadBook({ pages, sections }) {
  const [query, setQuery] = useState("")
  const [section, setSection] = useState(ALL)
  const [pageFilter, setPageFilter] = useState("")

  const visiblePages = useMemo(() => {
    const needle = query.trim().toLowerCase()
    const requestedPage = Number.parseInt(pageFilter, 10)
    return pages.filter((page) => {
      if (section !== ALL && page.section !== section) return false
      if (requestedPage && page.page !== requestedPage) return false
      if (needle && !`${page.cleanText} ${page.section}`.toLowerCase().includes(needle)) return false
      return true
    })
  }, [pages, query, section, pageFilter])

  const grouped = groupBySection(visiblePages, sections)

  return (
    <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
      <FilterPanel title="Read Book">
        <SearchInput value={query} onChange={setQuery} placeholder="Search book text" />
        <SectionSelect sections={sections} value={section} onChange={setSection} />
        <TextInput label="Page" value={pageFilter} onChange={setPageFilter} placeholder="Any page" />
        <Metric label="Pages shown" value={visiblePages.length} />
      </FilterPanel>

      <section className="space-y-8">
        {grouped.map(({ title, items }) => (
          <div key={title} className="space-y-3">
            <div className="flex items-end justify-between gap-3 border-b border-zinc-200 pb-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Section</p>
                <h2 className="text-2xl font-bold">{title}</h2>
              </div>
              <span className="text-sm font-semibold text-zinc-500">{items.length} pages</span>
            </div>
            {items.map((page) => (
              <article key={page.page} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Page {page.page}</p>
                    <h3 className="text-lg font-bold">{page.section}</h3>
                  </div>
                  <a
                    className="inline-flex items-center gap-2 rounded-md border border-zinc-300 px-3 py-2 text-sm font-semibold text-zinc-800 hover:border-emerald-700"
                    href={page.image}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FileImage size={16} aria-hidden="true" />
                    View original page
                  </a>
                </div>
                <div className="select-text whitespace-pre-wrap text-[15px] leading-7 text-zinc-900">
                  <HighlightedText text={page.cleanText || "No OCR text was generated for this page."} query={query} />
                </div>
              </article>
            ))}
            {!items.length ? <EmptyState text="No pages match the current filters." /> : null}
          </div>
        ))}
      </section>
    </div>
  )
}

function PracticeQuestions({ questions, sections }) {
  const [query, setQuery] = useState("")
  const [section, setSection] = useState(ALL)
  const [type, setType] = useState(ALL)
  const [status, setStatus] = useState(ALL)
  const [pageFilter, setPageFilter] = useState("")
  const [revealed, setRevealed] = useState(() => new Set())

  const types = useMemo(() => unique(questions.map((question) => question.type)), [questions])
  const statuses = useMemo(() => unique(questions.map((question) => question.status)), [questions])

  const visibleQuestions = useMemo(() => {
    const needle = query.trim().toLowerCase()
    const requestedPage = Number.parseInt(pageFilter, 10)
    return questions.filter((question) => {
      if (section !== ALL && question.section !== section) return false
      if (type !== ALL && question.type !== type) return false
      if (status !== ALL && question.status !== status) return false
      if (requestedPage && question.page !== requestedPage) return false
      if (needle) {
        const haystack = `${question.prompt} ${question.options.map((option) => option.text).join(" ")} ${question.section}`.toLowerCase()
        if (!haystack.includes(needle)) return false
      }
      return true
    })
  }, [questions, query, section, type, status, pageFilter])

  function reveal(id) {
    setRevealed((current) => new Set([...current, id]))
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
      <FilterPanel title="Practice Questions">
        <SearchInput value={query} onChange={setQuery} placeholder="Search prompts" />
        <SectionSelect sections={sections} value={section} onChange={setSection} />
        <OptionSelect label="Type" value={type} onChange={setType} options={types} />
        <OptionSelect label="Status" value={status} onChange={setStatus} options={statuses} />
        <TextInput label="Page" value={pageFilter} onChange={setPageFilter} placeholder="Any page" />
        <Metric label="Questions shown" value={visibleQuestions.length} />
      </FilterPanel>

      <section className="space-y-4">
        {visibleQuestions.map((question) => {
          const isRevealed = revealed.has(question.id)
          return (
            <article key={question.id} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                    {question.section} · Page {question.page}
                  </p>
                  <h2 className="mt-1 text-lg font-bold">{question.id}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>{question.type}</Badge>
                  <Badge tone={question.answer ? "green" : "amber"}>{question.status}</Badge>
                </div>
              </div>

              <div className="select-text whitespace-pre-wrap text-[15px] leading-7 text-zinc-900">
                <HighlightedText text={question.prompt} query={query} />
              </div>

              {question.options.length ? (
                <div className="mt-4 grid gap-2">
                  {question.options.map((option, optionIndex) => (
                    <div key={`${question.id}-${option.label}-${optionIndex}`} className="grid grid-cols-[34px_1fr] gap-3 rounded-md border border-zinc-200 p-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-950 text-sm font-bold text-white">{option.label}</span>
                      <p className="select-text text-sm leading-6 text-zinc-900">{option.text}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => reveal(question.id)}
                  className="rounded-md bg-emerald-700 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
                >
                  Reveal answer
                </button>
                <a className="rounded-md border border-zinc-300 px-3 py-2 text-sm font-semibold" href={question.sourceImage} target="_blank" rel="noreferrer">
                  Source page image
                </a>
                {isRevealed ? (
                  <span className={`text-sm font-semibold ${question.answer ? "text-emerald-800" : "text-amber-700"}`}>
                    {question.answer ? `Answer: ${question.answer}` : "Answer needs review"}
                  </span>
                ) : null}
              </div>
            </article>
          )
        })}
        {!visibleQuestions.length ? <EmptyState text="No questions match the current filters." /> : null}
      </section>
    </div>
  )
}

function Vocabulary({ vocabulary }) {
  const [query, setQuery] = useState("")
  const [pageFilter, setPageFilter] = useState("")

  const visibleWords = useMemo(() => {
    const needle = query.trim().toLowerCase()
    const requestedPage = Number.parseInt(pageFilter, 10)
    return vocabulary.filter((item) => {
      if (requestedPage && item.page !== requestedPage) return false
      if (needle && !`${item.word} ${item.definition} ${item.synonyms.join(" ")}`.toLowerCase().includes(needle)) return false
      return true
    })
  }, [vocabulary, query, pageFilter])

  return (
    <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
      <FilterPanel title="Vocabulary">
        <SearchInput value={query} onChange={setQuery} placeholder="Search words" />
        <TextInput label="Page" value={pageFilter} onChange={setPageFilter} placeholder="Any page" />
        <Metric label="Words shown" value={visibleWords.length} />
      </FilterPanel>

      <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {visibleWords.map((item) => (
          <article key={`${item.word}-${item.page}`} className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-xl font-bold capitalize">{item.word}</h2>
              <Badge>p. {item.page}</Badge>
            </div>
            <dl className="mt-4 space-y-2 text-sm">
              <InfoRow label="Definition" value={item.definition || "Needs definition review"} />
              <InfoRow label="Synonyms" value={item.synonyms.length ? item.synonyms.join(", ") : "Needs synonym review"} />
              <InfoRow label="Status" value={item.status} />
            </dl>
          </article>
        ))}
        {!visibleWords.length ? <EmptyState text="No vocabulary entries match the current filters." /> : null}
      </section>
    </div>
  )
}

function OriginalPages({ sections }) {
  const [page, setPage] = useState(1)
  const [zoom, setZoom] = useState(78)
  const [section, setSection] = useState(ALL)

  const visiblePages = useMemo(() => {
    if (section === ALL) return [page]
    const selected = sections.find((item) => item.title === section)
    if (!selected) return [page]
    return range(selected.startPage, selected.endPage)
  }, [page, section, sections])

  function go(nextPage) {
    setPage(Math.min(PAGE_COUNT, Math.max(1, nextPage)))
    setSection(ALL)
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
      <FilterPanel title="Original Pages">
        <TextInput label="Page" value={String(page)} onChange={(value) => go(Number.parseInt(value, 10) || 1)} placeholder="1" />
        <SectionSelect sections={sections} value={section} onChange={setSection} />
        <label className="block text-sm font-semibold text-zinc-700">
          Zoom {zoom}%
          <input className="mt-2 w-full accent-emerald-700" type="range" min="45" max="130" value={zoom} onChange={(event) => setZoom(Number(event.target.value))} />
        </label>
        <div className="flex gap-2">
          <button type="button" className="flex-1 rounded-md border border-zinc-300 px-3 py-2 text-sm font-semibold" onClick={() => go(page - 1)}>Prev</button>
          <button type="button" className="flex-1 rounded-md border border-zinc-300 px-3 py-2 text-sm font-semibold" onClick={() => go(page + 1)}>Next</button>
        </div>
      </FilterPanel>

      <section className="space-y-4">
        {visiblePages.map((item) => (
          <article key={item} className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-bold">Original page {item}</h2>
              <a className="text-sm font-semibold text-emerald-800" href={imagePath(item)} target="_blank" rel="noreferrer">Open image</a>
            </div>
            <div className="overflow-auto rounded-md bg-zinc-100 p-3 text-center">
              <img
                src={imagePath(item)}
                alt={`GRE Pascal Book page ${item}`}
                loading="lazy"
                style={{ width: `${zoom}%` }}
                className="mx-auto h-auto max-w-none bg-white shadow"
              />
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

function CoverageAudit({ audit, sections }) {
  return (
    <div className="space-y-5">
      <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <AuditCard label="Total pages expected" value={audit.totalPagesExpected} />
        <AuditCard label="OCR pages generated" value={audit.ocrPagesGenerated} />
        <AuditCard label="Questions extracted" value={audit.questionsExtracted} />
        <AuditCard label="Vocabulary words extracted" value={audit.vocabularyWordsExtracted} />
        <AuditCard label="Questions with answers" value={audit.questionsWithAnswers} />
        <AuditCard label="Questions missing answers" value={audit.questionsMissingAnswers} />
        <AuditCard label="Pages missing OCR" value={audit.pagesMissingOcr.length} />
        <AuditCard label="Low-confidence pages" value={audit.pagesWithLowOcrConfidence.length} />
      </section>

      <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-bold">Section coverage</h2>
        <div className="mt-4 overflow-auto">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-200">
                <th className="py-2 pr-4">Section</th>
                <th className="py-2 pr-4">Pages</th>
                <th className="py-2 pr-4">OCR pages</th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section) => (
                <tr key={section.title} className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-semibold">{section.title}</td>
                  <td className="py-2 pr-4">{section.startPage}-{section.endPage}</td>
                  <td className="py-2 pr-4">{section.ocrPages}/{section.pageCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

function buildAudit({ pages, questions, vocabulary }) {
  const pagesMissingOcr = pages.filter((page) => page.status !== "ocr-complete").map((page) => page.page)
  const pagesWithLowOcrConfidence = pages.filter((page) => typeof page.confidence === "number" && page.confidence < 70).map((page) => page.page)
  return {
    totalPagesExpected: PAGE_COUNT,
    ocrPagesGenerated: pages.filter((page) => page.status === "ocr-complete").length,
    pagesMissingOcr,
    questionsExtracted: questions.length,
    questionsWithAnswers: questions.filter((question) => question.answer).length,
    questionsMissingAnswers: questions.filter((question) => !question.answer).length,
    vocabularyWordsExtracted: vocabulary.length,
    pagesWithLowOcrConfidence,
  }
}

function FilterPanel({ title, children }) {
  return (
    <aside className="h-fit rounded-lg border border-zinc-200 bg-white p-4 shadow-sm lg:sticky lg:top-4">
      <div className="mb-4 flex items-center gap-2">
        <Filter size={17} className="text-emerald-700" aria-hidden="true" />
        <h2 className="font-bold">{title}</h2>
      </div>
      <div className="space-y-4">{children}</div>
    </aside>
  )
}

function SearchInput({ value, onChange, placeholder }) {
  return (
    <label className="block text-sm font-semibold text-zinc-700">
      Search
      <div className="mt-2 flex items-center gap-2 rounded-md border border-zinc-300 px-3 py-2 focus-within:border-emerald-700">
        <Search size={16} className="text-zinc-500" aria-hidden="true" />
        <input className="min-w-0 flex-1 outline-none" value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} />
      </div>
    </label>
  )
}

function TextInput({ label, value, onChange, placeholder }) {
  return (
    <label className="block text-sm font-semibold text-zinc-700">
      {label}
      <input
        className="mt-2 w-full rounded-md border border-zinc-300 px-3 py-2 outline-none focus:border-emerald-700"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </label>
  )
}

function SectionSelect({ sections, value, onChange }) {
  return (
    <OptionSelect
      label="Section"
      value={value}
      onChange={onChange}
      options={sections.map((section) => section.title)}
    />
  )
}

function OptionSelect({ label, value, onChange, options }) {
  return (
    <label className="block text-sm font-semibold text-zinc-700">
      {label}
      <select
        className="mt-2 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 outline-none focus:border-emerald-700"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value={ALL}>All</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

function Metric({ label, value }) {
  return (
    <div className="rounded-md bg-zinc-100 p-3">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">{label}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
    </div>
  )
}

function AuditCard({ label, value }) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">{label}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </article>
  )
}

function Badge({ children, tone = "neutral" }) {
  const styles = {
    neutral: "border-zinc-300 bg-zinc-50 text-zinc-700",
    green: "border-emerald-200 bg-emerald-50 text-emerald-800",
    amber: "border-amber-200 bg-amber-50 text-amber-800",
  }
  return <span className={`rounded-md border px-2 py-1 text-xs font-bold ${styles[tone]}`}>{children}</span>
}

function InfoRow({ label, value }) {
  return (
    <div>
      <dt className="font-bold text-zinc-500">{label}</dt>
      <dd className="mt-1 text-zinc-900">{value}</dd>
    </div>
  )
}

function EmptyState({ text }) {
  return (
    <div className="rounded-lg border border-dashed border-zinc-300 bg-white p-8 text-center font-semibold text-zinc-500">
      {text}
    </div>
  )
}

function SystemMessage({ title, body }) {
  return (
    <section className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-amber-950">
      <h2 className="font-bold">{title}</h2>
      <p className="mt-2 text-sm">{body}</p>
    </section>
  )
}

function HighlightedText({ text, query }) {
  const needle = query.trim()
  if (!needle) return text
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const pieces = text.split(new RegExp(`(${escaped})`, "gi"))
  return pieces.map((piece, index) => (
    piece.toLowerCase() === needle.toLowerCase()
      ? <mark key={`${piece}-${index}`} className="bg-amber-200 px-1">{piece}</mark>
      : <React.Fragment key={`${piece}-${index}`}>{piece}</React.Fragment>
  ))
}

function groupBySection(pages, sections) {
  return sections.map((section) => ({
    title: section.title,
    items: pages.filter((page) => page.section === section.title),
  })).filter((group) => group.items.length)
}

function unique(values) {
  return [...new Set(values.filter(Boolean))].sort()
}

function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
}

export default App
