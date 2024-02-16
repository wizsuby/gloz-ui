import React from 'react'
import MainNav from './main-nav'
import MobileNav from './mobile-nav'
import { CommandMenu } from './command-menu'

import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import { Github, Twitter, X } from 'lucide-react'
import { ModeToggle } from './mode-toggle'
import { Icons } from './icons'

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-4 md:justify-end">
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.twitter className="h-3.5 w-3.5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
