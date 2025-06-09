import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faGlobe, faShieldAlt, faServer, faClock, faBell, faChartLine, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Define feature data with icons
const features = [
  {
    title: "Website Monitoring",
    description: "We'll ping your websites regularly and let you know right away if they go down. No more finding out from an angry customer email.",
    bullets: [
      "HTTP/HTTPS status monitoring",
      "Response time tracking",
      "Custom check intervals"
    ],
    icon: faGlobe,
    color: "blue"
  },
  {
    title: "SSL Certificate Monitoring",
    description: "Never miss an SSL certificate expiration again. We'll remind you with plenty of time to renew before your visitors see those scary browser warnings.",
    bullets: [
      "Certificate expiration alerts",
      "30, 14, and 7-day warnings",
      "Certificate details overview"
    ],
    icon: faShieldAlt,
    color: "green"
  },
  {
    title: "Server Monitoring",
    description: "Keep an eye on your server resources. Our lightweight agent gives you insights without bogging down your system.",
    bullets: [
      "CPU, memory, and disk usage",
      "Network traffic monitoring",
      "Process monitoring"
    ],
    icon: faServer,
    color: "purple"
  },
  {
    title: "Cronjob Monitoring",
    description: "Those background tasks that silently fail? We'll make sure they don't go unnoticed. Set expected run times and get alerted when things don't go as planned.",
    bullets: [
      "Heartbeat monitoring",
      "Expected run schedule",
      "Missed execution alerts"
    ],
    icon: faClock,
    color: "orange"
  },
  {
    title: "Smart Notifications",
    description: "Get alerts where you actually check them - whether that's Telegram, email, Slack, or webhooks for custom integrations.",
    bullets: [
      "Multiple notification channels",
      "Customizable alert thresholds",
      "Notification scheduling"
    ],
    icon: faBell,
    color: "red"
  },
  {
    title: "Status Page",
    description: "Share your uptime with your team or customers. Our clean status pages give transparency and build trust with your users.",
    bullets: [
      "Public or private status pages",
      "Customizable branding",
      "Historical uptime reports"
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
  }, []);
  
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block bg-blue-100 dark:bg-blue-900/30 rounded-full px-4 py-2 text-blue-600 dark:text-blue-400 font-medium text-sm mb-4">
            What we offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Everything you need to keep tabs on your digital world
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            We've built PulseGuard to be simple yet powerful. Our features are designed for real people with real monitoring needs - from solo developers to large teams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
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