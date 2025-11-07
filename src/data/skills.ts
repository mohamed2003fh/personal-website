export type ServiceCard = {
  title: string
  subtitle: string
  bullets: string[]
}

export type SkillGroup = {
  category: string
  items: string[]
}

export const services: ServiceCard[] = [
  {
    title: "Security Audits",
    subtitle: "Policies · Controls · Threat modeling",
    bullets: [
      "Gap analysis and remediation roadmaps",
      "Phishing awareness modules and simulations",
      "Hands-on ML prototypes for DDoS detection",
    ],
  },
  {
    title: "Secure Web Platforms",
    subtitle: "Flask · React · API orchestration",
    bullets: [
      "Authentication flows with data privacy in mind",
      "Reusable UI systems + accessibility baked in",
      "DevOps-ready deployments on Vercel/Netlify",
    ],
  },
  {
    title: "Networked Systems",
    subtitle: "TCP/UDP · threading · observability",
    bullets: [
      "Distributed messaging apps with graceful failover",
      "Protocol design & instrumentation",
      "Automation scripts that keep ops lean",
    ],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    items: ["Java", "C", "Python", "JavaFX", "NASM"],
  },
  {
    category: "Web",
    items: ["React", "TypeScript", "Flask", "Tailwind", "Three.js"],
  },
  {
    category: "Data & Ops",
    items: ["SQL", "SQLite", "Git", "Bash"],
  },
  {
    category: "Security",
    items: ["Audit", "Cryptography", "Detection", "Network hardening"],
  },
  {
    category: "Soft Skills",
    items: ["Team leadership", "Adaptability", "Problem solving", "Productivity"],
  },
  {
    category: "Languages",
    items: ["Arabic", "French", "English"],
  },
]
