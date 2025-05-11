import {routing} from './routing';

// Redireciona '/' para o defaultLocale
const redirects = [
  {
    source: '/',
    destination: `/${routing.defaultLocale}`,
    permanent: false
  },
  ...routing.locales
    .filter(locale => locale !== routing.defaultLocale)
    .map(locale => ({
      source: `/${locale}`,
      destination: `/${locale}`,
      permanent: false
    }))
];

export default redirects;
