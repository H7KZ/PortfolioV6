export type ProjectImpact = { label: string; value: string; sub: string };
export type ProjectContribution = { num: string; title: string; body: string };

export type Project = {
	slug: string;
	date: string;
	title: string;
	thumbnail: string;
	tags: string[];
	order?: number;
	// Rich case study fields (opt-in via `lede` presence)
	lede?: string;
	client?: string;
	role?: string;
	team?: string;
	timeline?: string;
	sector?: string;
	impact?: ProjectImpact[];
	contributions?: ProjectContribution[];
	stack?: string[];
	gallery?: string[];
};

export type Post = {
	slug: string;
	date: string;
	title: string;
	author: string;
	thumbnail: string | null;
	tags: string[];
	description?: string;
	readingTime?: number;
};
