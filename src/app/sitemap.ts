import { MetadataRoute } from 'next';
import { services } from '@/lib/services-data'; // 🚨 Ensure this path points to your services array

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mintrixmaintenance.com';
  const lastModified = new Date();

  // 1. Define your Static Routes (Manual)
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/services`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/solutions`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/careers`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/booking`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/terms`, lastModified, priority: 0.8 },
    // Query parameter pages
    { url: `${baseUrl}/booking?pkg=express-dispatch`, lastModified, priority: 0.7 },
    { url: `${baseUrl}/booking?pkg=priority-next-day`, lastModified, priority: 0.7 },
    { url: `${baseUrl}/booking?pkg=preventive-maintenance`, lastModified, priority: 0.7 },
  ];

  // 2. Automatically Generate Service Routes (Dynamic)
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: lastModified,
    priority: 0.8,
  }));

  // 3. Combine them all
  return [...staticRoutes, ...serviceRoutes];
}