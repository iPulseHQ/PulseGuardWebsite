import React from 'react';
import Layout from '../components/layout/Layout';
import Mockups from '../components/ui/Mockups';

const AppPage: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 md:pt-28">
        <Mockups />
      </div>
    </Layout>
  );
};

export default AppPage; 