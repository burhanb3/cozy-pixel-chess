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

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const ranks = ['8', '7', '6', '5', '4', '3', '2', '1']

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
    // TODO(asset): replace unicode glyphs with theme.assets.pieces once the piece sprite sheets are ready.
    <div className="chess-board-frame pixelated" aria-label="Playable local chess board">
      <div className="board-vine vine-top-left" aria-hidden="true" />
      <div className="board-vine vine-bottom-right" aria-hidden="true" />
      <div className="board-coordinates files top" aria-hidden="true">
        {files.map((file) => <span key={`top-${file}`}>{file}</span>)}
      </div>
      <div className="board-coordinates files bottom" aria-hidden="true">
        {files.map((file) => <span key={`bottom-${file}`}>{file}</span>)}
      </div>
      <div className="board-coordinates ranks left" aria-hidden="true">
        {ranks.map((rank) => <span key={`left-${rank}`}>{rank}</span>)}
      </div>
      <div className="board-coordinates ranks right" aria-hidden="true">
        {ranks.map((rank) => <span key={`right-${rank}`}>{rank}</span>)}
      </div>
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
