import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import {
  WALL_SEED,
  WALL_WORDS,
  createSeedNotes,
  createWallNoteFromDb,
  type WallNote,
} from '../../data/wall'
import { revealDelay } from '../../utils/reveal'

const NOTE_WIDTH = 148
const NOTE_HEIGHT = 132

function clampNotePosition(x: number, y: number, boardWidth: number, boardHeight: number) {
  const maxX = Math.max(0, ((boardWidth - NOTE_WIDTH) / boardWidth) * 100)
  const maxY = Math.max(0, ((boardHeight - NOTE_HEIGHT) / boardHeight) * 100)
  return {
    x: Math.min(maxX, Math.max(0, x)),
    y: Math.min(maxY, Math.max(0, y)),
  }
}

type DraggableNoteProps = {
  note: WallNote
  boardRef: React.RefObject<HTMLDivElement | null>
  onMove: (id: string, x: number, y: number) => void
}

function DraggableNote({ note, boardRef, onMove }: DraggableNoteProps) {
  const dragRef = useRef<{ offsetX: number; offsetY: number } | null>(null)
  const [dragging, setDragging] = useState(false)

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!boardRef.current) return
    event.currentTarget.setPointerCapture(event.pointerId)
    const noteRect = event.currentTarget.getBoundingClientRect()
    dragRef.current = {
      offsetX: event.clientX - noteRect.left,
      offsetY: event.clientY - noteRect.top,
    }
    setDragging(true)
  }

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current || !boardRef.current) return
    const boardRect = boardRef.current.getBoundingClientRect()
    const x = ((event.clientX - boardRect.left - dragRef.current.offsetX) / boardRect.width) * 100
    const y = ((event.clientY - boardRect.top - dragRef.current.offsetY) / boardRect.height) * 100
    const next = clampNotePosition(x, y, boardRect.width, boardRect.height)
    onMove(note.id, next.x, next.y)
  }

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return
    dragRef.current = null
    setDragging(false)
    event.currentTarget.releasePointerCapture(event.pointerId)
  }

  return (
    <div
      className={`sticky-note${dragging ? ' is-dragging' : ''}`}
      style={{
        left: `${note.x}%`,
        top: `${note.y}%`,
        transform: `rotate(${note.rotation}deg)`,
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <span className="text">{note.word}</span>
      <span className="author">{note.name}</span>
    </div>
  )
}

export function WallWidget() {
  const boardRef = useRef<HTMLDivElement>(null)
  const [notes, setNotes] = useState<WallNote[]>(() => createSeedNotes())
  const [count, setCount] = useState(WALL_SEED.length)
  const [word, setWord] = useState('')
  const [name, setName] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function loadSubmissions() {
      try {
        const response = await fetch('/api/wall')
        if (!response.ok) return

        const data = (await response.json()) as {
          submissions: Array<{ id: string; word: string; name: string }>
          total: number
        }

        if (cancelled) return

        const dbNotes = data.submissions.map((submission, index) =>
          createWallNoteFromDb(submission.id, submission.word, submission.name, index),
        )

        setNotes([...dbNotes, ...createSeedNotes()])
        setCount(WALL_SEED.length + data.total)
      } catch {
        // Keep seed notes if the API is unavailable.
      }
    }

    void loadSubmissions()

    return () => {
      cancelled = true
    }
  }, [])

  const moveNote = useCallback((id: string, x: number, y: number) => {
    setNotes((prev) => prev.map((note) => (note.id === id ? { ...note, x, y } : note)))
  }, [])

  const addNote = async () => {
    const trimmedWord = word.trim()
    if (!trimmedWord || submitting) return

    setSubmitting(true)

    try {
      const response = await fetch('/api/wall', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word: trimmedWord, name: name.trim() }),
      })

      if (!response.ok) return

      const data = (await response.json()) as {
        submission: { id: string; word: string; name: string }
      }

      const note = createWallNoteFromDb(data.submission.id, data.submission.word, data.submission.name, 0)
      setNotes((prev) => [note, ...prev])
      setCount((c) => c + 1)
      setWord('')
      setName('')
    } catch {
      // Submission failed silently; user can retry.
    } finally {
      setSubmitting(false)
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    void addNote()
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      void addNote()
    }
  }

  return (
    <section className="hf-wall-widget post-scroll-reveal" id="wall" data-hf-wall aria-label="The Humans First Wall">
      <div className="hf-wall-wrap">
        <p className="hf-wall-kicker reveal reveal-from-bottom">The Humans First Wall</p>
        <h2 className="display hf-wall-q reveal reveal-from-bottom" style={revealDelay(60)}>
          <span className="hf-wall-q-lead">What part of being human</span>
          <span className="hand-highlight">will you never give up?</span>
        </h2>
        <p className="hf-wall-intro reveal reveal-from-bottom" style={revealDelay(120)}>
          You probably already know. Add it to the wall, beside hundreds who felt the same.
        </p>
        <div className="hf-wall-chip-row reveal reveal-from-bottom" data-hf-wall-chips style={revealDelay(180)}>
          {WALL_WORDS.map((chip) => (
            <button
              key={chip}
              type="button"
              className="hf-wall-chip"
              onClick={() => {
                setWord(chip)
              }}
            >
              {chip}
            </button>
          ))}
        </div>

        <div className="whiteboard reveal reveal-from-bottom" ref={boardRef} data-hf-wall-board style={revealDelay(240)}>
          {notes.map((note) => (
            <DraggableNote key={note.id} note={note} boardRef={boardRef} onMove={moveNote} />
          ))}

          <form className="wall-input" data-hf-wall-form onSubmit={handleSubmit}>
            <select
              className="hf-wall-word"
              data-hf-wall-word
              aria-label="Choose your word"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              disabled={submitting}
              required
            >
              <option value="" disabled>
                Choose your word…
              </option>
              {WALL_WORDS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <input
              className="hf-wall-name"
              data-hf-wall-name
              maxLength={18}
              placeholder="Sign your name"
              aria-label="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={submitting}
            />
            <button className="hf-wall-submit" type="submit" disabled={submitting || !word.trim()}>
              {submitting ? 'Adding…' : 'Add to the wall'}
            </button>
          </form>
        </div>

        <p className="hf-wall-count reveal reveal-from-bottom" style={revealDelay(300)}>
          <b data-hf-wall-count>{count}</b> answers and counting across India.
        </p>
      </div>
    </section>
  )
}
