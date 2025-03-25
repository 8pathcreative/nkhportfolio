import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Use Inter font for clean typography
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Minimal Profile Design',
  description: 'A standalone ISR profile example with minimalist black design',
}

export default function MinimalProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 