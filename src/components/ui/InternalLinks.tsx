import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faGlobe, faServer, faShieldAlt, faClock } from '@fortawesome/free-solid-svg-icons';

interface InternalLinksProps {
  currentPage?: string;
  className?: string;
}

const InternalLinks: React.FC<InternalLinksProps> = ({ currentPage = 'home', className = '' }) => {
  const linkSets = {
    home: [
      {
        title: "Website Monitoring Features",
        href: "/features",
        description: "Explore comprehensive website uptime monitoring tools",
        icon: faGlobe,
        keywords: "website monitoring, uptime tracking, HTTP monitoring"
      },
      {
        title: "Server Monitoring Solutions", 
        href: "/features#server-monitoring",
        description: "Monitor server resources, CPU, RAM, and disk usage",
        icon: faServer,
        keywords: "server monitoring, resource tracking, system health"
      },
      {
        title: "Transparent Pricing Plans",
        href: "/pricing",
        description: "Compare monitoring plans and find the perfect solution",
        icon: faShieldAlt,
        keywords: "monitoring pricing, affordable plans, cost comparison"
      }
    ],
    features: [
      {
        title: "Website Uptime Monitoring",
        href: "/website-monitoring",
        description: "HTTP/HTTPS monitoring with response time tracking",
        icon: faGlobe,
        keywords: "uptime monitoring, website availability, downtime alerts"
      },
      {
        title: "SSL Certificate Monitoring",
        href: "/ssl-monitoring", 
        description: "Track SSL expiration dates and certificate health",
        icon: faShieldAlt,
        keywords: "SSL monitoring, certificate tracking, security monitoring"
      },
      {
        title: "View All Pricing Options",
        href: "/pricing",
        description: "Compare features across all monitoring plans",
        icon: faClock,
        keywords: "pricing comparison, monitoring plans, feature comparison"
      }
    ],
    pricing: [
      {
        title: "Explore All Features",
        href: "/features",
        description: "Detailed overview of monitoring capabilities",
        icon: faGlobe,
        keywords: "monitoring features, capabilities overview, tools"
      },
      {
        title: "Server Monitoring Capabilities",
        href: "/server-monitoring",
        description: "Advanced server and infrastructure monitoring",
        icon: faServer,
        keywords: "server monitoring, infrastructure tracking, system monitoring"
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

  const currentLinks = linkSets[currentPage as keyof typeof linkSets] || linkSets.home;

  return (
    <section className={`py-16 bg-gray-50 dark:bg-gray-800 ${className}`}>
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Related Monitoring Solutions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover more about our comprehensive monitoring platform and find the perfect solution for your infrastructure needs.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {currentLinks.map((link, index) => (
            <article key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                    <FontAwesomeIcon 
                      icon={link.icon} 
                      className="text-blue-600 dark:text-blue-400 text-lg"
                    />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                    {link.description}
                  </p>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    Related: {link.keywords}
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className="ml-1 text-xs group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className="ml-1 text-xs group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        <footer className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Need help choosing the right monitoring solution? 
            <Link 
              to="/contact" 
              className="text-blue-600 dark:text-blue-400 hover:underline ml-1"
            >
              Contact our team
            </Link>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default InternalLinks; 