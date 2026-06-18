// Flip-card back images quarantined in unused/public/assets/figma/ — restore before enabling FEATURES.conversation
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
    back: '',
  },
  {
    title: 'Empower',
    front: '/assets/figma/empower.png',
    back: '',
  },
  {
    title: 'Amplify',
    front: '',
    back: '',
    amplify: true,
  },
  {
    title: 'Reimagine',
    front: '/assets/figma/reimagine.png',
    back: '',
  },
]
