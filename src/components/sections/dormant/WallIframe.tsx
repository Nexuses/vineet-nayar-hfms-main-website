import { SITE } from '../../../data/site'

export function WallIframe() {
  return (
    <section className="wall-section" id="wall-iframe">
      <div className="wall-head center">
        <p className="eyebrow">The Humans First Wall</p>
        <h2 className="reveal">
          <span className="heading-lead">What part of being human will you</span>
          <mark className="hand-highlight">never give up?</mark>
        </h2>
        <p className="lede section-note reveal">
          You&apos;ll answer it in your own handwriting, beside a few hundred strangers answering the same. A card
          gets thrown away. A wall becomes a memory, and a record of what humans refuse to lose in the age of AI.
        </p>
      </div>

      <div className="wall-embed reveal">
        <iframe
          src={SITE.wallIframeUrl}
          title="Humans First Wall"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
