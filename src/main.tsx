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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div className="p-10 text-warm">Loading...</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </StrictMode>
)
