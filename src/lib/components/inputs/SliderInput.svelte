<script lang="ts">
	interface Props {
		id?: string;
		value: number;
		valueLabel?: (value: number) => string;
		min: number;
		minLabel?: string;
		max: number;
		maxLabel?: string;
		step?: number;
		label?: string;
		required?: boolean;
		readonly?: boolean;
		disabled?: boolean;
		oninput?: (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => void;
		error?: string;
	}

	let {
		id = crypto.randomUUID(),
		max,
		value = $bindable(max / 2),
		valueLabel,
		min,
		minLabel,
		maxLabel,
		step,
		label,
		required,
		readonly,
		disabled,
		oninput,
		error
	}: Props = $props();

	let errorId = $derived(`${id}-error`);
</script>

<div class="flex w-full flex-col gap-0.5">
	<label for={id} class="text-sm font-normal text-neutral-300">
		{label}
		{required ? '*' : ''}
	</label>
	<input
		{id}
		type="range"
		class="my-3 h-1 w-full cursor-pointer rounded-full bg-neutral-800 accent-white outline-none"
		bind:value
		{min}
		{max}
		{step}
		{required}
		aria-describedby={error ? errorId : undefined}
		{readonly}
		{disabled}
		{oninput}
	/>
	<div class="flex w-full justify-between">
		<p class="text-xs text-neutral-400">{minLabel}</p>
		<p class="text-sm text-white">{valueLabel ? valueLabel(value) : value}</p>
		<p class="text-xs text-neutral-400">{maxLabel}</p>
	</div>
	<p id={errorId} class="mt-1 h-4 text-xs text-red-400" aria-live="polite">
		{error}
	</p>
</div>
