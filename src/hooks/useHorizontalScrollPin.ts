import { useEffect, type RefObject } from 'react'

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value))

function getHeaderOffset() {
  if (typeof window === 'undefined') return 76
  const value = getComputedStyle(document.documentElement).getPropertyValue('--header').trim()
  const parsed = parseFloat(value)
  return Number.isFinite(parsed) ? parsed : 76
}

export function useHorizontalScrollPin(
  sectionRef: RefObject<HTMLElement | null>,
  trackRef: RefObject<HTMLElement | null>,
  stickyRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    const sticky = stickyRef.current
    if (!section || !track || !sticky) return

    const mobileQuery = window.matchMedia('(max-width: 820px)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    let maxTranslate = 0

    function isFallbackMode() {
      return mobileQuery.matches || reducedMotion.matches
    }

    function applyFallbackMode(active: boolean) {
      section!.classList.toggle('is-fallback', active)
      sticky!.classList.remove('is-pinned', 'is-passed', 'is-ended')
      track!.style.transform = ''
      if (active) {
        section!.style.height = ''
        sticky!.style.height = ''
      }
    }

    function measure() {
      if (isFallbackMode()) {
        applyFallbackMode(true)
        return
      }

      applyFallbackMode(false)

      const stickyTop = getHeaderOffset()
      const viewportH = window.innerHeight
      const stickyHeight = viewportH - stickyTop
      maxTranslate = Math.max(0, track!.scrollWidth - window.innerWidth)

      sticky!.style.height = `${stickyHeight}px`
      section!.style.height = `${stickyHeight + maxTranslate}px`

      updatePinState()
    }

    function updatePinState() {
      if (isFallbackMode()) return

      const stickyTop = getHeaderOffset()
      const stageHeight = window.innerHeight - stickyTop
      const rect = section!.getBoundingClientRect()
      const scrollable = section!.offsetHeight - stageHeight
      const pinRelease = stickyTop + stageHeight
      const passed = rect.bottom <= 0
      const beforePin = rect.top > stickyTop
      const pinning = !passed && !beforePin && rect.bottom > pinRelease

      sticky!.classList.toggle('is-passed', passed)
      sticky!.classList.toggle('is-pinned', pinning)
      sticky!.classList.toggle('is-ended', !passed && !beforePin && !pinning)

      if (!passed && !beforePin && !pinning) {
        sticky!.style.top = `${maxTranslate}px`
      } else {
        sticky!.style.top = ''
      }

      let progress = 0
      if (passed) {
        progress = 1
      } else if (beforePin) {
        progress = 0
      } else if (pinning) {
        progress = scrollable > 0 ? clamp((stickyTop - rect.top) / scrollable, 0, 1) : 0
      } else {
        progress = 1
      }

      if (maxTranslate > 0) {
        track!.style.transform = `translate3d(${-progress * maxTranslate}px, 0, 0)`
      } else {
        track!.style.transform = ''
      }
    }

    function onScroll() {
      if (!isFallbackMode()) {
        updatePinState()
      }
    }

    function onModeChange() {
      measure()
    }

    const resizeObserver = new ResizeObserver(() => {
      measure()
    })
    resizeObserver.observe(track)

    measure()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onModeChange)
    mobileQuery.addEventListener('change', onModeChange)
    reducedMotion.addEventListener('change', onModeChange)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onModeChange)
      mobileQuery.removeEventListener('change', onModeChange)
      reducedMotion.removeEventListener('change', onModeChange)
      section.style.height = ''
      sticky.style.height = ''
      sticky.style.top = ''
      track.style.transform = ''
      sticky.classList.remove('is-pinned', 'is-passed', 'is-ended')
      section.classList.remove('is-fallback')
    }
  }, [sectionRef, trackRef, stickyRef])
}
