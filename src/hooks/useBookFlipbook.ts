import { useEffect, type RefObject } from 'react'
import {
  BOOK_HEIGHT,
  BOOK_WIDTH,
  FLIPBOOK_PAGE_IMAGES,
  FLIPBOOK_PAGES,
} from '../data/flipbookPages'

type TurnInstance = {
  turn: (...args: unknown[]) => unknown
  width: () => number
  height: () => number
  css: (props: Record<string, string | number>) => TurnInstance
  html: (content: string) => TurnInstance
  find: (selector: string) => TurnInstance
  appendTo: (target: TurnInstance) => TurnInstance
  attr: (name: string, value?: string) => TurnInstance | string
  mousedown: (handler: (e: Event) => void) => TurnInstance
  on: (event: string, handler: () => void) => TurnInstance
  load: (handler: () => void) => TurnInstance
  remove: () => void
}

type JQueryStatic = {
  (el: HTMLElement): TurnInstance
  (html: string): TurnInstance
}

function getJQuery(): JQueryStatic {
  const w = window as Window & { jQuery?: JQueryStatic }
  if (!w.jQuery) {
    throw new Error('jQuery is not loaded')
  }
  return w.jQuery
}

function calculateBound(d: {
  width: number
  height: number
  boundWidth: number
  boundHeight: number
}) {
  const bound = { width: d.width, height: d.height }

  if (bound.width > d.boundWidth || bound.height > d.boundHeight) {
    const rel = bound.width / bound.height

    if (d.boundWidth / rel > d.boundHeight && d.boundHeight * rel <= d.boundWidth) {
      bound.width = Math.round(d.boundHeight * rel)
      bound.height = d.boundHeight
    } else {
      bound.width = d.boundWidth
      bound.height = Math.round(d.boundWidth / rel)
    }
  }

  return bound
}

function loadPage(page: number, pageElement: TurnInstance) {
  const $ = getJQuery()
  const img = $('<img />')

  img.mousedown((e: Event) => e.preventDefault())
  img.load(() => {
    img.css({ width: '100%', height: '100%' })
    img.appendTo(pageElement)
    pageElement.find('.hf-flipbook-loader').remove()
  })
  img.attr('src', FLIPBOOK_PAGE_IMAGES[page])
}

function addPage(page: number, book: TurnInstance) {
  const $ = getJQuery()
  const element = $('<div />')

  if (book.turn('addPage', element, page)) {
    element.html('<div class="hf-flipbook-gradient"></div><div class="hf-flipbook-loader"></div>')
    loadPage(page, element)
  }
}

type UseBookFlipbookArgs = {
  viewportRef: RefObject<HTMLDivElement | null>
  magazineRef: RefObject<HTMLDivElement | null>
  apiRef: RefObject<BookFlipbookApi | null>
}

export type BookFlipbookApi = {
  setPage: (page: number, animate?: boolean) => void
  isReady: () => boolean
  resize: () => void
}

export function useBookFlipbook({ viewportRef, magazineRef, apiRef }: UseBookFlipbookArgs) {
  useEffect(() => {
    const viewport = viewportRef.current
    const magazineEl = magazineRef.current
    if (!viewport || !magazineEl) return

    let destroyed = false
    let $magazine: TurnInstance | null = null
    let ready = false
    let resizeObserver: ResizeObserver | null = null

    const viewportEl = viewport
    const magazineElement = magazineEl

    const resize = () => {
      if (!$magazine || !ready || !$magazine.turn('is')) return

      const width = viewportEl.clientWidth
      const height = viewportEl.clientHeight
      if (width === 0 || height === 0) return

      const options = $magazine.turn('options') as { width: number; height: number }
      const bound = calculateBound({
        width: options.width,
        height: options.height,
        boundWidth: width,
        boundHeight: height,
      })

      if (bound.width % 2 !== 0) bound.width -= 1

      $magazine.turn('size', bound.width, bound.height)
      $magazine.css({ top: -bound.height / 2, left: -bound.width / 2 })
      $magazine.turn('center')
    }

    const setPage = (page: number, animate = false) => {
      if (!$magazine || !ready || !$magazine.turn('is')) return

      const target = Math.max(1, Math.min(FLIPBOOK_PAGES, Math.round(page)))
      const current = $magazine.turn('page') as number
      if (current === target) return

      $magazine.turn('stop')
      $magazine.turn('options', { duration: animate ? 720 : 0 })
      $magazine.turn('page', target)
    }

    apiRef.current = {
      setPage,
      isReady: () => ready,
      resize,
    }

    async function init() {
      await import('turn.js/node_modules/jquery')
      await import('turn.js')

      if (destroyed) return

      const $ = getJQuery()
      $magazine = $(magazineElement)

      const tryInit = () => {
        if (destroyed || !$magazine) return

        if ($magazine.width() === 0 || $magazine.height() === 0) {
          window.setTimeout(tryInit, 16)
          return
        }

        $magazine.turn({
          width: BOOK_WIDTH,
          height: BOOK_HEIGHT,
          duration: 0,
          acceleration: true,
          gradients: true,
          autoCenter: true,
          elevation: 50,
          pages: FLIPBOOK_PAGES,
          when: {
            missing(_event: unknown, pages: number[]) {
              for (let i = 0; i < pages.length; i++) {
                addPage(pages[i], $magazine!)
              }
            },
          },
        })

        ready = true
        resize()
        $magazine.turn('page', 1)
      }

      tryInit()
    }

    init().catch(console.error)

    resizeObserver = new ResizeObserver(() => resize())
    resizeObserver.observe(viewportEl)

    return () => {
      destroyed = true
      resizeObserver?.disconnect()
      if ($magazine?.turn('is')) {
        $magazine.turn('destroy')
      }
      ready = false
      apiRef.current = null
    }
  }, [apiRef, magazineRef, viewportRef])
}
