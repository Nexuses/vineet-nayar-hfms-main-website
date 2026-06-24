import { MongoClient, type Db } from 'mongodb'

const uri = process.env.MONGODB_URI

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

function getClientPromise(): Promise<MongoClient> {
  if (!uri) {
    throw new Error('Missing MONGODB_URI environment variable')
  }

  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      const client = new MongoClient(uri)
      global._mongoClientPromise = client.connect()
    }
    return global._mongoClientPromise
  }

  const client = new MongoClient(uri)
  return client.connect()
}

export async function getDb(): Promise<Db> {
  const client = await getClientPromise()
  return client.db(process.env.MONGODB_DB_NAME || 'humans-first')
}

export const WALL_COLLECTION = 'wall_submissions'
export const JOIN_SUBMISSIONS_COLLECTION = 'join_submissions'
export const CONTACT_SUBMISSIONS_COLLECTION = 'contact_submissions'
