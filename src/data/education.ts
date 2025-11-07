export type EducationEntry = {
  school: string
  program: string
  location?: string
  period: string
  summary: string
  highlights: string[]
}

export const education: EducationEntry[] = [
  {
    school: "Aix-Marseille Université",
    program: "Master 1 Informatique (FSI)",
    location: "Marseille, France",
    period: "2024 – 2025",
    summary: "Advanced coursework across cybersecurity, distributed systems, and compilation.",
    highlights: [
      "Security modules: cryptography, threat modeling, identity/access management",
      "Network programming with TCP/UDP, multi-threaded sockets, resilience",
      "Mini-compiler MASM project connecting theory to low-level code generation",
    ],
  },
  {
    school: "Aix-Marseille Université",
    program: "Licence Informatique (L2-L3)",
    location: "Marseille, France",
    period: "2022 – 2024",
    summary: "Full-stack web, algorithmics, and Java engineering foundations.",
    highlights: [
      "JavaFX API media explorer (team lead, MVC, SOLID)",
      "Flask web app with authentication, routing, and SQL back end",
      "Distributed messaging platform with custom protocol and fault tolerance",
    ],
  },
  {
    school: "Université Abdelmalek Essaâdi",
    program: "DEUST Sciences & Techniques",
    location: "Tanger, Morocco",
    period: "2021 – 2022",
    summary: "Core algorithmics, data structures, POO, and web foundations.",
    highlights: ["Strengthened mathematical rigor and problem-solving discipline."],
  },
  {
    school: "Lycée Abdelkhalek Torres",
    program: "Baccalauréat International - Sciences Physiques",
    location: "Tanger, Morocco",
    period: "2020 – 2021",
    summary: "Physics-focused track with honors (mention Bien).",
    highlights: ["Built the analytical base that fuels today’s engineering mindset."],
  },
]
