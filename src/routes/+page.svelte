<script lang="ts">
	import ContactFooter from '$lib/components/ContactFooter.svelte';
	import type { Project } from '$lib/types';
	import { _, locale } from 'svelte-i18n';
	import { trackEvent } from '$lib/utils/analytics';

	let projects: Project[] = $state([]);

	$effect(() => {
		getProjects($locale).then((data) => {
			projects = data;
		});
	});

	async function getProjects(l: string | null | undefined) {
		const response = await fetch(`/api/projects?locale=${l}`);
		return await response.json();
	}

	type CardSize = 'featured' | 'wide' | 'narrow' | 'default';

	const bentoConfig: Record<
		string,
		{
			size: CardSize;
			company: string;
			role: string;
			descKey: string;
			chips?: string[];
			badgeKey?: string;
			ctaKey: 'viewProject' | 'readCaseStudy';
		}
	> = {
		corac_sith: {
			size: 'featured',
			badgeKey: 'projectCoraSithBadge',
			company: 'CORAC ENGINEERING',
			role: 'SENIOR FRONTEND',
			descKey: 'projectCoraSithDesc',
			chips: ['Vue 3', 'D3.js', 'AWS Cognito', 'Vite', 'pnpm', 'Shadcn'],
			ctaKey: 'readCaseStudy'
		},
		iont_charge: {
			size: 'wide',
			company: 'IONT TECH',
			role: 'FULLSTACK',
			descKey: 'projectIontChargeDesc',
			chips: ['SvelteKit', 'Fastify', 'Docker Swarm', 'MongoDB'],
			ctaKey: 'readCaseStudy'
		},
		corac_scorecard: {
			size: 'narrow',
			company: 'CORAC',
			role: 'FRONTEND',
			descKey: 'projectCoraScorecardDesc',
			ctaKey: 'viewProject'
		},
		iont_admin: {
			size: 'wide',
			company: 'IONT TECH',
			role: 'FULLSTACK',
			descKey: 'projectIontAdminDesc',
			chips: ['SvelteKit', 'Fastify', 'Redis', 'WebSockets'],
			ctaKey: 'viewProject'
		},
		iont_info: {
			size: 'narrow',
			company: 'IONT',
			role: 'FULLSTACK',
			descKey: 'projectIontInfoDesc',
			ctaKey: 'viewProject'
		},
		pangolin: {
			size: 'default',
			company: 'WORK',
			role: 'FRONTEND',
			descKey: 'projectPangolinDesc',
			chips: ['React', 'Chart.js'],
			ctaKey: 'viewProject'
		},
		noteful: {
			size: 'default',
			company: 'PERSONAL',
			role: 'FULLSTACK',
			descKey: 'projectNotefulDesc',
			chips: ['Vue', 'Node'],
			ctaKey: 'viewProject'
		},
		disenchantment: {
			size: 'default',
			company: 'PERSONAL',
			role: 'JAVA',
			descKey: 'projectDisenchantmentDesc',
			chips: ['Java'],
			ctaKey: 'viewProject'
		}
	};

	const serviceChips = [
		['Architecture', 'Full-stack', 'DevOps'],
		['Refactor', 'CI / CD', 'Docker'],
		['Mentoring', 'Code review', 'System design']
	];

	const testimonials = [
		{ quoteKey: 'testimonial1Quote', name: 'Amelie Engelmaierová', roleKey: 'testimonial1Role', initials: 'AE' },
		{ quoteKey: 'testimonial2Quote', name: 'Petr Krejčí', roleKey: 'testimonial2Role', initials: 'PK' },
		{ quoteKey: 'testimonial3Quote', name: 'Marek Vospěl', roleKey: 'testimonial3Role', initials: 'MV' },
		{ quoteKey: 'testimonial4Quote', name: 'Zdeněk Glazer', roleKey: 'testimonial4Role', initials: 'ZG' }
	];
</script>

<svelte:head>
	<title>Jan Komínek — Freelance Senior Frontend Engineer, Prague</title>
	<link rel="preload" as="image" href="/images/profile.webp" type="image/webp" fetchpriority="high" />
</svelte:head>

