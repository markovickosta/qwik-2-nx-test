/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is rendered outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import {
	renderToStream,
	type RenderToStreamOptions,
} from '@qwik.dev/core/server';
import { manifest } from '@qwik-client-manifest';
import Root from './root';
import { isDev } from '@qwik.dev/core/build';
import type { RenderOptions } from '@qwik.dev/core';
import { config } from './integrations/qwik-speak/speak-config';

export function extractBase({ serverData }: RenderOptions): string {
	if (!isDev && serverData?.locale) {
		return '/build/' + serverData.locale;
	} else {
		return '/build';
	}
}

export default function (opts: RenderToStreamOptions) {
	return renderToStream(<Root />, {
		manifest,
		...opts,
		// Use container attributes to set attributes on the html tag.
		containerAttributes: {
			lang: opts.serverData?.locale || config.defaultLocale.lang,
			...opts.containerAttributes,
		},
		// Determine the base URL for the client code
		base: extractBase,
	});
}
