import type { RequestHandler } from '@qwik.dev/router';
import { config } from '../integrations/qwik-speak/speak-config';
import fs from 'fs';
import { pluginLogic } from '@qwik-2-nx-test-workspace/util-multilingual';

const allowedLangs = ['', 'en', 'sr'];

export const onGet: RequestHandler = ({ params, locale, html, redirect }) => {
	pluginLogic(
		allowedLangs,
		config,
		import.meta.env.DEV
			? `dist/apps/testing-app/dist/`
			: `../../dist/apps/testing-app/dist/`,
		params,
		locale,
		html,
		redirect,
		fs,
	);
};
