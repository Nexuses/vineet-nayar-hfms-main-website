import { EFC_BOOK_OPENING } from '@/data/employeesFirstBook'

export function EfcBookOpening() {
  return (
    <section className="section book-page-opening">
      <div className="wrap book-page-opening-wrap">
        <h2 className="display book-page-opening-title reveal">
          <span className="heading-lead">{EFC_BOOK_OPENING.titleLead}</span>
          <span className="hand-highlight">{EFC_BOOK_OPENING.titleHighlight}</span>
        </h2>
        {EFC_BOOK_OPENING.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="lede reveal book-page-lede">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
