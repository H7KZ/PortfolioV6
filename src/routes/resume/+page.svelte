<script lang="ts">
	import ContactFooter from '$lib/components/ContactFooter.svelte';
	import { _ } from 'svelte-i18n';
	import { trackEvent } from '$lib/utils/analytics';
</script>

<svelte:head>
	<title>Resumé — Jan Komínek, Senior Frontend Engineer</title>
	<meta
		name="description"
		content="Resumé of Jan Komínek — Senior Frontend / Fullstack Engineer based in Prague. Vue.js, React.js, TypeScript, Node.js, Docker. Available for part-time B2B contracts."
	/>
	<meta property="og:title" content="Resumé — Jan Komínek, Senior Frontend Engineer" />
	<meta property="og:description" content="Resumé of Jan Komínek — Senior Frontend / Fullstack Engineer. Vue.js, React.js, TypeScript, Node.js." />
	<meta property="og:url" content="https://jankominek.com/resume" />
</svelte:head>

<!-- RESUME HEADER -->
<div
	class="mx-auto mb-16 grid max-w-(--max) grid-cols-[auto_1fr] items-center gap-12 border-b border-(--line) px-8 pt-10 pb-16 max-[700px]:grid-cols-1 max-[700px]:gap-7 max-[700px]:px-5 max-[700px]:pt-7 max-[700px]:pb-10"
>
	<div
		class="h-65 w-65 shrink-0 overflow-hidden rounded-lg border border-(--line-2) bg-linear-to-br from-[#2a2a2a] to-[#161616] max-[700px]:h-30 max-[700px]:w-30"
	>
		<img
			src="/images/resume_profile.webp"
			alt="Jan Komínek, portrait"
			width="532"
			height="576"
			loading="lazy"
			decoding="async"
			class="h-full w-full object-cover object-top"
		/>
	</div>
	<div>
		<div class="mono mb-3.5 text-[11px] tracking-widest text-(--fg-4) uppercase">{$_('resume.label')}</div>
		<h1 class="serif m-0 mb-1.5 text-[clamp(36px,5.5vw,64px)] leading-none tracking-[-0.025em]">Jan Komínek<span class="text-(--fg-3)">.</span></h1>
		<p class="mono m-0 mb-5 text-[13px] tracking-[0.02em] text-(--fg-3)">{$_('resume.subtitle')}</p>
		<p class="m-0 max-w-140 text-[15px] leading-[1.65] text-(--fg-2)">{$_('resume.bio')}</p>
		<div class="mt-6 flex flex-wrap gap-3">
			<a
				href="/files/Jan_Kominek_Resume.pdf"
				download
				class="inline-flex items-center gap-2 rounded-full bg-(--fg) px-5 py-2.75 text-[14px] font-medium text-(--bg) no-underline transition-all duration-200 hover:bg-(--accent)"
				onclick={() => trackEvent('file_download', { file_name: 'resume_pdf' })}
			>
				{$_('resume.download')}
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M12 3v13M5 10l7 7 7-7M3 21h18" />
				</svg>
			</a>
			<a
				href="/contact"
				class="inline-flex items-center gap-2 rounded-full border border-(--line-2) px-5 py-2.75 text-[14px] text-(--fg) no-underline transition-all duration-200 hover:border-(--fg-3)"
				>{$_('resume.hireBtn')}</a
			>
		</div>
	</div>
</div>

