import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { NAV_EXPLORE_ITEMS, NAV_LINKS } from '@/data/site'
import { resolveNavHref } from '@/utils/nav'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div className={`mobile-menu${open ? ' open' : ''}`} id="mobileMenu" aria-hidden={!open}>
      {open ? <MobileMenuContent onClose={onClose} /> : null}
    </div>
  )
}

function MobileMenuContent({ onClose }: Pick<MobileMenuProps, 'onClose'>) {
  const router = useRouter()
  const [exploreOpen, setExploreOpen] = useState(false)
  const citiesHref = resolveNavHref(
    { href: '#cities-cards', sectionId: 'cities-cards' },
    router.pathname,
  )

  return (
    <nav className="mobile-menu-inner" aria-label="Mobile navigation">
      {NAV_LINKS.map((link) =>
        link.isRoute ? (
          <Link key={link.href} href={link.href} data-mobile-link onClick={onClose}>
            {link.label}
          </Link>
        ) : (
          <a
            key={link.href}
            href={resolveNavHref(link, router.pathname)}
            data-mobile-link
            data-section-link={link.sectionId}
            onClick={onClose}
          >
            {link.label}
          </a>
        ),
      )}
      <button
        type="button"
        className="mobile-menu-explore"
        aria-expanded={exploreOpen}
        onClick={() => setExploreOpen((value) => !value)}
      >
        Explore
      </button>
      {exploreOpen ? (
        <div className="mobile-menu-sub">
          {NAV_EXPLORE_ITEMS.map((item) => (
            <a
              key={item.sectionId}
              className="mobile-menu-sublink"
              href={resolveNavHref(item, router.pathname)}
              data-mobile-link
              data-section-link={item.sectionId}
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
      <a
        className="btn mobile-menu-cta"
        href={citiesHref}
        data-mobile-link
        data-section-link="cities-cards"
        onClick={onClose}
      >
        Join the movement
      </a>
    </nav>
  )
}
