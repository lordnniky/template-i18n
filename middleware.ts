import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

export default createMiddleware(routing);

// Isso é importante: limitar o escopo do middleware para apenas
// as URLs que realmente devem ser processadas pelo i18n
export const config = {
  matcher: ['/', '/(pt|en)/:path*'],
};
