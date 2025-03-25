import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './style.css'

// Use Inter font for clean typography
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog Design Concept',
  description: 'An experimental blog design concept page',
}

export default function BlogConceptLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 