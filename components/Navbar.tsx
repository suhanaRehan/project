'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { categories } from '@/lib/services-data'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null)
    }
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('keydown', escHandler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('keydown', escHandler)
    }
  }, [])

  useEffect(() => {
    setOpen(null)
    setMobileOpen(false)
  }, [pathname])

  return (
    <div ref={navRef} className="relative z-50">
      <nav className="sticky top-0 z-50 glass">
        <div className="container-page h-16 flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0" onClick={() => setOpen(null)}>
            <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 border border-brand-400/40">
              <Image src="/logo.jpeg" alt="SoftwareSphere" width={36} height={36} className="object-cover" />
            </div>
            <span className="font-semibold text-base tracking-tight hidden sm:inline">SoftwareSphere</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 flex-1">
            {categories.map((cat) => {
              const isActive = pathname.startsWith(`/services/${cat.slug}`)
              return (
                <button
                  key={cat.slug}
                  aria-expanded={open === cat.slug}
                  aria-haspopup="true"
                  onClick={() => setOpen(open === cat.slug ? null : cat.slug)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowDown') {
                      e.preventDefault()
                      setOpen(cat.slug)
                    }
                  }}
                  className={`flex items-center gap-1.5 text-sm px-3.5 py-2 rounded-full transition-colors whitespace-nowrap ${
                    open === cat.slug || isActive
                      ? 'text-brand-500 dark:text-brand-300 bg-brand-500/10'
                      : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {cat.navLabel}
                  <ChevronDown
                    size={13}
                    className="transition-transform"
                    style={{ transform: open === cat.slug ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
              )
            })}
            <Link
              href="/contact"
              className={`text-sm px-3.5 py-2 rounded-full transition-colors whitespace-nowrap ${
                pathname === '/contact' ? 'text-brand-500 dark:text-brand-300 bg-brand-500/10' : 'text-ink-soft hover:text-ink'
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-3 ml-auto flex-shrink-0">
            <ThemeToggle />
            <Link href="/contact" className="btn-primary btn-sm">
              Get Started
            </Link>
          </div>

          <div className="lg:hidden ml-auto flex items-center gap-2">
            <ThemeToggle />
            <button
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="text-ink-soft p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Desktop mega dropdown */}
      <div
        className="absolute left-0 right-0 z-40 overflow-hidden transition-[max-height,opacity] duration-300 ease-out"
        style={{
          maxHeight: open ? '480px' : '0px',
          opacity: open ? 1 : 0,
        }}
      >
        {open &&
          categories
            .filter((c) => c.slug === open)
            .map((cat) => (
              <div key={cat.slug} className="glass border-t-2 border-brand-500">
                <div className="container-page py-8">
                  <div className="grid gap-x-8 gap-y-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                    {cat.subServices.map((s) => {
                      const href = `/services/${cat.slug}/${s.slug}`
                      const isActive = pathname === href
                      return (
                        <Link
                          key={s.slug}
                          href={href}
                          onClick={() => setOpen(null)}
                          className={`block text-sm py-2 border-b border-hairline transition-colors ${
                            isActive ? 'text-brand-500 dark:text-brand-300 font-medium' : 'text-ink-soft hover:text-ink'
                          }`}
                        >
                          {s.title}
                        </Link>
                      )
                    })}
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-5 border-t border-hairline">
                    <Link
                      href={`/services/${cat.slug}`}
                      onClick={() => setOpen(null)}
                      className="text-sm font-medium text-brand-500 dark:text-brand-300 hover:text-brand-600"
                    >
                      View all {cat.shortName} services →
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setOpen(null)}
                      className="text-xs text-ink-faint hover:text-ink-soft hidden sm:inline"
                    >
                      Not sure what you need? Talk to an expert.
                    </Link>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass border-t border-hairline max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-5 py-4 space-y-1">
            {categories.map((cat) => (
              <div key={cat.slug}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === cat.slug ? null : cat.slug)}
                  className="w-full flex items-center justify-between text-sm font-medium px-2 py-3"
                >
                  {cat.navLabel}
                  <ChevronDown
                    size={15}
                    className="text-brand-500 transition-transform"
                    style={{ transform: mobileExpanded === cat.slug ? 'rotate(180deg)' : 'rotate(0)' }}
                  />
                </button>
                {mobileExpanded === cat.slug && (
                  <div className="pl-3 pb-2 space-y-0.5">
                    <Link
                      href={`/services/${cat.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block text-xs py-2 px-2 text-brand-500 dark:text-brand-300 font-medium"
                    >
                      Category overview
                    </Link>
                    {cat.subServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${cat.slug}/${s.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="block text-xs py-2 px-2 text-ink-soft"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-sm font-medium px-2 py-3">
              Contact
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full mt-2">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
