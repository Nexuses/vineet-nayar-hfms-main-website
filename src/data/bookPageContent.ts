export const BOOK_PAGE_META = {
  title: 'About the Book — Humans First, Machines Second',
  eyebrow: 'About the book',
  bookTitle: 'Humans First, Machines Second',
  bookSubtitle: '30 Sparks to Reimagine Winning',
  bookTagline: 'in the Age of AI',
  byline: 'By Vineet Nayar | Published by Penguin Business',
} as const

export const BOOK_OPENING = {
  heading: 'Something unsettling',
  highlight: 'is happening.',
  paragraphs: [
    'Young people are beginning to feel average before life has even started. Professionals are exhausting themselves trying to prove they still matter in a world obsessed with speed, optimization and constant reinvention.',
    'In our pursuit of smarter machines, many are starting to believe they are replaceable.',
  ],
} as const

export const BOOK_ANSWER_PARAGRAPHS = [
  "Humans First, Machines Second is Vineet Nayar's answer. Through 30 sparks, powerful stories and hard-won lessons from boardrooms, classrooms and crises, the book reveals a radically different path to winning in the age of AI. Not by competing with machines on speed. But by rediscovering what makes human beings extraordinary and irreplaceable.",
  'Provocative, practical and deeply hopeful, this is a guide for anyone who wants to thrive, lead and remain human in a world being redesigned by AI.',
] as const

export const BOOK_QUOTE = '“AI may change the rules. But only humans decide who wins.”'

export interface BookPart {
  title: string
  body: string
}

export const BOOK_PARTS: BookPart[] = [
  {
    title: 'Trust',
    body: "Stability isn't certainty. It's the belief in people before the algorithm kicks in.",
  },
  {
    title: 'Empower',
    body: 'Not permission. Belief. In people\'s ability to act, lead and decide without being told.',
  },
  {
    title: 'Amplify',
    body: 'AI should make humans more brilliant, not redundant. The tool should serve the person, not replace them.',
  },
  {
    title: 'Reimagine',
    body: 'Winning in the age of AI means playing a different game, one only humans can win.',
  },
]

export const BOOK_AVAILABILITY = {
  heading: 'Available Now',
  highlight: 'Humans First, Machines Second',
  body: 'is published by Penguin Business. Available at leading bookstores and online.',
  ctaLead: 'But first — meet the ideas live.',
  ctaBody: 'Join Vineet at The Humans First Series in a city near you.',
  ctaLabel: 'Register to Meet Vineet Nayar',
  amazonLabel: 'Available on Amazon',
  amazonUrl: 'https://www.amazon.in/s?k=Humans+First+Machines+Second+Vineet+Nayar',
} as const
