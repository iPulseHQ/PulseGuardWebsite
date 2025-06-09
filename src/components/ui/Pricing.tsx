import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faTag, faArrowRight, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'card' | 'table'>('card');
  const tabIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Update tab indicator position
    if (tabIndicatorRef.current) {
      if (activeTab === 'card') {
        tabIndicatorRef.current.style.transform = 'translateX(0%)';
      } else {
        tabIndicatorRef.current.style.transform = 'translateX(100%)';
      }
    }
  }, [activeTab]);

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Transparent pricing</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Choose the package that suits your monitoring needs.</p>
        </div>
        
        {/* Tabs Navigation */}
        <div className="mb-12">
          <div className="flex justify-center mx-auto max-w-md">
            <div className="bg-gray-100 dark:bg-gray-800 p-1.5 rounded-xl shadow-lg w-full border border-gray-200 dark:border-gray-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-white/30 dark:from-gray-700/50 dark:to-gray-900/30 pointer-events-none overflow-hidden"></div>
              
              {/* Tab Selection Indicator */}
              <div 
                id="tab-indicator" 
                ref={tabIndicatorRef}
                className="absolute h-full top-0 left-0 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-all duration-300 ease-in-out transform" 
                style={{ width: '50%', transform: 'translateX(0%)' }}
              ></div>
              
              <div className="flex space-x-2 relative z-10">
                <button 
                  onClick={() => setActiveTab('card')}
                  className={`py-2.5 px-4 font-medium text-base rounded-lg transition-all duration-200 flex-1 text-center relative ${activeTab === 'card' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faCreditCard} className="w-5 h-5 mr-2" />
                    <span>Card View</span>
                  </span>
                </button>
                <button 
                  onClick={() => setActiveTab('table')}
                  className={`py-2.5 px-4 font-medium text-base rounded-lg transition-all duration-200 flex-1 text-center relative ${activeTab === 'table' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                    </svg>
                    <span>Comparison Table</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card View */}
        <div id="card-view" className={`tab-content ${activeTab === 'card' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Free Plan */}
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Free</h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">€0<span className="text-lg font-normal text-gray-600 dark:text-gray-400">/month</span></p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">For personal use</p>
              </div>
              <div className="pricing-features">
                <div className="pricing-feature"><FontAwesomeIcon icon={faCheck} className="text-green-500" /> <span>1 domain</span></div>
                <div className="pricing-feature"><FontAwesomeIcon icon={faCheck} className="text-green-500" /> <span>1 device (monitoring only)</span></div>
                <div className="pricing-feature"><FontAwesomeIcon icon={faTimes} className="text-red-500" /> <span>No DNS management</span></div>
                <div className="pricing-feature"><FontAwesomeIcon icon={faTimes} className="text-red-500" /> <span>No actions</span></div>
                <div className="pricing-feature"><FontAwesomeIcon icon={faTimes} className="text-red-500" /> <span>No notifications</span></div>
              </div>
              <Link to="https://app.pulseguard.nl/register" className="mt-6 block bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium py-3 px-4 rounded-md text-center transition-colors">Start free</Link>
            </div>
            
            {/* Standard Plan */}
            <div className="pricing-card popular">
              <div className="popular-badge">Most popular</div>
              <div className="pricing-header">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Standard</h3>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  <span className="text-sm line-through text-gray-500 dark:text-gray-400 font-normal align-middle mr-1">€6.44</span>
                  €5.99<span className="text-lg font-normal text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2 mb-3">
                  <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Save 7%</span>
                  </span>
                  <span className="inline-flex items-center bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>14 days trial</span>
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">For small websites</p>
              </div>
              <div className="pricing-features">
                <div className="pricing-feature"><FontAwesomeIcon icon={faCheck} className="text-green-500" /> <span>5 domains (complete)</span></div>
                <div className="pricing-feature"><FontAwesomeIcon icon={faCheck} className="text-green-500" /> <span>2 devices (complete)</span></div>
                <div className="pricing-feature"><FontAwesomeIcon icon={faCheck} className="text-green-500" /> <span>DNS Toolbox</span></div>
                <div className="pricing-feature"><FontAwesomeIcon icon={faCheck} className="text-green-500" /> <span>Email notifications</span></div>
                <div className="pricing-feature"><FontAwesomeIcon icon={faTimes} className="text-red-500" /> <span>No Telegram notifications</span></div>
                <div className="pricing-feature"><FontAwesomeIcon icon={faTimes} className="text-red-500" /> <span>No API access</span></div>
              </div>
              <Link to="https://app.pulseguard.nl/register" className="mt-6 block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md text-center transition-colors shadow-lg shadow-blue-600/20">Start now</Link>
            </div>
            
            {/* Pro Plan */}
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Pro</h3>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  <span className="text-sm line-through text-gray-500 dark:text-gray-400 font-normal align-middle mr-1">€17.49</span>
                  €13.99<span className="text-lg font-normal text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2 mb-3">
                  <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Save 20%</span>
                  </span>
                  <span className="inline-flex items-center bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>14 days trial</span>
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">For professionals</p>
              </div>
              <div className="pricing-features">
                <div className="pricing-feature"><FontAwesomeIcon icon={faCheck} className="text-green-500" /> <span>15 domains (complete)</span></div>
                <div className="pricing-feature"><FontAwesomeIcon icon={faCheck} className="text-green-500" /> <span>10 devices (complete)</span></div>
                <div className="pricing-feature"><FontAwesomeIcon icon={faCheck} className="text-green-500" /> <span>Complete Toolbox</span></div>
                <div className="pricing-feature"><FontAwesomeIcon icon={faCheck} className="text-green-500" /> <span>Email notifications</span></div>
                <div className="pricing-feature"><FontAwesomeIcon icon={faCheck} className="text-green-500" /> <span>Telegram notifications</span></div>
                <div className="pricing-feature"><FontAwesomeIcon icon={faCheck} className="text-green-500" /> <span>API access</span></div>
              </div>
              <Link to="https://app.pulseguard.nl/register" className="mt-6 block bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-md text-center transition-colors">Start now</Link>
            </div>
            
            {/* Enterprise Plan */}
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Enterprise</h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Contact Us</p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">For large organizations</p>
              </div>
              <div className="pricing-features">
                <div className="pricing-feature"><FontAwesomeIcon icon={faCheck} className="text-green-500" /> <span>25+ domains</span></div>
                <div className="pricing-feature"><FontAwesomeIcon icon={faCheck} className="text-green-500" /> <span>25+ devices</span></div>
                <div className="pricing-feature"><FontAwesomeIcon icon={faCheck} className="text-green-500" /> <span>Complete Toolbox</span></div>
                <div className="pricing-feature"><FontAwesomeIcon icon={faCheck} className="text-green-500" /> <span>Advanced Notifications</span></div>
                <div className="pricing-feature"><FontAwesomeIcon icon={faCheck} className="text-green-500" /> <span>Priority Support</span></div>
              </div>
              <a href="mailto:info@pulseguard.nl" className="mt-6 block bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-md text-center transition-colors">Contact Sales</a>
            </div>
          </div>
        </div>
        
        {/* Table View */}
        <div id="table-view" className={`tab-content ${activeTab === 'table' ? 'block' : 'hidden'} mb-10`}>
          <div className="overflow-x-auto relative bg-white dark:bg-gray-800 rounded-xl shadow">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                <tr>
                  <th scope="col" className="py-4 px-6 text-left font-medium text-gray-600 dark:text-gray-300">Feature</th>
                  <th scope="col" className="py-4 px-6 text-center font-medium text-gray-600 dark:text-gray-300">Free</th>
                  <th scope="col" className="py-4 px-6 text-center font-medium text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/30">
                    <div className="relative">
                      <span className="absolute -top-3 right-0 bg-sky-500 text-white text-xs py-0.5 px-2 rounded">Popular</span>
                      <span>Standard</span>
                    </div>
                  </th>
                  <th scope="col" className="py-4 px-6 text-center font-medium text-purple-600 dark:text-purple-400">Pro</th>
                  <th scope="col" className="py-4 px-6 text-center font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {/* Price Row */}
                <tr className="font-medium hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-5 px-6 text-gray-800 dark:text-gray-200 font-medium">Price</td>
                  <td className="py-5 px-6 text-center text-gray-800 dark:text-gray-200">€0</td>
                  <td className="py-5 px-6 text-center bg-sky-50 dark:bg-sky-900/30 text-gray-800 dark:text-gray-200">
                    <div className="flex flex-col items-center">
                      <span className="text-sm line-through text-gray-500 dark:text-gray-400">€6.44</span>
                      €5.99/<span>month</span>
                      <div className="flex gap-1 mt-1">
                        <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-1.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">-7%</span>
                        <span className="inline-flex items-center bg-purple-100 text-purple-800 text-xs font-medium px-1.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">14d trial</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-center text-gray-800 dark:text-gray-200">
                    <div className="flex flex-col items-center">
                      <span className="text-sm line-through text-gray-500 dark:text-gray-400">€17.49</span>
                      €13.99/<span>month</span>
                      <div className="flex gap-1 mt-1">
                        <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-1.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">-20%</span>
                        <span className="inline-flex items-center bg-purple-100 text-purple-800 text-xs font-medium px-1.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">14d trial</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-center bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200">Custom pricing</td>
                </tr>
                
                {/* Domains Row */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Domains</td>
                  <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                    <span className="font-medium">1</span>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Monitoring only</div>
                  </td>
                  <td className="py-4 px-6 text-center bg-sky-50 dark:bg-sky-900/30 text-gray-700 dark:text-gray-300">
                    <span className="font-medium">5</span>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Complete</div>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                    <span className="font-medium">15</span>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Complete</div>
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    <span className="font-medium">25+</span>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Complete</div>
                  </td>
                </tr>
                
                {/* Devices Row */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Devices</td>
                  <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                    <span className="font-medium">1</span>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Monitoring only</div>
                  </td>
                  <td className="py-4 px-6 text-center bg-sky-50 dark:bg-sky-900/30 text-gray-700 dark:text-gray-300">
                    <span className="font-medium">2</span>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Complete</div>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                    <span className="font-medium">10</span>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Complete</div>
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    <span className="font-medium">25+</span>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Complete</div>
                  </td>
                </tr>
                
                {/* More rows as needed... */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">API Access</td>
                  <td className="py-4 px-6 text-center">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center bg-sky-50 dark:bg-sky-900/30">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 dark:bg-gray-700">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>
                
                {/* Get Started Row */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-5 px-6 text-gray-800 dark:text-gray-200 font-medium">Get Started</td>
                  <td className="py-5 px-6 text-center">
                    <Link to="https://app.pulseguard.nl/register" className="inline-block px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-md text-center transition-colors">Start Free</Link>
                  </td>
                  <td className="py-5 px-6 text-center bg-sky-50 dark:bg-sky-900/30">
                    <Link to="https://app.pulseguard.nl/register" className="inline-block px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-md text-center transition-colors shadow-md">Choose</Link>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <Link to="https://app.pulseguard.nl/register" className="inline-block px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-md text-center transition-colors shadow-md">Choose</Link>
                  </td>
                  <td className="py-5 px-6 text-center bg-gray-50 dark:bg-gray-700">
                    <a href="mailto:info@pulseguard.nl" className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-md text-center transition-colors shadow-md">Contact Sales</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 