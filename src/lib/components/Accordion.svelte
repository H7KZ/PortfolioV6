<script lang="ts">
	import IconamoonArrowUp from '$lib/icons/IconamoonArrowUp.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string;
		children: Snippet<[]>;
	}

	let { title = '', children }: Props = $props();

	let isOpened = $state(false);
</script>

<div class="flex h-full w-full flex-col gap-6">
	<button type="button" aria-expanded={isOpened} onclick={() => (isOpened = !isOpened)} class="flex cursor-pointer items-center gap-4">
		<IconamoonArrowUp class="h-5 w-5 shrink-0 rotate-90 text-neutral-400 transition-all {isOpened ? 'rotate-180' : ''}" />
		<p class="shrink-0 text-sm text-neutral-300 italic">
			{title}
		</p>
		<div class="mr-1.5 ml-2.5 h-px w-full bg-neutral-700">
			<!-- This is a line that will be displayed when the accordion is opened. -->
		</div>
	</button>

	<div class="accordion-body w-full" class:is-open={isOpened}>
		<div class="accordion-body-inner">
			{@render children()}
		</div>
	</div>
</div>
