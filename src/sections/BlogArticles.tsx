import { Section } from "../components/layout/Section"
import { blogPosts } from "../data/blog"
import { useI18n } from "../i18n/I18nProvider"

export function BlogArticlesSection() {
  const { t } = useI18n()
  const entries = t.blog.entries as Record<string, { title: string; content: string[] }>

  return (
    <Section id="blog-articles" title={t.blog.title} eyebrow={t.blog.eyebrow} frameless contentClassName="space-y-8">
      {blogPosts.map((post) => {
        const copy = entries?.[post.id]
        if (!copy) return null
        return (
          <article key={post.id} id={`blog-${post.id}`} className="glass-panel p-6 space-y-4 text-start">
            <p className="text-xs uppercase tracking-[0.3em] text-warm/50">
              {post.date} • {post.readingTime}
            </p>
            <h3 className="text-3xl font-heading text-warm">{copy.title}</h3>
            {copy.content?.map((paragraph) => (
              <p key={paragraph} className="text-sm text-warm/80">
                {paragraph}
              </p>
            ))}
          </article>
        )
      })}
    </Section>
  )
}
