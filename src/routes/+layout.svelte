<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import CookieConsent from '$lib/components/CookieConsent.svelte';
	import { onMount } from 'svelte';
	import { afterNavigate, onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { locale } from 'svelte-i18n';
	import { trackPageView } from '$lib/utils/analytics';

	let { children } = $props();

	const SITE = 'https://jankominek.com';

	const jsonLd =
		`<script type="application/ld+json">${JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Person',
			name: 'Jan Komínek',
			alternateName: 'Jan Kominek',
			url: SITE,
			email: 'contact@jankominek.com',
			jobTitle: 'Senior Fullstack Engineer',
			description:
				'Senior Fullstack Engineer based in Prague, Czech Republic. Specialising in Vue.js, React.js, TypeScript, Node.js, and Docker. Led greenfield products end-to-end and mentors junior engineers. Available for part-time B2B contracts and actively seeking technical leadership and CTO-track roles.',
			address: { '@type': 'PostalAddress', addressLocality: 'Prague', addressCountry: 'CZ' },
			worksFor: { '@type': 'Organization', name: 'CORAC Engineering' },
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
				'CI/CD',
				'Microservices',
				'System Architecture',
				'Team Leadership',
				'Engineering Management'
			],
			hasOfferCatalog: {
				'@type': 'OfferCatalog',
				name: 'Freelance Engineering Services',
				itemListElement: [
					{
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							name: 'Greenfield product development — idea to production'
						}
					},
					{
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							name: 'Legacy rescue and stabilisation'
						}
					},
					{
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							name: 'Fractional senior engineer — architecture, code review, mentoring'
						}
					}
				]
			}
		})}</` + `script>`;

	const canonicalUrl = $derived(`${SITE}${page.url.pathname}`);

	onMount(() => {
		return locale.subscribe((l) => {
			localStorage.setItem('locale', l || window.navigator.language || 'en');
		});
	});

	afterNavigate(() => {
		trackPageView(page.url.href, document.title);
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
	<link rel="canonical" href={canonicalUrl} />
	<link rel="alternate" hreflang="en" href="{canonicalUrl}?locale=en" />
	<link rel="alternate" hreflang="cs" href="{canonicalUrl}?locale=cs" />
	<link rel="alternate" hreflang="x-default" href={canonicalUrl} />
	<meta property="og:image" content="{SITE}/images/og-default.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="{SITE}/images/og-default.jpg" />
</svelte:head>

<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
>
	Skip to main content
</a>

<div class="grid-bg"></div>

<CookieConsent />

<div class="relative z-[1] flex h-full min-h-screen w-full flex-col">
	<header>
		<Navbar />
	</header>
	<main id="main-content" class="flex-1">
		{@render children()}
	</main>
</div>
