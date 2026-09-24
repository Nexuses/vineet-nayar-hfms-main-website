import { useEffect, useState } from 'react'

const ROTATE_MS = 4200

interface EventRecapSlideshowProps {
  city: string
  images: string[]
}

export function EventRecapSlideshow({ city, images }: EventRecapSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, ROTATE_MS)

    return () => window.clearInterval(timer)
  }, [images.length])

  if (images.length === 0) return null

  return (
    <div className="event-recap-slideshow" aria-hidden="true">
      <div className="event-recap-slideshow-glow" />
      <div className="event-recap-slideshow-frame">
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`event-recap-slideshow-image${index === activeIndex ? ' is-active' : ''}`}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
      {images.length > 1 ? (
        <div className="event-recap-slideshow-dots">
          {images.map((src, index) => (
            <span
              key={`${src}-dot`}
              className={`event-recap-slideshow-dot${index === activeIndex ? ' is-active' : ''}`}
            />
          ))}
        </div>
      ) : null}
      <span className="sr-only">{city} event photographs</span>
    </div>
  )
}
