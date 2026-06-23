import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const outDir = path.join(root, 'public', 'assets', 'books')
const base = 'https://vineet-nayar-books-page.vercel.app'

const assets = [
  { url: `${base}/books-hero.png`, file: 'books-hero.png' },
  { url: `${base}/Mirror-Mirror.png`, file: 'mirror-mirror.png' },
  { url: `${base}/Trust-Through-Transparency.png`, file: 'trust-through-transparency.png' },
  { url: `${base}/Inverting-the-Pyramid.png`, file: 'inverting-the-pyramid.png' },
  { url: `${base}/Recasting-the-office-of-the-CEO.png`, file: 'recasting-the-office-of-the-ceo.png' },
  { url: `${base}/Forbes.png`, file: 'forbes.png' },
  { url: `${base}/FP.png`, file: 'fp.png' },
  { url: `${base}/Fortune.png`, file: 'fortune.png' },
  { url: `${base}/50.png`, file: 'thinkers50.png' },
  { url: `${base}/Havard.png`, file: 'hbr.png' },
  { url: `${base}/HCL.png`, file: 'hcl.png' },
  { url: `${base}/HEC.png`, file: 'hec.png' },
  { url: `${base}/Brandon.png`, file: 'brandon.png' },
  { url: `${base}/Brookings.png`, file: 'brookings.png' },
  { url: `${base}/CXO.png`, file: 'cxo.png' },
  { url: `${base}/France.png`, file: 'france.png' },
  { url: `${base}/assets/figma/book-cta-portrait.png`, file: 'book-cta-portrait.png' },
]

await mkdir(outDir, { recursive: true })

for (const asset of assets) {
  const response = await fetch(asset.url)
  if (!response.ok) {
    throw new Error(`Failed to download ${asset.url}: ${response.status}`)
  }
  const buffer = Buffer.from(await response.arrayBuffer())
  const target = path.join(outDir, asset.file)
  await writeFile(target, buffer)
  console.log(`Saved ${asset.file}`)
}

console.log(`Done. ${assets.length} files in public/assets/books/`)
