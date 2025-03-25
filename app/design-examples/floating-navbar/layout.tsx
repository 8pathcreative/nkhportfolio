'use client'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Floating Navbar | Design Example',
  description: 'A modern floating navbar with hamburger menu and theme toggle',
}

export default function FloatingNavbarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={inter.className}>
      {children}
    </div>
  )
} 