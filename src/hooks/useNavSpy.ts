import { useEffect } from 'react'

export function useNavSpy(enabled = true) {
  useEffect(() => {
    if (!enabled) {
      document.querySelectorAll('[data-section-link]').forEach((link) => link.classList.remove('active'))
      return
    }

    const sectionLinks = Array.from(document.querySelectorAll('[data-section-link]'))
    const linkedSections = sectionLinks
      .map((link) => document.getElementById((link as HTMLElement).dataset.sectionLink!))
      .filter(Boolean) as HTMLElement[]

    function setActiveNav() {
      const center = window.innerHeight * 0.35
      let activeId = linkedSections[0]?.id
      linkedSections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= center && rect.bottom >= center) activeId = section.id
      })
      sectionLinks.forEach((link) =>
        link.classList.toggle(
          'active',
          (link as HTMLElement).dataset.sectionLink === activeId,
        ),
      )
    }

    window.addEventListener('scroll', setActiveNav, { passive: true })
    window.addEventListener('resize', setActiveNav)
    setActiveNav()

    return () => {
      window.removeEventListener('scroll', setActiveNav)
      window.removeEventListener('resize', setActiveNav)
    }
  }, [enabled])
}
