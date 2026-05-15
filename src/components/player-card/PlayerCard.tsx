import type { Color } from 'chess.js'
import type { PlaceholderAvatar } from '../../data/placeholderAvatars'
import { PixelPanel } from '../ui/PixelPanel'

type PlayerCardProps = {
  name: string
  side: Color
  avatar: PlaceholderAvatar
  isActive: boolean
  statusText: string
}

export function PlayerCard({ name, side, avatar, isActive, statusText }: PlayerCardProps) {
  return (
    <PixelPanel className={`player-card-panel ${isActive ? 'is-active' : ''}`}>
      <div className="flex items-center gap-3">
        {/* TODO(asset): replace initials with theme avatar portraits once the portrait set is ready. */}
        <div
          className="avatar-frame grid h-20 w-20 place-items-center text-sm font-black text-[#302018]"
          style={{ backgroundColor: avatar.color }}
          aria-label={`${avatar.label} avatar placeholder`}
        >
          {avatar.initials}
        </div>
        <div className="min-w-0 text-left">
          <p className="truncate text-base font-black">{name}</p>
          <p className="text-xs font-bold uppercase">{side === 'w' ? 'White' : 'Black'}</p>
          <p className="mt-1 rounded bg-[#f7e5bd]/55 px-2 py-1 text-xs font-semibold">{statusText}</p>
        </div>
      </div>
    </PixelPanel>
  )
}
