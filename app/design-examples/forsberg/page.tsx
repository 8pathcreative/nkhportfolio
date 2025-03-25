import { Metadata } from 'next'
import HeroImageV2 from '@/components/hero-image-v2'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FORSBERG Design | Neil Humphrey',
  description: 'A bold, minimal portfolio design with large typography',
}

export default function ForsbergDesignPage() {
  return (
    <>
      <HeroImageV2 />
      
      {/* Quick Back Link */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link 
          href="/design-examples"
          className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-white hover:bg-white/20 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-sm">Back to examples</span>
        </Link>
      </div>
    </>
  )
} 