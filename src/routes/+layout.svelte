<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import { onMount } from 'svelte';
	import { afterNavigate, onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { locale } from 'svelte-i18n';
	import { trackPageView } from '$lib/utils/analytics';

	let { children } = $props();

	const jsonLd =
		`<script type="application/ld+json">${JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Person',
			name: 'Jan Komínek',
			alternateName: 'Jan Kominek',
			url: 'https://jankominek.com',
			email: 'contact@jankominek.com',
			jobTitle: 'Senior Frontend / Fullstack Engineer',
			description:
				'Senior Frontend and Fullstack Engineer based in Prague, Czech Republic. Specialising in Vue.js, React.js, TypeScript, Node.js, and Docker. Available for part-time B2B contracts up to 10 hours per week.',
			address: { '@type': 'PostalAddress', addressLocality: 'Prague', addressCountry: 'CZ' },
			sameAs: ['https://www.linkedin.com/in/jan-kominek'],
			knowsAbout: [
				'Vue.js',
				'React.js',
				'TypeScript',
				'Node.js',
				'SvelteKit',
				'Docker',
				'Docker Swarm',
				'PostgreSQL',
				'Redis',
				'Rust',
				'CI/CD',
				'Microservices',
				'System Architecture'
			]
		})}</` + `script>`;

	onMount(() => {
		locale.subscribe((l) => {
			localStorage.setItem('locale', l || window.navigator.language || 'en');
		});

		locale.set(localStorage.getItem('locale') || 'en');
	});

	afterNavigate(() => {
		trackPageView($page.url.href, document.title);
	});

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		if (navigation.to?.url.pathname === navigation.from?.url.pathname) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<!-- eslint-disable svelte/no-at-html-tags -->
	{@html jsonLd}
	<!-- eslint-enable svelte/no-at-html-tags -->
</svelte:head>

<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
>
	Skip to main content
</a>

<div class="grid-bg"></div>

<div class="relative z-[1] flex h-full min-h-screen w-full flex-col">
	<header>
		<Navbar />
	</header>
	<main id="main-content" class="flex-1">
		{@render children()}
	</main>
</div>
