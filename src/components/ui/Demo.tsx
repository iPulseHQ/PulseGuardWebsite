import React from 'react';
import { useDarkMode } from '../../context/DarkModeContext';

const Demo: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  
  // Add dark mode parameter to the iframe URL
  const demoUrl = `https://demo.pulseguard.nl/embed/cmc0ndkcliukcsn1rky5p2dix?embed_v=2${isDarkMode ? '&theme=dark' : ''}`;
  
  return (
    <section id="demo" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Try Our <span className="text-indigo-600 dark:text-indigo-400">Live Demo</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience PulseGuard firsthand with our interactive demo. See how easy it is to monitor your websites and servers in real-time.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div style={{
            position: "relative", 
            boxSizing: "content-box", 
            height: "80svh", 
            width: "100%", 
            aspectRatio: "1.9623621025308242", 
            padding: "40px 0 40px 0"
          }}>
            <iframe 
              src={demoUrl}
              loading="lazy" 
              title="Pulseguard Demo" 
              allow="clipboard-write" 
              frameBorder="0" 
              style={{
                position: "absolute", 
                top: 0, 
                left: 0, 
                width: "100%", 
                height: "100%"
              }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo; 