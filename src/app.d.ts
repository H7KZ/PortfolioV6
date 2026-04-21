declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}

		interface Platform {
			env: {
				COUNTER: DurableObjectNamespace;
			};
			context: {
				waitUntil(promise: Promise<unknown>): void;
			};
			caches: CacheStorage & { default: Cache };
		}
	}

	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		Cal: any;
		gtag: (...args: unknown[]) => void;
		dataLayer: unknown[];
	}
}

export {};
