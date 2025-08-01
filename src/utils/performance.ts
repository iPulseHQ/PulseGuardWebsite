// Performance optimization utilities

// Lazy load components to reduce initial bundle size
export const lazyLoadComponent = (importFunc: () => Promise<any>) => {
  return React.lazy(importFunc);
};

// Debounce function for search and input handlers
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// Optimize FontAwesome imports
export const loadFontAwesomeIcons = () => {
  return import(/* webpackChunkName: "fontawesome" */ '@fortawesome/fontawesome-svg-core').then(
    ({ library, dom }) => {
      // Import only needed icons
      import(/* webpackChunkName: "fa-solid" */ '@fortawesome/free-solid-svg-icons').then(
        ({ faChevronRight, faPlay, faCheck, faTimes }) => {
          library.add(faChevronRight, faPlay, faCheck, faTimes);
          dom.watch();
        }
      );
    }
  );
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical images
  const criticalImages = [
    '/images/dashboard-preview.svg',
    '/images/logo.png'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers
    return null;
  }

  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  });
};

import React from 'react';