import React from 'react';
import Layout from '../components/layout/Layout';
import SEOHead from '../components/layout/SEOHead';
import FeaturesComponent from '../components/ui/Features';

const Features: React.FC = () => {
  const featuresStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "PulseGuard Features - Complete Monitoring Solution",
    "description": "Discover all PulseGuard features: website monitoring, server monitoring, SSL certificates, cronjob monitoring, smart notifications, and status pages.",
    "url": "https://pulseguard.nl/features",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "PulseGuard",
      "featureList": [
        "HTTP/HTTPS website monitoring",
        "SSL certificate expiration tracking",
        "Server resource monitoring (CPU, RAM, Disk)",
        "Cronjob heartbeat monitoring",
        "Multi-channel notifications (Email, Telegram, Slack, Webhooks)",
        "Public and private status pages",
        "Real-time alerts and notifications",
        "Historical uptime reporting",
        "Custom check intervals",
        "Response time monitoring"
      ],
      "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="PulseGuard Features - Website & Server Monitoring Features | Complete Solution"
        description="Explore PulseGuard's comprehensive monitoring features: website uptime, server resources, SSL certificates, cronjobs, smart notifications via Email/Telegram/Slack, and status pages."
        keywords="website monitoring features, server monitoring tools, SSL certificate monitoring, cronjob monitoring, uptime alerts, status page, monitoring dashboard, infrastructure monitoring features, real-time notifications"
        canonicalUrl="https://pulseguard.nl/features"
        structuredData={featuresStructuredData}
      />
      <Layout>
        <div className="pt-20">
          <FeaturesComponent />
        </div>
      </Layout>
    </>
  );
};

export default Features; 