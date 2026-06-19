export interface CityEvent {
  id: string
  label: string
  ariaLabel: string
  image: string
  colorLayer: string
  badge: string
  overlayCity: string
  date: string
  time: string
  entry: string
  description: string
  registerCity: string
  dotLabel: string
  isOpen: boolean
}

const EVENT_OVERLAY =
  'linear-gradient(160deg, rgba(17,17,17,0.55) 0%, rgba(17,17,17,0.92) 100%)'

const COMING_SOON = {
  badge: 'Coming Soon',
  date: 'TBA',
  time: 'TBA',
  entry: 'TBA',
  description: 'Details TBA',
} as const

export const CITY_EVENTS_HEADING = {
  titleLead: 'The World Tour',
  titleHighlight: 'A Global Movement',
  lede:
    "This is more than a book tour. It's a global movement dedicated to celebrating and nurturing the qualities that make us uniquely human in the age of AI. Explore upcoming events, reserve your place and join the movement in your city.",
} as const

export const CITY_EVENTS: CityEvent[] = [
  {
    id: 'india',
    label: 'India',
    ariaLabel: 'India — 25 July 2026',
    // Demo image (Unsplash) — replace when final asset is ready:
    // https://images.unsplash.com/photo-1515091943-9d5c0ad475af?w=900&q=80&auto=format&fit=crop
    image: 'https://images.unsplash.com/photo-1515091943-9d5c0ad475af?w=900&q=80&auto=format&fit=crop',
    colorLayer: EVENT_OVERLAY,
    badge: 'Now Open',
    overlayCity: 'India',
    date: '25 July 2026',
    time: '6:00 PM onwards',
    entry: 'Free entry',
    description:
      'Will average people still matter? Join the conversation at the heart of the tour — a night of reflection, courage, and human possibility.',
    registerCity: 'India',
    dotLabel: 'India',
    isOpen: true,
  },
  {
    id: 'new-york',
    label: 'New York',
    ariaLabel: 'New York — Coming soon',
    // Demo image (Unsplash) — replace when final asset is ready:
    // https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=900&q=80&auto=format&fit=crop
    image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=900&q=80&auto=format&fit=crop',
    colorLayer: EVENT_OVERLAY,
    badge: COMING_SOON.badge,
    overlayCity: 'New York',
    date: COMING_SOON.date,
    time: COMING_SOON.time,
    entry: COMING_SOON.entry,
    description: COMING_SOON.description,
    registerCity: 'New York',
    dotLabel: 'New York',
    isOpen: false,
  },
  {
    id: 'paris',
    label: 'Paris',
    ariaLabel: 'Paris — Coming soon',
    // Demo image (Unsplash) — replace when final asset is ready:
    // https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=900&q=80&auto=format&fit=crop
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=900&q=80&auto=format&fit=crop',
    colorLayer: EVENT_OVERLAY,
    badge: COMING_SOON.badge,
    overlayCity: 'Paris',
    date: COMING_SOON.date,
    time: COMING_SOON.time,
    entry: COMING_SOON.entry,
    description: COMING_SOON.description,
    registerCity: 'Paris',
    dotLabel: 'Paris',
    isOpen: false,
  },
  {
    id: 'london',
    label: 'London',
    ariaLabel: 'London — Coming soon',
    // Demo image (Unsplash) — replace when final asset is ready:
    // https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80&auto=format&fit=crop
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80&auto=format&fit=crop',
    colorLayer: EVENT_OVERLAY,
    badge: COMING_SOON.badge,
    overlayCity: 'London',
    date: COMING_SOON.date,
    time: COMING_SOON.time,
    entry: COMING_SOON.entry,
    description: COMING_SOON.description,
    registerCity: 'London',
    dotLabel: 'London',
    isOpen: false,
  },
  {
    id: 'singapore',
    label: 'Singapore',
    ariaLabel: 'Singapore — Coming soon',
    // Demo image (Unsplash) — replace when final asset is ready:
    // https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=900&q=80&auto=format&fit=crop
    image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=900&q=80&auto=format&fit=crop',
    colorLayer: EVENT_OVERLAY,
    badge: COMING_SOON.badge,
    overlayCity: 'Singapore',
    date: COMING_SOON.date,
    time: COMING_SOON.time,
    entry: COMING_SOON.entry,
    description: COMING_SOON.description,
    registerCity: 'Singapore',
    dotLabel: 'Singapore',
    isOpen: false,
  },
]
