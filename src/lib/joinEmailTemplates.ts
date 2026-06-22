export type JoinSubmission = {
  name: string
  email: string
  city: string
}

const EMAIL_LOGO_PATH = '/assets/figma/hero-mark.png'

export function getEmailLogoUrl(): string {
  if (process.env.EMAIL_LOGO_URL) return process.env.EMAIL_LOGO_URL

  const siteUrl = process.env.SITE_URL?.replace(/\/$/, '')
  if (siteUrl) return `${siteUrl}${EMAIL_LOGO_PATH}`

  return ''
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function emailShell(content: string, preheader: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>Humans First</title>
</head>
<body style="margin:0;padding:0;background-color:#f3f1ea;font-family:Inter,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#111111;-webkit-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f3f1ea;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background-color:#ffffff;border:1px solid #e7e5dd;border-radius:16px;overflow:hidden;">
          ${content}
        </table>
        <p style="margin:18px 0 0;font-size:12px;line-height:1.5;color:#8a8a8a;text-align:center;">
          Humans First · Stay curious. Stay inspired.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export function emailHeader(title: string, subtitle?: string): string {
  const logoUrl = getEmailLogoUrl()
  const logoCell = logoUrl
    ? `<td align="right" valign="middle" width="152" style="width:152px;padding-left:20px;vertical-align:middle;text-align:right;">
        <img
          src="${escapeHtml(logoUrl)}"
          alt="Humans First"
          width="132"
          style="display:block;width:132px;max-width:132px;height:auto;border:0;outline:none;text-decoration:none;margin:0 0 0 auto;"
        />
      </td>`
    : ''

  return `
    <tr>
      <td style="padding:26px 28px 24px;background-color:#111111;color:#ffffff;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td valign="middle" style="vertical-align:middle;padding-right:12px;">
              <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:0.24em;text-transform:uppercase;color:#ecd225;line-height:1.2;">
                Humans First
              </p>
              <h1 style="margin:0;font-size:26px;line-height:1.08;font-weight:900;text-transform:uppercase;">
                ${escapeHtml(title)}
              </h1>
              ${
                subtitle
                  ? `<p style="margin:10px 0 0;font-size:14px;line-height:1.5;color:#bdbdbd;">${escapeHtml(subtitle)}</p>`
                  : ''
              }
            </td>
            ${logoCell}
          </tr>
        </table>
      </td>
    </tr>`
}

export function detailRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #eceae3;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#6b6b6b;width:120px;vertical-align:top;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:12px 0 12px 16px;border-bottom:1px solid #eceae3;font-size:16px;line-height:1.5;color:#111111;vertical-align:top;">
        ${escapeHtml(value)}
      </td>
    </tr>`
}

export function buildAdminJoinEmail(submission: JoinSubmission) {
  const submittedAt = new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  })

  const text = [
    'New seat reservation — Humans First',
    '',
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `City: ${submission.city}`,
    `Submitted: ${submittedAt}`,
    '',
    'Reply directly to this person using their email address above.',
  ].join('\n')

  const html = emailShell(
    `
      ${emailHeader('New seat reservation', 'Someone just saved their place through the website.')}
      <tr>
        <td style="padding:28px 32px;">
          <p style="margin:0 0 18px;font-size:16px;line-height:1.6;color:#444444;">
            A new registration came in from the <strong>Join the movement</strong> form.
          </p>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 24px;">
            ${detailRow('Name', submission.name)}
            ${detailRow('Email', submission.email)}
            ${detailRow('City', submission.city)}
            ${detailRow('Submitted', submittedAt)}
          </table>
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
    `New reservation from ${submission.name} for ${submission.city}.`,
  )

  return { text, html }
}

export function buildUserThankYouEmail(submission: JoinSubmission) {
  const text = [
    `Hi ${submission.name},`,
    '',
    'Thank you for joining the Humans First movement.',
    '',
    'We are grateful you chose to save your seat. You are now on the list.',
    '',
    `Event: ${submission.city}`,
    '',
    'This is a free, public event with limited seats. We will email you with venue details, timings, and next steps closer to the date.',
    '',
    'What to expect:',
    '- A live conversation about what makes us human in the age of AI',
    '- A community wall where attendees share what they will never give up',
    '- An evening designed to inspire, not instruct',
    '',
    'If you have questions in the meantime, simply reply to this email.',
    '',
    'Warm regards,',
    'Vineet Nayar Team',
    'Humans First Machine Second',
  ].join('\n')

  const html = emailShell(
    `
      ${emailHeader('Thank you', 'Your seat is reserved — we are glad you are joining us.')}
      <tr>
        <td style="padding:28px 32px;">
          <p style="margin:0 0 16px;font-size:17px;line-height:1.6;color:#111111;">
            Hi ${escapeHtml(submission.name)},
          </p>
          <p style="margin:0 0 20px;font-size:18px;line-height:1.55;color:#111111;font-weight:700;">
            Thank you for joining the Humans First movement.
          </p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.65;color:#444444;">
            We are grateful you chose to save your seat. You are now on the list for:
          </p>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 24px;">
            <tr>
              <td style="padding:18px 20px;border-radius:12px;background-color:#f4e04d;color:#111111;">
                <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">
                  Your city
                </p>
                <p style="margin:0;font-size:22px;line-height:1.2;font-weight:800;">
                  ${escapeHtml(submission.city)}
                </p>
              </td>
            </tr>
          </table>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.65;color:#444444;">
            This is a free, public event with limited seats. We will send you venue details, timings, and next steps closer to the date.
          </p>
          <p style="margin:0 0 10px;font-size:14px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#111111;">
            What to expect
          </p>
          <ul style="margin:0 0 24px;padding-left:20px;font-size:15px;line-height:1.7;color:#444444;">
            <li style="margin-bottom:8px;">A live conversation about what makes us human in the age of AI</li>
            <li style="margin-bottom:8px;">A community wall where attendees share what they will never give up</li>
            <li>An evening designed to inspire, not instruct</li>
          </ul>
          <p style="margin:0;font-size:15px;line-height:1.65;color:#444444;">
            Questions before then? Just reply to this email — we would love to hear from you.
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
    `Thank you, ${submission.name}. Your seat is reserved for ${submission.city}.`,
  )

  return { text, html }
}
