import type { NextApiRequest, NextApiResponse } from 'next'
import { getDb, WALL_COLLECTION } from '@/lib/mongodb'
import { WALL_WORDS } from '@/data/wall'

export type WallSubmissionResponse = {
  id: string
  word: string
  name: string
  createdAt: string
}

type GetResponse = {
  submissions: WallSubmissionResponse[]
  total: number
}

type PostResponse = {
  submission: WallSubmissionResponse
}

type ErrorResponse = {
  error: string
}

function normalizeWord(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  if (!trimmed || trimmed.length > 22) return null
  if (!(WALL_WORDS as readonly string[]).includes(trimmed)) return null
  return trimmed
}

function normalizeName(value: unknown): string {
  if (typeof value !== 'string') return 'Anonymous'
  const trimmed = value.trim()
  if (!trimmed || trimmed.length > 18) return 'Anonymous'
  return trimmed
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetResponse | PostResponse | ErrorResponse>,
) {
  if (!process.env.MONGODB_URI) {
    return res.status(503).json({ error: 'MongoDB is not configured. Set MONGODB_URI in .env.local.' })
  }

  try {
    const db = await getDb()
    const collection = db.collection(WALL_COLLECTION)

    if (req.method === 'GET') {
      const docs = await collection.find({}).sort({ createdAt: -1 }).toArray()

      const submissions: WallSubmissionResponse[] = docs.map((doc) => ({
        id: doc._id.toString(),
        word: doc.word,
        name: doc.name,
        createdAt: doc.createdAt.toISOString(),
      }))

      return res.status(200).json({ submissions, total: submissions.length })
    }

    if (req.method === 'POST') {
      const word = normalizeWord(req.body?.word)
      if (!word) {
        return res.status(400).json({ error: 'Please choose a word from the list.' })
      }

      const name = normalizeName(req.body?.name)
      const createdAt = new Date()

      const result = await collection.insertOne({ word, name, createdAt })

      return res.status(201).json({
        submission: {
          id: result.insertedId.toString(),
          word,
          name,
          createdAt: createdAt.toISOString(),
        },
      })
    }

    res.setHeader('Allow', ['GET', 'POST'])
    return res.status(405).json({ error: `Method ${req.method} not allowed` })
  } catch (error) {
    console.error('Wall API error:', error)
    return res.status(500).json({ error: 'Failed to process wall submission.' })
  }
}
