import { Section } from "../components/layout/Section"
import { projects } from "../data/projects"
import { Button } from "../components/ui/Button"

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Selected projects"
      eyebrow="Highlights"
      frameless
      contentClassName="grid gap-8 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <article key={project.title} className="glass-panel flex flex-col gap-4 p-6">
          <figure className="overflow-hidden rounded-2xl border border-white/10">
            <img src={project.image} alt={project.imageAlt} className="h-48 w-full object-cover" loading="lazy" />
          </figure>
          <p className="text-xs uppercase tracking-[0.3em] text-warm/50">{project.timeline}</p>
          <h3 className="text-2xl font-semibold text-warm">{project.title}</h3>
          <p className="text-sm text-warm/70">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-full border border-white/15 px-3 py-1 text-xs text-warm/70">
                {tech}
              </span>
            ))}
          </div>
          <p className="text-sm text-warm/80">{project.impact}</p>
          {project.link && (
            <Button as="a" href={project.link} variant="secondary" className="mt-auto">
              View project
            </Button>
          )}
        </article>
      ))}
    </Section>
  )
}
