/**
 * Lightweight anti-bot checks for public forms (honeypot, timing, rate limit).
 * Silent-accept honeypot / bot hits so scrapers do not learn they were blocked.
 */

const MIN_SUBMIT_MS = 2500
const MAX_SUBMIT_MS = 24 * 60 * 60 * 1000
const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_MAX = 5

type RateBucket = { count: number; resetAt: number }

const ipBuckets = new Map<string, RateBucket>()

function pruneBuckets(now: number) {
  if (ipBuckets.size < 500) return
  for (const [ip, bucket] of ipBuckets) {
    if (bucket.resetAt <= now) ipBuckets.delete(ip)
  }
}

export function getRequestIp(req: {
  headers: Record<string, string | string[] | undefined>
  socket?: { remoteAddress?: string }
}): string {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.trim()) {
    return forwarded.split(',')[0]?.trim() || 'unknown'
  }
  if (Array.isArray(forwarded) && forwarded[0]) {
    return forwarded[0].split(',')[0]?.trim() || 'unknown'
  }
  const realIp = req.headers['x-real-ip']
  if (typeof realIp === 'string' && realIp.trim()) return realIp.trim()
  return req.socket?.remoteAddress || 'unknown'
}

/** True when a bot filled a hidden field — caller should fake success. */
export function isHoneypotTriggered(body: Record<string, unknown>): boolean {
  const traps = [body.website, body.company, body.fax]
  return traps.some((value) => typeof value === 'string' && value.trim().length > 0)
}

/**
 * Reject instant / scripted posts.
 * Missing or invalid formOpenedAt is treated as suspicious (raw API bots).
 */
export function isSubmitTooFast(body: Record<string, unknown>): boolean {
  const raw = body.formOpenedAt
  if (typeof raw !== 'string' && typeof raw !== 'number') return true
  const openedAt = typeof raw === 'number' ? raw : Number(raw)
  if (!Number.isFinite(openedAt) || openedAt <= 0) return true
  const elapsed = Date.now() - openedAt
  if (elapsed < 0 || elapsed > MAX_SUBMIT_MS) return true
  return elapsed < MIN_SUBMIT_MS
}

export function isRateLimited(ip: string): boolean {
  const now = Date.now()
  pruneBuckets(now)
  const key = ip || 'unknown'
  const existing = ipBuckets.get(key)
  if (!existing || existing.resetAt <= now) {
    ipBuckets.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false
  }
  existing.count += 1
  return existing.count > RATE_MAX
}

function partLooksGibberish(part: string): boolean {
  const letters = part.replace(/[^a-z]/gi, '').toLowerCase()
  if (letters.length < 4) return false

  const vowels = (letters.match(/[aeiou]/g) || []).length
  // No real vowels (y alone does not count), or a long consonant run.
  if (vowels === 0) return true
  if (/[^aeiou]{5,}/.test(letters)) return true
  return false
}

/** Catch obvious consonant-soup names. Timing/honeypot catch most other bots. */
export function looksLikeGibberishName(name: string): boolean {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
  if (parts.length === 0) return true
  return parts.some(partLooksGibberish)
}

export type FormSpamVerdict = 'allow' | 'silent_drop' | 'rate_limited'

/** Shared gate for contact / join handlers. */
export function evaluateFormSpam(
  body: Record<string, unknown>,
  ip: string,
  name?: string,
): FormSpamVerdict {
  if (isHoneypotTriggered(body)) return 'silent_drop'
  if (isSubmitTooFast(body)) return 'silent_drop'
  if (name && looksLikeGibberishName(name)) return 'silent_drop'
  if (isRateLimited(ip)) return 'rate_limited'
  return 'allow'
}
