export interface VideoCard {
  youtubeId: string
  youtubeUrl: string
  title: string
  description: string
  thumbnail: string
  featured?: boolean
}

export const VIDEOS: VideoCard[] = [
  {
    youtubeId: 'uToRdEeLfw8',
    youtubeUrl: 'https://www.youtube.com/watch?v=uToRdEeLfw8',
    title: 'Why humans still matter',
    description: 'A conversation on self-belief in the age of AI.',
    thumbnail: 'https://img.youtube.com/vi/uToRdEeLfw8/maxresdefault.jpg',
    featured: true,
  },
  {
    youtubeId: '9x0AHyG-ke0',
    youtubeUrl: 'https://www.youtube.com/watch?v=9x0AHyG-ke0',
    title: 'Curiosity',
    description:
      'When answers arrive too easily, curiosity is what keeps people learning, questioning and alive.',
    thumbnail: 'https://img.youtube.com/vi/9x0AHyG-ke0/maxresdefault.jpg',
  },
  {
    youtubeId: 'EW8lk860HPA',
    youtubeUrl: 'https://www.youtube.com/watch?v=EW8lk860HPA',
    title: 'Leadership',
    description: 'Leaders do not need to outrun the machine. They need to protect judgment, courage and care.',
    thumbnail: 'https://img.youtube.com/vi/EW8lk860HPA/maxresdefault.jpg',
  },
  {
    youtubeId: 'cCdu67s_C5E',
    youtubeUrl: 'https://www.youtube.com/watch?v=cCdu67s_C5E',
    title: 'Possibility',
    description: 'AI can optimize the path. Only humans can decide which future is worth building.',
    thumbnail: 'https://img.youtube.com/vi/cCdu67s_C5E/maxresdefault.jpg',
  },
]

export const AUTHOR_QUOTE_LEAD =
  '“The greatest danger of the AI age is not smarter machines.'
export const AUTHOR_QUOTE_TAIL = 'It is humans slowly losing belief in their own uniqueness.”'

export const AUTHOR_BIO =
  'Vineet Nayar, former CEO of HCL Technologies and author of the management bestseller Employees First, Customers Second, is a champion of human potential. Through his work at the Sampark Foundation, he leverages technology to amplify human capability rather than replace it. His core belief: Human beings achieve extraordinary things when they are helped to believe they are capable of more.'

export const VIDEO_SECTION_LEDE =
  'See why thousands have walked away from his talks with a renewed belief in human potential'
