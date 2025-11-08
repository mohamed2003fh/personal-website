import { Section } from "../components/layout/Section"
import { services, skillGroups } from "../data/skills"
import { useI18n } from "../i18n/I18nProvider"

export function SkillsSection() {
  const { t } = useI18n()
  const servicesCopy = t.skills.services as Record<string, { title: string; subtitle: string; bullets: string[] }>
  const groupLabels = t.skills.groups as Record<string, string>
  return (
    <Section
      id="skills"
      title={t.skills.title}
      eyebrow={t.skills.eyebrow}
      frameless
      contentClassName="space-y-10"
    >
      <div className="grid gap-8 lg:grid-cols-3">
        {services.map((service) => {
          const copy = servicesCopy?.[service.id]
          if (!copy) return null
          return (
            <article key={service.id} className="glass-panel flex flex-col gap-4 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-warm/50 text-start">{copy.subtitle}</p>
              <h3 className="text-2xl font-heading text-warm text-start">{copy.title}</h3>
              <ul className="space-y-2 text-sm text-warm/80">
                {copy.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-start">
                    <span className="mt-1 h-1 w-6 rounded-full bg-royal/50" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.id} className="glass-panel p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-warm/50 text-start">
              {groupLabels?.[group.id] ?? group.id}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-white/15 px-3 py-1 text-xs text-warm/80">
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
