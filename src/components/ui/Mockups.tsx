import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faShieldAlt, faExclamationTriangle, faCheckCircle, faTimesCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

interface FullscreenImageProps {
  image: string;
  title: string;
}

interface DomainProps {
  id: number;
  name: string;
  url: string;
  status: 'up' | 'down';
  responseTime: string;
  lastCheck: string;
  ssl: string;
  sslExpiry: string;
}

type UptimeStatus = 'up' | 'down' | 'partial';

const Mockups: React.FC = () => {
  const [fullscreenImage, setFullscreenImage] = useState<FullscreenImageProps | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  // Demo data for interactive mockups
  const dashboardStats = {
    totalMonitors: 24,
    online: 22,
    offline: 2,
    sslExpiring: 3,
    uptime: 99.8,
    responseTime: 187,
    alertsSent: 12,
  };

  const domainsList: DomainProps[] = [
    { id: 1, name: 'example.com', url: 'https://example.com', status: 'up', responseTime: '124ms', lastCheck: '2 min ago', ssl: 'valid', sslExpiry: '3 months' },
    { id: 2, name: 'api.example.com', url: 'https://api.example.com', status: 'up', responseTime: '98ms', lastCheck: '5 min ago', ssl: 'valid', sslExpiry: '5 months' },
    { id: 3, name: 'store.example.com', url: 'https://store.example.com', status: 'down', responseTime: '—', lastCheck: '1 min ago', ssl: 'valid', sslExpiry: '28 days' },
    { id: 4, name: 'blog.example.com', url: 'https://blog.example.com', status: 'up', responseTime: '156ms', lastCheck: '7 min ago', ssl: 'valid', sslExpiry: '2 months' },
  ];

  // Generate random uptime history data
  const generateUptimeHistory = (mostlyUp = true): UptimeStatus[] => {
    return Array(24).fill(null).map(() => {
      const rand = Math.random();
      if (mostlyUp) {
        return rand > 0.9 ? (rand > 0.95 ? 'down' : 'partial') : 'up';
      } else {
        return rand > 0.7 ? 'up' : (rand > 0.4 ? 'partial' : 'down');
      }
    });
  };

  // Create uptime histories for each domain
  const domainUptimeHistories: Record<number, UptimeStatus[]> = {
    1: generateUptimeHistory(true),
    2: generateUptimeHistory(true),
    3: generateUptimeHistory(false),
    4: generateUptimeHistory(true),
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
            {/* Dashboard Demo */}
            <div className="mockup-container">
              <div className="browser-mockup shadow-xl hover:shadow-2xl relative group">
                <div className="browser-header justify-center">
                  <div className="browser-buttons">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <a 
                    href="https://app.pulseguard.pro/dashboard" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="browser-address-bar cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors justify-center"
                  >
                    app.pulseguard.pro/dashboard
                  </a>
                </div>
                <div className="browser-content relative bg-white dark:bg-gray-900 p-4 rounded-b-lg">
                  {/* Dashboard Demo Content */}
                  <div className="demo-dashboard">
                    {/* Navigation Tabs */}
                    <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
                      <button 
                        className={`py-2 px-4 font-medium text-sm ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
                        onClick={() => setActiveTab('overview')}
                      >
                        Overview
                      </button>
                      <button 
                        className={`py-2 px-4 font-medium text-sm ${activeTab === 'domains' ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
                        onClick={() => setActiveTab('domains')}
                      >
                        Domains
                      </button>
                      <button 
                        className={`py-2 px-4 font-medium text-sm ${activeTab === 'alerts' ? 'text-blue-600 border-b-2 border-blue-600 dark:text-blue-400 dark:border-blue-400' : 'text-gray-500 dark:text-gray-400'}`}
                        onClick={() => setActiveTab('alerts')}
                      >
                        Alerts
                      </button>
                    </div>

                    {/* Stats Overview */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {/* Total Monitors */}
                      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-100 dark:border-gray-700 flex items-center">
                        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-2 mr-3">
                          <FontAwesomeIcon icon={faServer} className="text-blue-600 dark:text-blue-400 h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Total Monitors</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">{dashboardStats.totalMonitors}</p>
                        </div>
                      </div>

                      {/* Online */}
                      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-100 dark:border-gray-700 flex items-center">
                        <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 mr-3">
                          <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 dark:text-green-400 h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Online</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">{dashboardStats.online}</p>
                        </div>
                      </div>

                      {/* Offline */}
                      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-100 dark:border-gray-700 flex items-center">
                        <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-2 mr-3">
                          <FontAwesomeIcon icon={faTimesCircle} className="text-red-600 dark:text-red-400 h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Offline</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">{dashboardStats.offline}</p>
                        </div>
                      </div>

                      {/* SSL Expiring */}
                      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-100 dark:border-gray-700 flex items-center">
                        <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-2 mr-3">
                          <FontAwesomeIcon icon={faShieldAlt} className="text-yellow-600 dark:text-yellow-400 h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">SSL Expiring</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">{dashboardStats.sslExpiring}</p>
                        </div>
                      </div>
                    </div>

                    {/* Performance Overview */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 border border-gray-100 dark:border-gray-700 mb-6">
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Performance Overview</h3>
                      
                      {/* Uptime */}
                      <div className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-gray-600 dark:text-gray-400">Uptime</span>
                          <span className="text-xs font-medium text-green-600 dark:text-green-400">{dashboardStats.uptime}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                          <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${dashboardStats.uptime}%` }}></div>
                        </div>
                      </div>
                      
                      {/* Response Time */}
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-gray-600 dark:text-gray-400">Avg. Response Time</span>
                          <span className="text-xs font-medium text-blue-600 dark:text-blue-400">{dashboardStats.responseTime}ms</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                          <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${Math.min(100, (dashboardStats.responseTime / 5))}%` }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Recent Incidents */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 border border-gray-100 dark:border-gray-700">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Recent Incidents</h3>
                        <span className="text-xs bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-400 px-2 py-1 rounded-full">2 Active</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <FontAwesomeIcon icon={faExclamationCircle} className="text-red-500 h-4 w-4" />
                          </div>
                          <div className="ml-3">
                            <p className="text-xs font-medium text-gray-900 dark:text-white">store.example.com is down</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Started 15 minutes ago</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <FontAwesomeIcon icon={faExclamationTriangle} className="text-yellow-500 h-4 w-4" />
                          </div>
                          <div className="ml-3">
                            <p className="text-xs font-medium text-gray-900 dark:text-white">SSL certificate expiring soon</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">store.example.com - 28 days remaining</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 h-4 w-4" />
                          </div>
                          <div className="ml-3">
                            <p className="text-xs font-medium text-gray-900 dark:text-white">api.example.com is back online</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Resolved 2 hours ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Comprehensive Dashboard</h3>
                <p className="text-gray-600 dark:text-gray-400">All important metrics and statuses at a glance.</p>
              </div>
            </div>
            
            {/* Domains Demo */}
            <div className="mockup-container">
              <div className="browser-mockup shadow-xl hover:shadow-2xl relative group">
                <div className="browser-header justify-center">
                  <div className="browser-buttons">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <a 
                    href="https://app.pulseguard.pro/domains" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="browser-address-bar cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    app.pulseguard.pro/domains
                  </a>
                </div>
                <div className="browser-content relative bg-white dark:bg-gray-900 p-4 rounded-b-lg">
                  {/* Domains Demo Content */}
                  <div className="demo-domains">
                    {/* Header */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-100 dark:border-gray-700 mb-6">
                      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                        <div>
                          <h2 className="text-lg font-bold text-gray-800 dark:text-white flex items-center">
                            Domain Monitor
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                              {domainsList.length} Domains
                            </span>
                          </h2>
                          
                          <div className="flex items-center mt-1 space-x-3">
                            <div className="flex items-center">
                              <span className="flex h-2 w-2 relative mr-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                              </span>
                              <span className="text-xs text-gray-600 dark:text-gray-300">
                                {domainsList.filter(d => d.status === 'up').length} Online
                              </span>
                            </div>
                            
                            <div className="flex items-center">
                              <span className="flex h-2 w-2 bg-red-500 rounded-full mr-1.5"></span>
                              <span className="text-xs text-gray-600 dark:text-gray-300">
                                {domainsList.filter(d => d.status === 'down').length} Offline
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                              </svg>
                            </div>
                            <input type="text" className="block w-full p-2 pl-10 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search domains..." />
                          </div>
                          
                          <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center">
                            <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            <span className="text-sm">Add</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Domain List */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
                      {/* Table Header */}
                      <div className="grid grid-cols-4 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 py-2 px-4 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        <div>Domain</div>
                        <div className="text-center">Status</div>
                        <div className="text-center">Last Check</div>
                        <div className="text-center">SSL</div>
                      </div>
                      
                      {/* Table Body */}
                      <div className="divide-y divide-gray-200 dark:divide-gray-700">
                        {domainsList.map(domain => (
                          <div 
                            key={domain.id} 
                            className={`bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-l-4 ${
                              domain.status === 'up' ? 'border-green-500 dark:border-green-600' : 'border-red-500 dark:border-red-600'
                            } cursor-pointer`}
                          >
                            <div className="grid grid-cols-4 py-3 px-4 items-center">
                              {/* Domain Name & URL */}
                              <div className="flex flex-col">
                                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                                  {domain.name}
                                </h3>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                  {domain.url}
                                </div>
                              </div>
                              
                              {/* Status */}
                              <div className="text-center">
                                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                  domain.status === 'up' 
                                    ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
                                    : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                                }`}>
                                  <span className="flex h-2 w-2 mr-1.5">
                                    <span className={`relative inline-flex rounded-full h-2 w-2 ${
                                      domain.status === 'up' ? 'bg-green-500' : 'bg-red-500'
                                    }`}>
                                    </span>
                                  </span>
                                  <span>{domain.status === 'up' ? 'Up' : 'Down'}</span>
                                </div>
                              </div>
                              
                              {/* Last Check */}
                              <div className="text-center">
                                <span className="text-sm text-gray-600 dark:text-gray-300">{domain.lastCheck}</span>
                              </div>
                              
                              {/* SSL Status */}
                              <div className="text-center">
                                <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400">
                                  <span className="flex h-2 w-2 mr-1.5">
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                  </span>
                                  <span>{domain.ssl}</span>
                                </div>
                              </div>
                            </div>
                            
                            {/* Uptime History */}
                            <div className="px-4 pb-3">
                              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Uptime (24h)</div>
                              <div className="flex h-2 w-full gap-0.5">
                                {domainUptimeHistories[domain.id].map((status: UptimeStatus, i: number) => (
                                  <div 
                                    key={i}
                                    className={`flex-1 rounded-sm ${
                                      status === 'up' ? 'bg-green-500' : 
                                      status === 'partial' ? 'bg-yellow-500' : 
                                      'bg-red-500'
                                    }`}
                                  ></div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
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