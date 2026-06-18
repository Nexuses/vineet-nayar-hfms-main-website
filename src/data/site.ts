export const SITE = {
  title: 'The Humans First Series - Stay Curious. Stay Inspired.',
  description: 'A movement-led experience website for The Humans First Series with Vineet Nayar.',
  email: 'hello@humansfirst.com',
  copyright: '© 2026 Humans First. All rights reserved.',
  bookCoverUrl: 'https://ik.imagekit.io/zkan0at6z/op%201.png',
  authorSignatureUrl:
    'https://storage.googleapis.com/storage.magicpath.ai/user/291020608010072064/figma-assets/168b845d-7080-4a93-8f59-592f2b1e17f7.png',
  footerGraphicUrl:
    'https://storage.googleapis.com/storage.magicpath.ai/user/291020608010072064/figma-assets/99902f8e-baba-436e-aadf-2038baf65aba.svg',
  wallIframeUrl: 'https://vineetnayar-book-dw.vercel.app/',
} as const

export const FEATURES = {
  manifesto: false,
  movement: false,
  truth: false,
  conversation: false,
  sparks: false,
  experience: false,
  faq: false,
  wallIframe: false,
} as const

export type NavLinkItem = {
  href: string
  label: string
  side: 'left' | 'right'
  sectionId?: string
  isRoute?: boolean
}

const MANIFESTO_NAV: NavLinkItem[] = FEATURES.manifesto
  ? [{ href: '#manifesto', label: 'Manifesto', sectionId: 'manifesto', side: 'left' }]
  : []

export const NAV_LINKS: NavLinkItem[] = [
  ...MANIFESTO_NAV,
  { href: '/book', label: 'The book', isRoute: true, side: 'left' },
  { href: '#cities-cards', label: 'Cities', sectionId: 'cities-cards', side: 'left' },
  { href: '#mosaic', label: 'Watch', sectionId: 'mosaic', side: 'right' },
  { href: '#wall', label: 'The Wall', sectionId: 'wall', side: 'right' },
]

export const FOOTER_LINKS = {
  contact: [
    { href: 'mailto:hello@humansfirst.com?subject=Media%20inquiry', label: 'Media inquiries' },
    { href: 'mailto:hello@humansfirst.com?subject=Speaking%20request', label: 'Speaking requests' },
    { href: 'mailto:hello@humansfirst.com', label: 'Contact us' },
  ],
  social: [
    { href: 'https://www.linkedin.com/', label: 'LinkedIn' },
    { href: 'https://www.instagram.com/', label: 'Instagram' },
    { href: 'https://www.youtube.com/', label: 'YouTube' },
  ],
} as const

export const JOIN_CITY_OPTIONS = [
  'Delhi · 25 Jul',
  'Mumbai · 8 Aug',
  'Bengaluru · 22 Aug',
  'Hyderabad · 5 Sept',
  'Chennai · 19 Sept',
  'Kolkata · 3 Oct',
] as const

export const ASSETS = {
  logo: '/assets/figma/logo-no-underline.png',
  footerLogo: '/assets/figma/logo.png',
  heroMark: '/assets/figma/hero-mark.png',
  avatar: '/assets/figma/avatar.png',
  promiseVideo: '/assets/figma/bgvideo.mp4',
} as const
