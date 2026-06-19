export interface MosaicPhoto {
  src: string
  alt: string
  href: string
}

export const MOSAIC_HEADING = {
  titleLead: 'Humans First Conversations',
  titleHighlight: 'by Vineet Nayar',
  lede: 'See why thousands have walked away from his talks with a renewed belief in human potential.',
} as const

function mosaicThumb(index: number) {
  return `/assets/figma/yt${index}.png`
}

function mosaicVideo(youtubeId: string, label: string, thumbIndex: number): MosaicPhoto {
  return {
    src: mosaicThumb(thumbIndex),
    alt: `Watch ${label} on YouTube`,
    href: `https://www.youtube.com/watch?v=${youtubeId}`,
  }
}

/** Grid order: column 1–6, top tile then bottom tile per column */
export const MOSAIC_COLS: MosaicPhoto[][] = [
  [
    mosaicVideo('cCdu67s_C5E', 'Possibility', 1),
    mosaicVideo('nswk8_V4tOs', 'Humans First conversation', 7),
  ],
  [
    mosaicVideo('EW8lk860HPA', 'Leadership', 2),
    mosaicVideo('SV5VJektDaE', 'Humans First conversation', 8),
  ],
  [
    mosaicVideo('Oe-_ABzkZ5M', 'Humans First conversation', 3),
    mosaicVideo('YQDT9F4lQsg', 'Humans First conversation', 9),
  ],
  [
    mosaicVideo('9x0AHyG-ke0', 'Curiosity', 4),
    mosaicVideo('7lDx1MG2rt8', 'Humans First conversation', 10),
  ],
  [
    mosaicVideo('mUquDhri3dg', 'Humans First conversation', 5),
    mosaicVideo('9W4kmHzK2K4', 'Humans First conversation', 11),
  ],
  [
    mosaicVideo('TrUBJPhTkGs', 'Humans First conversation', 6),
    mosaicVideo('ORkKbA6JstE', 'Humans First conversation', 12),
  ],
]
