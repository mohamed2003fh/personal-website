import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/space-grotesk/600.css"
import "@fontsource/jetbrains-mono/500.css"
import "./index.css"

import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { ThemeProvider } from "./components/theme/ThemeProvider"
import { I18nProvider } from "./i18n/I18nProvider"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <I18nProvider>
        <ThemeProvider>
          <Suspense fallback={<div className="p-10 text-warm">Loading...</div>}>
            <App />
          </Suspense>
        </ThemeProvider>
      </I18nProvider>
    </BrowserRouter>
  </StrictMode>
)
