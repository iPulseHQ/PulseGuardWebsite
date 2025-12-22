import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ipulse.one'

  // Static pages
  const staticRoutes = [
    '',
    '/pulseguard',
    '/pulsefiles',
    '/pulseqr',
    '/pricing',
    '/about',
    '/blog',
    '/changelog',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route.includes('pulseguard') ? 0.9 : 0.8,
  }))

  // Dynamic blog posts
  const blogPosts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogPosts]
}
