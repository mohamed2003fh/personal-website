import { Section } from "../components/layout/Section"
import { aboutContent } from "../data/profile"

export function AboutSection() {
  return (
    <Section
      id="about"
      title="Secure-by-design engineering"
      eyebrow="About"
      frameless
      contentClassName="grid gap-8 lg:grid-cols-[2fr,1fr]"
    >
      <div className="glass-panel relative overflow-hidden p-8">
        <div className="about-orb" aria-hidden="true" />
        <div className="space-y-6">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          {aboutContent.stats.map((stat) => (
            <div key={stat.label} className="glass-panel p-6 text-center">
              <p className="text-3xl font-heading text-cyber">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-warm/50">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="glass-panel p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-warm/50">Languages</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {aboutContent.languages.map((language) => (
              <span key={language.label} className="flag-chip">
                <span className="text-lg">{language.flag}</span>
                <span>{language.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
