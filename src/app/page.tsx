import { redirect } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { headers } from 'next/headers';

export default async function RootPage() {
  const headerList = await headers();
  const acceptLanguage = headerList.get('accept-language') || '';

  // Tenta detectar o idioma do navegador
  let locale = routing.defaultLocale;

  // Verificar se o idioma preferido do navegador está entre os idiomas suportados
  const preferredLocale = routing.locales.find(loc =>
    acceptLanguage.toLowerCase().includes(loc.toLowerCase())
  );

  if (preferredLocale) {
    locale = preferredLocale;
  }

  // Redireciona para a versão localizada
  redirect(`/${locale}`);
}
