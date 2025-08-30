"use client";
import { Users, Calendar, FileText, BarChart3, Mail, Phone, Zap, Headphones, Building2, TrendingUp, Shield, Database, CreditCard, ShoppingCart, CheckCircle, Star, ArrowRight, Activity, Layers, Globe } from "lucide-react";

export default function PulseFlow() {

  return (
    <div className="bg-white dark:bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              PulseFlow (ERP/CRM)
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Complete <span className="text-blue-600">ERP</span> & <span className="text-indigo-600">CRM</span><br />
              voor Nederlandse bedrijven
        </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Beheer al je bedrijfsprocessen op één plek. Van relatiebeheer tot facturatie, van voorraadbeheer tot projectplanning.
              Ontworpen voor Nederlandse ondernemers door Nederlandse ontwikkelaars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://flow.ipulse.one" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-2">
                Start gratis proefperiode
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://flow.ipulse.one/demo" className="bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 text-gray-700 dark:text-gray-200 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-lg">
                Bekijk demo
              </a>
            </div>
          </div>

          {/* Hero Mockup */}
          <div className="relative mx-auto max-w-5xl">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-600 dark:text-gray-300 font-medium">PulseFlow Dashboard</span>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  {/* Stats Cards Mockup */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Klanten</span>
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">1,247</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400">+12% deze maand</div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-green-700 dark:text-green-300">Omzet</span>
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-900 dark:text-green-100">€45.2K</div>
                    <div className="text-xs text-green-600 dark:text-green-400">+8% deze maand</div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Offertes</span>
                      <FileText className="w-4 h-4 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">23</div>
                    <div className="text-xs text-purple-600 dark:text-purple-400">5 deze week</div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Taken</span>
                      <CheckCircle className="w-4 h-4 text-orange-600" />
                    </div>
                    <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">89</div>
                    <div className="text-xs text-orange-600 dark:text-orange-400">67% compleet</div>
                  </div>
                </div>

                {/* Recent Activity Mockup */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    Recente Activiteit
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Nieuwe klant toegevoegd</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">TechCorp B.V. • 2 minuten geleden</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Offerte verzonden</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">OFF-2024-001 • 15 minuten geleden</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-4 h-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Factuur betaald</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">INV-2024-045 • 1 uur geleden</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Alles wat je nodig hebt voor je bedrijf
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Een complete suite van tools om je bedrijfsprocessen te stroomlijnen en je bedrijf te laten groeien.
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Klantenbeheer */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Klantenbeheer</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Beheer al je klantrelaties op één centrale plek. Van contactgegevens tot interactiegeschiedenis.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Contactgegevens & bedrijven
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Interactiegeschiedenis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Notities & documenten
                </li>
              </ul>
            </div>

            {/* Offertes & Orders */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors">
                <FileText className="w-6 h-6 text-green-600 dark:text-green-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Offertes & Orders</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Creëer professionele offertes en beheer je verkoopproces van begin tot eind.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Automatische nummering
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  PDF generatie
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Order tracking
                </li>
              </ul>
            </div>

            {/* Facturatie */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors">
                <CreditCard className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Facturatie</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Automatische facturatie, betalingsherinneringen en cashflow beheer.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Automatische facturen
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Betalingsherinneringen
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Mollie integratie
                </li>
              </ul>
            </div>

            {/* Voorraadbeheer */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <Database className="w-6 h-6 text-orange-600 dark:text-orange-400 group-hover:text-white transition-colors" />
          </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Voorraadbeheer</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Houd je voorraad bij, beheer locaties en optimaliseer je supply chain.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Multi-locatie support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Voorraad alerts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Barcode scanning
                </li>
              </ul>
            </div>

            {/* Projectbeheer */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors">
                <Calendar className="w-6 h-6 text-red-600 dark:text-red-400 group-hover:text-white transition-colors" />
          </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Projectbeheer</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Plan projecten, beheer taken en factureer op basis van tijd en materialen.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Tijdregistratie
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Uurtarieven
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Project templates
                </li>
              </ul>
            </div>

            {/* Rapportages */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500 transition-colors">
                <BarChart3 className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:text-white transition-colors" />
          </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Rapportages</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Gedetailleerde inzichten in je bedrijfsvoering met professionele rapportages.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Omzet analyses
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Cashflow rapporten
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Klant analyses
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Bekijk PulseFlow in actie
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Een intuïtieve interface die al je bedrijfsgegevens overzichtelijk weergeeft.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-600 dark:text-gray-300 font-medium">PulseFlow Dashboard - Bedrijfsgegevens</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>📊 Dashboard</span>
                  <span>👥 Klanten</span>
                  <span>📄 Offertes</span>
                  <span>💰 Facturen</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Sidebar */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 border-r border-gray-200 dark:border-gray-600">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <Layers className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-blue-900 dark:text-blue-100">Dashboard</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <Users className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">Klanten</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">Offertes</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <CreditCard className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">Facturen</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <ShoppingCart className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300">Voorraad</span>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 p-6">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Welkom bij PulseFlow</h3>
                  <p className="text-gray-600 dark:text-gray-300">Hier is een overzicht van je bedrijfsactiviteiten</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Totaal Klanten</span>
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">1,247</div>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600 dark:text-green-400">+12% vs vorige maand</span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Maandelijkse Omzet</span>
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">€45.2K</div>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600 dark:text-green-400">+8% vs vorige maand</span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Openstaande Facturen</span>
                      <CreditCard className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">23</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400 mt-2">€12.4K openstaand</div>
                  </div>

                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Voorraad Waarde</span>
                      <Database className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">€28.7K</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400 mt-2">156 producten</div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Recente Activiteit</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Nieuwe klant toegevoegd</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">TechCorp B.V. • 5 min geleden</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Offerte verzonden</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">OFF-2024-001 • 15 min geleden</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CreditCard className="w-4 h-4 text-purple-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Factuur betaald</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">€2,450.00 • 1 uur geleden</div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose PulseFlow Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Waarom kiezen voor PulseFlow?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ontworpen voor Nederlandse ondernemers, door Nederlandse ontwikkelaars
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                €
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Betaalbaar</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Transparante prijzen zonder verborgen kosten. Start met een gratis proefperiode.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                🇳🇱
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Nederlandse Data</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Al je gegevens worden veilig opgeslagen in Nederlandse datacenters. GDPR compliant.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Snel Setup</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Binnen 15 minuten operationeel. Geen complexe installaties of dure consultants nodig.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                <Headphones className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Lokale Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ondersteuning in het Nederlands door ons lokale team. Snelle reactie op al je vragen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Werkt samen met je favoriete tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              PulseFlow integreert naadloos met de tools die je al gebruikt
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Outlook</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Mollie</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Exact</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Database className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Twinfield</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Teams</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Star className="w-6 h-6 text-indigo-600" />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">& meer...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Klaar om je bedrijf te stroomlijnen?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start vandaag nog met PulseFlow en ontdek hoe eenvoudig bedrijfsbeheer kan zijn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://flow.ipulse.one" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2">
              Start gratis proefperiode
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="mailto:info@ipulse.one" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
              Neem contact op
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-6">
            Geen creditcard nodig • 14 dagen gratis • Annuleer wanneer je wilt
          </p>
        </div>
      </section>
    </div>
  );
}


