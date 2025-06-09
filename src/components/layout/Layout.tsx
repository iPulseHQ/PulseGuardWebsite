import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import BetaSignupModal from '../ui/BetaSignupModal';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900 bg-gray-50">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BetaSignupModal />
    </div>
  );
};

export default Layout; 