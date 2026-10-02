export interface ParisSession {
  id: string
  /** Short name shown on the card image. */
  label: string
  isoDate: string
  dateDisplay: string
  timeDisplay: string
  venue: string
  theme: string
  cardImage: string
  mapUrl: string
}

/** Google Maps search link; swap the query for a full street address once confirmed. */
function mapsSearch(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

export const PARIS_PAGE = {
  metaTitle: 'Vineet Nayar in Paris - The Humans First Series',
  metaDescription:
    'Three sessions with Vineet Nayar in Paris on 21 Oct 2026: a keynote at UNLEASH World, a conference at Thales HQ, and an evening at HEC Paris.',
  heroImage:
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=2000&q=80&auto=format&fit=crop',
  backLabel: 'The World Tour',
  eyebrow: 'The World Tour',
  title: 'Paris',
  tagline: 'Three sessions, one day',
  meta: ['Wednesday, 21 Oct 2026', '09:00–20:30 EST', '3 sessions'],
  lede: 'A keynote at UNLEASH World, a conference at Thales HQ, and an evening with HEC Paris MBA and EMBA students.',
  sessionsTitleLead: 'The Paris',
  sessionsTitleHighlight: 'sessions',
  mapButtonLabel: 'View on Google Maps',
} as const

export const PARIS_SESSIONS: ParisSession[] = [
  {
    id: 'unleash-world',
    label: 'UNLEASH World',
    isoDate: '2026-10-21',
    dateDisplay: '21 Oct 2026',
    timeDisplay: '09:00–09:30 EST',
    venue: 'UNLEASH World, Stage 3, Porte de Versailles',
    theme: 'Keynote and Q&A',
    cardImage: '/assets/paris/unleash-world.jpg',
    mapUrl: mapsSearch('Paris Expo Porte de Versailles, Paris'),
  },
  {
    id: 'thales-hq',
    label: 'Thales HQ',
    isoDate: '2026-10-21',
    dateDisplay: '21 Oct 2026',
    timeDisplay: '15:30–17:00 EST',
    venue: 'Thales HQ',
    theme: 'Conference and Q&A',
    cardImage: '/assets/paris/thales-hq.jpg',
    mapUrl: mapsSearch('Thales headquarters, Paris'),
  },
  {
    id: 'hec-paris',
    label: 'HEC Paris',
    isoDate: '2026-10-21',
    dateDisplay: '21 Oct 2026',
    timeDisplay: '19:00–20:30 EST',
    venue: 'HEC Paris Campus',
    theme: 'Conference for MBA and EMBA students',
    cardImage: '/assets/paris/hec-paris.jpg',
    mapUrl: mapsSearch('HEC Paris, Jouy-en-Josas'),
  },
]
