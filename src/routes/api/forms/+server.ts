import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type ContactFormInterface from '$lib/interfaces/ContactFormInterface';
import { validateContactForm } from '$lib/validations/ContactFormValidation';
import { env } from '$env/dynamic/private';

const ALLOWED_ORIGINS = ['https://jankominek.com', 'http://localhost:5173', 'http://localhost:4173'];

function isValidDiscordWebhook(url: string): boolean {
	try {
		const parsed = new URL(url);
		return (
			parsed.protocol === 'https:' &&
			(parsed.hostname === 'discord.com' || parsed.hostname === 'discordapp.com') &&
			parsed.pathname.startsWith('/api/webhooks/')
		);
	} catch {
		return false;
	}
}

function sanitizeForDiscord(input: string): string {
	// Neutralise Discord ping mentions that would notify all server members
	return input.replace(/@(everyone|here)/gi, '[@$1]').trim();
}

export const POST: RequestHandler = async ({ request }) => {
	// Reject oversized payloads before parsing (50KB is generous for a contact form)
	const contentLength = Number(request.headers.get('content-length') || 0);
	if (contentLength > 50_000) {
		return new Response('Payload too large', { status: 413 });
	}

	// Require JSON content type
	const contentType = request.headers.get('content-type');
	if (!contentType?.includes('application/json')) {
		return new Response('Unsupported content type', { status: 415 });
	}

	// CSRF: reject cross-origin requests from unknown origins
	const origin = request.headers.get('origin');
	if (origin && !ALLOWED_ORIGINS.includes(origin)) {
		return new Response('Forbidden', { status: 403 });
	}

	// Safe JSON parse — malformed body returns 400 not 500
	let form: ContactFormInterface;
	try {
		form = await request.json();
	} catch {
		return new Response(JSON.stringify({ error: 'Invalid request body' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	// Validate and sanitise inputs via Zod schema
	const validationResult = validateContactForm(form);
	if (!validationResult.success) {
		return new Response(JSON.stringify({ error: 'Validation failed' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	// SSRF prevention: verify WEBHOOK_URL matches Discord's domain before fetching
	const webhookUrl = env.WEBHOOK_URL;
	if (!webhookUrl || !isValidDiscordWebhook(webhookUrl)) {
		console.error('WEBHOOK_URL is missing or does not match a valid Discord webhook URL');
		return new Response(JSON.stringify({ error: 'Server configuration error' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	const data = validationResult.data;

	// Enforce a 10-second timeout so a slow Discord API never stalls the Worker
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), 10_000);

	try {
		const discordResponse = await fetch(webhookUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			signal: controller.signal,
			body: JSON.stringify({
				content: [
					'**New contact form submission**',
					`**Name:** ${sanitizeForDiscord(data.fullName)}`,
					`**Email:** ${sanitizeForDiscord(data.email)}`,
					data.company ? `**Company:** ${sanitizeForDiscord(data.company)}` : '',
					`**Message:** ${sanitizeForDiscord(data.message)}`,
					`**Budget:** ${data.budget}`,
					data.projectType ? `**Project Type:** ${data.projectType}` : '',
					data.features.length ? `**Features:** ${data.features.join(', ')}` : '',
					data.technologies.length ? `**Technologies:** ${data.technologies.join(', ')}` : '',
					data.assets.length ? `**Assets:** ${data.assets.join(', ')}` : '',
					data.audiences.length ? `**Audiences:** ${data.audiences.join(', ')}` : '',
					data.hosting ? `**Hosting:** ${data.hosting}` : '',
					data.support ? `**Support:** ${data.support}` : '',
					data.legals.length ? `**Legals:** ${data.legals.join(', ')}` : '',
					data.deadline ? `**Deadline:** ${data.deadline.toISOString()}` : '',
					data.priority ? `**Priority:** ${data.priority}` : '',
					`**Timestamp:** ${new Date().toISOString()}`
				]
					.filter(Boolean)
					.join('\n')
			})
		});

		if (!discordResponse.ok) {
			console.error('Discord webhook returned non-OK status:', discordResponse.status);
			throw new Error('Webhook delivery failed');
		}
	} catch (err) {
		console.error('Error sending webhook:', err);
		return new Response(JSON.stringify({ error: 'Failed to deliver message' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	} finally {
		clearTimeout(timeout);
	}

	return json({ success: true });
};
