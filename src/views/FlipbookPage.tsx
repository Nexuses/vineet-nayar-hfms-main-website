import Head from 'next/head'
import { FlipbookSection } from '@/components/sections/flipbook/FlipbookSection'

const FLIPBOOK_META = {
  title: 'Flipbook Preview - The Humans First Series',
  description: 'Standalone flipbook section for scroll and swipe interactions.',
} as const

export function FlipbookPage() {
  return (
    <>
      <Head>
        <title>{FLIPBOOK_META.title}</title>
        <meta name="description" content={FLIPBOOK_META.description} />
      </Head>

      <main id="top" className="flipbook-page">
        <FlipbookSection />
      </main>
    </>
  )
}
