import { useModal } from '@/context/ModalContext'
import { EFC_BOOK_VIDEO } from '@/data/employeesFirstBook'

function BookVideoPlayIcon() {
  return (
    <span className="book-video-play" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 6.5v11l9-5.5-9-5.5z" />
      </svg>
    </span>
  )
}

export function EfcBookVideo() {
  const { openYoutubeVideo } = useModal()

  return (
    <section className="book-video-section" aria-label="Book video">
      <div className="wrap book-video-wrap">
        <button
          type="button"
          className="book-video-embed book-video-trigger reveal"
          onClick={() => openYoutubeVideo(EFC_BOOK_VIDEO.youtubeId, EFC_BOOK_VIDEO.title)}
          aria-label={`Play video: ${EFC_BOOK_VIDEO.title}`}
        >
          <img
            className="book-video-thumb"
            src={EFC_BOOK_VIDEO.thumbnail}
            alt=""
            loading="lazy"
          />
          <BookVideoPlayIcon />
        </button>
      </div>
    </section>
  )
}
