import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"

type Theme = "dark" | "light"

type ThemeContextValue = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const STORAGE_KEY = "mf-theme-preference"

const getPreferredTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "dark"
  }

  const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null
  if (stored === "dark" || stored === "light") {
    return stored
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => getPreferredTheme())

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute("data-theme", theme)
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    [theme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}
