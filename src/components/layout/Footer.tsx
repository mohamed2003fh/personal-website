import { contactDetails, heroContent, navLinks } from "../../data/profile"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-heading text-2xl text-warm">{heroContent.name}</p>
          <p className="text-sm text-warm/70">{heroContent.title}</p>
          <p className="mt-4 text-sm text-warm/60">{contactDetails.location}</p>
          <a href={`mailto:${contactDetails.email}`} className="mt-2 inline-flex text-cyber">
            {contactDetails.email}
          </a>
        </div>
        <div className="flex flex-1 flex-wrap gap-8 text-sm text-warm/60">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-warm/40">Navigate</p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-cyber">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-warm/40">Connect</p>
            <ul className="mt-3 space-y-2">
              {contactDetails.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noreferrer" className="hover:text-cyber">
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/assets/cv/Mohamed_Fhafah_CV.pdf" className="hover:text-cyber">
                  Resume (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-warm/40">
        © {new Date().getFullYear()} Mohamed Fhafah. Crafted with React 19, Three.js, and secure-by-design thinking.
      </p>
    </footer>
  )
}
