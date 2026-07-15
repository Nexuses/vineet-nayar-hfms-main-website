import { Head, Html, Main, NextScript } from 'next/document'
import { ASSETS } from '@/data/site'
import {
  GA_GTAG_INIT_SCRIPT,
  GTAG_LOADER_ID,
  GTM_ID,
  GTM_SCRIPT,
  LINKEDIN_INSIGHT_SCRIPT,
  LINKEDIN_PARTNER_ID,
} from '@/lib/analytics'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: GTM_SCRIPT }} />
        <link rel="icon" type="image/png" href={ASSETS.favicon} />
        <link rel="apple-touch-icon" href={ASSETS.favicon} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&display=swap"
          rel="stylesheet"
        />
        {GTAG_LOADER_ID ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_LOADER_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: GA_GTAG_INIT_SCRIPT }} />
          </>
        ) : null}
      </Head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <Main />
        <NextScript />
        <script dangerouslySetInnerHTML={{ __html: LINKEDIN_INSIGHT_SCRIPT }} />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src={`https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_PARTNER_ID}&fmt=gif`}
          />
        </noscript>
      </body>
    </Html>
  )
}
