import Head from 'next/head'
import { FaqAccordion } from '@/components/sections/faq/FaqAccordion'
import { FAQ_HEADING, FAQ_META } from '@/data/faq'

export function FaqPage() {
  return (
    <>
      <Head>
        <title>{FAQ_META.title}</title>
        <meta name="description" content={FAQ_META.description} />
      </Head>

      <main id="top" className="hfms-faq-page">
        <section className="hfms-faq-section" aria-label="Frequently asked questions">
          <div className="hfms-faq-wrap">
            <div className="hfms-faq-copy">
              <p className="hfms-faq-eyebrow">{FAQ_HEADING.eyebrow}</p>
              <h1 className="hfms-faq-title">
                <span className="hfms-faq-title-lead">{FAQ_HEADING.titleLead}</span>
                <span className="hand-highlight">{FAQ_HEADING.titleHighlight}</span>
              </h1>
              <p className="hfms-faq-lede">{FAQ_HEADING.lede}</p>
            </div>
            <FaqAccordion />
          </div>
        </section>
      </main>
    </>
  )
}
