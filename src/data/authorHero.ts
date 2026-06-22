export const AUTHOR_HERO_HEADING = {
  titleLead: 'About',
  titleHighlight: 'The Author',
} as const

export const AUTHOR_HERO_BODY = [
  'VINEET NAYAR is the former CEO of HCL Technologies (HCLT) and Global bestselling author of Employees First, Customers Second one of the most influential management books of the last two decades.',
  'At HCLT, he led one of the IT industry\'s most celebrated transformations by putting human potential at the centre of business performance. Today, as founder chairman of Sampark Foundation, he is helping transform learning outcomes for millions of children across rural India using technology designed to amplify human potential, not replace it.',
  'Across boardrooms and classrooms, one belief has guided everything he does: Human beings achieve extraordinary things when somebody helps them believe they are capable of more.',
  'Humans First, Machines Second is that belief reimagined for the age of AI.',
] as const

export const AUTHOR_HERO_QUOTE =
  'AI is the great equalizer because it\'s remarkably powerful and available to all. The only true differentiator left? People.'

export type AuthorCredentialIcon = 'person' | 'book' | 'audience' | 'star'

export interface AuthorCredential {
  icon: AuthorCredentialIcon
  title?: string
  stat?: string
  subtitle: string
}

export const AUTHOR_CREDENTIALS: AuthorCredential[] = [
  {
    icon: 'person',
    title: 'Internationally Acclaimed',
    subtitle: 'Speaker, Podcast Host & Executive Coach',
  },
  {
    icon: 'book',
    title: 'Recognised Author & Expert',
    subtitle: 'Employees First, Customers Second — Global Bestseller',
  },
  {
    icon: 'audience',
    stat: '500,000+',
    subtitle: 'Attendees Inspired at Live Seminars Around the Globe',
  },
  {
    icon: 'star',
    title: 'Leading Provider of',
    subtitle: 'Values-Based Human Potential Resources',
  },
]

export const AUTHOR_PORTRAIT_URL =
  'https://ik.imagekit.io/zkan0at6z/Vineet-nayar/vineet-nayar.webp'

export const AUTHOR_SIGNATURE_INVERTED_URL =
  'https://ik.imagekit.io/zkan0at6z/Vineet-nayar/signature.png'
