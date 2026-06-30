'use client'

import { useState } from 'react'
import { ClipboardList, Loader2, CheckCircle2 } from 'lucide-react'
import type { QuestionnaireField } from '@/lib/services-data'

export default function Questionnaire({
  categoryName,
  fields,
}: {
  categoryName: string
  fields: QuestionnaireField[]
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [contact, setContact] = useState({ name: '', email: '', company: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function update(question: string, value: string) {
    setAnswers((prev) => ({ ...prev, [question]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!contact.name || !contact.email) {
      setStatus('error')
      return
    }
    setStatus('loading')
    const message = fields
      .map((f) => `${f.question}\n${answers[f.question] || 'Not answered'}`)
      .join('\n\n')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contact.name,
          email: contact.email,
          company: contact.company,
          service: categoryName,
          message: `Discovery questionnaire — ${categoryName}\n\n${message}`,
        }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="surface-card p-10 text-center">
        <CheckCircle2 className="mx-auto text-brand-500 dark:text-brand-300" size={36} />
        <h3 className="mt-4 text-xl font-semibold">Thank you — we received your answers.</h3>
        <p className="mt-2 text-ink-soft text-sm max-w-md mx-auto">
          A member of our {categoryName.toLowerCase()} team will review your responses and reach out within one
          business day to discuss next steps.
        </p>
      </div>
    )
  }

  return (
    <div className="surface-card p-6 sm:p-10">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-500 dark:text-brand-300 flex items-center justify-center">
          <ClipboardList size={18} />
        </div>
        <h3 className="text-lg font-semibold">Tell us about your {categoryName.toLowerCase()} needs</h3>
      </div>
      <p className="text-sm text-ink-soft mb-8 max-w-xl">
        A few quick questions help our team prepare relevant, specific recommendations before we speak.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map((field) => (
          <div key={field.question}>
            <label className="block text-sm font-medium mb-2">{field.question}</label>
            {field.type === 'select' && field.options ? (
              <div className="flex flex-wrap gap-2">
                {field.options.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => update(field.question, opt)}
                    className={`text-xs sm:text-sm px-3.5 py-2 rounded-full border transition-colors ${
                      answers[field.question] === opt
                        ? 'bg-brand-500 text-white border-brand-500'
                        : 'border-border text-ink-soft hover:border-brand-400/60'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : field.type === 'textarea' ? (
              <textarea
                rows={3}
                placeholder={field.placeholder}
                value={answers[field.question] || ''}
                onChange={(e) => update(field.question, e.target.value)}
                className="w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
              />
            ) : (
              <input
                type="text"
                placeholder={field.placeholder}
                value={answers[field.question] || ''}
                onChange={(e) => update(field.question, e.target.value)}
                className="w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
              />
            )}
          </div>
        ))}

        <div className="grid sm:grid-cols-3 gap-4 pt-2 border-t border-hairline">
          <input
            required
            type="text"
            placeholder="Your name"
            value={contact.name}
            onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm mt-6 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
          />
          <input
            required
            type="email"
            placeholder="Work email"
            value={contact.email}
            onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm mt-6 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
          />
          <input
            type="text"
            placeholder="Company"
            value={contact.company}
            onChange={(e) => setContact((c) => ({ ...c, company: e.target.value }))}
            className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm mt-6 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
          />
        </div>

        {status === 'error' && (
          <p className="text-sm text-red-500">Please provide your name and email, then try again.</p>
        )}

        <button type="submit" disabled={status === 'loading'} className="btn-primary w-full sm:w-auto">
          {status === 'loading' ? <Loader2 size={16} className="animate-spin" /> : null}
          Submit Questionnaire
        </button>
      </form>
    </div>
  )
}
