import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Project } from '$lib/types';

export const prerender = true;

export async function entries() {
	const modules = import.meta.glob('/src/projects/*/en.md');
	return Object.keys(modules).map((path) => ({ slug: path.split('/').at(-2)! }));
}

export interface ProjectData {
	slug: string;
	locale: string;
	meta: Project;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	content: any;
}

export const load: PageLoad = async ({ params, url }): Promise<ProjectData> => {
	let localeParam: string;
	try {
		localeParam = url.searchParams.get('locale') ?? 'en';
	} catch {
		localeParam = 'en';
	}

	let match = localeParam.match(/^[a-z]+(?=[-_])/i);

	if (!match) match = localeParam.match(/^[a-z]+/i);

	const locale = match ? match[0].toLowerCase() : 'en';

	try {
		const post = await import(`../../../projects/${params.slug}/${locale}.md`);

		return {
			slug: params.slug,
			locale: locale,
			meta: post.metadata,
			content: post.default
		};
	} catch {
		error(404, `Could not find ${params.slug}`);
	}
};
