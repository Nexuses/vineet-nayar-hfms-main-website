import { useCallback, useEffect, useState } from 'react'
import { JOIN_CITY_OPTIONS } from '../../data/site'
import { useModal } from '../../context/ModalContext'

const LOADING_MS = 2000
const SUCCESS_CLOSE_MS = 5000

export function JoinModal() {
  const { joinOpen, closeJoin } = useModal()
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleClose = useCallback(() => {
    closeJoin()
    setSubmitted(false)
    setSubmitting(false)
    setError('')
  }, [closeJoin])

  useEffect(() => {
    if (!joinOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [joinOpen, handleClose])

  useEffect(() => {
    if (!submitted || !joinOpen) return

    const timer = window.setTimeout(() => {
      handleClose()
    }, SUCCESS_CLOSE_MS)

    return () => window.clearTimeout(timer)
  }, [submitted, joinOpen, handleClose])

  const handleBackdrop = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) handleClose()
  }

  const waitForLoadingMinimum = async (startedAt: number) => {
    const elapsed = Date.now() - startedAt
    const remaining = Math.max(0, LOADING_MS - elapsed)
    if (remaining > 0) {
      await new Promise((resolve) => window.setTimeout(resolve, remaining))
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const city = String(formData.get('city') ?? '').trim()
    const startedAt = Date.now()

    setSubmitting(true)
    setError('')
    setSubmitted(false)

    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, city }),
      })

      const data = (await response.json()) as { error?: string }

      if (!response.ok) {
        setSubmitting(false)
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }

      await waitForLoadingMinimum(startedAt)
      setSubmitting(false)
      setSubmitted(true)
      form.reset()
    } catch {
      setSubmitting(false)
      setError('Unable to reach the server. Please try again.')
    }
  }

  return (
    <div
      className={`modal join-modal${joinOpen ? ' open' : ''}`}
      id="modal"
      aria-hidden={!joinOpen}
      onClick={handleBackdrop}
    >
      <div className="modal-card join-card" role="dialog" aria-modal="true" aria-labelledby="joinModalTitle">
        <button className="modal-close" type="button" aria-label="Close" onClick={handleClose}>
          ×
        </button>
        <p className="eyebrow">Join the movement</p>
        <h2 id="joinModalTitle" className="join-title">
          Save your seat.
        </h2>
        <p className="join-sub">Six cities. Free, public and limited. Tell us where to keep a place for you.</p>

        <div className="join-form-area">
          {submitting ? (
            <div className="join-loading" aria-live="polite" aria-busy="true">
              <span className="join-loading-spinner" aria-hidden="true" />
              <p>Reserving your seat…</p>
            </div>
          ) : null}

          {!submitting && !submitted ? (
            <form className="join-form" id="joinForm" noValidate onSubmit={handleSubmit}>
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
              {error ? (
                <p className="join-error" role="alert">
                  {error}
                </p>
              ) : null}
              <button className="btn join-submit" type="submit">
                Reserve my seat
              </button>
            </form>
          ) : null}

          {!submitting && submitted ? (
            <div className="join-success join-success-in-form" role="status">
              <p className="join-success-title">Thank you!</p>
              <p>You&apos;re on the list. A confirmation email is on its way to your inbox with the details.</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
