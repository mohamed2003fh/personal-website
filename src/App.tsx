import { HeroSection } from "./sections/Hero"
import { AboutSection } from "./sections/About"
import { ExperienceSection } from "./sections/Experience"
import { ProjectsSection } from "./sections/Projects"
import { ContactSection } from "./sections/Contact"
import { SkillsSection } from "./sections/Skills"
import { EducationSection } from "./sections/Education"
import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { Meta } from "./components/seo/Meta"
import { Analytics } from "./components/analytics/Analytics"
import { BackgroundField } from "./components/three/BackgroundField"

function App() {
  return (
    <div className="bg-midnight text-warm">
      <Meta />
      <Analytics />
      <BackgroundField />
      <div className="relative z-10">
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
    </div>
  )
}

export default App
