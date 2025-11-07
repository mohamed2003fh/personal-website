import { Section } from "../components/layout/Section"
import { aboutContent } from "../data/profile"

export function AboutSection() {
  return (
    <Section id="about" title="Secure-by-design engineering" eyebrow="About">
      <div className="grid gap-10 lg:grid-cols-[3fr,2fr]">
        <div className="space-y-6 text-base text-warm/80">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {aboutContent.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-card"
            >
              <p className="text-3xl font-heading text-cyber">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-warm/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
