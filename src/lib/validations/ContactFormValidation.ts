import { z } from 'zod';

export interface ContactFormInterface {
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
		features: [],
		technologies: [],
		assets: [],
		audiences: [],
		hosting: '',
		support: '',
		legals: [],
		deadline: '',
		priority: ''
	};
}

export const ContactFormValidationSchema = z.object({
	fullName: z.string().trim().min(1).max(100),
	email: z.email().trim().min(1).max(254),
	company: z.string().trim().max(100),
	message: z.string().trim().min(1).max(5000),
	budget: z.number().min(1000).max(25000),
	projectType: z.string().max(50),
	features: z.array(z.string().max(50)).max(20),
	technologies: z.array(z.string().max(50)).max(20),
	assets: z.array(z.string().max(50)).max(10),
	audiences: z.array(z.string().max(50)).max(10),
	hosting: z.string().max(50),
	support: z.string().max(50),
	legals: z.array(z.string().max(50)).max(10),
	deadline: z.date().nullable(),
	priority: z.string().min(1).max(50)
});

export function validateContactForm(form: ContactFormInterface) {
	return ContactFormValidationSchema.safeParse({
		...form,
		deadline: form.deadline ? new Date(form.deadline) : null
	});
}
