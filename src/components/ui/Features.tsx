import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faGlobe, faShieldAlt, faServer, faClock, faBell, faChartLine, faArrowRight, faPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faSlack } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

// Define feature data with icons
const getFeatures = (t: (key: string) => string) => [
  {
    title: t('webMonitoringTitle'),
    description: t('webMonitoringDesc'),
    bullets: [
      t('httpMonitoring'),
      t('responseTime'),
      t('checkIntervals')
    ],
    icon: faGlobe,
    color: "blue"
  },
  {
    title: t('sslMonitoringTitle'),
    description: t('sslMonitoringDesc'),
    bullets: [
      t('certExpiration'),
      t('dayWarnings'),
      t('certDetails')
    ],
    icon: faShieldAlt,
    color: "green"
  },
  {
    title: t('serverMonitoringTitle'),
    description: t('serverMonitoringDesc'),
    bullets: [
      t('serverCpu'),
      t('serverNetwork'),
      t('serverProcess')
    ],
    icon: faServer,
    color: "purple"
  },
  {
    title: t('cronjobMonitoringTitle'),
    description: t('cronjobMonitoringDesc'),
    bullets: [
      t('cronjobHeartbeat'),
      t('cronjobSchedule'),
      t('cronjobMissed')
    ],
    icon: faClock,
    color: "orange"
  },
  {
    title: t('smartNotificationsTitle'),
    description: t('smartNotificationsDesc'),
    bullets: [
      t('alertChannels'),
      t('alertThresholds'),
      t('alertScheduling')
    ],
    icon: faBell,
    color: "red"
  },
  {
    title: t('statusPageTitle'),
    description: t('statusPageDesc'),
    bullets: [
      t('statusPagePublic'),
      t('statusPageBranding'),
      t('statusPageReports')
    ],
    icon: faChartLine,
    color: "indigo"
  }
];

// Helper function to get color classes
const getColorClasses = (color: string) => {
  const colorMap: {[key: string]: {bg: string, bgDark: string, text: string, textDark: string}} = {
    blue: {
      bg: "bg-blue-100",
      bgDark: "dark:bg-blue-900/30",
      text: "text-blue-600",
      textDark: "dark:text-blue-400"
    },
    green: {
      bg: "bg-green-100",
      bgDark: "dark:bg-green-900/30",
      text: "text-green-600",
      textDark: "dark:text-green-400"
    },
    purple: {
      bg: "bg-purple-100",
      bgDark: "dark:bg-purple-900/30",
      text: "text-purple-600",
      textDark: "dark:text-purple-400"
    },
    orange: {
      bg: "bg-orange-100",
      bgDark: "dark:bg-orange-900/30",
      text: "text-orange-600",
      textDark: "dark:text-orange-400"
    },
    red: {
      bg: "bg-red-100",
      bgDark: "dark:bg-red-900/30",
      text: "text-red-600",
      textDark: "dark:text-red-400"
    },
    indigo: {
      bg: "bg-indigo-100",
      bgDark: "dark:bg-indigo-900/30",
      text: "text-indigo-600",
      textDark: "dark:text-indigo-400"
    }
  };
  
  return colorMap[color] || colorMap.blue;
};

const Features: React.FC = () => {
  const { t } = useTranslation();
  const features = getFeatures(t);
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  
  // Get features to display based on state
  const displayedFeatures = showAllFeatures ? features : features.slice(0, 3);
  
  // Animation effect for cards
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add staggered animation delay
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          (entry.target as HTMLElement).style.transitionDelay = `${index * 100}ms`;
          entry.target.classList.remove('opacity-0', 'translate-y-5');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
      card.setAttribute('data-index', index.toString());
      observer.observe(card);
    });
    
    return () => {
      featureCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, [showAllFeatures]); // Re-run when showAllFeatures changes
  
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <header className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/30 rounded-full px-4 py-2 text-blue-600 dark:text-blue-400 font-medium text-sm mb-4">
            {t('whatWeOffer')}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            {t('featuresSectionTitle')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            {t('featuresSectionSubtitle')}
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedFeatures.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            return (
              <div 
                key={index} 
                className="feature-card opacity-0 transform translate-y-5 transition-all duration-500"
                data-index={index}
              >
                <div className={`h-12 w-12 rounded-xl ${colorClasses.bg} ${colorClasses.bgDark} flex items-center justify-center mb-5`}>
                  <FontAwesomeIcon 
                    icon={feature.icon} 
                    className={`text-xl ${colorClasses.text} ${colorClasses.textDark}`} 
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-height-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start">
                      <FontAwesomeIcon 
                        icon={faCheck} 
                        className={`${colorClasses.text} ${colorClasses.textDark} mr-2 mt-1`} 
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        
        {/* Show More Features Button */}
        {!showAllFeatures && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllFeatures(true)}
              className="inline-flex items-center group px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <FontAwesomeIcon 
                icon={faPlus} 
                className="mr-2 group-hover:rotate-90 transition-transform duration-300" 
              />
              <span>{t('showMoreFeatures')}</span>
            </button>
          </div>
        )}
        
        <div className="text-center mt-20">
          <Link 
            to="https://app.pulseguard.nl/register" 
            className="btn-primary inline-flex items-center group px-8 py-4 text-lg"
          >
            <span>Get started with all features</span>
            <FontAwesomeIcon 
              icon={faArrowRight} 
              className="ml-2 group-hover:translate-x-1 transition-transform duration-300" 
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features; 