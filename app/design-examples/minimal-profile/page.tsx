import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Minimal Profile | Design Example',
  description: 'A minimal black profile design with clean typography',
}

// This enables ISR (Incremental Static Regeneration)
export const revalidate = 3600 // revalidate every hour

export default function MinimalProfilePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header/Navigation */}
      <header className="px-6 md:px-12 py-6 flex justify-between items-center">
        <Link href="#" className="text-sm">
          hi@oguz.design
        </Link>
        <nav className="flex gap-6 md:gap-8">
          <Link href="#" className="text-sm hover:text-gray-300 transition-colors">Works</Link>
          <Link href="#" className="text-sm hover:text-gray-300 transition-colors">Resume</Link>
          <Link href="#" className="text-sm hover:text-gray-300 transition-colors">Services</Link>
          <Link href="#" className="text-sm hover:text-gray-300 transition-colors">Contact</Link>
        </nav>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-12 text-center">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 overflow-hidden rounded-full relative mx-auto">
            <Image 
              src="/images/profile.jpg"
              alt="Profile"
              width={96}
              height={96}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        
        {/* Greeting */}
        <h1 className="text-2xl mb-2 flex items-center justify-center gap-2">
          Hi, I'm Oguz
          <span role="img" aria-label="wave">👋</span>
        </h1>
        
        {/* Main Headline */}
        <div className="max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Building digital<br />
            products, brands, and<br />
            experience.
          </h2>
        </div>
        
        {/* Bio/Description */}
        <div className="max-w-xl mx-auto mb-10 text-gray-400 text-sm">
          <p className="mb-2">a Product Designer and Visual Developer in SF.</p>
          <p>I specialize in UI/UX Design, Responsive Web Design,<br />
          and Visual Development.</p>
        </div>
        
        {/* CTA Button */}
        <div>
          <Link 
            href="#"
            className="px-8 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            CONNECT WITH ME
          </Link>
        </div>
      </main>
    </div>
  )
} 