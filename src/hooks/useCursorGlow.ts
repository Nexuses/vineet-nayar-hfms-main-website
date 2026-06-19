import { useEffect } from 'react'

export function useCursorGlow() {
  useEffect(() => {
    const root = document.documentElement
    const nav = document.querySelector('[data-nav]')

    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty('--cursor-x', `${event.clientX}px`)
      root.style.setProperty('--cursor-y', `${event.clientY}px`)

      if (nav) {
        const rect = nav.getBoundingClientRect()
        root.style.setProperty('--nav-glow-x', `${event.clientX - rect.left}px`)
        root.style.setProperty('--nav-glow-y', `${event.clientY - rect.top}px`)
      }
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [])
}
