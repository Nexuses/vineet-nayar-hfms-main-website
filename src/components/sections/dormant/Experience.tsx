import { useState } from 'react'
import { EXPERIENCE_RAIL } from '../../../data/experience'

export function Experience() {
  const [featuredIndex, setFeaturedIndex] = useState(
    EXPERIENCE_RAIL.findIndex((c) => c.featured) >= 0 ? EXPERIENCE_RAIL.findIndex((c) => c.featured) : 0,
  )

  return (
    <section className="section experience" id="experience">
      <div className="wrap center">
        <p className="eyebrow reveal">The live experience</p>
        <h2 className="display section-title reveal experience-title">
          <span className="heading-lead">Designed like a memory,</span>
          <span className="hand-highlight">not a meeting.</span>
        </h2>
        <p className="lede reveal">
          No panel clutter. No cold podium. No corporate theatre. Just a room, a question, a story, a wall, a promise,
          and the possibility that someone leaves believing in themselves again.
        </p>
      </div>
      <div
        className="wrap experience-rail"
        onMouseLeave={() => setFeaturedIndex(0)}
      >
        {EXPERIENCE_RAIL.map((card, index) => (
          <article
            key={card.title}
            className={`rail-card${index === featuredIndex ? ' featured' : ''} reveal`}
            data-rail-index={index}
            onMouseEnter={() => setFeaturedIndex(index)}
          >
            <div className="rail-content">
              <h5>{card.title}</h5>
              <p>{card.body}</p>
            </div>
            <div className="rail-image">
              <img className="rail-icon" src={card.icon} alt={card.title} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
