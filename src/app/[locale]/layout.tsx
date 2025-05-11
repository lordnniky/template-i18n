import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import React from 'react';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {
    locale: string
  }
}) {
  const messages = await getMessages();
  return (
    <html lang={params.locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages} locale={params.locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
