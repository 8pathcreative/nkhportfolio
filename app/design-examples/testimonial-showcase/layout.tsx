import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Testimonial Showcase | Design Example',
  description: 'A standalone, high-performance testimonial component showcase',
}

export default function TestimonialShowcaseLayout({
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