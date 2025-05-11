import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

// Definindo um tipo para a estrutura de mensagens
interface TranslationMessages {
  [key: string]: unknown;
  pages?: {
    home?: {
      hero?: Record<string, unknown>;
      features?: Record<string, unknown>;
    };
    about?: {
      team?: Record<string, unknown>;
      mission?: Record<string, unknown>;
    };
    contact?: {
      info?: Record<string, unknown>;
      form?: Record<string, unknown>;
    };
  };
}

export default getRequestConfig(async ({ locale }) => {
  const safeLocale = locale && routing.locales.includes(locale) ? locale : routing.defaultLocale;

  // Objeto para armazenar as mensagens
  const messages: TranslationMessages = {};

  // Carregar common.json
  try {
    const commonModule = await import(`../../locales/${safeLocale}/common.json`);
    Object.assign(messages, commonModule.default || commonModule);
  } catch (error) {
    console.error(`Erro ao carregar common.json para locale ${safeLocale}:`, error);
  }

  // Estrutura para as páginas
  messages.pages = {
    home: {},
    about: {},
    contact: {}
  };

  const loadTranslation = async (path: string): Promise<Record<string, unknown>> => {
    try {
      return await import(`../../locales/${safeLocale}/${path}.json`).then(m => m.default || m);
    } catch (error) {
      console.error(`Erro ao carregar ${path}.json para locale ${safeLocale}:`, error);
      return {};
    }
  };

  // Carregar traduções para páginas
  messages.pages.home!.hero = await loadTranslation('pages/home/hero');
  messages.pages.home!.features = await loadTranslation('pages/home/features');
  messages.pages.about!.team = await loadTranslation('pages/about/team');
  messages.pages.about!.mission = await loadTranslation('pages/about/mission');
  messages.pages.contact!.info = await loadTranslation('pages/contact/info');
  messages.pages.contact!.form = await loadTranslation('pages/contact/form');

  return {
    locale: safeLocale,
    messages
  };
});
