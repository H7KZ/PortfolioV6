<script lang="ts">
	import type { Component } from 'svelte';
	import IconamoonArrowUp from '$lib/icons/IconamoonArrowUp.svelte';
	import { clickOutside, tapOutside } from '$lib/utils/clickOutside';

	interface Option {
		value: string;
		label: string;
		disabled?: boolean;
	}

	interface Props {
		id?: string;
		value: string;
		options: Option[];
		height?: number;
		label?: string;
		Icon?: Component;
		required?: boolean;
		disabled?: boolean;
		oninput?: (selectedValue: string) => void;
		error?: string;
		placeholder?: string;
	}

	let { id = crypto.randomUUID(), value = $bindable(''), options, height, label, Icon, required, disabled, oninput, error, placeholder }: Props = $props();

	let isOpened = $state(false);
	let errorId = $derived(`${id}-error`);

	function onSelect(optionValue: string) {
		if (disabled) return;

		const selectedOption = options.find((opt) => opt.value === optionValue);
		if (selectedOption && !selectedOption.disabled) {
			value = optionValue;
			isOpened = false;

			if (oninput) oninput(value);
		}
	}

	function getLabel() {
		const selectedOption = options.find((opt) => opt.value === value);
		return selectedOption ? selectedOption.label : placeholder;
	}
</script>

<div class="flex w-full flex-col gap-0.5" use:clickOutside={() => (isOpened = false)} use:tapOutside={() => (isOpened = false)}>
	<label for={id} class="text-sm font-normal text-neutral-300">
		{label}
		{required ? '*' : ''}
	</label>
	<div class="relative w-full">
		<div
			role="button"
			tabindex="0"
			class="flex h-10 w-full cursor-pointer items-center justify-between rounded-md border-[1.5px] border-neutral-500 bg-[#ffffff03] p-2 px-3 text-base"
			class:px-10.5={Icon}
			class:text-neutral-500={!value}
			onclick={() => (isOpened = !isOpened)}
			onkeydown={(e) => e.key === 'Enter' && (isOpened = !isOpened)}
		>
			<p class="truncate">
				{getLabel()}
			</p>
			<IconamoonArrowUp class="h-7 w-7 text-neutral-400 transition-all {isOpened ? 'rotate-180' : ''}" />
		</div>

		{#if Icon}
			<div class="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2">
				<Icon class="h-6 w-6 text-neutral-400" />
			</div>
		{/if}

		{#if isOpened}
			<div
				class="absolute z-50 mt-1 w-full rounded-md border-[1.5px] border-neutral-500 bg-neutral-900"
				style="max-height: {height}rem; overflow-y: auto;"
				onblur={() => (isOpened = false)}
			>
				{#each options as option (option.value)}
					<div
						role="option"
						tabindex="0"
						aria-selected={value === option.value}
						class="flex cursor-pointer items-center px-3 py-2.5 text-neutral-300 first:rounded-t-md last:rounded-b-md hover:bg-neutral-800"
						class:bg-neutral-800={value === option.value}
						class:text-neutral-500={option.disabled}
						class:cursor-not-allowed={option.disabled}
						onclick={() => onSelect(option.value)}
						onkeydown={(e) => e.key === 'Enter' && onSelect(option.value)}
					>
						{option.label}
					</div>
				{/each}
			</div>
		{/if}
	</div>
	<p id={errorId} class="mt-0.5 h-4 text-xs text-red-400" aria-live="polite">
		{error}
	</p>
</div>
