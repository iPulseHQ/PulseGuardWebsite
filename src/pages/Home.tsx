import React from 'react';
import Layout from '../components/layout/Layout';
import SEOHead from '../components/layout/SEOHead';
import Hero from '../components/ui/Hero';
import Demo from '../components/ui/Demo';
import Features from '../components/ui/Features';
import Mockups from '../components/ui/Mockups';
import Pricing from '../components/ui/Pricing';
import InternalLinks from '../components/ui/InternalLinks';
import Partners from '../components/ui/Partners';

const Home: React.FC = () => {
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PulseGuard",
    "alternateName": ["PulseGuard Monitoring", "PulseGuard Uptime Monitor", "PulseGuard Server Monitor"],
    "url": "https://pulseguard.nl",
    "description": "Professional monitoring solution for websites, servers, SSL certificates, and cronjobs with instant notifications via Telegram, Email, and Slack.",
    "publisher": {
      "@type": "Organization",
      "@id": "https://pulseguard.nl#organization"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": "https://pulseguard.nl/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      {
        "@type": "RegisterAction",
        "target": "https://app.pulseguard.nl/register",
        "name": "Start Free Monitoring"
      }
    ],
    "mainEntity": {
      "@type": "SoftwareApplication",
      "@id": "https://pulseguard.nl#software",
      "name": "PulseGuard",
      "applicationCategory": ["BusinessApplication", "DeveloperApplication", "SystemMonitoringApplication"],
      "operatingSystem": ["Web-based", "Cloud", "SaaS"],
      "downloadUrl": "https://app.pulseguard.nl",
      "softwareVersion": "2.0",
      "releaseNotes": "Enhanced monitoring capabilities with improved alerting system",
      "screenshot": [
        "https://pulseguard.nl/images/dashboard-preview.svg",
        "https://pulseguard.nl/images/dashboard.png",
        "https://pulseguard.nl/images/devices.png"
      ],
      "featureList": [
        "HTTP/HTTPS website uptime monitoring",
        "Real-time server resource monitoring",
        "SSL certificate expiration tracking",
        "Cronjob heartbeat monitoring",
        "Multi-channel alert notifications",
        "Custom status pages creation",
        "Historical uptime reporting",
        "Response time monitoring",
        "Incident management",
        "Team collaboration tools"
      ],
      "offers": [
        {
          "@type": "Offer",
          "name": "Free Plan",
          "description": "Perfect for personal projects and small websites",
          "price": "0",
          "priceCurrency": "EUR",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "category": "Freemium",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "value": "5",
            "unitText": "monitors"
          }
        },
        {
          "@type": "Offer",
          "name": "Professional Plan",
          "description": "Advanced monitoring with extended features for businesses",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "category": "Professional",
          "businessFunction": "https://schema.org/LeaseOut"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "DevOps Engineer"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "reviewBody": "Excellent monitoring solution with reliable alerts and great dashboard interface."
        }
      ]
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://pulseguard.nl#organization",
    "name": "PulseGuard",
    "legalName": "PulseGuard Monitoring Solutions",
    "url": "https://pulseguard.nl",
    "logo": {
      "@type": "ImageObject",
      "url": "https://pulseguard.nl/images/logo.png",
      "width": "200",
      "height": "200"
    },
    "description": "Professional monitoring solutions for websites, servers, and infrastructure with real-time alerts and comprehensive reporting.",
    "foundingDate": "2023",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "email": "support@pulseguard.nl",
        "availableLanguage": ["English", "Dutch"],
        "serviceArea": "Worldwide"
      },
      {
        "@type": "ContactPoint",
        "contactType": "Sales",
        "email": "sales@pulseguard.nl",
        "availableLanguage": ["English", "Dutch"]
      }
    ],
    "sameAs": [
      "https://github.com/pulseguard",
      "https://twitter.com/pulseguard"
    ],
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": "3",
      "lowPrice": "0",
      "highPrice": "99",
      "priceCurrency": "EUR"
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does website monitoring work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PulseGuard monitors your websites by sending HTTP/HTTPS requests at regular intervals (1-60 minutes). If your website doesn't respond or returns an error, you'll receive instant alerts via your preferred notification channel (Email, Telegram, Slack, or Webhooks)."
        }
      },
      {
        "@type": "Question", 
        "name": "What types of monitoring does PulseGuard offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PulseGuard offers comprehensive monitoring including: website uptime monitoring, server resource monitoring (CPU, RAM, disk usage), SSL certificate expiration monitoring, cronjob heartbeat monitoring, and status page creation for transparency with your users."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly do I receive alerts when something goes down?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Alerts are sent instantly when an issue is detected. Our monitoring system checks your services every 1-5 minutes, and notifications are delivered within seconds via Telegram, Email, Slack, or custom webhooks."
        }
      },
      {
        "@type": "Question",
        "name": "Can I monitor servers and not just websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! PulseGuard includes server monitoring capabilities. Install our lightweight agent to monitor CPU usage, memory consumption, disk space, network traffic, and running processes on your servers."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer a free plan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer a generous free plan that includes monitoring for up to 5 websites or services. This is perfect for personal projects, small websites, or testing our service before upgrading to a paid plan."
        }
      },
      {
        "@type": "Question",
        "name": "How is PulseGuard different from other monitoring services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PulseGuard focuses on simplicity and reliability. We offer 5-minute setup, multiple notification channels, comprehensive monitoring (websites, servers, SSL, cronjobs), and transparent pricing. Our dashboard is designed for both technical and non-technical users."
        }
      }
    ]
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
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="PulseGuard - Advanced Website & Server Monitoring Solution | 99.9% Uptime Monitoring"
        description="Professional website monitoring, server monitoring, SSL certificate tracking, and cronjob monitoring with instant alerts via Telegram, Email, Slack. 5-minute setup, 99.9% uptime guarantee. Monitor HTTP/HTTPS endpoints, server resources, SSL expiration dates, and automated tasks from one dashboard."
        keywords="website monitoring, server monitoring, uptime monitoring, SSL monitoring, cronjob monitoring, status page, website downtime alerts, server health monitoring, application monitoring, infrastructure monitoring, real-time alerts, system monitoring, uptime checker, website availability, server status, SSL certificate expiration, heartbeat monitoring, ping monitoring, HTTP monitoring, HTTPS monitoring, web monitoring service, network monitoring, performance monitoring, site reliability, IT monitoring, devops monitoring, production monitoring, incident management, monitoring dashboard, alert notifications, uptime tracking, downtime detection, service monitoring, application performance monitoring, synthetic monitoring, website speed monitoring, server performance monitoring, cloud monitoring"
        canonicalUrl="https://pulseguard.nl/"
        ogImage="https://pulseguard.nl/images/dashboard-preview.svg"
        structuredData={[homeStructuredData, organizationData]}
        faqData={faqData}
        breadcrumbData={breadcrumbData}
      />
      <Layout showBreadcrumb={false}>
        <Hero />
        <Partners />
        <Demo />
        <Features />
        <Mockups />
        <Pricing />
        <InternalLinks currentPage="home" />
      </Layout>
    </>
  );
};

export default Home; 