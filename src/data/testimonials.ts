export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  initials: string
}

export interface TestimonialRow {
  id: string
  speed: string
  direction: 'left' | 'right'
  items: Testimonial[]
}

export const TESTIMONIALS_HEADING = {
  titleLead: 'What people are saying',
  titleHighlight: 'about the movement',
  lede: 'Voices from the rooms where the Humans First conversation is already happening.',
} as const

/**
 * PLACEHOLDER COPY — these are sample testimonials written to fill the layout.
 * Replace every entry with real, attributable quotes before promoting the page.
 */
export const TESTIMONIAL_ROWS: TestimonialRow[] = [
  {
    id: 'row-1',
    speed: '198s',
    direction: 'left',
    items: [
      {
        id: 't1',
        quote:
          'I walked in expecting a talk about AI. I walked out rethinking how we treat the people who work for us.',
        name: 'Ananya Raghavan',
        role: 'Chief People Officer, IT Services',
        initials: 'AR',
      },
      {
        id: 't2',
        quote:
          'The most honest conversation about technology and work I have been part of in a decade.',
        name: 'Daniel Okafor',
        role: 'Managing Director, Consulting',
        initials: 'DO',
      },
      {
        id: 't3',
        quote:
          'Vineet does not sell optimism. He makes a case for human judgement and then dares you to act on it.',
        name: 'Meera Sundaram',
        role: 'Founder, Product Studio',
        initials: 'MS',
      },
      {
        id: 't4',
        quote:
          'Our leadership team quoted this session for weeks. It changed how we wrote our hiring plan.',
        name: 'Rohit Malhotra',
        role: 'VP Engineering, Fintech',
        initials: 'RM',
      },
      {
        id: 't5',
        quote:
          'A rare event that respects your intelligence and still leaves you genuinely moved.',
        name: 'Priya Deshpande',
        role: 'Head of Learning, Manufacturing',
        initials: 'PD',
      },
      {
        id: 't6',
        quote:
          'Employees First was required reading on my team. Hearing the thinking behind it in person was something else entirely.',
        name: 'Sarah Whitfield',
        role: 'Operations Director, Retail',
        initials: 'SW',
      },
      {
        id: 't7',
        quote:
          'He asked what part of being human we would never give up. Nobody in the room had a quick answer.',
        name: 'Karthik Iyer',
        role: 'Partner, Venture Fund',
        initials: 'KI',
      },
      {
        id: 't8',
        quote:
          'Practical, not preachy. I left with three things I could change on Monday morning.',
        name: 'Fatima Al-Rashid',
        role: 'Transformation Lead, Banking',
        initials: 'FA',
      },
      {
        id: 't9',
        quote:
          'The room was full of sceptics. By the end it was full of people exchanging numbers.',
        name: 'Arjun Nair',
        role: 'Country Manager, Logistics',
        initials: 'AN',
      },
      {
        id: 't10',
        quote:
          'It reframed automation for us as a design choice, not an inevitability. That distinction matters.',
        name: 'Elena Duarte',
        role: 'Chief Strategy Officer, Healthcare',
        initials: 'ED',
      },
      {
        id: 't11',
        quote:
          'I brought two colleagues. Next city, I am bringing my whole leadership team.',
        name: 'Nikhil Bansal',
        role: 'Co-founder, SaaS Platform',
        initials: 'NB',
      },
      {
        id: 't12',
        quote:
          'Generous with the failures, not just the wins. That is what made it credible.',
        name: 'Grace Mbeki',
        role: 'People Partner, Telecom',
        initials: 'GM',
      },
      {
        id: 't13',
        quote:
          'A reminder that culture is not a poster on a wall. It is what you fund and who you promote.',
        name: 'Sanjana Kapoor',
        role: 'Director, Corporate Affairs',
        initials: 'SK',
      },
      {
        id: 't14',
        quote:
          'The best two hours I have spent on my own thinking all year.',
        name: 'Thomas Berger',
        role: 'Head of Innovation, Automotive',
        initials: 'TB',
      },
      {
        id: 't15',
        quote:
          'It gave language to something my team had been circling for months.',
        name: 'Divya Krishnan',
        role: 'Program Director, Education',
        initials: 'DK',
      },
    ],
  },
  {
    id: 'row-2',
    speed: '132s',
    direction: 'right',
    items: [
      {
        id: 't16',
        quote:
          'We stopped asking which roles to cut and started asking which ones to grow. That shift came from this room.',
        name: 'Imran Qureshi',
        role: 'Chief Operating Officer, Insurance',
        initials: 'IQ',
      },
      {
        id: 't17',
        quote:
          'No slides full of predictions. Just hard questions and the space to sit with them.',
        name: 'Laura Jensen',
        role: 'Board Advisor, Private Equity',
        initials: 'LJ',
      },
      {
        id: 't18',
        quote:
          'My most cynical engineer came up afterwards and said he had been wrong. That never happens.',
        name: 'Vikram Shetty',
        role: 'CTO, Enterprise Software',
        initials: 'VS',
      },
      {
        id: 't19',
        quote:
          'The framing of trust as infrastructure rather than sentiment stayed with me all week.',
        name: 'Aisha Bello',
        role: 'Head of Culture, Media Group',
        initials: 'AB',
      },
      {
        id: 't20',
        quote:
          'I have sat through a lot of leadership events. This one actually changed a decision we made.',
        name: 'Rahul Menon',
        role: 'General Manager, Hospitality',
        initials: 'RM',
      },
      {
        id: 't21',
        quote:
          'It made the business case for humanity without ever getting sentimental about it.',
        name: 'Chen Wei',
        role: 'Regional Director, Supply Chain',
        initials: 'CW',
      },
      {
        id: 't22',
        quote:
          'Our graduates left with more clarity about their careers than any campus talk has given them.',
        name: 'Nandini Rao',
        role: 'Dean, Business School',
        initials: 'NR',
      },
      {
        id: 't23',
        quote:
          'The honesty about what went wrong at HCL was worth the trip on its own.',
        name: 'Peter Lindqvist',
        role: 'Group CEO, Industrial Services',
        initials: 'PL',
      },
      {
        id: 't24',
        quote:
          'I expected a book promotion. I got a working session on how we actually run our company.',
        name: 'Shreya Joshi',
        role: 'Head of Talent, Consumer Brands',
        initials: 'SJ',
      },
      {
        id: 't25',
        quote:
          'Two weeks later our managers are still using the language from that evening.',
        name: 'Marcus Hale',
        role: 'Director of People, Logistics Tech',
        initials: 'MH',
      },
    ],
  },
]
