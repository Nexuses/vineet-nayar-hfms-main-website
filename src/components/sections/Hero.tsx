import { ASSETS } from '../../data/site'
import { useModal } from '../../context/ModalContext'

export function Hero() {
  const { openJoin } = useModal()

  return (
    <section className="hero" data-hero>
      <div className="hero-content">
        <h1 className="display">
          <span>
            <b>Why we choose</b>
          </span>
          <span>
            <b>
              <img className="hero-mark" src={ASSETS.heroMark} alt="Humans First" />
            </b>
          </span>
        </h1>

        <div className="hero-actions">
          <button className="btn magnetic" type="button" onClick={openJoin}>
            Register for your city
          </button>
          <a className="btn secondary magnetic" href="#wall">
            Join the movement
          </a>
        </div>

        <p className="hero-quote reveal on">
          &ldquo;As machines become smarter, will human beings continue to believe in themselves?&rdquo;
        </p>
      </div>
    </section>
  )
}
