import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        // If you ever add a blog, you can allow specific paths here
      ],
      disallow: [
        '/api/',       // Block Next.js API routes
        '/?s=',        // Blocks search queries (from your provided list)
        '/search/',    // Blocks search result pages (from your provided list)
        '/*?replytocom', // Blocks comment reply parameters (from your provided list)
      ],
    },
    sitemap: 'https://www.mintrixmaintenance.com/sitemap.xml',
  };
}