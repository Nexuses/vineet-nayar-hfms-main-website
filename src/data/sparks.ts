export interface SparkItem {
  title: string
  number: string
  body: string
  open?: boolean
}

export const SPARKS: SparkItem[] = [
  {
    title: 'Your People Are Your Algorithm',
    number: '01',
    body: 'Tools do not create judgment. Dashboards do not create courage. The human filament is still the source of light.',
    open: true,
  },
  {
    title: 'Humans Are the Loop',
    number: '02',
    body: 'People are not checkpoints in a machine process. They are the moral loop, the context loop, the consequence loop.',
  },
  {
    title: 'AI Is a Guide, Not a God',
    number: '03',
    body: 'A recommendation can point. It cannot care. It cannot know what kind of life, company or country we are trying to build.',
  },
  {
    title: 'AI Puts Jugaad on Steroids',
    number: '04',
    body: 'Human ingenuity under constraint is not obsolete. With AI, it becomes more available, more daring and more democratic.',
  },
  {
    title: 'Highlight Hallucinations Early',
    number: '05',
    body: 'The confident wrong answer is the new workplace hazard. The antidote is alert, humble, human scrutiny.',
  },
]
