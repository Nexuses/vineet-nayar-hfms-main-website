import { useEffect, useState } from 'react'
import {
  BOOK_ANSWER_PARAGRAPHS,
  BOOK_AVAILABILITY,
  BOOK_OPENING,
  BOOK_PAGE_META,
  BOOK_PARTS,
  BOOK_QUOTE,
} from '../data/bookPageContent'
import { SITE } from '../data/site'
import { useModal } from '../context/ModalContext'

export function BookPage() {
  const { openJoin } = useModal()
  const [activePart, setActivePart] = useState(0)

  useEffect(() => {
    document.title = BOOK_PAGE_META.title
    return () => {
      document.title = SITE.title
    }
  }, [])

  return (
    <main id="top" className="book-page">
      <section className="section book-page-hero">
        <div className="wrap center book-page-hero-grid">
          <div className="book-page-hero-copy">
            <h3 className="book-page-eyebrow reveal">About the book</h3>
            <h1 className="display section-title reveal">{BOOK_PAGE_META.bookTitle}</h1>
            <p className="section-subtitle reveal">
              <span className="hand-highlight">{BOOK_PAGE_META.bookSubtitle}</span>
            </p>
            <p className="book-page-tagline reveal">{BOOK_PAGE_META.bookTagline}</p>
            <p className="book-page-byline reveal">{BOOK_PAGE_META.byline}</p>
          </div>
          <div className="book-page-cover reveal">
            <img src={SITE.bookCoverUrl} alt="Humans First, Machines Second book cover" />
          </div>
        </div>
      </section>

      <section className="section book-page-opening">
        <div className="wrap center">
          <h2 className="display section-title reveal">
            <span className="heading-lead">{BOOK_OPENING.heading}</span>
            <span className="hand-highlight">{BOOK_OPENING.highlight}</span>
          </h2>
          {BOOK_OPENING.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="lede reveal book-page-lede">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="section book-page-body">
        <div className="wrap center">
          {BOOK_ANSWER_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="lede reveal book-page-lede">
              {paragraph}
            </p>
          ))}
          <p className="hero-quote reveal book-page-quote">{BOOK_QUOTE}</p>
        </div>
      </section>

      <section className="section manifesto book-page-parts">
        <div className="wrap manifesto-wrap">
          <h2 className="display section-title reveal">The Book in Four Parts</h2>
          <div className="manifesto-lines book-page-parts-list" data-manifesto>
            {BOOK_PARTS.map((part, index) => (
              <button
                key={part.title}
                type="button"
                className={`manifesto-line reveal${index === activePart ? ' active' : ''}`}
                onMouseEnter={() => setActivePart(index)}
                onFocus={() => setActivePart(index)}
              >
                <h4>{part.title}</h4>
                <em>{part.body}</em>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section book-page-availability">
        <div className="wrap center book-page-availability-wrap">
          <h2 className="display section-title reveal">{BOOK_AVAILABILITY.heading}</h2>
          <p className="lede reveal book-page-lede">
            <strong>{BOOK_AVAILABILITY.highlight}</strong> {BOOK_AVAILABILITY.body}
          </p>
          <p className="lede reveal book-page-lede">{BOOK_AVAILABILITY.ctaLead}</p>
          <p className="lede reveal book-page-lede">{BOOK_AVAILABILITY.ctaBody}</p>
          <div className="book-page-actions reveal">
            <button className="btn magnetic" type="button" onClick={openJoin}>
              {BOOK_AVAILABILITY.ctaLabel}
            </button>
            <a
              className="btn secondary magnetic"
              href={BOOK_AVAILABILITY.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {BOOK_AVAILABILITY.amazonLabel}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
