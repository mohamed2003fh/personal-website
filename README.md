# Personal Website Project Plan

## 1. Vision & Success Criteria
- **Positioning**: Present Mohamed Fhafah as a cybersecurity-focused Master 1 Informatics student skilled in secure software engineering, networked systems, and modern web development.
- **Tone**: Professional, confident, forward-looking; highlight curiosity about AI/cybersecurity and multicultural openness.
- **Primary KPIs**: Recruiter contact rate, resume downloads, portfolio/demo clicks, mailing list/CTA submissions.
- **Experience goals**: 3-click access to key info (skills, experience, contact), sub-1s perceived load, WCAG AA compliance, responsive layouts from 320px–1440px.

## 2. Target Audiences & Value Proposition
| Audience | Needs | Promise |
|----------|-------|---------|
| Cybersecurity & software hiring managers | Quick read on hard/soft skills, evidence of problem-solving, proof of professionalism | Structured highlights of technical stack, notable academic projects, internship achievements.
| Tech recruiters | Clear contact info, downloadable resume, concise bio | Always-visible CTA, resume link, tagline summarizing expertise.
| Collaborators & peers | Insight into interests, ongoing work, how to collaborate | Mention of research interests (cyber defense, AI), open-source or study projects.

## 3. Content Narrative & Information Architecture
1. **Hero**: Name, title ("Cybersecurity-focused Software Engineer"), location (Marseille), summary line, CTA buttons (Download CV, Contact, LinkedIn/GitHub) plus an interactive Three.js scene (network nodes/particle field) responding to cursor movement.
2. **About**: Story-driven paragraph covering Master 1 (FSI), passion for cyber defense & AI, adaptability from multicultural background, soft skills.
3. **Core Expertise / Services**: Cards for Security Audits, Secure Web Development (Flask/JS), Networked Systems & Automation.
4. **Skills Matrix**: Categorized chips (Programming, Web, Databases, Tooling, Soft Skills, Languages).
5. **Experience Timeline**:
   - 2025: Cybersecurity Intern, Tanger Alliance (security audit, phishing simulation modules, ML-based DDoS interface).
   - 2023–2024: Team Member, Burger King (customer excellence, teamwork, operational rigor).
6. **Projects Spotlight**: 3 tiles with visuals & brief copy.
   - JavaFX Media Explorer (API integration, team lead, POO).
   - Networked Messaging Platform (multi-client, resilience, protocols TCP/UDP).
   - Mini-Compiler MASM (lexical/syntax analysis, code generation).
7. **Education Timeline**: Licence Informatique (L2/L3 modules), DEUST, Baccalauréat.
8. **Testimonials/Highlights placeholder**: optional future content (e.g., professor quotes or metrics from internship).
9. **Contact & CTA section**: Email, phone, location map pin, social icons, simple contact form.
10. **Footer**: Copyright, resume link, language toggle potential (FR/EN).

## 4. Visual Identity System
- **Brand keywords**: Trustworthy, inventive, high-contrast, data-inspired.
- **Palette** (accessible contrast ≥ 4.5:1 on primary backgrounds):
  - Midnight Navy `#071826` (primary background)
  - Cyber Teal `#04D9C4` (accent/CTA)
  - Royal Blue `#246BFD` (links, hover states)
  - Warm Gray `#F4F5F7` (light backgrounds, cards)
  - Signal Amber `#FFB347` (secondary highlights for metrics)
- **Typography**: Headings - "Space Grotesk" (600 weight) for futuristic feel; Body - "Inter" (400/500) for readability; monospace accent - "JetBrains Mono" for code snippets.
- **Imagery**: Abstract geometric patterns, circuit/mesh gradients, subtle grain overlays. Include professional portrait or silhouette; add mockups for projects.
- **Iconography**: Simple line icons (Lucide/Feather). Maintain stroke weight consistency.

## 5. Interaction & UX Guidelines
- Sticky top navigation with smooth scroll and section highlighting.
- Micro-interactions: magnetic CTA buttons, card hover reveals (project tech stack), animated skill bars (<700ms) triggered on viewport entry.
- Use scroll-based storytelling in hero (e.g., typewriter effect for title) but keep motion reduced preference support.
- Provide bilingual toggle (FR ↔ EN) using i18n JSON to cater to French and international recruiters.
- Ensure forms have inline validation, fallback mailto link, and success/failure states.

