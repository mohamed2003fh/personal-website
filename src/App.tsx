import { HeroSection } from "./sections/Hero"
import { AboutSection } from "./sections/About"
import { ExperienceSection } from "./sections/Experience"
import { ProjectsSection } from "./sections/Projects"
import { ContactSection } from "./sections/Contact"

function App() {
  return (
    <div className="bg-midnight text-warm">
      <HeroSection />
      <main>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
