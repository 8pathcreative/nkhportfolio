export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  slug?: string;
  tags?: string[];
  content?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Medical Dashboard",
    category: "UX/UI Design",
    description:
      "A comprehensive dashboard for healthcare professionals to monitor patient data and clinical metrics in real-time.",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2023",
    tags: ["Dashboard", "Healthcare", "Data Visualization"],
    content: "Full case study content for the Medical Dashboard project."
  },
  {
    id: "2",
    title: "Patient Portal Redesign",
    category: "UX Research & Design",
    description:
      "A complete redesign of a healthcare provider's patient portal to improve usability and accessibility.",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2022",
    tags: ["Patient Experience", "Healthcare", "Accessibility"],
    content: "Full case study content for the Patient Portal Redesign project."
  },
  {
    id: "3",
    title: "Medical Device Interface",
    category: "Healthcare UX",
    description:
      "A touchscreen interface for a new medical diagnostic device used in clinical environments.",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2023",
    tags: ["Medical Device", "Interface Design", "Clinical"],
    content: "Full case study content for the Medical Device Interface project."
  },
  {
    id: "4",
    title: "Healthcare Learning Platform",
    category: "UX/UI Design",
    description:
      "An interactive learning management system for medical professionals to complete continuing education requirements.",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2022",
    tags: ["Education", "Healthcare", "LMS"],
    content: "Full case study content for the Healthcare Learning Platform project."
  },
  {
    id: "5",
    title: "Medical Data Visualization",
    category: "UX Engineering",
    description:
      "Complex medical data visualized through intuitive charts and graphs for improved clinical decision-making.",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2022",
    tags: ["Data Visualization", "Healthcare Analytics", "Clinical"],
    content: "Full case study content for the Medical Data Visualization project."
  },
  {
    id: "6",
    title: "Healthcare Provider Platform",
    category: "UX Engineering",
    description:
      "A comprehensive platform for healthcare providers to manage patient care, scheduling, and clinical documentation.",
    image: "/placeholder.svg?height=800&width=1200",
    year: "2021",
    tags: ["Healthcare", "Clinical Workflows", "Documentation"],
    content: "Full case study content for the Healthcare Provider Platform project."
  },
]; 