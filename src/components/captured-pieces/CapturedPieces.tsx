import type { Color, PieceSymbol } from 'chess.js'
import type { MoveHistoryEntry } from '../../game/gameTypes'

type CapturedPiecesProps = {
  moves: MoveHistoryEntry[]
}

const pieceLabels: Record<PieceSymbol, string> = {
  p: 'P',
  n: 'N',
  b: 'B',
  r: 'R',
  q: 'Q',
  k: 'K',
}

function getCapturedBy(moves: MoveHistoryEntry[], capturer: Color): PieceSymbol[] {
  return moves.filter((move) => move.color === capturer && move.captured).map((move) => move.captured as PieceSymbol)
}

function CapturedTray({ label, pieces }: { label: string; pieces: PieceSymbol[] }) {
  return (
    <div className="captured-tray">
      <div className="captured-tray-title">
        <span className="leaf-sprig" aria-hidden="true" />
        <span>{label}</span>
        <span className="leaf-sprig mirror" aria-hidden="true" />
      </div>
      <div className="captured-piece-row" aria-label={`${label} captured pieces`}>
        {pieces.length === 0 ? (
          <span className="captured-empty" aria-label="No captured pieces yet" />
        ) : (
          pieces.map((piece, index) => (
            <span className="captured-piece" key={`${piece}-${index}`} aria-label={`${piece} captured`}>
              {pieceLabels[piece]}
            </span>
          ))
        )}
      </div>
    </div>
  )
}

export function CapturedPieces({ moves }: CapturedPiecesProps) {
  return (
    <section className="captured-stack" aria-label="Captured pieces">
      <CapturedTray label="Captured" pieces={getCapturedBy(moves, 'w')} />
      <div className="vs-medallion" aria-label="versus">
        VS
      </div>
      <CapturedTray label="Captured" pieces={getCapturedBy(moves, 'b')} />
    </section>
  )
}
