export function formatDate(
	dateStr: string,
	loc: string | null | undefined,
	options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric', timeZone: 'UTC' }
): string {
	return new Date(dateStr).toLocaleDateString(loc ?? 'en', options);
}
