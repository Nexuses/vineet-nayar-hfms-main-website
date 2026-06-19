import { useEffect, useRef, useState } from 'react'
import { CITY_EVENTS, CITY_EVENTS_HEADING } from '../../data/cityEvents'
import { useModal } from '../../context/ModalContext'
import { revealDelay } from '../../utils/reveal'

const SCROLL_IDLE_MS = 150
const TAP_MOVE_THRESHOLD = 12

export function CityEvents() {
  const { openJoin } = useModal()
  const [activeIndex, setActiveIndex] = useState(0)
  const isScrollingRef = useRef(false)
  const scrollTimerRef = useRef<number | undefined>(undefined)
  const prefersHoverRef = useRef(true)
  const touchStartRef = useRef({ x: 0, y: 0 })
  const touchHandledRef = useRef(false)

  useEffect(() => {
    prefersHoverRef.current = window.matchMedia('(hover: hover) and (pointer: fine)').matches

    const onScroll = () => {
      isScrollingRef.current = true
      window.clearTimeout(scrollTimerRef.current)
      scrollTimerRef.current = window.setTimeout(() => {
        isScrollingRef.current = false
      }, SCROLL_IDLE_MS)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.clearTimeout(scrollTimerRef.current)
    }
  }, [])

  const activate = (index: number) => {
    setActiveIndex(index)
  }

  const handleMouseEnter = (index: number) => {
    if (!prefersHoverRef.current || isScrollingRef.current) return
    activate(index)
  }

  const handleCardKeyDown = (index: number, event: React.KeyboardEvent) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    activate(index)
  }

  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0]
    if (!touch) return
    touchStartRef.current = { x: touch.clientX, y: touch.clientY }
  }

  const handleTouchEnd = (index: number, event: React.TouchEvent) => {
    const touch = event.changedTouches[0]
    if (!touch) return

    const dx = Math.abs(touch.clientX - touchStartRef.current.x)
    const dy = Math.abs(touch.clientY - touchStartRef.current.y)
    if (dx > TAP_MOVE_THRESHOLD || dy > TAP_MOVE_THRESHOLD) return

    event.preventDefault()
    touchHandledRef.current = true
    window.setTimeout(() => {
      touchHandledRef.current = false
    }, 400)
    activate(index)
  }

  const handleClick = (index: number, event: React.MouseEvent) => {
    if (touchHandledRef.current) {
      event.preventDefault()
      return
    }
    activate(index)
  }

  return (
    <section className="ev-section post-scroll-reveal" id="cities-events">
      <div className="ev-inner">
        <div className="ev-head">
          <h2 className="display reveal reveal-from-bottom">
            {CITY_EVENTS_HEADING.titleLead}
            <span className="hand-highlight">{CITY_EVENTS_HEADING.titleHighlight}</span>
          </h2>
          <p className="lede ev-head-lede reveal reveal-from-bottom" style={revealDelay(40)}>
            {CITY_EVENTS_HEADING.lede}
          </p>
        </div>

        <div className="ev-grid reveal reveal-from-bottom" id="evGrid" style={revealDelay(30)}>
          {CITY_EVENTS.map((event, index) => (
            <div
              key={event.id}
              className={`ev-card${index === activeIndex ? ' active' : ''}${event.isOpen ? '' : ' is-coming-soon'}`}
              data-idx={index}
              role="button"
              tabIndex={0}
              aria-label={event.ariaLabel}
              onMouseEnter={() => handleMouseEnter(index)}
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => handleTouchEnd(index, e)}
              onClick={(e) => handleClick(index, e)}
              onKeyDown={(e) => handleCardKeyDown(index, e)}
            >
              <div className="ev-bg" style={{ backgroundImage: `url('${event.image}')` }} />
              <div className="ev-color-layer" style={{ background: event.colorLayer }} />
              <div className="ev-city-label-wrap" aria-hidden="true">
                <span className="ev-city-label">{event.label}</span>
              </div>
              <div className="ev-overlay">
                <span className={`ev-badge${event.isOpen ? '' : ' is-muted'}`}>{event.badge}</span>
                <div className="ev-overlay-city">{event.overlayCity}</div>
                <div className="ev-overlay-meta">
                  <span className="ev-meta-item">
                    <span className="ev-meta-dot" aria-hidden="true" />
                    {event.date}
                  </span>
                  <span className="ev-meta-item">
                    <span className="ev-meta-dot" aria-hidden="true" />
                    {event.time}
                  </span>
                  <span className="ev-meta-item">
                    <span className="ev-meta-dot" aria-hidden="true" />
                    {event.entry}
                  </span>
                </div>
                <p className="ev-overlay-desc">{event.description}</p>
                {event.isOpen ? (
                  <button
                    className="ev-register-btn"
                    type="button"
                    data-city-select={event.registerCity}
                    onClick={(e) => {
                      e.stopPropagation()
                      openJoin()
                    }}
                  >
                    Register Now &rarr;
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="ev-dots reveal reveal-from-bottom" id="evDots" style={revealDelay(60)}>
          {CITY_EVENTS.map((event, index) => (
            <button
              key={event.id}
              className={`ev-dot${index === activeIndex ? ' active' : ''}`}
              type="button"
              data-idx={index}
              aria-label={event.dotLabel}
              onClick={() => activate(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
