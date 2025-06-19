import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  structuredData?: any;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "PulseGuard - Website & Server Monitoring Solution | Uptime Monitoring",
  description = "Monitor your websites, servers, SSL certificates and cronjobs with PulseGuard. Get instant alerts via Telegram, Email, and Slack. 99.9% uptime monitoring with 5-minute setup.",
  keywords = "website monitoring, server monitoring, uptime monitoring, SSL monitoring, cronjob monitoring, status page, website downtime alerts, server health monitoring, application monitoring, infrastructure monitoring",
  canonicalUrl,
  ogImage = "https://pulseguard.nl/images/dashboard-preview.svg",
  ogImageAlt = "PulseGuard Dashboard Interface - Monitor websites, servers and get instant alerts",
  structuredData,
  noindex = false,
  nofollow = false
}) => {
  const currentUrl = canonicalUrl || `https://pulseguard.nl${window.location.pathname}`;
  const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;

  React.useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Update link tags
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      
      link.setAttribute('href', href);
    };

    // Basic SEO meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', robotsContent);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:image:alt', ogImageAlt, true);

    // Twitter Card tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:image:alt', ogImageAlt);

    // Canonical URL
    updateLinkTag('canonical', currentUrl);

    // Structured data
    if (structuredData) {
      // Remove existing structured data
      const existingScript = document.querySelector('script[data-type="structured-data"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-type', 'structured-data');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      // Optional: Clean up dynamic meta tags when component unmounts
      // This might not be necessary for SPA, but can be useful for certain cases
    };
  }, [title, description, keywords, currentUrl, ogImage, ogImageAlt, robotsContent, structuredData]);

  return null; // This component doesn't render anything visible
};

export default SEOHead; 