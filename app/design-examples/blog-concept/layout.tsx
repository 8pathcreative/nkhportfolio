import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
    <div className={inter.className}>
      {children}
    </div>
  )
} 