<script lang="ts">
	import { _, locale, locales } from 'svelte-i18n';
	import { page } from '$app/state';
</script>

<div class="sticky top-0 z-40 border-b border-(--line) bg-[color-mix(in_srgb,var(--bg)_85%,transparent)] backdrop-blur-[14px]">
	<div class="mx-auto flex max-w-(--max) items-center justify-between px-8 py-4">
		<a
			href="/"
			aria-label="Jan Komínek — Home"
			class="serif grid h-9.5 w-9.5 place-items-center rounded-full border border-(--line-2) text-[22px] font-normal text-(--fg) no-underline transition-[border-color] duration-200 hover:border-(--fg-3)"
			>J</a
		>

		<div class="flex items-center gap-7">
			<a
				href="/"
				class="text-sm text-(--fg-2) no-underline transition-colors duration-200 hover:text-(--fg) {page.url.pathname === '/' ? 'text-(--fg)' : ''}"
				aria-current={page.url.pathname === '/' ? 'page' : undefined}
			>
				{$_('navbar.work')}
				{#if page.url.pathname === '/'}
					<span class="mt-0.75 block h-px bg-(--fg) opacity-40"></span>
				{/if}
			</a>
			<a
				href="/resume"
				class="text-sm text-(--fg-2) no-underline transition-colors duration-200 hover:text-(--fg) {page.url.pathname === '/resume'
					? 'text-(--fg)'
					: ''}"
				aria-current={page.url.pathname === '/resume' ? 'page' : undefined}
			>
				{$_('navbar.resume')}
				{#if page.url.pathname === '/resume'}
					<span class="mt-0.75 block h-px bg-(--fg) opacity-40"></span>
				{/if}
			</a>
			<a
				href="/blog"
				class="text-sm text-(--fg-2) no-underline transition-colors duration-200 hover:text-(--fg) {page.url.pathname.startsWith('/blog')
					? 'text-(--fg)'
					: ''}"
				aria-current={page.url.pathname.startsWith('/blog') ? 'page' : undefined}
			>
				{$_('navbar.blog')}
				{#if page.url.pathname.startsWith('/blog')}
					<span class="mt-0.75 block h-px bg-(--fg) opacity-40"></span>
				{/if}
			</a>
			<a
				href="/contact"
				class="inline-flex items-center gap-2 rounded-full border border-(--line-2) px-4.5 py-2 text-[13px] text-(--fg-2) no-underline transition-all duration-200 hover:border-(--accent) hover:text-(--accent)"
			>
				<span class="dot h-1.5 w-1.5 shrink-0 animate-[dot-pulse_2.4s_ease-in-out_infinite] rounded-full bg-(--accent) shadow-[0_0_10px_var(--accent)]"
				></span>
				{$_('navbar.hire')}
			</a>
			<button
				class="cursor-pointer rounded-md border-0 bg-transparent px-2.5 py-1.5 text-[11px] font-(--font-mono) tracking-[0.08em] text-(--fg-3) transition-all duration-150 hover:bg-(--bg-3) hover:text-(--fg)"
				onclick={() => {
					const all = $locales ?? ['en', 'cs'];
					const idx = all.indexOf($locale ?? 'en');
					locale.set(all[(idx + 1) % all.length]);
				}}
				aria-label="Toggle language"
			>
				{($locale ?? 'en').toUpperCase()}
			</button>
		</div>
	</div>
</div>
