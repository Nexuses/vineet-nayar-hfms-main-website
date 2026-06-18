import Head from 'next/head'
import { ContactCta } from '@/components/sections/contact/ContactCta'
import { ContactForm } from '@/components/sections/contact/ContactForm'
import { ContactHero } from '@/components/sections/contact/ContactHero'
import { CONTACT_META } from '@/data/contact'

export function ContactPage() {
  return (
    <>
      <Head>
        <title>{CONTACT_META.title}</title>
        <meta name="description" content={CONTACT_META.description} />
      </Head>

      <div className="page-wrapper contact-page">
        <div className="main-wrapper">
          <main id="top">
            <ContactHero />
            <ContactForm />
            <ContactCta />
          </main>
        </div>
      </div>
    </>
  )
}
