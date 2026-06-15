import { useEffect, useState } from 'react'
import { JOIN_CITY_OPTIONS } from '../../data/site'
import { useModal } from '../../context/ModalContext'

export function JoinModal() {
  const { joinOpen, closeJoin } = useModal()
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!joinOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeJoin()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [joinOpen, closeJoin])

  const handleBackdrop = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) closeJoin()
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    setSubmitted(true)
  }

  return (
    <div
      className={`modal join-modal${joinOpen ? ' open' : ''}`}
      id="modal"
      aria-hidden={!joinOpen}
      onClick={handleBackdrop}
    >
      <div className="modal-card join-card" role="dialog" aria-modal="true" aria-labelledby="joinModalTitle">
        <button className="modal-close" type="button" aria-label="Close" onClick={closeJoin}>
          ×
        </button>
        <p className="eyebrow">Join the movement</p>
        <h2 id="joinModalTitle" className="join-title">
          Save your seat.
        </h2>
        <p className="join-sub">Six cities. Free, public and limited. Tell us where to keep a place for you.</p>
        <form className="join-form" id="joinForm" noValidate hidden={submitted} onSubmit={handleSubmit}>
          <label>
            Your name
            <input type="text" name="name" autoComplete="name" required placeholder="Full name" />
          </label>
          <label>
            Email
            <input type="email" name="email" autoComplete="email" required placeholder="you@example.com" />
          </label>
          <label>
            City
            <select name="city" required defaultValue="">
              <option value="" disabled>
                Choose a city
              </option>
              {JOIN_CITY_OPTIONS.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
          </label>
          <button className="btn join-submit" type="submit">
            Reserve my seat
          </button>
        </form>
        <p className="join-success" id="joinSuccess" hidden={!submitted}>
          You&apos;re on the list. We&apos;ll be in touch with the details.
        </p>
      </div>
    </div>
  )
}
