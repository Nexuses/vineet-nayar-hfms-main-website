import type { CSSProperties } from 'react'

/** Sections that follow the book scroll experience — reveal only once scrolled into view. */
export const POST_BOOK_REVEAL_SELECTORS = [
  '#cities-cards',
  '#cities-events',
  '#wall',
  '#author-hero',
  '#mosaic',
  '.promise',
] as const

export function isPostBookRevealSection(element: Element | null | undefined): boolean {
  if (!element) return false
  return POST_BOOK_REVEAL_SELECTORS.some((selector) => element.matches(selector))
}

export function revealDelay(ms: number): CSSProperties {
  return { '--reveal-delay': `${ms}ms` } as CSSProperties
}

export function revealStagger(index: number, step = 100, base = 0): CSSProperties {
  return revealDelay(base + index * step)
}
