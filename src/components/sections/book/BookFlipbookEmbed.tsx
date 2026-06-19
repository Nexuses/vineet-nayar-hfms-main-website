import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

const MAGAZINE_EMBED_SRC = '/turnjs/samples/magazine/index.html?embed=1'

export type BookFlipbookHandle = {
  setPage: (page: number, animate?: boolean) => void
  isReady: () => boolean
  resize: () => void
}

export const BookFlipbookEmbed = forwardRef<BookFlipbookHandle>(function BookFlipbookEmbed(_, ref) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const readyRef = useRef(false)

  const postToFrame = (data: Record<string, unknown>) => {
    iframeRef.current?.contentWindow?.postMessage(data, '*')
  }

  useImperativeHandle(ref, () => ({
    setPage(page: number, animate = false) {
      postToFrame({ type: 'hf-flipbook-set-page', page, animate })
    },
    isReady() {
      return readyRef.current
    },
    resize() {
      postToFrame({ type: 'hf-flipbook-resize' })
    },
  }))

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.source !== iframeRef.current?.contentWindow) return

      if (event.data?.type === 'hf-flipbook-ready') {
        const wasReady = readyRef.current
        readyRef.current = true
        if (!wasReady) {
          window.dispatchEvent(new CustomEvent('hf-flipbook-ready'))
        }
      }

      if (event.data?.type === 'hf-flipbook-advance') {
        window.dispatchEvent(new CustomEvent('hf-flipbook-advance'))
      }
    }

    window.addEventListener('message', onMessage)
    return () => {
      window.removeEventListener('message', onMessage)
      readyRef.current = false
    }
  }, [])

  return (
    <iframe
      ref={iframeRef}
      className="hf-flipbook-frame"
      src={MAGAZINE_EMBED_SRC}
      title="Humans First flipbook"
    />
  )
})
