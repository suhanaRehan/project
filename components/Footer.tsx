import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Twitter, Github, Mail } from 'lucide-react'
import { categories } from '@/lib/services-data'

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-bg-soft">
      <div className="container-page py-16">
        <div className="grid lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-brand-400/40">
                <Image src="/logo.jpeg" alt="SoftwareSphere" width={36} height={36} className="object-cover" />
              </div>
              <span className="font-semibold text-base">SoftwareSphere</span>
            </Link>
            <p className="mt-4 text-sm text-ink-soft leading-relaxed max-w-xs">
              Enterprise cybersecurity, software engineering, AI, and IT solutions for organizations that cannot
              afford to get technology wrong.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-9 h-9 rounded-full border border-hairline flex items-center justify-center text-ink-faint hover:text-brand-500 hover:border-brand-400/50 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {categories.map((cat) => (
            <div key={cat.slug}>
              <h4 className="text-sm font-semibold mb-4">{cat.shortName}</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href={`/services/${cat.slug}`} className="text-sm text-ink-soft hover:text-brand-500 transition-colors">
                    Overview
                  </Link>
                </li>
                {cat.subServices.slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${cat.slug}/${s.slug}`}
                      className="text-sm text-ink-soft hover:text-brand-500 transition-colors"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} SoftwareSphere. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-xs text-ink-faint hover:text-brand-500 transition-colors">
              Contact
            </Link>
            <span className="text-xs text-ink-faint">Privacy Policy</span>
            <span className="text-xs text-ink-faint">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
