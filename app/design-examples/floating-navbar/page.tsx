'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { useTheme } from 'next-themes'

export default function FloatingNavbarPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Define navigation items
  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Blog', link: '#blog' },
    { name: 'Contact', link: '#contact' },
  ]

  // After mounting, we can access the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
      {/* Floating Navbar */}
      <FloatingNav navItems={navItems} />
      
      {/* Theme Toggle (Fixed Position) */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed bottom-6 right-24 p-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-full shadow-md z-50"
        aria-label="Toggle Theme"
      >
        {mounted && theme === 'dark' ? (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-5 h-5 text-black dark:text-white"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" 
            />
          </svg>
        ) : (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-5 h-5 text-black dark:text-white"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" 
            />
          </svg>
        )}
      </button>
      
      {/* Back Link */}
      <Link 
        href="/design-examples"
        className="fixed bottom-6 right-6 flex items-center gap-2 bg-white dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full shadow-md z-50"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-4 h-4"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" 
          />
        </svg>
        <span>Back</span>
      </Link>
      
      {/* Content Sections */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white">Floating Navbar</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Scroll down to see it in action</p>
          <div className="mt-8 flex justify-center">
            <svg className="w-6 h-6 text-gray-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
      
      <section id="about" className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-8">About Section</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            This demonstrates a floating navbar that appears when scrolling up. The navbar is hidden when scrolling down and visible when scrolling up or at the top of the page.
          </p>
        </div>
      </section>
      
      <section id="services" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-8">Services Section</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Keep scrolling to see how the navbar appears when you scroll back up. The animation is smooth and subtle, providing a good user experience.
          </p>
        </div>
      </section>
      
      <section id="blog" className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-8">Blog Section</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            This example follows the Aceternity UI design pattern for a floating navbar. It uses Framer Motion for animations and supports both light and dark themes.
          </p>
        </div>
      </section>
      
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-8">Contact Section</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            This is the last section. Try scrolling back up to see the navbar in action again. The theme toggle button stays fixed at the bottom right of the screen.
          </p>
        </div>
      </section>
    </div>
  )
} 