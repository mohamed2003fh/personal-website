export type ContactLink = {
  label: string
  href: string
  variant?: "primary" | "secondary"
}

export const heroContent = {
  name: "Mohamed Fhafah",
  title: "Cybersecurity-focused Software Engineer",
  location: "Marseille, France",
  summary:
    "Master 1 Informatique (Fiabilité & Sécurité) student crafting resilient web platforms, secure networked systems, and AI-assisted defenses.",
  highlights: [
    "Security audit internship at Tanger Alliance",
    "JavaFX media explorer & distributed messaging projects",
    "Trilingual collaborator (Arabic / French / English)"
  ],
  actions: [
    { label: "Download CV", href: "/assets/cv/Mohamed_Fhafah_CV.pdf", variant: "primary" },
    { label: "Contact", href: "mailto:mohamedfhafah975@gmail.com", variant: "secondary" }
  ] satisfies ContactLink[],
  meta: {
    availability: "Available for internships from May 2025",
    focus: "Cyber defense • Secure Web • Network automation"
  }
}
