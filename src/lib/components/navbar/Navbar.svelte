<script lang="ts">
	import NavbarMobile from './NavbarMobile.svelte';
	import NavbarDesktop from './NavbarDesktop.svelte';

	let innerWidth = $state(0);
	let isMobile = $derived(innerWidth < 768);
</script>

<svelte:window bind:innerWidth />

<nav>
	{#if isMobile}
		<NavbarMobile />
	{:else}
		<NavbarDesktop />
	{/if}
</nav>
