import type { ContactSubmission } from './contactEmailTemplates'
import type { JoinSubmission } from './joinEmailTemplates'
import { CONTACT_SUBMISSIONS_COLLECTION, getDb, JOIN_SUBMISSIONS_COLLECTION } from './mongodb'

async function persistSubmission(collection: string, document: Record<string, unknown>) {
  if (!process.env.MONGODB_URI) return

  try {
    const db = await getDb()
    await db.collection(collection).insertOne(document)
  } catch (error) {
    console.error(`Form persistence error (${collection}):`, error)
  }
}

export async function saveJoinSubmission(submission: JoinSubmission) {
  await persistSubmission(JOIN_SUBMISSIONS_COLLECTION, {
    formType: 'join',
    name: submission.name,
    email: submission.email,
    city: submission.city,
    createdAt: new Date(),
  })
}

export async function saveContactSubmission(submission: ContactSubmission) {
  await persistSubmission(CONTACT_SUBMISSIONS_COLLECTION, {
    formType: 'contact',
    name: submission.name,
    email: submission.email,
    phone: submission.phone,
    message: submission.message,
    createdAt: new Date(),
  })
}
