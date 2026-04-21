<script lang="ts">
	import { _, locale } from 'svelte-i18n';
	import JanKominekName from '$lib/icons/JanKominekName.svelte';
</script>

<div class="mt-30 pb-12">
	<div
		class="grid grid-cols-[1fr_auto] items-center gap-10 rounded-lg border border-(--line) bg-[linear-gradient(135deg,var(--bg-2),var(--bg))] p-12 px-10 max-md:grid-cols-1 max-md:p-8 max-md:px-6"
	>
		<div>
			<div class="mb-3 text-[11px] font-(--font-mono) tracking-widest text-(--fg-4) uppercase">
				◆ {$_('footer.contactMe')}
			</div>
			<h2 class="serif m-0 mb-6 text-[clamp(26px,4vw,40px)] leading-[1.15] font-light tracking-[-0.02em] text-(--fg)">
				{#if $locale === 'cs'}
					Probereme <span
						class="relative top-[-0.1em] mx-1 inline-flex items-center rounded-full bg-(--fg) px-3.5 py-1.5 align-middle text-[0.5em] font-(--font-sans) tracking-normal text-(--bg)"
						>Napišme si →</span
					> vaši vizi.
				{:else}
					Let's discuss your<br />vision
					<span
						class="relative top-[-0.1em] mx-1 inline-flex items-center rounded-full bg-(--fg) px-3.5 py-1.5 align-middle text-[0.5em] font-(--font-sans) tracking-normal text-(--bg)"
						>Let's talk →</span
					> with me.
				{/if}
			</h2>
			<div class="flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-(--font-mono)">
				<a href="mailto:contact@jankominek.com" class="text-(--fg-3) no-underline transition-colors duration-200 hover:text-(--accent)"
					>{$_('footer.email')}</a
				>
				<a
					href="https://www.linkedin.com/in/jan-kominek"
					target="_blank"
					rel="noopener noreferrer"
					class="text-(--fg-3) no-underline transition-colors duration-200 hover:text-(--accent)"
					>{$_('footer.linkedin')}
					↗</a
				>
				<a href="/contact" class="text-(--fg-3) no-underline transition-colors duration-200 hover:text-(--accent)"
					>{$_('footer.form')}
					↗</a
				>
				<a href="/contact#calendar" class="text-(--fg-3) no-underline transition-colors duration-200 hover:text-(--accent)"
					>{$_('footer.calendar')}
					↗</a
				>
			</div>
		</div>
		<JanKominekName class="h-auto w-45 shrink-0 -rotate-3 text-(--fg-4) opacity-70 max-md:hidden" aria-hidden="true" />
	</div>
</div>
