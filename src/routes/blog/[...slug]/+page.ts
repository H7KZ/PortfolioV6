import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Post } from '$lib/types';

export const prerender = true;

export async function entries() {
	const modules = import.meta.glob('/src/posts/**/*.md');
	return Object.keys(modules)
		.map((path) => path.replace('/src/posts/', '').replace('.md', ''))
		.filter((slug) => !slug.split('/').some((part) => part.startsWith('_')))
		.map((slug) => ({ slug }));
}

export interface PostData {
	slug: string;
	meta: Post;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	content: any;
}

export const load: PageLoad = async ({ params }): Promise<PostData> => {
	const modules = import.meta.glob('../../../posts/**/*.md');
	const path = `../../../posts/${params.slug}.md`;

	for (const p in modules) {
		if (p === path) {
			const post = (await modules[p]()) as { metadata: Post; default: unknown };

			return {
				slug: params.slug,
				meta: post.metadata,
				content: post.default
			};
		}
	}

	error(404, `Could not find ${params.slug}`);
};
