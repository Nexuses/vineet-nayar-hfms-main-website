import { useEffect, useRef } from 'react'
import { useModal } from '../../context/ModalContext'

export function VideoModal() {
  const { videoOpen, videoSrc, videoYoutubeId, videoTitle, closeVideo } = useModal()
  const playerRef = useRef<HTMLVideoElement>(null)
  const sourceRef = useRef<HTMLSourceElement>(null)

  useEffect(() => {
    document.body.classList.toggle('modal-open', videoOpen)
    return () => document.body.classList.remove('modal-open')
  }, [videoOpen])

  useEffect(() => {
    if (!videoOpen || !videoSrc || videoYoutubeId) return
    const player = playerRef.current
    const source = sourceRef.current
    if (!player || !source) return
    source.src = videoSrc
    player.load()
    player.play().catch(() => {})
  }, [videoOpen, videoSrc, videoYoutubeId])

  useEffect(() => {
    if (videoOpen) return
    const player = playerRef.current
    const source = sourceRef.current
    if (player) player.pause()
    if (source) source.src = ''
    player?.load()
  }, [videoOpen])

  useEffect(() => {
    if (!videoOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeVideo()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [videoOpen, closeVideo])

  const handleBackdrop = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) closeVideo()
  }

  return (
    <div
      className={`modal video-modal${videoOpen ? ' open' : ''}`}
      id="videoModal"
      aria-hidden={!videoOpen}
      onClick={handleBackdrop}
    >
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="videoModalTitle">
        <button className="modal-close" type="button" aria-label="Close video" onClick={closeVideo}>
          ×
        </button>
        <h2 id="videoModalTitle" className="sr-only">
          {videoTitle}
        </h2>
        {videoYoutubeId ? (
          <div className="video-modal-embed">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoYoutubeId}?autoplay=1&rel=0`}
              title={videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : (
          <video id="videoModalPlayer" ref={playerRef} controls playsInline>
            {videoSrc ? <source id="videoModalSource" ref={sourceRef} src={videoSrc} type="video/mp4" /> : null}
            Your browser does not support embedded videos.
          </video>
        )}
      </div>
    </div>
  )
}
