import './global.css';

import {
	QwikRouterProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from '@qwik.dev/router';

import { QwikPartytown } from './partytown';
import { RouterHead } from './components/router-head/router-head';
import { component$ } from '@qwik.dev/core';
import { config } from './integrations/qwik-speak/speak-config';
import { isDev } from '@qwik.dev/core';
import { translationFn } from '@qwik-2-test-workspace/util-multilingual';
import { useQwikSpeak } from 'qwik-speak';

export default component$(() => {
	/**
	 * The root of a QwikCity site always start with the <QwikCityProvider> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Don't remove the `<head>` and `<body>` elements.
	 */
	useQwikSpeak({ config, translationFn });

	return (
		<QwikRouterProvider>
			<head>
				<meta charset="utf-8" />
				{!isDev && (
					<link
						rel="manifest"
						href={`${import.meta.env.BASE_URL}manifest.json`}
					/>
				)}
				<QwikPartytown forward={['dataLayer.push']} />
				<RouterHead />
			</head>
			<body lang="en">
				<RouterOutlet />
				{!isDev && <ServiceWorkerRegister />}
			</body>
		</QwikRouterProvider>
	);
});
