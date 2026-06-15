import { Outlet, useLocation } from 'react-router-dom'
import { FEATURES } from '../../data/site'
import { useCursorGlow } from '../../hooks/useCursorGlow'
import { useHandHighlightFit } from '../../hooks/useHandHighlightFit'
import { useMagnetic } from '../../hooks/useMagnetic'
import { useMobileMenu } from '../../hooks/useMobileMenu'
import { useNavSpy } from '../../hooks/useNavSpy'
import { useReveal } from '../../hooks/useReveal'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import { useTiltCard } from '../../hooks/useTiltCard'
import { JoinModal } from '../modals/JoinModal'
import { VideoModal } from '../modals/VideoModal'
import { CursorGlow } from './CursorGlow'
import { Footer } from './Footer'
import { Header } from './Header'
import { MobileMenu } from './MobileMenu'
import { NoiseOverlay } from './NoiseOverlay'
import { ProgressBar } from './ProgressBar'
import { ScrollToTop } from './ScrollToTop'

export function AppShell() {
  const { open, openMenu, closeMenu } = useMobileMenu()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useScrollProgress(FEATURES.movement && isHome)
  useReveal()
  useMagnetic()
  useTiltCard()
  useNavSpy(isHome)
  useHandHighlightFit()
  useCursorGlow()

  return (
    <>
      <ScrollToTop />
      <ProgressBar />
      <NoiseOverlay />
      <CursorGlow />

      <Header
        onToggleMenu={() => {
          if (open) closeMenu()
          else openMenu()
        }}
        menuOpen={open}
      />
      <MobileMenu open={open} onClose={closeMenu} />

      <Outlet />

      <Footer />
      <JoinModal />
      <VideoModal />
    </>
  )
}
