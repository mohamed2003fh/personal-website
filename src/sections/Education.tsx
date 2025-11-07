import { Section } from "../components/layout/Section"
import { education } from "../data/education"

export function EducationSection() {
  return (
    <Section id="education" title="Academic journey" eyebrow="Education">
      <div className="space-y-8">
        {education.map((entry) => (
          <article
            key={`${entry.school}-${entry.program}`}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur"
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-warm/70">
              <span className="text-cyber">{entry.period}</span>
              {entry.location && <span>• {entry.location}</span>}
            </div>
            <h3 className="mt-3 text-2xl font-semibold text-warm">{entry.program}</h3>
            <p className="text-warm/60">{entry.school}</p>
            <p className="mt-3 text-sm text-warm/80">{entry.summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-warm/80">
              {entry.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-1 h-1 w-6 rounded-full bg-amber/60" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
