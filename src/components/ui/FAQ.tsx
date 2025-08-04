import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { translate, Language } from '../../utils/translations';

interface FAQItem {
  questionKey: string;
  answerKey: string;
}

interface FAQProps {
  items: FAQItem[];
  language?: Language;
  className?: string;
}

const FAQ: React.FC<FAQProps> = ({ 
  items, 
  language = 'nl',
  className = ""
}) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className={`py-16 bg-white dark:bg-gray-900 ${className}`}>
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {translate('faqTitle', language)}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {translate('faqSubtitle', language)}
          </p>
        </header>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {items.map((item, index) => (
              <article 
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  aria-expanded={openItems.has(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900 dark:text-white pr-4">
                      {translate(item.questionKey, language)}
                    </h3>
                    <FontAwesomeIcon
                      icon={openItems.has(index) ? faChevronUp : faChevronDown}
                      className="text-blue-600 dark:text-blue-400 flex-shrink-0 transition-transform duration-200"
                    />
                  </div>
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className={`transition-all duration-200 ease-in-out ${
                    openItems.has(index) 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="px-6 py-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {translate(item.answerKey, language)}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <footer className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300">
            {translate('faqContactText', language)}{' '}
            <a 
              href="mailto:support@pulseguard.pro"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              {translate('faqContactLink', language)}
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default FAQ;
