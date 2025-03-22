"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

interface FullScreenMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function FullScreenMenu({ isOpen, onClose }: FullScreenMenuProps) {
  const [mounted, setMounted] = useState(false)

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent scrolling when menu is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col bg-background transition-all duration-500 ease-in-out ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold">
            <Link href="/" className="hover:text-primary duration-200">
              Neil.
            </Link>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <nav className="flex flex-col items-center gap-8 text-4xl font-medium">
          <Link href="#about" onClick={onClose} className="hover:text-primary/80 transition-colors relative group">
            About
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#portfolio" onClick={onClose} className="hover:text-primary/80 transition-colors relative group">
            Portfolio
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#skills" onClick={onClose} className="hover:text-primary/80 transition-colors relative group">
            Skills
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#contact" onClick={onClose} className="hover:text-primary/80 transition-colors relative group">
            Contact
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center gap-6">
          <Link
            href="https://github.com"
            target="_blank"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            aria-label="Twitter"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Twitter
          </Link>
        </div>
      </div>
    </div>
  )
}

