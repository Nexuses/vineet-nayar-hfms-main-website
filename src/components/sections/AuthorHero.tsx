import {
  AUTHOR_HERO_BODY,
  AUTHOR_HERO_HEADING,
  AUTHOR_HERO_QUOTE,
  AUTHOR_PORTRAIT_URL,
  AUTHOR_SIGNATURE_INVERTED_URL,
} from '../../data/authorHero'
import { ASSETS } from '../../data/site'
import { revealDelay } from '../../utils/reveal'

export function AuthorHero() {
  return (
    <section className="ah-hero post-scroll-reveal" id="author-hero" aria-labelledby="author-hero-heading">
      <div className="ah-hero-grid">
        <div className="ah-left">
          <h2 className="ah-headline reveal reveal-from-bottom" id="author-hero-heading">
            <span className="heading-lead">{AUTHOR_HERO_HEADING.titleLead}</span>
            <span className="hand-highlight">{AUTHOR_HERO_HEADING.titleHighlight}</span>
          </h2>

          <div className="ah-body reveal reveal-from-bottom" style={revealDelay(70)}>
            {AUTHOR_HERO_BODY.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="ah-quote reveal reveal-from-bottom" style={revealDelay(140)}>
            {AUTHOR_HERO_QUOTE}
          </p>

          <div className="ah-sig reveal reveal-from-bottom" style={revealDelay(180)}>
            <img
              className="ah-sig-img"
              src={AUTHOR_SIGNATURE_INVERTED_URL}
              alt="Vineet Nayar signature"
            />
          </div>
        </div>

        <div className="ah-right">
          <div className="ah-shape" aria-hidden="true" />
          <img
            className="ah-portrait reveal reveal-from-left"
            src={AUTHOR_PORTRAIT_URL}
            alt="Vineet Nayar on stage"
            loading="lazy"
            style={revealDelay(60)}
            onError={(event) => {
              event.currentTarget.src = ASSETS.avatar
            }}
          />
        </div>
      </div>
    </section>
  )
}
