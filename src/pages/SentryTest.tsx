import React from 'react';

const SentryTest: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Sentry Test Page</h1>
      <button 
        onClick={() => {throw new Error("This is your first error!");}}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Break the world
      </button>
    </div>
  );
};

export default SentryTest;