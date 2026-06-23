import { useRouter } from 'next/router'
import { EFC_BOOK_CTA } from '@/data/employeesFirstBook'
import { resolveNavHref } from '@/utils/nav'

export function EfcBookCta() {
  const router = useRouter()
  const citiesHref = resolveNavHref(
    { href: '#cities-cards', sectionId: 'cities-cards' },
    router.pathname,
  )

  return (
    <section className="book-cta-section" aria-label="Join the movement">
      <div className="wrap book-cta-wrap">
        <div className="book-cta-card reveal">
          <div className="book-cta-content">
            <p className="eyebrow book-cta-eyebrow">{EFC_BOOK_CTA.eyebrow}</p>
            <h2 className="display book-cta-title">
              <span className="heading-lead">{EFC_BOOK_CTA.titleLead}</span>
              <span className="hand-highlight">{EFC_BOOK_CTA.titleHighlight}</span>
            </h2>
            <p className="book-cta-description">
              <em>{EFC_BOOK_CTA.descriptionEmphasis}</em> {EFC_BOOK_CTA.descriptionBody}
            </p>
            <div className="book-cta-form">
              <a className="btn book-cta-submit magnetic" href={citiesHref} data-section-link="cities-cards">
                {EFC_BOOK_CTA.ctaLabel}
              </a>
            </div>
          </div>
          <div className="book-cta-media">
            <img
              className="book-cta-portrait"
              src={EFC_BOOK_CTA.portraitSrc}
              alt={EFC_BOOK_CTA.portraitAlt}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