<!-- IMPACT BAND -->
<div class="mx-auto mb-25 max-w-(--max) px-8 max-sm:px-5">
	<div class="grid grid-cols-4 overflow-hidden rounded-(--radius) border border-(--line) bg-(--bg-2) max-md:grid-cols-2">
		<div class="border-r border-(--line) p-6 last:border-r-0 max-md:nth-[-n+2]:border-b max-md:nth-[-n+2]:border-b-(--line) max-md:nth-[2n]:border-r-0">
			<div class="mono mb-3 text-[10px] tracking-widest text-(--fg-4) uppercase">{$_('resume.impact1Label')}</div>
			<div class="serif text-[34px] leading-none tracking-[-0.02em]">4+ <span class="mono text-[20px] text-(--fg-4)">yrs</span></div>
			<div class="mono mt-1.5 text-[11px] text-(--fg-4)">{$_('resume.impact1Sub')}</div>
		</div>
		<div class="border-r border-(--line) p-6 last:border-r-0 max-md:nth-[-n+2]:border-b max-md:nth-[-n+2]:border-b-(--line) max-md:nth-[2n]:border-r-0">
			<div class="mono mb-3 text-[10px] tracking-widest text-(--fg-4) uppercase">{$_('resume.impact2Label')}</div>
			<div class="serif text-[34px] leading-none tracking-[-0.02em]">7</div>
			<div class="mono mt-1.5 text-[11px] text-(--fg-4)">{$_('resume.impact2Sub')}</div>
		</div>
		<div class="border-r border-(--line) p-6 last:border-r-0 max-md:nth-[-n+2]:border-b max-md:nth-[-n+2]:border-b-(--line) max-md:nth-[2n]:border-r-0">
			<div class="mono mb-3 text-[10px] tracking-widest text-(--fg-4) uppercase">{$_('resume.impact3Label')}</div>
			<div class="mono text-[18px] leading-none tracking-[-0.02em]">TS + Vue + Node</div>
			<div class="mono mt-1.5 text-[11px] text-(--fg-4)">{$_('resume.impact3Sub')}</div>
		</div>
		<div class="border-r border-(--line) p-6 last:border-r-0 max-md:nth-[-n+2]:border-b max-md:nth-[-n+2]:border-b-(--line) max-md:nth-[2n]:border-r-0">
			<div class="mono mb-3 text-[10px] tracking-widest text-(--fg-4) uppercase">{$_('resume.impact4Label')}</div>
			<div class="mono text-[18px] leading-none text-(--accent)">◆ Available</div>
			<div class="mono mt-1.5 text-[11px] text-(--fg-4)">{$_('resume.impact4Sub')}</div>
		</div>
	</div>
</div>

