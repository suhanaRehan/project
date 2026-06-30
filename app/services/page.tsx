import type { Metadata } from 'next'
import Link from 'next/link'
import * as Icons from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/lib/services-data'
import PageHero from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ContactCTA from '@/components/ui/ContactCTA'

export const metadata: Metadata = {
  title: 'Services | Cybersecurity, Software, AI & IT Solutions',
  description:
    'Explore SoftwareSphere\u2019s full range of enterprise technology services across cybersecurity, software development, AI solutions, and managed IT.',
  alternates: { canonical: '/services' },
}

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Four disciplines. One accountable partner."
        description="Every engagement draws on the same engineering rigor, whether you need a security program, a modernized platform, an AI capability, or day-to-day IT reliability."
      />
      <Section>
        <div className="grid sm:grid-cols-2 gap-8">
          {categories.map((cat, i) => {
            const Icon = (Icons as any)[cat.icon]
            return (
              <Reveal key={cat.slug} delay={i * 100}>
                <Link href={`/services/${cat.slug}`} className="surface-card surface-card-hover p-8 h-full flex flex-col group">
                  {Icon && (
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-brand-500/10 text-brand-500 dark:text-brand-300">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                  )}
                  <h2 className="text-xl font-bold">{cat.name}</h2>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed flex-1">{cat.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {cat.subServices.slice(0, 3).map((s) => (
                      <span key={s.slug} className="badge-pill">{s.title}</span>
                    ))}
                    <span className="badge-pill">+{cat.subServices.length - 3} more</span>
                  </div>
                  <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 dark:text-brand-300">
                    Explore {cat.shortName}
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Section>
      <ContactCTA />
    </>
  )
}
