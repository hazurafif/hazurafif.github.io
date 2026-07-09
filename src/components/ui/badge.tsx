import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-none border border-glass-border px-2.5 py-0.5 text-xs font-body transition-colors focus:outline-none focus:ring-2 focus:ring-accent-light',
  {
    variants: {
      variant: {
        default: 'bg-accent-base/20 text-accent-glow border-accent-base/30',
        secondary: 'bg-glass-md text-text-secondary border-glass-border',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
