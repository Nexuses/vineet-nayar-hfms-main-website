export const FLIPBOOK_PAGES = 9
export const FLIPBOOK_SPREADS = 4
export const FLIPBOOK_CONTENT_PAGES = 8

export const BOOK_PAGE_WIDTH = 1650
export const BOOK_PAGE_HEIGHT = 2550
export const BOOK_WIDTH = BOOK_PAGE_WIDTH * 2
export const BOOK_HEIGHT = BOOK_PAGE_HEIGHT

export const FLIPBOOK_PAGE_IMAGES: Record<number, string> = {
  1: '/assets/figma/book-cover.png',
  2: '/assets/figma/book-content-1.png',
  3: '/assets/figma/book-content-1-1.png',
  4: '/assets/figma/book-content-2.png',
  5: '/assets/figma/book-content-2-2.png',
  6: '/assets/figma/book-content-3.png',
  7: '/assets/figma/book-content-3-3.png',
  8: '/assets/figma/book-content-4.png',
  9: '/assets/figma/book-content-4-4.png',
}

export function flipbookPageForSpread(spreadIndex: number, side: 'left' | 'right' = 'left') {
  const base = 2 + spreadIndex * 2
  return side === 'right' ? base + 1 : base
}
