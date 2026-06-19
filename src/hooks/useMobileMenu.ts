import { useCallback, useEffect, useState } from 'react'
import { useModal } from '../context/ModalContext'

export function useMobileMenu() {
  const [open, setOpen] = useState(false)
  const { joinOpen, videoOpen } = useModal()

  const setBodyLock = useCallback(() => {
    const anyOpen = open || joinOpen || videoOpen
    document.body.classList.toggle('modal-open', anyOpen)
  }, [open, joinOpen, videoOpen])

  useEffect(() => {
    setBodyLock()
  }, [setBodyLock])

  const openMenu = useCallback(() => setOpen(true), [])
  const closeMenu = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [closeMenu])

  return { open, openMenu, closeMenu }
}
