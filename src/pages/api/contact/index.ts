import type { NextApiRequest, NextApiResponse } from 'next'
import { saveContactSubmission } from '@/lib/formPersistence'
import { assertContactMailReady, sendContactEmails } from '@/lib/mailer'

type SuccessResponse = {
  ok: true
}

type ErrorResponse = {
  error: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const CONTACT_FORM_TYPE = 'contact'

function normalizeFormType(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  return trimmed || null
}

function normalizeName(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  if (!trimmed || trimmed.length > 100) return null
  return trimmed
}

function normalizeEmail(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const trimmed = value.trim().toLowerCase()
  if (!trimmed || trimmed.length > 254 || !EMAIL_PATTERN.test(trimmed)) return null
  return trimmed
}

function normalizePhone(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  const digits = trimmed.replace(/\D/g, '')
  if (!trimmed || digits.length < 7 || digits.length > 15 || trimmed.length > 24) return null
  return trimmed
}

function normalizeMessage(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  if (!trimmed || trimmed.length > 2000) return null
  return trimmed
}

function hasJoinOnlyFields(body: Record<string, unknown>) {
  return typeof body.city === 'string' && body.city.trim().length > 0
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: `Method ${req.method} not allowed` })
  }

  const body = (req.body ?? {}) as Record<string, unknown>

  if (normalizeFormType(body.formType) !== CONTACT_FORM_TYPE) {
    return res.status(400).json({ error: 'Invalid contact form submission.' })
  }

  if (hasJoinOnlyFields(body)) {
    return res.status(400).json({ error: 'Invalid contact form submission.' })
  }

  const name = normalizeName(body.name)
  const email = normalizeEmail(body.email)
  const phone = normalizePhone(body.phone)
  const message = normalizeMessage(body.message)

  if (!name) {
    return res.status(400).json({ error: 'Please enter your full name.' })
  }

  if (!email) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }

  if (!phone) {
    return res.status(400).json({ error: 'Please enter a valid phone number.' })
  }

  if (!message) {
    return res.status(400).json({ error: 'Please enter a message.' })
  }

  const submission = { name, email, phone, message }

  try {
    assertContactMailReady()

    await saveContactSubmission(submission)
    await sendContactEmails(submission)

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact API error:', error)
    const messageText = error instanceof Error ? error.message : 'Failed to send your message.'
    const status =
      messageText.includes('Missing SendClean') ||
      messageText.includes('Missing SMTP_FROM_EMAIL') ||
      messageText.includes('CONTACT_NOTIFY_EMAIL') ||
      messageText.includes('SendClean failed')
        ? 503
        : 500
    return res.status(status).json({ error: messageText })
  }
}
