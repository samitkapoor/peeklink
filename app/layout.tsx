import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'peeklink',
  description: 'Perfect Your Presence Before You Share.',
  openGraph: {
    title: 'peeklink - Perfect Your Presence Before You Share.',
    description:
      'peeklink shows you how your links will look like on social media before you share them. It helps you perfect your presence before you share.',
    url: 'https://peeklink.stackbits.dev',
    siteName: 'peeklink',
    images: [
      {
        url: 'https://peeklink.stackbits.dev/peeklink-poster.png',
        width: 1200,
        height: 630,
        alt: 'peeklink - Perfect Your Presence Before You Share.'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'peeklink - Perfect Your Presence Before You Share.',
    description:
      'peeklink shows you how your links will look like on social media before you share them. It helps you perfect your presence before you share.',
    creator: '@samitkapoorr',
    images: ['https://peeklink.stackbits.dev/peeklink-poster.png']
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased overflow-x-hidden overflow-y-auto relative`}
      >
        {children}
        <p className="absolute bottom-10 text-center w-full">
          Made with ❤️ by{' '}
          <a
            href="https://samitkapoor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium text-orange-500"
          >
            Samit Kapoor
          </a>
        </p>
        <Analytics />
      </body>
    </html>
  );
}
