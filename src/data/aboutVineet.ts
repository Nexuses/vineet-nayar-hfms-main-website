import { ASSETS } from './site'

export const ABOUT_VINEET_META = {
  title: 'About Vineet Nayar — The Humans First Series',
  description: 'Learn about Vineet Nayar — leader, author, and champion of human potential in the age of AI.',
} as const

export const ABOUT_VINEET_HERO = {
  eyebrow: 'About',
  headlineLead: 'A voice for human potential',
  headlineHighlight: 'in the age of AI.',
  subline: 'Placeholder supporting line — layout matching the Framer hero structure.',
  primaryCta: 'Start for free',
  secondaryCta: 'Book a demo',
} as const

export interface ShowcaseCard {
  id: string
  category: string
  title: string
  body: string
  cta: string
  image: string
  tone: 'light' | 'dark' | 'accent'
}

export const ABOUT_VINEET_SHOWCASE: ShowcaseCard[] = [
  {
    id: 'tech-opal',
    category: 'Technology',
    title: 'Tech Opal',
    body: 'The first webcam designed for laptops.',
    cta: 'Read more',
    image: ASSETS.avatar,
    tone: 'dark',
  },
  {
    id: 'accelerator',
    category: 'Accelerator',
    title: 'Google for startups',
    body: 'Started by you. Accelerated with Google.',
    cta: 'Read more',
    image: '/assets/figma/city.png',
    tone: 'accent',
  },
  {
    id: 'ecommerce',
    category: 'E-commerce',
    title: 'Shopify',
    body: 'The all-in-one commerce platform.',
    cta: 'Read more',
    image: '/assets/figma/book.png',
    tone: 'light',
  },
  {
    id: 'confectionery',
    category: 'Confectionery industry',
    title: "Cote d'or",
    body: 'We go for gold.',
    cta: 'Read more',
    image: '/assets/figma/empower.png',
    tone: 'dark',
  },
  {
    id: 'software',
    category: 'Software',
    title: 'Notion',
    body: 'The AI workspace that works for you.',
    cta: 'Read more',
    image: '/assets/figma/trust.png',
    tone: 'accent',
  },
  {
    id: 'movement',
    category: 'Movement',
    title: 'Humans First Series',
    body: 'A six-city conversation about what humans refuse to lose.',
    cta: 'Read more',
    image: '/assets/figma/reimagine.png',
    tone: 'light',
  },
]
