'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingNavbarPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isScrollingUp, setIsScrollingUp] = useState(true)

  const navItems = [
    { name: 'Home', href: '#home', section: 'home' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'Services', href: '#services', section: 'services' },
    { name: 'Contact', href: '#contact', section: 'contact' },
  ]

  useEffect(() => {
    // Toggle body class for dark mode
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determine scroll direction
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 50)
      setLastScrollY(currentScrollY)
      
      // Determine active section
      const sections = navItems.map(item => item.section)
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const offsetTop = rect.top + window.scrollY
          
          if (
            currentScrollY >= offsetTop - 100 && 
            currentScrollY < offsetTop + element.offsetHeight - 100
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, navItems])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isOpen && !target.closest('[data-menu]')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  return (
    <div className={`min-h-screen w-full ${isDarkMode ? 'dark' : ''}`}>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isScrollingUp ? 0 : -100,
          opacity: isScrollingUp ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-3 mx-auto sm:px-6 lg:px-8"
      >
        <div className="relative flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Background blur effect */}
          <div className="absolute inset-0 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg shadow-gray-200/20 dark:shadow-gray-900/20"></div>
          
          {/* Logo */}
          <div className="relative z-10 flex items-center">
            <span className="flex items-center gap-1 text-xl font-bold text-gray-900 dark:text-white">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center">
                <span className="text-white dark:text-black font-bold text-sm">NH</span>
              </div>
              <span className="hidden sm:inline-block ml-2">Neil Humphrey</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="relative z-10 hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm transition-colors ${
                  activeSection === item.section
                    ? 'text-black dark:text-white font-medium'
                    : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {item.name}
                {activeSection === item.section && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black dark:bg-white"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
          </div>
          
          {/* Theme Toggle & Hamburger */}
          <div className="relative z-10 flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
              )}
            </button>
            
            {/* Hamburger Menu */}
            <button
              data-menu
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial={false}
                  animate={isOpen ? { d: "M18 6L6 18" } : { d: "M4 6H20" }}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <motion.path
                  initial={false}
                  animate={isOpen ? { d: "M6 6L18 18" } : { d: "M4 12H20" }}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <motion.path
                  initial={false}
                  animate={isOpen ? { opacity: 0 } : { opacity: 1, d: "M4 18H20" }}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-menu
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-24 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm lg:hidden"
          >
            <div className="container mx-auto px-6 py-8">
              <ul className="flex flex-col gap-6 text-center">
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * navItems.indexOf(item) }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-xl ${
                        activeSection === item.section
                          ? 'text-black dark:text-white font-medium'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Home Section */}
        <section id="home" className="relative h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                Floating Navbar Example
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
                A modern, responsive navbar with smooth animation and theme switching.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#about"
                  className="px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-all"
                >
                  Learn More
                </Link>
                <Link
                  href="/design-examples"
                  className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  Back to Examples
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <Link
              href="#about"
              className="animate-bounce p-2 rounded-full bg-gray-100 dark:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">About This Component</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  This floating navbar component is inspired by Aceternity UI's design, featuring:
                </p>
                <ul>
                  <li>Smooth animations with Framer Motion</li>
                  <li>Responsive design for all screen sizes</li>
                  <li>Hamburger menu for mobile navigation</li>
                  <li>Dark/light mode toggle with smooth transitions</li>
                  <li>Active state indicator that slides between items</li>
                  <li>Auto-hide on scroll down and show on scroll up</li>
                </ul>
                <p>
                  The component is fully functional and can be easily integrated into any Next.js project.
                  It maintains accessibility standards and provides a modern, clean user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Projects Section
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 h-64 flex items-center justify-center"
                >
                  <p className="text-xl font-medium">Project {item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Services Section
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm"
                >
                  <div className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center mb-6">
                    <span className="text-white dark:text-black font-bold">0{item}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Service {item}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">Get In Touch</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                Have questions about implementing this component? Feel free to reach out.
              </p>
              <Link
                href="/design-examples"
                className="px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-all"
              >
                Back to Design Examples
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Quick Back Link */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40">
        <Link 
          href="/design-examples"
          className="flex items-center gap-2 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
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