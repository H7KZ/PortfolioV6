<script lang="ts">
	interface Props {
		label: string;
		heading: string;
		sub?: string;
		headingSize?: string;
	}

	let { label, heading, sub, headingSize = 'text-[clamp(24px,3.5vw,44px)]' }: Props = $props();
</script>

<div class="mb-10 grid grid-cols-[1fr_2fr] gap-10 border-b border-(--line) pb-5 max-md:grid-cols-1 max-md:gap-3">
	<div class="mono pt-3 text-[11px] tracking-[0.12em] text-(--fg-4) uppercase">◆ {label}</div>
	<div>
		<h2 class="serif m-0 {headingSize} leading-[1.05] tracking-[-0.02em]">{heading}</h2>
		{#if sub}
			<p class="mt-3.5 mb-0 max-w-130 text-[15px] text-(--fg-3)">{sub}</p>
		{/if}
	</div>
</div>
