export interface FaqItem {
  question: string
  answer: string
  open?: boolean
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Is this a book launch?',
    answer:
      'No. The book begins the conversation, but the room belongs to the people in it. Expect a live talk, questions, the Humans First Wall, the Promise and a signing experience.',
    open: true,
  },
  {
    question: 'Who should attend?',
    answer:
      'Students, professionals, educators, entrepreneurs, parents and leaders, especially anyone who has quietly wondered, "Will I still matter in the age of AI?"',
  },
  {
    question: 'Is registration free?',
    answer:
      'Yes. Seats are free, public and limited. Once a city fills, new registrations move to a waiting list.',
  },
  {
    question: 'What is the Humans First Wall?',
    answer:
      'It is a living wall at every city event where attendees answer one question: what part of being human will you never give up?',
  },
  {
    question: 'Will the event be technical?',
    answer:
      'No. This is not an AI trends session. It is a human conversation about relevance, courage, judgment, possibility and how to win without becoming machine-like.',
  },
]
