import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight, 
  faGlobe, 
  faShieldAlt, 
  faServer, 
  faRobot,
  faCode,
  faPlug,
  faUniversalAccess,
  faList
} from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/layout/Layout';
import { useTranslation } from '../hooks/useTranslation';

const Features: React.FC = () => {
  const { t } = useTranslation();

  return (
      <Layout>
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {t('featuresSectionTitle')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {t('featuresSectionSubtitle')}
              </p>
              <Link 
                to="/features/detailed" 
                className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FontAwesomeIcon icon={faList} className="mr-3 text-xl" />
                <span className="text-lg font-medium">Bekijk Alle Features in Detail</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Main Features Grid */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Website Monitoring */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-500 mb-4">
                  <FontAwesomeIcon icon={faGlobe} className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('webMonitoringTitle')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('webMonitoringDesc')}
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• {t('httpMonitoring')}</li>
                  <li>• {t('responseTime')}</li>
                  <li>• {t('checkIntervals')}</li>
                </ul>
              </div>

              {/* SSL Monitoring */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-green-500 mb-4">
                  <FontAwesomeIcon icon={faShieldAlt} className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('sslMonitoringTitle')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('sslMonitoringDesc')}
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• {t('certExpiration')}</li>
                  <li>• {t('dayWarnings')}</li>
                  <li>• {t('certDetails')}</li>
                </ul>
              </div>

              {/* Server Monitoring */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-purple-500 mb-4">
                  <FontAwesomeIcon icon={faServer} className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('serverMonitoringTitle')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('serverMonitoringDesc')}
                </p>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• {t('serverCpu')}</li>
                  <li>• {t('serverNetwork')}</li>
                  <li>• {t('serverProcess')}</li>
                </ul>
              </div>

              {/* PulseAI */}
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl">
                <div className="text-yellow-500 mb-4">
                  <FontAwesomeIcon icon={faRobot} className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">PulseAI Assistant</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• AI-powered monitoring inzichten</li>
                  <li>• Natuurlijke taal queries over je systemen</li>
                  <li>• Proactieve probleem detectie</li>
                  <li>• Performance optimalisatie suggesties</li>
                  <li>• Trend analyse en voorspellingen</li>
                  <li>• Geautomatiseerde troubleshooting</li>
                </ul>
              </div>

              {/* Accessibility & SEO */}
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl">
                <div className="text-red-500 mb-4">
                  <FontAwesomeIcon icon={faUniversalAccess} className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Accessibility & SEO</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• WCAG 2.1 compliance checks</li>
                  <li>• Automatische SEO audits</li>
                  <li>• Mobile-friendly tests</li>
                  <li>• Performance metrics</li>
                  <li>• Core Web Vitals monitoring</li>
                  <li>• Toegankelijkheidsrapportages</li>
                </ul>
              </div>

              {/* Integraties */}
              <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl">
                <div className="text-indigo-500 mb-4">
                  <FontAwesomeIcon icon={faPlug} className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Integraties</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li>• Webhook ondersteuning</li>
                  <li>• Discord integratie</li>
                  <li>• Slack notificaties</li>
                  <li>• Telegram alerts</li>
                  <li>• Email notificaties</li>
                  <li>• REST API toegang</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Status Page Demo */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Professionele Status Pagina's
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Houd je gebruikers op de hoogte met een mooie, aanpasbare status pagina. Bekijk een voorbeeld:
              </p>
              <a 
                href="https://status.arjanict.nl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300"
              >
                <span>Bekijk Demo Status Pagina</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* API Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Uitgebreide API Mogelijkheden
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Integreer PulseGuard naadloos in je eigen systemen met onze krachtige REST API.
              </p>
              
              <div className="bg-gray-900 rounded-xl p-6 mb-8">
                <pre className="text-green-400 overflow-x-auto">
                  <code>
                    # Voorbeeld API aanroep voor status check
                    curl -X GET "https://api.pulseguard.nl/v1/status/domain/example.com" \\
                      -H "Authorization: Bearer YOUR_API_KEY"
                  </code>
                </pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">API Features</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• RESTful endpoints</li>
                    <li>• JSON response formaat</li>
                    <li>• Rate limiting</li>
                    <li>• Authenticatie via API keys</li>
                    <li>• Uitgebreide documentatie</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">API Endpoints</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• /status - Service status</li>
                    <li>• /metrics - Performance data</li>
                    <li>• /alerts - Beheer alerts</li>
                    <li>• /devices - Device management</li>
                    <li>• /reports - Genereer rapporten</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/features/detailed" 
                className="inline-flex items-center px-8 py-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-xl transition-all duration-300"
              >
                <span className="text-lg">{t('showMoreFeatures')}</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Link>
              <Link 
                to="https://app.pulseguard.nl/register" 
                className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all duration-300"
              >
                <span className="text-lg">Start met alle features</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        </div>
      </Layout>
  );
};

export default Features; 