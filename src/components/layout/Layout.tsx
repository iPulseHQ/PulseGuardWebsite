import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from '../ui/Breadcrumb';
import BetaSignupModal from '../ui/BetaSignupModal';
import PreloadResources from './PreloadResources';
import SEOHead from './SEOHead';

interface LayoutProps {
  children: React.ReactNode;
  showBreadcrumb?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showBreadcrumb = true }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Show/hide scroll-to-top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <PreloadResources />
      <SEOHead />
      <div className="flex flex-col min-h-screen dark:bg-gray-900 bg-gray-50">
        <Header />
        {showBreadcrumb && <Breadcrumb />}
        <main className="flex-grow" role="main">
          {children}
        </main>
        <Footer />
        <BetaSignupModal />
        
        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
          aria-label="Scroll naar boven"
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
        </button>
      </div>
    </>
  );
};

export default Layout; 