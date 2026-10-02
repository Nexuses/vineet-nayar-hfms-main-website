import Head from 'next/head'
import Link from 'next/link'
import { getEventDayOfWeek } from '@/data/cities'
import { PARIS_PAGE, PARIS_SESSIONS } from '@/data/paris'

export function ParisPage() {
  return (
    <>
      <Head>
        <title>{PARIS_PAGE.metaTitle}</title>
        <meta name="description" content={PARIS_PAGE.metaDescription} />
      </Head>

      <main id="top" className="paris-page">
        <section className="paris-hero" aria-label="Vineet Nayar in Paris">
          <div className="paris-hero-media" aria-hidden="true">
            <img src={PARIS_PAGE.heroImage} alt="" />
          </div>
          <div className="paris-wrap">
            <Link href="/#cities-events" className="paris-back">
              <span aria-hidden="true">←</span>
              {PARIS_PAGE.backLabel}
            </Link>
            <p className="paris-eyebrow">{PARIS_PAGE.eyebrow}</p>
            <h1 className="paris-title">
              <span className="heading-lead">{PARIS_PAGE.title}</span>
              <span className="hand-highlight">{PARIS_PAGE.tagline}</span>
            </h1>
            <ul className="paris-meta">
              {PARIS_PAGE.meta.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="paris-lede">{PARIS_PAGE.lede}</p>
          </div>
        </section>

        <section className="section cities-section paris-sessions" aria-labelledby="paris-sessions-title">
          <div className="wrap">
            <div className="cities-head">
              <h2 className="display" id="paris-sessions-title">
                {PARIS_PAGE.sessionsTitleLead}
                <span className="hand-highlight">{PARIS_PAGE.sessionsTitleHighlight}</span>
              </h2>
            </div>

            <div className="city-cards">
              {PARIS_SESSIONS.map((session) => (
                <article key={session.id} className="city-card" data-session={session.id}>
                  <div className="city-card-img">
                    <img src={session.cardImage} alt={session.venue} loading="lazy" />
                    <div className="city-card-img-overlay">
                      <span className="city-card-name hand-highlight">{session.label}</span>
                    </div>
                  </div>
                  <div className="city-card-body">
                    <p className="city-card-date">
                      {getEventDayOfWeek(session.isoDate)} · {session.dateDisplay}
                    </p>
                    <p className="paris-session-time">{session.timeDisplay}</p>
                    <p className="city-card-venue">
                      <span className="city-card-venue-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                        </svg>
                      </span>
                      <span>{session.venue}</span>
                    </p>
                    <p className="city-card-theme">{session.theme}</p>
                    <a
                      className="city-card-register paris-map-link"
                      href={session.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${PARIS_PAGE.mapButtonLabel}: ${session.venue}`}
                    >
                      {PARIS_PAGE.mapButtonLabel}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
