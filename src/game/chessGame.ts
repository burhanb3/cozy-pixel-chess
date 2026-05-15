import { Chess, type Move, type Square } from 'chess.js'
import type { BoardSquare, ChessGameState, GameStatus, LegalMove, MoveHistoryEntry } from './gameTypes'

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const

function toBoardSquares(chess: Chess): BoardSquare[] {
  return chess.board().flatMap((rank, rankIndex) =>
    rank.map((piece, fileIndex) => ({
      square: `${files[fileIndex]}${8 - rankIndex}` as Square,
      piece: piece ? { color: piece.color, type: piece.type } : null,
    })),
  )
}

function getStatus(chess: Chess): GameStatus {
  if (chess.isCheckmate()) return 'checkmate'
  if (chess.isStalemate()) return 'stalemate'
  if (chess.isDraw()) return 'draw'
  if (chess.isCheck()) return 'check'
  return 'playing'
}

function toMoveHistoryEntry(move: Move, index: number): MoveHistoryEntry {
  return {
    moveNumber: Math.floor(index / 2) + 1,
    color: move.color,
    san: move.san,
    from: move.from,
    to: move.to,
    captured: move.captured,
    promotion: move.promotion,
  }
}

function findKingSquare(chess: Chess, color: 'w' | 'b'): Square | null {
  const king = toBoardSquares(chess).find((square) => square.piece?.color === color && square.piece.type === 'k')
  return king?.square ?? null
}

function serializeGame(chess: Chess, moveHistory: MoveHistoryEntry[], initialFen?: string): ChessGameState {
  const status = getStatus(chess)
  const lastMove = moveHistory.at(-1) ?? null

  return {
    initialFen,
    fen: chess.fen(),
    board: toBoardSquares(chess),
    turn: chess.turn(),
    status,
    moveHistory,
    lastMove: lastMove ? { from: lastMove.from, to: lastMove.to, captured: lastMove.captured } : null,
    checkSquare: status === 'check' || status === 'checkmate' ? findKingSquare(chess, chess.turn()) : null,
    isGameOver: chess.isGameOver(),
  }
}

export function createGameState(fen?: string): ChessGameState {
  return serializeGame(new Chess(fen), [], fen)
}

export function getLegalMoves(fen: string, square: Square): LegalMove[] {
  const chess = new Chess(fen)

  return chess.moves({ square, verbose: true }).map((move) => ({
    from: move.from,
    to: move.to,
    san: move.san,
    captured: move.captured,
  }))
}

export function makeMove(game: ChessGameState, from: Square, to: Square): ChessGameState | null {
  const chess = new Chess(game.fen)
  const move = (() => {
    try {
      return chess.move({ from, to, promotion: 'q' })
    } catch {
      return null
    }
  })()

  if (!move) {
    return null
  }

  return serializeGame(chess, [...game.moveHistory, toMoveHistoryEntry(move, game.moveHistory.length)], game.initialFen)
}

export function undoMove(game: ChessGameState): ChessGameState {
  if (game.moveHistory.length === 0) {
    return game
  }

  const chess = new Chess(game.initialFen)
  const remainingMoves = game.moveHistory.slice(0, -1)

  for (const move of remainingMoves) {
    chess.move({ from: move.from, to: move.to, promotion: move.promotion ?? 'q' })
  }

  return serializeGame(chess, remainingMoves, game.initialFen)
}
