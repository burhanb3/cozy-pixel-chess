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
      <div className="move-history-heading">Move History</div>
      <div className="move-history-scroll">
        {rows.length === 0 ? (
          <div className="move-history-empty" aria-label="No moves yet">
            <span />
            <span />
            <span />
          </div>
        ) : (
          <ol className="move-history-list">
            {rows.map((row) => {
              const isLastRow = row.white === lastMove || row.black === lastMove

              return (
              <li
                className={`move-row ${isLastRow ? 'is-latest' : ''}`}
                key={row.moveNumber}
              >
                <span className="move-number">{row.moveNumber}.</span>
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
