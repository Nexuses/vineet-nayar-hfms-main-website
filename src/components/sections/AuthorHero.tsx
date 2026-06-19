import {
  AUTHOR_CREDENTIALS,
  AUTHOR_HERO_BODY,
  AUTHOR_HERO_HEADING,
  AUTHOR_HERO_QUOTE,
  AUTHOR_PORTRAIT_URL,
  AUTHOR_SIGNATURE_INVERTED_URL,
  type AuthorCredentialIcon,
} from '../../data/authorHero'
import { ASSETS } from '../../data/site'
import { revealDelay } from '../../utils/reveal'

function CredentialIcon({ icon }: { icon: AuthorCredentialIcon }) {
  switch (icon) {
    case 'person':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        </svg>
      )
    case 'book':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 19V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13" />
          <path d="M4 19h16M4 19a2 2 0 0 1-2-2V8" />
        </svg>
      )
    case 'audience':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    case 'star':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
  }
}

export function AuthorHero() {
  return (
    <section className="ah-hero post-scroll-reveal" id="author-hero" aria-labelledby="author-hero-heading">
      <div className="ah-hero-grid">
        <div className="ah-left">
          <h2 className="ah-headline reveal reveal-from-bottom" id="author-hero-heading">
            <span className="heading-lead">{AUTHOR_HERO_HEADING.titleLead}</span>
            <span className="hand-highlight">{AUTHOR_HERO_HEADING.titleHighlight}</span>
          </h2>

          <div className="ah-body reveal reveal-from-bottom" style={revealDelay(140)}>
            {AUTHOR_HERO_BODY.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="ah-quote reveal reveal-from-bottom" style={revealDelay(280)}>
            {AUTHOR_HERO_QUOTE}
          </p>

          <div className="ah-sig reveal reveal-from-bottom" style={revealDelay(360)}>
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
            style={revealDelay(120)}
            onError={(event) => {
              event.currentTarget.src = ASSETS.avatar
            }}
          />
        </div>
      </div>

      <div className="ah-cred-bar reveal reveal-from-bottom" style={revealDelay(440)}>
        {AUTHOR_CREDENTIALS.map((credential) => (
          <div key={credential.subtitle} className="ah-cred-item">
            <div className="ah-cred-icon" aria-hidden="true">
              <CredentialIcon icon={credential.icon} />
            </div>
            <div className="ah-cred-text">
              {credential.stat ? <div className="ah-cred-num">{credential.stat}</div> : null}
              <div className="ah-cred-label">
                {credential.title ? <strong>{credential.title}</strong> : null}
                {credential.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
