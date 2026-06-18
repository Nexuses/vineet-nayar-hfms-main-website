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
}

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
    colorLayer: 'linear-gradient(160deg, rgba(17,17,17,0.3) 0%, rgba(17,17,17,0.88) 100%)',
    badge: 'Now Open',
    overlayCity: 'India',
    date: '25 July 2026',
    time: '6:00 PM onwards',
    entry: 'Free entry',
    description:
      'Will average people still matter? Join the conversation at the heart of the tour — a night of reflection, courage, and human possibility.',
    registerCity: 'India',
    dotLabel: 'India',
  },
  {
    id: 'new-york',
    label: 'New York',
    ariaLabel: 'New York — 1 August 2026',
    // Demo image (Unsplash) — replace when final asset is ready:
    // https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=900&q=80&auto=format&fit=crop
    image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=900&q=80&auto=format&fit=crop',
    colorLayer: 'linear-gradient(160deg, rgba(17,17,17,0.28) 0%, rgba(17,17,17,0.86) 100%)',
    badge: 'Selling Fast',
    overlayCity: 'New York',
    date: '1 August 2026',
    time: '7:00 PM onwards',
    entry: 'Free entry',
    description:
      'The Human Advantage. The city that never sleeps hosts one evening where being human is the competitive edge that cannot be automated away.',
    registerCity: 'New York',
    dotLabel: 'New York',
  },
  {
    id: 'paris',
    label: 'Paris',
    ariaLabel: 'Paris — 8 August 2026',
    // Demo image (Unsplash) — replace when final asset is ready:
    // https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=900&q=80&auto=format&fit=crop
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=900&q=80&auto=format&fit=crop',
    colorLayer: 'linear-gradient(160deg, rgba(17,17,17,0.28) 0%, rgba(17,17,17,0.86) 100%)',
    badge: 'Tech Hub',
    overlayCity: 'Paris',
    date: '8 August 2026',
    time: '6:30 PM onwards',
    entry: 'Free entry',
    description:
      'What AI Cannot Replace. Where art meets innovation — Paris asks what stays irreplaceable when machines get brilliant.',
    registerCity: 'Paris',
    dotLabel: 'Paris',
  },
  {
    id: 'london',
    label: 'London',
    ariaLabel: 'London — 15 August 2026',
    // Demo image (Unsplash) — replace when final asset is ready:
    // https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80&auto=format&fit=crop
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80&auto=format&fit=crop',
    colorLayer: 'linear-gradient(160deg, rgba(17,17,17,0.28) 0%, rgba(17,17,17,0.86) 100%)',
    badge: 'Independence Day',
    overlayCity: 'London',
    date: '15 August 2026',
    time: '6:00 PM onwards',
    entry: 'Free entry',
    description:
      'Why Human Potential Still Wins. London celebrates the original intelligence — the kind that cannot be downloaded.',
    registerCity: 'London',
    dotLabel: 'London',
  },
  {
    id: 'singapore',
    label: 'Singapore',
    ariaLabel: 'Singapore — 22 August 2026',
    // Demo image (Unsplash) — replace when final asset is ready:
    // https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=900&q=80&auto=format&fit=crop
    image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=900&q=80&auto=format&fit=crop',
    colorLayer: 'linear-gradient(160deg, rgba(17,17,17,0.28) 0%, rgba(17,17,17,0.86) 100%)',
    badge: 'Limited Seats',
    overlayCity: 'Singapore',
    date: '22 August 2026',
    time: '6:30 PM onwards',
    entry: 'Free entry',
    description:
      'Stay Curious. Stay Inspired. Singapore asks: what happens when curiosity is the last thing left that machines cannot fake?',
    registerCity: 'Singapore',
    dotLabel: 'Singapore',
  },
]