<!-- EXPERIENCE -->
<section class="mx-auto mb-25 max-w-(--max) px-8 max-sm:px-5">
	<div class="mb-10 grid grid-cols-[1fr_2fr] gap-10 border-b border-(--line) pb-5 max-md:grid-cols-1 max-md:gap-3">
		<div class="mono pt-3 text-[11px] tracking-[0.12em] text-(--fg-4) uppercase">{$_('resume.experienceLabel')}</div>
		<div>
			<h2 class="serif m-0 text-[clamp(24px,3vw,42px)] leading-[1.05] tracking-[-0.02em]">{$_('resume.expH2')}</h2>
			<p class="mt-3 mb-0 text-[14px] text-(--fg-3)">{$_('resume.expP')}</p>
		</div>
	</div>

	<div class="timeline relative pl-8">
		<div class="tl-item current relative pb-10">
			<div class="mono mb-1 text-[11px] tracking-[0.06em] text-(--fg-4)">
				{$_('resume.exp1Dates')} <span class="ml-1.5 text-(--fg-3)">· {$_('resume.exp1Duration')}</span>
			</div>
			<h3 class="m-0 mb-1 text-[18px] font-medium">{$_('resume.exp1Role')}</h3>
			<div class="mono mb-2.5 text-[12px] tracking-[0.02em] text-(--accent)">{$_('resume.exp1Company')}</div>
			<p class="m-0 mb-3 text-[14px] leading-[1.55] text-(--fg-2)">{$_('resume.exp1Desc')}</p>
			<ul class="tl-highlights m-0 mb-3 flex list-none flex-col gap-1.25 p-0">
				<li class="relative pl-3.5 text-[13px] leading-normal text-(--fg-3)">{$_('resume.exp1Hi1')}</li>
				<li class="relative pl-3.5 text-[13px] leading-normal text-(--fg-3)">{$_('resume.exp1Hi2')}</li>
				<li class="relative pl-3.5 text-[13px] leading-normal text-(--fg-3)">{$_('resume.exp1Hi3')}</li>
			</ul>
			<div class="flex flex-wrap gap-1.25">
				<span class="chip accent">Vue 3</span>
				<span class="chip">TypeScript</span>
				<span class="chip">D3.js</span>
				<span class="chip">AWS Cognito</span>
				<span class="chip">Vite</span>
				<span class="chip">pnpm</span>
			</div>
		</div>

		<div class="tl-item current relative pb-10">
			<div class="mono mb-1 text-[11px] tracking-[0.06em] text-(--fg-4)">
				{$_('resume.exp2Dates')} <span class="ml-1.5 text-(--fg-3)">· {$_('resume.exp2Duration')}</span>
			</div>
			<h3 class="m-0 mb-1 text-[18px] font-medium">{$_('resume.exp2Role')}</h3>
			<div class="mono mb-2.5 text-[12px] tracking-[0.02em] text-(--accent)">{$_('resume.exp2Company')}</div>
			<p class="m-0 mb-3 text-[14px] leading-[1.55] text-(--fg-2)">{$_('resume.exp2Desc')}</p>
			<ul class="tl-highlights m-0 mb-3 flex list-none flex-col gap-1.25 p-0">
				<li class="relative pl-3.5 text-[13px] leading-normal text-(--fg-3)">{$_('resume.exp2Hi1')}</li>
				<li class="relative pl-3.5 text-[13px] leading-normal text-(--fg-3)">{$_('resume.exp2Hi2')}</li>
				<li class="relative pl-3.5 text-[13px] leading-normal text-(--fg-3)">{$_('resume.exp2Hi3')}</li>
			</ul>
			<div class="flex flex-wrap gap-1.25">
				<span class="chip accent">Node.js</span>
				<span class="chip">TypeScript</span>
				<span class="chip">Nuxt</span>
				<span class="chip">AdonisJS</span>
				<span class="chip">PostgreSQL</span>
				<span class="chip">Redis</span>
				<span class="chip">Elasticsearch</span>
			</div>
		</div>

		<div class="tl-item relative pb-10">
			<div class="mono mb-1 text-[11px] tracking-[0.06em] text-(--fg-4)">
				{$_('resume.exp3Dates')} <span class="ml-1.5 text-(--fg-3)">· {$_('resume.exp3Duration')}</span>
			</div>
			<h3 class="m-0 mb-1 text-[18px] font-medium">{$_('resume.exp3Role')}</h3>
			<div class="mono mb-2.5 text-[12px] tracking-[0.02em] text-(--accent)">{$_('resume.exp3Company')}</div>
			<p class="m-0 mb-3 text-[14px] leading-[1.55] text-(--fg-2)">{$_('resume.exp3Desc')}</p>
		</div>

		<div class="tl-item relative pb-10">
			<div class="mono mb-1 text-[11px] tracking-[0.06em] text-(--fg-4)">
				{$_('resume.exp4Dates')} <span class="ml-1.5 text-(--fg-3)">· {$_('resume.exp4Duration')}</span>
			</div>
			<h3 class="m-0 mb-1 text-[18px] font-medium">{$_('resume.exp4Role')}</h3>
			<div class="mono mb-2.5 text-[12px] tracking-[0.02em] text-(--accent)">{$_('resume.exp4Company')}</div>
			<p class="m-0 mb-3 text-[14px] leading-[1.55] text-(--fg-2)">{$_('resume.exp4Desc')}</p>
			<ul class="tl-highlights m-0 mb-3 flex list-none flex-col gap-1.25 p-0">
				<li class="relative pl-3.5 text-[13px] leading-normal text-(--fg-3)">{$_('resume.exp4Hi1')}</li>
				<li class="relative pl-3.5 text-[13px] leading-normal text-(--fg-3)">{$_('resume.exp4Hi2')}</li>
				<li class="relative pl-3.5 text-[13px] leading-normal text-(--fg-3)">{$_('resume.exp4Hi3')}</li>
			</ul>
			<div class="flex flex-wrap gap-1.25">
				<span class="chip">SvelteKit</span>
				<span class="chip">Fastify</span>
				<span class="chip">TypeScript</span>
				<span class="chip">Docker Swarm</span>
				<span class="chip">MongoDB</span>
				<span class="chip">Redis</span>
				<span class="chip">Linux</span>
			</div>
		</div>

		<div class="tl-item relative pb-10">
			<div class="mono mb-1 text-[11px] tracking-[0.06em] text-(--fg-4)">
				{$_('resume.exp5Dates')} <span class="ml-1.5 text-(--fg-3)">· {$_('resume.exp5Duration')}</span>
			</div>
			<h3 class="m-0 mb-1 text-[18px] font-medium">{$_('resume.exp5Role')}</h3>
			<div class="mono mb-2.5 text-[12px] tracking-[0.02em] text-(--accent)">{$_('resume.exp5Company')}</div>
			<p class="m-0 mb-3 text-[14px] leading-[1.55] text-(--fg-2)">{$_('resume.exp5Desc')}</p>
			<div class="flex flex-wrap gap-1.25">
				<span class="chip">React</span>
				<span class="chip">Node.js</span>
				<span class="chip">Playwright</span>
				<span class="chip">SQL</span>
			</div>
		</div>

		<div class="tl-item relative pb-10">
			<div class="mono mb-1 text-[11px] tracking-[0.06em] text-(--fg-4)">
				{$_('resume.exp6Dates')} <span class="ml-1.5 text-(--fg-3)">· {$_('resume.exp6Duration')}</span>
			</div>
			<h3 class="m-0 mb-1 text-[18px] font-medium">{$_('resume.exp6Role')}</h3>
			<div class="mono mb-2.5 text-[12px] tracking-[0.02em] text-(--accent)">{$_('resume.exp6Company')}</div>
			<p class="m-0 mb-3 text-[14px] leading-[1.55] text-(--fg-2)">{$_('resume.exp6Desc')}</p>
			<div class="flex flex-wrap gap-1.25">
				<span class="chip">Vue.js</span>
				<span class="chip">TypeScript</span>
				<span class="chip">Tailwind</span>
			</div>
		</div>

		<div class="tl-item relative pb-10">
			<div class="mono mb-1 text-[11px] tracking-[0.06em] text-(--fg-4)">
				{$_('resume.exp7Dates')} <span class="ml-1.5 text-(--fg-3)">· {$_('resume.exp7Duration')}</span>
			</div>
			<h3 class="m-0 mb-1 text-[18px] font-medium">{$_('resume.exp7Role')}</h3>
			<div class="mono mb-2.5 text-[12px] tracking-[0.02em] text-(--accent)">{$_('resume.exp7Company')}</div>
			<p class="m-0 mb-3 text-[14px] leading-[1.55] text-(--fg-2)">{$_('resume.exp7Desc')}</p>
		</div>
	</div>
