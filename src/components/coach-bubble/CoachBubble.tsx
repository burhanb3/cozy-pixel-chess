type CoachBubbleProps = {
  statusText: string
}

export function CoachBubble({ statusText }: CoachBubbleProps) {
  return (
    <section className="coach-area" aria-label="Cafe coach">
      <div className="coach-mascot" aria-hidden="true" />
      <p className="coach-bubble">{statusText}</p>
    </section>
  )
}
