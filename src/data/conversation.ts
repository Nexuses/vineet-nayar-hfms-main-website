export interface ConversationCard {
  title: string
  front: string
  back: string
  amplify?: boolean
}

export const CONVERSATION_CARDS: ConversationCard[] = [
  {
    title: 'Trust',
    front: '/assets/figma/trust.png',
    back: '/assets/figma/Trust-flip.png',
  },
  {
    title: 'Empower',
    front: '/assets/figma/empower.png',
    back: '/assets/figma/Empower-flip.png',
  },
  {
    title: 'Amplify',
    front: '/assets/figma/amplify.png',
    back: '/assets/figma/Amplify-flip.png',
    amplify: true,
  },
  {
    title: 'Reimagine',
    front: '/assets/figma/reimagine.png',
    back: '/assets/figma/Reimagine-flip.png',
  },
]
