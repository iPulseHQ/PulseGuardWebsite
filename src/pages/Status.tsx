import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Status: React.FC = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 relative overflow-hidden">
        {/* Enhanced background patterns */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTRtMC0xOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNG0wIDM2YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00bTE4LTE4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00bS0zNiAwYzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00bTE4LTM2YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00bTE4IDBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTRtLTM2IDBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTRtLTE4IDE4YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.15),transparent_70%)]"></div>
        
        {/* Simplified animated shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Status Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">System Status</h1>
              <p className="text-xl text-blue-200">Monitor the health of PulseGuard's services in real-time</p>
            </div>

            {/* Status Widget */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
              <iframe 
                src="https://app.pulseguard.nl/status/pulseguard-1/widget" 
                width="100%" 
                height="400" 
                frameBorder="0" 
                style={{ borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)' }}
                title="PulseGuard Status"
              >
              </iframe>
            </div>

            {/* Additional Information */}
            <div className="mt-8 text-center">
              <p className="text-blue-200">
                Need to report an issue? Contact us at 
                <a href="mailto:info@pulseguard.nl" className="text-blue-300 hover:text-blue-200 underline ml-1">
                  info@pulseguard.nl
                </a>
              </p>
            </div>
            
            {/* Return to dashboard button */}
            <div className="flex justify-center mt-10">
              <Link 
                to="https://app.pulseguard.nl" 
                className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 border border-white/20 inline-flex items-center"
              >
                <span>Go to Dashboard</span>
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Status; 