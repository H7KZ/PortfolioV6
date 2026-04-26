<script lang="ts">
	import ContactFooter from '$lib/components/ContactFooter.svelte';
	import type { PostData } from './+page';

	let { data }: { data: PostData } = $props();

	const SITE = 'https://jankominek.com';

	const postUrl = $derived(`${SITE}/blog/${data.slug}`);
	const description = $derived(data.meta.description ?? data.meta.tags.filter((t) => t !== 'EN').join(', '));
	const publishedIso = $derived(new Date(data.meta.date).toISOString());

	const jsonLd = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: data.meta.title,
			description,
			url: postUrl,
			datePublished: publishedIso,
			dateModified: publishedIso,
			author: {
				'@type': 'Person',
				name: data.meta.author ?? 'Jan Komínek',
				url: SITE
			},
			publisher: {
				'@type': 'Person',
				name: 'Jan Komínek',
				url: SITE
			},
			image: data.meta.thumbnail ?? undefined,
			keywords: data.meta.tags.filter((t) => t !== 'EN').join(', '),
			...(data.meta.readingTime ? { timeRequired: `PT${data.meta.readingTime}M` } : {})
		})
	);
	const jsonLdHtml = $derived(`<script type="application/ld+json">${jsonLd}</` + `script>`);
</script>

<svelte:head>
	<title>{data.meta.title} — Jan Komínek</title>
	<meta name="description" content={description} />
	<meta name="author" content={data.meta.author ?? 'Jan Komínek'} />

	<!-- Open Graph -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={postUrl} />
	<meta property="og:site_name" content="Jan Komínek" />
	{#if data.meta.thumbnail}
		<meta property="og:image" content={data.meta.thumbnail} />
	{/if}

	<!-- Article-specific Open Graph -->
	<meta property="article:published_time" content={publishedIso} />
	<meta property="article:author" content="https://www.linkedin.com/in/jan-kominek/" />
	{#each data.meta.tags.filter((t) => t !== 'EN') as tag (tag)}
		<meta property="article:tag" content={tag} />
	{/each}

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={data.meta.title} />
	<meta name="twitter:description" content={description} />
	{#if data.meta.thumbnail}
		<meta name="twitter:image" content={data.meta.thumbnail} />
	{/if}

	<!-- Canonical -->
	<link rel="canonical" href={postUrl} />

	<!-- RSS autodiscovery -->
	<link rel="alternate" type="application/rss+xml" title="Jan Komínek — Engineering Blog" href="/feed.xml" />

	<!-- BlogPosting JSON-LD -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLdHtml}
</svelte:head>

<div class="flex w-full items-center justify-center px-8 max-sm:px-5">
	<div class="flex w-full max-w-360 flex-col gap-56 pt-16 pb-32">
		<article class="flex w-full flex-col items-center">
			<!-- Post metadata -->
			<div class="mono mb-8 flex w-full max-w-270 flex-wrap items-center gap-4 text-[11px] tracking-[0.06em] text-(--fg-4)">
				<time datetime={publishedIso}>
					{new Date(data.meta.date).toLocaleDateString('en-GB', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</time>
				{#if data.meta.readingTime}
					<span class="text-(--fg-5)">·</span>
					<span>{data.meta.readingTime} min read</span>
				{/if}
				{#each data.meta.tags.filter((t) => t !== 'EN') as tag (tag)}
					<span class="text-(--fg-5)">·</span>
					<span>{tag}</span>
				{/each}
			</div>

			<div
				class="
                    prose
                    prose-neutral
                    prose-invert prose-code:bg-neutral-800! prose-pre:bg-neutral-800!
					prose-h1:font-semibold prose-h2:font-normal
					prose-h3:font-normal prose-h4:font-normal
					prose-h5:font-normal prose-h6:font-normal
					prose-h1:text-5xl prose-h2:text-4xl
					prose-h3:text-3xl prose-h4:text-2xl
					prose-h5:text-xl prose-h6:text-lg
					prose-p:font-light prose-p:text-neutral-100
					w-full max-w-270!
                "
			>
				<data.content />
			</div>
		</article>

		<!-- Share nudge -->
		<div class="mx-auto w-full max-w-270">
			<div class="rounded-(--radius) border border-(--line) bg-(--bg-2) px-6 py-5">
				<div class="mono mb-1 text-[10px] tracking-widest text-(--fg-4) uppercase">◆ Found this useful?</div>
				<p class="m-0 mb-3 text-[13px] leading-[1.55] text-(--fg-3)">Share it with someone who'd benefit — or subscribe to get new posts.</p>
				<div class="flex flex-wrap gap-3">
					<a
						href="https://x.com/intent/post?text={encodeURIComponent(data.meta.title + ' — by @jankominek')}&url={encodeURIComponent(postUrl)}"
						target="_blank"
						rel="noopener noreferrer"
						class="mono inline-flex items-center gap-1.5 text-[11px] tracking-[0.04em] text-(--fg-3) no-underline transition-colors duration-150 hover:text-(--fg)"
					>
						Share on X →
					</a>
					<span class="text-(--fg-5)">·</span>
					<a
						href="/feed.xml"
						class="mono inline-flex items-center gap-1.5 text-[11px] tracking-[0.04em] text-(--fg-3) no-underline transition-colors duration-150 hover:text-(--fg)"
					>
						RSS feed →
					</a>
				</div>
			</div>
		</div>

		<ContactFooter />
	</div>
</div>
