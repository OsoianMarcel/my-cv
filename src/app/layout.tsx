import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { themeScript } from '@/utils/themeScript';
import './globals.scss';

const montserratFont = Montserrat({
  variable: '--font-montserrat',
  weight: ['400', '500', '600'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Osoian Marcel — Software Engineer',
  description: 'Curriculum vitae of Osoian Marcel (Software Engineer)'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${montserratFont.variable}`}>{children}</body>
    </html>
  );
}
