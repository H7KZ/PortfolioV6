import { locale, locales } from 'svelte-i18n';
import { get } from 'svelte/store';

const ALLOWED = ['en', 'cs'];

export function parseLocale(param: string): string {
	const match = param.match(/^[a-z]+(?=[-_])/i) ?? param.match(/^[a-z]+/i);
	const parsed = match ? match[0].toLowerCase() : 'en';
	return ALLOWED.includes(parsed) ? parsed : 'en';
}

export function cycleLocale(): void {
	const all = get(locales) ?? ['en', 'cs'];
	const current = get(locale) ?? 'en';
	const idx = all.indexOf(current);
	locale.set(all[(idx + 1) % all.length]);
}
