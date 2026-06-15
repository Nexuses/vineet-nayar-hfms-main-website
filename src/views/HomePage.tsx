import { BookAnimation } from '@/components/sections/BookAnimation'
import { Cities } from '@/components/sections/Cities'
import { Hero } from '@/components/sections/Hero'
import { Manifesto } from '@/components/sections/Manifesto'
import { Promise } from '@/components/sections/Promise'
import { Videos } from '@/components/sections/Videos'
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
      <Manifesto />
      {FEATURES.sparks && <Sparks />}
      {FEATURES.experience && <Experience />}
      <Cities />
      <Videos />
      {FEATURES.wallIframe && <WallIframe />}
      <WallWidget />
      {FEATURES.faq && <Faq />}
      <Promise />
    </main>
  )
}
