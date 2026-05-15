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
    <PixelPanel className={isActive ? 'ring-4 ring-[#f2bd57]/60' : ''}>
      <div className="flex items-center gap-3">
        <div
          className="grid h-14 w-14 place-items-center rounded-lg border-4 border-[#56362a] text-sm font-black text-[#352119]"
          style={{ backgroundColor: avatar.color }}
          aria-label={`${avatar.label} avatar placeholder`}
        >
          {avatar.initials}
        </div>
        <div className="min-w-0 text-left">
          <p className="truncate text-base font-black">{name}</p>
          <p className="text-xs font-bold uppercase">{side === 'w' ? 'White' : 'Black'}</p>
          <p className="mt-1 text-xs font-semibold">{statusText}</p>
        </div>
      </div>
    </PixelPanel>
  )
}
