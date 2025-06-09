import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white pt-16 pb-8 relative overflow-hidden" itemScope itemType="https://schema.org/WPFooter">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full -mr-24 -mb-24 pointer-events-none"></div>
      <div className="absolute left-0 top-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full -ml-24 -mt-24 pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div itemScope itemType="https://schema.org/Organization">
            <div className="flex items-center mb-6">
              <svg className="h-8 w-8 text-white mr-2 drop-shadow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xl font-bold" itemProp="name">PulseGuard</span>
            </div>
            <p className="text-gray-400 mb-6" itemProp="description">Complete monitoring solution for websites, servers, and devices.</p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/pulseguardnl" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200" itemProp="sameAs" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-lg" aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/pulseguard_/" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200" itemProp="sameAs" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-lg" aria-hidden="true" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://github.com/pulseguard-nl" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200" itemProp="sameAs">
                <FontAwesomeIcon icon={faGithub} className="text-lg" aria-hidden="true" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#features" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/#mockups" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block">
                  App Preview
                </Link>
              </li>
              <li>
                <Link to="/#pricing" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Platform</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://app.pulseguard.nl" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="https://app.pulseguard.nl/domains" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block">
                  Domains
                </a>
              </li>
              <li>
                <a href="https://app.pulseguard.nl/device-monitoring" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block">
                  Devices
                </a>
              </li>
              <li>
                <a href="https://app.pulseguard.nl/subscriptions" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block">
                  Subscriptions
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://arjandh.notion.site/1ff0645fff30819ab883fe1e29743e7c?pvs=105" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block">
                  Help Center
                </a>
              </li>
              <li>
                <a href="mailto:info@pulseguard.nl" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block flex items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />info@pulseguard.nl
                </a>
              </li>
              <li>
                <a href="https://app.pulseguard.nl/privacy" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://app.pulseguard.nl/terms" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; <span itemProp="copyrightYear">{new Date().getFullYear()}</span> <span itemProp="copyrightHolder">IMDigital</span> - All rights reserved. <a href="mailto:info@pulseguard.nl" className="text-blue-400 hover:text-blue-300" itemProp="email">info@pulseguard.nl</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 