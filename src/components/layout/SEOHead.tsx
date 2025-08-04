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
  breadcrumbData?: any;
  faqData?: any;
  articleData?: any;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "PulseGuard - Advanced Website & Server Monitoring Solution | 99.9% Uptime Monitoring",
  description = "Professional website monitoring, server monitoring, SSL certificate tracking, and cronjob monitoring with instant alerts via Telegram, Email, Slack. 5-minute setup, 99.9% uptime guarantee. Monitor HTTP/HTTPS endpoints, server resources, SSL expiration dates, and automated tasks from one dashboard.",
  keywords = "website monitoring, server monitoring, uptime monitoring, SSL monitoring, cronjob monitoring, status page, website downtime alerts, server health monitoring, application monitoring, infrastructure monitoring, real-time alerts, system monitoring, uptime checker, website availability, server status, SSL certificate expiration, heartbeat monitoring, ping monitoring, HTTP monitoring, HTTPS monitoring, web monitoring service, network monitoring, performance monitoring, site reliability, IT monitoring, devops monitoring, production monitoring, incident management",
  canonicalUrl,
  ogImage = "https://pulseguard.pro/images/dashboard-preview.svg",
  ogImageAlt = "PulseGuard Dashboard Interface - Professional monitoring solution for websites, servers, SSL certificates with real-time alerts and status pages",
  structuredData,
  noindex = false,
  nofollow = false,
  breadcrumbData,
  faqData,
  articleData
}) => {
  const currentUrl = canonicalUrl || `https://pulseguard.pro${window.location.pathname}`;
  const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;

  React.useEffect(() => {
    // Google Analytics setup
    const setupGoogleAnalytics = () => {
      // Remove existing gtag script if it exists
      const existingGtagScript = document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
      if (existingGtagScript) {
        existingGtagScript.remove();
      }

      // Remove existing gtag config script
      const existingConfigScript = document.querySelector('script[data-type="gtag-config"]');
      if (existingConfigScript) {
        existingConfigScript.remove();
      }

      // Add Google Analytics script
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-0N3XMX901W';
      document.head.appendChild(gtagScript);

      // Add Google Analytics configuration
      const configScript = document.createElement('script');
      configScript.setAttribute('data-type', 'gtag-config');
      configScript.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0N3XMX901W');
      `;
      document.head.appendChild(configScript);
    };

    // Setup Google Analytics
    setupGoogleAnalytics();

    // Microsoft Clarity setup
    const setupMicrosoftClarity = () => {
      // Remove existing Clarity script if it exists
      const existingClarityScript = document.querySelector('script[src*="clarity.ms"]');
      if (existingClarityScript) {
        existingClarityScript.remove();
      }

      // Remove existing Clarity config script
      const existingClarityConfigScript = document.querySelector('script[data-type="clarity-config"]');
      if (existingClarityConfigScript) {
        existingClarityConfigScript.remove();
      }

      // Add Microsoft Clarity configuration
      const clarityScript = document.createElement('script');
      clarityScript.setAttribute('data-type', 'clarity-config');
      clarityScript.textContent = `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "s21cmt1r0f");
      `;
      document.head.appendChild(clarityScript);
    };

    // Setup Microsoft Clarity
    setupMicrosoftClarity();

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
    
    // Additional SEO meta tags
    updateMetaTag('author', 'PulseGuard Team');
    updateMetaTag('generator', 'PulseGuard Monitoring Platform');
    updateMetaTag('subject', 'Website and Server Monitoring Solution');
    updateMetaTag('classification', 'Business');
    updateMetaTag('category', 'Technology');
    updateMetaTag('coverage', 'Worldwide');
    updateMetaTag('distribution', 'Global');
    updateMetaTag('rating', 'General');
    updateMetaTag('revisit-after', '7 days');

    // Open Graph tags (Enhanced)
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:site_name', 'PulseGuard', true);
    updateMetaTag('og:locale', 'en_US', true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:image:alt', ogImageAlt, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:type', 'image/png', true);

    // Twitter Card tags (Enhanced)
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', '@pulseguard');
    updateMetaTag('twitter:creator', '@pulseguard');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:image:alt', ogImageAlt);

    // Additional technical SEO meta tags
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('format-detection', 'telephone=no');
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    updateMetaTag('theme-color', '#3b82f6');
    updateMetaTag('msapplication-TileColor', '#3b82f6');

    // Canonical URL
    updateLinkTag('canonical', currentUrl);

    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[data-type="structured-data"]');
    existingScripts.forEach(script => script.remove());

    // Add main structured data
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-type', 'structured-data');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Add breadcrumb structured data
    if (breadcrumbData) {
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.setAttribute('data-type', 'structured-data');
      breadcrumbScript.textContent = JSON.stringify(breadcrumbData);
      document.head.appendChild(breadcrumbScript);
    }

    // Add FAQ structured data
    if (faqData) {
      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.setAttribute('data-type', 'structured-data');
      faqScript.textContent = JSON.stringify(faqData);
      document.head.appendChild(faqScript);
    }

    // Add Article structured data
    if (articleData) {
      const articleScript = document.createElement('script');
      articleScript.type = 'application/ld+json';
      articleScript.setAttribute('data-type', 'structured-data');
      articleScript.textContent = JSON.stringify(articleData);
      document.head.appendChild(articleScript);
    }

    // Cleanup function
    return () => {
      // Clean up Google Analytics scripts when component unmounts
      const gtagScript = document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
      if (gtagScript) {
        gtagScript.remove();
      }
      
      const configScript = document.querySelector('script[data-type="gtag-config"]');
      if (configScript) {
        configScript.remove();
      }

      // Clean up Microsoft Clarity scripts when component unmounts
      const clarityScript = document.querySelector('script[src*="clarity.ms"]');
      if (clarityScript) {
        clarityScript.remove();
      }
      
      const clarityConfigScript = document.querySelector('script[data-type="clarity-config"]');
      if (clarityConfigScript) {
        clarityConfigScript.remove();
      }
    };
  }, [title, description, keywords, currentUrl, ogImage, ogImageAlt, robotsContent, structuredData, breadcrumbData, faqData, articleData]);

  return null; // This component doesn't render anything visible
};

export default SEOHead; 