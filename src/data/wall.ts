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

const BOARD_BOUNDS = { minX: 0.5, minY: 0.5, maxX: 86, maxY: 70 }
const NOTE_SIZE_PCT = { w: 12, h: 11 }

function notesOverlap(a: Pick<WallNote, 'x' | 'y'>, b: Pick<WallNote, 'x' | 'y'>, gap = 0.75) {
  return (
    Math.abs(a.x - b.x) < NOTE_SIZE_PCT.w + gap &&
    Math.abs(a.y - b.y) < NOTE_SIZE_PCT.h + gap
  )
}

function scatterNote(note: WallNote, placed: WallNote[]): WallNote {
  const spanX = BOARD_BOUNDS.maxX - BOARD_BOUNDS.minX
  const spanY = BOARD_BOUNDS.maxY - BOARD_BOUNDS.minY

  let best: WallNote | null = null
  let bestSpread = -1

  for (let attempt = 0; attempt < 96; attempt++) {
    const h = hashSeed(`${note.id}:scatter:${attempt}`)
    const candidate: WallNote = {
      ...note,
      x: BOARD_BOUNDS.minX + ((h % 10000) / 10000) * spanX,
      y: BOARD_BOUNDS.minY + (((h >>> 12) % 10000) / 10000) * spanY,
      rotation: -18 + (h % 37),
    }

    if (placed.some((other) => notesOverlap(candidate, other))) continue
    if (placed.length === 0) return candidate

    const minDist = Math.min(
      ...placed.map((other) => Math.hypot(candidate.x - other.x, candidate.y - other.y)),
    )

    if (minDist > bestSpread) {
      bestSpread = minDist
      best = candidate
    }
  }

  if (best) return best

  const index = placed.length
  const cols = Math.max(4, Math.ceil(Math.sqrt(index + 1) * 1.6))
  const rows = Math.ceil((index + 1) / cols)
  const cellW = spanX / cols
  const cellH = spanY / rows
  const col = index % cols
  const row = Math.floor(index / cols)
  const h = hashSeed(`${note.id}:fallback:${index}`)

  return {
    ...note,
    x: BOARD_BOUNDS.minX + col * cellW + ((h % 90) / 100) * cellW * 0.85,
    y: BOARD_BOUNDS.minY + row * cellH + (((h >>> 8) % 90) / 100) * cellH * 0.85,
    rotation: -18 + (h % 37),
  }
}

export function scatterWallNotes(notes: WallNote[]): WallNote[] {
  if (notes.length === 0) return notes

  const ordered = [...notes].sort((a, b) => hashSeed(a.id) - hashSeed(b.id))
  return ordered.reduce<WallNote[]>((placed, note) => {
    placed.push(scatterNote(note, placed))
    return placed
  }, [])
}

export function placeWallNote(note: WallNote, existing: WallNote[]): WallNote {
  return scatterNote(note, existing)
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

export function createWallNoteFromDb(id: string, word: string, name: string): WallNote {
  return {
    id,
    word,
    name: name || 'Anonymous',
    x: 0,
    y: 0,
    rotation: 0,
  }
}

export function createSeedNotes(): WallNote[] {
  return WALL_SEED.map(([word, name], index) => ({
    id: `seed-${word}-${name}-${index}`,
    word,
    name,
    x: 0,
    y: 0,
    rotation: 0,
  }))
}
