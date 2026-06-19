import { useEffect } from 'react'

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value))
const smootherStep = (value: number) => value * value * value * (value * (value * 6 - 15) + 10)

export function useScrollProgress(movementEnabled: boolean) {
  useEffect(() => {
    const root = document.documentElement
    const topbar = document.querySelector('.topbar')
    const hero = document.querySelector('[data-hero]')
    const movement = movementEnabled ? document.querySelector('[data-movement]') : null

    function updateScroll() {
      const max = document.body.scrollHeight - window.innerHeight
      root.style.setProperty('--scroll', max ? ((window.scrollY / max) * 100).toFixed(2) : '0')
      topbar?.classList.toggle('compact', window.scrollY > 80)

      if (hero) {
        const rect = hero.getBoundingClientRect()
        const progress = clamp(-rect.top / Math.max(1, rect.height - window.innerHeight), 0, 1)
        root.style.setProperty('--scrollHero', progress.toFixed(3))
      }

      if (movement) {
        const rect = movement.getBoundingClientRect()
        const progress = clamp(-rect.top / Math.max(1, rect.height - window.innerHeight), 0, 1)
        root.style.setProperty('--pMovement', smootherStep(progress).toFixed(3))
      }
    }

    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('resize', updateScroll)
    updateScroll()

    return () => {
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
    }
  }, [movementEnabled])
}
