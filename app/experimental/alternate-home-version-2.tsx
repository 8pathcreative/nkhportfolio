"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Search, Play } from "lucide-react";

export default function AlternateHomeVersion2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-medium">
            gleamy
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4">
              <Button variant="link" className="text-white/70 hover:text-white">
                FB
              </Button>
              <span className="text-white/30">•</span>
              <Button variant="link" className="text-white/70 hover:text-white">
                IN
              </Button>
              <span className="text-white/30">•</span>
              <Button variant="link" className="text-white/70 hover:text-white">
                DR
              </Button>
              <span className="text-white/30">•</span>
              <Button variant="link" className="text-white/70 hover:text-white">
                BE
              </Button>
            </div>
            
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              className="hidden md:flex"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              MENU
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      
      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-0 bottom-0 z-40 flex flex-col justify-center items-center px-4 pointer-events-none">
        <div className="relative h-24 w-24 mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full border-2 border-white/20 h-full w-full flex items-center justify-center">
              <span className="text-xl font-medium">g</span>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg height="96" width="96" className="rotate-[-40deg]">
              <circle cx="48" cy="48" r="46" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <text className="text-[9px] uppercase tracking-widest text-white/60" 
                fill="white" 
                x="0" 
                y="0" 
                textAnchor="start" 
                dominantBaseline="hanging"
                transform="rotate(90 8 0) translate(8 -48)">
                <textPath xlinkHref="#circle-path">
                  Digital • Gleamy • Digital • Gleamy
                </textPath>
              </text>
              <path id="circle-path" d="M 48,2 A 46,46 0 1 1 47.999,2 z" fill="none" />
            </svg>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 rotate-180 text-center">
          <span className="vertical-text text-white/70 text-sm uppercase tracking-widest">Digital Marketing</span>
          <span className="vertical-text text-white/70 text-sm uppercase tracking-widest">Designing</span>
          <span className="vertical-text text-white/70 text-sm uppercase tracking-widest">Development</span>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col mt-24 md:mt-40 px-6 md:px-16">
        <div className="container mx-auto">
          <div className="flex flex-col">
            {/* About Us Section */}
            <section className="mb-16 md:mb-24">
              <h1 className="text-2xl md:text-3xl mb-5 font-medium">ABOUT US</h1>
              <div className="grid md:grid-cols-2 gap-16">
                <div className="relative">
                  <div className="text-[180px] md:text-[300px] font-bold text-white/5 absolute -top-20 -left-5 opacity-50">g</div>
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl md:text-4xl font-bold mb-8">WE ARE A DIGITAL PRODUCTION TEAM.</h2>
                  <p className="text-lg md:text-xl uppercase">
                    GLEAMY IS A LEADING DESIGN & SOFTWARE DEVELOPMENT AGENCY BASED IN BERLIN. WE HELP STARTUPS & FORTUNE 500 COMPANIES DELIGHT HUMANS ON THE OTHER SIDE OF THE SCREEN.
                    <span className="inline-block ml-2 h-4 w-8 bg-orange-500"></span>
                  </p>
                  <div className="mt-12">
                    <Button 
                      variant="link" 
                      className="text-orange-500 hover:text-orange-400 p-0 text-lg"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      {/* Video Play Button (Bottom Right) */}
      <div 
        ref={videoRef}
        className="fixed bottom-8 right-8 z-40 flex items-center justify-center cursor-pointer group"
        onClick={() => console.log("Play video")}
      >
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-white/10 h-full w-full flex items-center justify-center group-hover:bg-white/20 transition-all">
              <Play className="h-6 w-6 text-white fill-white" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg height="64" width="64" className="rotate-0">
              <circle cx="32" cy="32" r="30" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <text className="text-[7px] uppercase tracking-widest text-white/60" 
                fill="white" 
                dominantBaseline="central"
                textAnchor="start">
                <textPath xlinkHref="#watch-path">
                  watch our demo • watch our demo
                </textPath>
              </text>
              <path id="watch-path" d="M 32,2 A 30,30 0 1 1 31.999,2 z" fill="none" />
            </svg>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
} 