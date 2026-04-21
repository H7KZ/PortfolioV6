<script lang="ts">
	import type { Component, Snippet } from 'svelte';

	interface Props {
		type?: 'button' | 'submit' | 'reset';
		link?: string;
		target?: string;
		Icon?: Component;
		disabled?: boolean;
		onclick?: (e: MouseEvent) => void;
		children: Snippet<[]>;
	}

	let { type = 'button', link, target, Icon, disabled = false, onclick, children }: Props = $props();

	let spinButton = $state(false);

	function handleClick(e: MouseEvent) {
		if (disabled) return;

		spinButton = true;
		setTimeout(() => (spinButton = false), 1050);

		if (onclick) onclick(e);
	}
</script>

{#snippet BoldButton()}
	<button
		{type}
		{disabled}
		aria-disabled={disabled}
		class="group flex h-10 cursor-pointer flex-row items-center justify-center transition-all disabled:cursor-not-allowed disabled:opacity-60"
		onclick={handleClick}
	>
		<div
			class="text-background flex h-full items-center justify-center rounded-full bg-neutral-50 px-4 text-center text-xl font-semibold transition-all group-hover:bg-neutral-200 group-disabled:group-hover:bg-neutral-50"
		>
			{@render children()}
		</div>
		<div
			class="text-background flex h-full w-10 -translate-x-0.75 transform items-center justify-center rounded-full bg-neutral-50 text-center font-bold transition-all group-hover:bg-neutral-200 group-disabled:group-hover:bg-neutral-50"
		>
			{#if Icon}
				<Icon class="text-background h-6 w-6 motion-safe:{spinButton ? 'rotate-360 transition-all duration-1000' : ''}" />
			{/if}
		</div>
	</button>
{/snippet}

{#if link}
	<a href={link} {target}>
		{@render BoldButton()}
	</a>
{:else}
	{@render BoldButton()}
{/if}
