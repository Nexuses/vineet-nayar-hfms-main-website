import { useCallback, useEffect, useState } from 'react'

interface EventRecapGalleryProps {
  city: string
  images: string[]
}

export function EventRecapGallery({ city, images }: EventRecapGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = useCallback(() => setActiveIndex(null), [])

  const showPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || images.length === 0) return current
      return (current - 1 + images.length) % images.length
    })
  }, [images.length])

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || images.length === 0) return current
      return (current + 1) % images.length
    })
  }, [images.length])

  useEffect(() => {
    if (activeIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') showPrev()
      if (event.key === 'ArrowRight') showNext()
    }

    document.body.classList.add('modal-open')
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeIndex, close, showNext, showPrev])

  if (images.length === 0) return null

  const activeSrc = activeIndex === null ? null : images[activeIndex]

  return (
    <>
      <div className="event-recap-gallery">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            className="event-recap-gallery-item"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open ${city} event photo ${index + 1}`}
          >
            <img src={src} alt={`${city} event glimpse ${index + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      {activeSrc ? (
        <div className="event-recap-lightbox" role="dialog" aria-modal="true" aria-label={`${city} event photo`} onClick={close}>
          <button className="event-recap-lightbox-close" type="button" aria-label="Close photo" onClick={close}>
            ×
          </button>
          {images.length > 1 ? (
            <button
              className="event-recap-lightbox-nav event-recap-lightbox-prev"
              type="button"
              aria-label="Previous photo"
              onClick={(event) => {
                event.stopPropagation()
                showPrev()
              }}
            >
              ‹
            </button>
          ) : null}
          <img
            src={activeSrc}
            alt={`${city} event glimpse ${(activeIndex ?? 0) + 1}`}
            onClick={(event) => event.stopPropagation()}
          />
          {images.length > 1 ? (
            <button
              className="event-recap-lightbox-nav event-recap-lightbox-next"
              type="button"
              aria-label="Next photo"
              onClick={(event) => {
                event.stopPropagation()
                showNext()
              }}
            >
              ›
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  )
}
