export function trackPageView(url: string, title: string): void {
	if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
		window.gtag('event', 'page_view', {
			page_title: title,
			page_location: url
		});
	}
}

export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>): void {
	if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
		window.gtag('event', eventName, params);
	}
}
