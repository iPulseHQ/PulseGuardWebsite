import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SEOHead from '../components/layout/SEOHead';

const ErrorPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="500 Internal Server Error - PulseGuard"
        description="Something went wrong on our end."
        canonicalUrl="https://pulseguard.pro/500"
      />
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <h1 className="text-6xl font-bold text-red-600 dark:text-red-500">500</h1>
          <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mt-4">Internal Server Error</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Sorry, something went wrong on our side. Please try again later.
          </p>
          <img src="/images/edit-domain.svg" alt="500 Internal Server Error" className="w-64 h-64 mt-8" />
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

export default ErrorPage; 