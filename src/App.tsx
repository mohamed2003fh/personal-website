import { HeroSection } from "./sections/Hero"
import { Section } from "./components/layout/Section"

function App() {
  return (
    <div className="bg-midnight text-warm">
      <HeroSection />
      <main>
        <Section id="about" title="About" eyebrow="Profile">
          Detailed biography and values coming soon.
        </Section>
        <Section id="experience" title="Experience" eyebrow="Timeline">
          Professional and academic experience timeline will be added in the next iteration.
        </Section>
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
