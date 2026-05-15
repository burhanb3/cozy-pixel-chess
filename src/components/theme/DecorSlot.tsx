type DecorSlotProps = {
  label: string
}

export function DecorSlot({ label }: DecorSlotProps) {
  return <div className="decor-slot pixelated">{label}</div>
}
