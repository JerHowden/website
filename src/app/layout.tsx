import '@fortawesome/fontawesome-svg-core/styles.css';

import { Footer, Header } from '@/components';
import { Stack } from '@mui/material';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Providers } from './_providers';

export const metadata: Metadata = {
  title: 'Jeremiah Howden',
  description: 'jeremiahhowden.com',
  openGraph: {
    type: 'website',
    url: 'https://jeremiahhowden.com',
    title: 'Jeremiah Howden',
    description: "Jeremiah Howden's Portfolio Site",
    siteName: 'Jeremiah Howden',
  },
  icons: [
    '/jhdot.svg',
    {
      url: '/jhdot-white.png',
      media: '(prefers-color-scheme:no-preference)',
      rel: 'apple-touch-icon',
    },
    {
      url: '/jhdot-dark.png',
      media: '(prefers-color-scheme:light)',
      rel: 'apple-touch-icon',
    },
    {
      url: '/jhdot-white.png',
      media: '(prefers-color-scheme:dark)',
      rel: 'apple-touch-icon',
    },
  ],
  twitter: {
    card: 'summary',
    site: 'jeremiahhowden.com',
    title: 'Jeremiah Howden',
    description: "Jeremiah Howden's Portfolio Site",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Stack
            direction="column"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Header />
            <Stack
              direction="column"
              display="flex"
              minHeight="100vh"
              alignItems="flex-start"
            >
              {children}
            </Stack>
            <Footer />
          </Stack>
        </body>
      </html>
    </Providers>
  );
}
