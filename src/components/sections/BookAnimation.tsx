import { useRef, type CSSProperties } from 'react'
import { BookFlipbookEmbed, type BookFlipbookHandle } from './book/BookFlipbookEmbed'
import { BOOK_BLOCKS, BOOK_PANELS } from '../../data/bookPages'
import { useBookAnimation } from '../../hooks/useBookAnimation'

export function BookAnimation() {
  const rootRef = useRef<HTMLElement>(null)
  const flipbookRef = useRef<BookFlipbookHandle>(null)
  useBookAnimation(rootRef, flipbookRef)

  return (
    <section className="hf-book-anim" id="book" data-hf-book aria-label="Humans First book experience" ref={rootRef}>
      <div className="hf-track" id="hf-track">
        <div className="hf-stage">
          <div className="hf-hairline" id="hf-hairline" aria-hidden="true" />

          <div className="hf-visual" id="hf-visual">
            <div className="hf-approach-line" id="hf-approach-line" aria-hidden="true" />
            <div className="hf-approach-dot" id="hf-approach-dot" aria-hidden="true" />
            <div className="hf-circle" id="hf-circle" aria-hidden="true" />

            <div className="hf-book-scene" id="hf-bookScene">
              <div className="hf-flipbook-embed" id="hf-flipbook">
                <BookFlipbookEmbed ref={flipbookRef} />
              </div>

              <button className="hf-cta" id="hf-cta" type="button">
                <span className="dot" />
                What it is
              </button>
            </div>

            <button className="hf-flip-btn" id="hf-flipBtn" type="button" aria-label="Tap to flip the book">
              Tap to Flip
            </button>
          </div>

          <p className="hf-tap-hint is-prominent" id="hf-tapHint" aria-hidden="true">
            <span className="hf-tap-icon" aria-hidden="true" />
            Tap the book to explore
          </p>

          <div className="hf-blocks" id="hf-blocks">
            {BOOK_BLOCKS.map((block) => (
              <div key={block.position} className={`hf-block ${block.position}`}>
                <div className="hf-ico">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d={block.iconPath} />
                  </svg>
                </div>
                <h3>{block.title}</h3>
                <p>{block.body}</p>
              </div>
            ))}
          </div>

          <div className="hf-copy">
            {BOOK_PANELS.map((panel) => (
              <div key={panel.index} className="hf-panel" data-index={panel.index}>
                <span className="hf-panel-num" aria-hidden="true"  >
                  {panel.number}
                </span>
                <div className="hf-panel-stack" style={{ borderTopLeftRadius: '100px'}}>
                  <div style={{ paddingLeft: '45px', borderTopLeftRadius: '100px'}}>
                  <div className="hf-panel-band" >
                    <span>{panel.section}</span>
                    </div>
                  </div>
                  <h3 className="hf-panel-title">{panel.title}</h3>
                  <p className="hf-panel-quote">
                    <span className="hand-highlight">&ldquo;{panel.quote}&rdquo;</span>
                  </p>
                  <p className="hf-panel-body">{panel.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="hf-hero-cap reveal reveal-from-bottom" id="hf-heroCap">
            <h2>Humans First, Machines Second</h2>
            <div className="sub">30 Sparks to Reimagine Winning</div>
          </div>

          <div className="hf-cue reveal reveal-from-bottom" id="hf-cue" style={{ '--reveal-delay': '120ms' } as CSSProperties}>
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  )
}
