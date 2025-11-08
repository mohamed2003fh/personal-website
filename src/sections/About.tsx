import { useEffect, useState, type ReactNode } from "react"
import { Section } from "../components/layout/Section"
import { aboutContent } from "../data/profile"
import { useI18n } from "../i18n/I18nProvider"

const techLogoMap: Record<string, ReactNode> = {
  python: (
    <svg viewBox="0 0 48 48" role="img" aria-label="Python">
      <path
        d="M24 5c-8 0-7 4-7 7v4h14V9c0-3 1-4-7-4z"
        fill="#3870ff"
        stroke="#3870ff"
        strokeWidth="2"
      />
      <path
        d="M24 43c8 0 7-4 7-7v-4H17v7c0 3-1 4 7 4z"
        fill="#ffd43b"
        stroke="#ffd43b"
        strokeWidth="2"
      />
      <circle cx="29" cy="10" r="1.8" fill="#fff" />
      <circle cx="19" cy="38" r="1.8" fill="#fff" />
    </svg>
  ),
  java: (
    <svg viewBox="0 0 48 48" role="img" aria-label="Java">
      <path
        d="M24 6c4 5-4 6 0 11 5-3 10-8 4-11-2-1-4-1-4 0z"
        fill="#ff6f61"
      />
      <path d="M14 36c8 4 21 1 20-3-1-4-8 0-9-2-1-2 6-3 5-7-1-5-14 0-10 4 4 4-8 1-8 8 0 1 1 1 2 0z" fill="#3870ff" />
    </svg>
  ),
  flask: (
    <svg viewBox="0 0 48 48" role="img" aria-label="Flask">
      <path
        d="M28 6h-8v3l2 3v13l-9 17c-1 2 0 4 2 4h18c2 0 3-2 2-4l-9-17V12l2-3V6z"
        fill="none"
        stroke="#cbd5f5"
        strokeWidth="2"
      />
      <path d="M17 36h14" stroke="#cbd5f5" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 32h8" stroke="#cbd5f5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  react: (
    <svg viewBox="0 0 48 48" role="img" aria-label="React">
      <circle cx="24" cy="24" r="3.5" fill="#00d8ff" />
      <ellipse cx="24" cy="24" rx="16" ry="6" fill="none" stroke="#00d8ff" strokeWidth="2" />
      <ellipse
        cx="24"
        cy="24"
        rx="16"
        ry="6"
        fill="none"
        stroke="#00d8ff"
        strokeWidth="2"
        transform="rotate(60 24 24)"
      />
      <ellipse
        cx="24"
        cy="24"
        rx="16"
        ry="6"
        fill="none"
        stroke="#00d8ff"
        strokeWidth="2"
        transform="rotate(120 24 24)"
      />
    </svg>
  ),
}

function YearsCounter({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let frame: number
    const duration = 1200
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setDisplayValue(Math.round(progress * value))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [value])

  return (
    <div className="years-counter">
      <span>{displayValue}+</span>
    </div>
  )
}

export function AboutSection() {
  const { t } = useI18n()
  const paragraphs = t.about.paragraphs ?? aboutContent.paragraphs
  const securityFocus = t.about.security_focus_list ?? aboutContent.securityFocus
  const techLabels = t.about.tech_labels ?? {}
  return (
    <Section
      id="about"
      title={t.about.title}
      eyebrow={t.about.eyebrow}
      frameless
      contentClassName="grid gap-8 lg:grid-cols-[2fr,1fr]"
    >
      <div className="glass-panel relative overflow-hidden p-8 text-start">
        <div className="about-orb" aria-hidden="true" />
        <div className="space-y-6">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <div className="glass-panel p-6 text-center">
          <YearsCounter value={aboutContent.yearsCoding} />
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-warm/50">{t.about.years}</p>
        </div>
        <div className="glass-panel p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-warm/50">{t.about.security_focus}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {securityFocus.map((item) => (
              <span key={item} className="security-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="glass-panel p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-warm/50">{t.about.technologies}</p>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {aboutContent.techStack.map((tech) => (
              <div key={tech} className="tech-logo">
                {techLogoMap[tech]}
                <span>{(techLabels as Record<string, string>)[tech] ?? tech}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-panel p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-warm/50">{t.about.languages}</p>
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
