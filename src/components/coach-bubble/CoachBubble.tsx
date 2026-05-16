type CoachBubbleProps = {
  statusText: string
}

export function CoachBubble({ statusText }: CoachBubbleProps) {
  return (
    <section className="coach-card" aria-label="Cafe coach note">
      <div className="cat-mascot" aria-hidden="true">
        <span className="cat-ear left" />
        <span className="cat-ear right" />
        <span className="cat-face">
          <span className="cat-eye left" />
          <span className="cat-eye right" />
          <span className="cat-mug" />
        </span>
      </div>
      <div className="coach-bubble">
        <p>{statusText}</p>
      </div>
    </section>
  )
}
