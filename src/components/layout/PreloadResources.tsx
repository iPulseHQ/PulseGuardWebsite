import React from 'react';

const PreloadResources: React.FC = () => {
  React.useEffect(() => {
    const preloadResource = (href: string, as: string, type?: string, crossOrigin?: string) => {
      // Check if resource is already preloaded
      const existingLink = document.querySelector(`link[href="${href}"]`);
      if (existingLink) return;

      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      if (type) link.type = type;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      
      document.head.appendChild(link);
    };

    const prefetchResource = (href: string) => {
      const existingLink = document.querySelector(`link[href="${href}"]`);
      if (existingLink) return;

      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      
      document.head.appendChild(link);
    };

    // Preload critical images that are visible above the fold
    preloadResource('/images/dashboard-preview.svg', 'image', 'image/svg+xml');
    
    // Preload critical fonts (already in index.html but ensure they're prioritized)
    preloadResource('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap', 'style');
    
    // Prefetch likely next pages
    prefetchResource('/features');
    prefetchResource('/pricing');
    prefetchResource('/team');
    
    // Prefetch app signup page (high-intent action)
    prefetchResource('https://app.pulseguard.nl/register');

    // Preload critical JavaScript chunks (if using code splitting)
    // This would be more specific based on your build setup
    
    return () => {
      // Cleanup is generally not needed for preload links as they remain cached
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PreloadResources; 