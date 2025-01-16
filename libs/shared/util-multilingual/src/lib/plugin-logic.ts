import {
  AbortMessage,
  RedirectMessage,
} from '@qwik.dev/router/middleware/request-handler';

import { SpeakConfig } from 'qwik-speak';
import { isDev } from '@qwik.dev/core/build';

export function pluginLogic(
  allowedLangs: string[],
  config: SpeakConfig,
  pathTo404: string,
  params: Readonly<Record<string, string>>,
  locale: (local?: string | undefined) => string,
  html: (statusCode: number, html: string) => AbortMessage,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  redirect: (statusCode: any, url: string) => RedirectMessage,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fs: any,
) {
  const lang = params['lang'];

  if (lang === undefined) {
    locale(config.defaultLocale.lang);
    return;
  }

  if (!allowedLangs.includes(lang)) {
    const appPathPrefix = import.meta.env['PUBLIC_APP_PREFIX'];
    if (!isDev) {
      const langPath = lang.substring(0, 3) === 'en/' ? '/en' : '';
      //   console.log('Ovde sam', { lang, langPath });
      //   const pathTo404Full = `${pathTo404}${appPathPrefix ? appPathPrefix + '/' : ''}${langPath}/404/404.html`;

      //   locale(langPath);

      //   const htmlAsString = fs.readFileSync(pathTo404Full, 'utf8');
      //   throw html(404, htmlAsString);

      // const langPath = lang ? `/${lang}` : '';
      throw redirect(302, `${langPath}/404/`);
    } else {
      throw redirect(302, `${appPathPrefix ? '/' + appPathPrefix : ''}/404`);
    }
  }
  // Set Qwik locale
  locale(lang || config.defaultLocale.lang);
}
