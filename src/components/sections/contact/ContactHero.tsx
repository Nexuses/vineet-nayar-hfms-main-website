import { CONTACT_HERO } from '@/data/contact'

export function ContactHero() {
  return (
    <section className="contact-hero" id="hero">
      <div className="padding-global padding-section-huge">
        <div className="container-large contact-hero-grid">
          <div className="contact-hero-copy reveal">
            <p className="contact-eyebrow">{CONTACT_HERO.eyebrow}</p>
            <h1 className="contact-display">{CONTACT_HERO.heading}</h1>
            <p className="contact-lede">{CONTACT_HERO.body}</p>
            <a className="contact-btn magnetic" href={CONTACT_HERO.ctaHref}>
              {CONTACT_HERO.ctaLabel}
            </a>

            <div className="contact-details">
              {CONTACT_HERO.details.map((detail) => (
                <div key={detail.label} className="contact-detail">
                  <h3>{detail.label}</h3>
                  {'href' in detail ? (
                    <a href={detail.href}>{detail.value}</a>
                  ) : (
                    <p>{detail.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="contact-hero-media reveal">
            <img src={CONTACT_HERO.image.src} alt={CONTACT_HERO.image.alt} loading="eager" />
          </div>
        </div>
      </div>
    </section>
  )
}
