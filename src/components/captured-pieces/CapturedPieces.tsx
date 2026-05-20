import type { PieceSymbol } from 'chess.js'
import type { MoveHistoryEntry } from '../../game/gameTypes'
import { getCapturedBy, type CapturedPiece } from './capturedPiecesUtils'

type CapturedPiecesProps = {
  moves: MoveHistoryEntry[]
}

const pieceNames: Record<PieceSymbol, string> = {
  p: 'pawn',
  n: 'knight',
  b: 'bishop',
  r: 'rook',
  q: 'queen',
  k: 'king',
}

export function CapturedTray({ pieces }: { pieces: CapturedPiece[] }) {
  return (
    <div className="captured-tray">
      <div className="captured-tray-title">
        <span className="leaf-sprig" aria-hidden="true" />
        <span>Captured</span>
        <span className="leaf-sprig mirror" aria-hidden="true" />
      </div>
      <div className="captured-piece-row" aria-label="Captured pieces">
        {pieces.length === 0 ? (
          <span className="captured-empty" aria-label="No captured pieces yet">
            <span />
            <span />
            <span />
          </span>
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

export function VsMedallion() {
  return (
    <div className="vs-medallion" aria-label="versus">
      VS
    </div>
  )
}

export function CapturedPieces({ moves }: CapturedPiecesProps) {
  return (
    <section className="captured-stack" aria-label="Captured pieces">
      <CapturedTray pieces={getCapturedBy(moves, 'w')} />
      <VsMedallion />
      <CapturedTray pieces={getCapturedBy(moves, 'b')} />
    </section>
  )
}
