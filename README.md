# GRE Pascal Book Reader Patch

This patch turns `najiapanji-bagger/gre-book-pascal` into a complete page-by-page reader for the uploaded GRE Pascal Book scan.

## Contains

- `src/App.jsx` — replaces the small simulator with a full 239-page book reader.
- `public/images/page_001.jpg` ... `public/images/page_239.jpg` — all scanned page images.
- `scripts/verify-book-images.mjs` — checks that every page image exists before deploy.

## Apply to repo

From the repository root:

```bash
unzip gre-book-pascal-full-reader-patch.zip
cp -R gre-book-pascal-full-reader-patch/* .
node scripts/verify-book-images.mjs
npm install
npm run build

git add src/App.jsx public/images scripts/verify-book-images.mjs README.md
git commit -m "Add complete GRE Pascal Book reader"
git push origin main
```

## Cloudflare Pages / Hermes deploy

Use the existing Vite settings:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18+ or 20+

The reader loads page images from `/images/page_001.jpg` through `/images/page_239.jpg`.
