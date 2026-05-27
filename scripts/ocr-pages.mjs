import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"

const PAGE_COUNT = 239
const root = process.cwd()
const imagesDir = path.join(root, "public", "images")
const outputDir = path.join(root, "book-ocr")

function pad(page) {
  return String(page).padStart(3, "0")
}

function assertTesseract() {
  const result = spawnSync("tesseract", ["--version"], { encoding: "utf8" })
  if (result.error && result.error.code === "ENOENT") {
    console.error("Install OCR engine first: brew install tesseract")
    process.exit(1)
  }
  if (result.status !== 0) {
    console.error("Install OCR engine first: brew install tesseract")
    process.exit(1)
  }
}

assertTesseract()
fs.mkdirSync(outputDir, { recursive: true })

let generated = 0
const missing = []
const failed = []

for (let page = 1; page <= PAGE_COUNT; page += 1) {
  const name = `page_${pad(page)}.jpg`
  const imagePath = path.join(imagesDir, name)
  const outPath = path.join(outputDir, `page_${pad(page)}.txt`)

  if (!fs.existsSync(imagePath)) {
    missing.push(name)
    continue
  }

  process.stdout.write(`OCR ${name}... `)
  const result = spawnSync(
    "tesseract",
    [imagePath, "stdout", "--psm", "6"],
    { encoding: "utf8", maxBuffer: 1024 * 1024 * 20 },
  )

  if (result.status !== 0) {
    failed.push({ page, stderr: result.stderr.trim() })
    process.stdout.write("failed\n")
    continue
  }

  fs.writeFileSync(outPath, result.stdout, "utf8")
  generated += 1
  process.stdout.write("done\n")
}

if (missing.length) {
  console.error(`Missing ${missing.length} image(s): ${missing.join(", ")}`)
}

if (failed.length) {
  console.error(`OCR failed for ${failed.length} page(s):`)
  for (const item of failed) {
    console.error(`page_${pad(item.page)}: ${item.stderr}`)
  }
  process.exit(1)
}

if (missing.length) {
  process.exit(1)
}

console.log(`OK: generated OCR text for ${generated}/${PAGE_COUNT} pages in book-ocr.`)
