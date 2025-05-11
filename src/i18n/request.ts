import { getRequestConfig } from 'next-intl/server';

const namespaces = [
  'common',
  'pages/home/hero',
  'pages/home/features',
  // Adicione outros namespaces fixos ou automatize conforme necessidade
];

export default getRequestConfig(async ({ locale }) => {
  const messages: Record<string, unknown> = {};

  for (const ns of namespaces) {
    try {
      messages[ns.replace(/\//g, '.')] = (await import(`../../locales/${locale}/${ns}.json`)).default;
    } catch {
      // Ignora se não existir
    }
  }

  return {
    locale: locale || 'en',
    messages
  };
});
