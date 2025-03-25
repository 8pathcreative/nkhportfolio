'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroImageV2() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center">
        <Link href="/design-examples" className="text-lg font-semibold tracking-wide">
          FORSBERG
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="#" className="hover:text-gray-300">Home</Link>
          <Link href="#" className="hover:text-gray-300">Work</Link>
          <Link href="#" className="hover:text-gray-300">About</Link>
          <Link href="#" className="hover:text-gray-300">Posts</Link>
          <Link href="#" className="hover:text-gray-300">Contact</Link>
        </div>
      </nav>
      
      {/* Hero Content */}
      <div className="flex flex-col justify-between h-screen px-8 pb-12 pt-24">
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold leading-tight mb-2"
          >
            Hey! I'm Neil.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl font-light max-w-lg"
          >
            precision in multiple design disciplines.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex gap-6 mt-8"
          >
            <Link href="#" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-gray-400 transition-colors">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link href="#" aria-label="Twitter Alternative">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-gray-400 transition-colors">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-gray-400 transition-colors">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
          </motion.div>
        </div>
        
        {/* Giant Name at Bottom */}
        <motion.div 
          className="relative z-10"
          style={{
            opacity: 1 - Math.min(1, scrollY / 300),
            transform: `translateY(${Math.min(scrollY * 0.4, 100)}px)`
          }}
        >
          <h2 className="text-[12vw] sm:text-[14vw] font-bold leading-none tracking-tighter">
            FORSBERG
          </h2>
        </motion.div>
      </div>
    </div>
  )
} 