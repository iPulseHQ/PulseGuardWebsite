import React from 'react';
import Layout from '../components/layout/Layout';
import SEOHead from '../components/layout/SEOHead';
import Hero from '../components/ui/Hero';
import Demo from '../components/ui/Demo';
import Features from '../components/ui/Features';
import Mockups from '../components/ui/Mockups';
import Pricing from '../components/ui/Pricing';

const Home: React.FC = () => {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PulseGuard",
    "alternateName": "PulseGuard Monitoring",
    "url": "https://pulseguard.nl",
    "description": "Professional monitoring solution for websites, servers, SSL certificates, and cronjobs with instant notifications.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://pulseguard.nl/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "PulseGuard",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web-based",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock"
      },
      "featureList": [
        "Website uptime monitoring",
        "Server resource monitoring", 
        "SSL certificate monitoring",
        "Cronjob monitoring",
        "Real-time alerts",
        "Status pages",
        "Multi-channel notifications"
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="PulseGuard - Website & Server Monitoring Solution | Uptime Monitoring"
        description="Monitor your websites, servers, SSL certificates and cronjobs with PulseGuard. Get instant alerts via Telegram, Email, and Slack. 99.9% uptime monitoring with 5-minute setup."
        keywords="website monitoring, server monitoring, uptime monitoring, SSL monitoring, cronjob monitoring, status page, website downtime alerts, server health monitoring, application monitoring, infrastructure monitoring, real-time alerts, system monitoring"
        canonicalUrl="https://pulseguard.nl/"
        ogImage="https://pulseguard.nl/images/dashboard-preview.svg"
        structuredData={homeStructuredData}
      />
      <Layout showBreadcrumb={false}>
        <Hero />
        <Demo />
        <Features />
        <Mockups />
        <Pricing />
      </Layout>
    </>
  );
};

export default Home; 