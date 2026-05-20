import React, { useMemo, useState } from "react"

const PAGE_COUNT = 239
const sections = [
  ["Cover", 1, 1],
  ["Table of Contents", 2, 3],
  ["Preface", 4, 8],
  ["Analytical Writing", 9, 19],
  ["TC + SE Introduction", 20, 40],
  ["Text Completions", 41, 60],
  ["Sentence Equivalence", 61, 71],
  ["Logic Based Reading Comprehension", 72, 79],
  ["Verbal Practice Sets", 80, 142],
  ["Mathematics Review", 143, 150],
  ["Mathematics Review Practice", 151, 169],
  ["Quantitative Practice Sets", 170, 223],
  ["Vocabulary Review", 224, 239],
]

const pad = (n) => String(n).padStart(3, "0")
const imagePath = (n) => `/images/page_${pad(n)}.jpg`
const pages = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i)
const clamp = (n) => Math.min(PAGE_COUNT, Math.max(1, Number.parseInt(n || 1, 10) || 1))

function pageSection(page) {
  return sections.find(([, start, end]) => page >= start && page <= end)?.[0] || "Book"
}

function App() {
  const [page, setPage] = useState(1)
  const [input, setInput] = useState("1")
  const [zoom, setZoom] = useState(78)
  const [mode, setMode] = useState("single")
  const [section, setSection] = useState("all")

  const visiblePages = useMemo(() => {
    if (section === "all") return pages(1, PAGE_COUNT)
    const item = sections[Number(section)]
    return pages(item[1], item[2])
  }, [section])

  function go(nextPage) {
    const safe = clamp(nextPage)
    setPage(safe)
    setInput(String(safe))
    setMode("single")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-400">GRE Pascal Book</p>
            <h1 className="mt-1 text-3xl font-bold">Complete Book Reader</h1>
            <p className="mt-1 text-sm text-slate-600">All {PAGE_COUNT} scanned pages, from page_001.jpg to page_239.jpg.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setMode("single")} className={`rounded-2xl px-4 py-2 text-sm font-bold ${mode === "single" ? "bg-slate-950 text-white" : "bg-slate-100"}`}>Single page</button>
            <button onClick={() => setMode("all")} className={`rounded-2xl px-4 py-2 text-sm font-bold ${mode === "all" ? "bg-slate-950 text-white" : "bg-slate-100"}`}>All pages</button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-6 md:grid-cols-[300px_1fr]">
        <aside className="space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-bold">Jump to page</h2>
            <form className="mt-3 flex gap-2" onSubmit={(e) => { e.preventDefault(); go(input) }}>
              <input value={input} onChange={(e) => setInput(e.target.value)} className="min-w-0 flex-1 rounded-2xl border border-slate-300 px-3 py-2" />
              <button className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-bold text-white">Go</button>
            </form>
            <div className="mt-3 flex gap-2">
              <button onClick={() => go(page - 1)} className="rounded-2xl border px-4 py-2 text-sm font-bold">Prev</button>
              <button onClick={() => go(page + 1)} className="rounded-2xl border px-4 py-2 text-sm font-bold">Next</button>
            </div>
            <label className="mt-4 block text-sm font-bold">Zoom {zoom}%<input type="range" min="45" max="130" value={zoom} onChange={(e) => setZoom(Number(e.target.value))} className="mt-2 w-full" /></label>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-bold">Sections</h2>
            <button onClick={() => { setSection("all"); setMode("all") }} className={`mt-3 w-full rounded-2xl border px-3 py-2 text-left text-sm font-bold ${section === "all" ? "bg-slate-950 text-white" : "bg-white"}`}>All pages · 1–239</button>
            <div className="mt-2 space-y-2">
              {sections.map(([title, start, end], index) => (
                <button key={title} onClick={() => { setSection(String(index)); go(start) }} className={`w-full rounded-2xl border px-3 py-2 text-left text-sm ${section === String(index) ? "bg-slate-950 text-white" : "bg-white"}`}>
                  <b>{title}</b><br /><span className="text-xs opacity-70">Pages {start}–{end}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        <section className="space-y-5">
          {mode === "single" ? <BookPage page={page} zoom={zoom} /> : visiblePages.map((p) => <BookPage key={p} page={p} zoom={zoom} />)}
        </section>
      </div>
    </main>
  )
}

function BookPage({ page, zoom }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Page {page}</p><h2 className="font-bold">{pageSection(page)}</h2></div>
        <a className="rounded-full border px-3 py-1 text-xs font-bold" href={imagePath(page)} target="_blank" rel="noreferrer">Open image</a>
      </div>
      <div className="overflow-auto rounded-3xl bg-slate-100 p-3 text-center">
        <img src={imagePath(page)} alt={`GRE Pascal Book page ${page}`} loading="lazy" style={{ width: `${zoom}%` }} className="mx-auto h-auto max-w-none rounded-2xl bg-white shadow-lg" />
      </div>
    </article>
  )
}

export default App
