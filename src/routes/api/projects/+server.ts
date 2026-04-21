import type { Project } from '$lib/types';
import { json, type RequestHandler } from '@sveltejs/kit';

const ALLOWED_LOCALES = ['en', 'cs'];

export const GET: RequestHandler = async ({ url }) => {
	const localeParam = url.searchParams.get('locale') ?? 'en';

	let match = localeParam.match(/^[a-z]+(?=[-_])/i);

	if (!match) match = localeParam.match(/^[a-z]+/i);

	const parsedLocale = match ? match[0].toLowerCase() : 'en';
	const locale = ALLOWED_LOCALES.includes(parsedLocale) ? parsedLocale : 'en';

	let projects: Project[] = [];

	let paths = import.meta.glob('../../../projects/**/*.md', { eager: true });

	paths = Object.fromEntries(
		Object.entries(paths).filter(([path]) => {
			const fileLocale = path.split('/').at(-1)?.replace('.md', '');

			if (fileLocale === locale) return true;
		})
	);

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-2);

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Project, 'slug'>;
			const post = { ...metadata, slug } satisfies Project;
			projects.push(post);
		}
	}

	projects = projects.sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

	return json(projects);
};
