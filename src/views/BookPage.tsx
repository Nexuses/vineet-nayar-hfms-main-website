import Head from 'next/head'
import { EfcBookAccordion } from '@/components/sections/book/EfcBookAccordion'
import { EfcBookCta } from '@/components/sections/book/EfcBookCta'
import { EfcBookHero } from '@/components/sections/book/EfcBookHero'
import { EfcBookOpening } from '@/components/sections/book/EfcBookOpening'
import { EfcBookRecognitions } from '@/components/sections/book/EfcBookRecognitions'
import { EfcBookTestimonials } from '@/components/sections/book/EfcBookTestimonials'
import { EfcBookVideo } from '@/components/sections/book/EfcBookVideo'
import { EFC_BOOK_META } from '@/data/employeesFirstBook'
import { SITE } from '@/data/site'

export function BookPage() {
  return (
    <>
      <Head>
        <title>{EFC_BOOK_META.title}</title>
        <meta name="description" content={SITE.description} />
      </Head>

      <main id="top" className="book-page">
        <EfcBookHero />
        <EfcBookOpening />
        <EfcBookAccordion />
        <EfcBookTestimonials />
        <EfcBookRecognitions />
        <EfcBookVideo />
        <EfcBookCta />
      </main>
    </>
  )
}
