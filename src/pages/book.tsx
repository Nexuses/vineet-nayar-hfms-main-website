import type { GetServerSideProps } from 'next'
import { FEATURES } from '@/data/site'
import { BookPage } from '@/views/BookPage'

export default function BookRoutePage() {
  return <BookPage />
}

export const getServerSideProps: GetServerSideProps = async () => {
  if (!FEATURES.bookPage) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return { props: {} }
}
