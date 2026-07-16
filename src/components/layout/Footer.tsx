import Link from 'next/link'
import { useRouter } from 'next/router'
import { LINKEDIN_INSIGHT_SCRIPT, LINKEDIN_PARTNER_ID } from '@/lib/analytics'
import { ASSETS, FOOTER_LINKS, SITE } from '../../data/site'
import { useModal } from '../../context/ModalContext'
import { resolveNavHref } from '../../utils/nav'

export function Footer() {
  const router = useRouter()
  const { openContact } = useModal()

  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link href="/" className="footer-brand" aria-label="The Humans First Series home">
            <img className="footer-logo" src={ASSETS.logo} alt="Humans First Series" />
          </Link>
          <p className="lede footer-note">
            The Humans First Series is a live event platform built around the book Humans First, Machines
            Second by Vineet Nayar, published by Penguin Business.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Quick Links</h4>
            {FOOTER_LINKS.explore.map((link) =>
              link.isExternal ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={link.labelHighlight ? 'footer-link-has-highlight' : undefined}
                >
                  {link.labelHighlight ? (
                    <>
                      {link.labelPrefix}{' '}
                      <span className="footer-link-name">{link.labelHighlight}</span>
                    </>
                  ) : (
                    link.label
                  )}
                </a>
              ) : link.isRoute ? (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={resolveNavHref(link, router.pathname)}
                  data-section-link={link.sectionId}
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
          <div>
            <h4>Stay Connected</h4>
            {FOOTER_LINKS.social.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
            <button className="footer-link-btn footer-contact-btn" type="button" onClick={openContact}>
              <span className="hand-highlight">Contact Us</span>
            </button>
          </div>
        </div>
      </div>
      <img className="footer-graphic" src={SITE.footerGraphicUrl} alt="Humans First footer graphic" />
      <p className="footer-copyright">{SITE.copyright}</p>
      <script
        // LinkedIn Insight Tag — also kept before </body> in _document.tsx
        dangerouslySetInnerHTML={{ __html: LINKEDIN_INSIGHT_SCRIPT }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src={`https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_PARTNER_ID}&fmt=gif`}
        />
      </noscript>
    </footer>
  )
}
