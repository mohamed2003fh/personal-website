import { Section } from "../components/layout/Section"
import { education } from "../data/education"
import { useI18n } from "../i18n/I18nProvider"

export function EducationSection() {
  const { t } = useI18n()
  const educationEntries = t.education.entries as Record<
    string,
    { program: string; summary: string; highlights: string[] }
  >
  return (
    <Section id="education" title={t.education.title} eyebrow={t.education.eyebrow} frameless contentClassName="space-y-8">
      {education.map((entry) => {
        const copy = educationEntries?.[entry.id]
        const program = copy?.program ?? entry.program
        const summary = copy?.summary ?? entry.summary
        const highlights = copy?.highlights ?? entry.highlights

        return (
          <article key={entry.id} className="glass-panel p-6 text-start">
            <div className="flex flex-wrap items-center gap-3 text-sm text-warm/70">
              <span className="text-cyber">{entry.period}</span>
              {entry.location && <span>• {entry.location}</span>}
            </div>
            <h3 className="mt-3 text-2xl font-semibold text-warm">{program}</h3>
            <p className="text-warm/60">{entry.school}</p>
            <p className="mt-3 text-sm text-warm/80">{summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-warm/80">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-1 h-1 w-6 rounded-full bg-amber/60" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        )
      })}
    </Section>
  )
}
