import type { PropsWithChildren } from 'react'

type PixelPanelProps = PropsWithChildren<{
  className?: string
  title?: string
}>

export function PixelPanel({ children, className = '', title }: PixelPanelProps) {
  return (
    <section className={`pixel-panel p-3 ${className}`}>
      {title ? <h2 className="mb-2 text-sm font-black uppercase tracking-wide">{title}</h2> : null}
      {children}
    </section>
  )
}
