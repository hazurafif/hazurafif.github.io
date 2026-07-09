import * as React from "react"
import { cn } from "@/lib/utils"

const Sheet = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("fixed inset-0 z-50", className)} {...props} />
  ),
)
Sheet.displayName = "Sheet"

const SheetOverlay = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("fixed inset-0 z-50 bg-black/80", className)}
      {...props}
    />
  ),
)
SheetOverlay.displayName = "SheetOverlay"

const SheetContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l bg-background p-6 shadow-lg",
        className,
      )}
      {...props}
    />
  ),
)
SheetContent.displayName = "SheetContent"

const SheetHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
  ),
)
SheetHeader.displayName = "SheetHeader"

const SheetTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-lg font-semibold text-foreground", className)} {...props} />
  ),
)
SheetTitle.displayName = "SheetTitle"

const SheetDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
)
SheetDescription.displayName = "SheetDescription"

export { Sheet, SheetOverlay, SheetContent, SheetHeader, SheetTitle, SheetDescription }
