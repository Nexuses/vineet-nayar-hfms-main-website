import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'

interface ModalContextValue {
  joinOpen: boolean
  videoOpen: boolean
  videoSrc: string
  openJoin: () => void
  closeJoin: () => void
  openVideo: (src: string) => void
  closeVideo: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [joinOpen, setJoinOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)
  const [videoSrc, setVideoSrc] = useState('')

  const openJoin = useCallback(() => setJoinOpen(true), [])
  const closeJoin = useCallback(() => setJoinOpen(false), [])
  const openVideo = useCallback((src: string) => {
    setVideoSrc(src)
    setVideoOpen(true)
  }, [])
  const closeVideo = useCallback(() => {
    setVideoOpen(false)
    setVideoSrc('')
  }, [])

  return (
    <ModalContext.Provider
      value={{ joinOpen, videoOpen, videoSrc, openJoin, closeJoin, openVideo, closeVideo }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used within ModalProvider')
  return ctx
}
