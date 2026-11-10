import { useEffect, useRef, useState, type CSSProperties } from 'react'
import {
  TESTIMONIALS_HEADING,
  TESTIMONIAL_ROWS,
  type Testimonial,
  type TestimonialRow,
} from '../../data/testimonials'
import { revealDelay, revealStagger } from '../../utils/reveal'

function TestimonialCard({ item }: { item: Testimonial }) {
  const quoteRef = useRef<HTMLQuoteElement>(null)
  const [showScrollHint, setShowScrollHint] = useState(false)

  useEffect(() => {
    const el = quoteRef.current
    if (!el) return

    const update = () => {
      const overflow = el.scrollHeight > el.clientHeight + 1
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2
      setShowScrollHint(overflow && !atBottom)
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    el.addEventListener('scroll', update, { passive: true })

    return () => {
      observer.disconnect()
      el.removeEventListener('scroll', update)
    }
  }, [item.quote])

  return (
    <figure className="tm-card">
      <span className="tm-quote-mark" aria-hidden="true">
        &ldquo;
      </span>
      <div className={`tm-quote-wrap${showScrollHint ? ' is-scrollable' : ''}`}>
        <blockquote
          ref={quoteRef}
          className="tm-quote"
          tabIndex={showScrollHint ? 0 : undefined}
          aria-label={showScrollHint ? `Testimonial from ${item.name}, scroll for more` : undefined}
        >
          {item.quote}
        </blockquote>
        {showScrollHint ? (
          <span className="tm-quote-scroll-hint" aria-hidden="true">
            <span className="tm-quote-scroll-fade" />
            <span className="tm-quote-scroll-cue">
              <span className="tm-quote-scroll-chevron" />
            </span>
          </span>
        ) : null}
      </div>
      <figcaption className="tm-person">
        <span className="tm-avatar" aria-hidden="true">
          {item.initials}
        </span>
        <span className="tm-person-meta">
          <span className="tm-name">{item.name}</span>
        </span>
      </figcaption>
    </figure>
  )
}

function TestimonialTrack({ row }: { row: TestimonialRow }) {
  const group = row.items.map((item) => <TestimonialCard key={item.id} item={item} />)

  return (
    <div className="tm-row">
      <div
        className={`tm-track${row.direction === 'right' ? ' tm-track--reverse' : ''}`}
        style={{ '--tm-duration': row.speed } as CSSProperties}
      >
        <div className="tm-group">{group}</div>
        {/* Duplicate group keeps the loop seamless. */}
        <div className="tm-group" aria-hidden="true">
          {group}
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="tm-section post-scroll-reveal" id="testimonials" aria-label="Testimonials">
      <span className="tm-glow tm-glow--left" aria-hidden="true" />
      <span className="tm-glow tm-glow--right" aria-hidden="true" />

      <div className="tm-head">
        <h2 className="display reveal reveal-from-bottom">
          <span className="heading-lead">{TESTIMONIALS_HEADING.titleLead}</span>
          <span className="hand-highlight">{TESTIMONIALS_HEADING.titleHighlight}</span>
        </h2>
        <p className="lede reveal reveal-from-bottom" style={revealDelay(80)}>
          {TESTIMONIALS_HEADING.lede}
        </p>
      </div>

      <div className="tm-rows">
        {TESTIMONIAL_ROWS.map((row, index) => (
          <div
            key={row.id}
            className="tm-row-reveal reveal reveal-from-bottom"
            style={revealStagger(index, 70, 60)}
          >
            <TestimonialTrack row={row} />
          </div>
        ))}
      </div>
    </section>
  )
}
