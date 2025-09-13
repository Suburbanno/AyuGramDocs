import { RootProvider } from 'fumadocs-ui/provider';
import type { Metadata, Viewport } from 'next';

import type { ReactNode } from 'react';

import { Inter } from 'next/font/google';

import { siteConfig } from '@/config/site';

import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#2a2d30',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['AyuGram', 'Telegram', 'AyuGram Telegram', 'AyuGram Messenger'],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={inter.className} suppressHydrationWarning>
      <body className='dark flex min-h-screen flex-col'>
        <RootProvider theme={{ enabled: false }}>{children}</RootProvider>
      </body>
    </html>
  );
}
