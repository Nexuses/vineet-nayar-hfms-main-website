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
  bookPage: true,
} as const

export type NavLinkItem = {
  href: string
  label: string
  side: 'left' | 'right'
  sectionId?: string
  isRoute?: boolean
}

export type NavDropdownItem = {
  href: string
  label: string
  sectionId: string
}

export const NAV_EXPLORE_ITEMS: NavDropdownItem[] = [
  { href: '#mosaic', label: 'Vineet Nayar in Action', sectionId: 'mosaic' },
  { href: '#cities-events', label: 'The world tour', sectionId: 'cities-events' },
]

const MANIFESTO_NAV: NavLinkItem[] = FEATURES.manifesto
  ? [{ href: '#manifesto', label: 'Manifesto', sectionId: 'manifesto', side: 'left' }]
  : []

const BOOK_NAV: NavLinkItem[] = FEATURES.bookPage
  ? [{ href: '/book', label: 'More Books', isRoute: true, side: 'left' }]
  : []

export const NAV_LINKS: NavLinkItem[] = [
  ...MANIFESTO_NAV,
  { href: '#cities-cards', label: 'Join Us', sectionId: 'cities-cards', side: 'left' },
  ...BOOK_NAV,
  { href: '#wall', label: 'The Wall', sectionId: 'wall', side: 'right' },
]

export type FooterNavLink = Pick<NavLinkItem, 'href' | 'label' | 'sectionId' | 'isRoute'>

export const FOOTER_QUICK_LINKS: FooterNavLink[] = [
  ...NAV_LINKS.filter((link) => link.side === 'left').map(({ href, label, sectionId, isRoute }) => ({
    href,
    label,
    sectionId,
    isRoute,
  })),
  ...NAV_EXPLORE_ITEMS.map(({ href, label, sectionId }) => ({
    href,
    label,
    sectionId,
  })),
  ...NAV_LINKS.filter((link) => link.side === 'right').map(({ href, label, sectionId, isRoute }) => ({
    href,
    label,
    sectionId,
    isRoute,
  })),
]

export const FOOTER_LINKS = {
  explore: FOOTER_QUICK_LINKS,
  social: [
    { href: 'https://www.linkedin.com/in/vineetnayar?originalSubdomain=in', label: 'LinkedIn' },
    { href: 'https://www.instagram.com/vn.nayar/?hl=en', label: 'Instagram' },
    { href: 'https://x.com/vineetnayar', label: 'X' },
    { href: 'https://www.facebook.com/VineetNayar.EmployeesFirst', label: 'Facebook' },
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
  favicon: '/assets/figma/favicon.png',
  heroMark: '/assets/figma/hero-mark.png',
  avatar: '/assets/figma/avatar.png',
  promiseVideo: '/assets/figma/bgvideo.mp4',
} as const
