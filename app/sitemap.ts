import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dilawarshah.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/journey'];
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'monthly' : 'weekly',
    priority: route === '' ? 1 : 0.7,
  }));
}
