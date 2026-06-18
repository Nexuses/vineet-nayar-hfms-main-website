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

function mosaicVideo(youtubeId: string, label: string): MosaicPhoto {
  return {
    src: `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`,
    alt: `Watch ${label} on YouTube`,
    href: `https://www.youtube.com/watch?v=${youtubeId}`,
  }
}

/** Grid order: column 1–6, top tile then bottom tile per column */
export const MOSAIC_COLS: MosaicPhoto[][] = [
  [
    mosaicVideo('cCdu67s_C5E', 'Possibility'),
    mosaicVideo('nswk8_V4tOs', 'Humans First conversation'),
  ],
  [
    mosaicVideo('EW8lk860HPA', 'Leadership'),
    mosaicVideo('SV5VJektDaE', 'Humans First conversation'),
  ],
  [
    mosaicVideo('Oe-_ABzkZ5M', 'Humans First conversation'),
    mosaicVideo('YQDT9F4lQsg', 'Humans First conversation'),
  ],
  [
    mosaicVideo('9x0AHyG-ke0', 'Curiosity'),
    mosaicVideo('7lDx1MG2rt8', 'Humans First conversation'),
  ],
  [
    mosaicVideo('mUquDhri3dg', 'Humans First conversation'),
    mosaicVideo('9W4kmHzK2K4', 'Humans First conversation'),
  ],
  [
    mosaicVideo('TrUBJPhTkGs', 'Humans First conversation'),
    mosaicVideo('ORkKbA6JstE', 'Humans First conversation'),
  ],
]
