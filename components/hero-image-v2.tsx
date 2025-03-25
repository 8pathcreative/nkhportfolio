'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroImageV2() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      })
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-hidden z-10">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Enhanced Shadow Effect - darker & more dramatic */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 80%)`,
          opacity: 0.6
        }}
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center backdrop-blur-sm bg-black/10">
        <Link href="/design-examples" className="text-base sm:text-lg font-semibold tracking-wide">
          FORSBERG
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
        <div className="hidden sm:flex gap-4 sm:gap-6 text-sm">
          <Link href="#" className="hover:text-gray-300">Home</Link>
          <Link href="#" className="hover:text-gray-300">Work</Link>
          <Link href="#" className="hover:text-gray-300">About</Link>
          <Link href="#" className="hover:text-gray-300">Posts</Link>
          <Link href="#" className="hover:text-gray-300">Contact</Link>
        </div>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out sm:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full pt-20 px-6">
            <nav className="flex flex-col gap-6">
              <Link href="#" className="text-xl text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link href="#" className="text-xl text-gray-400 hover:text-white transition-colors">Work</Link>
              <Link href="#" className="text-xl text-gray-400 hover:text-white transition-colors">About</Link>
              <Link href="#" className="text-xl text-gray-400 hover:text-white transition-colors">Posts</Link>
              <Link href="#" className="text-xl text-gray-400 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </nav>
      
      {/* Hero Content */}
      <div className="flex flex-col justify-between h-screen px-4 sm:px-8 pb-8 sm:pb-12 pt-20 sm:pt-24">
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-2"
          >
            Hey! I'm Neil.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg font-light max-w-lg"
          >
            precision in multiple design disciplines.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex gap-4 sm:gap-6 mt-6 sm:mt-8"
          >
            <Link href="#" aria-label="Twitter" className="p-2 -m-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-gray-400 transition-colors">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link href="#" aria-label="Twitter Alternative" className="p-2 -m-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-gray-400 transition-colors">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </Link>
            <Link href="#" aria-label="LinkedIn" className="p-2 -m-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-gray-400 transition-colors">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
          </motion.div>
        </div>
        
        {/* Animated elements for lightning effect */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <div className="lightning" style={{ '--lightning-delay': '0' } as React.CSSProperties}>
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 5L65 40H85L50 95L35 60H15L50 5Z" fill="white"/>
            </svg>
          </div>
        </div>
        
        <div className="absolute right-1/4 top-1/3 opacity-5 pointer-events-none">
          <div className="lightning" style={{ '--lightning-delay': '2' } as React.CSSProperties}>
            <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 5L65 40H85L50 95L35 60H15L50 5Z" fill="white"/>
            </svg>
          </div>
        </div>
        
        <div className="absolute left-1/4 bottom-1/3 opacity-5 pointer-events-none">
          <div className="lightning" style={{ '--lightning-delay': '3.5' } as React.CSSProperties}>
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 5L65 40H85L50 95L35 60H15L50 5Z" fill="white"/>
            </svg>
          </div>
        </div>
        
        {/* Giant Name at Bottom */}
        <motion.div 
          className="relative z-10"
          style={{
            opacity: 1 - Math.min(1, scrollY / 300),
            transform: `translateY(${Math.min(scrollY * 0.4, 100)}px)`
          }}
        >
          <h2 className="text-[8vw] sm:text-[10vw] md:text-[12vw] font-bold leading-none tracking-tighter">
            Design Engineer
          </h2>
        </motion.div>
      </div>
    </div>
  )
} 