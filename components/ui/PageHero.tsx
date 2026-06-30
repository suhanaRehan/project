import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCta = { label: 'Schedule a Consultation', href: '/contact' },
  secondaryCta,
  stats,
}: {
  eyebrow: string
  title: string
  description: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  stats?: { label: string; value: string }[]
}) {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <div className="absolute inset-0 grid-bg opacity-60 dark:opacity-30" />
      <div className="glow-orb w-[36rem] h-[36rem] bg-brand-500/20 -top-48 -left-32" />
      <div className="glow-orb w-[28rem] h-[28rem] bg-accent/10 top-0 right-0" />
      <div className="relative container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] max-w-4xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 text-lg text-ink-soft max-w-2xl leading-relaxed">{description}</p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href={primaryCta.href} className="btn-primary">
              {primaryCta.label}
              <ArrowRight size={16} />
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-secondary">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </Reveal>
        {stats && stats.length > 0 && (
          <Reveal delay={320}>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-px max-w-2xl rounded-2xl overflow-hidden border border-hairline">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface px-5 py-5">
                  <div className="text-2xl font-bold gradient-text">{s.value}</div>
                  <div className="text-xs text-ink-faint mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
