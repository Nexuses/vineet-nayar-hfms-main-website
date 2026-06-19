import { useEffect } from 'react'

export function useHandHighlightFit() {
  useEffect(() => {
    const mobileHeadingQuery = window.matchMedia('(max-width: 820px)')

    function fitHandHighlights() {
      document.querySelectorAll('.hand-highlight').forEach((el) => {
        const htmlEl = el as HTMLElement
        htmlEl.style.fontSize = ''
        htmlEl.removeAttribute('data-fit-size')
      })

      if (!mobileHeadingQuery.matches) return

      document.querySelectorAll('main .hand-highlight').forEach((el) => {
        if (el.closest('.hf-panel-quote') || el.closest('.city-card-img-overlay')) return

        const htmlEl = el as HTMLElement
        const container = htmlEl.parentElement
        if (!container) return

        htmlEl.style.whiteSpace = 'nowrap'
        const maxWidth = container.clientWidth
        let fontSize = parseFloat(getComputedStyle(htmlEl).fontSize) || 25
        const minSize = 13

        while (htmlEl.scrollWidth > maxWidth && fontSize > minSize) {
          fontSize -= 0.5
          htmlEl.style.fontSize = `${fontSize}px`
        }

        htmlEl.dataset.fitSize = String(fontSize)
      })
    }

    window.addEventListener('resize', fitHandHighlights)
    mobileHeadingQuery.addEventListener('change', fitHandHighlights)
    if (document.fonts?.ready) {
      document.fonts.ready.then(fitHandHighlights)
    } else {
      fitHandHighlights()
    }
    window.addEventListener('load', fitHandHighlights)

    return () => {
      window.removeEventListener('resize', fitHandHighlights)
      mobileHeadingQuery.removeEventListener('change', fitHandHighlights)
      window.removeEventListener('load', fitHandHighlights)
    }
  }, [])
}