<!-- GEO: machine-readable for LLMs -->
<p class="sr-only">
	Jan Komínek is a Freelance Senior Frontend Engineer based in Prague, Czech Republic, specializing in Vue.js, React.js, TypeScript, and Node.js. Currently
	available for part-time B2B contracts up to 10 hours per week.
</p>

<!-- HERO -->
<div
	class="mx-auto grid max-w-(--max) grid-cols-[1fr_auto] items-start gap-x-20 px-8 pt-10 pb-30 max-[900px]:grid-cols-1 max-[900px]:gap-6 max-[900px]:pb-16 max-sm:px-5"
>
	<div class="mono col-1 mb-8 flex flex-wrap gap-x-4 gap-y-1 text-[12px] tracking-[0.04em] text-(--fg-3)">
		<span class="text-(--fg)">{$_('home.fullstack')}</span>
		<span class="text-(--fg-5)">/</span>
		<span>{$_('home.freelance')}</span>
		<span class="text-(--fg-5)">/</span>
		<span>{$_('home.prague')}</span>
	</div>

	<h1 class="serif col-1 m-0 mb-6 text-[clamp(52px,9vw,120px)] leading-[0.95] tracking-[-0.03em]">
		Jan<br /><em class="text-(--fg-2) italic">Komínek.</em>
	</h1>

	<!-- eslint-disable svelte/no-at-html-tags -->
	<p class="hero-value-prop col-1 m-0 mb-8 max-w-150 text-[clamp(18px,2.2vw,26px)] leading-[1.4] font-light tracking-[-0.015em] text-(--fg-2)">
		{@html $_('home.valueProp')}
	</p>
	<!-- eslint-enable svelte/no-at-html-tags -->

	<div class="col-1 flex flex-wrap gap-3">
		<a
			href="/contact"
			class="inline-flex items-center gap-2 rounded-full bg-(--fg) px-5.5 py-3.25 text-[14px] font-medium text-(--bg) no-underline transition-all duration-200 hover:bg-(--accent)"
			onclick={() => trackEvent('cta_click', { cta_name: 'start_project' })}
		>
			<span>{$_('home.startProject')}</span>
			<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M5 12h14M13 6l6 6-6 6" />
			</svg>
		</a>
		<a
			href="/resume"
			class="inline-flex items-center gap-2 rounded-full border border-(--line-2) px-5.5 py-3.25 text-[14px] text-(--fg) no-underline transition-all duration-200 hover:border-(--fg-3)"
		>
			<span>{$_('home.viewResume')}</span>
		</a>
	</div>

	<div class="col-1 mt-12 flex flex-wrap gap-10 border-t border-(--line) pt-7">
		<div class="flex flex-col gap-1">
			<div class="serif text-[36px] leading-none">4<span class="text-(--fg-4)">+</span></div>
			<div class="mono text-[10px] tracking-widest text-(--fg-4) uppercase">{$_('home.yearsLabel')}</div>
		</div>
		<div class="flex flex-col gap-1">
			<div class="serif text-[36px] leading-none">12</div>
			<div class="mono text-[10px] tracking-widest text-(--fg-4) uppercase">{$_('home.projectsLabel')}</div>
		</div>
		<div class="flex flex-col gap-1">
			<div class="serif text-[36px] leading-none">7</div>
			<div class="mono text-[10px] tracking-widest text-(--fg-4) uppercase">{$_('home.clientsLabel')}</div>
		</div>
	</div>

	<div
		class="relative col-2 row-start-1 row-end-6 h-97.5 w-[320px] self-center overflow-hidden rounded-[180px_180px_12px_12px] border border-(--line-2) bg-linear-to-b from-[#2a2a2a] to-[#181818] max-[900px]:col-1 max-[900px]:row-auto max-[900px]:mx-auto max-[900px]:h-100 max-[900px]:w-full max-[900px]:max-w-[320px]"
	>
		<img
			src="/images/profile.webp"
			alt="Jan Komínek — Senior Frontend Engineer"
			width="1439"
			height="1439"
			fetchpriority="high"
			decoding="async"
			class="h-full w-full object-cover object-top"
		/>
		<div
			class="mono absolute right-3.5 bottom-3.5 left-3.5 flex items-center gap-2 rounded-lg border border-(--line-2) bg-[color-mix(in_srgb,var(--bg)_80%,transparent)] px-3 py-2.25 text-[11px] backdrop-blur-sm"
		>
			<span class="h-2 w-2 shrink-0 animate-[dot-pulse_2.4s_ease-in-out_infinite] rounded-full bg-(--accent) shadow-[0_0_10px_var(--accent)]"></span>
			<span class="text-(--fg)">{$_('home.available')}</span>
			<span class="ml-auto text-(--fg-4)">{$_('home.upToLabel')}</span>
		</div>
	</div>
