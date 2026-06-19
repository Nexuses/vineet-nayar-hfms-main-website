export interface City {
  city: string
  isoDate: string
  dateDisplay: string
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
    theme: 'Will Average People Still Matter?',
    cardImage: unsplash('1587474260584-136574528ed5'),
    registerUrl: 'https://vineetnayar-events.vercel.app/events/evt_1781527463423_h2wxif9',
  },
  {
    city: 'Mumbai',
    isoDate: '2026-08-08',
    dateDisplay: '8th August 2026',
    theme: 'The Human Advantage',
    cardImage: unsplash('1570168007204-dfb528c6958f'),
    registerUrl: 'https://vineetnayar-events.vercel.app/events/evt_1781772429820_uxuusi0',
  },
  {
    city: 'Bengaluru',
    isoDate: '2026-08-22',
    dateDisplay: '22nd August 2026',
    theme: 'What AI Cannot Replace',
    cardImage: unsplash('1596176530529-78163a4f7af2'),
    registerUrl: 'https://vineetnayar-events.vercel.app/events/evt_1781772567415_emjy44w',
  },
  {
    city: 'Hyderabad',
    isoDate: '2026-09-05',
    dateDisplay: '5th Sept 2026',
    theme: 'Why Human Potential Still Wins',
    cardImage: '/assets/figma/char-minar (1).png',
    registerUrl: 'https://vineetnayar-events.vercel.app/events/evt_1781772675328_3a2ebk4',
  },
  {
    city: 'Chennai',
    isoDate: '2026-09-19',
    dateDisplay: '19th Sept 2026',
    theme: 'Stay Curious. Stay Inspired.',
    cardImage: unsplash('1582510003544-4d00b7f74220'),
    registerUrl: 'https://vineetnayar-events.vercel.app/events/evt_1781772780484_u9hmy0b',
  },
  {
    city: 'Kolkata',
    isoDate: '2026-10-03',
    dateDisplay: '3rd Oct 2026',
    theme: 'What Part of Being Human Will You Never Give Up?',
    cardImage: unsplash('1677307816181-1446ab18913e'),
    registerUrl: 'https://vineetnayar-events.vercel.app/events/evt_1781772877547_zjbwzho',
  },
]
