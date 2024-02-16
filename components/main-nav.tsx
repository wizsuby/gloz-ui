"use client"

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Icons } from './icons'

const MainNav = () => {
    const pathname = usePathname()
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6 text-primary dark:text-foreground" />
        <span className="hidden font-bold sm:inline-block text-foreground">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Docs
        </Link>
        <Link
          href="/docs/components"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Components
        </Link>
      </nav>
    </div>
  )
}

export default MainNav
