import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog Concept | Design Example',
  description: 'An experimental blog design concept with a dark, minimal aesthetic',
}

// This enables ISR (Incremental Static Regeneration)
export const revalidate = 3600 // revalidate every hour

export default function BlogConceptPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      {/* Navigation */}
      <header className="fixed w-full top-0 px-6 py-6 flex justify-between items-center z-50 bg-black/80 backdrop-blur-sm">
        <Link href="#" className="text-lg font-medium">
          NH.
        </Link>
        <nav className="flex gap-8">
          <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Work</Link>
          <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link>
          <Link href="#" className="text-sm text-white hover:text-gray-200 transition-colors">Blog</Link>
          <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Projects</h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl">
            I'm passionate about my work because I believe that good design
            can make a real difference in the world — it can help businesses
            attract new customers, build stronger relationships, and create a
            more positive brand image.
          </p>
        </div>
      </section>
      
      {/* Featured Post */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <article className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-neutral-900">
              <div className="absolute inset-0 bg-dot-pattern bg-center opacity-25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black rounded-full"></div>
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-500 mb-2 block">June 12, 2023</span>
              <h2 className="text-3xl font-bold mb-4">Designing with Contrast and Hierarchy</h2>
              <p className="text-gray-400 mb-8">
                Exploring how visual hierarchy and contrast can dramatically improve the 
                user experience and guide attention to the most important elements of your design.
              </p>
              <Link href="#" className="inline-flex items-center text-white border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors">
                Read Article
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </section>
      
      {/* Recent Posts Grid */}
      <section className="py-16 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Recent Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <article key={item} className="group">
                <div className="aspect-video bg-neutral-900 rounded-xl mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-dot-pattern bg-center opacity-20"></div>
                </div>
                <span className="text-sm text-gray-500 mb-2 block">May 24, 2023</span>
                <h3 className="text-xl font-bold mb-3 group-hover:text-gray-300 transition-colors">
                  The Role of Animation in Modern UX Design
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  How thoughtful animation enhances user experience, provides feedback,
                  and creates emotional connections with digital products.
                </p>
                <Link href="#" className="text-sm text-white hover:text-gray-300 transition-colors">
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Categories</h2>
          <div className="flex flex-wrap gap-4">
            {['Design', 'Development', 'Case Studies', 'Typography', 'Accessibility', 'Color Theory'].map((category) => (
              <Link 
                key={category}
                href="#" 
                className="px-6 py-3 rounded-full border border-neutral-800 text-sm hover:bg-white hover:text-black transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to my newsletter</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Get the latest articles, resources and case studies delivered directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-3 bg-neutral-900 rounded-full text-white border border-neutral-800 focus:outline-none focus:border-white"
            />
            <button 
              type="submit"
              className="px-8 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-16 px-6 border-t border-neutral-900 mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-bold mb-4">NH.</div>
            <p className="text-gray-400 text-sm mb-6">
              A design-focused developer creating memorable digital experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-6h2v1.1c.52-.63 1.2-1.1 2-1.1 1.66 0 3 1.34 3 3v3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-6h2v1.1c.52-.63 1.2-1.1 2-1.1 1.66 0 3 1.34 3 3v3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-6h2v1.1c.52-.63 1.2-1.1 2-1.1 1.66 0 3 1.34 3 3v3z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Work</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Design</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Development</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Typography</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Accessibility</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto pt-12 mt-12 border-t border-neutral-900 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Neil Humphrey. All rights reserved.</p>
        </div>
      </footer>
      
      {/* Location and Available Status */}
      <div className="fixed bottom-6 left-0 right-0 px-6 md:px-12">
        <div className="flex justify-between items-center">
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
    </div>
  )
} 