import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Concept | Design Example',
  description: 'An experimental blog design concept with a dark, minimal aesthetic',
}

export default function BlogConceptLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
} 