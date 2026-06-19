import { MOVEMENT_COPY } from '../../../data/movement'

export function Movement() {
  return (
    <section className="movement" data-movement>
      <div className="centerline" aria-hidden="true" />
      <div className="dotpin" aria-hidden="true" />
      <div className="movement-sticky">
        <div className="orb-stage">
          <div className="big-orb" aria-hidden="true" />
          <img className="book-mock" src="/assets/figma/book.png" alt="Humans First Machines Second book mockup" />
        </div>
        <div className="move-copy left reveal">
          <h4>{MOVEMENT_COPY.left.title}</h4>
          <p>{MOVEMENT_COPY.left.body}</p>
        </div>
        <div className="move-copy right reveal">
          <h4>{MOVEMENT_COPY.right.title}</h4>
          <p>{MOVEMENT_COPY.right.body}</p>
        </div>
      </div>
    </section>
  )
}
