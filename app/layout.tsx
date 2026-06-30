import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeScript from '@/components/ThemeScript'

const siteUrl = 'https://www.softwaresphere.in'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SoftwareSphere — Enterprise Cybersecurity, Software & AI Solutions',
    template: '%s | SoftwareSphere',
  },
  description:
    'SoftwareSphere delivers enterprise cybersecurity, software development, AI agents, and IT managed services for organizations that demand reliability and measurable results.',
  keywords: [
    'enterprise cybersecurity',
    'software development company',
    'AI solutions for enterprise',
    'managed IT services',
    'cloud security',
    'digital transformation consulting',
  ],
  openGraph: {
    type: 'website',
    siteName: 'SoftwareSphere',
    title: 'SoftwareSphere — Enterprise Cybersecurity, Software & AI Solutions',
    description:
      'Enterprise cybersecurity, software development, AI agents, and IT managed services built for measurable business outcomes.',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SoftwareSphere — Enterprise Technology Solutions',
    description: 'Cybersecurity, software development, AI agents, and IT solutions for the modern enterprise.',
  },
  icons: {
    icon: '/logo.jpeg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
