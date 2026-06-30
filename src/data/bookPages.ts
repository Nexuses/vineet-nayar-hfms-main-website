export interface BookBlock {
  title: string
  body: string
  iconPath: string
}

export const BOOK_BLOCKS: BookBlock[] = [
  {
    title: 'NOT A LAUNCH.',
    body: 'A six-city conversation about confidence, possibility and the parts of us no machine should inherit.',
    iconPath: 'M5 12h14M13 6l6 6-6 6',
  },
  {
    title: 'NOT ANTI-AI.',
    body: 'Pro-human. Pro-courage. Pro-imagination. Pro-the-person-who-has-forgotten-they-still-matter.',
    iconPath: 'M12 21s-7-4.35-9.5-8A5 5 0 0 1 12 6a5 5 0 0 1 9.5 7c-2.5 3.65-9.5 8-9.5 8z',
  },
  {
    title: 'NOT A LECTURE.',
    body: 'Thirty sparks, not thirty rules — meant to be argued with, not memorised.',
    iconPath: 'M4 19V5a2 2 0 0 1 2-2h10l4 4v12M8 7h6M8 11h8M8 15h5',
  },
  {
    title: 'NOT THE END.',
    body: "The beginning of a question worth keeping: what stays human when the machines get good?",
    iconPath: 'M12 2v6M12 16v6M4 12h6M16 12h4M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3',
  },
]

export interface BookPanel {
  index: number
  number: string
  section: string
  title: string
  subtitle: string
  quote: string
  body: string
}

export const BOOK_PANELS: BookPanel[] = [
  {
    index: 1,
    number: '01',
    section: 'THE FOUNDATION',
    title: 'Trust',
    subtitle: 'Steady ground before speed',
    quote: "Trust isn't optional in the age of AI. It's oxygen.",
    body: 'In an AI-driven world, trust begins with trusting yourself to think, create and innovate in ways that add lasting value. And it means people believing AI is being used with them, not against them. Where trust goes missing, AI becomes a black box feared, resented, even quietly sabotaged.',
  },
  {
    index: 2,
    number: '02',
    section: 'THE INVITATION',
    title: 'Empower',
    subtitle: 'Belief, not permission',
    quote: 'Not permission. Belief.',
    body: 'AI works best when people are invited to co-create with it, not just use it. That means making it safe to question, adapt, and act boldly—so people start owning what comes next instead of sitting on the sidelines.',
  },
  {
    index: 3,
    number: '03',
    section: 'THE AMPLIFIER',
    title: 'Amplify',
    subtitle: 'Make people more, not less',
    quote: 'AI should make humans more brilliant, not redundant.',
    body: "AI won't replace great leadership, but it will expose weak leadership fast. In the AI era, mediocre teams crumble under pressure. The ones who win are the ones who amplify curiosity, agility, and purpose at every level.",
  },
  {
    index: 4,
    number: '04',
    section: 'THE REINVENTION',
    title: 'Reimagine',
    subtitle: 'Win a different game',
    quote: 'Winning in the age of AI means playing a different game, one only humans can win.',
    body: "This isn't about digitizing yesterday's processes. It's about tearing up the old playbook and rethinking everything how we work, what counts as winning, why we exist at all. The best innovators won't wait for disruption. They'll cause it.",
  },
]
