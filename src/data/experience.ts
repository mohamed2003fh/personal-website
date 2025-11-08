export type ExperienceEntry = {
  id: string
  company: string
  location: string
  start: string
  end: string
  type: "internship" | "employment" | "academic"
  role?: string
  bullets?: string[]
}

export const experiences: ExperienceEntry[] = [
  {
    id: "tanger_alliance",
    company: "Tanger Alliance",
    location: "Tanger, Morocco",
    start: "May 2025",
    end: "Aug 2025",
    type: "internship",
    role: "Cybersecurity Intern",
    bullets: [
      "Executed end-to-end security audits: policy analysis, controls evaluation, prioritized remediation roadmap.",
      "Built phishing-awareness modules (training, tests, simulations) improving team readiness.",
      "Prototyped a machine-learning interface for DDoS detection that surfaced real-time insights to ops teams.",
    ],
  },
  {
    id: "burger_king",
    company: "Burger King",
    location: "Marseille, France",
    start: "Aug 2023",
    end: "Mar 2024",
    type: "employment",
    role: "Crew Member",
    bullets: [
      "Delivered consistent customer experiences during peak hours, reinforcing adaptability and communication.",
      "Partnered with cross-functional teammates to maintain service speed and quality standards.",
    ],
  },
  {
    id: "amu_projects",
    company: "Aix-Marseille Université",
    location: "Marseille, France",
    start: "Sep 2022",
    end: "Jun 2025",
    type: "academic",
    role: "Academic Projects (L2-L3)",
    bullets: [
      "Led a JavaFX media explorer (team of 5) consuming film/series APIs with robust OOP foundations.",
      "Engineered a multi-client messaging platform handling TCP/UDP connections, fault tolerance, and custom protocols.",
      "Developed a MASM mini-compiler with lexical/syntactic analysis and code generation modules.",
    ],
  },
]
