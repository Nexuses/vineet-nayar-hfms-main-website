import { useState } from 'react'
import { FAQ_ITEMS } from '../../../data/faq'

export function Faq() {
  const [openIndex, setOpenIndex] = useState(FAQ_ITEMS.findIndex((f) => f.open) ?? 0)

  return (
    <section className="section faq" id="faq" data-faq>
      <div className="wrap faq-grid">
        <div className="faq-copy">
          <p className="eyebrow reveal">FAQ</p>
          <h3 className="display section-title reveal faq-title">
            <span className="heading-lead">Before you join</span>
            <span className="hand-highlight">the room.</span>
          </h3>
          <p className="lede reveal">A few clear answers, so the experience can stay simple, human and open.</p>
        </div>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => (
            <article key={item.question} className={`faq-item${index === openIndex ? ' open' : ''} reveal tilt-card`}>
              <button
                type="button"
                aria-expanded={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              >
                <span>{item.question}</span>
                <b>+</b>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
