import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Volledige Monitoring Oplossing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Professionele tools voor website-, server- en infrastructuurmonitoring, ontworpen voor bedrijven van elke omvang. Bewaak uw digitale middelen met uitgebreide waarschuwings- en rapportagemogelijkheden.
          </p>
          <Link 
            to="/features" 
            className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-lg">Ontdek alle functies</span>
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features; 