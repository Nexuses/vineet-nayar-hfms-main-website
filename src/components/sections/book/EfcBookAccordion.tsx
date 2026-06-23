import { useState } from 'react'
import { EFC_BOOK_ACCORDION, EFC_BOOK_ACCORDION_CLOSING } from '@/data/employeesFirstBook'

export function EfcBookAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section book-page-accordion" aria-label="Book chapters">
      <div className="wrap book-page-opening-wrap">
        <div className="book-page-acc-list">
          {EFC_BOOK_ACCORDION.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <article
                key={item.title}
                className={`book-page-acc-item book-page-acc-item--${item.tone} reveal${isOpen ? ' is-open' : ''}`}
              >
                <button
                  type="button"
                  className="book-page-acc-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="book-page-acc-icon">
                    <img
                      src={item.iconSrc}
                      alt=""
                      aria-hidden="true"
                      className="book-page-acc-icon-image"
                      loading="lazy"
                    />
                  </span>
                  <span className="book-page-acc-title">{item.title}</span>
                  <span className="book-page-acc-toggle" aria-hidden="true">
                    <span className="book-page-acc-toggle-mark">+</span>
                  </span>
                </button>
                <div className="book-page-acc-body">
                  <p>{item.body}</p>
                </div>
              </article>
            )
          })}
        </div>
        <p className="lede reveal book-page-acc-closing">{EFC_BOOK_ACCORDION_CLOSING}</p>
      </div>
    </section>
  )
}
