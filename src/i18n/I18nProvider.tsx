import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import en from "./locales/en.json"
import fr from "./locales/fr.json"
import ar from "./locales/ar.json"

type Locale = "en" | "fr" | "ar"
type Messages = typeof en

const translations: Record<Locale, Messages> = { en, fr, ar }
const STORAGE_KEY = "mf-portfolio-locale"

type I18nContextValue = {
  locale: Locale
  t: Messages
  setLocale: (next: Locale) => void
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined)

const getInitialLocale = (): Locale => {
  if (typeof window === "undefined") return "en"
  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null
  if (stored && translations[stored]) return stored
  const browser = window.navigator.language.slice(0, 2)
  if (browser === "fr") return "fr"
  if (browser === "ar") return "ar"
  return "en"
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => getInitialLocale())

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
  }

  useEffect(() => {
    document.dir = locale === "ar" ? "rtl" : "ltr"
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale, t: translations[locale] }), [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
