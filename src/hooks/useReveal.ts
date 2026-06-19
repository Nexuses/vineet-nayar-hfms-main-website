import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { isPostBookRevealSection } from '../utils/reveal'

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
    const group = getRevealGroup(element)
    if (isPostBookRevealSection(group)) return

    const rect = element.getBoundingClientRect()
    const visible = rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.08
    if (visible) showReveals([element])
  })
  reapplyRevealed()
}

function initRevealGroups() {
  const defaultGroups = new Map<Element, Element[]>()
  const postBookGroups = new Map<Element, Element[]>()

  document.querySelectorAll('.reveal').forEach((element) => {
    if (element.classList.contains('on')) return

    const group = getRevealGroup(element)
    if (!group) return

    const bucket = isPostBookRevealSection(group) ? postBookGroups : defaultGroups
    if (!bucket.has(group)) bucket.set(group, [])
    bucket.get(group)!.push(element)
  })

  const defaultObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const reveals = defaultGroups.get(entry.target)
        if (reveals?.length) showReveals(reveals)

        defaultObserver.unobserve(entry.target)
      })
      reapplyRevealed()
    },
    { threshold: 0.08, rootMargin: '0px 0px -4% 0px' },
  )

  const postBookObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const reveals = postBookGroups.get(entry.target)
        if (reveals?.length) showReveals(reveals)

        postBookObserver.unobserve(entry.target)
      })
      reapplyRevealed()
    },
    { threshold: 0.14, rootMargin: '0px 0px -10% 0px' },
  )

  defaultGroups.forEach((reveals, group) => {
    if (!reveals.length) return
    defaultObserver.observe(group)
  })

  postBookGroups.forEach((reveals, group) => {
    if (!reveals.length) return
    postBookObserver.observe(group)
  })

  return { defaultObserver, postBookObserver }
}

export function useReveal() {
  const router = useRouter()

  useEffect(() => {
    ensureHeroVisible()
    const { defaultObserver, postBookObserver } = initRevealGroups()

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
      defaultObserver.disconnect()
      postBookObserver.disconnect()
      mutationObserver.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', revealInViewport)
      window.removeEventListener('hf-book-complete', revealInViewport)
      window.removeEventListener('load', onLoad)
    }
  }, [router.pathname])
}
