import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type PixelButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>

export function PixelButton({ children, className = '', ...props }: PixelButtonProps) {
  return (
    // TODO(asset): map button state classes to theme.assets.buttons baseNormal/baseHover/basePressed.
    <button className={`pixel-button ${className}`} type="button" {...props}>
      {children}
    </button>
  )
}
