import { useRouter } from 'next/router'
import { useEffect } from 'react'

export function ScrollToTop() {
  const router = useRouter()

  useEffect(() => {
    const hash = router.asPath.split('#')[1]
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [router.pathname, router.asPath])

  return null
}
