import { CITIES, CITIES_HEADING } from '../../data/cities'
import { useModal } from '../../context/ModalContext'

export function Cities() {
  const { openJoin } = useModal()

  return (
    <section className="section cities-section" id="cities-cards">
      <div className="wrap">
        <div className="cities-head reveal">
          <h2 className="display">
            {CITIES_HEADING.titleLead}
            <span className="hand-highlight">{CITIES_HEADING.titleHighlight}</span>
          </h2>
        </div>

        <div className="city-cards">
          {CITIES.map((city) => (
            <article key={city.city} className="city-card tilt-card reveal" data-city={city.city}>
              <div className="city-card-img">
                <img src={city.cardImage} alt={city.city} loading="lazy" />
              </div>
              <div className="city-card-body">
                <div className="city-card-meta">
                  <h3 className="city-card-name">{city.city}</h3>
                  <span className="city-card-date">{city.dateDisplay}</span>
                </div>
                <p className="city-card-theme">{city.theme}</p>
                <div className="city-card-footer">
                  <button className="city-card-register" type="button" onClick={openJoin}>
                    Register Now
                  </button>
                  <span className="city-card-spots">Limited seats</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
