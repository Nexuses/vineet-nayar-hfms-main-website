import { MOSAIC_COLS, MOSAIC_HEADING } from '../../data/mosaic'

export function Mosaic() {
  return (
    <section className="mosaic-section" id="mosaic">
      <div className="mosaic-heading reveal">
        <h2 className="display">
          <span className="heading-lead">{MOSAIC_HEADING.titleLead}</span>
          <span className="hand-highlight">{MOSAIC_HEADING.titleHighlight}</span>
        </h2>
        <p className="lede">{MOSAIC_HEADING.lede}</p>
      </div>

      <div className="mosaic-grid" aria-hidden="true">
        {MOSAIC_COLS.map((column, columnIndex) => (
          <div key={columnIndex} className="mosaic-col">
            {column.map((photo, photoIndex) => (
              <div key={photoIndex} className="mosaic-photo">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
