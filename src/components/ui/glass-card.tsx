import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

export function GlassCard({ className, ...props }: React.ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn("glass rounded-xl", className)}
      {...props}
    />
  )
}
