<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import ContactFooter from '$lib/components/ContactFooter.svelte';
	import { locale } from 'svelte-i18n';
	import type { ProjectData } from './+page';
	import { formatDate } from '$lib/utils/formatDate';

	let { data }: { data: ProjectData } = $props();

	$effect(() => {
		const loc = $locale;
		if (loc && loc !== data.locale && browser) {
			goto(`/projects/${data.slug}?locale=${loc}`, { invalidateAll: true });
		}
	});

	const SITE = 'https://jankominek.com';
	const projectUrl = $derived(`${SITE}/projects/${data.slug}`);
	const metaDescription = $derived(data.meta.tags?.filter((t) => !['Work', 'Personal'].includes(t)).join(', ') ?? data.meta.title);

	const jsonLd = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'CreativeWork',
			name: data.meta.title,
			url: projectUrl,
			dateCreated: data.meta.date,
			creator: {
				'@type': 'Person',
				name: 'Jan Komínek',
				url: SITE
			},
			keywords: metaDescription,
			image: data.meta.thumbnail ?? undefined,
			genre: data.meta.tags?.join(', ')
		})
	);
	const jsonLdHtml = $derived(`<script type="application/ld+json">${jsonLd}</` + `script>`);

	const isRich = $derived(!!data.meta.lede);

	const metaItems = $derived(
		[
			data.meta.role ? { label: 'Role', value: data.meta.role } : null,
			data.meta.team ? { label: 'Team', value: data.meta.team } : null,
			data.meta.timeline ? { label: 'Timeline', value: data.meta.timeline } : null,
			data.meta.sector ? { label: 'Sector', value: data.meta.sector } : null
		].filter(Boolean) as { label: string; value: string }[]
	);
</script>

