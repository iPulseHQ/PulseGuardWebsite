import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faCreditCard, faStar } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '../../hooks/useTranslation';

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'card' | 'table'>('card');
  const tabIndicatorRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const [enterpriseConfig, setEnterpriseConfig] = useState({
    domains: 10,
    devices: 7,
    services: 5,
  });
  const [enterprisePrice, setEnterprisePrice] = useState(15);

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

  useEffect(() => {
    const basePrice = 15; // Starting from Pro's price
    const domainCost = (enterpriseConfig.domains - 10) * 0.50;
    const deviceCost = (enterpriseConfig.devices - 7) * 2.00; 
    const serviceCost = (enterpriseConfig.services - 5) * 3.00;

    let calculatedPrice = basePrice;
    if (enterpriseConfig.domains > 10) calculatedPrice += domainCost;
    if (enterpriseConfig.devices > 7) calculatedPrice += deviceCost;
    if (enterpriseConfig.services > 5) calculatedPrice += serviceCost;

    setEnterprisePrice(calculatedPrice);
  }, [enterpriseConfig]);

  const handleSliderChange = (type: 'domains' | 'devices' | 'services', value: string) => {
    setEnterpriseConfig(prev => ({ ...prev, [type]: parseInt(value, 10) }));
  };


  return (
    <section id="pricing" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{t('pricingPageTitle')}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{t('pricingPageSubtitle')}</p>
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
                    <span>{t('cardView')}</span>
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
                    <span>{t('compareAll')}</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Card View */}
        <div id="card-view" className={`tab-content ${activeTab === 'card' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Free Plan */}
            <div className="pricing-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 relative overflow-hidden">
              <div className="pricing-header">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t('freePlanTitle')}</h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">€0<span className="text-lg font-normal text-gray-600 dark:text-gray-400">{t('perMonth')}</span></p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{t('freePlanDesc')}</p>
              </div>
              <div className="pricing-features space-y-4">
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('freeDomains')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('freeDevice')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('freeService')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('pulseAI')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('reportsWithoutEmail')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faTimes} className="text-red-500 mr-3" /><span className="line-through text-gray-500 dark:text-gray-400">{t('oneStatusPage')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faTimes} className="text-red-500 mr-3" /><span className="line-through text-gray-500 dark:text-gray-400">{t('toolboxDns')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faTimes} className="text-red-500 mr-3" /><span className="line-through text-gray-500 dark:text-gray-400">{t('emailNotifications')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faTimes} className="text-red-500 mr-3" /><span className="line-through text-gray-500 dark:text-gray-400">{t('telegram')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faTimes} className="text-red-500 mr-3" /><span className="line-through text-gray-500 dark:text-gray-400">{t('apiAccess')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faTimes} className="text-red-500 mr-3" /><span className="line-through text-gray-500 dark:text-gray-400">{t('organizationRoles')}</span></div>
              </div>
            </div>
            
            {/* Standard Plan - Most Popular */}
            <div className="pricing-card bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-blue-500 dark:border-blue-400 p-8 relative overflow-hidden transform scale-105">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-2 text-sm font-semibold">
                <FontAwesomeIcon icon={faStar} className="mr-2" />
                {t('mostPopular')}
              </div>
              <div className="pricing-header mt-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t('standardPlanTitle')}</h3>
                <div className="mb-2">
                  <span className="text-lg line-through text-gray-500 dark:text-gray-400 mr-2">€7.50</span>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">€5.99</span>
                  <span className="text-lg font-normal text-gray-600 dark:text-gray-400">{t('perMonth')}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    {t('save20')}
                  </span>
                  <span className="inline-flex items-center bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                    {t('daysTrial')}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{t('trialAndPromo')}</p>
              </div>
                             <div className="pricing-features space-y-4">
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('standardDomains')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('standardDevices')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('standardServices')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('pulseAI')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('standardReports')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('oneStatusPage')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('toolboxDns')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('emailNotifications')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faTimes} className="text-red-500 mr-3" /><span className="line-through text-gray-500 dark:text-gray-400">{t('telegram')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faTimes} className="text-red-500 mr-3" /><span className="line-through text-gray-500 dark:text-gray-400">{t('apiAccess')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faTimes} className="text-red-500 mr-3" /><span className="line-through text-gray-500 dark:text-gray-400">{t('organizationRoles')}</span></div>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="pricing-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 relative overflow-hidden">
              <div className="pricing-header">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t('proPlanTitle')}</h3>
                <div className="mb-2">
                  <span className="text-lg line-through text-gray-500 dark:text-gray-400 mr-2">€15</span>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">€12.50</span>
                  <span className="text-lg font-normal text-gray-600 dark:text-gray-400">{t('perMonth')}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    {t('save16')}
                  </span>
                  <span className="inline-flex items-center bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                    {t('daysTrial')}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{t('trialAndPromo')}</p>
              </div>
                             <div className="pricing-features space-y-4">
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('proDomains')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('proDevices')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('proServices')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('pulseAI')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('reports')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('oneStatusPage')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('proToolboxDesc')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('emailNotifications')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('telegram')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('apiAccess')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faTimes} className="text-red-500 mr-3" /><span className="line-through text-gray-500 dark:text-gray-400">{t('organizationRoles')}</span></div>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="pricing-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 relative overflow-hidden">
              <div className="pricing-header">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{t('enterprisePlanTitle')}</h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  ~€{enterprisePrice.toFixed(2)}
                  <span className="text-lg font-normal text-gray-600 dark:text-gray-400">{t('perMonth')}</span>
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{t('enterpriseDesc')}</p>
              </div>
              <div className="enterprise-config space-y-4 mb-6">
                <div>
                  <label htmlFor="domains-slider" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('enterpriseDomainsLabel')}: {enterpriseConfig.domains}</label>
                  <input id="domains-slider" type="range" min="10" max="100" value={enterpriseConfig.domains} onChange={(e) => handleSliderChange('domains', e.target.value)} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                </div>
                <div>
                  <label htmlFor="devices-slider" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('enterpriseDevicesLabel')}: {enterpriseConfig.devices}</label>
                  <input id="devices-slider" type="range" min="7" max="100" value={enterpriseConfig.devices} onChange={(e) => handleSliderChange('devices', e.target.value)} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                </div>
                <div>
                  <label htmlFor="services-slider" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t('enterpriseServicesLabel')}: {enterpriseConfig.services}</label>
                  <input id="services-slider" type="range" min="5" max="100" value={enterpriseConfig.services} onChange={(e) => handleSliderChange('services', e.target.value)} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                </div>
              </div>
                             <div className="pricing-features space-y-4">
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('enterpriseDomains').replace('{count}', enterpriseConfig.domains.toString())}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('enterpriseDevices').replace('{count}', enterpriseConfig.devices.toString())}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('enterpriseServices').replace('{count}', enterpriseConfig.services.toString())}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('pulseAI')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('reports')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('statusPages')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('fullToolbox')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('telegramEmailNotif')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('apiAccess')}</span></div>
                <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3" /> <span>{t('organizationRoles')}</span></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Table View */}
        <div id="table-view" className={`tab-content ${activeTab === 'table' ? 'block' : 'hidden'} mb-10`}>
          <div className="overflow-x-auto relative bg-white dark:bg-gray-800 rounded-xl shadow">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                <tr>
                  <th scope="col" className="py-4 px-6 text-left font-medium text-gray-600 dark:text-gray-300">{t('feature')}</th>
                  <th scope="col" className="py-4 px-6 text-center font-medium text-gray-600 dark:text-gray-300">{t('freePlanTitle')}</th>
                  <th scope="col" className="py-4 px-6 text-center font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30">
                    <div className="relative">
                      <span className="absolute -top-3 right-0 bg-blue-500 text-white text-xs py-0.5 px-2 rounded flex items-center">
                        <FontAwesomeIcon icon={faStar} className="mr-1" />
                        {t('popular')}
                      </span>
                      <span>{t('standardPlanTitle')}</span>
                    </div>
                  </th>
                  <th scope="col" className="py-4 px-6 text-center font-medium text-purple-600 dark:text-purple-400">{t('proPlanTitle')}</th>
                  <th scope="col" className="py-4 px-6 text-center font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">{t('enterprisePlanTitle')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {/* Price Row */}
                <tr className="font-medium hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-5 px-6 text-gray-800 dark:text-gray-200 font-medium">{t('price')}</td>
                  <td className="py-5 px-6 text-center text-gray-800 dark:text-gray-200">€0/maand</td>
                  <td className="py-5 px-6 text-center bg-blue-50 dark:bg-blue-900/30 text-gray-800 dark:text-gray-200">
                    <div className="flex flex-col items-center">
                      <span className="text-sm line-through text-gray-500 dark:text-gray-400">€7.50</span>
                      <span className="font-bold">€5.99/maand</span>
                      <div className="flex gap-1 mt-1">
                        <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-1.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">-20%</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{t('trialAndPromo')}</div>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-center text-gray-800 dark:text-gray-200">
                    <div className="flex flex-col items-center">
                      <span className="text-sm line-through text-gray-500 dark:text-gray-400">€15</span>
                      <span className="font-bold">€12.50/maand</span>
                      <div className="flex gap-1 mt-1">
                        <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-1.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">-16.7%</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{t('trialAndPromo')}</div>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-center bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200">{t('contactSales')}</td>
                </tr>
                
                {/* Domains Row */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{t('domains')}</td>
                  <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                    <span className="font-medium">2 (zonder page resources)</span>
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50 dark:bg-blue-900/30 text-gray-700 dark:text-gray-300">
                    <span className="font-medium">5 (volledig)</span>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                    <span className="font-medium">10 (volledig)</span>
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    <span className="font-medium">10+</span>
                  </td>
                </tr>
                
                {/* Devices Row */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{t('devices')}</td>
                  <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                    <span className="font-medium">1 (alleen monitoring)</span>
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50 dark:bg-blue-900/30 text-gray-700 dark:text-gray-300">
                    <span className="font-medium">2 (volledig)</span>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                    <span className="font-medium">7 (volledig)</span>
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    <span className="font-medium">7+</span>
                  </td>
                </tr>
                
                {/* Service Monitors Row */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{t('serviceMonitors')}</td>
                  <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                    <span className="font-medium">1</span>
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50 dark:bg-blue-900/30 text-gray-700 dark:text-gray-300">
                    <span className="font-medium">3</span>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                    <span className="font-medium">5</span>
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    <span className="font-medium">5+</span>
                  </td>
                </tr>

                {/* PulseAI row */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{t('pulseAI')}</td>
                  <td className="py-4 px-6 text-center">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50 dark:bg-blue-900/30 text-gray-700 dark:text-gray-300">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 dark:bg-gray-700">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                </tr>

                {/* Reports Row */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{t('reports')}</td>
                  <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                    <span className="font-medium">{t('reportsWithoutEmail')}</span>
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50 dark:bg-blue-900/30">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 dark:bg-gray-700">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                </tr>

                {/* Status Pages Row */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{t('statusPages')}</td>
                  <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                    <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50 dark:bg-blue-900/30 text-gray-700 dark:text-gray-300">
                    <span className="font-medium">{t('oneStatusPage')}</span>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                </tr>

                {/* Toolbox row */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{t('toolbox')}</td>
                  <td className="py-4 px-6 text-center">
                    <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50 dark:bg-blue-900/30 text-gray-700 dark:text-gray-300">
                    <span className="font-medium">{t('toolboxDns')}</span>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-700 dark:text-gray-300">
                    <span className="font-medium">{t('proToolboxDesc')}</span>
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 dark:bg-gray-700">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                </tr>

                {/* Email Notifications Row */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{t('emailNotifications')}</td>
                  <td className="py-4 px-6 text-center">
                    <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50 dark:bg-blue-900/30">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 dark:bg-gray-700">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                </tr>
                
                {/* Telegram Notifications Row */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{t('telegramNotifications')}</td>
                  <td className="py-4 px-6 text-center">
                    <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50 dark:bg-blue-900/30">
                    <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 dark:bg-gray-700">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                </tr>

                {/* API Access Row */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{t('apiAccess')}</td>
                  <td className="py-4 px-6 text-center">
                    <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50 dark:bg-blue-900/30">
                    <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 dark:bg-gray-700">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                </tr>

                {/* MFA row */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{t('mfa')}</td>
                  <td className="py-4 px-6 text-center">
                    <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50 dark:bg-blue-900/30">
                    <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 dark:bg-gray-700">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                </tr>

                {/* Integrations row */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{t('integrations')}</td>
                  <td className="py-4 px-6 text-center">
                    <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50 dark:bg-blue-900/30">
                    <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 dark:bg-gray-700">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                </tr>

                {/* Accessibility row */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{t('accessibility')}</td>
                  <td className="py-4 px-6 text-center">
                    <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50 dark:bg-blue-900/30">
                    <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 dark:bg-gray-700">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                </tr>

                {/* Team Features Row */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{t('organization')}</td>
                  <td className="py-4 px-6 text-center">
                    <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50 dark:bg-blue-900/30">
                    <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <FontAwesomeIcon icon={faTimes} className="text-red-500" />
                  </td>
                  <td className="py-4 px-6 text-center bg-gray-50 dark:bg-gray-700">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500" />
                  </td>
                </tr>
                
                {/* Get Started Row */}
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                  <td className="py-5 px-6 text-gray-800 dark:text-gray-200 font-medium">{t('getStarted')}</td>
                  <td className="py-5 px-6 text-center">
                    <Link to="https://app.pulseguard.nl/register" className="inline-block px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-md text-center transition-colors">
                      {t('freeStart')}
                    </Link>
                  </td>
                  <td className="py-5 px-6 text-center bg-blue-50 dark:bg-blue-900/30">
                    <Link to="https://app.pulseguard.nl/register" className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md text-center transition-colors shadow-md">
                      {t('chooseStandard')}
                    </Link>
                  </td>
                  <td className="py-5 px-6 text-center">
                    <Link to="https://app.pulseguard.nl/register" className="inline-block px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-md text-center transition-colors shadow-md">
                      {t('choosePro')}
                    </Link>
                  </td>
                  <td className="py-5 px-6 text-center bg-gray-50 dark:bg-gray-700">
                    <a href="mailto:info@pulseguard.nl" className="inline-block px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-medium rounded-md text-center transition-colors shadow-md">
                      {t('contactSales')}
                    </a>
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