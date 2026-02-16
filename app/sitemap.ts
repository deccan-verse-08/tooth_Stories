import { MetadataRoute } from 'next';
import { services } from '@/lib/servicesData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://toothstories.in'; // Replace with your actual domain

    // Static routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/services',
        '/blogs',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic service routes
    const serviceRoutes = services.map((service) => ({
        url: `${baseUrl}/services/${service.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...routes, ...serviceRoutes];
}
