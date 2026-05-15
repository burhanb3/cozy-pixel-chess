import type { Color, PieceSymbol, Square } from 'chess.js'

export type GameStatus = 'playing' | 'check' | 'checkmate' | 'stalemate' | 'draw'

export type PieceView = {
  color: Color
  type: PieceSymbol
}

export type BoardSquare = {
  square: Square
  piece: PieceView | null
}

export type MoveHistoryEntry = {
  moveNumber: number
  color: Color
  san: string
  from: Square
  to: Square
  captured?: PieceSymbol
  promotion?: PieceSymbol
}

export type LegalMove = {
  from: Square
  to: Square
  san: string
  captured?: PieceSymbol
}

export type LastMove = {
  from: Square
  to: Square
  captured?: PieceSymbol
}

export type ChessGameState = {
  initialFen?: string
  fen: string
  board: BoardSquare[]
  turn: Color
  status: GameStatus
  moveHistory: MoveHistoryEntry[]
  lastMove: LastMove | null
  checkSquare: Square | null
  isGameOver: boolean
}
