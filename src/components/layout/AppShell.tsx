import { useRouter } from 'next/router'
import type { ReactNode } from 'react'
import { FEATURES } from '@/data/site'
import { useCursorGlow } from '@/hooks/useCursorGlow'
import { useHandHighlightFit } from '@/hooks/useHandHighlightFit'
import { useMagnetic } from '@/hooks/useMagnetic'
import { useMobileMenu } from '@/hooks/useMobileMenu'
import { useNavSpy } from '@/hooks/useNavSpy'
import { useReveal } from '@/hooks/useReveal'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useTiltCard } from '@/hooks/useTiltCard'
import { ContactModal } from '@/components/modals/ContactModal'
import { JoinModal } from '@/components/modals/JoinModal'
import { VideoModal } from '@/components/modals/VideoModal'
import { CursorGlow } from './CursorGlow'
import { Footer } from './Footer'
import { Header } from './Header'
import { MobileMenu } from './MobileMenu'
import { NoiseOverlay } from './NoiseOverlay'
import { ProgressBar } from './ProgressBar'
import { ScrollToTop } from './ScrollToTop'

interface AppShellProps {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  const { open, openMenu, closeMenu } = useMobileMenu()
  const router = useRouter()
  const isHome = router.pathname === '/'

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

      {children}

      <Footer />
      <JoinModal />
      <ContactModal />
      <VideoModal />
    </>
  )
}
