import { cn } from '@/lib/utils'

interface PixelDividerProps {
  className?: string
}

export function PixelDivider({ className }: PixelDividerProps) {
  return (
    <div
      className={cn(
        'h-1 w-full',
        'bg-[repeating-linear-gradient(90deg,var(--color-accent-base)_0px,var(--color-accent-base)_4px,transparent_4px,transparent_8px)]',
        className
      )}
    />
  )
}
