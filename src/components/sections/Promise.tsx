import { useRouter } from 'next/router'
import { ASSETS } from '../../data/site'
import { revealDelay } from '../../utils/reveal'
import { resolveNavHref } from '../../utils/nav'

export function Promise() {
  const router = useRouter()
  const citiesHref = resolveNavHref(
    { href: '#cities-cards', sectionId: 'cities-cards' },
    router.pathname,
  )

  return (
    <section className="promise post-scroll-reveal" id="promise">
      <video className="promise-video" autoPlay muted loop playsInline preload="auto">
        <source src={ASSETS.promiseVideo} type="video/mp4" />
      </video>
      <div className="promise-overlay" />
      <div className="wrap">
        <p className="eyebrow reveal reveal-from-bottom">The Humans First Promise</p>
        <h2 className="display reveal reveal-from-bottom promise-title" style={revealDelay(70)}>
          <span className="heading-lead">Help two people believe</span>
          <span className="hand-highlight">they are capable of more than they think.</span>
        </h2>
        <p className="reveal reveal-from-bottom" style={revealDelay(140)}>
          A student. A colleague. A child. A stranger. You do not have to tell them about the movement. You do not
          have to tell them about the book. Just help them see themselves a little differently.
        </p>
        <a
          className="btn reveal reveal-from-bottom magnetic"
          href={citiesHref}
          data-section-link="cities-cards"
          style={revealDelay(210)}
        >
          I accept the promise
        </a>
      </div>
    </section>
  )
}
