import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type ProjectData = {
  id: string
  title: string
  category: string
  description: string
  fullDescription: string
  image: string
  year: string
  client: string
  role: string
  duration: string
  technologies: string[]
  challenge: string
  solution: string
  outcome: string
  process: {
    title: string
    description: string
    image: string
  }[]
  teamSize: string
  tools: string[]
}

interface ProjectDetailsProps {
  project: ProjectData
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <>
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

      {/* Project Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Timeline */}
        <div className="bg-card p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Timeline</h3>
          <p className="text-2xl font-bold">{project.duration}</p>
        </div>
        
        {/* Role */}
        <div className="bg-card p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-2">My Role</h3>
          <p className="text-2xl font-bold">{project.role}</p>
        </div>
        
        {/* Team Size */}
        <div className="bg-card p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Team Size</h3>
          <p className="text-2xl font-bold">{project.teamSize}</p>
        </div>
        
        {/* Tools */}
        <div className="bg-card p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Tools</h3>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Challenge & Solution */}
      <section className="py-16 px-4 bg-muted/30 mt-12 -mx-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Challenge */}
            <div className="bg-card p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-muted-foreground">{project.challenge}</p>
            </div>
            
            {/* Solution */}
            <div className="bg-card p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 -mx-4">
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
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
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
      <section className="py-16 px-4 bg-muted/30 -mx-4">
        <div className="container mx-auto">
          <div className="bg-card p-6 rounded-xl shadow-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">The Outcome</h2>
            <p className="text-muted-foreground">{project.outcome}</p>
          </div>
        </div>
      </section>

      {/* Next/Prev Projects */}
      <div className="flex flex-col sm:flex-row justify-between gap-6 mt-12">
        {/* Previous Project */}
        <Link href="#" className="bg-card p-6 rounded-xl shadow-lg flex-1 group hover:shadow-xl transition-all">
          <Button variant="ghost" className="flex items-center w-full justify-start p-0">
            <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
            <div className="flex flex-col items-start">
              <span className="text-sm text-muted-foreground">Previous Project</span>
              <span className="text-xl font-semibold group-hover:text-primary transition-colors">Project Title</span>
            </div>
          </Button>
        </Link>
        
        {/* Next Project */}
        <Link href="#" className="bg-card p-6 rounded-xl shadow-lg flex-1 text-right group hover:shadow-xl transition-all">
          <Button variant="ghost" className="flex items-center w-full justify-end p-0">
            <div className="flex flex-col items-end">
              <span className="text-sm text-muted-foreground">Next Project</span>
              <span className="text-xl font-semibold group-hover:text-primary transition-colors">Project Title</span>
            </div>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </>
  )
} 