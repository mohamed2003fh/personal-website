import { HeroSection } from "./sections/Hero"
import { AboutSection } from "./sections/About"
import { ExperienceSection } from "./sections/Experience"
import { ProjectsSection } from "./sections/Projects"
import { ContactSection } from "./sections/Contact"
import { SkillsSection } from "./sections/Skills"
import { EducationSection } from "./sections/Education"

function App() {
  return (
    <div className="bg-midnight text-warm">
      <HeroSection />
      <main>
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
