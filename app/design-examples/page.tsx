import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Design Examples | Neil Humphrey',
  description: 'Explore different design and UI experiments for portfolio layouts',
}

export default function DesignExamplesPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Design Examples</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Original Design */}
        <Link href="/" className="group">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden transition duration-300 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-600">
            <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-blue-900/50 to-gray-900/90 text-white">
                <div className="p-8 text-center">
                  <h2 className="text-3xl font-bold mb-2">Current Design</h2>
                  <p className="text-sm text-gray-200">The current portfolio design</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg mb-1">Default Portfolio</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Clean, modern design with focus on content</p>
            </div>
          </div>
        </Link>
        
        {/* Forsberg Design */}
        <Link href="/design-examples/forsberg" className="group">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden transition duration-300 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-600">
            <div className="aspect-video w-full bg-black relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/70 to-black/95 text-white">
                <div className="p-8 text-center">
                  <h2 className="text-3xl font-bold mb-2">Design Engineer</h2>
                  <p className="text-sm text-gray-300">Dark, bold typography design</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg mb-1">Forsberg Design</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Bold typography with minimalist aesthetic</p>
            </div>
          </div>
        </Link>
        
        {/* Minimal Profile Design */}
        <Link href="/design-examples/minimal-profile" className="group">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden transition duration-300 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-600">
            <div className="aspect-video w-full bg-black relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/70 to-black/95 text-white">
                <div className="p-8 text-center">
                  <h2 className="text-3xl font-bold mb-2">Minimal Profile</h2>
                  <p className="text-sm text-gray-300">Clean, dark personal profile</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg mb-1">Minimal Profile</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Simple, elegant profile with optimized ISR</p>
            </div>
          </div>
        </Link>
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          These are design experiments that don't affect the main site.
        </p>
        <Link href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to main site
        </Link>
      </div>
    </div>
  )
} 