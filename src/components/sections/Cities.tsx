import { useState } from 'react'
import { CITIES } from '../../data/cities'
import { useModal } from '../../context/ModalContext'

export function Cities() {
  const { openJoin } = useModal()
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCity = CITIES[activeIndex]

  const selectCity = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="section chapters" id="cities">
      <div className="wrap center">
        <h2 className="display section-title reveal">
          <span className="heading-lead">Join the Conversation</span>
          <span className="hand-highlight">in your city</span>
        </h2>
      </div>

      <div className="wrap chapter-grid">
        <div className="city-list reveal" data-city-list>
          {CITIES.map((city, index) => (
            <button
              key={city.city}
              className={`city-row${index === activeIndex ? ' active' : ''}`}
              type="button"
              data-city={city.city}
              data-date={city.date}
              data-theme={city.theme}
              data-video={city.video}
              data-image={city.image}
              onMouseEnter={() => selectCity(index)}
              onFocus={() => selectCity(index)}
              onClick={() => selectCity(index)}
            >
              <span className="name">{city.city}</span>
              <span className="date">{city.date}</span>
            </button>
          ))}
        </div>

        <aside className="city-preview reveal tilt-card">
          <div className="city-preview-inner">
            <video className="city-video" id="cityVideo" autoPlay muted loop playsInline key={activeCity.video}>
              <source id="cityVideoSource" src={activeCity.video} type="video/mp4" />
            </video>
            <img className="city-deco" src={activeCity.image} alt="" aria-hidden="true" />
          </div>
          <div className="city-caption">
            <p className="city-caption-meta">
              <strong id="cityName">{activeCity.city}</strong> &middot;{' '}
              <span id="cityDate">{activeCity.date}</span>
            </p>
            <button className="btn city-register magnetic" type="button" onClick={openJoin}>
              Register Now
            </button>
          </div>
        </aside>
      </div>
    </section>
  )
}
