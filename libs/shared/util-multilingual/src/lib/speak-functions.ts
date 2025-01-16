import type { LoadTranslationFn, Translation, TranslationFn } from "qwik-speak";

import { server$ } from "@qwik.dev/router";

/**
 * Translation files are lazy-loaded via dynamic import and will be split into separate chunks during build.
 * Keys must be valid variable names
 */
const translationData = import.meta.glob<Translation>("/i18n/**/*.json");

/**
 * Using server$, translation data is always accessed on the server
 */
const loadTranslation$: LoadTranslationFn = server$(
  async (lang: string, asset: string) =>
    await translationData[`/i18n/${lang}/${asset}.json`]?.()
);

export const translationFn: TranslationFn = {
  loadTranslation$: loadTranslation$,
};
