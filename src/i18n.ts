import { init, register } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('cs', () => import('./locales/cs.json'));

init({
	initialLocale: 'en',
	fallbackLocale: 'en'
});
