import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight, 
  faGlobe, 
  faServer, 
  faRobot,
  faCode,
  faUniversalAccess,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/layout/Layout';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useTranslation } from '../hooks/useTranslation';

const DetailedFeatures: React.FC = () => {

  return (
    <Layout>
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Alle PulseGuard Features in Detail
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
                Een complete gids van alle mogelijkheden die PulseGuard te bieden heeft voor het monitoren van je digitale infrastructuur.
              </p>
            </div>
          </div>
        </section>

        {/* Website Monitoring Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="text-blue-500 mb-4">
                    <FontAwesomeIcon icon={faGlobe} className="text-4xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Website Monitoring
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg mb-6">
                      Monitor elk aspect van je websites met onze geavanceerde monitoring tools.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>HTTP/HTTPS Status Checks</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            Controleer de beschikbaarheid van je websites elke minuut vanaf meerdere locaties wereldwijd.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>SSL Certificaat Monitoring</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            Automatische waarschuwingen voor verlopen certificaten, 30, 14, en 7 dagen van tevoren.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>Page Resource Monitoring</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            Controleer alle resources (JS, CSS, images) op beschikbaarheid en laadtijd.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  {/* Screenshot 1: Dashboard Overview */}
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-2">
                      <img src="/images/website-monitoring.png" alt=" Website Monitoring" className="w-full h-auto" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Server & Service Monitoring */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  {/* Screenshot 2: Server Metrics */}
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl mb-8">
                    <img src="/images/devices.png" alt=" Server & Service Monitoring" className="w-full h-auto" />
                  </div>
                  {/* Screenshot 3: Service Status */}
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">
                    <img src="/images/services.png" alt=" Service Status" className="w-full h-auto" />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="text-purple-500 mb-4">
                    <FontAwesomeIcon icon={faServer} className="text-4xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Server & Service Monitoring
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg mb-6">
                      Houd je complete infrastructuur in de gaten met uitgebreide monitoring tools.
                    </p>
                    <h3 className="text-xl font-semibold mb-4">Server Monitoring:</h3>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>Resource Monitoring</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            CPU gebruik, RAM gebruik, schijfruimte, en netwerk statistieken.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>Process Monitoring</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            Volg specifieke processen en hun resource gebruik.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-4">Service Monitoring:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>Email Services</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            IMAP, SMTP, en POP3 server monitoring.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>Database Services</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            MySQL, PostgreSQL, MongoDB connectiviteit checks.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>Custom Services</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            SSH, FTP, DNS, en custom TCP/UDP port monitoring.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PulseAI Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="text-yellow-500 mb-4">
                    <FontAwesomeIcon icon={faRobot} className="text-4xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    PulseAI Assistant
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg mb-6">
                      Krijg slimme inzichten en antwoorden op je vragen met onze AI-powered assistant.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>Natuurlijke Taal Queries</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            Stel vragen in natuurlijke taal over je monitoring data en krijg direct antwoord.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>Proactieve Detectie</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            AI detecteert patronen en waarschuwt voor mogelijke problemen voordat ze kritiek worden.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>Performance Analyse</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            Krijg suggesties voor optimalisatie gebaseerd op historische data.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  {/* Screenshot 4: PulseAI Interface */}
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">
                    <img src="/images/pulseai.png" alt=" PulseAI Assistant" className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility & SEO Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">
                    <img src="/images/image.png" alt=" Accessibility & SEO Monitoring" className="w-full h-auto" />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="text-red-500 mb-4">
                    <FontAwesomeIcon icon={faUniversalAccess} className="text-4xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Accessibility & SEO Monitoring
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg mb-6">
                      Zorg dat je website toegankelijk en goed vindbaar blijft met onze uitgebreide checks.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>WCAG 2.1 Compliance</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            Automatische checks voor WCAG 2.1 richtlijnen op A, AA en AAA niveau.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>SEO Performance</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            Monitoring van meta tags, headings, alt teksten en andere SEO factoren.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>Core Web Vitals</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            Meet LCP, FID, CLS en andere belangrijke performance metrics.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Status Pages Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="text-blue-500 mb-4">
                    <FontAwesomeIcon icon={faChartBar} className="text-4xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Status Pagina's
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg mb-6">
                      Houd je gebruikers op de hoogte met professionele status pagina's.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>Aanpasbaar Design</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            Pas de status pagina aan met je eigen logo, kleuren en branding.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>Incident Management</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            Communiceer direct met gebruikers over incidenten en onderhoud.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>Historische Data</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            Toon uptime geschiedenis en incident logs voor volledige transparantie.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-8">
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API & Integrations Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-xl">
                    <img src="/images/api.png" alt=" API & Integrations" className="w-full h-auto" />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="text-indigo-500 mb-4">
                    <FontAwesomeIcon icon={faCode} className="text-4xl" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    API & Integraties
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg mb-6">
                      Integreer PulseGuard naadloos in je bestaande workflows.
                    </p>
                    <h3 className="text-xl font-semibold mb-4">REST API:</h3>
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>Uitgebreide Endpoints</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            Complete API voor alle monitoring functionaliteit.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>Veilige Authenticatie</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            API key authenticatie met rate limiting en logging.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>API Documentation</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            Complete API documentatie met voorbeelden en gebruikshandleiding. <a href="https://docs.pulseguard.pro" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">docs.pulseguard.pro</a>
                          </p>
                        </div>
                      </li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-4">Integraties:</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>Chat Platforms</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            Discord, Slack, en Telegram integraties voor alerts.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>Webhooks</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            Stuur alerts naar je eigen endpoints voor custom verwerking.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <div>
                          <strong>Email Notificaties</strong>
                          <p className="text-gray-600 dark:text-gray-400">
                            Gedetailleerde email alerts met custom routing opties.
                          </p>
                        </div>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Begin met Monitoren
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Start vandaag nog met het monitoren van je digitale infrastructuur met PulseGuard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="https://app.pulseguard.pro/register" 
                className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300"
              >
                <span>Start Gratis Trial</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Link>
              <a 
                href="mailto:info@pulseguard.pro"
                className="inline-flex items-center px-8 py-4 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-all duration-300"
              >
                <span>Neem Contact Op</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default DetailedFeatures; 