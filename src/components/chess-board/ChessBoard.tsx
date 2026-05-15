import type { Square } from 'chess.js'
import type { BoardSquare, LastMove, LegalMove } from '../../game/gameTypes'

type ChessBoardProps = {
  squares: BoardSquare[]
  selectedSquare: Square | null
  invalidSquare: Square | null
  lastMove: LastMove | null
  checkSquare: Square | null
  legalMoves: LegalMove[]
  onSquareClick: (square: Square) => void
}

const pieceGlyphs = {
  wp: '♙',
  wn: '♘',
  wb: '♗',
  wr: '♖',
  wq: '♕',
  wk: '♔',
  bp: '♟',
  bn: '♞',
  bb: '♝',
  br: '♜',
  bq: '♛',
  bk: '♚',
} as const

export function ChessBoard({
  squares,
  selectedSquare,
  invalidSquare,
  lastMove,
  checkSquare,
  legalMoves,
  onSquareClick,
}: ChessBoardProps) {
  const legalTargets = new Map(legalMoves.map((move) => [move.to, move]))

  return (
    // TODO(asset): replace frame/surface CSS and unicode glyphs with theme.assets.boards and theme.assets.pieces.
    <div className="chess-board-frame pixelated" aria-label="Playable local chess board">
      <div className="chess-board">
        {squares.map(({ square, piece }, index) => {
          const isLight = (Math.floor(index / 8) + (index % 8)) % 2 === 0
          const isSelected = selectedSquare === square
          const legalMove = legalTargets.get(square)
          const isLegal = Boolean(legalMove)
          const isCapture = Boolean(legalMove?.captured)
          const isLastMove = lastMove?.from === square || lastMove?.to === square
          const isCheck = checkSquare === square
          const isInvalid = invalidSquare === square
          const pieceColor = piece?.color
          const glyph = piece ? pieceGlyphs[`${piece.color}${piece.type}` as keyof typeof pieceGlyphs] : null
          const squareStateLabel = [
            isSelected ? 'selected' : '',
            isLegal ? 'legal destination' : '',
            isCapture ? 'capture' : '',
            isLastMove ? 'last move' : '',
            isCheck ? 'king in check' : '',
          ]
            .filter(Boolean)
            .join(', ')

          return (
            <button
              aria-label={`${square}${piece ? ` ${piece.color === 'w' ? 'white' : 'black'} ${piece.type}` : ''}${squareStateLabel ? `, ${squareStateLabel}` : ''}`}
              className={`chess-square ${isLight ? 'light' : 'dark'} ${isSelected ? 'selected' : ''} ${isLegal ? 'legal' : ''} ${isCapture ? 'capture' : ''} ${isLastMove ? 'last-move' : ''} ${isCheck ? 'in-check' : ''} ${isInvalid ? 'invalid' : ''}`}
              key={square}
              onClick={() => onSquareClick(square)}
              type="button"
            >
              {glyph ? <span className={`piece ${pieceColor === 'w' ? 'white' : 'black'}`}>{glyph}</span> : null}
            </button>
          )
        })}
      </div>
    </div>
  )
}
