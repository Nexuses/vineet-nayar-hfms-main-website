import { buildAdminJoinEmail, buildUserThankYouEmail, type JoinSubmission } from './joinEmailTemplates'
import {
  buildAdminContactEmail,
  buildUserContactThankYouEmail,
  type ContactSubmission,
} from './contactEmailTemplates'

export type { JoinSubmission, ContactSubmission }

type SendCleanResponse = {
  status?: string
  message?: string
  code?: number
  type?: string
}

type SendCleanMailInput = {
  to: string | string[]
  subject: string
  text: string
  html: string
  replyTo?: string
}

function getSendCleanConfig() {
  const ownerId = process.env.SENDCLEAN_OWNER_ID
  const token = process.env.SENDCLEAN_TOKEN
  const smtpUser = process.env.SENDCLEAN_SMTPUSER
  const apiHost = process.env.SENDCLEAN_API_HOST || 'us1-mta1.sendclean.net'

  if (!ownerId || !token || !smtpUser) {
    throw new Error(
      'Missing SendClean configuration. Set SENDCLEAN_OWNER_ID, SENDCLEAN_TOKEN, and SENDCLEAN_SMTPUSER in .env.local.',
    )
  }

  return { ownerId, token, smtpUser, apiHost }
}

function parseRecipients(value: string): string[] {
  return value
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean)
}

export function getSenderName(): string {
  return process.env.SMTP_FROM_NAME || 'HFMS Book'
}

export function getMailFromEmail(): string {
  const email = process.env.SMTP_FROM_EMAIL
  if (!email) {
    throw new Error('Missing SMTP_FROM_EMAIL. Set the sender email address in .env.local.')
  }
  return email
}

export function getReplyEmail(): string {
  return process.env.SMTP_REPLY_EMAIL || getMailFromEmail()
}

export function getJoinNotifyEmail(): string {
  return process.env.JOIN_NOTIFY_EMAIL || process.env.SMTP_REPLY_EMAIL || ''
}

export function getContactNotifyEmail(): string {
  return process.env.CONTACT_NOTIFY_EMAIL || getJoinNotifyEmail()
}

export function assertJoinMailReady(): void {
  getSendCleanConfig()
  getMailFromEmail()
  if (!getJoinNotifyEmail()) {
    throw new Error('Missing JOIN_NOTIFY_EMAIL. Set the inbox that should receive seat reservations.')
  }
}

export function assertContactMailReady(): void {
  getSendCleanConfig()
  getMailFromEmail()
  if (!getContactNotifyEmail()) {
    throw new Error('Missing CONTACT_NOTIFY_EMAIL. Set the inbox that should receive contact form messages.')
  }
}

async function sendViaSendClean({ to, subject, text, html, replyTo }: SendCleanMailInput) {
  const { ownerId, token, smtpUser, apiHost } = getSendCleanConfig()
  const recipients = (Array.isArray(to) ? to : parseRecipients(to)).map((email) => ({
    email,
    type: 'to' as const,
  }))

  if (recipients.length === 0) {
    throw new Error('No recipient email address provided.')
  }

  const response = await fetch(`https://api.${apiHost}/v1.0/messages/sendMail`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      owner_id: ownerId,
      token,
      smtp_user_name: smtpUser,
      message: {
        html,
        text,
        subject,
        from_email: getMailFromEmail(),
        from_name: getSenderName(),
        to: recipients,
        ...(replyTo ? { headers: { 'Reply-To': replyTo } } : {}),
      },
    }),
  })

  const data = (await response.json()) as SendCleanResponse
  if (!response.ok || data.status === 'error') {
    throw new Error(data.message || 'SendClean failed to send email.')
  }
}

export async function sendJoinEmails(submission: JoinSubmission) {
  const notifyEmail = getJoinNotifyEmail()
  const replyEmail = getReplyEmail()
  const adminEmail = buildAdminJoinEmail(submission)
  const thankYouEmail = buildUserThankYouEmail(submission)

  await Promise.all([
    sendViaSendClean({
      to: notifyEmail,
      replyTo: submission.email,
      subject: `[Join] New seat reservation — ${submission.city}`,
      text: adminEmail.text,
      html: adminEmail.html,
    }),
    sendViaSendClean({
      to: submission.email,
      replyTo: replyEmail,
      subject: 'Thank you — your seat is reserved | Humans First',
      text: thankYouEmail.text,
      html: thankYouEmail.html,
    }),
  ])
}

export async function sendContactEmails(submission: ContactSubmission) {
  const notifyEmail = getContactNotifyEmail()
  const replyEmail = getReplyEmail()
  const adminEmail = buildAdminContactEmail(submission)
  const thankYouEmail = buildUserContactThankYouEmail(submission)

  await Promise.all([
    sendViaSendClean({
      to: notifyEmail,
      replyTo: submission.email,
      subject: `[Contact] New message from ${submission.name}`,
      text: adminEmail.text,
      html: adminEmail.html,
    }),
    sendViaSendClean({
      to: submission.email,
      replyTo: replyEmail,
      subject: 'We received your message | Humans First',
      text: thankYouEmail.text,
      html: thankYouEmail.html,
    }),
  ])
}
