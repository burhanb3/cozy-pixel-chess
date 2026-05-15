import type { MoveHistoryEntry } from '../../game/gameTypes'
import { PixelPanel } from '../ui/PixelPanel'

type MoveHistoryProps = {
  moves: MoveHistoryEntry[]
}

export function MoveHistory({ moves }: MoveHistoryProps) {
  const lastMove = moves.at(-1)
  const rows = Array.from({ length: Math.ceil(moves.length / 2) }, (_, index) => ({
    moveNumber: index + 1,
    white: moves[index * 2],
    black: moves[index * 2 + 1],
  }))

  return (
    <PixelPanel title="Move History" className="move-history-panel max-h-full overflow-hidden">
      <div className="mb-2 grid grid-cols-[2rem_1fr_1fr] gap-2 rounded bg-[#3d251d]/20 px-2 py-1 text-xs font-black uppercase tracking-wide text-[#4b2a20]">
        <span>#</span>
        <span>White</span>
        <span>Black</span>
      </div>
      <div className="max-h-[292px] overflow-y-auto pr-1 text-sm font-bold">
        {rows.length === 0 ? (
          <p className="py-8 text-center text-[#6d4a34]">No moves yet</p>
        ) : (
          <ol className="space-y-1">
            {rows.map((row) => {
              const isLastRow = row.white === lastMove || row.black === lastMove

              return (
              <li
                className={`move-row grid grid-cols-[2rem_1fr_1fr] gap-2 rounded px-2 py-1 ${isLastRow ? 'is-latest' : ''}`}
                key={row.moveNumber}
              >
                <span className="text-[#6d4a34]">{row.moveNumber}.</span>
                <span title={row.white ? `${row.white.from}-${row.white.to}` : undefined}>{row.white?.san ?? ''}</span>
                <span title={row.black ? `${row.black.from}-${row.black.to}` : undefined}>{row.black?.san ?? ''}</span>
              </li>
              )
            })}
          </ol>
        )}
      </div>
    </PixelPanel>
  )
}
