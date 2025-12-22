import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PulseGuard - Website Uptime Monitoring & SSL Tracking",
  description: "Monitor your websites 24/7 with PulseGuard. Get instant downtime alerts, SSL certificate monitoring, and performance tracking from 4 global locations. Start your free trial today!",
  keywords: [
    "website monitoring",
    "uptime monitoring",
    "uptime tracker",
    "website uptime",
    "SSL monitoring",
    "SSL certificate monitoring",
    "website downtime alerts",
    "server monitoring",
    "performance monitoring",
    "multi-location monitoring",
    "global monitoring",
    "website availability",
    "30-second checks",
    "real-time monitoring",
    "incident management",
    "status page",
    "monitoring tool",
    "uptime robot alternative",
    "pingdom alternative",
    "better uptime"
  ],
  openGraph: {
    title: "PulseGuard - Never Miss a Beat with Website Monitoring",
    description: "Monitor your websites 24/7. Get instant alerts when something goes wrong. Keep your business online and your customers happy.",
    url: "https://ipulse.one/pulseguard",
    siteName: "iPulse",
    type: "website",
    images: [
      {
        url: "/seoimage.png",
        width: 1200,
        height: 630,
        alt: "PulseGuard - Website Monitoring Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseGuard - Website Uptime Monitoring",
    description: "Monitor your websites 24/7 with instant downtime alerts, SSL monitoring, and performance tracking from 4 global locations.",
    images: ["/seoimage.png"],
  },
  alternates: {
    canonical: "https://ipulse.one/pulseguard",
  },
};

export default function PulseGuardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
