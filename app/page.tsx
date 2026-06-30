import type { Metadata } from 'next'
import Link from 'next/link'
import * as Icons from 'lucide-react'
import { ArrowRight, CheckCircle2, Quote } from 'lucide-react'
import { categories } from '@/lib/services-data'
import { Section, SectionHeading } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ContactCTA from '@/components/ui/ContactCTA'

export const metadata: Metadata = {
  title: 'Enterprise Cybersecurity, Software & AI Solutions',
  description:
    'SoftwareSphere delivers enterprise cybersecurity, software development, AI agents, and IT managed services for organizations that demand reliability and measurable outcomes.',
  alternates: { canonical: '/' },
}

const stats = [
  { value: '200+', label: 'Enterprise Clients' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '28', label: 'Specialized Services' },
  { value: '24/7', label: 'Dedicated Support' },
]

const trusts = ['ISO 27001 Aligned', 'SOC 2 Practices', 'GDPR & CCPA Ready', 'Zero-Trust Architecture']

const differentiators = [
  {
    icon: 'Layers',
    title: 'One partner, full stack',
    description: 'Security, engineering, AI, and infrastructure under a single accountable team, not four disconnected vendors.',
  },
  {
    icon: 'GitBranch',
    title: 'Engineering-first delivery',
    description: 'Architecture decisions, code quality, and operational discipline lead every engagement, not just the pitch deck.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Security built in, not bolted on',
    description: 'Every system we build or modernize is designed with security and compliance as first-class requirements.',
  },
  {
    icon: 'TrendingUp',
    title: 'Outcomes you can measure',
    description: 'We define success criteria up front and report against them, not vanity metrics or activity logs.',
  },
]

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center pt-24 pb-20 border-b border-hairline">
        <div className="absolute inset-0 grid-bg opacity-50 dark:opacity-25" />
        <div className="glow-orb w-[40rem] h-[40rem] bg-brand-500/20 -top-56 -left-40" />
        <div className="glow-orb w-[28rem] h-[28rem] bg-accent/15 top-10 right-0 animate-float" />

        <div className="relative container-page">
          <div className="max-w-3xl">
            <Reveal>
              <span className="badge-pill">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                Enterprise Technology Solutions
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                Technology that <span className="gradient-text">scales with you.</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-7 text-lg text-ink-soft max-w-xl leading-relaxed">
                From cybersecurity to AI-driven automation, SoftwareSphere delivers end-to-end technology solutions
                that help modern enterprises move faster, operate safer, and scale with confidence.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/services" className="btn-primary">
                  Explore Services <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Talk to an Expert
                </Link>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-12 flex flex-wrap gap-3">
                {trusts.map((t) => (
                  <span key={t} className="badge-pill">
                    <CheckCircle2 size={12} className="text-brand-500" /> {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-hairline bg-bg-soft">
        <div className="container-page py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <Reveal key={label}>
                <div className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold gradient-text">{value}</div>
                  <div className="text-sm text-ink-soft mt-1">{label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <Section>
        <SectionHeading
          eyebrow="What We Do"
          title="Four disciplines, one technology partner"
          description="Comprehensive solutions engineered for the unique demands of modern enterprises, from boardroom strategy to production code."
          center
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => {
            const Icon = (Icons as any)[cat.icon]
            return (
              <Reveal key={cat.slug} delay={i * 100}>
                <Link href={`/services/${cat.slug}`} className="surface-card surface-card-hover p-6 h-full flex flex-col group">
                  {Icon && (
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-brand-500/10 text-brand-500 dark:text-brand-300">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                  )}
                  <h3 className="font-semibold">{cat.shortName}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">{cat.tagline}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 dark:text-brand-300">
                    {cat.subServices.length} services
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Differentiators */}
      <Section muted>
        <SectionHeading eyebrow="Why SoftwareSphere" title="Built differently than a typical vendor" center />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((d, i) => {
            const Icon = (Icons as any)[d.icon]
            return (
              <Reveal key={d.title} delay={i * 90}>
                <div className="text-center sm:text-left">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 mx-auto sm:mx-0 bg-brand-500/10 text-brand-500 dark:text-brand-300">
                    {Icon && <Icon size={22} strokeWidth={1.8} />}
                  </div>
                  <h3 className="font-semibold">{d.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{d.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Architecture / process diagram */}
      <Section>
        <SectionHeading
          eyebrow="How We Engage"
          title="A consistent delivery model across every discipline"
          description="Whatever the engagement, you can expect the same disciplined approach: understand, design, build, and operate."
          center
        />
        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-9 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="grid md:grid-cols-4 gap-10 md:gap-6">
            {[
              { n: '01', t: 'Understand', d: 'We learn your environment, constraints, and what success actually looks like.' },
              { n: '02', t: 'Design', d: 'We architect a solution scoped to your risk tolerance, timeline, and budget.' },
              { n: '03', t: 'Build', d: 'We deliver in iterative, demonstrable increments with continuous feedback.' },
              { n: '04', t: 'Operate', d: 'We support, monitor, and optimize so the solution keeps performing after launch.' },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="relative">
                  <div
                    className="w-[3.25rem] h-[3.25rem] rounded-2xl flex items-center justify-center font-bold text-white relative z-10"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}
                  >
                    {s.n}
                  </div>
                  <h3 className="mt-5 font-semibold text-lg">{s.t}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Quote / credibility strip */}
      <Section muted>
        <Reveal>
          <div className="surface-card p-10 sm:p-14 text-center max-w-3xl mx-auto">
            <Quote className="mx-auto text-brand-500/40" size={32} />
            <p className="mt-6 text-xl sm:text-2xl font-medium leading-relaxed">
              The teams we work best with treat technology as a strategic capability, not a cost center. That is the
              standard we build to on every engagement.
            </p>
            <p className="mt-6 text-sm text-ink-faint">SoftwareSphere Engineering Leadership</p>
          </div>
        </Reveal>
      </Section>

      <ContactCTA />
    </div>
  )
}
