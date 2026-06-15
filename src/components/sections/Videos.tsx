import { useEffect, useRef, useState } from 'react'
import { ASSETS, SITE } from '../../data/site'
import { AUTHOR_BIO, AUTHOR_QUOTE_LEAD, AUTHOR_QUOTE_TAIL, VIDEO_SECTION_LEDE, VIDEOS } from '../../data/videos'

export function Videos() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [featuredIndex, setFeaturedIndex] = useState(
    VIDEOS.findIndex((v) => v.featured) >= 0 ? VIDEOS.findIndex((v) => v.featured) : 0,
  )
  const [revealed, setRevealed] = useState(false)
  const defaultFeatured = useRef(featuredIndex)
  const mobileUI = useRef<MediaQueryList | null>(null)

  useEffect(() => {
    mobileUI.current = window.matchMedia('(max-width: 820px)')
  }, [])

  const isMobileUI = () => mobileUI.current?.matches ?? false

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRevealed(true)
      },
      { threshold: 0.05 },
    )
    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const grid = gridRef.current
    const onMouseLeave = () => {
      if (isMobileUI()) return
      setFeaturedIndex(defaultFeatured.current)
    }
    grid?.addEventListener('mouseleave', onMouseLeave)
    return () => grid?.removeEventListener('mouseleave', onMouseLeave)
  }, [])

  const handleCardClick = (index: number, event: React.MouseEvent) => {
    const card = VIDEOS[index]
    if (isMobileUI()) {
      if ((event.target as HTMLElement).closest('.play')) {
        event.stopPropagation()
        window.open(card.youtubeUrl, '_blank')
        return
      }
      setFeaturedIndex(index)
      return
    }
    window.open(card.youtubeUrl, '_blank')
  }

  const handleCardKeyDown = (index: number, event: React.KeyboardEvent) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    if (isMobileUI()) {
      setFeaturedIndex(index)
      return
    }
    window.open(VIDEOS[index].youtubeUrl, '_blank')
  }

  return (
    <>
      <section className="section video-author-section">
        <div className="wrap center">
          <h3 className="video-author-heading reveal">
            <span className="video-author-heading-lead">About</span>
            <span className="hand-highlight">the author</span>
          </h3>
          <p className="hero-quote reveal">
            {AUTHOR_QUOTE_LEAD}
            <br />
            {AUTHOR_QUOTE_TAIL}
          </p>
          <img className="author-avatar reveal" src={ASSETS.avatar} alt="Vineet Nayar" width={120} height={120} />
          <img className="hero-signature reveal" src={SITE.authorSignatureUrl} alt="Vineet Nayar signature" />
          <p className="lede reveal video-author-bio">{AUTHOR_BIO}</p>
        </div>
      </section>

      <section className="section video-section" id="videos">
        <div className="wrap center">
          <h2 className="display section-title video-watch-title reveal">
            Watch Vineet Nayar
          </h2>
          <p className="section-subtitle reveal">
            <span className="hand-highlight">in Action</span>
          </p>
          <p className="lede reveal">{VIDEO_SECTION_LEDE}</p>
        </div>

        <div className="wrap video-grid" ref={gridRef}>
        {VIDEOS.map((video, index) => (
          <article
            key={video.youtubeId}
            className={`video-card${index === featuredIndex ? ' featured' : ''} reveal${revealed ? ' on' : ''}`}
            tabIndex={0}
            role="button"
            data-youtube={video.youtubeUrl}
            onMouseEnter={() => {
              if (!isMobileUI()) setFeaturedIndex(index)
            }}
            onFocus={() => {
              if (!isMobileUI()) setFeaturedIndex(index)
            }}
            onClick={(e) => handleCardClick(index, e)}
            onKeyDown={(e) => handleCardKeyDown(index, e)}
          >
            <img src={video.thumbnail} alt={video.title} />
            <span className="play" aria-hidden="true">
              ▶
            </span>
            <div className="video-overlay">
              <b>{video.title}</b>
              <p>{video.description}</p>
            </div>
          </article>
        ))}
        </div>
      </section>
    </>
  )
}
