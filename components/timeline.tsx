import { CheckCircle2, Code, Figma, Rocket, Search, Users } from "lucide-react"

const timelineItems = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "Discovery",
    description: "Understanding the problem space through research, stakeholder interviews, and competitive analysis.",
    color: "border-blue-500",
    iconBg: "bg-blue-500/20 text-blue-500",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "User Research",
    description:
      "Conducting user interviews, surveys, and usability testing to identify pain points and opportunities.",
    color: "border-purple-500",
    iconBg: "bg-purple-500/20 text-purple-500",
  },
  {
    icon: <Figma className="h-6 w-6" />,
    title: "Design",
    description:
      "Creating wireframes, prototypes, and high-fidelity designs that address user needs and business goals.",
    color: "border-pink-500",
    iconBg: "bg-pink-500/20 text-pink-500",
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Development",
    description: "Implementing designs with clean, accessible code that meets healthcare industry standards.",
    color: "border-green-500",
    iconBg: "bg-green-500/20 text-green-500",
  },
  {
    icon: <CheckCircle2 className="h-6 w-6" />,
    title: "Testing",
    description: "Rigorous testing to ensure the solution meets accessibility standards and works across all devices.",
    color: "border-amber-500",
    iconBg: "bg-amber-500/20 text-amber-500",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Launch & Iterate",
    description: "Deploying the solution and continuously improving based on user feedback and analytics.",
    color: "border-red-500",
    iconBg: "bg-red-500/20 text-red-500",
  },
]

export default function Timeline() {
  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium mb-12 text-center">My Design & Development Process</h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[24px] top-0 bottom-0 w-[2px] bg-border md:left-1/2 md:-ml-[1px]"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? "md:text-right" : ""}`}>
                {/* Timeline item content */}
                <div className={`flex gap-6 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Icon */}
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.iconBg}`}>
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-border flex-1 ${index % 2 === 0 ? "md:mr-10" : "md:ml-10"}`}
                  >
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>

                {/* Connector line for desktop */}
                <div
                  className={`hidden md:block absolute top-6 w-10 border-t ${item.color} ${index % 2 === 0 ? "left-1/2 -ml-10" : "left-1/2"}`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="divider w-full"></div>
      </div>
    </section>
  )
}

