import { useEffect } from "react"
import { siteMeta } from "../../data/seo"

const META_TAGS: Array<{ name?: string; property?: string; content: string }> = [
  { name: "description", content: siteMeta.description },
  { name: "keywords", content: siteMeta.keywords.join(", ") },
  { name: "author", content: heroName() },
  { property: "og:title", content: siteMeta.title },
  { property: "og:description", content: siteMeta.description },
  { property: "og:type", content: "website" },
  { property: "og:url", content: siteMeta.url },
  { property: "og:image", content: siteMeta.image },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: siteMeta.title },
  { name: "twitter:description", content: siteMeta.description },
  { name: "twitter:image", content: siteMeta.image },
]

function heroName() {
  return siteMeta.title.split(" · ")[0]
}

const ensureTag = (tagName: string, attributes: Record<string, string>) => {
  const selector = Object.entries(attributes)
    .map(([key, value]) => `[${key}='${value}']`)
    .join("")
  let element = document.head.querySelector<HTMLElement>(`${tagName}${selector}`)

  if (!element) {
    element = document.createElement(tagName)
    Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value))
    document.head.appendChild(element)
  }

  return element
}

export function Meta() {
  useEffect(() => {
    document.title = siteMeta.title

    META_TAGS.forEach((tag) => {
      const attributes: Record<string, string> = { content: tag.content }
      if (tag.name) attributes.name = tag.name
      if (tag.property) attributes.property = tag.property
      const element = ensureTag("meta", attributes) as HTMLMetaElement
      element.setAttribute("content", tag.content)
    })

    const canonical = ensureTag("link", { rel: "canonical", href: siteMeta.url }) as HTMLLinkElement
    canonical.setAttribute("href", siteMeta.url)

    const scriptId = "structured-data"
    let script = document.getElementById(scriptId) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement("script") as HTMLScriptElement
      script.type = "application/ld+json"
      script.id = scriptId
      document.head.appendChild(script)
    }
    if (script) {
      script.textContent = JSON.stringify(siteMeta.jsonLd)
    }
  }, [])

  return null
}
