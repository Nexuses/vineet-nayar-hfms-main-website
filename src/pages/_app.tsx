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
