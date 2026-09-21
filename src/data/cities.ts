export interface City {
  city: string
  isoDate: string
  startIso: string
  dateDisplay: string
  venue: string
  theme: string
  cardImage: string
  registerUrl: string
  /** Registration is shut for this city — replaces the register link with a notice. */
  completed?: {
    /** Wrap-up line shown in place of the countdown. Add only once the event has happened. */
    headline?: string
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
      headline: 'Delhi event was a blast!',
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
      headline: 'Mumbai event was a blast!',
      note: 'Registration for this city has been closed.',
    },
  },
  {
    city: 'Bengaluru',
    isoDate: '2026-09-06',
    startIso: '2026-09-06T16:00:00+05:30',
    dateDisplay: '6 Sep 2026',
    venue: 'MLR Convention, J.P Nagar',
    theme: 'What AI Cannot Replace',
    cardImage: 'https://hfms-book.s3.us-east-2.amazonaws.com/image__1__1786626438803_zj47.png',
    registerUrl: 'https://events.hfmsbook.com/events/evt_1782206784481_37gn7y8',
    completed: {
      headline: 'Bengaluru event was a blast!',
      note: 'Registration for this city has been closed.',
    },
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
    completed: {
      headline: 'Chennai event was a blast!',
      note: 'Registration for this city has been closed.',
    },
  },
  {
    city: 'Hyderabad',
    isoDate: '2026-09-27',
    startIso: '2026-09-27T16:00:00+05:30',
    dateDisplay: '27 Sep 2026',
    venue: 'The Pearl Club, Mindspace Business Park',
    theme: 'Why Human Potential Still Wins',
    cardImage: 'https://nexuses.s3.us-east-2.amazonaws.com/hyderabad_1784029961401_f4er.png',
    registerUrl: 'https://events.hfmsbook.com/events/evt_1782206956504_6kep5s6',
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

/** A city counts as done once it has a wrap-up headline, not merely closed registrations. */
function hasTakenPlace(city: City): boolean {
  return Boolean(city.completed?.headline)
}

/**
 * Display order for the city grid: events still to come lead with the soonest
 * first, and events that have already happened sit below them, latest first.
 * A city whose registrations have shut but whose event is still ahead
 * stays up top. Sorting on static fields only, so server and client agree.
 */
export const ORDERED_CITIES: City[] = [...CITIES].sort((a, b) => {
  const done = Number(hasTakenPlace(a)) - Number(hasTakenPlace(b))
  if (done !== 0) return done
  // Upcoming events count down towards us; past ones lead with the latest.
  return hasTakenPlace(a)
    ? b.isoDate.localeCompare(a.isoDate)
    : a.isoDate.localeCompare(b.isoDate)
})
