import { useState } from 'react'
import { FAQ_ITEMS } from '@/data/faq'
import { answerParagraphs, linkifyText } from '@/utils/linkifyText'

export function FaqAccordion() {
  const initialOpen = Math.max(
    0,
    FAQ_ITEMS.findIndex((item) => item.open),
  )
  const [openIndex, setOpenIndex] = useState(initialOpen)

  return (
    <div className="hfms-faq-list">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = index === openIndex

        return (
          <article key={item.question} className={`hfms-faq-item${isOpen ? ' is-open' : ''}`}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <b aria-hidden="true">+</b>
            </button>
            <div className="hfms-faq-answer">
              <div className="hfms-faq-answer-inner">
                {answerParagraphs(item.answer).map((paragraph) => (
                  <p key={paragraph}>{linkifyText(paragraph)}</p>
                ))}
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
