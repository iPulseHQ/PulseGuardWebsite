import React from 'react';
import Layout from '../components/layout/Layout';
import SEOHead from '../components/layout/SEOHead';
import FeaturesComponent from '../components/ui/Features';

const Features: React.FC = () => {
  const featuresStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "PulseGuard Features - Complete Monitoring Solution",
    "description": "Comprehensive monitoring features including website uptime monitoring, server resource monitoring, SSL certificate tracking, cronjob heartbeat monitoring, and real-time alerts.",
    "url": "https://pulseguard.nl/features",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "PulseGuard",
      "applicationCategory": ["MonitoringApplication", "BusinessApplication", "DeveloperTool"],
      "featureList": [
        "HTTP/HTTPS website monitoring with response time tracking",
        "SSL certificate expiration monitoring and alerts",
        "Server resource monitoring (CPU, RAM, Disk, Network)",
        "Cronjob heartbeat monitoring and missed execution alerts",
        "Multi-channel notifications (Email, Telegram, Slack, Webhooks)",
        "Public and private status pages with custom branding",
        "Real-time alerts and instant notifications",
        "Historical uptime reporting and analytics",
        "Custom check intervals from 1-60 minutes",
        "Response time monitoring and performance tracking",
        "Incident management and escalation policies",
        "Team collaboration and notification routing",
        "API access for custom integrations",
        "Mobile-responsive monitoring dashboard"
      ],
      "offers": {
        "@type": "Offer",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "businessFunction": "https://schema.org/LeaseOut"
      },
      "screenshot": [
        "https://pulseguard.nl/images/dashboard-preview.svg",
        "https://pulseguard.nl/images/features-mockup.svg"
      ]
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pulseguard.nl/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Features",
        "item": "https://pulseguard.nl/features"
      }
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What monitoring features does PulseGuard offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PulseGuard offers comprehensive monitoring including website uptime monitoring, server resource monitoring (CPU, RAM, disk usage), SSL certificate expiration tracking, cronjob heartbeat monitoring, response time monitoring, and incident management with real-time alerts."
        }
      },
      {
        "@type": "Question",
        "name": "How do the notification features work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PulseGuard supports multiple notification channels including Email, Telegram, Slack, and custom webhooks. You can set up escalation policies, customize alert thresholds, and route notifications to different team members based on the type of incident."
        }
      },
      {
        "@type": "Question",
        "name": "Can I monitor SSL certificates with PulseGuard?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, PulseGuard includes SSL certificate monitoring that tracks expiration dates and sends alerts 30, 14, 7, and 1 days before expiration. This helps prevent unexpected SSL certificate expiry that could cause website downtime."
        }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Website Monitoring Features - Server & SSL Monitoring | PulseGuard Complete Solution"
        description="Comprehensive monitoring features: website uptime monitoring, server resource tracking, SSL certificate monitoring, cronjob heartbeat monitoring, real-time alerts via Email/Telegram/Slack, status pages, and incident management for reliable infrastructure monitoring."
        keywords="website monitoring features, server monitoring tools, SSL certificate monitoring, cronjob monitoring, uptime alerts, status page, monitoring dashboard, infrastructure monitoring features, real-time notifications, response time monitoring, performance monitoring, downtime alerts, incident management, heartbeat monitoring, synthetic monitoring, application monitoring, network monitoring, system monitoring tools, monitoring software features"
        canonicalUrl="https://pulseguard.nl/features"
        structuredData={featuresStructuredData}
        breadcrumbData={breadcrumbData}
        faqData={faqData}
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