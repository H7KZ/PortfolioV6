<script lang="ts">
	import { onMount } from 'svelte';

	const STORAGE_KEY = 'cookie_consent';

	let visible = $state(false);

	onMount(() => {
		if (!localStorage.getItem(STORAGE_KEY)) {
			visible = true;
		}
	});

	function accept() {
		localStorage.setItem(STORAGE_KEY, 'accepted');
		visible = false;
		if (typeof window._initGA === 'function') window._initGA();
	}

	function decline() {
		localStorage.setItem(STORAGE_KEY, 'declined');
		visible = false;
	}
</script>

{#if visible}
	<div
		class="fixed bottom-5 left-5 z-[9999] flex max-w-[360px] flex-col gap-3.5 rounded-(--radius) border border-(--line) bg-(--bg-2) p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
		role="dialog"
		aria-label="Cookie consent"
		aria-modal="false"
	>
		<div>
			<div class="mono mb-1.5 text-[10px] tracking-widest text-(--accent) uppercase">◆ Cookies</div>
			<p class="m-0 text-[13px] leading-[1.55] text-(--fg-3)">
				This site uses Google Analytics to understand how visitors interact with the content. No personal data is
				sold or shared with third parties.
			</p>
		</div>
		<div class="flex gap-2">
			<button
				onclick={accept}
				class="mono flex-1 cursor-pointer rounded-md bg-(--fg) px-3.5 py-2 text-[11px] font-medium tracking-wide text-(--bg) transition-colors duration-150 hover:bg-(--accent)"
			>
				Accept
			</button>
			<button
				onclick={decline}
				class="mono flex-1 cursor-pointer rounded-md border border-(--line-2) px-3.5 py-2 text-[11px] tracking-wide text-(--fg-3) transition-colors duration-150 hover:border-(--fg-4) hover:text-(--fg)"
			>
				Decline
			</button>
		</div>
	</div>
{/if}
