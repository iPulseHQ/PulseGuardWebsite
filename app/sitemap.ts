import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ipulse.one'

  // Static pages
  const routes = [
    '',
    '/pulseguard',
    '/pulsefiles',
    '/pulseqr',
    '/pricing',
    '/about',
    '/blog',
    '/changelog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route.includes('pulseguard') ? 0.9 : 0.8,
  }))

  return routes
}
