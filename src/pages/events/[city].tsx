import type { GetStaticPaths, GetStaticProps } from 'next'
import { EVENT_RECAPS, getEventRecapBySlug, type EventRecap } from '@/data/eventRecaps'
import { EventRecapPage } from '@/views/EventRecapPage'

interface EventRecapRouteProps {
  recap: EventRecap
}

export default function EventRecapRoutePage({ recap }: EventRecapRouteProps) {
  return <EventRecapPage recap={recap} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: EVENT_RECAPS.map((recap) => ({ params: { city: recap.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<EventRecapRouteProps> = async ({ params }) => {
  const slug = typeof params?.city === 'string' ? params.city : ''
  const recap = getEventRecapBySlug(slug)

  if (!recap) {
    return { notFound: true }
  }

  return {
    props: { recap },
  }
}
