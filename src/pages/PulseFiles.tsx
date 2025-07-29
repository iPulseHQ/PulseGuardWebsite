import React from 'react';
import Layout from '../components/layout/Layout';
import SEOHead from '../components/layout/SEOHead';

const PulseFiles: React.FC = () => {
  const pulseFilesStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "PulseFiles - Veilige en tijdelijke bestandsdeling",
    "description": "Veilige en tijdelijke bestandsdeling met end-to-end encryptie. Nederlandse datacenter, automatisch verwijderd na 7 dagen.",
    "url": "https://pulseguard.nl/pulsefiles"
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pulseguard.nl/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "PulseFiles",
        "item": "https://pulseguard.nl/pulsefiles"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="PulseFiles - Veilige en tijdelijke bestandsdeling | PulseGuard"
        description="Veilige en tijdelijke bestandsdeling met end-to-end encryptie. Nederlandse datacenter, automatisch verwijderd na 7 dagen, geen permanente opslag."
        keywords="bestandsdeling, file sharing, veilig, encryptie, tijdelijk, nederland, privacy, gdpr"
        canonicalUrl="https://pulseguard.nl/pulsefiles"
        structuredData={pulseFilesStructuredData}
        breadcrumbData={breadcrumbData}
      />
      <Layout>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          {/* Header Section */}
          <div className="bg-white dark:bg-gray-800 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  PulseFiles
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Veilige en tijdelijke bestandsdeling met end-to-end encryptie
                </p>
                <a
                  href="https://files.pulseguard.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  Begin met uploaden
                </a>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Volledig Geëncrypt
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Alle bestanden worden geëncrypt met AES-256-CBC encryptie. Zelfs wij kunnen uw bestanden niet bekijken.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Nederlandse Datacenter
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Uw data wordt opgeslagen in beveiligde datacenters in Nederland, conform GDPR-wetgeving.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Automatisch Verwijderd
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bestanden worden automatisch verwijderd na 7 dagen (of eerder indien door u ingesteld).
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Geen Permanente Opslag
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We bewaren geen bestanden permanent. Alles wordt tijdelijk opgeslagen voor veilige overdracht.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Open Source
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Volledige transparantie - alle code is open source en publiek beschikbaar voor controle.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Geen Tracking
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We volgen u niet en verkopen geen data. Uw privacy staat centraal in alles wat we doen.
                </p>
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
          <div className="bg-blue-600 dark:bg-blue-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Klaar om veilig bestanden te delen?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Begin direct met het uploaden van uw bestanden
                </p>
                <a
                  href="https://files.pulseguard.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  Begin met uploaden
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PulseFiles;