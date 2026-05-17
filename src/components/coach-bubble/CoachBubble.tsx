type CoachBubbleProps = {
  statusText: string
}

export function CoachBubble({ statusText }: CoachBubbleProps) {
  return (
    <section className="coach-card" aria-label="Cafe coach note">
      <div className="cat-mascot" aria-hidden="true" />
      <div className="coach-bubble">
        <p>{statusText}</p>
      </div>
    </section>
  )
}
