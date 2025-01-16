import type { SpeakConfig } from 'qwik-speak';

export const config: SpeakConfig = {
	defaultLocale: { lang: 'sr', currency: 'RSD' },
	supportedLocales: [
		{ lang: 'sr', currency: 'RSD' },
		{ lang: 'en', currency: 'EUR' },
	],
	assets: [
		// "app", // Translations shared by the pages
	],
};
