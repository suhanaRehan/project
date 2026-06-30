import type { MetadataRoute } from 'next'
import { categories } from '@/lib/services-data'

const baseUrl = 'https://www.softwaresphere.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/services', '/contact'].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  const categoryRoutes = categories.map((c) => ({
    url: `${baseUrl}/services/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const subServiceRoutes = categories.flatMap((c) =>
    c.subServices.map((s) => ({
      url: `${baseUrl}/services/${c.slug}/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  return [...staticRoutes, ...categoryRoutes, ...subServiceRoutes]
}
