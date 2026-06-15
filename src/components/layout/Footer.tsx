import { ASSETS, FOOTER_LINKS, SITE } from '../../data/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <img className="footer-logo" src={ASSETS.footerLogo} alt="Humans First" />
          <p className="lede footer-note">
            The Humans First Series is a live event platform built around the book Humans First, Machines
            Second by Vineet Nayar, published by Penguin Business.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Get in touch</h4>
            {FOOTER_LINKS.contact.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <h4>Follow us</h4>
            {FOOTER_LINKS.social.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <img className="footer-graphic" src={SITE.footerGraphicUrl} alt="Humans First footer graphic" />
      <p className="footer-copyright">{SITE.copyright}</p>
    </footer>
  )
}
