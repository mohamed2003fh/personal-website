import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { Meta } from "./components/seo/Meta"
import { Analytics } from "./components/analytics/Analytics"
import { Routes, Route, Navigate } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { BlogArticlePage } from "./pages/BlogArticlePage"

function App() {
  return (
    <div className="bg-midnight text-warm">
      <Meta />
      <Analytics />
      <div className="cyber-grid" aria-hidden="true" />
      <div className="relative z-10">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cyber focus:px-4 focus:py-2 focus:text-midnight"
        >
          Skip to content
        </a>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogArticlePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
