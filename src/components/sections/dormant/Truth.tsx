import { useState } from 'react'
import { TRUTH_PANELS } from '../../../data/truth'

export function Truth() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="section truth" id="truth">
      <div className="wrap truth-grid">
        <div className="truth-copy">
          <p className="eyebrow reveal">The uneasy truth</p>
          <h2 className="display section-title reveal">
            People are not
            <br />
            afraid of AI.
          </h2>
          <p className="section-subtitle reveal">
            <span className="hand-highlight">They are afraid of becoming invisible.</span>
          </p>
        </div>
        <div className="truth-panels" data-panels>
          {TRUTH_PANELS.map((panel, index) => (
            <article
              key={panel.number}
              className={`truth-panel reveal${index === activeIndex ? ' active' : ''}`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <span>{panel.number}</span>
              <h5>{panel.title}</h5>
              <p>{panel.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
