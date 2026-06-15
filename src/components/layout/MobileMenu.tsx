import Link from 'next/link'
import { useRouter } from 'next/router'
import { NAV_LINKS } from '@/data/site'
import { useModal } from '@/context/ModalContext'
import { resolveNavHref } from '@/utils/nav'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { openJoin } = useModal()
  const router = useRouter()

  const handleJoin = () => {
    onClose()
    openJoin()
  }

  return (
    <div className={`mobile-menu${open ? ' open' : ''}`} id="mobileMenu" aria-hidden={!open}>
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
              onClick={onClose}
            >
              {link.label}
            </a>
          ),
        )}
        <button className="btn" type="button" data-mobile-link onClick={handleJoin}>
          Join the movement
        </button>
      </nav>
    </div>
  )
}
