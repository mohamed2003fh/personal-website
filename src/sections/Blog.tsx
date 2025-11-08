import { Section } from "../components/layout/Section"
import { blogPosts } from "../data/blog"
import { Button } from "../components/ui/Button"
import { useI18n } from "../i18n/I18nProvider"

export function BlogSection() {
  const { t } = useI18n()
  const entries = t.blog.entries as Record<string, { title: string; excerpt: string }>

  return (
    <Section
      id="blog"
      title={t.blog.title}
      eyebrow={t.blog.eyebrow}
      frameless
      contentClassName="grid gap-8 lg:grid-cols-3"
    >
      {blogPosts.map((post) => {
        const copy = entries?.[post.id]
        if (!copy) return null
        return (
          <article key={post.id} className="glass-panel flex flex-col gap-4 p-6 text-start">
            <p className="text-xs uppercase tracking-[0.3em] text-warm/50">
              {post.date} • {post.readingTime}
            </p>
            <h3 className="text-2xl font-heading text-warm">{copy.title}</h3>
            <p className="text-sm text-warm/70">{copy.excerpt}</p>
            <div className="mt-auto">
              <Button as="a" href={post.link} variant="secondary" target="_blank" rel="noreferrer">
                {t.blog.cta}
              </Button>
            </div>
          </article>
        )
      })}
    </Section>
  )
}
