import type React from "react"
import Image from "next/image"
import { Play } from "lucide-react"

export default function Testimonial() {
  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium mb-12">Testimonial</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Testimonial video thumbnail"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
                <Play className="h-6 w-6 text-white" fill="white" />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed">
              "Rony has an exceptional ability to translate complex medical concepts into intuitive user interfaces.
              Their work has significantly improved our patient engagement and clinical workflows."
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Client"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">Dr. Sarah Johnson</h4>
                <p className="text-sm text-neutral-400">Medical Director at Healthcare Innovation</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-neutral-800 transition-colors">
                <span className="sr-only">Previous testimonial</span>
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-neutral-800 transition-colors">
                <span className="sr-only">Next testimonial</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="divider w-full"></div>
      </div>
    </section>
  )
}

function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

