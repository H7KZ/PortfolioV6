import type { Post } from '$lib/types';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	let posts: Post[] = [];

	const paths = import.meta.glob(`../../../posts/*.md`, { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const fileName = path.split('/').at(-1);

		if (!fileName || fileName.startsWith('_')) continue;

		const slug = fileName.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			posts.push(post);
		}
	}

	posts = posts.sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());

	return json(posts);
};
