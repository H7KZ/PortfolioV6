import type { RequestHandler } from '@sveltejs/kit';
import type { Post } from '$lib/types';

const SITE = 'https://jankominek.com';
const AUTHOR = 'Jan Komínek';
const AUTHOR_EMAIL = 'contact@jankominek.com';

function escapeXml(str: string): string {
	return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

export const prerender = true;

export const GET: RequestHandler = async () => {
	const modules = import.meta.glob('/src/posts/**/*.md', { eager: true });

	const posts: (Post & { slug: string })[] = Object.entries(modules)
		.map(([path, file]) => {
			const f = file as { metadata?: Post };
			const slug = path.replace('/src/posts/', '').replace('.md', '');
			if (!f.metadata) return null;
			if (slug.split('/').some((part) => part.startsWith('_'))) return null;
			return { ...f.metadata, slug };
		})
		.filter((p): p is Post & { slug: string } => p !== null)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	const items = posts
		.map((post) => {
			const url = `${SITE}/blog/${post.slug}`;
			const pubDate = new Date(post.date).toUTCString();
			const description = post.description ?? post.tags.filter((t) => t !== 'EN').join(', ');
			const categories = post.tags
				.filter((t) => t !== 'EN')
				.map((t) => `    <category>${escapeXml(t)}</category>`)
				.join('\n');

			return `  <item>
    <title>${escapeXml(post.title)}</title>
    <link>${url}</link>
    <guid isPermaLink="true">${url}</guid>
    <description>${escapeXml(description)}</description>
    <pubDate>${pubDate}</pubDate>
    <author>${AUTHOR_EMAIL} (${AUTHOR})</author>
${categories}
  </item>`;
		})
		.join('\n');

	const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${AUTHOR} — Engineering Blog</title>
    <link>${SITE}/blog</link>
    <description>DevOps, SvelteKit, TypeScript, and system architecture — by Jan Komínek, Senior Frontend / Fullstack Engineer based in Prague.</description>
    <language>en</language>
    <managingEditor>${AUTHOR_EMAIL} (${AUTHOR})</managingEditor>
    <webMaster>${AUTHOR_EMAIL} (${AUTHOR})</webMaster>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

	return new Response(feed, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
};
