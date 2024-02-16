"use client"

import { cn } from "@/lib/utils"
// import { useConfig } from "@/hooks/use-config"

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  defaultTheme?: string
}

export function ThemeWrapper({
  defaultTheme,
  children,
  className,
}: ThemeWrapperProps) {
  // const [config] = useConfig()

  return (
    <div
      className={cn(
        `theme-${defaultTheme}`,
        "w-full",
        className
      )}
      style={
        {
          "--radius": `0.5rem`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
