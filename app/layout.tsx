import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'peeklink',
  description: 'Perfect Your Presence Before You Share.'
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
      </body>
    </html>
  );
}
