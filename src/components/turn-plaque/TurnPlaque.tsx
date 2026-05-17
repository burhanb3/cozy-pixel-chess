type TurnPlaqueProps = {
  label: string
}

export function TurnPlaque({ label }: TurnPlaqueProps) {
  return (
    <section className="turn-plaque" aria-live="polite">
      <span className="turn-icon" aria-hidden="true" />
      <span>{label}</span>
      <span className="turn-leaf" aria-hidden="true" />
    </section>
  )
}
