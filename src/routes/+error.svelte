<script lang="ts">
	import { page } from '$app/state';
	import { _ } from 'svelte-i18n';
</script>

<div class="flex h-full w-full flex-col items-center justify-center gap-8 px-8 py-32 text-center">
	<h1 class="text-8xl font-semibold text-red-400">{page.status}</h1>
	<h2 class="text-4xl font-light text-neutral-200 italic">{page.error?.message}</h2>

	<p class="text-neutral-400">
		{$_(`errors.${page.status}`) || page.error?.message}
	</p>
	<a href="/" class="mt-4 rounded-full border border-white px-6 py-2 text-sm transition-all hover:bg-white/10">← Back to home</a>
</div>
