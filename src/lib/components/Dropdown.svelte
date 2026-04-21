<script lang="ts">
	import { clickOutside, tapOutside } from '$lib/utils/clickOutside';
	import type { Snippet } from 'svelte';

	interface Props {
		autoOpen?: boolean;
		width?: number;
		align?: 'left' | 'center' | 'right';
		isOpened?: boolean;
		items?: Snippet<[]>;
		children: Snippet<[]>;
	}

	let { autoOpen = false, width = 8, align = 'left', isOpened = $bindable(false), children, items }: Props = $props();
</script>

<div
	class="relative"
	role="presentation"
	onmouseover={() => autoOpen && (isOpened = true)}
	onmouseleave={() => autoOpen && (isOpened = false)}
	onfocus={() => autoOpen && (isOpened = true)}
	onblur={() => autoOpen && (isOpened = false)}
	use:clickOutside={() => (isOpened = false)}
	use:tapOutside={() => (isOpened = false)}
	onkeydown={(e) => e.key === 'Escape' && (isOpened = false)}
>
	<button type="button" onclick={() => (isOpened = !isOpened)} class="flex cursor-pointer items-center justify-center gap-2">
		{@render children()}
	</button>

	<div
		class="absolute top-full z-50"
		class:invisible={!isOpened}
		class:opacity-0={!isOpened}
		class:left-0={align === 'left'}
		class:left-[50%]={align === 'center'}
		class:translate-x-[-50%]={align === 'center'}
		class:right-0={align === 'right'}
		style="width: {width}rem;"
	>
		<div class="h-2 w-full"></div>
		<div class="rounded-lg bg-neutral-800">
			{@render items?.()}
		</div>
	</div>
</div>
