export type ProjectCard = {
  title: string
  timeline: string
  description: string
  stack: string[]
  impact: string
  link?: string
}

export const projects: ProjectCard[] = [
  {
    title: "JavaFX Media Explorer",
    timeline: "2023 · L2",
    description:
      "Desktop experience aggregating movie/series data from public APIs with filtering, watchlists, and role-based flows.",
    stack: ["Java", "JavaFX", "REST APIs", "MVC"],
    impact:
      "Led a 5-person team, enforced SOLID patterns, and shipped a maintainable codebase graded highest in the cohort.",
  },
  {
    title: "Distributed Messaging Platform",
    timeline: "2024 · L3",
    description:
      "Networked application enabling multiple concurrent clients, custom messaging protocol, and resilience to node outages.",
    stack: ["Java", "TCP", "UDP", "Threads"],
    impact:
      "Improved reliability testing coverage by simulating packet loss and failover, documenting recovery strategies.",
  },
  {
    title: "MASM Mini-Compiler",
    timeline: "2025 · L3",
    description:
      "Compiler toolchain in NASM/MASM producing assembly from a simplified high-level syntax with lexical + syntax analyzers.",
    stack: ["NASM", "C", "Parsing"],
    impact:
      "Demonstrated strong low-level reasoning and shipping mindset by pairing analysis with verification harnesses.",
  },
]
