"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

interface BorderMagicLinkProps {
  children: React.ReactNode
  href: string
  className?: string
}

export function BorderMagicLink({ children, href, className }: BorderMagicLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-hidden focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className
      )}
    >
      <span className="absolute inset-[-1000%] animate-border bg-[length:500%_500%] bg-[linear-gradient(to_right,#4ecdc4,#2cb5e8,#a78bfa,#4ecdc4)] blur-xs transition-all"></span>
      <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-6 py-2 text-sm font-medium transition-all focus:outline-hidden">
        {children}
      </span>
    </Link>
  )
}

interface BorderMagicButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: "button" | "submit" | "reset"
}

export function BorderMagicButton({ 
  children, 
  onClick, 
  className,
  type = "button" 
}: BorderMagicButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-hidden focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className
      )}
    >
      <span className="absolute inset-[-1000%] animate-border bg-[length:500%_500%] bg-[linear-gradient(to_right,#4ecdc4,#2cb5e8,#a78bfa,#4ecdc4)] blur-xs transition-all"></span>
      <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-6 py-2 text-sm font-medium transition-all focus:outline-hidden">
        {children}
      </span>
    </button>
  )
} 