import type { RequestHandler } from './$types';

const SITE = 'https://jankominek.com';
const LOCALES = ['en', 'cs'];

const STATIC_PAGES = [
	{ path: '/', priority: '1.0' },
	{ path: '/resume', priority: '0.6' },
	{ path: '/contact', priority: '0.6' }
];

const PROJECT_SLUGS = [
	'kreditozrouti',
	'iont_info',
	'iont_charge',
	'iont_admin',
	'corac_sith',
	'corac_scorecard',
	'disenchantment',
	'noteful',
	'pangolin',
	'portfolio_v4',
	'portfolio_v5'
];

const PROJECT_PAGES = PROJECT_SLUGS.map((slug) => ({
	path: `/projects/${slug}`,
	priority: '0.8'
}));

function renderUrl(path: string, priority: string): string {
	const loc = `${SITE}${path}`;
	const alternates = LOCALES.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${loc}?locale=${l}" />`).join('\n');
	return `  <url>
    <loc>${loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />
  </url>`;
}

export const prerender = true;

export const GET: RequestHandler = () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...STATIC_PAGES, ...PROJECT_PAGES].map(({ path, priority }) => renderUrl(path, priority)).join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'max-age=3600'
		}
	});
};
