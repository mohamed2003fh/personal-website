import { HeroCanvas } from "../components/three/HeroCanvas"
import { Button } from "../components/ui/Button"
import { heroContent } from "../data/profile"

export function HeroSection() {
  return (
    <header id="hero" className="relative overflow-hidden py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
        <div className="relative z-10 flex-1">
          <div className="glass-panel space-y-6 p-8">
            <p className="text-xs font-mono uppercase tracking-[0.6em] text-cyber">
              Available · {heroContent.location}
            </p>
            <div>
              <h1 className="font-heading text-4xl font-semibold text-warm sm:text-5xl lg:text-6xl">
                {heroContent.name}
              </h1>
              <p className="mt-2 font-mono text-sm text-cyber/90">{heroContent.title}</p>
            </div>
            <p className="max-w-2xl text-lg text-warm/80">{heroContent.summary}</p>

            <ul className="space-y-3 text-sm text-warm/70">
              {heroContent.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyber/80" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
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

            <div className="flex flex-wrap gap-6 text-sm text-warm/60">
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
        </div>

        <div className="relative flex-1">
          <div className="glass-panel relative w-full max-w-md overflow-hidden p-5">
            <div className="hero-photo-frame relative aspect-[4/5] w-full overflow-hidden rounded-[28px]">
              <HeroCanvas />
              <img
                src="/assets/images/profile.jpg"
                alt="Portrait of Mohamed Fhafah"
                className="hero-photo-image"
                loading="lazy"
              />
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-midnight/70 px-4 py-2 text-xs font-mono text-warm/80 shadow-card">
              <p>Cyber Defense • Secure Web • AI</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
