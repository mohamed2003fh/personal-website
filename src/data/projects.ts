export type ProjectCard = {
  title: string
  timeline: string
  description: string
  stack: string[]
  impact: string
  image: string
  imageAlt: string
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
    image: "/assets/images/projects/javafx-media-explorer.svg",
    imageAlt: "Mocked dashboard view of a JavaFX media explorer app",
  },
  {
    title: "Distributed Messaging Platform",
    timeline: "2024 · L3",
    description:
      "Networked application enabling multiple concurrent clients, custom messaging protocol, and resilience to node outages.",
    stack: ["Java", "TCP", "UDP", "Threads"],
    impact:
      "Improved reliability testing coverage by simulating packet loss and failover, documenting recovery strategies.",
    image: "/assets/images/projects/distributed-messaging.svg",
    imageAlt: "Abstract mesh showing distributed messaging nodes connected by waves",
  },
  {
    title: "MASM Mini-Compiler",
    timeline: "2025 · L3",
    description:
      "Compiler toolchain in NASM/MASM producing assembly from a simplified high-level syntax with lexical + syntax analyzers.",
    stack: ["NASM", "C", "Parsing"],
    impact:
      "Demonstrated strong low-level reasoning and shipping mindset by pairing analysis with verification harnesses.",
    image: "/assets/images/projects/mini-compiler.svg",
    imageAlt: "Blueprint-style interface illustrating compiler pipeline steps",
  },
]
