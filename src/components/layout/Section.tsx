import clsx from "clsx"
import type { PropsWithChildren } from "react"

interface SectionProps extends PropsWithChildren {
  id?: string
  title: string
  eyebrow?: string
  frameless?: boolean
  contentClassName?: string
}

export function Section({
  id,
  title,
  eyebrow,
  frameless = false,
  contentClassName,
  children,
}: SectionProps) {
  return (
    <section id={id} className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {eyebrow && (
          <p className="text-sm uppercase tracking-[0.4em] text-amber/90">
            {eyebrow}
          </p>
        )}
        <h2 className="font-heading text-3xl font-semibold text-warm lg:text-4xl">
          {title}
        </h2>
        <div
          className={clsx(
            "mt-8",
            frameless ? "text-base text-warm/80" : "glass-panel text-base text-warm/80",
            contentClassName,
          )}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
