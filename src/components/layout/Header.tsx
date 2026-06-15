import Link from 'next/link'
import { useRouter } from 'next/router'
import { ASSETS, NAV_LINKS } from '@/data/site'
import { useModal } from '@/context/ModalContext'
import { isNavLinkActive, resolveNavHref } from '@/utils/nav'

interface HeaderProps {
  onToggleMenu: () => void
  menuOpen: boolean
}

export function Header({ onToggleMenu, menuOpen }: HeaderProps) {
  const { openJoin } = useModal()
  const router = useRouter()
  const leftLinks = NAV_LINKS.filter((l) => l.side === 'left')
  const rightLinks = NAV_LINKS.filter((l) => l.side === 'right')

  const renderNavLink = (link: (typeof NAV_LINKS)[number]) => {
    const active = isNavLinkActive(link, router.pathname)

    if (link.isRoute) {
      return (
        <Link key={link.href} href={link.href} className={active ? 'active' : undefined}>
          {link.label}
        </Link>
      )
    }

    return (
      <a
        key={link.href}
        href={resolveNavHref(link, router.pathname)}
        data-section-link={link.sectionId}
        className={active ? 'active' : undefined}
      >
        {link.label}
      </a>
    )
  }

  return (
    <header className="topbar">
      <nav className="nav" aria-label="Primary navigation" data-nav>
        <span className="nav-orb" aria-hidden="true" />
        <div className="nav-group nav-left">{leftLinks.map(renderNavLink)}</div>

        <Link href="/" className="brand" aria-label="The Humans First Series home">
          <img className="brand-logo" src={ASSETS.logo} alt="Humans First Series" />
        </Link>

        <div className="nav-group nav-right">
          {rightLinks.map(renderNavLink)}
          <button className="nav-cta magnetic" type="button" onClick={openJoin}>
            Join the movement
          </button>
        </div>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          data-nav-toggle
          onClick={onToggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}
