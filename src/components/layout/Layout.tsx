import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from '../ui/Breadcrumb';
import BetaSignupModal from '../ui/BetaSignupModal';

interface LayoutProps {
  children: ReactNode;
  showBreadcrumb?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showBreadcrumb = true }) => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900 bg-gray-50">
      <Header />
      {showBreadcrumb && <Breadcrumb />}
      <main className="flex-grow" role="main">
        {children}
      </main>
      <Footer />
      <BetaSignupModal />
    </div>
  );
};

export default Layout; 