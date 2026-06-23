export interface City {
  city: string
  isoDate: string
  dateDisplay: string
  venue: string
  theme: string
  cardImage: string
  registerUrl: string
}

export const CITIES_HEADING = {
  titleLead: 'Come Join the Movement',
  titleHighlight: 'in Your City',
} as const

export function getEventDayOfWeek(isoDate: string): string {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString('en-IN', { weekday: 'long' })
}

function unsplash(id: string) {
  return `https://images.unsplash.com/photo-${id}?w=640&q=80&auto=format&fit=crop`
}

export const CITIES: City[] = [
  {
    city: 'Delhi',
    isoDate: '2026-07-25',
    dateDisplay: '25 July 2026',
    venue: 'Dr Ambedkar International Centre',
    theme: 'Will Average People Still Matter?',
    cardImage: unsplash('1587474260584-136574528ed5'),
    registerUrl: 'https://events.hfmsbook.com/events/evt_1782204507893_yu1e3jh',
  },
  {
    city: 'Mumbai',
    isoDate: '2026-08-08',
    dateDisplay: '8th August 2026',
    venue: 'NSE',
    theme: 'The Human Advantage',
    cardImage: unsplash('1570168007204-dfb528c6958f'),
    registerUrl: 'https://events.hfmsbook.com/events/evt_1782206616842_rdumm5m',
  },
  {
    city: 'Bengaluru',
    isoDate: '2026-08-22',
    dateDisplay: '22nd August 2026',
    venue: 'Bhartiya Vidya Bhawan',
    theme: 'What AI Cannot Replace',
    cardImage: unsplash('1596176530529-78163a4f7af2'),
    registerUrl: 'https://events.hfmsbook.com/events/evt_1782206784481_37gn7y8',
  },
  {
    city: 'Hyderabad',
    isoDate: '2026-09-05',
    dateDisplay: '5th Sept 2026',
    venue: 'ISB',
    theme: 'Why Human Potential Still Wins',
    cardImage: unsplash('1551161242-b5af797b7233'),
    registerUrl: 'https://events.hfmsbook.com/events/evt_1782206956504_6kep5s6',
  },
  {
    city: 'Chennai',
    isoDate: '2026-09-19',
    dateDisplay: '19th Sept 2026',
    venue: 'Anna Library',
    theme: 'Stay Curious. Stay Inspired.',
    cardImage: unsplash('1582510003544-4d00b7f74220'),
    registerUrl: 'https://events.hfmsbook.com/events/evt_1782207095662_7wo2iav',
  },
  {
    city: 'Kolkata',
    isoDate: '2026-10-09',
    dateDisplay: '9th Oct 2026',
    venue: 'Tollygunge Club',
    theme: 'What Part of Being Human Will You Never Give Up?',
    cardImage: unsplash('1677307816181-1446ab18913e'),
    registerUrl: 'https://events.hfmsbook.com/events/evt_1782207229198_xl03tt1',
  },
]
