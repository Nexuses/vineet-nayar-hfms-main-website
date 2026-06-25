import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BOOK_AVAILABILITY } from '../../data/bookPageContent'
import { ASSETS } from '../../data/site'
import { resolveNavHref } from '../../utils/nav'

const HERO_QUOTE =
  'The greatest danger of the artificial intelligence (AI) age is not smarter machines. It is humans slowly losing belief in their own uniqueness.'

export function Hero() {
  const router = useRouter()
  const [entered, setEntered] = useState(false)
  const citiesHref = resolveNavHref(
    { href: '#cities-cards', sectionId: 'cities-cards' },
    router.pathname,
  )

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setEntered(true))
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className={`hero${entered ? ' hero-enter' : ''}`} data-hero>
      <div className="hero-content">
        <div className="hero-main">
          <h1 className="display">
            <span className="hero-line">
              <b>Why we choose</b>
            </span>
            <span className="hero-line">
              <b>
                <span className="hero-mark-wrap">
                  <img className="hero-mark" src={ASSETS.heroMark} alt="Humans First" />
                </span>
              </b>
            </span>
          </h1>

          <p className="hero-quote">{HERO_QUOTE}</p>
        </div>

        <div className="hero-actions">
          <a className="btn magnetic hero-register-btn" href={citiesHref} data-section-link="cities-cards">
            <span className="hero-register-btn-label">
              <span>Register to meet Vineet Nayar</span>
              <span>in your city</span>
            </span>
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
