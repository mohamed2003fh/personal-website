import { Section } from "../components/layout/Section"
import { experiences } from "../data/experience"
import { useI18n } from "../i18n/I18nProvider"

const typeBadge: Record<(typeof experiences)[number]["type"], string> = {
  internship: "bg-cyber/20 text-cyber",
  employment: "bg-warm/10 text-warm/80",
  academic: "bg-amber/20 text-amber/90",
}

export function ExperienceSection() {
  const { t } = useI18n()
  const entriesCopy = t.experience.entries as Record<string, { role: string; bullets: string[] }>
  const typeLabels = t.experience.types as Record<string, string>
  return (
    <Section id="experience" title={t.experience.title} eyebrow={t.experience.eyebrow} frameless>
      <div className="glass-panel relative p-8">
        <div className="absolute left-8 top-10 bottom-10 w-px bg-gradient-to-b from-cyber/40 via-warm/20 to-amber/30" />
        <div className="space-y-10 pl-10">
          {experiences.map((item) => {
            const copy = entriesCopy?.[item.id]
            const role = copy?.role ?? item.role ?? ""
            const bullets = copy?.bullets ?? item.bullets ?? []
            const typeLabel = typeLabels?.[item.type] ?? item.type
            return (
              <article key={item.id} className="relative">
                <span className="absolute -left-12 top-3 flex h-4 w-4 items-center justify-center rounded-full border border-cyber/50 bg-midnight text-cyber">
                  ·
                </span>
                <div className="glass-panel p-6">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-warm/70">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${typeBadge[item.type]}`}>
                      {typeLabel}
                    </span>
                    <span>
                      {item.start} – {item.end}
                    </span>
                    <span>• {item.location}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-warm text-start">{role}</h3>
                  <p className="text-warm/60 text-start">{item.company}</p>
                  <ul className="mt-4 space-y-2 text-sm text-warm/80 text-start">
                    {bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-1 h-1 w-6 rounded-full bg-cyber/60" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
