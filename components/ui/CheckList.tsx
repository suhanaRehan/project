import { Check } from 'lucide-react'
import Reveal from './Reveal'

export default function CheckList({
  items,
  columns = 2,
}: {
  items: string[]
  columns?: 1 | 2
}) {
  return (
    <ul className={`grid sm:grid-cols-${columns} gap-x-8 gap-y-4`}>
      {items.map((item, i) => (
        <Reveal key={item} delay={i * 40}>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-brand-500/15 text-brand-500 dark:text-brand-300">
              <Check size={12} strokeWidth={3} />
            </span>
            <span className="text-sm text-ink-soft leading-relaxed">{item}</span>
          </li>
        </Reveal>
      ))}
    </ul>
  )
}
