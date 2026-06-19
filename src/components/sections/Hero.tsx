import type { CSSProperties } from 'react'
import { useRouter } from 'next/router'
import { BOOK_AVAILABILITY } from '../../data/bookPageContent'
import { ASSETS } from '../../data/site'
import { resolveNavHref } from '../../utils/nav'

const HERO_QUOTE =
  'The greatest danger of the artificial intelligence (AI) age is not smarter machines. It is humans slowly losing belief in their own uniqueness.'

export function Hero() {
  const router = useRouter()
  const citiesHref = resolveNavHref(
    { href: '#cities-cards', sectionId: 'cities-cards' },
    router.pathname,
  )

  return (
    <section className="hero" data-hero>
      <div className="hero-content">
        <div className="hero-main">
          <h1 className="display">
            <span>
              <b>Why we choose</b>
            </span>
            <span>
              <b>
                <img className="hero-mark" src={ASSETS.heroMark} alt="Humans First" />
              </b>
            </span>
          </h1>

          <p className="hero-quote reveal reveal-from-bottom">{HERO_QUOTE}</p>
        </div>

        <div className="hero-actions reveal reveal-from-bottom" style={{ '--reveal-delay': '120ms' } as CSSProperties}>
          <a className="btn magnetic" href={citiesHref} data-section-link="cities-cards">
            Register for your city
          </a>
          <a
            className="btn secondary magnetic"
            href={BOOK_AVAILABILITY.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Now on Amazon
          </a>
        </div>
      </div>
    </section>
  )
}
