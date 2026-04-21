<script lang="ts">
	import ContactFooter from '$lib/components/ContactFooter.svelte';
	import { _, locale } from 'svelte-i18n';
	import type { Post } from '$lib/types';

	let posts: Post[] = $state([]);

	$effect(() => {
		getPosts().then((data) => {
			posts = data;
		});
	});

	async function getPosts() {
		const response = await fetch(`/api/posts`);
		return await response.json();
	}

	function formatDate(dateStr: string, loc: string | null | undefined): string {
		return new Date(dateStr).toLocaleDateString(loc ?? 'en', { month: 'short', year: 'numeric', timeZone: 'UTC' });
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function readTime(_post: Post): string {
		return '8 MIN';
	}
</script>

<svelte:head>
	<title>Blog — Jan Komínek, Software Engineer</title>
	<meta
		name="description"
		content="Blog by Jan Komínek — Senior Frontend / Fullstack Engineer. Articles on web development, DevOps, Traefik, Docker, and system architecture."
	/>
	<meta property="og:title" content="Blog — Jan Komínek, Software Engineer" />
	<meta property="og:description" content="Articles on web development, DevOps, and system architecture by Jan Komínek, Software Engineer." />
	<meta property="og:url" content="https://jankominek.com/blog" />
</svelte:head>

<div class="mx-auto max-w-(--max) px-8 max-sm:px-5">
	<div class="flex items-end justify-between gap-6 border-b border-(--line) pt-10 pb-5">
		<div>
			<div class="mono mb-1.5 text-[11px] tracking-widest text-(--fg-4) uppercase">{$_('blog.writingLabel')}</div>
			<h1 class="serif m-0 text-[clamp(28px,3.5vw,44px)] font-light tracking-[-0.02em]">{$_('blog.h1')}</h1>
		</div>
	</div>

	<div class="mb-20 flex flex-col">
		{#each posts as post (post.slug)}
			<a
				href={`/blog/${post.slug}`}
				class="grid grid-cols-[120px_1fr_auto_auto] items-center gap-7 border-t border-(--line) py-6 text-(--fg) no-underline transition-[padding-left] duration-200 last:border-b last:border-(--line) hover:pl-2.5 max-md:grid-cols-1 max-md:gap-1.5 max-md:py-4.5"
			>
				<div class="mono text-[12px] tracking-[0.04em] text-(--fg-4)">{formatDate(post.date, $locale)}</div>
				<div>
					<h2 class="serif m-0 text-[20px] leading-[1.3] font-light tracking-[-0.01em]">{post.title}</h2>
				</div>
				<div class="mono flex gap-1 text-[11px] whitespace-nowrap text-(--fg-4)">
					{#each post.tags as tag (tag)}
						<span>{tag}</span>
						<span class="text-(--fg-5)">/</span>
					{/each}
				</div>
				<div class="mono text-[11px] tracking-[0.04em] whitespace-nowrap text-(--fg-4)">{readTime(post)}</div>
			</a>
		{/each}

		<!-- Upcoming drafts -->
		<div
			class="grid cursor-default grid-cols-[120px_1fr_auto_auto] items-center gap-7 border-t border-(--line) py-6 text-(--fg) opacity-45 last:border-b last:border-(--line) max-md:grid-cols-1 max-md:gap-1.5 max-md:py-4.5"
		>
			<div class="mono text-[12px] tracking-[0.04em] text-(--fg-4)">{$_('blog.coming')}</div>
			<div>
				<h2 class="serif m-0 text-[20px] leading-[1.3] font-light tracking-[-0.01em]">
					Building a Raspberry Pi departure board — displays, PIR motion sensors, and Rust — from scratch.
				</h2>
			</div>
			<div class="mono flex gap-1 text-[11px] whitespace-nowrap text-(--fg-4)">
				<span>EN</span><span class="text-(--fg-5)">/</span><span>RUST</span><span class="text-(--fg-5)">/</span><span>EMBEDDED</span>
			</div>
			<div class="mono text-[11px] tracking-[0.04em] whitespace-nowrap text-(--fg-4)">{$_('blog.draft')}</div>
		</div>
	</div>

	<div class="pb-20">
		<ContactFooter />
	</div>
</div>
