import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const turnjs = path.join(root, 'public', 'turnjs')
const magazine = path.join(turnjs, 'samples', 'magazine')
const output = path.join(root, 'flipbook-demo.HTML')

const read = (filePath) => fs.readFileSync(filePath, 'utf8')

function toDataUri(filePath) {
  const ext = path.extname(filePath).slice(1).toLowerCase()
  const mime =
    ext === 'gif' ? 'image/gif' : ext === 'png' ? 'image/png' : 'application/octet-stream'
  const base64 = fs.readFileSync(filePath).toString('base64')
  return `data:${mime};base64,${base64}`
}

function inlineCssSprites(css) {
  const pics = path.join(magazine, 'pics')
  const spriteMap = {
    'url(../pics/loader.gif)': `url(${toDataUri(path.join(pics, 'loader.gif'))})`,
    'url(../pics/arrows.png)': `url(${toDataUri(path.join(pics, 'arrows.png'))})`,
    'url(../pics/zoom-icons.png)': `url(${toDataUri(path.join(pics, 'zoom-icons.png'))})`,
  }

  let result = css
  for (const [from, to] of Object.entries(spriteMap)) {
    result = result.split(from).join(to)
  }
  return result
}

function adaptMagazineJs(source) {
  let js = source

  // Remove relative asset base; standalone file uses full hyperlink URLs.
  js = js.replace(
    /var BOOK_ASSET_BASE = '[^']*';\s*\n/,
    '',
  )
  js = js.replace(
    /var PAGE_SOURCES = \{[\s\S]*?\};\s*\n/,
    '',
  )
  js = js.replace(
    /function getPageSrc\(page\) \{\s*return BOOK_ASSET_BASE \+ PAGE_SOURCES\[page\];\s*\}/,
    'function getPageSrc(page) {\n\treturn PAGE_IMAGES[page];\n}',
  )

  // Slider-only helpers not used in standalone demo.
  js = js.replace(/\/\/ Number of views in a flipbook[\s\S]*?function moveBar[\s\S]*?\}\s*\n/, '')
  js = js.replace(/function setPreview[\s\S]*?\}\s*\n/, '')

  return js
}

const IMAGE_CONFIG = `/*
 * Book page image hyperlinks.
 * Replace IMAGE_ORIGIN with your site URL when sharing this file (e.g. https://yoursite.com).
 * When hosted on the same domain as /assets/figma/, leave IMAGE_ORIGIN empty.
 */
var IMAGE_ORIGIN = (function() {
\tif (window.location.protocol === 'file:') {
\t\treturn 'https://example.com';
\t}
\treturn '';
})();

var PAGE_IMAGES = {
\t1: IMAGE_ORIGIN + '/assets/figma/book-cover.png',
\t2: IMAGE_ORIGIN + '/assets/figma/book-content-1.png',
\t3: IMAGE_ORIGIN + '/assets/figma/book-content-1-1.png',
\t4: IMAGE_ORIGIN + '/assets/figma/book-content-2.png',
\t5: IMAGE_ORIGIN + '/assets/figma/book-content-2-2.png',
\t6: IMAGE_ORIGIN + '/assets/figma/book-content-3.png',
\t7: IMAGE_ORIGIN + '/assets/figma/book-content-3-3.png',
\t8: IMAGE_ORIGIN + '/assets/figma/book-content-4.png',
\t9: IMAGE_ORIGIN + '/assets/figma/book-content-4-4.png'
};
`

const LOAD_APP = read(path.join(magazine, 'index.html'))
  .match(/function loadApp\(\)[\s\S]*?enableScrollFlip\(\);\s*\n\}/)[0]

const ZOOM_ICON_HANDLERS = read(path.join(magazine, 'index.html'))
  .match(/\$\('\.zoom-icon'\)\.bind\('mouseover'[\s\S]*?\}\);\s*\n/)[0]

const jquery = read(path.join(turnjs, 'extras', 'jquery.min.1.7.js'))
const hash = read(path.join(turnjs, 'lib', 'hash.js'))
const turn = read(path.join(turnjs, 'lib', 'turn.js'))
const zoom = read(path.join(turnjs, 'lib', 'zoom.min.js'))
const magazineCss = inlineCssSprites(read(path.join(magazine, 'css', 'magazine.css')))
const magazineJs = adaptMagazineJs(read(path.join(magazine, 'js', 'magazine.js')))

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Humans First — Flipbook Demo</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
${magazineCss}
</style>
</head>
<body>

<div id="canvas">

<div class="zoom-icon zoom-icon-in"></div>

<div class="magazine-viewport">
\t<div class="container">
\t\t<div class="magazine">
\t\t\t<div ignore="1" class="next-button"></div>
\t\t\t<div ignore="1" class="previous-button"></div>
\t\t</div>
\t</div>
</div>

<div class="thumbnails">
\t<div>
\t\t<ul>
\t\t\t<li class="i">
\t\t\t\t<img src="" data-page="1" width="65" height="100" class="page-1">
\t\t\t\t<span>Cover</span>
\t\t\t</li>
\t\t\t<li class="d">
\t\t\t\t<img src="" data-page="2" width="65" height="100" class="page-2">
\t\t\t\t<img src="" data-page="3" width="65" height="100" class="page-3">
\t\t\t\t<span>1</span>
\t\t\t</li>
\t\t\t<li class="d">
\t\t\t\t<img src="" data-page="4" width="65" height="100" class="page-4">
\t\t\t\t<img src="" data-page="5" width="65" height="100" class="page-5">
\t\t\t\t<span>2</span>
\t\t\t</li>
\t\t\t<li class="d">
\t\t\t\t<img src="" data-page="6" width="65" height="100" class="page-6">
\t\t\t\t<img src="" data-page="7" width="65" height="100" class="page-7">
\t\t\t\t<span>3</span>
\t\t\t</li>
\t\t\t<li class="d">
\t\t\t\t<img src="" data-page="8" width="65" height="100" class="page-8">
\t\t\t\t<img src="" data-page="9" width="65" height="100" class="page-9">
\t\t\t\t<span>4</span>
\t\t\t</li>
\t\t</ul>
\t</div>
</div>

</div>

<script>
${jquery}
</script>
<script>
${hash}
</script>
<script>
${turn}
</script>
<script>
${zoom}
</script>
<script>
${IMAGE_CONFIG}

${magazineJs}

function applyThumbnailUrls() {
\tfor (var page = 1; page <= 9; page++) {
\t\t$('.thumbnails .page-' + page).attr('src', PAGE_IMAGES[page]);
\t}
}

${LOAD_APP}

${ZOOM_ICON_HANDLERS}

$('#canvas').hide();
applyThumbnailUrls();
loadApp();
</script>

</body>
</html>
`

fs.writeFileSync(output, html, 'utf8')

const sizeKb = Math.round(fs.statSync(output).size / 1024)
console.log(`Wrote ${output} (${sizeKb} KB)`)
