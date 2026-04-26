import type { RequestHandler } from '@sveltejs/kit';
import type { Post, Project } from '$lib/types';

const SITE = 'https://jankominek.com';
const BUILD_DATE = new Date().toISOString().split('T')[0];

function url(
	loc: string,
	opts: {
		priority: string;
		changefreq: string;
		lastmod?: string;
		hreflang?: boolean;
		hreflangPath?: string;
	}
): string {
	const hreflangPath = opts.hreflangPath ?? loc;
	const hreflang = opts.hreflang
		? `
    <xhtml:link rel="alternate" hreflang="en" href="${SITE}${hreflangPath}?locale=en"/>
    <xhtml:link rel="alternate" hreflang="cs" href="${SITE}${hreflangPath}?locale=cs"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${hreflangPath}"/>`
		: '';
	return `
  <url>
    <loc>${SITE}${loc}</loc>
    <lastmod>${opts.lastmod ?? BUILD_DATE}</lastmod>
    <changefreq>${opts.changefreq}</changefreq>
    <priority>${opts.priority}</priority>${hreflang}
  </url>`;
}

export const GET: RequestHandler = async () => {
	// Projects — eager load for dates
	const projectModules = import.meta.glob('/src/projects/*/en.md', { eager: true });
	const projects = Object.entries(projectModules).map(([path, file]) => {
		const f = file as { metadata?: Project };
		const slug = path.split('/').at(-2)!;
		return { slug, date: f.metadata?.date ?? BUILD_DATE };
	});

	// Blog posts — eager load for dates, skip _-prefixed segments
	const postModules = import.meta.glob('/src/posts/**/*.md', { eager: true });
	const posts = Object.entries(postModules)
		.map(([path, file]) => {
			const f = file as { metadata?: Post };
			const slug = path.replace('/src/posts/', '').replace('.md', '');
			if (slug.split('/').some((part) => part.startsWith('_'))) return null;
			return { slug, date: f.metadata?.date ?? BUILD_DATE };
		})
		.filter((p): p is { slug: string; date: string } => p !== null);

	const urls = [
		url('/', { priority: '1.0', changefreq: 'weekly', hreflang: true, hreflangPath: '/' }),
		url('/resume', { priority: '0.9', changefreq: 'monthly', hreflang: true, hreflangPath: '/resume' }),
		url('/contact', { priority: '0.8', changefreq: 'monthly', hreflang: false }),
		url('/blog', { priority: '0.7', changefreq: 'weekly', hreflang: false }),
		...projects.map((p) =>
			url(`/projects/${p.slug}`, {
				priority: '0.8',
				changefreq: 'monthly',
				lastmod: p.date,
				hreflang: true,
				hreflangPath: `/projects/${p.slug}`
			})
		),
		...posts.map((p) =>
			url(`/blog/${p.slug}`, {
				priority: '0.6',
				changefreq: 'yearly',
				lastmod: p.date,
				hreflang: false
			})
		)
	].join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">${urls}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
};
