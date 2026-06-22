import { useCallback, useEffect, useState } from 'react'
import { useModal } from '../../context/ModalContext'

const LOADING_MS = 2000
const SUCCESS_CLOSE_MS = 5000

export function ContactModal() {
  const { contactOpen, closeContact } = useModal()
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleClose = useCallback(() => {
    closeContact()
    setSubmitted(false)
    setSubmitting(false)
    setError('')
  }, [closeContact])

  useEffect(() => {
    if (!contactOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [contactOpen, handleClose])

  useEffect(() => {
    if (!submitted || !contactOpen) return

    const timer = window.setTimeout(() => {
      handleClose()
    }, SUCCESS_CLOSE_MS)

    return () => window.clearTimeout(timer)
  }, [submitted, contactOpen, handleClose])

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
    const phone = String(formData.get('phone') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const startedAt = Date.now()

    setSubmitting(true)
    setError('')
    setSubmitted(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'contact', name, email, phone, message }),
      })

      const contentType = response.headers.get('content-type') ?? ''
      const data = contentType.includes('application/json')
        ? ((await response.json()) as { error?: string })
        : null

      if (!response.ok) {
        setSubmitting(false)
        setError(data?.error || 'Something went wrong. Please try again.')
        return
      }

      if (!data) {
        setSubmitting(false)
        setError('Something went wrong. Please try again.')
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
      className={`modal join-modal${contactOpen ? ' open' : ''}`}
      id="contactModal"
      aria-hidden={!contactOpen}
      onClick={handleBackdrop}
    >
      <div className="modal-card join-card" role="dialog" aria-modal="true" aria-labelledby="contactModalTitle">
        <button className="modal-close" type="button" aria-label="Close" onClick={handleClose}>
          ×
        </button>
        <p className="eyebrow">Connect with us</p>
        <h2 id="contactModalTitle" className="join-title">
          Contact Us
        </h2>
        <p className="join-sub">Send us a message and we&apos;ll get back to you as soon as we can.</p>

        <div className="join-form-area">
          {submitting ? (
            <div className="join-loading" aria-live="polite" aria-busy="true">
              <span className="join-loading-spinner" aria-hidden="true" />
              <p>Sending your message…</p>
            </div>
          ) : null}

          {!submitting && !submitted ? (
            <form className="join-form" id="contactForm" noValidate onSubmit={handleSubmit}>
              <label>
                Name
                <input type="text" name="name" autoComplete="name" required placeholder="Full name" />
              </label>
              <label>
                Email
                <input type="email" name="email" autoComplete="email" required placeholder="you@example.com" />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" autoComplete="tel" required placeholder="+91 98765 43210" />
              </label>
              <label>
                Message
                <textarea name="message" rows={4} required placeholder="How can we help?" />
              </label>
              {error ? (
                <p className="join-error" role="alert">
                  {error}
                </p>
              ) : null}
              <button className="btn join-submit" type="submit">
                Send message
              </button>
            </form>
          ) : null}

          {!submitting && submitted ? (
            <div className="join-success join-success-in-form" role="status">
              <p className="join-success-title">Thank you!</p>
              <p>Your message has been sent. We&apos;ll be in touch soon.</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