<svelte:head>
	<title>{data.meta.title} — Jan Komínek</title>
	<meta name="description" content="{data.meta.title} — {metaDescription}. A project by Jan Komínek, Senior Frontend / Fullstack Engineer." />

	<meta property="og:type" content="article" />
	<meta property="og:title" content="{data.meta.title} — Jan Komínek" />
	<meta property="og:description" content="{data.meta.title} — {metaDescription}. A project by Jan Komínek." />
	<meta property="og:url" content={projectUrl} />
	<meta property="og:site_name" content="Jan Komínek" />
	{#if data.meta.thumbnail}
		<meta property="og:image" content={data.meta.thumbnail} />
	{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{data.meta.title} — Jan Komínek" />
	<meta name="twitter:description" content="{data.meta.title} — {metaDescription}." />
	{#if data.meta.thumbnail}
		<meta name="twitter:image" content={data.meta.thumbnail} />
	{/if}

	<link rel="canonical" href={projectUrl} />

	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLdHtml}
</svelte:head>

{#if isRich}
	<div class="mx-auto max-w-(--max) px-8 pt-10 pb-0 max-sm:px-5">
		<a href="/" class="mono mb-10 inline-block text-[12px] tracking-[0.06em] text-(--fg-4) no-underline transition-colors duration-150 hover:text-(--fg)"
			>← Work</a
		>

		<div class="mb-16 grid grid-cols-[2fr_1fr] gap-12 border-b border-(--line) pb-8 max-md:grid-cols-1 max-md:gap-8">
			<div>
				<div class="mb-5 flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.08em] text-(--fg-4) uppercase">
					<span>Case Study</span>
					{#if data.meta.client}
						<span class="inline-block h-1 w-1 rounded-full bg-(--fg-5)"></span>
						<span>{data.meta.client}</span>
					{/if}
					<span class="inline-block h-1 w-1 rounded-full bg-(--fg-5)"></span>
					<span>{formatDate(data.meta.date, 'en', { year: 'numeric', timeZone: 'UTC' })}</span>
				</div>
				<h1 class="serif m-0 mb-5 text-[clamp(40px,6vw,80px)] leading-[1] font-light tracking-[-0.03em] text-(--fg)">
					{data.meta.title}<span class="text-(--fg-3)">.</span>
				</h1>
				<p class="m-0 max-w-[640px] text-[clamp(16px,1.5vw,20px)] leading-[1.45] text-(--fg-2)">{data.meta.lede}</p>
			</div>

			{#if metaItems.length > 0}
				<div class="grid grid-cols-2 content-center gap-x-8 gap-y-6 max-sm:grid-cols-2">
					{#each metaItems as item (item.label)}
						<div>
							<div class="mb-1 font-mono text-[10px] tracking-[0.1em] text-(--fg-4) uppercase">{item.label}</div>
							<div class="text-[14px] text-(--fg)">{item.value}</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>

		{#if data.meta.thumbnail}
			<div class="mb-16 aspect-[16/7] overflow-hidden rounded-(--radius-lg) border border-(--line)">
				<img src={data.meta.thumbnail} alt={data.meta.title} class="h-full w-full object-cover" />
			</div>
		{/if}

		{#if data.meta.impact?.length}
			<div
				class="mb-16 grid overflow-hidden rounded-(--radius) border border-(--line) bg-(--bg-2)"
				style="grid-template-columns: repeat({data.meta.impact.length}, 1fr)"
			>
				{#each data.meta.impact as item, i (item.label)}
					<div
						class="p-7 {i < (data.meta.impact?.length ?? 0) - 1
							? 'border-r border-(--line)'
							: ''} last:border-0 max-sm:border-r-0 max-sm:border-b max-sm:border-(--line)"
					>
						<div class="mb-3.5 font-mono text-[10px] tracking-[0.1em] text-(--fg-4) uppercase">◆ {item.label}</div>
						<div class="serif text-[36px] leading-[1] font-light tracking-[-0.02em] text-(--fg)">{item.value}</div>
						<div class="mt-1.5 font-mono text-[12px] text-(--fg-4)">{item.sub}</div>
					</div>
				{/each}
			</div>
		{/if}

		<div class="mb-24 grid grid-cols-[200px_1fr] gap-12 max-md:grid-cols-1 max-md:gap-4">
			<div class="pt-2 font-mono text-[11px] tracking-[0.1em] text-(--fg-4) uppercase">The challenge</div>
			<article
				class="project-prose prose prose-neutral prose-invert prose-code:bg-neutral-800! prose-pre:bg-neutral-800! max-w-[680px] text-[15px] leading-[1.7] text-(--fg-2)"
			>
				<data.content />
			</article>
		</div>

		{#if data.meta.contributions?.length}
			<div class="mb-24 grid grid-cols-[200px_1fr] gap-12 max-md:grid-cols-1 max-md:gap-4">
				<div class="pt-2 font-mono text-[11px] tracking-[0.1em] text-(--fg-4) uppercase">What I owned</div>
				<div class="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
					{#each data.meta.contributions as c (c.num)}
						<div class="rounded-(--radius) border border-(--line) bg-(--bg-2) p-5">
							<div class="mb-3 font-mono text-[11px] tracking-[0.08em] text-(--accent)">{c.num}</div>
							<h4 class="m-0 mb-2 text-[15px] font-medium text-(--fg)">{c.title}</h4>
							<p class="m-0 text-[13px] leading-[1.5] text-(--fg-3)">{c.body}</p>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		{#if data.meta.stack?.length}
			<div class="mb-16 grid grid-cols-[200px_1fr] gap-12 max-md:grid-cols-1 max-md:gap-4">
				<div class="pt-2 font-mono text-[11px] tracking-[0.1em] text-(--fg-4) uppercase">Stack</div>
				<div class="flex flex-wrap gap-1.5">
					{#each data.meta.stack as tech (tech)}
						<span class="chip">{tech}</span>
					{/each}
				</div>
			</div>
		{/if}

		{#if data.meta.gallery?.length}
			<div class="mb-16 grid gap-3 max-sm:grid-cols-1" style="grid-template-columns: repeat({Math.min(data.meta.gallery.length, 3)}, 1fr)">
				{#each data.meta.gallery as img (img)}
					<div class="aspect-video overflow-hidden rounded-(--radius) border border-(--line)">
						<img src={img} alt="" class="h-full w-full object-cover" loading="lazy" />
					</div>
				{/each}
			</div>
		{/if}

		<ContactFooter />
	</div>
{:else}
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
					<span class="mono ml-1 text-[11px] text-(--fg-4)"
						>{formatDate(data.meta.date, $locale, { month: 'long', year: 'numeric', timeZone: 'UTC' })}</span
					>
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
{/if}

<style>
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

	.project-prose :global(.bg-neutral-900) {
		background: var(--bg-2) !important;
		border: 1px solid var(--line);
		border-radius: var(--radius-lg);
	}
</style>
