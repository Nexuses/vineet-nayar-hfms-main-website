export interface FaqItem {
  question: string
  answer: string
  open?: boolean
}

export const FAQ_META = {
  title: 'FAQ | Humans First, Machines Second',
  description:
    'Frequently asked questions about The Humans First Series events with Vineet Nayar — invitations, cities, books, and more.',
} as const

export const FAQ_HEADING = {
  eyebrow: 'FAQ',
  titleLead: 'Before you join',
  titleHighlight: 'the room.',
  lede: 'A few clear answers, so the experience can stay simple, human and open.',
} as const

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Who is this event for?',
    answer:
      'From the Industry Leaders to the ones at the Beginning of their Careers, anybody who is interested in AI, its impact, and relevance of Humans in this new age, will take away something important from this event.',
    open: true,
  },
  {
    question: 'Is the event free to attend?',
    answer:
      'Yes, all six events are completely free. However, an invitation is mandatory for entry. You may apply for an invitation to the event in your city here — https://hfmsbook.com/#cities-cards',
  },
  {
    question: 'Can I bring a colleague or family member along, or transfer my invitation to them?',
    answer:
      "Since there's no group registration option, whoever wishes to attend the event needs to apply individually. In case your invitation gets confirmed but you're unable to attend, please inform the team as early as possible, for the seat to be offered to someone else.",
  },
  {
    question: 'I did not receive an invitation, but I still want to attend. What should I do?',
    answer:
      "If you applied but haven't received a confirmation email within 2–3 days, it likely means all seats for this event are currently allocated. We maintain a waitlist, and if a confirmed invitee is unable to attend, their seat is offered to the next applicant on the waitlist. You'll be notified by email if a seat becomes available for you.",
  },
  {
    question: 'Is there any document that I need to bring for the event?',
    answer:
      'You will get an invitation, personally addressed to you, on your email and given WhatsApp number. You need to carry the same for entry to the respective event.\n\n*For the Mumbai event happening at National Stock Exchange (NSE), please carry your Aadhaar Card for identity verification.',
  },
  {
    question: 'Are children permitted at the event?',
    answer: "This is a formal event hence we'd recommend it for attendees aged 18 and above.",
  },
  {
    question: 'Is this event open to press, or is a separate media accreditation required?',
    answer:
      'A separate media accreditation would be required. Reach out with queries to contact@hfmsbook.com and we will get back to you soon.',
  },
  {
    question: 'Will there be similar events in other Indian cities?',
    answer:
      'As of now the events are planned only for the stated 6 cities. Please follow Vineet on LinkedIn or visit hfmsbook.com for updates.',
  },
  {
    question: 'Will there be events outside India too?',
    answer:
      'Yes, a world tour is planned with events in Paris, New York, London, and Singapore, with dates yet to be announced. Follow Vineet on LinkedIn or visit hfmsbook.com for updates.',
  },
  {
    question: 'Do I need to read the book before attending?',
    answer:
      "If you've already read it, you'll find added depth, but it's not a prerequisite, and the session works completely on its own. That said, we do encourage you to bring your copy along for a chance to get it signed by Vineet Nayar at the venue.",
  },
  {
    question: 'Will the book be available to buy at the event?',
    answer:
      'Copies of Humans First, Machines Second are available on Amazon India and at major bookstores. A purchase link is also available on hfmsbook.com. Please pre-order your copy; sooner you order better the chance of receiving it before the event.',
  },
]
