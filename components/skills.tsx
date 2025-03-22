import { Code, Layout, Layers, ShoppingBag, Cpu, BarChart3 } from "lucide-react"
import { SkillCard } from "./skill-card"

const skills = [
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Healthcare UX Design",
    description:
      "Specialized in creating intuitive interfaces for complex medical systems, focusing on accessibility and user-centered design principles.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Medical Visualization",
    description:
      "Expert in translating complex medical data into clear, actionable visualizations that aid decision-making for healthcare professionals.",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Prototyping",
    description:
      "Skilled in creating interactive prototypes that effectively communicate design concepts to medical stakeholders and facilitate user testing.",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Frontend Development",
    description:
      "Experienced in implementing designs with clean, accessible code that meets healthcare industry standards and compliance requirements.",
  },
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    title: "User Research",
    description:
      "Conduct comprehensive user research with patients and healthcare providers to inform design decisions and improve user experiences.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Design Systems",
    description:
      "Create and maintain cohesive design systems that ensure consistency across complex healthcare applications and platforms.",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium mb-12">
          I love to craft functional solutions for unique problems. These are some skills I've picked up over my career
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} title={skill.title} description={skill.description} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-16 gap-8">
          <div className="text-center md:text-left">
            <span className="text-neutral-400 text-sm">I create your solutions design</span>
            <h3 className="text-xl font-medium mt-2">Planning</h3>
          </div>

          <div className="flex-1 max-w-md">
            <div className="border-dashed border-t border-neutral-700 relative">
              <div className="absolute -top-3 left-0 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center">
                <span className="text-xs">1</span>
              </div>
              <div className="absolute -top-3 right-0 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center">
                <span className="text-xs">2</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <span className="text-neutral-400 text-sm">Develop solutions with component design</span>
            <h3 className="text-xl font-medium mt-2">Development</h3>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="text-center">
            <span className="text-neutral-400 text-sm">Integrate with Figma</span>
            <h3 className="text-xl font-medium mt-2">Design</h3>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="text-center">
            <span className="text-neutral-400 text-sm">Deploy your website and optimize speed to the max</span>
            <h3 className="text-xl font-medium mt-2">Launch</h3>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="divider w-full"></div>
      </div>
    </section>
  )
}

