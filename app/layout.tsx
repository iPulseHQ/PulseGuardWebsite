import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/lib/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DatabuddyClient from "@/components/DatabuddyClient";

export const metadata: Metadata = {
  title: "iPulse - Monitor Alles. Mis Niets.",
  description: "De ultieme monitoring oplossing voor moderne teams. Real-time inzicht, instant alerts, en complete controle over je digitale infrastructuur.",
  icons: {
    icon: [
      { url: "/favicon-final/favicon.ico" },
      { url: "/favicon-final/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-final/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-final/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  manifest: "/favicon-final/site.webmanifest",
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
      </body>
    </html>
  );
}
