import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        // '/handler/',
        '/admin/',
        '/auth/sign-in/',
        '/auth/sign-up/',
      ],
    },
    sitemap: 'https://thelongemergency.com/sitemap.xml',
  }
}