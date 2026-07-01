import { CITIES, CITIES_HEADING, getEventDayOfWeek } from '../../data/cities'
import { revealStagger } from '../../utils/reveal'
import { CityCardCountdown } from './CityCardCountdown'

export function Cities() {
  return (
    <section className="section cities-section post-scroll-reveal" id="cities-cards">
      <div className="wrap">
        <div className="cities-head reveal reveal-from-bottom">
          <h2 className="display">
            {(() => {
              const lead = CITIES_HEADING.titleLead
              const name = 'Vineet Nayar'
              if (lead.includes(name)) {
                const parts = lead.split(name)
                return (
                  <>
                    {parts[0]}
                    <span className="name-highlight">{name}</span>
                    {parts[1]}
                  </>
                )
              }

              return lead
            })()}
            <span className="hand-highlight">{CITIES_HEADING.titleHighlight}</span>
          </h2>
        </div>

        <div className="city-cards">
          {CITIES.map((city, index) => (
            <article
              key={city.city}
              className="city-card tilt-card reveal reveal-from-bottom"
              data-city={city.city}
              style={revealStagger(index, 55, 80)}
            >
              <div className="city-card-img">
                <img src={city.cardImage} alt={city.city} loading="lazy" />
                <div className="city-card-img-overlay">
                  <span className="city-card-name hand-highlight">{city.city}</span>
                </div>
              </div>
              <div className="city-card-body">
                <p className="city-card-date">
                  {getEventDayOfWeek(city.isoDate)} · {city.dateDisplay}
                </p>
                <p className="city-card-venue">
                  <span className="city-card-venue-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                    </svg>
                  </span>
                  <span>
                    {city.venue}, {city.city}
                  </span>
                </p>
                <p className="city-card-theme">{city.theme}</p>
                <CityCardCountdown isoDate={city.isoDate} />
                <a
                  className="city-card-register"
                  href={city.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply to Attend
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
