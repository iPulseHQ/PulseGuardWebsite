import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LangSetter from "@/components/LangSetter";
import { ThemeProvider } from "@/components/theme-provider";
import DatabuddyClient from "@/components/DatabuddyClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'PulseGuard - Your Digital Peacemaker | Website & Device Monitoring',
    template: '%s | PulseGuard'
  },
  description: 'Complete monitoring solution for websites, devices & services. Monitor uptime, security, and performance with PulseGuard. Trusted by businesses in Netherlands and worldwide.',
  keywords: [
    'website monitoring',
    'uptime monitoring', 
    'server monitoring',
    'device monitoring',
    'security monitoring',
    'performance monitoring',
    'Netherlands',
    'monitoring service',
    'website uptime',
    'cybersecurity',
    'DevOps',
    'SaaS monitoring'
  ],
  authors: [{ name: 'PulseGuard B.V.' }],
  creator: 'PulseGuard B.V.',
  publisher: 'PulseGuard B.V.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pulseguard.pro'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'nl-NL': '/nl',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pulseguard.pro',
    title: 'PulseGuard - Your Digital Peacemaker | Website & Device Monitoring',
    description: 'Complete monitoring solution for websites, devices & services. Monitor uptime, security, and performance with PulseGuard.',
    siteName: 'PulseGuard',
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PulseGuard - Website & Device Monitoring Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PulseGuard - Your Digital Peacemaker',
    description: 'Complete monitoring solution for websites, devices & services. Monitor uptime, security, and performance.',
    site: '@pulseguard_hq',
    creator: '@pulseguard_hq',
    images: ['/assets/twitter-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
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
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://analytics.google.com" />
        
        {/* Geo and Language Meta Tags */}
        <meta name="geo.region" content="NL" />
        <meta name="geo.placename" content="Netherlands" />
        <meta name="geo.position" content="52.3676;4.9041" />
        <meta name="ICBM" content="52.3676, 4.9041" />
        
        {/* Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "PulseGuard",
              "description": "Complete monitoring solution for websites, devices & services",
              "url": "https://pulseguard.pro",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR",
                "description": "Free tier available"
              },
              "provider": {
                "@type": "Organization",
                "name": "PulseGuard B.V.",
                "url": "https://pulseguard.pro",
                "logo": "https://pulseguard.pro/assets/pulseguard-logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+31-20-123-4567",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Dutch"]
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "NL",
                  "addressRegion": "Noord-Holland"
                },
                "sameAs": [
                  "https://www.linkedin.com/company/pulseguardnl",
                  "https://x.com/pulseguard_hq",
                  "https://www.instagram.com/pulseguard_/",
                  "https://github.com/pulseguardhq"
                ]
              }
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PulseGuard B.V.",
              "url": "https://pulseguard.pro",
              "logo": "https://pulseguard.pro/assets/pulseguard-logo.png",
              "description": "Website and device monitoring platform for businesses",
              "foundingDate": "2024",
              "founders": [
                {
                  "@type": "Person",
                  "name": "PulseGuard Team"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "NL",
                "addressRegion": "Noord-Holland"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "support@pulseguard.pro",
                "availableLanguage": ["English", "Dutch"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/pulseguardnl",
                "https://x.com/pulseguard_hq",
                "https://www.instagram.com/pulseguard_/",
                "https://github.com/pulseguardhq"
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LangSetter />
          <Header />
          <main>{children}</main>
          <Footer />
          <DatabuddyClient />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-0N3XMX901W"
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} 
              gtag('js', new Date());
              gtag('config', 'G-0N3XMX901W');
            `}
          </Script>
          <Script id="ms-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "s21cmt1r0f");
            `}
          </Script>
        </ThemeProvider>
      </body>
    </html>
  );
}
