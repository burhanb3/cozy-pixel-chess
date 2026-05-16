import type { Color } from 'chess.js'
import type { PlaceholderAvatar } from '../../data/placeholderAvatars'
import { PixelPanel } from '../ui/PixelPanel'

type PlayerCardProps = {
  name: string
  side: Color
  avatar: PlaceholderAvatar
  isActive: boolean
  rating: number
  timer: string
  statusText: string
}

export function PlayerCard({ name, side, avatar, isActive, rating, timer, statusText }: PlayerCardProps) {
  return (
    <PixelPanel className={`player-card-panel ${isActive ? 'is-active' : ''}`}>
      <div className="player-card-content">
        {/* TODO(asset): replace initials with theme avatar portraits once the portrait set is ready. */}
        <div
          className="avatar-frame player-avatar"
          style={{ backgroundColor: avatar.color }}
          aria-label={`${avatar.label} avatar placeholder`}
        >
          {avatar.initials}
        </div>
        <div className="player-info">
          <p className="player-name">{name}</p>
          <p className="player-side">{side === 'w' ? 'White' : 'Black'}</p>
          <div className="player-meta">
            <span className="rating-pill" aria-label={`${rating} rating`}>
              <span className="star-icon" aria-hidden="true" />
              {rating}
            </span>
            <span className="timer-pill-card" aria-label={`${timer} timer`}>
              <span className="clock-icon" aria-hidden="true" />
              {timer}
            </span>
          </div>
          <p className="player-status">{statusText}</p>
        </div>
      </div>
    </PixelPanel>
  )
}
