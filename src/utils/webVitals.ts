import { getCLS, getFID, getFCP, getLCP, getTTFB, Metric } from 'web-vitals';

const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';

function getConnectionSpeed(): string {
  // @ts-ignore
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  return connection ? connection.effectiveType : 'unknown';
}

function sendToAnalytics(metric: Metric, options?: { debug?: boolean }) {
  const body = {
    dsn: process.env.REACT_APP_VERCEL_ANALYTICS_ID, // Add this to your env
    id: metric.id,
    page: window.location.pathname,
    href: window.location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    speed: getConnectionSpeed(),
  };

  if (options?.debug) {
    console.log('[Web Vitals]', metric.name, metric.value, metric);
  }

  // Only send in production
  if (process.env.NODE_ENV === 'production') {
    navigator.sendBeacon?.(vitalsUrl, JSON.stringify(body)) ||
      fetch(vitalsUrl, { body: JSON.stringify(body), method: 'POST', keepalive: true });
  }
}

export function reportWebVitals(options?: { debug?: boolean }) {
  getCLS((metric) => sendToAnalytics(metric, options));
  getFID((metric) => sendToAnalytics(metric, options));
  getFCP((metric) => sendToAnalytics(metric, options));
  getLCP((metric) => sendToAnalytics(metric, options));
  getTTFB((metric) => sendToAnalytics(metric, options));
}

// Performance optimizations for Core Web Vitals
export const optimizeForCoreWebVitals = () => {
  // Preload critical resources that are actually used immediately
  const preloadCritical = () => {
    // Only preload resources that are visible above the fold
    const heroImage = document.querySelector('img[src*="dashboard-preview.svg"]');
    if (heroImage) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = '/images/dashboard-preview.svg';
      document.head.appendChild(link);
    }
  };

  // Reduce layout shifts
  const preventLayoutShift = () => {
    // Add explicit dimensions to images
    const images = document.querySelectorAll('img:not([width]):not([height])');
    images.forEach((img: Element) => {
      const imgElement = img as HTMLImageElement;
      if (imgElement.naturalWidth && imgElement.naturalHeight) {
        imgElement.width = imgElement.naturalWidth;
        imgElement.height = imgElement.naturalHeight;
      }
    });
  };

  // Run optimizations
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      preloadCritical();
      preventLayoutShift();
    });
  } else {
    preloadCritical();
    preventLayoutShift();
  }
};