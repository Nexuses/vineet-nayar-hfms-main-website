import { BookAnimation } from '@/components/sections/BookAnimation'
import { Cities } from '@/components/sections/Cities'
import { CityEvents } from '@/components/sections/CityEvents'
import { Hero } from '@/components/sections/Hero'
import { Manifesto } from '@/components/sections/Manifesto'
import { Mosaic } from '@/components/sections/Mosaic'
import { Promise } from '@/components/sections/Promise'
import { AuthorHero } from '@/components/sections/AuthorHero'
import { WallWidget } from '@/components/sections/WallWidget'
import { Conversation } from '@/components/sections/dormant/Conversation'
import { Experience } from '@/components/sections/dormant/Experience'
import { Faq } from '@/components/sections/dormant/Faq'
import { Movement } from '@/components/sections/dormant/Movement'
import { Sparks } from '@/components/sections/dormant/Sparks'
import { Truth } from '@/components/sections/dormant/Truth'
import { WallIframe } from '@/components/sections/dormant/WallIframe'
import { FEATURES } from '@/data/site'

export function HomePage() {
  return (
    <main id="top">
      <Hero />
      <BookAnimation />
      {FEATURES.movement && <Movement />}
      {FEATURES.truth && <Truth />}
      {FEATURES.conversation && <Conversation />}
      {FEATURES.manifesto ? <Manifesto /> : null}
      {FEATURES.sparks && <Sparks />}
      {FEATURES.experience && <Experience />}
      <Cities />
      <CityEvents />
      <AuthorHero />
      <Mosaic />
      <Promise />
      {FEATURES.wallIframe && <WallIframe />}
      {FEATURES.faq && <Faq />}
      <WallWidget />
    </main>
  )
}
