import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import { categories, getCategory } from '@/lib/services-data'
import PageHero from '@/components/ui/PageHero'
import { Section, SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ContactCTA from '@/components/ui/ContactCTA'
import Questionnaire from '@/components/ui/Questionnaire'

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const category = getCategory(params.category)
  if (!category) return {}
  const title = `${category.name} | Enterprise ${category.shortName} Services`
  return {
    title,
    description: category.description,
    keywords: category.subServices.map((s) => s.title),
    alternates: { canonical: `/services/${category.slug}` },
    openGraph: {
      title,
      description: category.description,
      url: `/services/${category.slug}`,
      type: 'website',
    },
  }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = getCategory(params.category)
  if (!category) notFound()

  const CategoryIcon = (Icons as any)[category.icon]

  return (
    <>
      <PageHero
        eyebrow={category.shortName}
        title={category.tagline}
        description={category.description}
        stats={category.stats}
      />

      <Section>
        <SectionHeading
          eyebrow="What We Offer"
          title={`${category.subServices.length} specialized ${category.shortName.toLowerCase()} services`}
          description="Each engagement starts from a dedicated capability, scoped to your environment, with a clear process from assessment through delivery."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.subServices.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                href={`/services/${category.slug}/${s.slug}`}
                className="surface-card surface-card-hover p-6 h-full flex flex-col group"
              >
                {CategoryIcon && (
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-brand-500/10 text-brand-500 dark:text-brand-300">
                    <CategoryIcon size={18} strokeWidth={1.8} />
                  </div>
                )}
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">{s.shortDescription}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 dark:text-brand-300">
                  Learn more
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow="Discovery" title="Help us understand your needs" center />
        <div className="mt-10 max-w-2xl mx-auto">
          <Questionnaire categoryName={category.shortName} fields={category.questionnaire} />
        </div>
      </Section>

      <ContactCTA
        title={`Ready to strengthen your ${category.shortName.toLowerCase()} capability?`}
        description="Share your goals and we will recommend the right combination of services for your environment."
      />
    </>
  )
}
