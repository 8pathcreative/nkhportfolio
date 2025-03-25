import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'Minimal Profile | Design Example',
  description: 'A minimal black profile design with clean typography',
}

// This enables ISR (Incremental Static Regeneration)
export const revalidate = 3600 // revalidate every hour

export default function MinimalProfilePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header/Navigation */}
      <header className="px-4 sm:px-6 md:px-12 py-4 sm:py-6 flex justify-between items-center">
        <Link href="#" className="text-sm">
          hi@neilhumphrey.com
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-4 sm:gap-6 md:gap-8">
          <Link href="#" className="text-sm hover:text-gray-300 transition-colors">Works</Link>
          <Link href="#" className="text-sm hover:text-gray-300 transition-colors">Resume</Link>
          <Link href="#" className="text-sm hover:text-gray-300 transition-colors">Services</Link>
          <Link href="#" className="text-sm hover:text-gray-300 transition-colors">Contact</Link>
        </nav>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out sm:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full pt-20 px-6">
            <nav className="flex flex-col gap-6">
              <Link href="#" className="text-xl text-gray-400 hover:text-white transition-colors">Works</Link>
              <Link href="#" className="text-xl text-gray-400 hover:text-white transition-colors">Resume</Link>
              <Link href="#" className="text-xl text-gray-400 hover:text-white transition-colors">Services</Link>
              <Link href="#" className="text-xl text-gray-400 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-8 sm:py-12 text-center">
        {/* Profile Image */}
        <div className="mb-6 sm:mb-8 relative">
          <div className="w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-full relative mx-auto">
            <Image 
              src="/static/neil-profile.webp"
              alt="Profile"
              width={150}
              height={150}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        
        {/* Greeting */}
        <h1 className="text-xl sm:text-2xl mb-2 flex items-center justify-center gap-2">
          Hi, I'm Neil
          <span role="img" aria-label="wave">👋</span>
        </h1>
        
        {/* Main Headline */}
        <div className="max-w-3xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Building digital<br />
            products, brands, and<br />
            experience.
          </h2>
        </div>
        
        {/* Bio/Description */}
        <div className="max-w-xl mx-auto mb-8 sm:mb-10 text-gray-400 text-sm">
          <p className="mb-2">a Product Designer and Visual Developer in SF.</p>
          <p className="hidden sm:block">I specialize in UI/UX Design, Responsive Web Design,<br />
          and Visual Development.</p>
          <p className="sm:hidden">I specialize in UI/UX Design, Responsive Web Design, and Visual Development.</p>
        </div>
        
        {/* CTA Button */}
        <div>
          <Link 
            href="#"
            className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            CONNECT WITH ME
          </Link>
        </div>
      </main>
      
      {/* Location and Available Status */}
      <div className="fixed bottom-6 left-0 right-0 px-4 sm:px-6 md:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Based in Omaha</span>
            <span className="text-gray-500">🇺🇸</span>
          </div>
          
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-gray-300">Available for Work</span>
          </div>
        </div>
      </div>

      {/* Quick Back Link */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-50">
        <Link 
          href="/design-examples"
          className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 text-white hover:bg-white/20 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-sm">Back to examples</span>
        </Link>
      </div>
    </div>
  )
} 