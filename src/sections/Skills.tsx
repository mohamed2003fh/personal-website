import { Section } from "../components/layout/Section"
import { services, skillGroups } from "../data/skills"

export function SkillsSection() {
  return (
    <Section id="skills" title="Expertise & toolset" eyebrow="Capabilities">
      <div className="grid gap-8 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-warm/50">{service.subtitle}</p>
            <h3 className="mt-2 text-2xl font-heading text-warm">{service.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-warm/80">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-1 h-1 w-6 rounded-full bg-royal/50" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-3xl border border-white/10 bg-midnight/40 p-6 backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-warm/50">{group.category}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs text-warm/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
