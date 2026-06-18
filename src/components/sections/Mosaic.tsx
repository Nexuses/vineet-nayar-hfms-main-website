import { MOSAIC_COLS, MOSAIC_HEADING } from '../../data/mosaic'

function MosaicPlayIcon() {
  return (
    <span className="mosaic-play" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 6.5v11l9-5.5-9-5.5z" />
      </svg>
    </span>
  )
}

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

      <div className="mosaic-grid">
        {MOSAIC_COLS.map((column, columnIndex) => (
          <div key={columnIndex} className="mosaic-col">
            {column.map((photo, photoIndex) => (
              <a
                key={photoIndex}
                className="mosaic-photo mosaic-photo-link"
                href={photo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${photo.alt} (opens in new tab)`}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <MosaicPlayIcon />
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
