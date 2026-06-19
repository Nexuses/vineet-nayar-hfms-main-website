import { ASSETS } from '@/data/site'
import { CONTACT_CTA } from '@/data/contact'
import { useModal } from '@/context/ModalContext'

export function ContactCta() {
  const { openJoin } = useModal()

  return (
    <section className="contact-cta-section" aria-label="Join the movement">
      <div className="footer-video">
        <video
          className="footer-video-bg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={CONTACT_CTA.videoPoster}
        >
          <source src={ASSETS.promiseVideo} type="video/mp4" />
        </video>
        <div className="cta-wrapper theme-dark">
          <div className="padding-global padding-section-small">
            <div className="container-large contact-cta-inner reveal">
              <p className="contact-eyebrow contact-eyebrow-light">{CONTACT_CTA.eyebrow}</p>
              <h2 className="contact-display contact-display-light">{CONTACT_CTA.heading}</h2>
              <p className="contact-lede contact-lede-light">{CONTACT_CTA.body}</p>
              <div className="contact-cta-actions">
                <button className="contact-btn magnetic" type="button" onClick={openJoin}>
                  {CONTACT_CTA.primaryLabel}
                </button>
                <a
                  className="contact-btn contact-btn-outline magnetic"
                  href={CONTACT_CTA.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT_CTA.secondaryLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
