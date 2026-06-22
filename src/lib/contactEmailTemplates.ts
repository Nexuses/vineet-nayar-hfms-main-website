import { detailRow, emailHeader, emailShell, escapeHtml } from './joinEmailTemplates'

export type ContactSubmission = {
  name: string
  email: string
  phone: string
  message: string
}

function submittedAtLabel() {
  return new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  })
}

export function buildAdminContactEmail(submission: ContactSubmission) {
  const submittedAt = submittedAtLabel()

  const text = [
    'New contact message — Humans First',
    '',
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Phone: ${submission.phone}`,
    `Submitted: ${submittedAt}`,
    '',
    'Message:',
    submission.message,
    '',
    'Reply directly to this person using their email address above.',
  ].join('\n')

  const html = emailShell(
    `
      ${emailHeader('New contact message', 'Someone reached out through the Contact Us form.')}
      <tr>
        <td style="padding:28px 32px;">
          <p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#444444;">
            A new message came in from the <strong>Contact Us</strong> form.
          </p>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 24px;">
            ${detailRow('Name', submission.name)}
            ${detailRow('Email', submission.email)}
            ${detailRow('Phone', submission.phone)}
            ${detailRow('Submitted', submittedAt)}
          </table>
          <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#6b6b6b;">
            Message
          </p>
          <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#111111;white-space:pre-wrap;">
            ${escapeHtml(submission.message)}
          </p>
          <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tr>
              <td style="border-radius:999px;background-color:#111111;">
                <a href="mailto:${escapeHtml(submission.email)}" style="display:inline-block;padding:14px 24px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">
                  Reply to ${escapeHtml(submission.name)}
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    `,
    `New contact message from ${submission.name}.`,
  )

  return { text, html }
}

export function buildUserContactThankYouEmail(submission: ContactSubmission) {
  const text = [
    `Hi ${submission.name},`,
    '',
    'Thank you for reaching out to the Humans First team.',
    'We have received your message and will get back to you soon.',
    '',
    'If your enquiry is urgent, you can reply to this email.',
    '',
    'Warm regards,',
    'Vineet Nayar Team',
    'Humans First Machine Second',
  ].join('\n')

  const html = emailShell(
    `
      ${emailHeader('Message received', 'Thank you for contacting us.')}
      <tr>
        <td style="padding:28px 32px;">
          <p style="margin:0 0 16px;font-size:17px;line-height:1.6;color:#111111;">
            Hi ${escapeHtml(submission.name)},
          </p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.65;color:#444444;">
            Thank you for reaching out to the Humans First team. We have received your message and will get back to you soon.
          </p>
          <p style="margin:0;font-size:15px;line-height:1.65;color:#444444;">
            If your enquiry is urgent, simply reply to this email.
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:22px 32px 28px;border-top:1px solid #eceae3;background-color:#faf9f6;">
          <p style="margin:0 0 4px;font-size:15px;line-height:1.5;color:#111111;font-weight:700;">
            Warm regards,
          </p>
          <p style="margin:0;font-size:15px;line-height:1.6;color:#6b6b6b;">
            Vineet Nayar Team<br />
            Humans First Machine Second
          </p>
        </td>
      </tr>
    `,
    `Thanks ${submission.name}, we received your message.`,
  )

  return { text, html }
}
