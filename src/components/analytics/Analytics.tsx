import { useEffect } from "react"
import { analyticsConfig } from "../../data/analytics"

export function Analytics() {
  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[data-domain='${analyticsConfig.domain}'][data-provider='${analyticsConfig.provider}']`
    )
    if (existingScript) return

    const script = document.createElement("script")
    script.defer = true
    script.dataset.domain = analyticsConfig.domain
    script.dataset.provider = analyticsConfig.provider
    script.src = analyticsConfig.scriptUrl
    document.head.appendChild(script)
  }, [])

  return (
    <noscript>
      <img
        src={`https://plausible.io/api/event?noscript=1&domain=${analyticsConfig.domain}`}
        alt=""
        style={{ display: "none" }}
      />
    </noscript>
  )
}
