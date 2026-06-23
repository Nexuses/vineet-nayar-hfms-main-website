import { useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EFC_BOOK_TESTIMONIALS } from '@/data/employeesFirstBook'

import 'swiper/css'

export function EfcBookTestimonials() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="testimonial-section" aria-label="Book testimonials">
      <div className="wrap book-page-opening-wrap">
        <h2 className="display book-page-opening-title book-page-testimonial-title reveal">
          <span className="heading-lead">Read What Others Have To Say</span>
          <span className="hand-highlight">About The Book</span>
        </h2>
      </div>
      <div className="testimonial-swiper-wrap">
        <Swiper
          className="testimonial-swiper"
          slidesPerView="auto"
          centeredSlides
          loop
          spaceBetween={24}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {EFC_BOOK_TESTIMONIALS.map((item) => (
            <SwiperSlide key={`${item.name}-${item.quote.slice(0, 24)}`}>
              <div className="t-slide">
                <div className="t-card">
                  <span className="t-quote-icon" aria-hidden="true">
                    &ldquo;
                  </span>
                  <p className="t-text">{item.quote}</p>
                </div>
                <div className="t-attribution">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="testimonial-pagination" role="tablist" aria-label="Testimonial slides">
          {EFC_BOOK_TESTIMONIALS.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={`testimonial-pagination-bullet${activeIndex === index ? ' is-active' : ''}`}
              aria-label={`Show testimonial from ${item.name}`}
              aria-selected={activeIndex === index}
              onClick={() => swiperRef.current?.slideToLoop(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
