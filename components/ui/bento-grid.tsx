import type { ComponentPropsWithoutRef, ReactNode } from "react"

import { cn } from "@/lib/utils"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  title: string
  className: string
  background: ReactNode
  description: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)} {...props}>
      {children}
    </div>
  )
}

const BentoCard = ({ title, className, background, description, ...props }: BentoCardProps) => (
  <div
    key={title}
    className={cn(
      "group relative order-3 items-start overflow-hidden rounded-2xl bg-neutral-50 p-6 transition-all duration-500 ease-out hover:bg-blue-500/10 dark:bg-neutral-800 xl:order-none",
      className
    )}
    {...props}
  >
    <div>
      <h3 className="mb-2 font-semibold text-primary">{title}</h3>
      <p className="text-foreground">{description}</p>
    </div>
    <div className="-mb-32 mt-4 flex max-h-64 w-full select-none items-center justify-center px-4 drop-shadow-[0_0_28px_rgba(0,0,0,.1)] transition-all duration-300 group-hover:translate-y-[-10px]">
      {background}
    </div>
    <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900" />
  </div>
)

export { BentoCard, BentoGrid }
