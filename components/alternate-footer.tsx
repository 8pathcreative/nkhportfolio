import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AlternateFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-800 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          <div className="space-y-4 md:col-span-2">
            <div className="space-y-2">
              <h3 className="text-xl font-medium">Neil Humphrey</h3>
              <p className="text-neutral-400 text-sm max-w-md">
                Healthcare UX Design Engineer specializing in creating intuitive, accessible interfaces for medical solutions.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="https://github.com" 
                target="_blank" 
                aria-label="GitHub"
                className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors"
              >
                <Github className="h-5 w-5 text-neutral-300" />
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-neutral-300" />
              </Link>
              <Link 
                href="https://twitter.com" 
                target="_blank" 
                aria-label="Twitter"
                className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors"
              >
                <Twitter className="h-5 w-5 text-neutral-300" />
              </Link>
              <Link 
                href="mailto:contact@example.com" 
                aria-label="Email"
                className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors"
              >
                <Mail className="h-5 w-5 text-neutral-300" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-medium mb-4">Navigation</h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-sm text-neutral-400 hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="text-sm text-neutral-400 hover:text-white transition-colors">About</Link>
              <Link href="/projects" className="text-sm text-neutral-400 hover:text-white transition-colors">Projects</Link>
              <Link href="/experimental" className="text-sm text-neutral-400 hover:text-white transition-colors">Experimental</Link>
              <Link href="/contact" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div>
            <h4 className="text-base font-medium mb-4">Get in Touch</h4>
            <div className="space-y-6">
              <p className="text-sm text-neutral-400">
                Interested in working together on a healthcare UX project? 
                I'm always open to discussing new opportunities.
              </p>
              <Button variant="outline" className="w-full justify-between border-neutral-800 text-white hover:bg-neutral-800">
                Contact me
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-neutral-500">
            © {currentYear} Neil Humphrey. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 