</section>

<!-- EDUCATION -->
<section class="mx-auto mb-25 max-w-(--max) px-8 max-sm:px-5">
	<div class="mb-10 grid grid-cols-[1fr_2fr] gap-10 border-b border-(--line) pb-5 max-md:grid-cols-1 max-md:gap-3">
		<div class="mono pt-3 text-[11px] tracking-[0.12em] text-(--fg-4) uppercase">{$_('resume.educationLabel')}</div>
		<div>
			<h2 class="serif m-0 text-[clamp(24px,3vw,42px)] leading-[1.05] tracking-[-0.02em]">{$_('resume.eduH2')}</h2>
		</div>
	</div>

	<div class="timeline relative pl-8">
		<div class="tl-item current relative pb-10">
			<div class="mono mb-1 text-[11px] tracking-[0.06em] text-(--fg-4)">
				{$_('resume.edu1Dates')} <span class="ml-1.5 text-(--fg-3)">· {$_('resume.edu1Duration')}</span>
			</div>
			<h3 class="m-0 mb-1 text-[18px] font-medium">{$_('resume.edu1Role')}</h3>
			<div class="mono mb-2.5 text-[12px] tracking-[0.02em] text-(--accent)">{$_('resume.edu1Org')}</div>
			<p class="m-0 mb-3 text-[14px] leading-[1.55] text-(--fg-2)">{$_('resume.edu1Desc')}</p>
			<ul class="tl-highlights m-0 mb-3 flex list-none flex-col gap-1.25 p-0">
				<li class="relative pl-3.5 text-[13px] leading-normal text-(--fg-3)">{$_('resume.edu1Hi1')}</li>
				<li class="relative pl-3.5 text-[13px] leading-normal text-(--fg-3)">{$_('resume.edu1Hi2')}</li>
			</ul>
		</div>
		<div class="tl-item relative pb-10">
			<div class="mono mb-1 text-[11px] tracking-[0.06em] text-(--fg-4)">
				{$_('resume.edu2Dates')} <span class="ml-1.5 text-(--fg-3)">· {$_('resume.edu2Duration')}</span>
			</div>
			<h3 class="m-0 mb-1 text-[18px] font-medium">{$_('resume.edu2Role')}</h3>
			<div class="mono mb-2.5 text-[12px] tracking-[0.02em] text-(--accent)">{$_('resume.edu2Org')}</div>
			<p class="m-0 mb-3 text-[14px] leading-[1.55] text-(--fg-2)">{$_('resume.edu2Desc')}</p>
		</div>
	</div>
