export interface City {
  city: string
  isoDate: string
  dateDisplay: string
  theme: string
  cardImage: string
}

export const CITIES_HEADING = {
  titleLead: 'Come Join the Movement',
  titleHighlight: 'in Your City',
} as const

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
  },
  {
    city: 'Mumbai',
    isoDate: '2026-08-08',
    dateDisplay: '8th August 2026',
    theme: 'The Human Advantage',
    cardImage: unsplash('1570168007204-dfb528c6958f'),
  },
  {
    city: 'Bengaluru',
    isoDate: '2026-08-22',
    dateDisplay: '22nd August 2026',
    theme: 'What AI Cannot Replace',
    cardImage: unsplash('1596176530529-78163a4f7af2'),
  },
  {
    city: 'Hyderabad',
    isoDate: '2026-09-05',
    dateDisplay: '5th Sept 2026',
    theme: 'Why Human Potential Still Wins',
    cardImage: unsplash('1578662996442-48f60103fc96'),
  },
  {
    city: 'Chennai',
    isoDate: '2026-09-19',
    dateDisplay: '19th Sept 2026',
    theme: 'Stay Curious. Stay Inspired.',
    cardImage: unsplash('1582510003544-4d00b7f74220'),
  },
  {
    city: 'Kolkata',
    isoDate: '2026-10-03',
    dateDisplay: '3rd Oct 2026',
    theme: 'What Part of Being Human Will You Never Give Up?',
    cardImage: unsplash('1603262110263-fb0112e7cc33'),
  },
]
