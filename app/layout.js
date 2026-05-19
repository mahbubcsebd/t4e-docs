import HubSpotRouteTracker from '@/components/globals/HubSpotRouteTracker';
import LiveAgentChat from '@/components/globals/LiveAgentChat';
import { constructMetadata } from '@/lib/metadata';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <Script
          id="hs-script-loader"
          strategy="afterInteractive"
          src="//js-na3.hs-scripts.com/343174040.js"
          async
          defer
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <HubSpotRouteTracker />
        {children}
        <LiveAgentChat />
      </body>
    </html>
  );
}
