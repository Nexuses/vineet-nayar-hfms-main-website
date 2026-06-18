export interface MosaicPhoto {
  src: string
  alt: string
}

export const MOSAIC_HEADING = {
  titleLead: 'Humans First Conversations',
  titleHighlight: 'by Vineet Nayar',
  lede: 'See why thousands have walked away from his talks with a renewed belief in human potential.',
} as const

function unsplash(id: string) {
  return `https://images.unsplash.com/photo-${id}?w=420&q=80&auto=format&fit=crop`
}

export const MOSAIC_COLS: MosaicPhoto[][] = [
  [
    { src: unsplash('1540575467063-178a50c2df87'), alt: 'Conference event' },
    { src: unsplash('1475721027785-f74eccf877e2'), alt: 'Audience listening' },
  ],
  [
    { src: unsplash('1543269865-cbf427effbad'), alt: 'People at event' },
    { src: unsplash('1560439513-74b037a25d84'), alt: 'Speaker moment' },
  ],
  [
    { src: unsplash('1558008258-3256797b43f3'), alt: 'Crowd engagement' },
    { src: unsplash('1531058020387-3be344556be6'), alt: 'Panel moment' },
  ],
  [
    { src: unsplash('1505373877841-8d25f7d46678'), alt: 'Event hall' },
    { src: unsplash('1587825140708-dfaf72ae4b04'), alt: 'Leader speaking' },
  ],
  [
    { src: unsplash('1511578314322-379afb476865'), alt: 'Teamwork moment' },
    { src: unsplash('1528605248644-14dd04022da1'), alt: 'Collaboration' },
  ],
  [
    { src: unsplash('1524178232363-1fb2b075b655'), alt: 'Keynote session' },
    { src: unsplash('1559136555-9303baea8ebd'), alt: 'Discussion group' },
  ],
]
