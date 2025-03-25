"use client";

import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { SparklesCore } from "@/components/ui/sparkles";

export default function GleamyPage() {
  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden flex flex-col">
      {/* Background Elements */}
      <BackgroundBeams className="opacity-20" />
      
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-700 flex items-center justify-center">
            <SparklesCore
              id="nav-sparkles"
              background="transparent"
              minSize={0.4}
              maxSize={1.0}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#ffffff"
            />
            <span className="absolute text-white font-bold">G</span>
          </div>
          <div className="text-white text-sm flex gap-2">
            <a href="#" className="hover:text-blue-400 transition-colors">FB</a>
            <span className="text-neutral-500">•</span>
            <a href="#" className="hover:text-blue-400 transition-colors">IN</a>
            <span className="text-neutral-500">•</span>
            <a href="#" className="hover:text-blue-400 transition-colors">DR</a>
            <span className="text-neutral-500">•</span>
            <a href="#" className="hover:text-blue-400 transition-colors">BE</a>
          </div>
        </div>
        
        <div className="text-white text-2xl font-bold">gleamy</div>
        
        <div className="flex items-center gap-4">
          <button className="text-white">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button className="text-white flex gap-2 items-center">
            <span>MENU</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </nav>
      
      <TracingBeam className="px-6">
        {/* Main Content */}
        <main className="grow flex flex-col relative z-10 pt-12 lg:pt-24">
          {/* Diagonal ribbons */}
          <div className="absolute top-0 right-0 h-full w-full overflow-hidden pointer-events-none">
            <div className="absolute -rotate-[30deg] top-1/3 -right-20 translate-y-1/2 bg-white/10 backdrop-blur-xs p-3 w-[600px] transform-gpu">
              <div className="flex items-center justify-around">
                <span className="text-white/80 uppercase text-lg font-semibold tracking-wider">Marketing</span>
                <div className="h-3 w-3 rounded-full bg-blue-400"></div>
              </div>
            </div>
            
            <div className="absolute -rotate-[30deg] top-1/2 -right-20 translate-y-1/2 bg-white/10 backdrop-blur-xs p-3 w-[600px] transform-gpu">
              <div className="flex items-center justify-around">
                <span className="text-white/80 uppercase text-lg font-semibold tracking-wider">Motion</span>
                <div className="h-3 w-3 rounded-full bg-blue-400"></div>
              </div>
            </div>
            
            <div className="absolute -rotate-[30deg] top-2/3 -right-20 translate-y-1/2 bg-white/10 backdrop-blur-xs p-3 w-[600px] transform-gpu">
              <div className="flex items-center justify-around">
                <span className="text-white/80 uppercase text-lg font-semibold tracking-wider">Animation</span>
                <div className="h-3 w-3 rounded-full bg-blue-400"></div>
              </div>
            </div>
          </div>
          
          {/* Main heading */}
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              <span className="text-white">Brand.</span>
              <span className="text-gray-500">Design.</span>
              <span className="text-gray-500">Product.</span>
            </h1>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              In-House Development.
            </h2>
            
            <h3 className="text-5xl md:text-7xl font-bold text-white">
              &More
            </h3>
          </div>
          
          {/* Bottom diagonal ribbon */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-neutral-800 -rotate-[4deg] -translate-y-10 scale-110 transform-gpu">
            <div className="flex items-center h-full justify-around transform rotate-[4deg] px-8 overflow-x-auto whitespace-nowrap">
              <span className="uppercase text-neutral-400 font-bold">Creative Design</span>
              <div className="h-2 w-2 rounded-full bg-blue-400 shrink-0"></div>
              <span className="uppercase text-neutral-400 font-bold">UI/UX</span>
              <div className="h-2 w-2 rounded-full bg-blue-400 shrink-0"></div>
              <span className="uppercase text-neutral-400 font-bold">Marketing</span>
              <div className="h-2 w-2 rounded-full bg-blue-400 shrink-0"></div>
              <span className="uppercase text-neutral-400 font-bold">Motion</span>
              <div className="h-2 w-2 rounded-full bg-blue-400 shrink-0"></div>
              <span className="uppercase text-neutral-400 font-bold">Animation</span>
              <div className="h-2 w-2 rounded-full bg-blue-400 shrink-0"></div>
              <span className="uppercase text-neutral-400 font-bold">Branding</span>
            </div>
          </div>
          
          {/* Play button */}
          <div className="absolute bottom-8 right-8 z-20">
            <div className="relative w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center cursor-pointer group overflow-hidden">
              <SparklesCore
                id="play-sparkles"
                background="transparent"
                minSize={0.4}
                maxSize={1.0}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#ffffff"
              />
              <svg className="h-6 w-6 text-white relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5.14V19.14L19 12.14L8 5.14Z" fill="currentColor" />
              </svg>
              <div className="absolute inset-0 bg-blue-600 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
            </div>
            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 border border-blue-500 rounded-full animate-ping opacity-60"></div>
          </div>
        </main>
      </TracingBeam>
      
      {/* Link back to home */}
      <div className="absolute bottom-4 left-4 z-50">
        <Link href="/" className="text-white/70 hover:text-white text-sm flex items-center gap-1 transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to portfolio
        </Link>
      </div>
    </div>
  );
} 