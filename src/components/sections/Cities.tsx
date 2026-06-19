import { CITIES, CITIES_HEADING, getEventDayOfWeek } from '../../data/cities'
import { revealStagger } from '../../utils/reveal'
import { CityCardCountdown } from './CityCardCountdown'

export function Cities() {
  return (
    <section className="section cities-section post-scroll-reveal" id="cities-cards">
      <div className="wrap">
        <div className="cities-head reveal reveal-from-bottom">
          <h2 className="display">
            {CITIES_HEADING.titleLead}
            <span className="hand-highlight">{CITIES_HEADING.titleHighlight}</span>
          </h2>
        </div>

        <div className="city-cards">
          {CITIES.map((city, index) => (
            <article
              key={city.city}
              className="city-card tilt-card reveal reveal-from-bottom"
              data-city={city.city}
              style={revealStagger(index, 110, 200)}
            >
              <div className="city-card-img">
                <img src={city.cardImage} alt={city.city} loading="lazy" />
              </div>
              <div className="city-card-body">
                <div className="city-card-meta">
                  <h3 className="city-card-name">{city.city}</h3>
                  <span className="city-card-date">
                    {getEventDayOfWeek(city.isoDate)} · {city.dateDisplay}
                  </span>
                </div>
                <p className="city-card-theme">{city.theme}</p>
                <div className="city-card-footer">
                  <div className="city-card-actions">
                    <a
                      className="city-card-register"
                      href={city.registerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Register Now
                    </a>
                    <span className="city-card-spots">Limited seats</span>
                  </div>
                  <CityCardCountdown isoDate={city.isoDate} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
