import type { Color, PieceSymbol } from 'chess.js'
import type { MoveHistoryEntry } from '../../game/gameTypes'

export type CapturedPiece = {
  color: Color
  type: PieceSymbol
}

export function getCapturedBy(moves: MoveHistoryEntry[], capturer: Color): CapturedPiece[] {
  return moves
    .filter((move) => move.color === capturer && move.captured)
    .map((move) => ({
      color: move.color === 'w' ? 'b' : 'w',
      type: move.captured as PieceSymbol,
    }))
}
