import { HeroSection } from "./sections/Hero"
import { AboutSection } from "./sections/About"
import { ExperienceSection } from "./sections/Experience"
import { ProjectsSection } from "./sections/Projects"
import { ContactSection } from "./sections/Contact"
import { SkillsSection } from "./sections/Skills"
import { EducationSection } from "./sections/Education"
import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"

function App() {
  return (
    <div className="bg-midnight text-warm">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cyber focus:px-4 focus:py-2 focus:text-midnight"
      >
        Skip to content
      </a>
      <Navbar />
      <HeroSection />
      <main id="main">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
