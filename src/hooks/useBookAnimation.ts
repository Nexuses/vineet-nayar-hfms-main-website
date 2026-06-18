import { useEffect, type RefObject } from 'react'
import type { BookFlipbookHandle } from '../components/sections/book/BookFlipbookEmbed'
import { FLIPBOOK_PAGE_IMAGES, FLIPBOOK_SPREADS } from '../data/flipbookPages'

function mobileStepToPage(step: number) {
  if (step <= 0) return 1
  const spreadIdx = Math.min(step - 1, FLIPBOOK_SPREADS - 1)
  return 2 + spreadIdx * 2
}

function sectionPageForSpread(spreadIdx: number) {
  return 2 + spreadIdx * 2
}

export function useBookAnimation(
  rootRef: RefObject<HTMLElement | null>,
  flipbookRef: RefObject<BookFlipbookHandle | null>,
) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const track = root.querySelector('#hf-track') as HTMLElement | null
    const stage = root.querySelector('.hf-stage') as HTMLElement | null
    const bookScene = root.querySelector('#hf-bookScene') as HTMLElement | null
    const book = root.querySelector('#hf-flipbook') as HTMLElement | null
    const circle = root.querySelector('#hf-circle') as HTMLElement | null
    const approachLine = root.querySelector('#hf-approach-line') as HTMLElement | null
    const approachDot = root.querySelector('#hf-approach-dot') as HTMLElement | null
    const blocksWrap = root.querySelector('#hf-blocks') as HTMLElement | null
    const cta = root.querySelector('#hf-cta') as HTMLButtonElement | null
    const heroCap = root.querySelector('#hf-heroCap') as HTMLElement | null
    const cue = root.querySelector('#hf-cue') as HTMLElement | null
    const tapHint = root.querySelector('#hf-tapHint') as HTMLElement | null
    const flipBtn = root.querySelector('#hf-flipBtn') as HTMLButtonElement | null
    const flipbookHost = root.querySelector('#hf-flipbook') as HTMLElement | null
    const copyEl = root.querySelector('.hf-copy') as HTMLElement | null
    const panels = [...root.querySelectorAll('.hf-panel')] as HTMLElement[]

    if (
      !track ||
      !stage ||
      !bookScene ||
      !book ||
      !circle ||
      !blocksWrap ||
      !cta ||
      !flipbookHost
    ) {
      return
    }

    const spreadCount = FLIPBOOK_SPREADS
    const mobileQuery = window.matchMedia('(max-width: 820px)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    Object.values(FLIPBOOK_PAGE_IMAGES).forEach((src) => {
      const preload = new Image()
      preload.src = src
    })

    const flipbookHostEl = flipbookHost
    const bookSceneEl = bookScene
    const bookEl = book

    let lastSyncedPage = 1
    let lastSyncedSpread = -2
    let pendingPage: number | null = null
    let pendingAnimate = false
    const FLIP_ANIM_MS = reducedMotion ? 0 : 1000

    function showFlipbook() {
      flipbookHostEl.classList.add('is-visible')
    }

    function hideFlipbook() {
      flipbookHostEl.classList.remove('is-visible')
    }

    function flushPendingPage() {
      const flipbook = flipbookRef.current
      if (!flipbook?.isReady() || pendingPage === null) return

      flipbook.setPage(pendingPage, pendingAnimate)
      lastSyncedPage = pendingPage
      pendingPage = null
    }

    function getSpreadIdx(coverOpen: boolean, readP: number, mobileMode: boolean) {
      if (!coverOpen) return -1
      if (mobileMode) return Math.min(spreadCount - 1, Math.max(0, mobileStep - 1))
      return Math.min(spreadCount - 1, Math.floor(readP * spreadCount))
    }

    function getTargetPage(coverOpen: boolean, readP: number, mobileMode: boolean) {
      if (!coverOpen) return 1
      if (mobileMode) return mobileStepToPage(mobileStep)
      const spreadIdx = Math.min(spreadCount - 1, Math.floor(readP * spreadCount))
      return sectionPageForSpread(spreadIdx)
    }

    function syncFlipbook(coverOpen: boolean, readP: number, mobileMode: boolean, animate = false) {
      const flipbook = flipbookRef.current
      const spreadIdx = getSpreadIdx(coverOpen, readP, mobileMode)
      const targetPage = getTargetPage(coverOpen, readP, mobileMode)

      if (!coverOpen) {
        lastSyncedSpread = -1
        if (lastSyncedPage !== 1) {
          if (flipbook?.isReady()) {
            flipbook.setPage(1, false)
            lastSyncedPage = 1
          } else {
            pendingPage = 1
            pendingAnimate = false
          }
        }
        return
      }

      if (targetPage === lastSyncedPage) return

      const sectionChanged = spreadIdx !== lastSyncedSpread
      const shouldAnimate = animate || (!mobileMode && sectionChanged && FLIP_ANIM_MS > 0)

      if (!flipbook?.isReady()) {
        pendingPage = targetPage
        pendingAnimate = shouldAnimate
        return
      }

      flipbook.setPage(targetPage, shouldAnimate)
      lastSyncedPage = targetPage
      lastSyncedSpread = spreadIdx
      pendingPage = null
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
    const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)

    let blocksOpen = false
    let scrollProgress = 0
    let running = false
    let wasPassed = false

    let mobileStep = 0
    let mobileProgress = 0
    let mobileAnimating = false
    let mobileAnimRaf = 0

    const MOBILE_FLIP_MS = reducedMotion ? 0 : 720

    function isMobile() {
      return mobileQuery.matches
    }

    function setCtaLabel(label: string) {
      cta!.textContent = ''
      const dot = document.createElement('span')
      dot.className = 'dot'
      cta!.appendChild(dot)
      cta!.appendChild(document.createTextNode(label))
    }

    function toggleBlocks() {
      if (scrollProgress > 0.1 || isMobile()) return
      blocksOpen = !blocksOpen
      blocksWrap!.classList.toggle('open', blocksOpen)
      setCtaLabel(blocksOpen ? 'Close' : 'What it is')
    }

    function getStickyTop() {
      const value = getComputedStyle(document.documentElement).getPropertyValue('--header').trim()
      const parsed = parseFloat(value)
      return Number.isFinite(parsed) ? parsed : 76
    }

    function getStageHeight() {
      return window.innerHeight - getStickyTop()
    }

    function getCircleDiameter() {
      const stageH = getStageHeight()
      const vw = window.innerWidth

      if (vw <= 900) return Math.min(stageH * 0.62, vw * 0.46, 500)
      if (vw <= 1100) return Math.min(stageH * 0.66, vw * 0.5, 560)
      if (vw <= 1200) return Math.min(stageH * 0.7, vw * 0.54, 620)

      return Math.min(stageH * 0.74, vw * 0.58, 680)
    }

    const APPROACH_ZOOM_START = 0.02
    const APPROACH_ZOOM_END = 0.78
    const APPROACH_LINE_BOTTOM = 0

    function getApproachProgress() {
      const rect = track!.getBoundingClientRect()
      const stickyTop = getStickyTop()
      const vh = window.innerHeight
      const approachStartTop = vh
      const approachEndTop = stickyTop

      // Keep hero clean: no approach until the book track enters the viewport.
      if (rect.bottom <= 0 || rect.top >= approachStartTop) return 0
      if (rect.top <= approachEndTop) return 1

      return clamp((approachStartTop - rect.top) / (approachStartTop - approachEndTop), 0, 1)
    }

    function isBookSectionInView() {
      const rect = track!.getBoundingClientRect()
      const stickyTop = getStickyTop()
      return rect.bottom > stickyTop && rect.top < window.innerHeight
    }

    function isBeforePin() {
      return track!.getBoundingClientRect().top > getStickyTop()
    }

    function clearApproachStyles() {
      ;[circle, bookScene, approachLine, approachDot].forEach((el) => {
        if (!el) return
        el.style.position = ''
        el.style.left = ''
        el.style.top = ''
        el.style.bottom = ''
        el.style.width = ''
        el.style.height = ''
        el.style.opacity = ''
        el.style.display = ''
        el.style.zIndex = ''
        el.style.transform = ''
      })
    }

    function applyApproach(t: number) {
      if (t <= 0 || !isBookSectionInView()) {
        clearApproachStyles()
        if (approachLine) approachLine.style.display = 'none'
        if (approachDot) approachDot.style.display = 'none'
        circle!.style.opacity = '0'
        bookScene!.style.opacity = '0'
        hideFlipbook()
        return
      }

      const stickyTop = getStickyTop()
      const stageH = getStageHeight()
      const stageCenterY = stickyTop + stageH / 2
      const circleDiameter = getCircleDiameter()
      const lineAnchorY = window.innerHeight - APPROACH_LINE_BOTTOM
      const maxLineHeight = Math.max(0, lineAnchorY - stageCenterY)

      const stubT = easeInOut(clamp(t / 0.3))
      const lineGrowT = easeInOut(clamp((t - 0.2) / 0.45))
      const zoomT = easeInOut(clamp((t - 0.55) / 0.45))

      const lineHeight = lerp(lerp(12, 40, stubT), maxLineHeight, lineGrowT)
      const lineTopY = lineAnchorY - lineHeight
      const lineOpacity = lerp(1, 0, easeInOut(clamp((zoomT - 0.08) / 0.5)))

      if (approachLine) {
        const showLine = t > 0 && lineOpacity > 0.02
        approachLine.style.display = showLine ? 'block' : 'none'
        if (showLine) {
          approachLine.style.position = 'fixed'
          approachLine.style.left = '50%'
          approachLine.style.bottom = `${APPROACH_LINE_BOTTOM}px`
          approachLine.style.width = '2px'
          approachLine.style.height = `${lineHeight}px`
          approachLine.style.transform = 'translateX(-50%)'
          approachLine.style.background = '#a8a8a8'
          approachLine.style.opacity = String(lineOpacity)
          approachLine.style.zIndex = '0'
        }
      }

      const dotSize = lerp(10, lerp(18, 28, lineGrowT), stubT)
      const dotOpacity = lineGrowT > 0.02 ? lerp(1, 0, easeInOut(clamp(zoomT / 0.75))) : stubT > 0 ? 1 : 0
      const circleLeadOpacity = t > 0.18 ? easeInOut(clamp((lineGrowT - 0.1) / 0.9)) : 0

      if (approachDot) {
        const showDot = dotOpacity > 0.03 && zoomT < 0.88 && circleLeadOpacity < 0.12
        approachDot.style.display = showDot ? 'block' : 'none'
        if (showDot) {
          approachDot.style.position = 'fixed'
          approachDot.style.left = '50%'
          approachDot.style.top = `${lineTopY - dotSize / 2}px`
          approachDot.style.width = `${dotSize}px`
          approachDot.style.height = `${dotSize}px`
          approachDot.style.borderRadius = '50%'
          approachDot.style.background = 'var(--hf-yellow)'
          approachDot.style.transform = 'translateX(-50%)'
          approachDot.style.opacity = String(dotOpacity)
          approachDot.style.zIndex = '2'
        }
      }

      const minCircleScale = Math.max(APPROACH_ZOOM_START, dotSize / circleDiameter)
      const circleGrowT = Math.max(lineGrowT, zoomT * 0.35)
      const circleScale = lerp(
        lerp(APPROACH_ZOOM_START, minCircleScale, circleGrowT),
        APPROACH_ZOOM_END,
        zoomT,
      )
      const circleOpacity = circleLeadOpacity

      circle!.style.position = 'fixed'
      circle!.style.left = '50%'
      circle!.style.top = `${lerp(lineTopY, stageCenterY, Math.max(circleGrowT, zoomT))}px`
      circle!.style.width = `${circleDiameter}px`
      circle!.style.height = `${circleDiameter}px`
      circle!.style.opacity = String(circleOpacity * (zoomT > 0 ? 1 : circleGrowT))
      circle!.style.transform = `translate(-50%, -50%) scale(${circleScale})`
      circle!.style.zIndex = '1'

      const bookScale = lerp(0, APPROACH_ZOOM_END, zoomT)
      const bookOpacity = easeInOut(clamp((zoomT - 0.18) / 0.82))
      const bookY = lerp(lineTopY, stageCenterY, zoomT)

      bookScene!.style.position = 'fixed'
      bookScene!.style.left = '50%'
      bookScene!.style.top = `${bookY}px`
      bookScene!.style.opacity = String(bookOpacity)
      bookScene!.style.transform = `translate(-50%, -50%) scale(${bookScale})`
      bookScene!.style.zIndex = '3'

      if (bookOpacity > 0.08) {
        showFlipbook()
        syncFlipbook(false, 0, false, false)
      } else {
        hideFlipbook()
      }

      const heroFade = easeInOut(clamp((zoomT - 0.42) / 0.58))
      if (heroCap) {
        heroCap.style.opacity = String(heroFade)
        heroCap.style.transform = 'translateX(-50%)'
      }
      if (cue) cue.style.opacity = String(heroFade * 0.85)
      cta!.style.opacity = String(heroFade)
      cta!.style.pointerEvents = heroFade > 0.5 ? 'auto' : 'none'

      panels.forEach((pl) => pl.classList.remove('active'))
      blocksWrap!.classList.remove('open')
      if (copyEl) copyEl.style.maxWidth = ''
    }

    function updateCopyWidth(xPct: number) {
      if (!copyEl || isMobile()) {
        if (copyEl) copyEl.style.maxWidth = ''
        return
      }

      const radius = getCircleDiameter() / 2
      const styles = getComputedStyle(copyEl)
      const padLeft = parseFloat(styles.paddingLeft) || 0
      const padRight = parseFloat(styles.paddingRight) || 0
      const stagePadLeft = parseFloat(getComputedStyle(stage!).paddingLeft) || 0
      const innerW = stage!.clientWidth - stagePadLeft * 2
      const bookCenterX = stagePadLeft + innerW * 0.5 + (xPct / 100) * innerW
      const maxW = Math.round(bookCenterX - radius - 48)
      const clamped = Math.max(280, Math.min(maxW, innerW * 0.46))
      copyEl.style.maxWidth = `${clamped + padLeft + padRight}px`
    }

    function progressForStep(step: number) {
      if (step <= 0) return 0
      if (step === 1) return 0.22

      const pageIdx = Math.min(step - 1, spreadCount - 1)
      const readP = (pageIdx + 0.06) / spreadCount
      return 0.16 + 0.84 * readP
    }

    function getStepForProgress(p: number) {
      for (let step = spreadCount; step >= 0; step -= 1) {
        if (p >= progressForStep(step) - 0.02) return step
      }
      return 0
    }

    function scrollToBookProgress(targetP: number) {
      const stickyTop = getStickyTop()
      const stageHeight = getStageHeight()
      const scrollable = track!.offsetHeight - stageHeight
      const targetScrollY = track!.offsetTop - stickyTop + targetP * scrollable

      window.scrollTo({
        top: Math.max(0, targetScrollY),
        behavior: reducedMotion ? 'auto' : 'smooth',
      })
    }

    function advanceDesktop() {
      if (isMobile()) return

      if (isBeforePin()) {
        const stickyTop = getStickyTop()
        window.scrollTo({
          top: Math.max(0, track!.offsetTop - stickyTop + 1),
          behavior: reducedMotion ? 'auto' : 'smooth',
        })
        return
      }

      const currentStep = getStepForProgress(scrollProgress)
      if (currentStep >= spreadCount) return

      scrollToBookProgress(progressForStep(currentStep + 1))
    }

    function updateFlipBtn() {
      if (!flipBtn) return
      flipBtn.disabled = !isMobile() || mobileAnimating
      flipBtn.tabIndex = isMobile() ? 0 : -1
      flipBtn.setAttribute('aria-hidden', isMobile() ? 'false' : 'true')
    }

    function updateTapHint(step: number) {
      updateFlipBtn()
      if (!tapHint) return
      if (!isMobile()) {
        tapHint.hidden = true
        tapHint.setAttribute('aria-hidden', 'true')
        return
      }

      tapHint.hidden = false
      tapHint.removeAttribute('aria-hidden')
      tapHint.classList.toggle('is-prominent', step <= 0 && !mobileAnimating)
      const label =
        step <= 0
          ? 'Tap the book to explore'
          : step >= spreadCount
            ? 'Tap to start again'
            : 'Tap to turn the page'
      const icon = tapHint.querySelector('.hf-tap-icon')
      tapHint.textContent = ''
      if (icon) tapHint.appendChild(icon)
      tapHint.appendChild(document.createTextNode(label))
    }

    function applyFrame(p: number, mobileMode = false) {
      if (!mobileMode) {
        clearApproachStyles()
        if (approachLine) approachLine.style.display = 'none'
        if (approachDot) approachDot.style.display = 'none'
      }

      bookScene!.style.opacity = ''

      if (p > 0.06 && blocksOpen) {
        blocksOpen = false
        blocksWrap!.classList.remove('open')
        setCtaLabel('What it is')
      }

      const introT = easeInOut(clamp(p / 0.18))
      const xPct = mobileMode ? 0 : lerp(0, 26, introT)
      const scale = lerp(mobileMode ? 0.88 : 0.78, 1, introT)
      const circleScale = scale

      circle!.style.position = ''
      circle!.style.left = ''
      circle!.style.top = ''
      circle!.style.width = ''
      circle!.style.height = ''
      circle!.style.opacity = ''
      circle!.style.zIndex = ''
      bookScene!.style.position = ''
      bookScene!.style.left = ''
      bookScene!.style.top = ''
      bookScene!.style.zIndex = ''

      if (mobileMode) {
        circle!.style.transform = `scale(${circleScale})`
      } else {
        circle!.style.transform = `translate(calc(-50% + ${xPct}vw), -50%) scale(${circleScale})`
      }

      updateCopyWidth(xPct)

      const heroFade = mobileMode ? (mobileStep <= 0 ? 1 : 1 - clamp(p / 0.12)) : 1 - clamp(p / 0.1)
      if (heroCap) {
        heroCap.style.opacity = String(heroFade)
        heroCap.style.transform = mobileMode ? 'none' : `translateX(-50%) translateY(${-p * 40}px)`
      }
      if (cue) cue.style.opacity = String(heroFade)
      if (tapHint && mobileMode) tapHint.style.opacity = mobileStep <= 0 && !mobileAnimating ? '1' : '0.72'

      cta!.style.opacity = String(heroFade)
      cta!.style.pointerEvents = p > 0.05 ? 'none' : 'auto'

      const baseRotY = lerp(-16, -20, introT)
      const tiltTransform = mobileMode
        ? `rotateY(${baseRotY}deg)`
        : `rotateY(${baseRotY}deg) rotateX(6deg)`

      if (mobileMode) {
        bookSceneEl.style.transform = `translate(-50%, -50%) scale(${scale}) ${tiltTransform}`
      } else {
        bookSceneEl.style.transform = `translate(calc(-50% + ${xPct}vw), -50%) scale(${scale}) ${tiltTransform}`
      }

      showFlipbook()

      const openF = easeInOut(clamp((p - 0.06) / 0.14))
      const coverOpen = openF > 0.02

      const readP = clamp((p - 0.16) / (1 - 0.16))
      const spreadIdx = getSpreadIdx(coverOpen, readP, mobileMode)

      panels.forEach((pl, i) => pl.classList.toggle('active', coverOpen && i === spreadIdx))

      syncFlipbook(coverOpen, readP, mobileMode, mobileAnimating)
    }

    function animateMobileToStep(targetStep: number) {
      const nextStep = clamp(targetStep, 0, spreadCount)
      const fromP = mobileProgress
      const toP = progressForStep(nextStep)

      mobileAnimating = true
      mobileStep = nextStep
      updateTapHint(nextStep)

      if (MOBILE_FLIP_MS === 0) {
        mobileProgress = toP
        mobileAnimating = false
        applyFrame(mobileProgress, true)
        updateTapHint(nextStep)
        return
      }

      const start = performance.now()

      const tick = (now: number) => {
        const t = clamp((now - start) / MOBILE_FLIP_MS)
        const eased = easeInOut(t)
        mobileProgress = lerp(fromP, toP, eased)
        applyFrame(mobileProgress, true)

        if (t < 1) {
          mobileAnimRaf = requestAnimationFrame(tick)
        } else {
          mobileProgress = toP
          applyFrame(mobileProgress, true)
          mobileAnimating = false
          updateTapHint(nextStep)
        }
      }

      cancelAnimationFrame(mobileAnimRaf)
      mobileAnimRaf = requestAnimationFrame(tick)
    }

    function advanceMobile() {
      if (mobileAnimating) return
      if (mobileStep < spreadCount) {
        animateMobileToStep(mobileStep + 1)
        return
      }
      resetMobile()
    }

    function resetMobile() {
      cancelAnimationFrame(mobileAnimRaf)
      mobileAnimating = false
      mobileStep = 0
      mobileProgress = 0
      applyFrame(0, true)
      updateTapHint(0)
    }

    function updatePinState() {
      if (isMobile()) {
        stage!.classList.remove('is-pinned', 'is-ended', 'is-passed')
        return
      }

      const stickyTop = getStickyTop()
      const stageHeight = getStageHeight()
      const rect = track!.getBoundingClientRect()
      const scrollable = track!.offsetHeight - stageHeight
      const pinRelease = stickyTop + stageHeight
      const passed = rect.bottom <= 0
      const beforePin = rect.top > stickyTop
      const pinning = !passed && !beforePin && rect.bottom > pinRelease

      stage!.classList.toggle('is-passed', passed)
      stage!.classList.toggle('is-pinned', pinning)
      stage!.classList.toggle('is-ended', !passed && !beforePin && !pinning)

      if (passed) {
        scrollProgress = 1
      } else if (beforePin) {
        scrollProgress = 0
      } else if (pinning) {
        scrollProgress = scrollable > 0 ? clamp((stickyTop - rect.top) / scrollable) : 0
      } else {
        scrollProgress = 1
      }

      if (passed && !wasPassed) {
        window.dispatchEvent(new CustomEvent('hf-book-complete'))
      }
      wasPassed = passed
    }

    function applyDesktopFrame() {
      if (isBeforePin()) {
        applyApproach(getApproachProgress())
        bookEl.removeAttribute('role')
        bookEl.removeAttribute('aria-label')
        bookEl.tabIndex = -1
        return
      }

      bookEl.setAttribute('role', 'button')
      bookEl.setAttribute('aria-label', 'Turn to the next page')
      bookEl.tabIndex = 0

      if (approachLine) approachLine.style.display = 'none'
      if (approachDot) approachDot.style.display = 'none'
      applyFrame(scrollProgress, false)
    }

    function onScroll() {
      updatePinState()

      if (!isMobile()) {
        applyDesktopFrame()
      }

      if (isMobile()) {
        running = false
        return
      }

      const rect = track!.getBoundingClientRect()
      const inView = rect.bottom > 0 && rect.top < window.innerHeight
      if (inView && !running) {
        running = true
        requestAnimationFrame(render)
      }
      if (!inView) {
        running = false
      }
    }

    function render() {
      if (isMobile()) return

      applyDesktopFrame()

      const rect = track!.getBoundingClientRect()
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        requestAnimationFrame(render)
      } else {
        running = false
      }
    }

    function onMobileModeChange() {
      cancelAnimationFrame(mobileAnimRaf)
      mobileAnimating = false

      if (isMobile()) {
        running = false
        resetMobile()
        bookEl.setAttribute('role', 'button')
        bookEl.setAttribute('aria-label', 'Open and flip through the book')
        bookEl.tabIndex = 0
        return
      }

      bookEl.removeAttribute('role')
      bookEl.removeAttribute('aria-label')
      bookEl.tabIndex = -1
      if (tapHint) tapHint.hidden = true
      if (flipBtn) {
        flipBtn.disabled = true
        flipBtn.tabIndex = -1
        flipBtn.setAttribute('aria-hidden', 'true')
      }
      scrollProgress = 0
      onScroll()
      if (!reducedMotion) {
        running = true
        requestAnimationFrame(render)
      }
    }

    const onFlipBtnClick = (e: Event) => {
      e.stopPropagation()
      if (!isMobile() || mobileAnimating) return
      advanceMobile()
    }

    const onCtaClick = (e: Event) => {
      e.stopPropagation()
      toggleBlocks()
    }

    const onBookClick = (e: Event) => {
      if (isMobile()) {
        if (mobileTouchHandled) {
          e.preventDefault()
          return
        }
        advanceMobile()
        return
      }

      e.stopPropagation()
      advanceDesktop()
    }

    const onBookKeydown = (e: KeyboardEvent) => {
      if (e.key !== 'Enter' && e.key !== ' ') return
      e.preventDefault()
      if (isMobile()) {
        advanceMobile()
        return
      }
      advanceDesktop()
    }

    let touchStartX = 0
    let touchStartY = 0
    let mobileTouchHandled = false

    const onTouchStart = (e: TouchEvent) => {
      if (!isMobile()) return
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
    }

    const onTouchEnd = (e: TouchEvent) => {
      if (!isMobile() || mobileAnimating) return

      const touch = e.changedTouches[0]
      const dx = touch.clientX - touchStartX
      const dy = touch.clientY - touchStartY

      if (Math.abs(dx) >= 48 && Math.abs(dx) > Math.abs(dy)) {
        mobileTouchHandled = true
        window.setTimeout(() => {
          mobileTouchHandled = false
        }, 450)
        if (dx < 0) advanceMobile()
        else if (mobileStep > 0) animateMobileToStep(mobileStep - 1)
        return
      }

      if (Math.abs(dx) > 16 || Math.abs(dy) > 16) return

      mobileTouchHandled = true
      window.setTimeout(() => {
        mobileTouchHandled = false
      }, 450)
      advanceMobile()
    }

    cta.addEventListener('click', onCtaClick)
    if (flipBtn) flipBtn.addEventListener('click', onFlipBtnClick)
    book.addEventListener('click', onBookClick)
    book.addEventListener('keydown', onBookKeydown)
    book.addEventListener('touchstart', onTouchStart, { passive: true })
    book.addEventListener('touchend', onTouchEnd, { passive: true })
    let resizeTimer = 0
    const onResize = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(() => {
        flipbookRef.current?.resize()
        onScroll()
      }, 120)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    mobileQuery.addEventListener('change', onMobileModeChange)

    let didInitialFlipbookResize = false

    const onFlipbookReady = () => {
      flushPendingPage()
      if (!didInitialFlipbookResize) {
        didInitialFlipbookResize = true
        window.requestAnimationFrame(() => flipbookRef.current?.resize())
      }
    }

    const onFlipbookAdvance = () => {
      if (isMobile()) {
        advanceMobile()
        return
      }
      advanceDesktop()
    }

    window.addEventListener('hf-flipbook-ready', onFlipbookReady)
    window.addEventListener('hf-flipbook-advance', onFlipbookAdvance)

    setCtaLabel('What it is')
    onScroll()
    onMobileModeChange()

    if (!reducedMotion && !isMobile()) {
      running = true
      applyApproach(getApproachProgress())
      requestAnimationFrame(render)
    } else if (reducedMotion && !isMobile()) {
      showFlipbook()
      panels.forEach((pl, i) => pl.classList.toggle('active', i === 0))
      if (heroCap) heroCap.style.opacity = '1'
      if (cue) cue.style.opacity = '1'
      cta.style.opacity = '1'
      flipbookRef.current?.setPage(2, false)
    }

    return () => {
      cta.removeEventListener('click', onCtaClick)
      if (flipBtn) flipBtn.removeEventListener('click', onFlipBtnClick)
      book.removeEventListener('click', onBookClick)
      book.removeEventListener('keydown', onBookKeydown)
      book.removeEventListener('touchstart', onTouchStart)
      book.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('hf-flipbook-ready', onFlipbookReady)
      window.removeEventListener('hf-flipbook-advance', onFlipbookAdvance)
      mobileQuery.removeEventListener('change', onMobileModeChange)
      window.clearTimeout(resizeTimer)
      cancelAnimationFrame(mobileAnimRaf)
    }
  }, [flipbookRef, rootRef])
}
