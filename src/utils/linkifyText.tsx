import type { ReactNode } from 'react'

const LINK_RE =
  /(https?:\/\/[^\s]+|www\.[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g

function isEmail(match: string) {
  return match.includes('@') && match.includes('.') && !match.includes('://') && !match.startsWith('www.')
}

export function linkifyText(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  const regex = new RegExp(LINK_RE.source, 'g')

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }

    const value = match[0]
    if (isEmail(value)) {
      nodes.push(
        <a key={`${match.index}-${value}`} href={`mailto:${value}`}>
          {value}
        </a>,
      )
    } else {
      const href = value.startsWith('http') ? value : `https://${value}`
      nodes.push(
        <a key={`${match.index}-${value}`} href={href} target="_blank" rel="noopener noreferrer">
          {value}
        </a>,
      )
    }

    lastIndex = match.index + value.length
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes.length > 0 ? nodes : [text]
}

export function answerParagraphs(answer: string): string[] {
  return answer.split('\n\n')
}
