'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from 'lucide-react'
import { categories } from '@/lib/services-data'
import PageHero from '@/components/ui/PageHero'
import { Section } from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }
      setSubmitted(true)
      setFormData({ name: '', email: '', company: '', service: '', message: '' })
      setTimeout(() => setSubmitted(false), 6000)
    } catch (err) {
      console.error('Contact form submission failed:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project."
        description="Tell us about your goals, environment, and timeline. Our team typically responds within one business day with clear next steps."
      />

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          <Reveal>
            <div>
              <h2 className="text-xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone size={20} className="text-brand-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Phone</h3>
                    <p className="text-sm text-ink-soft">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail size={20} className="text-brand-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Email</h3>
                    <p className="text-sm text-ink-soft">info@softwaresphere.in</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin size={20} className="text-brand-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Address</h3>
                    <p className="text-sm text-ink-soft">
                      Warangal, Telangana<br />India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 surface-card p-6">
                <h3 className="font-semibold text-sm mb-3">Response Times</h3>
                <p className="text-sm text-ink-soft leading-relaxed">
                  <strong className="text-ink">Business hours:</strong> 1-2 hours<br />
                  <strong className="text-ink">After hours:</strong> Next business day
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-2">
            <div className="surface-card p-8">
              {submitted && (
                <div className="mb-6 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center gap-2 text-sm">
                  <CheckCircle2 size={16} /> Thank you for your message — we will be in touch soon.
                </div>
              )}
              {error && (
                <div className="mb-6 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                  >
                    <option value="">Select a service</option>
                    {categories.map((c) => (
                      <option key={c.slug} value={c.slug}>{c.shortName}</option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
                  {loading && <Loader2 size={16} className="animate-spin" />}
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  )
}