</section>

<!-- SKILLS -->
<section class="mx-auto mb-25 max-w-(--max) px-8 max-sm:px-5">
	<div class="mb-10 grid grid-cols-[1fr_2fr] gap-10 border-b border-(--line) pb-5 max-md:grid-cols-1 max-md:gap-3">
		<div class="mono pt-3 text-[11px] tracking-[0.12em] text-(--fg-4) uppercase">{$_('resume.toolsLabel')}</div>
		<div>
			<h2 class="serif m-0 text-[clamp(24px,3vw,42px)] leading-[1.05] tracking-[-0.02em]">{$_('resume.skillsH2')}</h2>
			<p class="mt-3 mb-0 text-[14px] text-(--fg-3)">{$_('resume.skillsP')}</p>
		</div>
	</div>

	<div class="grid grid-cols-4 gap-8 max-[480px]:grid-cols-1 max-md:grid-cols-2">
		<div>
			<h4 class="mono m-0 mb-3.5 border-b border-(--line) pb-2.5 text-[10px] font-medium tracking-[0.12em] text-(--fg-4) uppercase">
				{$_('resume.skillGroup1')}
			</h4>
			<div class="flex flex-col gap-2 text-[14px]">
				<span class="skill primary font-medium text-(--fg)">TypeScript</span>
				<span class="skill primary font-medium text-(--fg)">Vue.js</span>
				<span class="skill primary font-medium text-(--fg)">Node.js</span>
				<span class="skill text-(--fg-2)">React.js</span>
				<span class="skill text-(--fg-2)">SvelteKit</span>
				<span class="skill text-(--fg-2)">Nuxt.js</span>
				<span class="skill text-(--fg-2)">AdonisJS</span>
				<span class="skill text-(--fg-2)">Fastify</span>
				<span class="skill text-(--fg-2)">Express</span>
			</div>
		</div>
		<div>
			<h4 class="mono m-0 mb-3.5 border-b border-(--line) pb-2.5 text-[10px] font-medium tracking-[0.12em] text-(--fg-4) uppercase">
				{$_('resume.skillGroup2')}
			</h4>
			<div class="flex flex-col gap-2 text-[14px]">
				<span class="skill primary font-medium text-(--fg)">PostgreSQL</span>
				<span class="skill primary font-medium text-(--fg)">MongoDB</span>
				<span class="skill primary font-medium text-(--fg)">Redis</span>
				<span class="skill text-(--fg-2)">MySQL</span>
				<span class="skill text-(--fg-2)">Elasticsearch</span>
				<span class="skill text-(--fg-2)">BullMQ</span>
				<span class="skill text-(--fg-2)">REST APIs</span>
				<span class="skill text-(--fg-2)">GraphQL</span>
			</div>
		</div>
		<div>
			<h4 class="mono m-0 mb-3.5 border-b border-(--line) pb-2.5 text-[10px] font-medium tracking-[0.12em] text-(--fg-4) uppercase">
				{$_('resume.skillGroup3')}
			</h4>
			<div class="flex flex-col gap-2 text-[14px]">
				<span class="skill primary font-medium text-(--fg)">Docker</span>
				<span class="skill primary font-medium text-(--fg)">CI/CD</span>
				<span class="skill primary font-medium text-(--fg)">Linux</span>
				<span class="skill text-(--fg-2)">Docker Swarm</span>
				<span class="skill text-(--fg-2)">Kubernetes</span>
				<span class="skill text-(--fg-2)">DigitalOcean</span>
				<span class="skill text-(--fg-2)">AWS (Cognito)</span>
				<span class="skill text-(--fg-2)">Traefik</span>
				<span class="skill text-(--fg-2)">Bash</span>
			</div>
		</div>
		<div>
			<h4 class="mono m-0 mb-3.5 border-b border-(--line) pb-2.5 text-[10px] font-medium tracking-[0.12em] text-(--fg-4) uppercase">
				{$_('resume.skillGroup4')}
			</h4>
			<div class="flex flex-col gap-2 text-[14px]">
				<span class="skill primary font-medium text-(--fg)">Git</span>
				<span class="skill primary font-medium text-(--fg)">Figma</span>
				<span class="skill text-(--fg-2)">Agile / Scrum</span>
				<span class="skill text-(--fg-2)">UX Design</span>
				<span class="skill text-(--fg-2)">System Architecture</span>
				<span class="skill text-(--fg-2)">Power BI</span>
				<span class="skill text-(--fg-2)">Network Security</span>
			</div>
		</div>
	</div>
</section>

<div class="mx-auto max-w-(--max) px-8 pb-32 max-sm:px-5">
	<ContactFooter />
</div>

<style>
	/* Timeline vertical rule */
	.timeline::before {
		content: '';
		position: absolute;
		left: 5px;
		top: 8px;
		bottom: 8px;
		width: 1px;
		background: var(--line-2);
	}

	/* Timeline dot */
	.tl-item::before {
		content: '';
		position: absolute;
		left: -30px;
		top: 10px;
		width: 11px;
		height: 11px;
		border-radius: 50%;
		background: var(--bg);
		border: 2px solid var(--fg-3);
	}

	/* Active/current dot */
	.tl-item.current::before {
		background: var(--accent);
		border-color: var(--accent);
		box-shadow: 0 0 12px var(--accent);
	}

	/* Bullet markers for highlights */
	.tl-highlights li::before {
		content: '—';
		position: absolute;
		left: 0;
		color: var(--fg-5);
	}

	/* Accent dot after primary skills */
	.skill.primary::after {
		content: '';
		display: inline-block;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: var(--accent);
		margin-left: 8px;
		vertical-align: middle;
		transform: translateY(-2px);
	}
</style>
