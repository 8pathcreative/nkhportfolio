'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Static image URLs (using placeholder images until you provide your own)
const TESTIMONIAL_IMAGES = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=500&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=500&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=500&q=80',
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=500&q=80',
]

// Testimonial data
const TESTIMONIALS = [
  {
    text: 'KW70 Fix is a leading real estate investment firm in the World, headquartered in New York with offices in <span class="text-gray-500">London, Chicago, Barcelona, Vienna, Rome, Las Vegas.</span> KW70 Fix initiative seeks out regions and markets with robust underlying catalysts, such as burgeoning technology sectors, a diverse workforce, and a strong entrepreneurial culture.',
    name: 'Wade Warren',
    title: 'CEO, Since Industry',
    imageIndex: 0
  },
  {
    text: '"Omega Capital Ventures, headquartered in <span class="text-gray-500">London and with offices in Singapore, Dubai, and New York,</span> specializes in real estate investments driven by technological advancement and sustainable development. Led by CEO Mark Johnson, the firm identifies emerging markets with vibrant ecosystems and invests strategically to foster growth and innovation.',
    name: 'Jennifer Hayes',
    title: 'CTO, Tech Industry',
    imageIndex: 1
  },
  {
    text: 'Apex Growth Partners, based in Los Angeles with branches in <span class="text-gray-500">Hong Kong, Sydney, and Berlin,</span> focuses on real estate opportunities in regions with thriving entrepreneurial cultures and robust technology sectors. CEO Sarah Chen leads the firm in leveraging these catalysts to create value and drive sustainable growth for investors.',
    name: 'Samantha Roberts',
    title: 'CEO, Finance Industry',
    imageIndex: 2
  },
  {
    text: '"Innova Realty Investments, headquartered in Toronto with offices in <span class="text-gray-500">Shanghai, Mumbai, and Amsterdam,</span> targets markets with dynamic demographic shifts and strong innovation hubs. CEO David Wong leads the firm in seizing opportunities that align with its vision of creating vibrant and sustainable communities through strategic real estate investments.',
    name: 'Michael Chen',
    title: 'President, Real Estate Group',
    imageIndex: 3
  }
]

export default function TestimonialShowcase() {
  const [activeSlide, setActiveSlide] = useState(0)
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % TESTIMONIALS.length)
  }
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed w-full top-0 px-4 sm:px-6 py-4 flex justify-between items-center z-50 bg-white/80 backdrop-blur-sm">
        <Link href="/design-examples" className="text-base sm:text-lg font-medium">
          Back to Examples
        </Link>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Testimonial Section */}
        <section className="relative py-8 md:py-16 lg:py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Heading and Controls */}
            <div className="flex flex-wrap -mx-4 items-center mb-8 md:mb-12 lg:mb-20">
              <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">Testimonials</h1>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="flex items-center justify-start md:justify-end">
                  <button 
                    className="inline-flex h-12 w-12 sm:h-14 sm:w-14 mr-4 items-center justify-center text-black hover:text-white hover:bg-black border border-black rounded-full transition duration-200"
                    onClick={prevSlide}
                    aria-label="Previous testimonial"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.7051 7.12817L4.15732 13.6759L10.7051 20.2237" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M22.4941 13.6759H4.33949" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
                  <button 
                    className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center text-black hover:text-white hover:bg-black border border-black rounded-full transition duration-200"
                    onClick={nextSlide}
                    aria-label="Next testimonial"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.2949 7.12817L22.8427 13.6759L16.2949 20.2237" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M4.50586 13.6759H22.6605" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Testimonial Cards */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {TESTIMONIALS.map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-full">
                    <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
                      <div className="flex flex-col lg:flex-row">
                        <div className="w-full lg:w-4/12 h-64 lg:h-auto relative">
                          <Image 
                            src={TESTIMONIAL_IMAGES[testimonial.imageIndex]}
                            alt={`Photo of ${testimonial.name}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index === 0}
                          />
                        </div>
                        <div className="w-full lg:w-8/12 self-center">
                          <div className="py-8 px-6 sm:py-12 sm:px-10 md:py-16 md:px-12 max-w-2xl">
                            <p 
                              className="mb-6 md:mb-8 text-lg md:text-xl lg:text-2xl leading-snug"
                              dangerouslySetInnerHTML={{ __html: testimonial.text }}
                            ></p>
                            <span className="block font-medium text-lg">{testimonial.name}</span>
                            <span className="block text-sm text-gray-500">{testimonial.title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Indicators */}
            <div className="mt-6 flex justify-center gap-2 md:hidden">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    activeSlide === index ? 'w-8 bg-black' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* How to Use This Component */}
        <section className="py-16 px-4 sm:px-6 container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">How to Use This Component</h2>
          <div className="prose max-w-none">
            <p>
              This testimonial component is built as a standalone example that will not affect the rest of your site.
              The component is:
            </p>
            <ul>
              <li>Fully responsive from mobile to desktop</li>
              <li>Built with performance in mind - images are optimized with Next.js Image component</li>
              <li>Accessibility-friendly with proper ARIA attributes</li>
              <li>Mobile-optimized with touch-friendly controls and appropriate sizing</li>
              <li>Smoothly animated with CSS transitions</li>
            </ul>
            <p>
              To use this component in your own project, you can copy the code and customize the testimonials data
              to match your needs. The component is designed to be lightweight with minimal dependencies.
            </p>
          </div>
        </section>
      </main>
      
      {/* Quick Back Link */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-50">
        <Link 
          href="/design-examples"
          className="flex items-center gap-2 rounded-full bg-black text-white px-3 sm:px-4 py-2 hover:bg-gray-800 transition-colors"
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