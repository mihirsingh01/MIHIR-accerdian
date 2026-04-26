import * as React from "react"
import { cn } from "@/lib/utils"

const SectionWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { id?: string }
>(({ className, id, ...props }, ref) => (
  <section
    id={id}
    ref={ref}
    className={cn(
      "py-16 md:py-24 lg:py-32",
      className
    )}
    {...props}
  />
))
SectionWrapper.displayName = "SectionWrapper"

export { SectionWrapper }
