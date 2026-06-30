import * as Icons from 'lucide-react'
import Reveal from './Reveal'

export default function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: {
  icon?: string
  title: string
  description: string
  delay?: number
}) {
  const Icon = icon ? (Icons as any)[icon] : null
  return (
    <Reveal delay={delay}>
      <div className="surface-card surface-card-hover p-6 h-full">
        {Icon && (
          <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-brand-500/10 text-brand-500 dark:text-brand-300">
            <Icon size={20} strokeWidth={1.8} />
          </div>
        )}
        <h3 className="font-semibold text-base">{title}</h3>
        <p className="mt-2 text-sm text-ink-soft leading-relaxed">{description}</p>
      </div>
    </Reveal>
  )
}
