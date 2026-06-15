import { useEffect } from 'react'

export function useTiltCard() {
  useEffect(() => {
    const items = document.querySelectorAll('.truth-panel, .city-preview, .faq-item')

    const handlers = new Map<
      Element,
      { move: (e: MouseEvent) => void; leave: () => void }
    >()

    items.forEach((item) => {
      item.classList.add('tilt-card')
      const el = item as HTMLElement
      const move = (event: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5
        el.style.setProperty('--tilt-x', `${x * 4}deg`)
        el.style.setProperty('--tilt-y', `${y * -4}deg`)
      }
      const leave = () => {
        el.style.removeProperty('--tilt-x')
        el.style.removeProperty('--tilt-y')
      }
      handlers.set(item, { move, leave })
      el.addEventListener('mousemove', move)
      el.addEventListener('mouseleave', leave)
    })

    return () => {
      handlers.forEach(({ move, leave }, item) => {
        const el = item as HTMLElement
        el.removeEventListener('mousemove', move)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])
}
