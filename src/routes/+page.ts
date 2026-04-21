import type { Project } from '$lib/types';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async () => {
	const paths = import.meta.glob('/src/projects/**/*.md', { eager: true });
	const byLocale: Record<string, Project[]> = {};

	for (const path in paths) {
		const file = paths[path] as { metadata?: Omit<Project, 'slug'> };
		const parts = path.split('/');
		const loc = parts.at(-1)?.replace('.md', '') ?? 'en';
		const slug = parts.at(-2);

		if (slug && file.metadata) {
			if (!byLocale[loc]) byLocale[loc] = [];
			byLocale[loc].push({ ...file.metadata, slug });
		}
	}

	for (const loc in byLocale) {
		byLocale[loc].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
	}

	return { projects: byLocale };
};
