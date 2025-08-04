import React from 'react';
import Layout from '../components/layout/Layout';
import SEOHead from '../components/layout/SEOHead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileText, faUpload, faEnvelope, faLock, faCog, faChevronDown, faPlus, faShield, faMapMarkerAlt, faClock, faTrash, faCode, faEyeSlash, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '../hooks/useTranslation';

const PulseFiles: React.FC = () => {
  const { t } = useTranslation();

  const pulseFilesStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${t('pulseFilesTitle')} - ${t('pulseFilesHeroDescription')}`,
    "description": t('pulseFilesHeroDescription'),
    "url": "https://pulseguard.pro/pulsefiles"
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pulseguard.pro/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": t('pulseFilesTitle'),
        "item": "https://pulseguard.pro/pulsefiles"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title={`${t('pulseFilesTitle')} - ${t('pulseFilesHeroDescription')} | PulseGuard`}
        description={t('pulseFilesHeroDescription')}
        keywords="bestandsdeling, file sharing, veilig, encryptie, tijdelijk, nederland, privacy, gdpr"
        canonicalUrl="https://pulseguard.pro/pulsefiles"
        structuredData={pulseFilesStructuredData}
        breadcrumbData={breadcrumbData}
      />
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
          {/* Hero Section with Mockup */}
          <div className="relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Content */}
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium mb-6">
                    <span className="mr-2">🔒</span>
{t('pulseFilesNewFeature')}
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
{t('pulseFilesHeroTitle')}
                    </span>
                  </h1>
                  
                  <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {t('pulseFilesHeroDescription')}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a
                      href="https://files.pulseguard.pro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
                    >
                      <FontAwesomeIcon icon={faUpload} className="mr-3" />
{t('pulseFilesHeroButtonPrimary')}
                    </a>
                    
                    <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      <FontAwesomeIcon icon={faFileText} className="mr-3" />
{t('pulseFilesHeroButtonSecondary')}
                    </button>
                  </div>
                </div>
                
                {/* Right side - Mockup */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl transform rotate-6 opacity-20"></div>
                    <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl transform -rotate-6 opacity-20"></div>
                    
                    {/* Main card mockup */}
                    <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl w-full max-w-lg mx-auto transform hover:scale-105 transition-all duration-300">
                      {/* Card Header */}
                      <div className="flex flex-col space-y-1.5 p-6 text-center">
                        <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          <img alt="Pulsefile" className="h-8 w-8" src="/android-chrome-512x512.png" />
                        </div>
                        <h3 className="font-semibold tracking-tight text-2xl text-gray-900 dark:text-white">{t('pulseFilesTitle')}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t('pulseFilesSubtitle')}</p>
                      </div>
                      
                      {/* Card Content */}
                      <div className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                        {/* File Upload Section */}
                        <div className="space-y-2">
                          <label className="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2 text-sm sm:text-base">
                            <FontAwesomeIcon icon={faFileText} className="h-4 w-4" />
                            <span className="hidden sm:inline">{t('pulseFilesSelectFileLabel')}</span>
                            <span className="sm:hidden">{t('pulseFilesSelectFileLabelShort')}</span>
                          </label>
                          <div className="space-y-2">
                            <div className="flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-3 py-2 text-sm text-gray-500 dark:text-gray-400 items-center cursor-not-allowed">
{t('pulseFilesNoFileSelected')}
                            </div>
                            <div className="flex gap-2 flex-col sm:flex-row">
                              <button className="text-xs px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded flex-1 sm:flex-none text-gray-500 dark:text-gray-500 cursor-not-allowed" disabled>
{t('pulseFilesChooseFile')}
                              </button>
                              <button className="text-xs px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded flex-1 sm:flex-none text-gray-500 dark:text-gray-500 cursor-not-allowed" disabled>
                                {t('pulseFilesChooseFolder')}
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Share Method Section */}
                        <div className="space-y-3">
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('pulseFilesShareMethod')}</label>
                          <div className="flex gap-2 sm:gap-4 flex-col sm:flex-row">
                            <div className="flex items-center space-x-2">
                              <input 
                                id="email-mode" 
                                type="radio" 
                                value="email" 
                                checked
                                name="shareMode"
                                className="text-blue-600"
                                disabled
                              />
                              <label className="font-medium flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300">
                                <FontAwesomeIcon icon={faEnvelope} className="h-3 w-3" />
                                <span className="hidden sm:inline">{t('pulseFilesSendViaEmail')}</span>
                                <span className="sm:hidden">{t('pulseFilesEmail')}</span>
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input 
                                id="link-mode" 
                                type="radio" 
                                value="link" 
                                name="shareMode"
                                className="text-blue-600"
                                disabled
                              />
                              <label className="font-medium flex items-center gap-1 text-sm text-gray-500 dark:text-gray-500">
                                <FontAwesomeIcon icon={faLock} className="h-3 w-3" />
                                <span className="hidden sm:inline">{t('pulseFilesGenerateLinkOnly')}</span>
                                <span className="sm:hidden">{t('pulseFilesLinkOnly')}</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        
                        {/* Recipients Section */}
                        <div className="space-y-2">
                          <label className="font-medium flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                            <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
                            <span className="hidden sm:inline">{t('pulseFilesRecipients')}</span>
                            <span className="sm:hidden">{t('pulseFilesRecipientsShort')}</span>
                          </label>
                          <div className="space-y-2">
                            <div className="flex gap-2">
                              <input 
                                className="flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-3 py-2 text-sm text-gray-500 dark:text-gray-400 flex-1 cursor-not-allowed" 
                                placeholder="Email 1" 
                                type="email" 
                                value=""
                                disabled
                              />
                            </div>
                            <button 
                              className="inline-flex items-center justify-center font-medium border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 h-9 rounded-md px-3 text-xs text-gray-500 dark:text-gray-500 cursor-not-allowed" 
                              type="button"
                              disabled
                            >
                              <FontAwesomeIcon icon={faPlus} className="mr-1" /> {t('pulseFilesAddRecipient')}
                            </button>
                          </div>
                        </div>
                        
                        {/* Advanced Settings */}
                        <div className="space-y-2">
                          <button 
                            className="font-medium h-9 rounded-md px-3 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 w-full justify-center sm:justify-start cursor-not-allowed" 
                            type="button"
                            disabled
                          >
                            <FontAwesomeIcon icon={faCog} className="h-4 w-4" />
                            <span className="hidden sm:inline">{t('pulseFilesAdvancedSettings')}</span>
                            <span className="sm:hidden">{t('pulseFilesAdvanced')}</span>
                            <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" />
                          </button>
                        </div>
                        
                        {/* Upload Button */}
                        <div className="flex gap-2">
                          <button className="inline-flex items-center justify-center text-sm font-medium bg-gray-400 text-gray-200 h-11 rounded-md px-8 flex-1 cursor-not-allowed" disabled>
                            <FontAwesomeIcon icon={faUpload} className="mr-2 h-4 w-4" />
                            <span className="hidden sm:inline">{t('pulseFilesUploadAndEmail')}</span>
                            <span className="sm:hidden">{t('pulseFilesUpload')}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="relative py-20 bg-white dark:bg-gray-900">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-gray-900/50"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Waarom kiezen voor <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PulseFiles</span>?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  De meest veilige en gebruiksvriendelijke manier om bestanden te delen
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faShield} className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Volledig Geëncrypt
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Alle bestanden worden geëncrypt met <strong>AES-256-CBC</strong> encryptie. Zelfs wij kunnen uw bestanden niet bekijken.
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-medium">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                    End-to-end beveiliging
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Nederlandse Datacenter
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Uw data wordt opgeslagen in beveiligde datacenters in <strong>Nederland</strong>, conform GDPR-wetgeving.
                  </p>
                  <div className="mt-4 flex items-center text-green-600 dark:text-green-400 font-medium">
                    <span className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mr-2"></span>
                    100% GDPR compliant
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faClock} className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Automatisch Verwijderd
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Bestanden worden automatisch verwijderd na <strong>7 dagen</strong> (of eerder indien door u ingesteld).
                  </p>
                  <div className="mt-4 flex items-center text-red-600 dark:text-red-400 font-medium">
                    <span className="w-2 h-2 bg-red-600 dark:bg-red-400 rounded-full mr-2"></span>
                    Geen permanente opslag
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faTrash} className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Zero Knowledge
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We bewaren geen bestanden permanent. Alles wordt <strong>tijdelijk</strong> opgeslagen voor veilige overdracht.
                  </p>
                  <div className="mt-4 flex items-center text-purple-600 dark:text-purple-400 font-medium">
                    <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mr-2"></span>
                    Maximale privacy
                  </div>
                </div>

                {/* Feature 5 */}
                <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faCode} className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Open Source
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Volledige <strong>transparantie</strong> - alle code is open source en publiek beschikbaar voor controle.
                  </p>
                  <div className="mt-4 flex items-center text-orange-600 dark:text-orange-400 font-medium">
                    <span className="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full mr-2"></span>
                    100% transparant
                  </div>
                </div>

                {/* Feature 6 */}
                <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faEyeSlash} className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Geen Tracking
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    We volgen u <strong>niet</strong> en verkopen geen data. Uw privacy staat centraal in alles wat we doen.
                  </p>
                  <div className="mt-4 flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                    <span className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full mr-2"></span>
                    Privacy first
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How it works section */}
          <div className="bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Hoe het werkt
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Een eenvoudig en veilig proces voor bestandsdeling
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Upload uw bestand
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Selecteer uw bestand en voer het e-mailadres van de ontvanger in
                  </p>
                </div>

                {/* Step 2 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Automatische encryptie
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Het bestand wordt geëncrypt en veilig opgeslagen in ons Nederlandse datacenter
                  </p>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Veilige download
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    De ontvanger krijgt een e-mail met een beveiligde download link
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Technische Details
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Encryption */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Encryptie
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    AES-256-CBC encryptie voor alle bestanden
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Unieke encryptiesleutel per bestand
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Bestandsnamen worden ook geëncrypt
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    End-to-end beveiliging
                  </li>
                </ul>
              </div>

              {/* Storage & Privacy */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Opslag & Privacy
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Nederlandse datacenters (GDPR compliant)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Maximaal 7 dagen opslag
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Geen permanente opslag van bestanden
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Automatische verwijdering na vervaldatum
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                  Klaar om <span className="text-yellow-300">veilig</span> bestanden te delen?
                </h2>
                <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Begin direct met het uploaden van uw bestanden met <strong>end-to-end encryptie</strong> en automatische verwijdering
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a
                    href="https://files.pulseguard.pro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-8 py-4 text-lg font-bold text-blue-600 bg-white rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
                  >
                    <FontAwesomeIcon icon={faUpload} className="mr-3 text-xl group-hover:animate-bounce" />
                    Begin nu gratis
                    <span className="ml-2 text-sm font-normal bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      100% Gratis
                    </span>
                  </a>
                  
                  <div className="flex items-center text-blue-100">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faShield} className="mr-2" />
                        <span className="text-sm">Volledig geëncrypt</span>
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                        <span className="text-sm">Nederlandse servers</span>
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faClock} className="mr-2" />
                        <span className="text-sm">Auto-delete na 7 dagen</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <p className="text-blue-200 text-sm">
                    Geen registratie vereist • Geen tracking • Open source
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PulseFiles;