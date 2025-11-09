import { useMemo } from "react"
import { useParams, Navigate } from "react-router-dom"
import { blogPosts } from "../data/blog"
import { useI18n } from "../i18n/I18nProvider"
import { Button } from "../components/ui/Button"

export function BlogArticlePage() {
  const { id } = useParams<{ id: string }>()
  const { t } = useI18n()
  const entry = useMemo(() => blogPosts.find((post) => post.id === id), [id])
  const blogEntries = t.blog.entries as Record<string, { title: string; content: string[] }>
  const copy = id ? blogEntries?.[id] : undefined

  if (!entry || !copy) {
    return <Navigate to="/" replace />
  }

  return (
    <article className="px-6 py-16">
      <div className="glass-panel mx-auto max-w-4xl space-y-6 p-8 text-start">
        <p className="text-xs uppercase tracking-[0.3em] text-warm/50">
          {entry.date} • {entry.readingTime}
        </p>
        <h1 className="text-4xl font-heading text-warm">{copy.title}</h1>
        {copy.content?.map((paragraph: string) => (
          <p key={paragraph} className="text-base text-warm/80">
            {paragraph}
          </p>
        ))}
        <div className="pt-4">
          <Button as="a" href="/#blog" variant="secondary">
            {t.blog.cta}
          </Button>
        </div>
      </div>
    </article>
  )
}
