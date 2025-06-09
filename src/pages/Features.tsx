import React from 'react';
import Layout from '../components/layout/Layout';
import Features from '../components/ui/Features';

const FeaturesPage: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 md:pt-28">
        <Features />
      </div>
    </Layout>
  );
};

export default FeaturesPage; 