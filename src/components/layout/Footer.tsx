import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faChevronRight, faGlobe, faChevronDown, faFlask, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from '../../hooks/useTranslation';
import { Language } from '../../utils/translations';

const Footer: React.FC = () => {
  const [languageOptionsOpen, setLanguageOptionsOpen] = useState(false);
  const { currentLang, changeLanguage, t } = useTranslation();

  // Handle language change
  const handleLanguageChange = (lang: Language) => {
    changeLanguage(lang);
    setLanguageOptionsOpen(false);
  };

  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white pt-16 pb-8 relative overflow-hidden" itemScope itemType="https://schema.org/WPFooter">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full -mr-24 -mb-24 pointer-events-none"></div>
      <div className="absolute left-0 top-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full -ml-24 -mt-24 pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        
        {/* ProductHunt Badge and Additional Features */}
        <div className="text-center mb-12 pb-8 border-b border-gray-700">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* ProductHunt Badge */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-4">Featured on Product Hunt</h3>
              <a href="https://www.producthunt.com/products/pulseguard-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-pulseguard&#0045;2" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=976244&theme=light&t=1749542380853" 
                  alt="PulseGuard - Complete monitoring solution for websites, devices & services | Product Hunt" 
                  style={{ width: '250px', height: '54px' }} 
                  width="250" 
                  height="54" 
                  className="hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>

            {/* Language Selector and Beta Signup */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Language Switcher */}
              <div className="flex flex-col items-center">
                <h4 className="text-sm font-medium text-gray-400 mb-3">{t('language')}</h4>
                <div className="relative">
                  <button 
                    onClick={() => setLanguageOptionsOpen(!languageOptionsOpen)}
                    className="flex items-center text-white hover:text-blue-400 transition-colors bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg"
                  >
                    <FontAwesomeIcon icon={faGlobe} className="mr-2 text-blue-400" />
                    <span className="font-medium">{currentLang.toUpperCase()}</span>
                    <FontAwesomeIcon icon={faChevronDown} className="text-xs ml-2" />
                  </button>
                  
                  {languageOptionsOpen && (
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 py-2 w-40 bg-gray-700 rounded-xl shadow-xl z-20 border border-gray-600">
                      <button 
                        onClick={() => handleLanguageChange('en')}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white flex items-center w-full text-left"
                      >
                        <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                          <span className="text-xs text-blue-600 font-bold">EN</span>
                        </span>
                        {t('english')}
                        {currentLang === 'en' && <FontAwesomeIcon icon={faCheck} className="ml-auto text-blue-400" />}
                      </button>
                      <button 
                        onClick={() => handleLanguageChange('nl')}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white flex items-center w-full text-left"
                      >
                        <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mr-2">
                          <span className="text-xs text-orange-600 font-bold">NL</span>
                        </span>
                        {t('dutch')}
                        {currentLang === 'nl' && <FontAwesomeIcon icon={faCheck} className="ml-auto text-blue-400" />}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Beta Signup */}
              <div className="flex flex-col items-center">
                <h4 className="text-sm font-medium text-gray-400 mb-3">Join Our Beta</h4>
                <button 
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
                  onClick={() => document.getElementById('beta-signup-modal')?.classList.remove('hidden')}
                >
                  <FontAwesomeIcon icon={faFlask} />
                  <span>{t('joinBeta')}</span>
                </button>
              </div>

              {/* Register Link */}
              <div className="flex flex-col items-center">
                <h4 className="text-sm font-medium text-gray-400 mb-3">Get Started</h4>
                <a 
                  href="https://app.pulseguard.nl/register" 
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  {t('register')}
                </a>
              </div>
            </div>
          </div>
        </div>

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
          <p>&copy; <span itemProp="copyrightYear">{new Date().getFullYear()}</span> <span itemProp="copyrightHolder">PulseGuard</span> - All rights reserved. <a href="mailto:info@pulseguard.nl" className="text-blue-400 hover:text-blue-300" itemProp="email">info@pulseguard.nl</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 