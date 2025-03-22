import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-16 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <p className="text-muted-foreground mb-6">
          Hi, I am Neil! I'm a UX design engineer with 9+ years of experience working with medical centers and
          healthcare providers to create intuitive, accessible interfaces that enhance patient care and clinical
          workflows.
        </p>

        <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-start">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed">
              I understand the importance of Pixel-Perfect design and am committed to producing high-quality interfaces
              that balance aesthetic appeal with functional requirements in complex medical environments.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <Link href="https://github.com" target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5 text-neutral-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-neutral-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-neutral-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-neutral-400 hover:text-white transition-colors" />
              </Link>
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-neutral-400 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          <div className="relative">
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

        <div className="grid grid-cols-3 gap-4 mt-16">
          <div className="border-t border-neutral-800 pt-4">
            <Link
              href="https://framer.com"
              target="_blank"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              framer.com
            </Link>
            <p className="text-xs text-neutral-600 mt-1">Since 2023</p>
          </div>
          <div className="border-t border-neutral-800 pt-4">
            <Link
              href="https://replo.app"
              target="_blank"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              7 replo
            </Link>
            <p className="text-xs text-neutral-600 mt-1">Since 2022</p>
          </div>
          <div className="border-t border-neutral-800 pt-4">
            <Link
              href="https://studio.design"
              target="_blank"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Studio
            </Link>
            <p className="text-xs text-neutral-600 mt-1">Since 2021</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="divider w-full"></div>
      </div>
    </section>
  )
}

