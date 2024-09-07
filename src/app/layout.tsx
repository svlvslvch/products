import type { Metadata } from 'next';

import MainHeader from '@components/MainHeader/MainHeader';

import { openSans } from '@shared/fonts/fonts';

import './globals.scss';

export const metadata: Metadata = {
  title: {
    template: '%s | Products',
    default: 'Products',
  },
  description: 'Некое описание Products',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
