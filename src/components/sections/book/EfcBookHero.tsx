import { EFC_BOOK_HERO } from '@/data/employeesFirstBook'

export function EfcBookHero() {
  return (
    <section className="hero book-page-hero" data-hero>
      <div className="hero-content">
        <p className="book-page-split-eyebrow reveal">{EFC_BOOK_HERO.eyebrow}</p>
        <h1 className="display book-page-hero-lead reveal">{EFC_BOOK_HERO.titleLead}</h1>
        <h2 className="book-page-hero-highlight reveal">
          <span className="hand-highlight">{EFC_BOOK_HERO.titleHighlight}</span>
        </h2>
        <div className="book-page-hero-visual reveal">
          <div className="book-page-hero-circle" aria-hidden="true" />
          <div className="book-page-hero-cover">
            <img src={EFC_BOOK_HERO.coverSrc} alt={EFC_BOOK_HERO.coverAlt} loading="eager" />
          </div>
        </div>
      </div>
    </section>
  )
}
