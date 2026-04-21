<script lang="ts">
	import TablerFileLike from '$lib/icons/TablerFileLike.svelte';
	import TablerFilePlus from '$lib/icons/TablerFilePlus.svelte';
	import TablerX from '$lib/icons/TablerX.svelte';
	import filesIconsComponents from '$lib/utils/filesIconsComponents';

	interface Props {
		id?: string;
		value: File;
	}

	let { id = crypto.randomUUID(), value = $bindable(new File([], '')) }: Props = $props();

	let extension = $state('');

	function onFileInput(e: Event) {
		const file = (e.target as HTMLInputElement).files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				value = file;
				extension = file.name.split('.').pop() ?? '';
			};
			reader.readAsDataURL(file);
		}
	}

	function clearInput() {
		value = new File([], '');
		extension = '';
	}
</script>

<div class="flex w-full flex-col">
	<div class="relative flex h-9 w-9 items-center justify-center">
		{#if !value.name}
			<label for={id}>
				<TablerFilePlus class="h-9 w-9 cursor-pointer transition-all hover:text-neutral-400" />
			</label>
		{:else}
			<!-- svelte-ignore svelte_component_deprecated -->
			<svelte:component this={filesIconsComponents?.[extension] ?? TablerFileLike} class="h-9 w-9" />

			<button class="absolute -top-1.5 right-0 z-40" onclick={clearInput}>
				<TablerX class="text-background h-3 w-3 cursor-pointer rounded-full bg-red-400 transition-all hover:bg-neutral-200" />
			</button>
		{/if}
	</div>
	<input {id} type="file" class="absolute hidden h-0 w-0 opacity-0" oninput={onFileInput} />
</div>
