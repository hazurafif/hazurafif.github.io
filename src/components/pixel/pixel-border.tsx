import { cn } from '@/lib/utils'

interface PixelBorderProps {
  children: React.ReactNode
  className?: string
  glow?: boolean
}

export function PixelBorder({ children, className, glow }: PixelBorderProps) {
  return (
    <div
      className={cn(
        'pixel-border',
        glow && 'pixel-border-glow',
        'transition-all duration-300',
        className
      )}
    >
      {children}
    </div>
  )
}
