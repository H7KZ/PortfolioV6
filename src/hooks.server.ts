import type { Handle } from '@sveltejs/kit';

// Cal.com loads embed.js from app.cal.com and renders an iframe from cal.com.
// Google Fonts CSS is fetched from fonts.googleapis.com; font files from fonts.gstatic.com.
// Google Analytics loads from googletagmanager.com and sends beacons to google-analytics.com.
// SvelteKit injects inline scripts for hydration, so 'unsafe-inline' is required in script-src
// until nonce-based CSP is adopted via config.kit.csp in svelte.config.js.
const CSP = [
	"default-src 'self'",
	"script-src 'self' 'unsafe-inline' https://app.cal.com https://www.googletagmanager.com https://www.google-analytics.com",
	"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
	"font-src 'self' https://fonts.gstatic.com",
	"img-src 'self' data: https: https://www.google-analytics.com",
	"connect-src 'self' https://app.cal.com https://cal.com https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com",
	'frame-src https://app.cal.com https://cal.com',
	"object-src 'none'",
	"base-uri 'self'",
	"form-action 'self'",
	"frame-ancestors 'none'",
	'upgrade-insecure-requests'
].join('; ');

export const handle: Handle = async ({ event, resolve }) => {
	// 301 redirect for old misspelled URL that may be indexed by search engines
	if (event.url.pathname === '/projects/disenchament') {
		return new Response(null, {
			status: 301,
			headers: {
				Location: '/projects/disenchantment' + event.url.search,
				'Cache-Control': 'public, max-age=31536000'
			}
		});
	}

	const response = await resolve(event);

	// Long-lived cache for immutable static assets (images, fonts, favicons)
	const { pathname } = event.url;
	if (pathname.startsWith('/images/') || pathname.startsWith('/fonts/') || pathname.startsWith('/favicon/')) {
		response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
	}

	response.headers.set('Content-Security-Policy', CSP);
	response.headers.set('X-Content-Type-Options', 'nosniff');
	// DENY is stricter than SAMEORIGIN; frame-ancestors 'none' in CSP covers modern browsers
	response.headers.set('X-Frame-Options', 'DENY');
	// Explicitly disable the broken legacy XSS auditor (0 = disabled)
	response.headers.set('X-XSS-Protection', '0');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');
	response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
	response.headers.set('Cross-Origin-Resource-Policy', 'same-origin');

	return response;
};
