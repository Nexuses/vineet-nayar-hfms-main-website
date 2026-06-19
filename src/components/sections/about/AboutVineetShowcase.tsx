import { useRef } from 'react'
import { ABOUT_VINEET_SHOWCASE } from '@/data/aboutVineet'
import { useHorizontalScrollPin } from '@/hooks/useHorizontalScrollPin'

export function AboutVineetShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useHorizontalScrollPin(sectionRef, trackRef, stickyRef)

  return (
    <section
      className="about-vineet-showcase"
      id="about-vineet-showcase"
      aria-label="Highlights showcase"
      ref={sectionRef}
    >
      <div className="about-vineet-showcase-sticky" ref={stickyRef}>
        <div className="about-vineet-showcase-track" ref={trackRef}>
          {ABOUT_VINEET_SHOWCASE.map((card) => (
            <article
              key={card.id}
              className={`about-vineet-card about-vineet-card--${card.tone} reveal`}
            >
              <img className="about-vineet-card-image" src={card.image} alt="" aria-hidden="true" />
              <div className="about-vineet-card-overlay" aria-hidden="true" />
              <div className="about-vineet-card-content">
                <span className="about-vineet-card-category">{card.category}</span>
                <h2 className="about-vineet-card-title">{card.title}</h2>
                <p className="about-vineet-card-body">{card.body}</p>
                <a className="about-vineet-card-cta" href="#">
                  {card.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
