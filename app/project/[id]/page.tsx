import { ArrowLeft, ArrowRight, ExternalLink, Link } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

// This would typically come from a database or CMS
const projects = [
  {
    id: "1",
    title: "Medical Dashboard",
    category: "UX/UI Design",
    description:
      "A comprehensive dashboard for healthcare professionals to monitor patient data and clinical metrics in real-time.",
    fullDescription:
      "This medical dashboard was designed to help healthcare professionals monitor patient data and clinical metrics in real-time. The project involved extensive research with medical staff to understand their workflow and information needs.",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2023",
    client: "Major Healthcare Provider",
    role: "Lead UX Designer & Developer",
    duration: "4 months",
    technologies: ["React", "TypeScript", "D3.js", "Figma"],
    challenge:
      "Healthcare professionals needed a way to quickly access and interpret patient data across multiple departments. The existing system was fragmented and required logging into multiple platforms.",
    solution:
      "I designed a unified dashboard that brings together critical patient information, lab results, and clinical metrics in a single interface. The design prioritizes quick scanning of information with clear visual hierarchies and color-coding for critical values.",
    outcome:
      "The new dashboard reduced the time spent accessing patient information by 35% and improved clinical decision-making according to post-implementation surveys.",
    process: [
      {
        title: "Research & Discovery",
        description:
          "Conducted interviews with 15 healthcare professionals across different roles to understand their workflow and pain points.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "User Flows & Wireframes",
        description:
          "Created detailed user flows and low-fidelity wireframes to establish the information architecture and core functionality.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Visual Design",
        description:
          "Developed a visual design system that emphasizes clarity and accessibility, with careful consideration of color for indicating clinical values.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Prototyping & Testing",
        description:
          "Built interactive prototypes and conducted usability testing with end users to refine the interface before development.",
        image: "/placeholder.svg?height=600&width=800",
      },
      {
        title: "Development",
        description:
          "Implemented the design using React and TypeScript, with D3.js for data visualizations and charts.",
        image: "/placeholder.svg?height=600&width=800",
      },
    ],
  },
  // Other projects would be defined here
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  // Find the project by ID
  const project = projects.find((p) => p.id === params.id) || projects[0]

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <Link
              href="/#portfolio"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all projects
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-sm uppercase tracking-wider text-muted-foreground">{project.category}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6">{project.title}</h1>
                <p className="text-xl text-muted-foreground mb-8">{project.fullDescription}</p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Client</h3>
                    <p>{project.client}</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Year</h3>
                    <p>{project.year}</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Role</h3>
                    <p>{project.role}</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Duration</h3>
                    <p>{project.duration}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="rounded-full">
                  <Link href="#" className="inline-flex items-center">
                    View Live Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-muted-foreground">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-muted-foreground">{project.solution}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Design Process</h2>

            <div className="space-y-24">
              {project.process.map((step, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <span className="inline-block px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm mb-4">
                      Step {index + 1}
                    </span>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6">The Outcome</h2>
            <p className="text-xl text-muted-foreground">{project.outcome}</p>
          </div>
        </section>

        {/* Next/Prev Projects */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="flex justify-between">
              <Link href="#" className="inline-flex items-center">
                <Button className="rounded-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous Project
                </Button>
              </Link>

              <Link href="#" className="inline-flex items-center">
                <Button className="rounded-full">
                  Next Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

