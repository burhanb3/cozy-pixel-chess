import type { Color, PieceSymbol } from 'chess.js'
import type { MoveHistoryEntry } from '../../game/gameTypes'

type CapturedPiecesProps = {
  moves: MoveHistoryEntry[]
}

type CapturedPiece = {
  color: Color
  type: PieceSymbol
}

const pieceNames: Record<PieceSymbol, string> = {
  p: 'pawn',
  n: 'knight',
  b: 'bishop',
  r: 'rook',
  q: 'queen',
  k: 'king',
}

function getCapturedBy(moves: MoveHistoryEntry[], capturer: Color): CapturedPiece[] {
  return moves
    .filter((move) => move.color === capturer && move.captured)
    .map((move) => ({
      color: move.color === 'w' ? 'b' : 'w',
      type: move.captured as PieceSymbol,
    }))
}

function CapturedTray({ label, pieces }: { label: string; pieces: CapturedPiece[] }) {
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
          pieces.map((piece, index) => {
            const colorClass = piece.color === 'w' ? 'white' : 'black'
            return (
              <span
                className={`captured-piece captured-piece-sprite ${colorClass} piece-${piece.type}`}
                key={`${piece.color}-${piece.type}-${index}`}
                aria-label={`${colorClass} ${pieceNames[piece.type]} captured`}
              />
            )
          })
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
