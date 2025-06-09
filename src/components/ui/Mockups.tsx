import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

interface FullscreenImageProps {
  image: string;
  title: string;
}

const Mockups: React.FC = () => {
  const [fullscreenImage, setFullscreenImage] = useState<FullscreenImageProps | null>(null);

  const openFullscreen = (image: string, title: string) => {
    setFullscreenImage({ image, title });
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <>
      <section id="mockups" className="py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Intuitive dashboards that work</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">See how PulseGuard helps you gain insight into the status of your digital infrastructure.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="mockup-container">
              <div className="browser-mockup shadow-xl hover:shadow-2xl relative group">
                <div className="browser-header">
                  <div className="browser-buttons">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="browser-address-bar">app.pulseguard.nl/dashboard</div>
                </div>
                <div className="browser-content relative">
                  <img 
                    src="/images/dashboard.png" 
                    alt="PulseGuard Dashboard - Real-time monitoring and analytics interface" 
                    className="rounded-b-lg"
                  />
                  <button 
                    className="fullscreen-btn absolute top-2 right-2 bg-gray-900/80 hover:bg-gray-900 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                    onClick={() => openFullscreen("/images/dashboard.png", "PulseGuard Dashboard")}
                  >
                    <FontAwesomeIcon icon={faExpand} />
                  </button>
                </div>
              </div>
              <div className="text-center mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Comprehensive Dashboard</h3>
                <p className="text-gray-600 dark:text-gray-400">All important metrics and statuses at a glance.</p>
              </div>
            </div>
            
            <div className="mockup-container">
              <div className="browser-mockup shadow-xl hover:shadow-2xl relative group">
                <div className="browser-header">
                  <div className="browser-buttons">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="browser-address-bar">app.pulseguard.nl/domains</div>
                </div>
                <div className="browser-content relative">
                  <img 
                    src="/images/domains.png" 
                    alt="PulseGuard Domains Overview - Monitor all your domains and SSL certificates" 
                    className="rounded-b-lg"
                  />
                  <button 
                    className="fullscreen-btn absolute top-2 right-2 bg-gray-900/80 hover:bg-gray-900 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                    onClick={() => openFullscreen("/images/domains.png", "Domain Monitoring")}
                  >
                    <FontAwesomeIcon icon={faExpand} />
                  </button>
                </div>
              </div>
              <div className="text-center mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Domain Monitoring</h3>
                <p className="text-gray-600 dark:text-gray-400">Detailed overview of all your domains and their statuses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center"
          onClick={closeFullscreen}
        >
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <button 
              onClick={closeFullscreen}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-xl z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative max-w-[90vw] max-h-[90vh]">
              <img 
                src={fullscreenImage.image} 
                alt={fullscreenImage.title} 
                className="max-w-full max-h-[90vh] object-contain"
              />
              <h3 className="text-white text-center mt-4 text-lg font-medium">{fullscreenImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Mockups; 