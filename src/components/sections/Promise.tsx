import { ASSETS } from '../../data/site'
import { useModal } from '../../context/ModalContext'
import { revealDelay } from '../../utils/reveal'

export function Promise() {
  const { openJoin } = useModal()

  return (
    <section className="promise post-scroll-reveal" id="promise">
      <video className="promise-video" autoPlay muted loop playsInline preload="auto">
        <source src={ASSETS.promiseVideo} type="video/mp4" />
      </video>
      <div className="promise-overlay" />
      <div className="wrap">
        <p className="eyebrow reveal reveal-from-bottom">The Humans First Promise</p>
        <h2 className="display reveal reveal-from-bottom promise-title" style={revealDelay(140)}>
          <span className="heading-lead">Help two people believe</span>
          <span className="hand-highlight">they are capable of more than they think.</span>
        </h2>
        <p className="reveal reveal-from-bottom" style={revealDelay(280)}>
          A student. A colleague. A child. A stranger. You do not have to tell them about the movement. You do not
          have to tell them about the book. Just help them see themselves a little differently.
        </p>
        <button
          className="btn reveal reveal-from-bottom magnetic"
          type="button"
          style={revealDelay(420)}
          onClick={openJoin}
        >
          I accept the promise
        </button>
      </div>
    </section>
  )
}
