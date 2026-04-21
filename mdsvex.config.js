import { defineMDSveXConfig, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';

const highlighterPromise = createHighlighter({
	themes: ['monokai'],
	langs: ['javascript', 'typescript', 'json', 'yaml', 'csharp']
});

const config = defineMDSveXConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await highlighterPromise;

			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'monokai' }));

			return `{@html \`${html}\` }`;
		}
	}
});

export default config;
