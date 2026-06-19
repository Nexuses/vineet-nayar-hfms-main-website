import { type RefObject, useEffect, useRef } from 'react'

type FlipbookControlsArgs = {
  viewportRef: RefObject<HTMLElement | null>
  totalPages: number
  getCurrentPage: () => number
  goNext: () => void
  goPrevious: () => void
}

const MOBILE_BREAKPOINT = 820
const SWIPE_MIN_DISTANCE = 45
const SCROLL_LOCK_MS = 1000

export function useFlipbookControls({
  viewportRef,
  totalPages,
  getCurrentPage,
  goNext,
  goPrevious,
}: FlipbookControlsArgs) {
  const lockUntilRef = useRef(0)

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const isMobile = () => window.innerWidth <= MOBILE_BREAKPOINT
    const canFlip = () => Date.now() > lockUntilRef.current
    const lock = () => {
      lockUntilRef.current = Date.now() + SCROLL_LOCK_MS
    }

    const isInViewport = () => {
      const rect = viewport.getBoundingClientRect()
      return rect.top < window.innerHeight && rect.bottom > 0
    }

    const onWheel = (event: WheelEvent) => {
      if (isMobile() || !isInViewport()) return

      if (!canFlip()) {
        event.preventDefault()
        return
      }

      const page = getCurrentPage()
      const movingForward = event.deltaY > 0
      const movingBack = event.deltaY < 0

      if ((movingForward && page < totalPages) || (movingBack && page > 1)) {
        event.preventDefault()
        lock()
        if (movingForward) goNext()
        else goPrevious()
      }
    }

    let touchStartY = 0
    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0
    }

    const onTouchEnd = (event: TouchEvent) => {
      if (!isMobile() || !canFlip()) return
      const endY = event.changedTouches[0]?.clientY ?? 0
      const deltaY = touchStartY - endY
      if (Math.abs(deltaY) < SWIPE_MIN_DISTANCE) return

      const page = getCurrentPage()
      if (deltaY > 0 && page < totalPages) {
        lock()
        goNext()
      } else if (deltaY < 0 && page > 1) {
        lock()
        goPrevious()
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    viewport.addEventListener('touchstart', onTouchStart, { passive: true })
    viewport.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('wheel', onWheel)
      viewport.removeEventListener('touchstart', onTouchStart)
      viewport.removeEventListener('touchend', onTouchEnd)
    }
  }, [getCurrentPage, goNext, goPrevious, totalPages, viewportRef])
}
