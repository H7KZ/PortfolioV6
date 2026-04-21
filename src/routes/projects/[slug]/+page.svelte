<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import ContactFooter from '$lib/components/ContactFooter.svelte';
	import { locale } from 'svelte-i18n';
	import type { ProjectData } from './+page';

	let { data }: { data: ProjectData } = $props();

	$effect(() => {
		const loc = $locale;
		if (loc && loc !== data.locale && browser) {
			goto(`/projects/${data.slug}?locale=${loc}`, { invalidateAll: true });
		}
	});

	function formatDate(dateStr: string, loc: string | null | undefined): string {
		return new Date(dateStr).toLocaleDateString(loc ?? 'en', { month: 'long', year: 'numeric', timeZone: 'UTC' });
	}
</script>

<svelte:head>
	<title>{data.meta.title} — Jan Komínek</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.tags?.join(', ')} />
	<meta property="og:url" content={`https://jankominek.com/projects/${data.slug}`} />
	<meta property="og:image" content={data.meta.thumbnail} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:image" content={data.meta.thumbnail} />
</svelte:head>

<div class="mx-auto max-w-(--max) px-8 max-sm:px-5">
	<div class="mx-auto max-w-200 pt-10">
		<a href="/" class="mono mb-8 inline-block text-[12px] tracking-[0.06em] text-(--fg-4) no-underline transition-colors duration-150 hover:text-(--fg)"
			>← Work</a
		>

		<header class="mb-8">
			<div class="mb-4 flex flex-wrap items-center gap-1.5">
				{#each data.meta.tags as tag (tag)}
					<span class="chip">{tag}</span>
				{/each}
				<span class="mono ml-1 text-[11px] text-(--fg-4)">{formatDate(data.meta.date, $locale)}</span>
			</div>
			<h1 class="serif m-0 text-[clamp(28px,5vw,48px)] leading-[1.1] tracking-[-0.025em] text-(--fg)">{data.meta.title}</h1>
		</header>

		{#if data.meta.thumbnail}
			<div class="mb-12 overflow-hidden rounded-lg border border-(--line)">
				<img src={data.meta.thumbnail} alt={data.meta.title} class="block h-auto w-full" />
			</div>
		{/if}

		<article
			class="project-prose prose prose-neutral prose-invert prose-code:bg-neutral-800! prose-pre:bg-neutral-800! w-full text-[16px] leading-[1.7] text-(--fg-2)"
		>
			<data.content />
		</article>

		<ContactFooter />
	</div>
</div>

<style>
	/* MDSvex prose overrides — must use :global() since markdown is rendered at runtime */
	.project-prose :global(h1),
	.project-prose :global(h2),
	.project-prose :global(h3),
	.project-prose :global(h4) {
		color: var(--fg);
		font-family: var(--font-serif), serif;
		font-weight: 300;
		letter-spacing: -0.02em;
	}

	.project-prose :global(p) {
		color: var(--fg-2);
	}

	.project-prose :global(a) {
		color: var(--accent);
		text-decoration-color: var(--accent-ring);
	}

	.project-prose :global(a:hover) {
		text-decoration-color: var(--accent);
	}

	.project-prose :global(hr) {
		border-color: var(--line);
	}

	.project-prose :global(blockquote) {
		border-left-color: var(--accent-ring);
		color: var(--fg-3);
	}

	.project-prose :global(pre),
	.project-prose :global(code) {
		background: var(--bg-3) !important;
		border: 1px solid var(--line);
	}

	.project-prose :global(img) {
		border-radius: var(--radius);
		border: 1px solid var(--line);
	}

	.project-prose :global(table th) {
		color: var(--fg);
		border-color: var(--line-2);
	}

	.project-prose :global(table td) {
		border-color: var(--line);
	}

	/* Inline Tailwind classes used inside MDSvex content */
	.project-prose :global(.bg-neutral-900) {
		background: var(--bg-2) !important;
		border: 1px solid var(--line);
		border-radius: var(--radius-lg);
	}
</style>
