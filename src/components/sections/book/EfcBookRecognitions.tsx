import { useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EFC_BOOK_RECOGNITIONS } from '@/data/employeesFirstBook'

import 'swiper/css'
import 'swiper/css/navigation'

export function EfcBookRecognitions() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const updateNav = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  return (
    <section className="book-recognitions" aria-label="Book recognitions">
      <div className="wrap book-page-opening-wrap">
        <h2 className="display book-page-opening-title book-recognitions-title reveal">
          <span className="heading-lead">Awards &</span>
          <span className="hand-highlight">Recognitions</span>
        </h2>
      </div>
      <div className="book-recognitions-carousel">
        <button
          type="button"
          className="book-rec-nav book-rec-prev"
          aria-label="Previous recognitions"
          disabled={isBeginning}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <span aria-hidden="true">←</span>
        </button>
        <div className="book-recognitions-swiper-wrap">
          <Swiper
            className="book-recognitions-swiper"
            modules={[Navigation]}
            slidesPerView="auto"
            spaceBetween={24}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
              updateNav(swiper)
            }}
            onSlideChange={updateNav}
            onResize={updateNav}
          >
            {EFC_BOOK_RECOGNITIONS.map((item) => (
              <SwiperSlide key={item.text}>
                <article className="rec-card">
                  <div className="rec-card-visual">
                    <div className={`rec-brand ${item.brandClass}`}>
                      <img
                        className="rec-brand-image"
                        src={item.brandSrc}
                        alt={item.brandAlt}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <p className="rec-card-text">{item.text}</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          type="button"
          className="book-rec-nav book-rec-next"
          aria-label="Next recognitions"
          disabled={isEnd}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  )
}
