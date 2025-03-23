"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { FullScreenMenu } from "./full-screen-menu"
import { ThemeToggle } from "./theme-toggle"

export default function ExperimentalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3 bg-background/80 backdrop-blur-lg border-b border-border" : "py-5"
        }`}
      >
        <div className="relative mx-auto px-4 flex justify-between items-center">
          {/* Test Banner */}
          <div className="absolute top-0 left-0 right-0 bg-yellow-500/90 text-black text-xs font-medium py-1 text-center -mt-5 z-50">
            EXPERIMENTAL PAGE - <Link href="/" className="underline">Return to Main Site</Link>
          </div>
          
          <Link href="/experimental" className="text-xl font-bold z-10">
            Neil Humphrey
          </Link>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(true)}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-border bg-background hover:bg-muted transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </header>

      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
} 