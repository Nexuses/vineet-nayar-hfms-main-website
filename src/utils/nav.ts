import type { NavLinkItem } from '../data/site'

type NavHrefLink = Pick<NavLinkItem, 'href' | 'isRoute' | 'sectionId'>

export function resolveNavHref(link: NavHrefLink, pathname: string) {
  if (link.isRoute) return link.href
  if (link.href.startsWith('#')) return pathname === '/' ? link.href : `/${link.href}`
  return link.href
}

export function isNavLinkActive(link: NavLinkItem, pathname: string) {
  if (link.isRoute) return pathname === link.href
  return false
}
