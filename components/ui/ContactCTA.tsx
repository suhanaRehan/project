import Link from 'next/link'
import { ArrowRight, CalendarClock } from 'lucide-react'
import Reveal from './Reveal'

export default function ContactCTA({
  title = 'Ready to discuss your project?',
  description = 'Talk to our team about your goals, timeline, and technical environment. We will respond within one business day with next steps.',
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="section-pad">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl p-10 sm:p-14 text-center"
            style={{ background: 'linear-gradient(135deg, #1a1040 0%, #341a6b 50%, #1a1040 100%)' }}>
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="glow-orb w-80 h-80 bg-brand-400/30 -top-20 left-1/4" />
            <div className="glow-orb w-72 h-72 bg-accent/20 -bottom-20 right-1/4" />
            <div className="relative">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <CalendarClock size={22} className="text-brand-200" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white max-w-xl mx-auto">{title}</h2>
              <p className="mt-4 text-violet-200/80 max-w-xl mx-auto leading-relaxed">{description}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Talk to an Expert
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="btn px-6 py-3 text-sm border border-white/20 text-white hover:bg-white/10"
                >
                  Request a Proposal
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
