export default interface ContactFormInterface {
	fullName: string;
	email: string;
	company: string;
	message: string;
	budget: number;
	projectType: string;
	features: string[];
	technologies: string[];
	assets: string[];
	audiences: string[];
	hosting: string;
	support: string;
	legals: string[];
	deadline: string;
	priority: string;
}

export function getInitialContactForm(): ContactFormInterface {
	return {
		fullName: '',
		email: '',
		company: '',
		message: '',
		budget: 2500,
		projectType: '',
		features: [] as string[],
		technologies: [] as string[],
		assets: [] as string[],
		audiences: [] as string[],
		hosting: '',
		support: '',
		legals: [] as string[],
		deadline: '',
		priority: ''
	};
}
