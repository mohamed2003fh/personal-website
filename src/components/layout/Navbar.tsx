import { useState } from "react"
import { Button } from "../ui/Button"
import { heroContent, navLinks } from "../../data/profile"
import { useTheme } from "../theme/ThemeProvider"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const handleNavClick = (href: string) => {
    setOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-midnight/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#hero" className="font-heading text-xl text-warm">
          <span className="text-cyber">MF</span> · Cyber Engineer
        </a>
        <nav className="hidden items-center gap-6 text-sm text-warm/70 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="transition hover:text-cyber"
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" onClick={toggleTheme} aria-label="Toggle color mode">
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </Button>
          <Button as="a" href={heroContent.actions[0].href} variant="secondary">
            Download CV
          </Button>
        </div>
        <button
          className="lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-warm" />
            <span className="block h-0.5 w-6 bg-warm" />
            <span className="block h-0.5 w-6 bg-warm" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-midnight/90 px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-3 text-sm text-warm/80">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left"
              >
                {link.label}
              </button>
            ))}
            <Button as="a" href={heroContent.actions[0].href} variant="secondary" className="mt-2">
              Download CV
            </Button>
            <Button variant="ghost" onClick={toggleTheme}>
              {theme === "dark" ? "Switch to light" : "Switch to dark"}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