## 6. Technical Stack & Architecture
- **Framework**: React 19 + TypeScript, bootstrapped with Vite for fast HMR, code splitting, and SPA-friendly SEO enhancements.
- **3D & Motion**: Three.js via `@react-three/fiber` and `@react-three/drei` for hero/background scenes, with Framer Motion/R3F for choreographed transitions.
- **Styling**: Tailwind CSS backed by custom CSS variables/tokens; leverage `clsx` + variant utilities for design-system components.
- **Content layer**: Structured JSON/YAML for skills, experience, projects; MDX or Markdown for narrative sections consumed via a lightweight content loader to keep React components purely presentational.
- **Components**: Design system (Button, SectionHeading, Card, Timeline, Badge, SkillChip, Stat, CanvasScene) with accessibility hooks and test coverage.
- **Performance**: Vite image plugins/`vite-imagetools`, font preloading, Three.js scene lazy loading, `prefers-reduced-motion` guards, Lighthouse ≥ 90 target.
- **Accessibility**: Semantic landmarks, ARIA for interactive/3D controls (provide reduced-motion and static fallbacks), focus outlines that meet contrast requirements.
- **Analytics & SEO**: Plausible/Umami for analytics; `react-helmet-async` for metadata, JSON-LD injection, sitemap generation via `vite-plugin-sitemap`.
- **Deployment**: GitHub repo -> CI (GitHub Actions with pnpm) -> Vercel or Netlify static hosting; configure custom domain, HTTPS, resume assets, OG images.

## 7. Implementation Roadmap
| Phase | Scope | Deliverables |
|-------|-------|--------------|
| 0. Discovery (Day 0-1) | Finalize copy outline, gather assets (portrait, resume, project screenshots). | Approved content brief, asset checklist. |
| 1. Design System (Days 1-3) | Define palette tokens, typography scales, spacing, component library in Figma. | Style guide, component variants. |
| 2. Layout Prototypes (Days 3-5) | Desktop + mobile wireframes for each section; hero animation storyboard. | Hi-fi prototypes, interaction notes. |
| 3. Build Foundations (Days 5-7) | Scaffold React 19 + TypeScript (Vite), global styles, router setup, Three.js canvas placeholder, i18n scaffolding. | Repo setup, lint/test config, base layout deployed to preview. |
| 4. Section Implementation (Days 7-11) | Implement Hero, About, Expertise, Skills, Experience, Projects, Education, Contact, Footer with dynamic data. | Functional sections with placeholder copy. |
| 5. Enhancements & QA (Days 11-13) | Add motion, optimize performance, a11y checks, content proofreading, responsive QA. | Lighthouse & axe reports, polished copy. |
| 6. Launch (Day 14) | Connect custom domain, finalize analytics, add resume download + sitemap, announce release. | Production deploy + handover doc. |

## 8. Content & Asset Checklist
- ✅ Current CV PDFs (EN/FR) for download & copywriting.
- 🔲 Professional photo (neutral background) or illustration.
- 🔲 Project visuals (screenshots of JavaFX app, network app diagrams, compiler console capture).
- 🔲 Logo/wordmark (optional monogram "MF").
- 🔲 Testimonials or quotes (professors, supervisors) to validate credibility.
- 🔲 Short bio snippets for About (FR & EN).
- 🔲 Metadata descriptions (160 chars) + social media handles.

## 9. Risk & Mitigation Notes
- **Limited visual assets** → Use abstract generative backgrounds + typography-first layout until photos ready.
- **Frequent content updates** → Keep data-driven structure; future CMS (Contentlayer/Sanity) integration possible.
- **International audience** → Implement i18n early; keep copy concise for translation quality.
- **Academic schedule constraints** → Stick to two-week sprint; prioritize MVP sections (Hero, About, Experience, Contact) if timeline tight.

## 10. Immediate Next Steps
1. Approve brand palette & typography choices or provide preferences.
2. Supply/confirm bilingual copy blocks (Hero tagline, About paragraph, project blurbs).
3. Decide on hosting platform (default: Vercel) and domain name.
4. Gather/produce imagery assets; otherwise brief AI/graphic creation.
5. Expand section content (About, Experience, Projects, Contact) inside the newly scaffolded React 19 + TypeScript (Vite) codebase.

## 11. Local Development Setup
1. **Requirements**: Node.js 20+, npm 10+, Git.
2. **Install**:
   ```bash
   npm install
   ```
3. **Run locally**:
   ```bash
   npm run dev
   ```
   The dev server starts at `http://localhost:5173`.
4. **Quality checks**:
   - `npm run build` for production bundles (tsc + Vite).
   - `npm run lint` for ESLint (React hooks/config included).
5. **Project layout**:
   - `src/sections` holds page sections (Hero ready, others pending).
   - `src/components` contains reusable UI/layout/Three.js helpers.
   - `src/data` stores structured content (hero copy, upcoming sections).
   - `public/assets/cv` contains the downloadable resume linked from the hero CTA.
