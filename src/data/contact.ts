import { BOOK_AVAILABILITY } from './bookPageContent'
import { SITE } from './site'

export const CONTACT_META = {
  title: 'Contact — The Humans First Series',
  description: 'Get in touch with the Humans First team. Questions, ideas, or city registration — we are here to connect.',
} as const

export const CONTACT_HERO = {
  eyebrow: "Let's talk",
  heading: 'Joining the conversation',
  body: 'We are here to answer, guide, and help you find your city on the Humans First tour.',
  ctaLabel: 'Drop a message',
  ctaHref: '#messages',
  image: {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
    alt: 'People in conversation at a workshop',
  },
  details: [
    {
      label: 'Headquarters',
      value: 'Demo Tower, 10th Floor\nMumbai, Maharashtra\nIndia',
    },
    {
      label: 'Email',
      value: SITE.email,
      href: `mailto:${SITE.email}` as string,
    },
    {
      label: 'Response time',
      value: 'Within 2 business days',
    },
  ] as const,
} as const

export const CONTACT_FORM = {
  eyebrow: 'Message us',
  heading: "We're just a message away",
  body: 'Whether you have a question, an idea, or you want to register for a city event — drop us a line. We are always here to connect.',
  fields: {
    name: 'Name',
    email: 'Email address',
    subject: 'Subject',
    message: 'Message',
  },
  submitLabel: 'Send message',
} as const

export const CONTACT_CTA = {
  eyebrow: 'Ready to begin?',
  heading: 'Be part of something bigger than the book.',
  body: 'Six cities. One conversation. Join the movement in person or start with the book.',
  primaryLabel: 'Register to meet Vineet Nayar',
  secondaryLabel: 'Buy on Amazon',
  amazonUrl: BOOK_AVAILABILITY.amazonUrl,
  videoPoster:
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80',
} as const
