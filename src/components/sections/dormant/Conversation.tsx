import { CONVERSATION_CARDS } from '../../../data/conversation'

export function Conversation() {
  return (
    <section className="section conversation" id="conversation">
      <div className="wrap center">
        <h2 className="display section-title reveal">A book that behaves like a matchstick.</h2>
        <p className="section-subtitle reveal">
          <span className="hand-highlight">Thirty sparks. One fire.</span>
        </p>
        <p className="lede reveal">
          Humans First, Machines Second is written for the moment when intelligence is everywhere and belief feels
          scarce. It does not ask people to outrun machines. It asks them to remember what machines do not carry:
          conscience, context, care, wonder, rebellion, forgiveness and the strange human ability to begin again.
        </p>

        <div className="cards cards-captioned">
          {CONVERSATION_CARDS.map((card) => (
            <article key={card.title} className={`card reveal${card.amplify ? ' amplify' : ''}`}>
              <div className="card-flip">
                <img className="card-face card-front" src={card.front} alt={`${card.title} illustration`} />
                <img className="card-face card-back" src={card.back} alt={`${card.title} illustration alternate`} />
              </div>
              <h3 className="sr-only">{card.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
