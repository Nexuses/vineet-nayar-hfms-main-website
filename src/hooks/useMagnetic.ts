import { useEffect } from 'react'

export function useMagnetic() {
  useEffect(() => {
    const buttons = document.querySelectorAll('.magnetic')

    const handlers = new Map<
      Element,
      { move: (e: MouseEvent) => void; leave: () => void }
    >()

    buttons.forEach((button) => {
      const el = button as HTMLElement
      const move = (event: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const x = event.clientX - rect.left - rect.width / 2
        const y = event.clientY - rect.top - rect.height / 2
        el.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`
      }
      const leave = () => {
        el.style.transform = ''
      }
      handlers.set(button, { move, leave })
      el.addEventListener('mousemove', move)
      el.addEventListener('mouseleave', leave)
    })

    return () => {
      handlers.forEach(({ move, leave }, button) => {
        const el = button as HTMLElement
        el.removeEventListener('mousemove', move)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])
}
