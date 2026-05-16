type TurnPlaqueProps = {
  label: string
}

export function TurnPlaque({ label }: TurnPlaqueProps) {
  return (
    <section className="turn-plaque" aria-label="Current turn">
      <span className="turn-plaque-icon" aria-hidden="true" />
      <strong>{label}</strong>
      <span className="turn-plaque-leaf" aria-hidden="true" />
    </section>
  )
}
