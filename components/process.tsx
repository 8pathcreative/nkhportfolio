import { ArrowRight } from "lucide-react"

export default function Process() {
  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-sm uppercase text-neutral-500 mb-8">What I'm good at?</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-medium">
              I love to craft functional solutions for complex healthcare challenges.
            </h3>
            <p className="text-neutral-400">
              Working closely with medical experts to create intuitive digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start gap-4">
              <ArrowRight className="h-5 w-5 text-neutral-500 mt-1" />
              <div>
                <h4 className="font-medium">Medical User Research</h4>
                <p className="text-sm text-neutral-400 mt-1">
                  I collaborate with healthcare professionals to understand complex workflows and patient needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ArrowRight className="h-5 w-5 text-neutral-500 mt-1" />
              <div>
                <h4 className="font-medium">Healthcare-Focused Design</h4>
                <p className="text-sm text-neutral-400 mt-1">
                  I create intuitive interfaces that prioritize accessibility, clarity, and efficiency for medical
                  contexts.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ArrowRight className="h-5 w-5 text-neutral-500 mt-1" />
              <div>
                <h4 className="font-medium">Technical Implementation</h4>
                <p className="text-sm text-neutral-400 mt-1">
                  I build robust, compliant solutions that meet the stringent requirements of healthcare environments.
                </p>
              </div>
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

