import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'

interface ModalContextValue {
  joinOpen: boolean
  contactOpen: boolean
  videoOpen: boolean
  videoSrc: string
  videoYoutubeId: string
  videoTitle: string
  openJoin: () => void
  closeJoin: () => void
  openContact: () => void
  closeContact: () => void
  openVideo: (src: string) => void
  openYoutubeVideo: (youtubeId: string, title?: string) => void
  closeVideo: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [joinOpen, setJoinOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)
  const [videoSrc, setVideoSrc] = useState('')
  const [videoYoutubeId, setVideoYoutubeId] = useState('')
  const [videoTitle, setVideoTitle] = useState('')

  const openJoin = useCallback(() => setJoinOpen(true), [])
  const closeJoin = useCallback(() => setJoinOpen(false), [])
  const openContact = useCallback(() => setContactOpen(true), [])
  const closeContact = useCallback(() => setContactOpen(false), [])
  const openVideo = useCallback((src: string) => {
    setVideoYoutubeId('')
    setVideoTitle('Video player')
    setVideoSrc(src)
    setVideoOpen(true)
  }, [])
  const openYoutubeVideo = useCallback((youtubeId: string, title = 'Video player') => {
    setVideoSrc('')
    setVideoYoutubeId(youtubeId)
    setVideoTitle(title)
    setVideoOpen(true)
  }, [])
  const closeVideo = useCallback(() => {
    setVideoOpen(false)
    setVideoSrc('')
    setVideoYoutubeId('')
    setVideoTitle('')
  }, [])

  return (
    <ModalContext.Provider
      value={{
        joinOpen,
        contactOpen,
        videoOpen,
        videoSrc,
        videoYoutubeId,
        videoTitle,
        openJoin,
        closeJoin,
        openContact,
        closeContact,
        openVideo,
        openYoutubeVideo,
        closeVideo,
      }}
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
