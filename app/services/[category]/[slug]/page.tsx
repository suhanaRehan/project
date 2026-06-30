import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import * as Icons from 'lucide-react'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { allSubServiceParams, getSubService } from '@/lib/services-data'
import PageHero from '@/components/ui/PageHero'
import { Section, SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import CheckList from '@/components/ui/CheckList'
import FeatureCard from '@/components/ui/FeatureCard'
import ProcessTimeline from '@/components/ui/ProcessTimeline'
import ContactCTA from '@/components/ui/ContactCTA'

export function generateStaticParams() {
  return allSubServiceParams()
}

export function generateMetadata({
  params,
}: {
  params: { category: string; slug: string }
}): Metadata {
  const result = getSubService(params.category, params.slug)
  if (!result) return {}
  const { category, subService } = result
  const title = `${subService.title} | ${category.shortName} Services`
  return {
    title,
    description: subService.shortDescription,
    keywords: [subService.title, category.shortName, ...subService.keyFeatures.slice(0, 3)],
    alternates: { canonical: `/services/${category.slug}/${subService.slug}` },
    openGraph: {
      title,
      description: subService.shortDescription,
      url: `/services/${category.slug}/${subService.slug}`,
      type: 'website',
    },
  }
}

export default function SubServicePage({
  params,
}: {
  params: { category: string; slug: string }
}) {
  const result = getSubService(params.category, params.slug)
  if (!result) notFound()
  const { category, subService } = result
  const CategoryIcon = (Icons as any)[category.icon]

  const related = category.subServices.filter((s) => s.slug !== subService.slug).slice(0, 3)

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-hairline">
        <div className="container-page py-3 flex items-center gap-1.5 text-xs text-ink-faint overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-brand-500">Home</Link>
          <ChevronRight size={12} />
          <Link href="/services" className="hover:text-brand-500">Services</Link>
          <ChevronRight size={12} />
          <Link href={`/services/${category.slug}`} className="hover:text-brand-500">{category.shortName}</Link>
          <ChevronRight size={12} />
          <span className="text-ink-soft">{subService.title}</span>
        </div>
      </div>

      {/* 1. Hero */}
      <PageHero
        eyebrow={category.shortName}
        title={subService.title}
        description={subService.heroTagline}
        secondaryCta={{ label: `Back to ${category.shortName}`, href: `/services/${category.slug}` }}
      />

      {/* 2. What is this Service */}
      <Section>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Overview" title={`What is ${subService.title}?`} />
            <Reveal delay={80}>
              <p className="mt-6 text-ink-soft leading-relaxed">{subService.whatIs}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={140}>
              <div className="surface-card p-7">
                {CategoryIcon && (
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-brand-500/10 text-brand-500 dark:text-brand-300">
                    <CategoryIcon size={20} strokeWidth={1.8} />
                  </div>
                )}
                <h3 className="font-semibold text-sm uppercase tracking-wide text-ink-faint mb-4">At a Glance</h3>
                <ul className="space-y-3">
                  {subService.keyFeatures.slice(0, 4).map((f) => (
                    <li key={f} className="text-sm text-ink-soft flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* 3. Why is this Service Needed */}
      <Section muted>
        <SectionHeading eyebrow="The Challenge" title="Why is this service needed?" />
        <Reveal delay={80}>
          <p className="mt-6 text-ink-soft leading-relaxed max-w-3xl">{subService.whyNeeded}</p>
        </Reveal>
      </Section>

      {/* 4. What We Provide */}
      <Section>
        <SectionHeading eyebrow="Our Offering" title="What we provide" />
        <div className="mt-10">
          <CheckList items={subService.whatWeProvide} />
        </div>
      </Section>

      {/* 5. Key Features */}
      <Section muted>
        <SectionHeading eyebrow="Capabilities" title="Key features" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subService.keyFeatures.map((f, i) => (
            <FeatureCard key={f} icon={category.icon} title={f} description="" delay={i * 60} />
          ))}
        </div>
      </Section>

      {/* 6. Benefits */}
      <Section>
        <SectionHeading eyebrow="Outcomes" title="Benefits" />
        <div className="mt-10">
          <CheckList items={subService.benefits} />
        </div>
      </Section>

      {/* 7. Our Process */}
      <Section muted>
        <SectionHeading eyebrow="How We Work" title="Our process" />
        <div className="mt-12">
          <ProcessTimeline steps={subService.process} />
        </div>
      </Section>

      {/* Related services */}
      {related.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Explore More" title={`Related ${category.shortName.toLowerCase()} services`} />
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  href={`/services/${category.slug}/${s.slug}`}
                  className="surface-card surface-card-hover p-6 h-full flex flex-col group"
                >
                  <h3 className="font-semibold text-sm">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">{s.shortDescription}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 dark:text-brand-300">
                    Learn more
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* 8. Contact CTA */}
      <ContactCTA
        title={`Talk to us about ${subService.title.toLowerCase()}`}
        description={`Tell us about your environment and goals, and our team will outline a clear path forward for ${subService.title.toLowerCase()}.`}
      />
    </>
  )
}
