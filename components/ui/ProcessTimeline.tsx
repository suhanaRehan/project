import Reveal from './Reveal'
import type { ProcessStep } from '@/lib/services-data'

export default function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <div className="relative">
      <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="grid md:grid-cols-4 gap-8 md:gap-6">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 100}>
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg text-white relative z-10"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-5 font-semibold text-lg">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
