import fs from 'node:fs'
import path from 'node:path'

const dir = path.join(process.cwd(), 'public', 'images')
const missing = []
for (let i = 1; i <= 239; i += 1) {
  const name = `page_${String(i).padStart(3, '0')}.jpg`
  if (!fs.existsSync(path.join(dir, name))) missing.push(name)
}

if (missing.length) {
  console.error(`Missing ${missing.length} page image(s):`)
  console.error(missing.join('\n'))
  process.exit(1)
}

console.log('OK: 239 GRE Pascal Book page images found in public/images.')
