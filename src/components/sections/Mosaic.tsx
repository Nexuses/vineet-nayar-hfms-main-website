import { MOSAIC_COLS, MOSAIC_HEADING } from '../../data/mosaic'
import { useModal } from '../../context/ModalContext'
import { revealDelay, revealStagger } from '../../utils/reveal'

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
  const { openYoutubeVideo } = useModal()

  return (
    <section className="mosaic-section post-scroll-reveal" id="mosaic">
      <div className="mosaic-heading">
        <h2 className="display reveal reveal-from-bottom">
          <span className="heading-lead">{MOSAIC_HEADING.titleLead}</span>
          <span className="hand-highlight">{MOSAIC_HEADING.titleHighlight}</span>
        </h2>
        <p className="lede reveal reveal-from-bottom" style={revealDelay(80)}>
          {MOSAIC_HEADING.lede}
        </p>
      </div>

      <div className="mosaic-grid">
        {MOSAIC_COLS.map((column, columnIndex) => (
          <div key={columnIndex} className="mosaic-col">
            {column.map((photo, photoIndex) => (
              <button
                key={photoIndex}
                type="button"
                className="mosaic-photo mosaic-photo-link reveal reveal-from-bottom"
                aria-label={photo.alt}
                style={revealStagger(columnIndex * 3 + photoIndex, 40, 100)}
                onClick={() => openYoutubeVideo(photo.youtubeId, photo.alt)}
              >
                <img src={photo.src} alt="" loading="lazy" />
                <MosaicPlayIcon />
              </button>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
