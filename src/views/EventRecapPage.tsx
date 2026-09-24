import Head from 'next/head'
import Link from 'next/link'
import { EventRecapGallery } from '@/components/sections/event-recap/EventRecapGallery'
import { EventRecapSlideshow } from '@/components/sections/event-recap/EventRecapSlideshow'
import { CITIES } from '@/data/cities'
import { EVENT_RECAP_HEADING, type EventRecap } from '@/data/eventRecaps'

interface EventRecapPageProps {
  recap: EventRecap
}

function getSlideshowImages(recap: EventRecap): string[] {
  if (recap.gallery.length > 0) return recap.gallery.slice(0, 8)
  const city = CITIES.find((item) => item.city === recap.city)
  return city?.cardImage ? [city.cardImage] : []
}

export function EventRecapPage({ recap }: EventRecapPageProps) {
  const title = `Inside ${recap.city} Event — The Humans First Series`
  const slideshowImages = getSlideshowImages(recap)
  const city = CITIES.find((item) => item.city === recap.city)
  const metaLine = [city?.dateDisplay, city?.venue ? `${city.venue}, ${recap.city}` : recap.city]
    .filter(Boolean)
    .join(' · ')

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={`Recap of the Humans First Series event in ${recap.city}: aftermovie and event glimpses.`}
        />
      </Head>

      <main id="top" className="event-recap-page">
        <section className="event-recap-hero" aria-label={`${recap.city} event recap`}>
          <div className="event-recap-wrap event-recap-wrap--wide">
            <Link href="/#cities-cards" className="event-recap-back">
              <span aria-hidden="true">←</span>
              All Cities
            </Link>
            <div className="event-recap-hero-grid">
              <div className="event-recap-hero-copy">
                <p className="event-recap-eyebrow">{EVENT_RECAP_HEADING.eyebrow}</p>
                <h1 className="event-recap-title">
                  {EVENT_RECAP_HEADING.titleLead} {recap.city}
                  <span className="event-recap-title-event">Event</span>
                </h1>
                <p className="event-recap-meta">{metaLine}</p>
                {city?.theme ? <p className="event-recap-question">{city.theme}</p> : null}
                <p className="event-recap-note">{recap.recapNote}</p>
              </div>
              <EventRecapSlideshow city={recap.city} images={slideshowImages} />
            </div>
          </div>
        </section>

        <section id="aftermovie" className="event-recap-section event-recap-video-section" aria-label={`${recap.city} aftermovie`}>
          <div className="event-recap-wrap">
            <h2 className="event-recap-section-title">
              <span className="event-recap-title-lead">{EVENT_RECAP_HEADING.videoTitleLead}</span>
              <span className="hand-highlight">{EVENT_RECAP_HEADING.videoTitleHighlight}</span>
            </h2>
            <p className="event-recap-section-lede">
              A short film from the {recap.city} evening.
            </p>
            <div className="event-recap-video-frame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${recap.youtubeId}?rel=0`}
                title={`${recap.city} event aftermovie`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="event-recap-section event-recap-gallery-section" aria-label={`${recap.city} event glimpses`}>
          <div className="event-recap-wrap event-recap-wrap--wide">
            <h2 className="event-recap-section-title">
              <span className="event-recap-title-lead">{EVENT_RECAP_HEADING.galleryTitleLead}</span>
              <span className="hand-highlight">{EVENT_RECAP_HEADING.galleryTitleHighlight}</span>
            </h2>
            {recap.gallery.length > 0 ? (
              <EventRecapGallery city={recap.city} images={recap.gallery} />
            ) : (
              <p className="event-recap-gallery-empty">{EVENT_RECAP_HEADING.galleryEmpty}</p>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
