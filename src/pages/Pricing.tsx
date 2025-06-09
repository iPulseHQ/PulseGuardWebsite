import React from 'react';
import Layout from '../components/layout/Layout';
import Pricing from '../components/ui/Pricing';

const PricingPage: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 md:pt-28">
        <Pricing />
      </div>
    </Layout>
  );
};

export default PricingPage; 