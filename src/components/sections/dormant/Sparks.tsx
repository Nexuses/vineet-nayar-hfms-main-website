import { useState } from 'react'
import { SPARKS } from '../../../data/sparks'

export function Sparks() {
  const [openIndex, setOpenIndex] = useState(SPARKS.findIndex((s) => s.open) ?? 0)

  return (
    <section className="section sparks" id="sparks">
      <div className="wrap center">
        <p className="eyebrow reveal">Inside the book</p>
        <h2 className="display section-title reveal">Five sparks from thirty.</h2>
        <p className="lede reveal">Tap a spark. Let it open. Each is a small argument for human agency.</p>
      </div>
      <div className="wrap spark-list" data-accordion>
        {SPARKS.map((spark, index) => (
          <article key={spark.number} className={`spark-item${index === openIndex ? ' open' : ''} reveal`}>
            <button
              type="button"
              onClick={() => {
                setOpenIndex(index === openIndex ? -1 : index)
              }}
            >
              <h4>{spark.title}</h4>
              <b>{spark.number}</b>
            </button>
            <div className="spark-body">
              <p>{spark.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
