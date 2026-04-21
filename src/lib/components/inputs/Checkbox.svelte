<script lang="ts">
	interface Props {
		id?: string;
		value: boolean;
		label?: string;
		required?: boolean;
		disabled?: boolean;
		onchange?: (checked: boolean) => void;
		error?: string;
	}

	let { id = crypto.randomUUID(), value = $bindable(false), label, required, disabled, onchange, error }: Props = $props();

	function onCheck() {
		if (disabled) return;

		value = !value;

		if (onchange) onchange(value);
	}
</script>

<div class="flex w-full flex-col gap-0.5">
	<div class="flex items-center gap-2.5">
		<div class="relative flex items-center">
			<input
				{id}
				type="checkbox"
				class="peer h-4.5 w-4.5 cursor-pointer appearance-none rounded border-[1.5px] border-neutral-500 bg-transparent checked:border-white checked:bg-white"
				checked={value}
				{disabled}
				onchange={onCheck}
			/>
			<svg
				class="pointer-events-none absolute top-0.5 left-0.5 hidden h-3.5 w-3.5 peer-checked:block"
				viewBox="0 0 24 24"
				fill="none"
				stroke="black"
				stroke-width="3"
			>
				<path d="M20 6L9 17l-5-5" />
			</svg>
		</div>

		<label for={id} class="flex cursor-pointer flex-col truncate text-base font-normal text-neutral-300" class:text-neutral-500={disabled}>
			{#if label}
				{label}
				{required ? '*' : ''}
			{/if}
		</label>
	</div>

	{#if error}
		<p class="mt-0.5 h-4 text-xs text-red-400">
			{error}
		</p>
	{/if}
</div>
