<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import TextInput from '$lib/components/inputs/TextInput.svelte';

	let form = $state({
		code: ''
	});

	async function handleSubmit(e: MouseEvent) {
		e.preventDefault();

		if (form.code !== '211') return;

		await goto('/fragment/1.txt');
	}
</script>

<div class="flex w-full flex-col items-center justify-center gap-3 pt-32">
	<div class="flex w-full max-w-xs flex-col gap-8 px-4">
		<TextInput bind:value={form.code} label="Ověřovací kód" required />
		<Button onclick={handleSubmit}>Odemknout</Button>
	</div>
</div>
