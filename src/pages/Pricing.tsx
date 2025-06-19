import React from 'react';
import Layout from '../components/layout/Layout';
import SEOHead from '../components/layout/SEOHead';
import PricingComponent from '../components/ui/Pricing';

const Pricing: React.FC = () => {
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "PulseGuard Pricing - Affordable Monitoring Plans",
    "description": "Choose the perfect PulseGuard monitoring plan for your needs. Transparent pricing for website monitoring, server monitoring, and infrastructure monitoring solutions.",
    "url": "https://pulseguard.nl/pricing",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "PulseGuard",
      "offers": [
        {
          "@type": "Offer",
          "name": "Free Plan",
          "description": "Perfect for getting started with basic monitoring",
          "price": "0",
          "priceCurrency": "EUR",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "category": "Monitoring Service"
        },
        {
          "@type": "Offer", 
          "name": "Professional Plan",
          "description": "Advanced monitoring with extended features",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "category": "Monitoring Service"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="PulseGuard Pricing - Affordable Website & Server Monitoring Plans"
        description="Choose the perfect PulseGuard monitoring plan. Free and paid options available. Monitor websites, servers, SSL certificates with transparent pricing. Start your free trial today."
        keywords="monitoring pricing, website monitoring cost, server monitoring plans, uptime monitoring price, monitoring service pricing, infrastructure monitoring cost, affordable monitoring solution"
        canonicalUrl="https://pulseguard.nl/pricing"
        structuredData={pricingStructuredData}
      />
      <Layout>
        <div className="pt-20">
          <PricingComponent />
        </div>
      </Layout>
    </>
  );
};

export default Pricing; 