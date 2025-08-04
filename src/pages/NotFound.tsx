import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SEOHead from '../components/layout/SEOHead';


const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead
        title="404 Not Found - PulseGuard"
        description="The page you are looking for does not exist."
        canonicalUrl="https://pulseguard.pro/404"
      />
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <h1 className="text-6xl font-bold text-gray-800 dark:text-white">404</h1>
          <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mt-4">Page Not Found</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Sorry, the page you are looking for could not be found.
          </p>
            
          <Link
            to="/"
            className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Go back to Home
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default NotFound; 