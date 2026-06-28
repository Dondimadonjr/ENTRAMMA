import type { MetadataRoute } from 'next';
import { business } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: business.url,
      lastModified: '2026-06-28',
      changeFrequency: 'monthly',
      priority: 1
    }
  ];
}
