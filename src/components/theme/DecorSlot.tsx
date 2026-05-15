type DecorSlotProps = {
  label: string
}

export function DecorSlot({ label }: DecorSlotProps) {
  // TODO(asset): replace this placeholder box with theme decor assets such as cup, lamp, books, plant, and cat bed.
  return <div className="decor-slot pixelated">{label}</div>
}
