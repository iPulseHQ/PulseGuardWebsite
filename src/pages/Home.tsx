import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/ui/Hero';
import Demo from '../components/ui/Demo';
import Features from '../components/ui/Features';
import Mockups from '../components/ui/Mockups';
import Pricing from '../components/ui/Pricing';

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Demo />
      <Features />
      <Mockups />
      <Pricing />
    </Layout>
  );
};

export default Home; 