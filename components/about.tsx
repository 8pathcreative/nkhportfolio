"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, Facebook, ExternalLink } from "lucide-react"
import { ShootingStarField, StarsField } from "./ui/shooting-stars"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 lg:py-36 px-4 relative overflow-hidden bg-gradient-to-b from-black to-slate-950">
      <ShootingStarField quantity={15} />
      <StarsField quantity={100} />
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium mb-8 md:mb-12 lg:mb-16 tracking-tight">About Me</h2>
        
        <div className="grid md:grid-cols-[2fr_1fr] gap-8 md:gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground mb-6">
              Hi, i'm Neil! I'm a design engineer with 9+ years of experience I'm a Design Engineer specializing in the intersection of UX design and front-end development. With a deep understanding of user experience, interaction design, and scalable front-end architecture, I craft intuitive digital experiences that are as functional as they are beautiful.
            </p>
            
            <p className="text-xl md:text-2xl leading-relaxed">
              I understand the importance of Pixel-Perfect design and am committed to producing high-quality interfaces
              that balance aesthetic appeal with functional requirements in complex medical environments.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <Link href="https://github.com" target="_blank" aria-label="GitHub">
                <Github className="h-6 w-6 text-neutral-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-neutral-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-neutral-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-neutral-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-neutral-400 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          <div className="relative md:mt-0 mt-8">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-neutral-800">
              <Image
                src="https://cdn.prod.website-files.com/6593837a237f27f93f2579ec/659de91ca988aa0c3ba35b73_neil-about-image.webp"
                alt="Neil Humphrey"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-medium mb-8 md:mb-12 mt-16 md:mt-24 lg:mt-32">Tools I Work With</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800 hover:border-primary/50 transition-colors group">
            <div className="flex flex-col items-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center mb-3">
                <svg viewBox="0 0 180 180" className="w-12 h-12 text-white">
                  <mask height="180" id="mask0" maskUnits="userSpaceOnUse" width="180" x="0" y="0">
                    <circle cx="90" cy="90" fill="white" r="90"></circle>
                  </mask>
                  <g mask="url(#mask0)">
                    <circle cx="90" cy="90" fill="black" r="90"></circle>
                    <path
                      d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                      fill="white"
                    ></path>
                    <rect fill="white" height="72" width="12" x="115" y="54"></rect>
                  </g>
                </svg>
              </div>
              <Link 
                href="https://nextjs.org" 
                target="_blank"
                className="text-lg font-medium text-neutral-200 group-hover:text-primary transition-colors flex items-center"
              >
                Next.js
                <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <span className="bg-neutral-800 text-neutral-400 text-xs px-2 py-1 rounded-full mt-2">Since 2021</span>
            </div>
            <p className="text-sm text-neutral-400 text-center">React framework for building server-rendered applications with excellent developer experience.</p>
          </div>

          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800 hover:border-primary/50 transition-colors group">
            <div className="flex flex-col items-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center mb-3">
                <svg viewBox="0 0 38 57" className="w-10 h-10" fill="none">
                  <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
                  <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/>
                  <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/>
                  <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
                  <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
                </svg>
              </div>
              <Link 
                href="https://figma.com" 
                target="_blank"
                className="text-lg font-medium text-neutral-200 group-hover:text-primary transition-colors flex items-center"
              >
                Figma
                <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <span className="bg-neutral-800 text-neutral-400 text-xs px-2 py-1 rounded-full mt-2">Since 2022</span>
            </div>
            <p className="text-sm text-neutral-400 text-center">Collaborative design tool that enables creating detailed interfaces and prototypes.</p>
          </div>

          <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800 hover:border-primary/50 transition-colors group">
            <div className="flex flex-col items-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center mb-3">
                <svg viewBox="0 0 512 512" className="w-12 h-12">
                  <path fill="#264de4" d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z"/>
                  <path fill="#2965f1" d="M405.388 431.408l35.148-393.73H256v435.146z"/>
                  <path fill="#ebebeb" d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"/>
                  <path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h104.66l-5.101 56.517z"/>
                </svg>
              </div>
              <Link 
                href="https://developer.mozilla.org/en-US/docs/Web/CSS" 
                target="_blank"
                className="text-lg font-medium text-neutral-200 group-hover:text-primary transition-colors flex items-center"
              >
                CSS3
                <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <span className="bg-neutral-800 text-neutral-400 text-xs px-2 py-1 rounded-full mt-2">Since 2023</span>
            </div>
            <p className="text-sm text-neutral-400 text-center">Modern styling language for creating visually appealing and responsive user interfaces.</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="divider w-full"></div>
      </div>
    </section>
  )
}