</div>

<!-- NOW SECTION -->
<div class="mx-auto mb-24 max-w-(--max) px-8 max-sm:px-5">
	<div
		class="grid grid-cols-[auto_1fr_auto] items-center gap-7 rounded-(--radius) border border-(--line) bg-(--bg-2) px-7 py-6 max-[700px]:grid-cols-1 max-[700px]:gap-3"
	>
		<div class="mono text-[11px] tracking-widest text-(--accent) uppercase">◆ {$_('home.nowLabel')}</div>
		<div>
			<h3 class="serif m-0 mb-1.5 text-[20px]">{$_('home.nowTitle')}</h3>
			<p class="m-0 text-[14px] leading-[1.55] text-(--fg-3)">{$_('home.nowDesc')}</p>
		</div>
		<div class="mono text-right text-[12px] whitespace-nowrap text-(--fg-4) max-[700px]:text-left">
			<div>{$_('home.nowDate')}</div>
			<div class="mt-1 text-(--fg-3)">{$_('home.nowMeta')}</div>
		</div>
	</div>
</div>

<!-- PROJECTS BENTO -->
<section class="mx-auto mb-35 max-w-(--max) px-8 max-sm:px-5">
	<div class="mb-10 grid grid-cols-[1fr_2fr] gap-10 border-b border-(--line) pb-5 max-md:grid-cols-1 max-md:gap-3">
		<div class="mono pt-3 text-[11px] tracking-[0.12em] text-(--fg-4) uppercase">
			◆ {$_('home.workLabel')}
			— {projects.length}
		</div>
		<div>
			<h2 class="serif m-0 text-[clamp(24px,3.5vw,44px)] leading-[1.05] tracking-[-0.02em]">{$_('home.workH2')}</h2>
			<p class="mt-3.5 mb-0 max-w-130 text-[15px] text-(--fg-3)">{$_('home.workP')}</p>
		</div>
	</div>

	<div class="grid grid-cols-6 gap-3.5 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
		{#each projects as project (project.slug)}
			{@const cfg = bentoConfig[project.slug] ?? {
				size: 'default',
				company: '',
				role: '',
				descKey: '',
				ctaKey: 'viewProject'
			}}
			{@const isFeatured = cfg.size === 'featured'}
			{@const sizeClass = isFeatured
				? 'col-span-6 flex-row min-h-[420px] max-[900px]:col-span-2 max-[900px]:flex-col max-[900px]:min-h-0 max-[560px]:col-span-1'
				: cfg.size === 'wide'
					? 'col-span-4 flex-col max-[900px]:col-span-2 max-[560px]:col-span-1'
					: cfg.size === 'narrow'
						? 'col-span-2 flex-col max-[560px]:col-span-1'
						: 'col-span-3 flex-col max-[900px]:col-span-2 max-[560px]:col-span-1'}
			<a
				href={`/projects/${project.slug}?locale=${$locale}`}
				class="group {sizeClass} relative flex overflow-hidden rounded-lg border border-(--line) bg-(--bg-2) text-(--fg) no-underline transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-(--fg-5)"
				onclick={() => trackEvent('project_view', { project_name: project.slug })}
			>
				<div
					class="{isFeatured
						? 'flex-[1.2] border-r border-(--line) max-[900px]:aspect-16/10 max-[900px]:flex-none max-[900px]:border-r-0 max-[900px]:border-b max-[900px]:border-(--line)'
						: 'aspect-16/10 border-b border-(--line)'} relative overflow-hidden bg-(--bg-3)"
				>
					<img
						src={project.thumbnail}
						alt={project.title}
						loading="lazy"
						class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
					/>
					{#if cfg.badgeKey}
						<span
							class="mono absolute top-2.5 left-2.5 z-2 rounded-full border border-(--line-2) bg-[color-mix(in_srgb,var(--bg)_80%,transparent)] px-2.5 py-1 text-[10px] tracking-[0.08em] text-(--fg-2) uppercase backdrop-blur-sm"
							>{$_('home.' + cfg.badgeKey)}</span
						>
					{/if}
					<span
						class="mono absolute top-2.5 right-2.5 z-2 rounded-full bg-[color-mix(in_srgb,var(--bg)_80%,transparent)] px-2.5 py-1 text-[11px] text-(--fg-2) backdrop-blur-sm"
						>{new Date(project.date).getFullYear()}</span
					>
				</div>
				<div class="{isFeatured ? 'flex-1 justify-between p-9 max-[900px]:p-5' : 'p-4.5'} flex flex-1 flex-col gap-3">
					<div>
						<div class="mono mb-2 text-[10px] tracking-[0.08em] text-(--fg-4) uppercase">
							{cfg.company}<span class="mx-2 text-(--fg-5)">/</span>{cfg.role}
						</div>
						<h3 class="serif {isFeatured ? 'text-[36px]' : 'text-[22px]'} m-0 mb-1.5 leading-[1.15] tracking-[-0.01em]">{project.title}</h3>
						<p class="text-(--fg-3) {isFeatured ? 'text-base' : 'text-[14px]'} m-0 leading-normal">{$_('home.' + cfg.descKey)}</p>
					</div>
					<div>
						{#if cfg.chips}
							<div class="mb-3.5 flex flex-wrap gap-1.25">
								{#each cfg.chips as chip (chip)}
									<span class="chip">{chip}</span>
								{/each}
							</div>
						{/if}
						<div class="mono flex items-center justify-between border-t border-(--line) pt-2.5 text-[11px] tracking-[0.04em] text-(--fg-4)">
							<span>{$_('home.' + cfg.ctaKey)}</span>
							<span class="text-(--fg-2) transition-[transform,color] duration-200 group-hover:translate-x-1 group-hover:text-(--accent)">→</span>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>

<!-- SERVICES -->
<section class="mx-auto mb-35 max-w-(--max) px-8 max-sm:px-5">
	<div class="mb-10 grid grid-cols-[1fr_2fr] gap-10 border-b border-(--line) pb-5 max-md:grid-cols-1 max-md:gap-3">
		<div class="mono pt-3 text-[11px] tracking-[0.12em] text-(--fg-4) uppercase">◆ {$_('home.servicesLabel')}</div>
		<div>
			<h2 class="serif m-0 text-[clamp(24px,3.5vw,44px)] leading-[1.05] tracking-[-0.02em]">{$_('home.servicesH2')}</h2>
			<p class="mt-3.5 mb-0 max-w-130 text-[15px] text-(--fg-3)">{$_('home.servicesP')}</p>
		</div>
	</div>

	<div class="grid grid-cols-3 gap-3.5 max-md:grid-cols-1">
		<div
			class="group relative overflow-hidden rounded-(--radius) border border-(--line) bg-(--bg-2) p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-(--fg-5)"
		>
			<div class="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-(--accent)/[0.05] to-transparent"></div>
			<div
				class="mono mb-5 inline-flex rounded-full border border-(--accent)/20 bg-(--accent)/[0.06] px-3 py-1 text-[11px] tracking-widest text-(--accent)"
			>
				{$_('home.service1Num')}
			</div>
			<h3 class="serif m-0 mb-2.5 text-[22px]">{$_('home.service1Title')}</h3>
			<p class="m-0 text-[14px] leading-[1.55] text-(--fg-3)">{$_('home.service1Desc')}</p>
			<div class="mt-4.5 flex flex-wrap gap-1.5">
				{#each serviceChips[0] as chip (chip)}<span class="chip">{chip}</span>{/each}
			</div>
		</div>
		<div
			class="group relative overflow-hidden rounded-(--radius) border border-(--line) bg-(--bg-2) p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-(--fg-5)"
		>
			<div class="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-(--accent)/[0.05] to-transparent"></div>
			<div
				class="mono mb-5 inline-flex rounded-full border border-(--accent)/20 bg-(--accent)/[0.06] px-3 py-1 text-[11px] tracking-widest text-(--accent)"
			>
				{$_('home.service2Num')}
			</div>
			<h3 class="serif m-0 mb-2.5 text-[22px]">{$_('home.service2Title')}</h3>
			<p class="m-0 text-[14px] leading-[1.55] text-(--fg-3)">{$_('home.service2Desc')}</p>
			<div class="mt-4.5 flex flex-wrap gap-1.5">
				{#each serviceChips[1] as chip (chip)}<span class="chip">{chip}</span>{/each}
			</div>
		</div>
		<div
			class="group relative overflow-hidden rounded-(--radius) border border-(--line) bg-(--bg-2) p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-(--fg-5)"
		>
			<div class="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-(--accent)/[0.05] to-transparent"></div>
			<div
				class="mono mb-5 inline-flex rounded-full border border-(--accent)/20 bg-(--accent)/[0.06] px-3 py-1 text-[11px] tracking-widest text-(--accent)"
			>
				{$_('home.service3Num')}
			</div>
			<h3 class="serif m-0 mb-2.5 text-[22px]">{$_('home.service3Title')}</h3>
			<p class="m-0 text-[14px] leading-[1.55] text-(--fg-3)">{$_('home.service3Desc')}</p>
			<div class="mt-4.5 flex flex-wrap gap-1.5">
				{#each serviceChips[2] as chip (chip)}<span class="chip">{chip}</span>{/each}
			</div>
		</div>
	</div>
</section>

<!-- TESTIMONIALS -->
<section class="mx-auto mb-35 max-w-(--max) px-8 max-sm:px-5">
	<div class="mb-10 grid grid-cols-[1fr_2fr] gap-10 border-b border-(--line) pb-5 max-md:grid-cols-1 max-md:gap-3">
		<div class="mono pt-3 text-[11px] tracking-[0.12em] text-(--fg-4) uppercase">
			◆ {$_('home.testimonialsLabel')}
		</div>
		<div>
			<h2 class="serif m-0 text-[clamp(24px,3.5vw,44px)] leading-[1.05] tracking-[-0.02em]">{$_('home.testimonialsH2')}</h2>
			<p class="mt-3.5 mb-0 max-w-130 text-[15px] text-(--fg-3)">{$_('home.testimonialsP')}</p>
		</div>
	</div>

	<div class="grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
		{#each testimonials as t (t.name)}
			<div class="relative flex flex-col overflow-hidden rounded-(--radius) border border-(--line) bg-(--bg-2) p-6">
				<div class="pointer-events-none absolute -top-2 right-4 font-serif text-[96px] leading-none text-(--accent) opacity-[0.08] select-none">"</div>
				<blockquote class="serif relative z-[1] m-0 flex-1 pb-5 text-[15px] leading-[1.65] font-light tracking-[-0.005em] text-(--fg-2)">
					{$_('home.' + t.quoteKey)}
				</blockquote>
				<div class="flex items-center gap-3 border-t border-(--line) pt-4">
					<div
						class="serif grid h-10 w-10 shrink-0 place-items-center rounded-full border border-(--line-2) bg-linear-to-br from-[#3a3a3a] to-[#1a1a1a] text-[13px] text-(--fg-3)"
					>
						{t.initials}
					</div>
					<div class="flex flex-col gap-0.5">
						<div class="text-[14px] font-medium">{t.name}</div>
						<div class="mono text-[11px] text-(--fg-4)">{$_('home.' + t.roleKey)}</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- CONTACT FOOTER -->
<div class="mx-auto max-w-(--max) px-8 pb-32 max-sm:px-5">
	<ContactFooter />
</div>

<style>
	/* Targets runtime-rendered {@html} content — Tailwind can't reach it */
	.hero-value-prop :global(strong) {
		color: var(--fg);
		font-weight: 500;
	}
</style>
