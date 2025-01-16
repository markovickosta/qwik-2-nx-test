import { component$ } from '@qwik.dev/core';
import { inlineTranslate } from 'qwik-speak';

export default component$(() => {
	const t = inlineTranslate();
	return (
		<>
			<h1>Test route 👋</h1>
			<div>{t('home.test')}</div>
		</>
	);
});
