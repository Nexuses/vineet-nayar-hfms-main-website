import Head from 'next/head'
import { AboutVineetHero } from '@/components/sections/about/AboutVineetHero'
import { AboutVineetShowcase } from '@/components/sections/about/AboutVineetShowcase'
import { ABOUT_VINEET_META } from '@/data/aboutVineet'

export function AboutVineetPage() {
  return (
    <>
      <Head>
        <title>{ABOUT_VINEET_META.title}</title>
        <meta name="description" content={ABOUT_VINEET_META.description} />
      </Head>

      <main id="top" className="about-vineet-page">
        <AboutVineetHero />
        <AboutVineetShowcase />
      </main>
    </>
  )
}
