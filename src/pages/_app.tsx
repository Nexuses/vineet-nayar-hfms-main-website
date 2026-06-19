import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AppShell } from '@/components/layout/AppShell'
import { ModalProvider } from '@/context/ModalContext'
import { SITE } from '@/data/site'
import '@/styles/styles.css'
import '@/styles/humans-first-1.css'
import '@/styles/mobile.css'
import '@/styles/wall-widget.css'
import '@/styles/book-page.css'
import '@/styles/about-vineet.css'
import '@/styles/contact.css'
import '@/styles/flipbook.css'
import '@/styles/book-flipbook.css'
import '@/styles/mosaic.css'
import '@/styles/city-events.css'
import '@/styles/cities-cards.css'
import '@/styles/author-hero.css'
import '@/styles/scroll-reveal.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Head>
        <title>{SITE.title}</title>
        <meta name="description" content={SITE.description} />
      </Head>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </ModalProvider>
  )
}
