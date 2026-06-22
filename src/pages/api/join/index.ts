import type { NextApiRequest, NextApiResponse } from 'next'
import { JOIN_CITY_OPTIONS } from '@/data/site'
import { saveJoinSubmission } from '@/lib/formPersistence'
import { assertJoinMailReady, sendJoinEmails } from '@/lib/mailer'

type SuccessResponse = {
  ok: true
}

type ErrorResponse = {
  error: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const JOIN_FORM_TYPE = 'join'

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

function normalizeCity(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  if (!(JOIN_CITY_OPTIONS as readonly string[]).includes(trimmed)) return null
  return trimmed
}

function hasContactOnlyFields(body: Record<string, unknown>) {
  const phone = typeof body.phone === 'string' ? body.phone.trim() : ''
  const message = typeof body.message === 'string' ? body.message.trim() : ''
  return phone.length > 0 || message.length > 0
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

  if (normalizeFormType(body.formType) !== JOIN_FORM_TYPE) {
    return res.status(400).json({ error: 'Invalid join form submission.' })
  }

  if (hasContactOnlyFields(body)) {
    return res.status(400).json({ error: 'Invalid join form submission.' })
  }

  const name = normalizeName(body.name)
  const email = normalizeEmail(body.email)
  const city = normalizeCity(body.city)

  if (!name) {
    return res.status(400).json({ error: 'Please enter your full name.' })
  }

  if (!email) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }

  if (!city) {
    return res.status(400).json({ error: 'Please choose a city.' })
  }

  const submission = { name, email, city }

  try {
    assertJoinMailReady()

    void saveJoinSubmission(submission)
    void sendJoinEmails(submission).catch((error) => {
      console.error('Join email error:', error)
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Join API error:', error)
    const message = error instanceof Error ? error.message : 'Failed to send reservation email.'
    const status = message.includes('Missing SMTP') || message.includes('JOIN_NOTIFY_EMAIL') ? 503 : 500
    return res.status(status).json({ error: message })
  }
}
