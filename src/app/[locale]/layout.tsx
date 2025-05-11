import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import React from 'react';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: {
    locale: string
  }
}) {
  const resolvedParams = await Promise.resolve(props.params);
  const locale = resolvedParams.locale || routing.defaultLocale;
  const messages = await getMessages({ locale });

  return (
    <>
      <NextIntlClientProvider
        messages={messages}
        locale={locale}
      >
        {props.children}
      </NextIntlClientProvider>
    </>
  );
}
