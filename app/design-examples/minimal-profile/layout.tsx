import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Minimal Profile | Design Example',
  description: 'A minimal black profile design with clean typography',
}

export default function MinimalProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
} 