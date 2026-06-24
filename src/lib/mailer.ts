import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'
import { buildAdminJoinEmail, buildUserThankYouEmail, type JoinSubmission } from './joinEmailTemplates'
import {
  buildAdminContactEmail,
  buildUserContactThankYouEmail,
  type ContactSubmission,
} from './contactEmailTemplates'

export type { JoinSubmission, ContactSubmission }

function getSmtpConfig() {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    throw new Error('Missing SMTP configuration. Set SMTP_HOST, SMTP_USER, and SMTP_PASS in .env.local.')
  }

  return {
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  }
}

let transporter: Transporter | null = null

export function getMailTransporter(): Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport(getSmtpConfig())
  }
  return transporter
}

export function getSenderName(): string {
  return process.env.SMTP_FROM_NAME || 'Humans First'
}

export function getMailFrom(): string {
  const email = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER
  if (!email) {
    throw new Error('Missing SMTP_FROM_EMAIL. Set the sender email address in .env.local.')
  }

  const name = getSenderName()
  return `"${name}" <${email}>`
}

export function getJoinNotifyEmail(): string {
  return process.env.JOIN_NOTIFY_EMAIL || process.env.SMTP_USER || ''
}

export function getContactNotifyEmail(): string {
  return process.env.CONTACT_NOTIFY_EMAIL || getJoinNotifyEmail()
}

export function assertJoinMailReady(): void {
  getSmtpConfig()
  getMailFrom()
  if (!getJoinNotifyEmail()) {
    throw new Error('Missing JOIN_NOTIFY_EMAIL. Set the inbox that should receive seat reservations.')
  }
}

export function assertContactMailReady(): void {
  getSmtpConfig()
  getMailFrom()
  if (!getContactNotifyEmail()) {
    throw new Error('Missing CONTACT_NOTIFY_EMAIL. Set the inbox that should receive contact form messages.')
  }
}

export async function sendJoinEmails(submission: JoinSubmission) {
  const notifyEmail = getJoinNotifyEmail()
  const transporter = getMailTransporter()
  const from = getMailFrom()
  const adminEmail = buildAdminJoinEmail(submission)
  const thankYouEmail = buildUserThankYouEmail(submission)

  await Promise.all([
    transporter.sendMail({
      from,
      to: notifyEmail,
      replyTo: submission.email,
      subject: `[Join] New seat reservation — ${submission.city}`,
      text: adminEmail.text,
      html: adminEmail.html,
    }),
    transporter.sendMail({
      from,
      to: submission.email,
      subject: 'Thank you — your seat is reserved | Humans First',
      text: thankYouEmail.text,
      html: thankYouEmail.html,
    }),
  ])
}

export async function sendContactEmails(submission: ContactSubmission) {
  const notifyEmail = getContactNotifyEmail()
  const transporter = getMailTransporter()
  const from = getMailFrom()
  const adminEmail = buildAdminContactEmail(submission)
  const thankYouEmail = buildUserContactThankYouEmail(submission)

  await Promise.all([
    transporter.sendMail({
      from,
      to: notifyEmail,
      replyTo: submission.email,
      subject: `[Contact] New message from ${submission.name}`,
      text: adminEmail.text,
      html: adminEmail.html,
    }),
    transporter.sendMail({
      from,
      to: submission.email,
      subject: 'We received your message | Humans First',
      text: thankYouEmail.text,
      html: thankYouEmail.html,
    }),
  ])
}
