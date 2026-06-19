import { ABOUT_VINEET_HERO } from '@/data/aboutVineet'

export function AboutVineetHero() {
  return (
    <section className="about-vineet-hero" aria-label="About Vineet Nayar">
      <div className="about-vineet-hero-inner wrap">
        <p className="eyebrow reveal">{ABOUT_VINEET_HERO.eyebrow}</p>
        <h1 className="display about-vineet-hero-title reveal">
          <span className="heading-lead">{ABOUT_VINEET_HERO.headlineLead}</span>
          <span className="hand-highlight">{ABOUT_VINEET_HERO.headlineHighlight}</span>
        </h1>
        <p className="about-vineet-hero-subline lede reveal">{ABOUT_VINEET_HERO.subline}</p>
        <div className="about-vineet-hero-actions reveal">
          <a className="btn magnetic" href="#about-vineet-showcase">
            {ABOUT_VINEET_HERO.primaryCta}
          </a>
          <button className="btn secondary magnetic" type="button">
            {ABOUT_VINEET_HERO.secondaryCta}
          </button>
        </div>
      </div>
    </section>
  )
}
