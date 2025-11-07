import { Section } from "../components/layout/Section"
import { aboutContent } from "../data/profile"

export function AboutSection() {
  return (
    <Section
      id="about"
      title="Secure-by-design engineering"
      eyebrow="About"
      frameless
      contentClassName="grid gap-10 lg:grid-cols-[3fr,2fr]"
    >
      <div className="glass-panel space-y-6 p-6">
        {aboutContent.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {aboutContent.stats.map((stat) => (
          <div key={stat.label} className="glass-panel p-6 text-center">
            <p className="text-3xl font-heading text-cyber">{stat.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-warm/50">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
