import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faDesktop, faTag, faUsers, faUserPlus, faArrowRight, faBars, faTimes, faSun, faMoon, faChartLine, faNewspaper, faGlobe, faFile } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from '../../context/DarkModeContext';
import { useTranslation } from '../../hooks/useTranslation';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { t, currentLang, changeLanguage } = useTranslation();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    changeLanguage(currentLang === 'nl' ? 'en' : 'nl');
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group transition-all duration-300 transform hover:scale-105">
              <img src={isDarkMode ? "/images/logofinal.png" : "/images/logodark.png"} alt="PulseGuard Logo" className="h-10" />
            </Link>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <div className="bg-gray-100/80 dark:bg-gray-800/80 rounded-full px-1.5 py-1.5 flex items-center space-x-1 backdrop-blur-sm">
              <Link to="/" className="nav-link group px-4 py-2 hover:bg-white dark:hover:bg-gray-700 rounded-full">
                <span className="font-medium">{t('navigation')}</span>
                <span className="nav-link-indicator"></span>
              </Link>
              <Link to="/features" className="nav-link group px-4 py-2 hover:bg-white dark:hover:bg-gray-700 rounded-full">
                <span className="font-medium">{t('features')}</span>
                <span className="nav-link-indicator"></span>
              </Link>
              <Link to="/pricing" className="nav-link group px-4 py-2 hover:bg-white dark:hover:bg-gray-700 rounded-full">
                <span className="font-medium">{t('pricing')}</span>
                <span className="nav-link-indicator"></span>
              </Link>
              <Link to="/pulsefiles" className="nav-link group px-4 py-2 hover:bg-white dark:hover:bg-gray-700 rounded-full relative">
                <span className="font-medium">PulseFiles</span>
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full animate-pulse">NEW</span>
                <span className="nav-link-indicator"></span>
              </Link>
              <Link to="/team" className="nav-link group px-4 py-2 hover:bg-white dark:hover:bg-gray-700 rounded-full">
                <span className="font-medium">{t('team')}</span>
                <span className="nav-link-indicator"></span>
              </Link>
              <Link to="/blog" className="nav-link group px-4 py-2 hover:bg-white dark:hover:bg-gray-700 rounded-full">
                <span className="font-medium">{t('blog')}</span>
                <span className="nav-link-indicator"></span>
              </Link>
            </div>
          </nav>
          
          {/* Action Buttons - Right Side */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="relative inline-flex items-center h-8 px-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900"
              aria-label={currentLang === 'nl' ? 'Switch to English' : 'Schakel naar Nederlands'}
            >
              <FontAwesomeIcon icon={faGlobe} className="h-4 w-4 mr-1.5 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase">{currentLang}</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`relative inline-flex items-center h-8 w-14 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 ${
                isDarkMode ? 'bg-gray-700' : 'bg-blue-500'
              }`}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span
                className={`absolute inset-y-0 left-1 my-auto h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out flex items-center justify-center ${
                  isDarkMode ? 'translate-x-6' : 'translate-x-0'
                }`}
              >
                <FontAwesomeIcon
                  icon={isDarkMode ? faMoon : faSun}
                  className={`h-4 w-4 transition-colors duration-300 ${
                    isDarkMode ? 'text-yellow-400' : 'text-yellow-500'
                  }`}
                />
              </span>
            </button>
            
            <Link to="https://app.pulseguard.nl" className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full group hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
              <span className="relative">{t('dashboard')}</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            {/* Language Toggle for Mobile */}
            <button
              onClick={toggleLanguage}
              className="relative inline-flex items-center h-8 px-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 mr-2"
              aria-label={currentLang === 'nl' ? 'Switch to English' : 'Schakel naar Nederlands'}
            >
              <FontAwesomeIcon icon={faGlobe} className="h-4 w-4 mr-1.5 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 uppercase">{currentLang}</span>
            </button>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center h-10 w-10 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg focus:outline-none"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-gray-800 shadow-2xl absolute top-full left-0 right-0 border-t border-gray-200 dark:border-gray-700 rounded-b-2xl overflow-hidden`}>
        <div className="py-3 px-4 space-y-2 max-h-[80vh] overflow-y-auto">
          <Link to="/" className="mobile-nav-link flex items-center py-3 px-4 rounded-xl group" onClick={() => setMobileMenuOpen(false)}>
            <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faHome} className="text-blue-500" />
            </div>
            <span className="font-medium">{t('navigation')}</span>
          </Link>
          
          <Link to="/features" className="mobile-nav-link flex items-center py-3 px-4 rounded-xl group" onClick={() => setMobileMenuOpen(false)}>
            <div className="h-8 w-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faStar} className="text-indigo-500" />
            </div>
            <span className="font-medium">{t('features')}</span>
          </Link>
          
          <Link to="/pricing" className="mobile-nav-link flex items-center py-3 px-4 rounded-xl group" onClick={() => setMobileMenuOpen(false)}>
            <div className="h-8 w-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faTag} className="text-green-500" />
            </div>
            <span className="font-medium">{t('pricing')}</span>
          </Link>
          
          <Link to="/pulsefiles" className="mobile-nav-link flex items-center justify-between py-3 px-4 rounded-xl group" onClick={() => setMobileMenuOpen(false)}>
            <div className="flex items-center">
              <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-3">
                <FontAwesomeIcon icon={faFile} className="text-purple-500" />
              </div>
              <span className="font-medium">PulseFiles</span>
            </div>
            <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
              NEW
            </div>
          </Link>
          
          <Link to="/team" className="mobile-nav-link flex items-center py-3 px-4 rounded-xl group" onClick={() => setMobileMenuOpen(false)}>
            <div className="h-8 w-8 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faUsers} className="text-amber-500" />
            </div>
            <span className="font-medium">{t('team')}</span>
          </Link>
          
          <Link to="/blog" className="mobile-nav-link flex items-center py-3 px-4 rounded-xl group" onClick={() => setMobileMenuOpen(false)}>
            <div className="h-8 w-8 bg-gray-100 dark:bg-gray-900/30 rounded-lg flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faNewspaper} className="text-gray-500" />
            </div>
            <span className="font-medium">{t('blog')}</span>
          </Link>
          
          <Link to="https://app.pulseguard.nl/register" className="mobile-nav-link flex items-center py-3 px-4 rounded-xl group" onClick={() => setMobileMenuOpen(false)}>
            <div className="h-8 w-8 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faUserPlus} className="text-sky-500" />
            </div>
            <span className="font-medium">{t('register')}</span>
          </Link>
          
          {/* Dark Mode Toggle in Mobile Menu */}
          <div className="mobile-nav-link flex items-center justify-between py-3 px-4 rounded-xl group">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mr-3">
                <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} className="text-yellow-500" />
              </div>
              <span className="font-medium">{isDarkMode ? t('lightMode') || 'Light Mode' : t('darkMode') || 'Dark Mode'}</span>
            </div>
            <button
              onClick={toggleDarkMode}
              className={`relative inline-flex items-center h-8 w-14 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 ${
                isDarkMode ? 'bg-gray-700' : 'bg-blue-500'
              }`}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span
                className={`absolute inset-y-0 left-1 my-auto h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out flex items-center justify-center ${
                  isDarkMode ? 'translate-x-6' : 'translate-x-0'
                }`}
              >
                <FontAwesomeIcon
                  icon={isDarkMode ? faMoon : faSun}
                  className={`h-4 w-4 transition-colors duration-300 ${
                    isDarkMode ? 'text-yellow-400' : 'text-yellow-500'
                  }`}
                />
              </span>
            </button>
          </div>
          
          {/* App Link in Mobile Menu */}
          <Link to="https://app.pulseguard.nl" className="mobile-nav-link flex items-center justify-between py-3 px-4 rounded-xl group" onClick={() => setMobileMenuOpen(false)}>
            <div className="flex items-center">
              <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
                <FontAwesomeIcon icon={faArrowRight} className="text-blue-500" />
              </div>
              <span className="font-medium">{t('dashboard')}</span>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
              {t('goToDashboard')}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 