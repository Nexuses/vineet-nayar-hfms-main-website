export const WALL_WORDS = [
  'Curiosity',
  'Courage',
  'Kindness',
  'Empathy',
  'Wonder',
  'Imagination',
  'Hope',
  'Forgiveness',
] as const

export const WALL_SEED: [string, string][] = [
  ['Empathy', 'Riya'],
  ['Imagination', 'Kabir'],
  ['Wonder', 'Sana'],
  ['Courage', 'Dev'],
  ['Kindness', 'Meera'],
  ['Curiosity', 'Aarav'],
  ['Hope', 'Priya'],
  ['Forgiveness', 'Arjun'],
  ['Curiosity', 'Neha'],
  ['Courage', 'Rohan'],
  ['Kindness', 'Ananya'],
  ['Wonder', 'Ishaan'],
]

export interface WallNote {
  id: string
  word: string
  name: string
  x: number
  y: number
  rotation: number
}

function hashSeed(value: string) {
  let h = 0
  for (let i = 0; i < value.length; i++) h = (h * 31 + value.charCodeAt(i)) >>> 0
  return h
}

export function createWallPlacement(seed: string, index = 0): Pick<WallNote, 'x' | 'y' | 'rotation'> {
  const h = hashSeed(`${seed}:${index}`)
  const x = 4 + (h % 6200) / 100
  const y = 6 + ((h >>> 10) % 5200) / 100
  const rotation = -7 + (h % 15)
  return { x, y, rotation }
}

export function createWallNote(word: string, name: string, index = 0): WallNote {
  const placement = createWallPlacement(`${word}-${name}-${Date.now()}`, index)
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    word,
    name: name || 'Anonymous',
    ...placement,
  }
}

export function createWallNoteFromDb(id: string, word: string, name: string, index = 0): WallNote {
  return {
    id,
    word,
    name: name || 'Anonymous',
    ...createWallPlacement(id, index),
  }
}

export function createSeedNotes(): WallNote[] {
  return WALL_SEED.map(([word, name], index) => ({
    id: `seed-${word}-${name}-${index}`,
    word,
    name,
    ...createWallPlacement(`${word}-${name}`, index),
  }))
}
