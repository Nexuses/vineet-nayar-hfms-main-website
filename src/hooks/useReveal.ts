import { useRouter } from 'next/router'
import { useEffect } from 'react'

function getRevealGroup(element: Element) {
  return (
    element.closest('section') ||
    element.closest('.wall-section') ||
    element.closest('.hf-wall-widget') ||
    element.closest('.movement-sticky') ||
    element.parentElement
  )
}

function markRevealed(element: Element) {
  element.classList.add('on')
  element.setAttribute('data-revealed', 'true')
  ;(element as HTMLElement).style.opacity = ''
  ;(element as HTMLElement).style.transform = ''
}

function showReveals(elements: Element[]) {
  elements.forEach((element) => {
    if (element.classList.contains('on')) return
    markRevealed(element)
  })
}

/** Re-apply .on after React re-renders overwrite className on interactive elements. */
function reapplyRevealed() {
  document.querySelectorAll('.reveal[data-revealed="true"]').forEach((element) => {
    if (!element.classList.contains('on')) {
      markRevealed(element)
    }
  })
}

function ensureHeroVisible() {
  document.querySelectorAll('.hero .reveal').forEach((element) => {
    markRevealed(element)
  })

  document.querySelectorAll('.hero h1 b').forEach((element) => {
    const el = element as HTMLElement
    el.style.transform = ''
    el.style.opacity = ''
    el.style.visibility = ''
  })
}

function revealInViewport() {
  document.querySelectorAll('.reveal:not(.on)').forEach((element) => {
    const rect = element.getBoundingClientRect()
    const visible = rect.top < window.innerHeight * 0.98 && rect.bottom > 0
    if (visible) showReveals([element])
  })
  reapplyRevealed()
}

function initRevealGroups() {
  const groups = new Map<Element, Element[]>()

  document.querySelectorAll('.reveal').forEach((element) => {
    if (element.classList.contains('on')) return

    const group = getRevealGroup(element)
    if (!group) return
    if (!groups.has(group)) groups.set(group, [])
    groups.get(group)!.push(element)
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const reveals = groups.get(entry.target)
        if (reveals?.length) showReveals(reveals)

        observer.unobserve(entry.target)
      })
      reapplyRevealed()
    },
    { threshold: 0.05, rootMargin: '0px 0px 0px 0px' },
  )

  groups.forEach((reveals, group) => {
    if (!reveals.length) return
    observer.observe(group)
  })

  return observer
}

export function useReveal() {
  const router = useRouter()

  useEffect(() => {
    ensureHeroVisible()
    const observer = initRevealGroups()

    const refresh = () => {
      revealInViewport()
    }

    const frame = requestAnimationFrame(refresh)

    const onScroll = () => revealInViewport()
    const onLoad = () => {
      ensureHeroVisible()
      revealInViewport()
    }

    const mutationObserver = new MutationObserver(() => {
      reapplyRevealed()
    })
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class'],
    })

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', revealInViewport)
    window.addEventListener('hf-book-complete', revealInViewport)
    window.addEventListener('load', onLoad)

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      mutationObserver.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', revealInViewport)
      window.removeEventListener('hf-book-complete', revealInViewport)
      window.removeEventListener('load', onLoad)
    }
  }, [router.pathname])
}
