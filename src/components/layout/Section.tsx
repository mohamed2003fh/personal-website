import type { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  id?: string
  title: string
  eyebrow?: string
}

export function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className="py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6">
        {eyebrow && (
          <p className="text-sm uppercase tracking-[0.3em] text-amber/90">
            {eyebrow}
          </p>
        )}
        <h2 className="font-heading text-3xl font-semibold text-warm lg:text-4xl">
          {title}
        </h2>
        <div className="mt-8 text-base text-warm/80">{children}</div>
      </div>
    </section>
  );
}
