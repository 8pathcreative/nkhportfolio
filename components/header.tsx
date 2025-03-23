"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { FullScreenMenu } from "@/components/full-screen-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40 h-[var(--header-height)]">
        <div className="container mx-auto px-4 h-full flex justify-between items-center">
          <Link href="/" className="text-lg font-medium">
            Neil.
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full"
              aria-label="Open menu"
            >
              <Menu className="h-7 w-7 sm:h-8 sm:w-8" />
            </Button>
          </div>
        </div>
      </header>

      <FullScreenMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  )
}

