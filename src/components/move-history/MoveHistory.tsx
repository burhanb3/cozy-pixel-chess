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
    <PixelPanel className="move-history-panel max-h-full overflow-hidden">
      <div className="move-history-heading">
        <span className="leaf-sprig" aria-hidden="true" />
        <span>Move History</span>
        <span className="leaf-sprig mirror" aria-hidden="true" />
      </div>
      <div className="move-history-columns">
        <span>#</span>
        <span>White</span>
        <span>Black</span>
      </div>
      <div className="move-history-scroll">
        {rows.length === 0 ? (
          <p className="move-history-empty">No moves yet</p>
        ) : (
          <ol className="space-y-1">
            {rows.map((row) => {
              const isLastRow = row.white === lastMove || row.black === lastMove

              return (
              <li
                className={`move-row ${isLastRow ? 'is-latest' : ''}`}
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
