import type { Post } from '$lib/types';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async () => {
	const paths = import.meta.glob('/src/posts/*.md', { eager: true });
	const posts: Post[] = [];

	for (const path in paths) {
		const file = paths[path] as { metadata?: Omit<Post, 'slug'> };
		const fileName = path.split('/').at(-1);
		if (!fileName || fileName.startsWith('_')) continue;

		const slug = fileName.replace('.md', '');
		if (file.metadata) posts.push({ ...file.metadata, slug });
	}

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return { posts };
};
