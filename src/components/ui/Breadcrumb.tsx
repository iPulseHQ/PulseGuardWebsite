import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  customItems?: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ customItems }) => {
  const location = useLocation();
  
  const getDefaultBreadcrumbs = (): BreadcrumbItem[] => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', href: '/' }
    ];

    // Map path segments to readable names
    const pathMap: { [key: string]: string } = {
      'features': 'Features',
      'pricing': 'Pricing', 
      'team': 'Team',
      'status': 'Status',
      'app': 'App'
    };

    pathnames.forEach((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
      breadcrumbs.push({
        name: pathMap[name] || name.charAt(0).toUpperCase() + name.slice(1),
        href: routeTo
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = customItems || getDefaultBreadcrumbs();
  const shouldShowBreadcrumbs = !(location.pathname === '/' && !customItems);

  // Generate structured data for breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://pulseguard.nl${item.href === '/' ? '' : item.href}`
    }))
  };

  React.useEffect(() => {
    // Only add structured data if breadcrumbs should be shown
    if (!shouldShowBreadcrumbs) {
      return;
    }

    // Add structured data to head
    const existingScript = document.querySelector('script[data-type="breadcrumb-data"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-type', 'breadcrumb-data');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-type="breadcrumb-data"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [breadcrumbs, shouldShowBreadcrumbs, structuredData]);

  // Don't show breadcrumbs on home page
  if (!shouldShowBreadcrumbs) {
    return null;
  }

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
    >
      <div className="container mx-auto px-6 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <FontAwesomeIcon 
                  icon={faChevronRight} 
                  className="text-gray-400 dark:text-gray-500 mx-2 text-xs" 
                  aria-hidden="true"
                />
              )}
              
              {index === breadcrumbs.length - 1 ? (
                <span 
                  className="text-gray-900 dark:text-white font-medium"
                  aria-current="page"
                >
                  {index === 0 && (
                    <FontAwesomeIcon icon={faHome} className="mr-1" aria-hidden="true" />
                  )}
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 flex items-center"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {index === 0 && (
                    <FontAwesomeIcon icon={faHome} className="mr-1" aria-hidden="true" />
                  )}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb; 