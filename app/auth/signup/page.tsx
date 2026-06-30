'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { User, Mail, Lock, Building2, ArrowRight } from 'lucide-react'
import { supabase } from '@/lib/supabase'

const inputClass = "w-full pl-10 pr-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-500 border border-violet-500/20 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition"
const inputStyle = { background: 'rgba(167,139,250,0.05)' }

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({ name: '', email: '', company: '', password: '', confirmPassword: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (formData.password !== formData.confirmPassword) { setError('Passwords do not match'); return }
    setLoading(true)
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: { data: { name: formData.name, company: formData.company } },
      })
      if (signUpError) { setError(signUpError.message); return }
      if (data.user && !data.session) {
        // Email confirmation is required before a session exists.
        setError('Account created! Please check your email to confirm your account before signing in.')
        return
      }
      router.push('/dashboard')
    } catch (err) {
      console.error('Signup failed:', err)
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 relative" style={{ background: 'linear-gradient(135deg, #0d0a1a 0%, #1a0f3a 100%)' }}>
      <div className="glow-orb w-96 h-96 bg-violet-600/15 -top-20 -left-20" style={{ position: 'absolute' }} />

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 relative mx-auto mb-4">
            <Image src="/logo.jpeg" alt="SoftwareSphere.in" fill className="object-contain" />
          </div>
          <h1 className="text-2xl font-black text-white">Create your account</h1>
          <p className="text-slate-400 text-sm mt-1">Join SoftwareSphere.in today</p>
        </div>

        <div className="card p-8">
          {error && (
            <div className="mb-5 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: 'Full Name', name: 'name', type: 'text', icon: <User size={15} />, placeholder: 'John Doe' },
              { label: 'Email Address', name: 'email', type: 'email', icon: <Mail size={15} />, placeholder: 'you@example.com' },
              { label: 'Company', name: 'company', type: 'text', icon: <Building2 size={15} />, placeholder: 'Your Company (optional)' },
              { label: 'Password', name: 'password', type: 'password', icon: <Lock size={15} />, placeholder: '••••••••' },
              { label: 'Confirm Password', name: 'confirmPassword', type: 'password', icon: <Lock size={15} />, placeholder: '••••••••' },
            ].map(({ label, name, type, icon, placeholder }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">{label}</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">{icon}</span>
                  <input
                    type={type}
                    name={name}
                    value={(formData as any)[name]}
                    onChange={handleChange}
                    required={name !== 'company'}
                    className={inputClass}
                    style={inputStyle}
                    placeholder={placeholder}
                  />
                </div>
              </div>
            ))}

            <div className="flex items-start gap-2 text-sm pt-1">
              <input type="checkbox" required className="w-3.5 h-3.5 accent-violet-500 rounded mt-0.5 flex-shrink-0" />
              <span className="text-slate-400 text-xs">
                I agree to the{' '}
                <Link href="/terms" className="text-violet-400 hover:text-violet-300 transition">Terms of Service</Link>
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary flex items-center justify-center gap-2 py-3 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loading ? 'Creating Account...' : (<>Create Account <ArrowRight size={15} /></>)}
            </button>
          </form>

          <p className="text-center text-slate-500 text-sm mt-6">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-violet-400 hover:text-violet-300 font-medium transition">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}