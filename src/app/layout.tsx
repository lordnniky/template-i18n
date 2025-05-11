import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Criptonic',
  description: 'Criptonic Landing Page',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Não tentamos acessar o locale aqui, deixamos isso para o layout interno
  return (
    <html>
      <body className="antialiased">{children}</body>
    </html>
  );
}
