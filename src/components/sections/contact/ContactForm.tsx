import { FormEvent } from 'react'
import { CONTACT_FORM } from '@/data/contact'

export function ContactForm() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section className="contact-messages" id="messages">
      <div className="padding-global padding-section-small">
        <div className="container-large contact-messages-grid">
          <div className="contact-messages-copy reveal">
            <p className="contact-eyebrow">{CONTACT_FORM.eyebrow}</p>
            <h2 className="contact-display">{CONTACT_FORM.heading}</h2>
            <p className="contact-lede">{CONTACT_FORM.body}</p>
          </div>

          <form className="contact-form reveal" onSubmit={onSubmit} noValidate>
            <label className="contact-field">
              <span>{CONTACT_FORM.fields.name}</span>
              <input type="text" name="name" autoComplete="name" placeholder="Your name" />
            </label>
            <label className="contact-field">
              <span>{CONTACT_FORM.fields.email}</span>
              <input type="email" name="email" autoComplete="email" placeholder="you@example.com" />
            </label>
            <label className="contact-field">
              <span>{CONTACT_FORM.fields.subject}</span>
              <input type="text" name="subject" placeholder="What is this about?" />
            </label>
            <label className="contact-field">
              <span>{CONTACT_FORM.fields.message}</span>
              <textarea name="message" rows={5} placeholder="Tell us more..." />
            </label>
            <button className="contact-btn magnetic" type="submit">
              {CONTACT_FORM.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
