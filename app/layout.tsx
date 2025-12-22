import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DatabuddyClient from "@/components/DatabuddyClient";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL('https://ipulse.one'),
  title: {
    default: "iPulse - Monitor Everything. Miss Nothing.",
    template: "%s | iPulse"
  },
  description: "The ultimate monitoring solution for modern teams. Real-time insights, instant alerts, and complete control over your digital infrastructure.",
  keywords: ["website monitoring", "uptime monitoring", "SSL monitoring", "server monitoring", "downtime alerts", "performance monitoring", "infrastructure monitoring"],
  authors: [{ name: "iPulse Team" }],
  creator: "iPulse",
  publisher: "iPulse",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['nl_NL'],
    url: 'https://ipulse.one',
    siteName: 'iPulse',
    title: 'iPulse - Monitor Everything. Miss Nothing.',
    description: 'The ultimate monitoring solution for modern teams. Real-time insights, instant alerts, and complete control over your digital infrastructure.',
    images: [
      {
        url: '/seoimage.png',
        width: 1200,
        height: 630,
        alt: 'iPulse - Website Monitoring Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iPulse - Monitor Everything. Miss Nothing.',
    description: 'The ultimate monitoring solution for modern teams. Real-time insights, instant alerts, and complete control.',
    images: ['/seoimage.png'],
    creator: '@ipulse',
  },
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://ipulse.one',
    languages: {
      'en-US': 'https://ipulse.one',
      'nl-NL': 'https://ipulse.one',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9SR2WJTZK1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9SR2WJTZK1');
          `}
        </Script>
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
        <DatabuddyClient />
        <Analytics />
      </body>
    </html>
  );
}
