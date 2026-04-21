<script lang="ts">
	import { _ } from 'svelte-i18n';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import CalendarCallPicker from '$lib/components/CalendarCallPicker.svelte';
</script>

<svelte:head>
	<title>Contact — Jan Komínek, Senior Frontend Engineer</title>
	<meta
		name="description"
		content="Get in touch with Jan Komínek — Senior Frontend / Fullstack Engineer. Book a 30-min call or fill out the project form for part-time B2B contracts."
	/>
	<meta property="og:title" content="Contact — Jan Komínek, Senior Frontend Engineer" />
	<meta
		property="og:description"
		content="Book a call or fill out the project form to work with Jan Komínek, Senior Frontend Engineer, on a part-time B2B basis."
	/>
	<meta property="og:url" content="https://jankominek.com/contact" />
</svelte:head>

<div
	class="mx-auto grid max-w-(--max) grid-cols-2 gap-16 px-8 pt-10 pb-30 max-[900px]:grid-cols-1 max-[900px]:gap-12 max-[900px]:px-5 max-[900px]:pt-7 max-[900px]:pb-20"
>
	<!-- LEFT COL -->
	<div>
		<div class="mono mb-3.5 text-[11px] tracking-widest text-(--fg-4) uppercase">{$_('contact.hireLabel')}</div>
		<h1 class="serif mt-0 mb-5 text-[clamp(32px,5vw,56px)] leading-none tracking-[-0.025em]">{$_('contact.h1')}</h1>
		<p class="m-0 max-w-115 text-[17px] leading-[1.55] text-(--fg-2)">{$_('contact.intro')}</p>

		<div class="mt-9 flex flex-col gap-2.5">
			<a
				href="mailto:contact@jankominek.com"
				class="group grid grid-cols-[auto_1fr_auto] items-center gap-4.5 rounded-(--radius) border border-(--line) bg-(--bg-2) px-5.5 py-4.5 text-(--fg) no-underline transition-[border-color,transform] duration-200 hover:translate-x-1 hover:border-(--fg-5)"
			>
				<div class="mono grid h-9 w-9 place-items-center rounded-lg border border-(--line) bg-(--bg-3) text-[12px] text-(--fg-3)">@</div>
				<div class="flex flex-col gap-0.5">
					<span class="text-[14px] font-medium">{$_('contact.emailDirect')}</span>
					<span class="mono text-[11px] text-(--fg-4)">contact@jankominek.com</span>
				</div>
				<div class="text-(--fg-4) transition-colors duration-200 group-hover:text-(--accent)">→</div>
			</a>
			<a
				href="https://www.linkedin.com/in/jan-kominek"
				target="_blank"
				rel="noopener noreferrer"
				class="group grid grid-cols-[auto_1fr_auto] items-center gap-4.5 rounded-(--radius) border border-(--line) bg-(--bg-2) px-5.5 py-4.5 text-(--fg) no-underline transition-[border-color,transform] duration-200 hover:translate-x-1 hover:border-(--fg-5)"
			>
				<div class="mono grid h-9 w-9 place-items-center rounded-lg border border-(--line) bg-(--bg-3) text-[12px] text-(--fg-3)">in</div>
				<div class="flex flex-col gap-0.5">
					<span class="text-[14px] font-medium">LinkedIn</span>
					<span class="mono text-[11px] text-(--fg-4)">{$_('contact.linkedinSub')}</span>
				</div>
				<div class="text-(--fg-4) transition-colors duration-200 group-hover:text-(--accent)">→</div>
			</a>
			<a
				href="#calendar"
				class="group grid grid-cols-[auto_1fr_auto] items-center gap-4.5 rounded-(--radius) border border-(--line) bg-(--bg-2) px-5.5 py-4.5 text-(--fg) no-underline transition-[border-color,transform] duration-200 hover:translate-x-1 hover:border-(--fg-5)"
			>
				<div class="mono grid h-9 w-9 place-items-center rounded-lg border border-(--line) bg-(--bg-3) text-[12px] text-(--fg-3)">📅</div>
				<div class="flex flex-col gap-0.5">
					<span class="text-[14px] font-medium">{$_('contact.bookCall')}</span>
					<span class="mono text-[11px] text-(--fg-4)">{$_('contact.freeChat')}</span>
				</div>
				<div class="text-(--fg-4) transition-colors duration-200 group-hover:text-(--accent)">→</div>
			</a>
		</div>

		<div class="mt-10 rounded-(--radius) border border-dashed border-(--line-2) px-5.5 py-4.5 text-[13px] leading-[1.6] text-(--fg-3)">
			<div class="mono mb-3.5 text-[11px] tracking-widest text-(--accent) uppercase">{$_('contact.whatToInclude')}</div>
			<p class="m-0">{$_('contact.whatToIncludeText')}</p>
		</div>
	</div>

	<!-- RIGHT COL -->
	<div>
		<div class="mb-5 rounded-lg border border-(--line) bg-(--bg-2) p-7">
			<div class="mb-6 flex items-end justify-between border-b border-(--line) pb-4.5">
				<h3 class="serif m-0 text-[20px] font-normal">{$_('contact.projectBrief')}</h3>
				<div class="mono text-[11px] tracking-widest text-(--fg-4) uppercase">{$_('contact.formStep')}</div>
			</div>
			<ContactForm />
		</div>

		<div class="rounded-lg border border-(--line) bg-(--bg-2) p-7" id="calendar">
			<div class="mono mb-3.5 text-[11px] tracking-widest text-(--fg-4) uppercase">{$_('contact.skipForm')}</div>
			<p class="mt-0 mb-5 text-[14px] leading-[1.55] text-(--fg-2)">{$_('contact.skipFormDesc')}</p>
			<CalendarCallPicker />
		</div>
	</div>
</div>
