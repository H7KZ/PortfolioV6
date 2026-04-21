<script lang="ts">
	import type { Component } from 'svelte';
	import type { FullAutoFill } from 'svelte/elements';

	interface Props {
		id?: string;
		value: string;
		type?: 'date' | 'time' | 'datetime-local';
		label?: string;
		autocomplete?: FullAutoFill;
		placeholder?: string;
		Icon?: Component;
		required?: boolean;
		readonly?: boolean;
		disabled?: boolean;
		oninput?: (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => void;
		error?: string;
	}

	let {
		id = crypto.randomUUID(),
		value = $bindable(''),
		type = 'date',
		label,
		autocomplete,
		placeholder,
		Icon,
		required,
		readonly,
		disabled,
		oninput,
		error
	}: Props = $props();

	let errorId = $derived(`${id}-error`);
	let inputElement: HTMLInputElement;

	function onInputFocus() {
		if (!inputElement.value && placeholder) inputElement.type = type;

		inputElement.showPicker();
	}

	function onInputBlur() {
		if (inputElement.value || !placeholder) return;

		inputElement.type = 'text';
	}
</script>

<div class="flex w-full flex-col gap-0.5">
	<label for={id} class="text-sm font-normal text-neutral-300">
		{label}
		{required ? '*' : ''}
	</label>
	<div class="relative w-full">
		<input
			bind:this={inputElement}
			{id}
			type={value || !placeholder ? type : 'text'}
			class="h-10 w-full rounded-md border-[1.5px] border-neutral-500 bg-[#ffffff03] p-2 pl-3.5 text-base text-white placeholder:text-neutral-500"
			class:pl-11.5={Icon}
			bind:value
			{autocomplete}
			{placeholder}
			{required}
			{readonly}
			{disabled}
			{oninput}
			onfocus={onInputFocus}
			onclick={onInputFocus}
			onblur={onInputBlur}
		/>
		{#if Icon}
			<div class="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2">
				<Icon class="h-6 w-6 text-neutral-400" />
			</div>
		{/if}
	</div>
	<p id={errorId} class="mt-0.5 h-4 text-xs text-red-400" aria-live="polite">
		{error}
	</p>
</div>

<style scoped>
	input[type='date']::-webkit-calendar-picker-indicator {
		display: none;
	}

	input[type='time']::-webkit-calendar-picker-indicator {
		display: none;
	}

	input[type='datetime-local']::-webkit-calendar-picker-indicator {
		display: none;
	}
</style>
