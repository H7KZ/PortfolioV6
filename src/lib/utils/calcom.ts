type CalObject = {
	loaded?: boolean;
	ns?: Record<string, ApiFunction>;
	q?: unknown[];
};

type ApiFunction = {
	(...args: unknown[]): void;
	q: unknown[];
};

function pushToQueue(api: { q: unknown[] }, args: unknown[]): void {
	api.q.push(args);
}

function loadScript(document: Document, scriptSrc: string): void {
	const script: HTMLScriptElement = document.createElement('script');
	script.src = scriptSrc;
	document.head.appendChild(script);
}

function handleNamespaceInit(cal: CalObject, args: unknown[]): void {
	const namespace: string = args[1] as string;

	const api: ApiFunction = function (...fnArgs: unknown[]): void {
		pushToQueue(api, fnArgs);
	} as ApiFunction;

	api.q = [];

	if (typeof namespace === 'string') {
		if (!cal.ns) cal.ns = {};
		cal.ns[namespace] = cal.ns[namespace] || api;

		pushToQueue(cal.ns[namespace], args);

		if (!cal.q) cal.q = [];
		pushToQueue({ q: cal.q }, ['initNamespace', namespace]);
	} else {
		if (!cal.q) cal.q = [];
		pushToQueue({ q: cal.q }, args);
	}
}

function calFunction(...args: unknown[]): void {
	const cal = window.Cal as unknown as CalObject;
	const initCommand: string = 'init';

	if (!cal.loaded) {
		cal.ns = {};
		cal.q = [];
		loadScript(document, 'https://app.cal.com/embed/embed.js');
		cal.loaded = true;
	}

	if (args[0] === initCommand) {
		handleNamespaceInit(cal, args);
		return;
	}

	if (!cal.q) cal.q = [];
	pushToQueue({ q: cal.q }, args);
}

window.Cal = window.Cal || calFunction;

export function initNamespace(): void {
	window.Cal('init', '30min', {
		origin: 'https://cal.com'
	});
}

export function configureInlineCalendar(id: string): void {
	if (window.Cal.ns && window.Cal.ns['30min']) {
		window.Cal.ns['30min']('inline', {
			elementOrSelector: `#${id}`,
			config: {
				layout: 'month_view',
				theme: 'dark'
			},
			calLink: 'jankominek/30min'
		});
	}
}

export function configureUI(): void {
	if (window.Cal.ns && window.Cal.ns['30min']) {
		window.Cal.ns['30min']('ui', {
			theme: 'dark',
			cssVarsPerTheme: {
				light: { 'cal-brand': '#161616' },
				dark: { 'cal-brand': '#ffffff' }
			},
			hideEventTypeDetails: false,
			layout: 'month_view'
		});
	}
}
