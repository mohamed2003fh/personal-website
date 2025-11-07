import { HeroSection } from "./sections/Hero"
import { AboutSection } from "./sections/About"
import { ExperienceSection } from "./sections/Experience"
import { Section } from "./components/layout/Section"

function App() {
  return (
    <div className="bg-midnight text-warm">
      <HeroSection />
      <main>
        <AboutSection />
        <ExperienceSection />
        <Section id="projects" title="Projects" eyebrow="Highlights">
          Case studies for the JavaFX media explorer, distributed network platform, and NASM compiler will be showcased here.
        </Section>
        <Section id="contact" title="Contact" eyebrow="Collaborate">
          Contact form and quick links will live here so recruiters can reach out without friction.
        </Section>
      </main>
    </div>
  )
}

export default App
