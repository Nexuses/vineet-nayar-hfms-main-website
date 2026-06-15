import type { NavLinkItem } from '../data/site'

export function resolveNavHref(link: NavLinkItem, pathname: string) {
  if (link.isRoute) return link.href
  if (link.href.startsWith('#')) return pathname === '/' ? link.href : `/${link.href}`
  return link.href
}

export function isNavLinkActive(link: NavLinkItem, pathname: string) {
  if (link.isRoute) return pathname === link.href
  return false
}
