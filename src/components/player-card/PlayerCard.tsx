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
    // TODO(asset): replace panel CSS with theme.assets.panels.playerFrame.
    <PixelPanel className={`player-card-panel ${isActive ? 'is-active' : ''}`}>
      <div className="flex items-center gap-3">
        {/* TODO(asset): replace this block with theme.assets.avatars.frame and theme avatar portraits. */}
        <div
          className="avatar-frame grid h-16 w-16 place-items-center text-sm font-black text-[#302018]"
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
