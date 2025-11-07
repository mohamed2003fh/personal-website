import { HeroCanvas } from "../components/three/HeroCanvas"
import { Button } from "../components/ui/Button"
import { heroContent } from "../data/profile"

export function HeroSection() {
  return (
    <header id="hero" className="relative overflow-hidden py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
        <div className="relative z-10 flex-1">
          <p className="text-sm uppercase tracking-[0.5em] text-cyber">
            Available · {heroContent.location}
          </p>
          <h1 className="mt-6 font-heading text-4xl font-semibold text-warm sm:text-5xl lg:text-6xl">
            {heroContent.name}
          </h1>
          <p className="mt-4 font-mono text-cyber text-sm">
            {heroContent.title}
          </p>
          <p className="mt-6 max-w-2xl text-lg text-warm/80">
            {heroContent.summary}
          </p>

          <ul className="mt-6 space-y-2 text-sm text-warm/70">
            {heroContent.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyber" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            {heroContent.actions.map((action) => (
              <Button
                key={action.label}
                as="a"
                href={action.href}
                variant={action.variant}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={action.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {action.label}
              </Button>
            ))}
          </div>

          <div className="mt-8 flex gap-6 text-sm text-warm/60">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-warm/40">Focus</p>
              <p>{heroContent.meta.focus}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-warm/40">Availability</p>
              <p>{heroContent.meta.availability}</p>
            </div>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="aspect-square w-full max-w-lg rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur">
            <HeroCanvas />
            <div className="absolute inset-8 overflow-hidden rounded-[1.5rem] border border-white/15 shadow-card">
              <img
                src="/assets/images/profile.jpg"
                alt="Portrait of Mohamed Fhafah"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-6 right-6 rounded-2xl border border-white/20 bg-midnight/80 px-4 py-2 text-xs font-mono text-warm/80 shadow-card">
              <p>Cyber Defense • Secure Web • AI</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
