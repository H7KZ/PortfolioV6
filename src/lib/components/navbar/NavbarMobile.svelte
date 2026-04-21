<script lang="ts">
	import { _, locale, locales } from 'svelte-i18n';
	import { page } from '$app/state';

	let menuOpen = $state(false);
</script>

<div class="sticky top-0 z-40 border-b border-(--line) bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] backdrop-blur-[14px]">
	<div class="flex items-center justify-between px-5 py-3.5">
		<a
			href="/"
			aria-label="Jan Komínek — Home"
			onclick={() => (menuOpen = false)}
			class="serif grid h-9 w-9 place-items-center rounded-full border border-(--line-2) text-[20px] font-normal text-(--fg) no-underline transition-[border-color] duration-200"
			>J</a
		>

		<div class="flex items-center gap-3">
			<a
				href="/contact"
				onclick={() => (menuOpen = false)}
				class="inline-flex items-center gap-1.75 rounded-full border border-(--line-2) px-3.5 py-1.75 text-[12px] text-(--fg) no-underline transition-all duration-200 hover:border-(--accent) hover:text-(--accent)"
			>
				<span class="dot h-1.5 w-1.5 shrink-0 animate-[dot-pulse_2.4s_ease-in-out_infinite] rounded-full bg-(--accent) shadow-[0_0_10px_var(--accent)]"
				></span>
				{$_('navbar.hire')}
			</a>
			<button
				onclick={() => (menuOpen = !menuOpen)}
				aria-label="Toggle menu"
				aria-expanded={menuOpen}
				class="grid cursor-pointer place-items-center rounded-md border-0 bg-transparent p-1 text-(--fg-2) transition-colors duration-150 hover:text-(--fg)"
			>
				{#if menuOpen}
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M18 6L6 18M6 6l12 12" />
					</svg>
				{:else}
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M3 12h18M3 6h18M3 18h18" />
					</svg>
				{/if}
			</button>
		</div>
	</div>

	{#if menuOpen}
		<div class="flex flex-col gap-1 px-5 pt-2 pb-5">
			<a
				href="/"
				onclick={() => (menuOpen = false)}
				class="border-b border-(--line) py-2.5 text-[15px] no-underline transition-colors duration-150 {page.url.pathname === '/'
					? 'text-(--fg)'
					: 'text-(--fg-2) hover:text-(--fg)'}">{$_('navbar.work')}</a
			>
			<a
				href="/resume"
				onclick={() => (menuOpen = false)}
				class="border-b border-(--line) py-2.5 text-[15px] no-underline transition-colors duration-150 {page.url.pathname === '/resume'
					? 'text-(--fg)'
					: 'text-(--fg-2) hover:text-(--fg)'}">{$_('navbar.resume')}</a
			>
			<a
				href="/blog"
				onclick={() => (menuOpen = false)}
				class="border-b border-(--line) py-2.5 text-[15px] no-underline transition-colors duration-150 {page.url.pathname.startsWith('/blog')
					? 'text-(--fg)'
					: 'text-(--fg-2) hover:text-(--fg)'}">{$_('navbar.blog')}</a
			>
			<button
				class="cursor-pointer border-0 bg-transparent px-0 py-2 text-left text-[11px] font-(--font-mono) tracking-[0.08em] text-(--fg-4) transition-colors duration-150 hover:text-(--fg)"
				onclick={() => {
					const all = $locales ?? ['en', 'cs'];
					const idx = all.indexOf($locale ?? 'en');
					locale.set(all[(idx + 1) % all.length]);
					menuOpen = false;
				}}
			>
				{($locale ?? 'en').toUpperCase()}
				/ {(($locales ?? ['en', 'cs']).find((l) => l !== ($locale ?? 'en')) ?? 'cs').toUpperCase()}
			</button>
		</div>
	{/if}
</div>
