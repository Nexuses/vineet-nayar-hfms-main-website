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
                  {city.venue} — {city.city}
                </p>
                <p className="city-card-theme">{city.theme}</p>
                <CityCardCountdown isoDate={city.isoDate} />
                <a
                  className="city-card-register"
                  href={city.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
