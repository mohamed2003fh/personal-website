import { HeroSection } from "../sections/Hero"
import { AboutSection } from "../sections/About"
import { SkillsSection } from "../sections/Skills"
import { ExperienceSection } from "../sections/Experience"
import { ProjectsSection } from "../sections/Projects"
import { BlogSection } from "../sections/Blog"
import { BlogArticlesSection } from "../sections/BlogArticles"
import { EducationSection } from "../sections/Education"
import { ContactSection } from "../sections/Contact"

export function HomePage() {
  return (
    <>
      <HeroSection />
      <main id="main">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <BlogSection />
        <BlogArticlesSection />
        <EducationSection />
        <ContactSection />
      </main>
    </>
  )
}
