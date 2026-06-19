import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { NAV_EXPLORE_ITEMS } from '@/data/site'
import { resolveNavHref } from '@/utils/nav'

export function NavExploreDropdown() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div
      ref={rootRef}
      className={`nav-dropdown${open ? ' is-open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="nav-dropdown-trigger"
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        data-nav-explore
        onClick={() => setOpen((value) => !value)}
      >
        Explore
        <span className="nav-dropdown-chevron" aria-hidden="true" />
      </button>
      <div className="nav-dropdown-menu" role="menu">
        {NAV_EXPLORE_ITEMS.map((item) => (
          <a
            key={item.sectionId}
            role="menuitem"
            href={resolveNavHref(item, router.pathname)}
            data-section-link={item.sectionId}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}
