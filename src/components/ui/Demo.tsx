import React from 'react';

const Demo: React.FC = () => {
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
        
        <div className="max-w-6xl mx-auto flex justify-center">
          <div style={{
            position: "relative", 
            boxSizing: "content-box", 
            maxHeight: "80vh", 
            width: "100%", 
            aspectRatio: "1.9623621025308242", 
            padding: "5px 0 5px 0",
            margin: "0 auto"
          }}>
            <iframe 
              src="https://app.supademo.com/embed/cmc0ndkcliukcsn1rky5p2dix?embed_v=2&autoplay=true"
              loading="eager" 
              title="Pulseguard Demo" 
              allow="clipboard-write; autoplay" 
              frameBorder="0" 
              allowFullScreen
              style={{
                position: "absolute", 
                top: 0, 
                left: "50%",
                transform: "translateX(-50%)",
                width: "100%", 
                height: "100%"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo; 