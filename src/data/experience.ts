// Rail icons quarantined in unused/public/assets/figma/ — restore before enabling FEATURES.experience
export interface ExperienceRailCard {
  title: string
  body: string
  icon: string
  featured?: boolean
}

export const EXPERIENCE_RAIL: ExperienceRailCard[] = [
  {
    title: 'Arrive',
    body: 'Write on the Humans First Wall before the room tells you what to think.',
    icon: '',
    featured: true,
  },
  {
    title: 'Listen',
    body: 'A Sampark child, teacher or parent opens with a story. No statistics. Just life.',
    icon: '',
  },
  {
    title: 'Reflect',
    body: 'Vineet speaks for 30 minutes on winning without surrendering what makes us human.',
    icon: '',
  },
  {
    title: 'Ask',
    body: 'The audience brings its questions: careers, children, leadership, fear, hope.',
    icon: '',
  },
  {
    title: 'Promise',
    body: 'Help at least two people discover what they are capable of becoming.',
    icon: '',
  },
]
