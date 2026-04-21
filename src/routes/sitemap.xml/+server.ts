import type { RequestHandler } from '@sveltejs/kit';

const SITE = 'https://jankominek.com';
const BUILD_DATE = new Date().toISOString().split('T')[0];

function url(loc: string, opts: { priority: string; changefreq: string; hreflang?: boolean; hreflangPath?: string }): string {
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
    <lastmod>${BUILD_DATE}</lastmod>
    <changefreq>${opts.changefreq}</changefreq>
    <priority>${opts.priority}</priority>${hreflang}
  </url>`;
}

export const GET: RequestHandler = async () => {
	// Collect all project slugs (unique, from en.md files)
	const projectModules = import.meta.glob('/src/projects/*/en.md');
	const projectSlugs = Object.keys(projectModules).map((p) => p.split('/').at(-2)!);

	// Collect all published blog post slugs (skip _ prefixed)
	const postModules = import.meta.glob('/src/posts/**/*.md');
	const postSlugs = Object.keys(postModules)
		.map((p) => {
			return p.replace('/src/posts/', '').replace('.md', '');
		})
		.filter((s) => !s.split('/').some((part) => part.startsWith('_')));

	const urls = [
		url('/', { priority: '1.0', changefreq: 'weekly', hreflang: true, hreflangPath: '/' }),
		url('/resume', {
			priority: '0.9',
			changefreq: 'monthly',
			hreflang: true,
			hreflangPath: '/resume'
		}),
		url('/contact', { priority: '0.8', changefreq: 'monthly', hreflang: false }),
		url('/blog', { priority: '0.7', changefreq: 'weekly', hreflang: false }),
		...projectSlugs.map((slug) =>
			url(`/projects/${slug}`, {
				priority: '0.8',
				changefreq: 'monthly',
				hreflang: true,
				hreflangPath: `/projects/${slug}`
			})
		),
		...postSlugs.map((slug) => url(`/blog/${slug}`, { priority: '0.6', changefreq: 'yearly', hreflang: false }))
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
