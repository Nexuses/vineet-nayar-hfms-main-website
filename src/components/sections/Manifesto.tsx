import { useState } from 'react'
import { MANIFESTO_LINES } from '../../data/manifesto'

export function Manifesto() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="section manifesto" id="manifesto">
      <div className="wrap manifesto-wrap">
        <p className="eyebrow reveal">This is not a book launch</p>
        <h2 className="display reveal manifesto-title">
          <span className="heading-lead">What we refuse to give up</span>
          <span className="hand-highlight">in the age of AI.</span>
        </h2>
        <div className="manifesto-lines" data-manifesto>
          {MANIFESTO_LINES.map((line, index) => (
            <button
              key={line.title}
              type="button"
              className={`manifesto-line reveal${index === activeIndex ? ' active' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
            >
              <h4>{line.title}</h4>
              <em>{line.subtitle}</em>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
