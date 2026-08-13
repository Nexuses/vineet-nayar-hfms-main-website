export interface City {
  city: string
  isoDate: string
  startIso: string
  dateDisplay: string
  venue: string
  theme: string
  cardImage: string
  registerUrl: string
  /** Set once the event has happened — replaces the countdown and the register link. */
  completed?: {
    headline: string
    note: string
  }
}

export const CITIES_HEADING = {
  titleLead: 'Meet Vineet Nayar in your city',
  titleHighlight: 'to join the movement',
  subtitle: 'No Entry Fee. Invitation Only.',
} as const

export function getEventDayOfWeek(isoDate: string): string {
  return new Date(`${isoDate}T12:00:00`).toLocaleDateString('en-IN', { weekday: 'long' })
}

export const CITIES: City[] = [
  {
    city: 'Delhi',
    isoDate: '2026-08-02',
    startIso: '2026-08-02T16:00:00+05:30',
    dateDisplay: '2 Aug 2026',
    venue: 'Bhim Hall, Dr.Ambedkar International Centre (DAIC)',
    theme: 'Will Average People Still Matter?',
    cardImage: 'https://nexuses.s3.us-east-2.amazonaws.com/Delhi_1784029961401_c28m.png',
    registerUrl: 'https://events.hfmsbook.com/events/evt_1782204507893_yu1e3jh',
    completed: {
      headline: 'Delhi event was a blast',
      note: 'Registration for this city has closed.',
    },
  },
  {
    city: 'Mumbai',
    isoDate: '2026-08-08',
    startIso: '2026-08-08T16:00:00+05:30',
    dateDisplay: '8 Aug 2026',
    venue: 'Atrium Hall, National Stock Exchange (NSE)',
    theme: 'The Human Advantage',
    cardImage: 'https://nexuses.s3.us-east-2.amazonaws.com/mumbai_1784029961402_nhbs.png',
    registerUrl: 'https://events.hfmsbook.com/events/evt_1782206616842_rdumm5m',
    completed: {
      headline: 'Mumbai event was a blast',
      note: 'Registration for this city has been closed.',
    },
  },
  {
    city: 'Bengaluru',
    isoDate: '2026-09-06',
    startIso: '2026-09-06T15:00:00+05:30',
    dateDisplay: '6 Sep 2026',
    venue: 'MLR Convention, J.P Nagar',
    theme: 'What AI Cannot Replace',
    cardImage: 'https://hfms-book.s3.us-east-2.amazonaws.com/image__1__1786626438803_zj47.png',
    registerUrl: 'https://events.hfmsbook.com/events/evt_1782206784481_37gn7y8',
  },
  {
    city: 'Hyderabad',
    isoDate: '2026-09-05',
    startIso: '2026-09-05T16:00:00+05:30',
    dateDisplay: '5 Sep 2026',
    venue: 'The Pearl Club, Mindspace Business Park',
    theme: 'Why Human Potential Still Wins',
    cardImage: 'https://nexuses.s3.us-east-2.amazonaws.com/hyderabad_1784029961401_f4er.png',
    registerUrl: 'https://events.hfmsbook.com/events/evt_1782206956504_6kep5s6',
  },
  {
    city: 'Chennai',
    isoDate: '2026-09-19',
    startIso: '2026-09-19T16:00:00+05:30',
    dateDisplay: '19 Sep 2026',
    venue: 'Anna Centenary Library - Auditorium',
    theme: 'Stay Curious. Stay Inspired.',
    cardImage: 'https://nexuses.s3.us-east-2.amazonaws.com/chennai_1784029961401_7yjt.png',
    registerUrl: 'https://events.hfmsbook.com/events/evt_1782207095662_7wo2iav',
  },
  {
    city: 'Kolkata',
    isoDate: '2026-10-09',
    startIso: '2026-10-09T16:00:00+05:30',
    dateDisplay: '9 Oct 2026',
    venue: 'The Tollygunge Club',
    theme: 'What Part of Being Human Will You Never Give Up?',
    cardImage: 'https://nexuses.s3.us-east-2.amazonaws.com/kolkata_1784029961401_1rk3.png',
    registerUrl: 'https://events.hfmsbook.com/events/evt_1782207229198_xl03tt1',
  },
]
