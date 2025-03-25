import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Concept | Design Example',
  description: 'An experimental blog design concept with a dark, minimal aesthetic',
}

// This enables ISR (Incremental Static Regeneration)
export const revalidate = 3600 // revalidate every hour

export default function BlogConceptLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
} 