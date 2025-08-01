import React from 'react';
import { faGlobe, faServer, faShieldAlt, faClock, faFile } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface InternalLinksProps {
  currentPage?: string;
  className?: string;
}

interface InternalLinkItem {
  title: string;
  href: string;
  description: string;
  icon: IconDefinition;
  keywords: string;
  external: false;
}

interface ExternalLinkItem {
  title: string;
  href: string;
  description: string;
  icon: IconDefinition;
  keywords: string;
  external: true;
}

type LinkItem = InternalLinkItem | ExternalLinkItem;

const InternalLinks: React.FC<InternalLinksProps> = ({ currentPage = 'home', className = '' }) => {
  const linkSets: Record<string, LinkItem[]> = {
    home: [
      {
        title: "Website Monitoring Features",
        href: "/features",
        description: "Explore comprehensive website uptime monitoring tools",
        icon: faGlobe,
        keywords: "website monitoring, uptime tracking, HTTP monitoring",
        external: false
      },
      {
        title: "PulseFiles - Veilige Bestandsdeling",
        href: "/pulsefiles",
        description: "Veilige en tijdelijke bestandsdeling met end-to-end encryptie",
        icon: faFile,
        keywords: "bestandsdeling, file sharing, veilig, encryptie, tijdelijk",
        external: false
      },
      {
        title: "Transparent Pricing Plans",
        href: "/pricing",
        description: "Compare monitoring plans and find the perfect solution",
        icon: faShieldAlt,
        keywords: "monitoring pricing, affordable plans, cost comparison",
        external: false
      }
    ],
    features: [
      {
        title: "Website Uptime Monitoring",
        href: "/website-monitoring",
        description: "HTTP/HTTPS monitoring with response time tracking",
        icon: faGlobe,
        keywords: "uptime monitoring, website availability, downtime alerts",
        external: false
      },
      {
        title: "SSL Certificate Monitoring",
        href: "/ssl-monitoring", 
        description: "Track SSL expiration dates and certificate health",
        icon: faShieldAlt,
        keywords: "SSL monitoring, certificate tracking, security monitoring",
        external: false
      },
      {
        title: "View All Pricing Options",
        href: "/pricing",
        description: "Compare features across all monitoring plans",
        icon: faClock,
        keywords: "pricing comparison, monitoring plans, feature comparison",
        external: false
      }
    ],
    pricing: [
      {
        title: "Explore All Features",
        href: "/features",
        description: "Detailed overview of monitoring capabilities",
        icon: faGlobe,
        keywords: "monitoring features, capabilities overview, tools",
        external: false
      },
      {
        title: "Server Monitoring Capabilities",
        href: "/server-monitoring",
        description: "Advanced server and infrastructure monitoring",
        icon: faServer,
        keywords: "server monitoring, infrastructure tracking, system monitoring",
        external: false
      },
      {
        title: "Start Free Monitoring",
        href: "https://app.pulseguard.nl/register",
        description: "Begin monitoring your websites and servers today",
        icon: faShieldAlt,
        keywords: "free trial, start monitoring, sign up",
        external: true
      }
    ]
  };


  return null;
};

export default InternalLinks; 