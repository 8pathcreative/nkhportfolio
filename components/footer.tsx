import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm text-neutral-500">© {currentYear} All rights reserved.</p>
            <p className="text-sm text-neutral-500 mt-1">Based in Omaha, Nebraska</p>
          </div>

          <div className="flex items-center gap-4">
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5 text-neutral-500 hover:text-white transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-neutral-500 hover:text-white transition-colors" />
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-neutral-500 hover:text-white transition-colors" />
            </Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-neutral-500 hover:text-white transition-colors" />
            </Link>
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-neutral-500 hover:text-white transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

