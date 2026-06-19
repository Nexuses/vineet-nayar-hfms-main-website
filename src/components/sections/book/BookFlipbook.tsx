import { forwardRef, useImperativeHandle, useRef } from 'react'
import { useBookFlipbook, type BookFlipbookApi } from '../../../hooks/useBookFlipbook'

export type BookFlipbookHandle = {
  setPage: (page: number, animate?: boolean) => void
  isReady: () => boolean
  resize: () => void
}

export const BookFlipbook = forwardRef<BookFlipbookHandle>(function BookFlipbook(_, ref) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const magazineRef = useRef<HTMLDivElement>(null)
  const apiRef = useRef<BookFlipbookApi | null>(null)

  useBookFlipbook({ viewportRef, magazineRef, apiRef })

  useImperativeHandle(ref, () => ({
    setPage(page: number, animate?: boolean) {
      apiRef.current?.setPage(page, animate)
    },
    isReady() {
      return apiRef.current?.isReady() ?? false
    },
    resize() {
      apiRef.current?.resize()
    },
  }))

  return (
    <div className="hf-flipbook-viewport" ref={viewportRef}>
      <div className="hf-flipbook-container">
        <div className="hf-flipbook-magazine" ref={magazineRef} />
      </div>
    </div>
  )
})
