"use client";
import { useState } from "react";
import { Linkedin, Github, Instagram, Twitter, Monitor, FileText, ArrowRight, Shield, Zap, BarChart3, CheckCircle2, Lock, Bell, TrendingUp, Globe2, Sparkles, Gauge, Eye, Smartphone, Code, AlertTriangle, Settings, MessageSquare, Webhook, Cpu, HardDrive, Network, Accessibility, Timer, Layers, Brain, Target, Calendar, Mail, Send, MessageCircle, Hash, Key, CreditCard, Server as ServerIcon, Globe, Scan, Bug } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Guard() {
  const [activeTab, setActiveTab] = useState<'monitoring' | 'security' | 'analytics' | 'ai' | 'api'>('monitoring');

  // Structured data for PulseGuard page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "PulseGuard",
    "description": "All-in-one monitoring en security platform voor websites, servers, devices en digitale infrastructuur. 24/7 uptime monitoring, SSL certificaat monitoring, AI-powered insights.",
    "url": "https://guard.ipulse.one",
    "applicationCategory": "MonitoringApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "description": "Gratis trial beschikbaar"
    },
    "publisher": {
      "@type": "Organization",
      "name": "iPulse B.V.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ipulse.one/assets/ipulse-logo.png"
      }
    }
  };

  const stats = [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "<2s", label: "Avg Response" },
    { value: "24/7", label: "Monitoring" }
  ];


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <div className="relative min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
        <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                <Badge variant="secondary" className="mb-3 sm:mb-4 text-xs sm:text-sm">
                  <Shield className="w-3 h-3 mr-1.5 sm:mr-2" />
                  Enterprise Monitoring Platform
                </Badge>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight px-4 sm:px-0 text-gray-900 dark:text-white">
                  PulseGuard bewaakt je hele stack{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">zonder ruis</span>
                </h1>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0">
                  Eén platform voor uptime, performance en security. We meten elke minuut, signaleren afwijkingen vroeg en geven meldingen die duidelijk maken wat er mis is en wat je moet doen.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-4 sm:mb-6 px-4 sm:px-0 justify-center lg:justify-start">
                  <a
                    href="https://guard.ipulse.one"
                    className="bg-white text-black hover:bg-gray-100 rounded-lg group w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 text-sm font-medium"
                  >
                    Start gratis trial
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://guard.ipulse.one"
                    className="rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 text-sm font-medium"
                  >
                    Bekijk demo
                  </a>
                </div>

                {/* Feature checkmarks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm max-w-md mx-auto lg:mx-0">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 justify-center lg:justify-start">
                    <CheckCircle2 className="w-4 h-4 text-gray-900 dark:text-gray-100 flex-shrink-0" />
                    <span>24/7 Multi-location monitoring</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 justify-center lg:justify-start">
                    <CheckCircle2 className="w-4 h-4 text-gray-900 dark:text-gray-100 flex-shrink-0" />
                    <span>AI-powered insights</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 justify-center lg:justify-start">
                    <CheckCircle2 className="w-4 h-4 text-gray-900 dark:text-gray-100 flex-shrink-0" />
                    <span>Advanced security scanning</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 justify-center lg:justify-start">
                    <CheckCircle2 className="w-4 h-4 text-gray-900 dark:text-gray-100 flex-shrink-0" />
                    <span>99.9% uptime SLA</span>
                  </div>
                </div>
              </div>

              {/* Right Dashboard Mockup */}
              <div className="relative lg:pl-8 mt-8 lg:mt-0 px-4 sm:px-0">
                <div className="relative rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-black/40 backdrop-blur-md max-w-lg mx-auto lg:max-w-none">
                  {/* Browser Chrome */}
                  <div className="bg-gray-100 dark:bg-black/30 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex gap-1 sm:gap-1.5">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-gray-500 text-[10px] sm:text-xs font-medium">guard.ipulse.one</span>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="bg-white dark:bg-black/20 backdrop-blur-sm p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">Monitoring Dashboard</h3>
                      <Badge variant="outline" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1 sm:mr-1.5"></div>
                        Live
                      </Badge>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 sm:p-3 border border-blue-200 dark:border-blue-800">
                        <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">98.7%</div>
                        <div className="text-[10px] sm:text-xs text-blue-700 dark:text-blue-300">Uptime</div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-2 sm:p-3 border border-green-200 dark:border-green-800">
                        <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">142ms</div>
                        <div className="text-[10px] sm:text-xs text-green-700 dark:text-green-300">Response</div>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-2 sm:p-3 border border-purple-200 dark:border-purple-800">
                        <div className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">24</div>
                        <div className="text-[10px] sm:text-xs text-purple-700 dark:text-purple-300">Services</div>
                      </div>
                    </div>

                    {/* Recent Issues */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <h4 className="text-[10px] sm:text-xs font-semibold text-gray-400 mb-2">Recent Activity</h4>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-md p-1.5 sm:p-2 border border-green-200 dark:border-green-800">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] sm:text-xs text-gray-300">All systems operational</span>
                          <span className="text-[10px] sm:text-xs text-gray-500">2m ago</span>
                        </div>
                      </div>
                      <div className="bg-blue-50 dark:bg-black rounded-md p-1.5 sm:p-2 border border-blue-200 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] sm:text-xs text-gray-300">SSL certificates renewed</span>
                          <span className="text-[10px] sm:text-xs text-gray-500">1h ago</span>
                        </div>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-md p-1.5 sm:p-2 border border-yellow-200 dark:border-yellow-800">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] sm:text-xs text-gray-300">High response time detected</span>
                          <span className="text-[10px] sm:text-xs text-gray-500">4h ago</span>
                        </div>
        </div>

                      <div className="pt-2 border-t border-gray-200 dark:border-gray-700 mt-2 sm:mt-3">
                        <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500">
                          <span>Last scan: 30s ago</span>
                          <span className="text-blue-600 hover:text-blue-700 cursor-pointer">View all →</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stat Badge */}
                <div className="hidden sm:block absolute -bottom-3 -left-3 bg-white dark:bg-black rounded-lg shadow-xl p-2 sm:p-3 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs text-gray-500">Security Score</div>
                      <div className="text-base sm:text-lg font-bold text-green-600">A+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 sm:py-10 md:py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Features Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <Badge variant="outline" className="mb-3 sm:mb-4 border-gray-300 dark:border-gray-700 text-xs sm:text-sm">
                Uitgebreide Features
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">
                Alles wat je nodig hebt voor{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-400 dark:to-gray-500 bg-clip-text text-transparent">
                  complete monitoring
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
                Van uptime tot security: dit krijg je standaard, zonder marketingpraat.
              </p>
          </div>

            {/* Feature Categories - Tab Style */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-2">
              <button
                onClick={() => setActiveTab('monitoring')}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all ${
                  activeTab === 'monitoring'
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg scale-105'
                    : 'bg-white dark:bg-black text-black dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white'
                }`}
              >
                <Monitor className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Monitoring</span>
                <span className="xs:hidden">Monitor</span>
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all ${
                  activeTab === 'security'
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg scale-105'
                    : 'bg-white dark:bg-black text-black dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white'
                }`}
              >
                <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Security</span>
                <span className="xs:hidden">Security</span>
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all ${
                  activeTab === 'analytics'
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg scale-105'
                    : 'bg-white dark:bg-black text-black dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white'
                }`}
              >
                <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Analytics</span>
                <span className="xs:hidden">Analytics</span>
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all ${
                  activeTab === 'ai'
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg scale-105'
                    : 'bg-white dark:bg-black text-black dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white'
                }`}
              >
                <Brain className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">AI Features</span>
                <span className="xs:hidden">AI</span>
              </button>
              <button
                onClick={() => setActiveTab('api')}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all ${
                  activeTab === 'api'
                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg scale-105'
                    : 'bg-white dark:bg-black text-black dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white'
                }`}
              >
                <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">API & Integrations</span>
                <span className="xs:hidden">API</span>
              </button>
            </div>

            {/* Highlighted Features Grid - Dynamic based on tab */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-14 md:mb-16">
              {activeTab === 'monitoring' && (
                <>
                  {/* Hero Feature - 24/7 Domain Monitoring */}
                  <div className="lg:col-span-2 group relative bg-gradient-to-br from-gray-900 to-black dark:from-white dark:to-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-medium text-white dark:text-black mb-3 sm:mb-4">
                        <Monitor className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        Meest gebruikt
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white dark:text-black mb-2 sm:mb-3">
                        24/7 Domain Monitoring
                      </h3>
                      <p className="text-gray-200 dark:text-black/70 text-sm sm:text-base mb-4 sm:mb-6 max-w-xl">
                        Metingen elke 30 seconden vanuit 15+ locaties. Alerting bij downtime, trage responses of SSL-gedoe, met context (impact, locatie, duur) zodat je sneller herstelt dan gebruikers merken.
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ HTTP/HTTPS monitoring
                        </span>
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ Multi-location checks
                        </span>
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ 30-sec intervals
                        </span>
                      </div>
                    </div>
                    <div className="absolute -right-8 -bottom-8 opacity-10 dark:opacity-5">
                      <Globe2 className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" />
                    </div>
                  </div>

                  {/* Service Monitoring */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <ServerIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Service Monitoring</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Monitor TCP/UDP services, SMTP, POP3, IMAP, FTP, SSH, DNS en meer.
                      Controleer poorten, connectivity en service health.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Network className="w-3 h-3 sm:w-4 sm:h-4" />
                      Multi-protocol support
                    </div>
                  </div>

                  {/* Device Monitoring */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Device Monitoring</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Real-time monitoring van CPU, memory, disk space en network performance.
                      Cross-platform support voor Windows, Linux en macOS.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <HardDrive className="w-3 h-3 sm:w-4 sm:h-4" />
                      Real-time metrics
                    </div>
                  </div>

                  {/* Multi-location Monitoring */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Globe2 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Multi-location Monitoring</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Monitor vanuit verschillende geografische locaties simultaan.
                      Vergelijk performance tussen NL, DE, US en andere regio&apos;s.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Globe2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      15+ global locations
                    </div>
                  </div>

                  {/* Website Change Detection */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Change Detection</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Detecteer visuele en HTML wijzigingen op websites.
                      Screenshot vergelijking en content monitoring.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                      Visual diff analysis
                    </div>
                  </div>

                  {/* Accessibility Testing */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Accessibility className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Accessibility Testing</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Automatische WCAG compliance checks en accessibility audits.
                      Verbeter de toegankelijkheid van je websites.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Accessibility className="w-3 h-3 sm:w-4 sm:h-4" />
                      WCAG compliance
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'security' && (
                <>
                  {/* Hero Feature - SSL/TLS Monitoring */}
                  <div className="lg:col-span-2 group relative bg-gradient-to-br from-gray-900 to-black dark:from-white dark:to-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-medium text-white dark:text-black mb-3 sm:mb-4">
                        <Shield className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        Critical Security
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-black mb-2 sm:mb-3">
                        SSL/TLS Certificate Monitoring
                      </h3>
                      <p className="text-white/80 dark:text-black/70 text-sm sm:text-base mb-4 sm:mb-6 max-w-xl">
                        Certificaten en configuraties altijd onder controle: we checken verloopdatums, chain-fouten, HSTS en ciphers. Meldingen komen ruim op tijd en met stappen om ze te fixen.
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ Expiration alerts
                        </span>
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ Certificate validation
                        </span>
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ SSL grade scoring
                        </span>
                      </div>
                    </div>
                    <div className="absolute -right-8 -bottom-8 opacity-10 dark:opacity-5">
                      <Shield className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" />
                    </div>
                  </div>

                  {/* Security Headers Analysis */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Security Headers</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Analyseer CSP, HSTS, X-Frame-Options en andere security headers.
                      Detecteer ontbrekende headers en krijg verbeteringsadvies.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
                      Comprehensive analysis
                    </div>
                  </div>

                  {/* Vulnerability Scanning */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Scan className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Vulnerability Scanning</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Automatische detectie van bekende kwetsbaarheden en security issues.
                      Security scores en actionable verbeteringsadvies.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Bug className="w-3 h-3 sm:w-4 sm:h-4" />
                      Automated scans
                    </div>
                  </div>

                  {/* DNS Monitoring */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">DNS Monitoring</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Monitor alle DNS record types en detecteer configuratie wijzigingen.
                      Track DNS health en propagation status.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                      Record tracking
                    </div>
                  </div>

                  {/* Anomaly Detection */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Anomaly Detection</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Automatische detectie van ongebruikelijke patronen en potentiële problemen.
                      AI-powered analysis van performance data.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Brain className="w-3 h-3 sm:w-4 sm:h-4" />
                      AI-powered detection
                    </div>
                  </div>

                  {/* Performance Monitoring */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Timer className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Performance Monitoring</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Gedetailleerde performance metrics inclusief resource timings en filmstrip generation.
                      Optimaliseer website snelheid en user experience.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Timer className="w-3 h-3 sm:w-4 sm:h-4" />
                      Resource timings
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'analytics' && (
                <>
                  {/* Hero Feature - Dashboard Analytics */}
                  <div className="lg:col-span-2 group relative bg-gradient-to-br from-gray-900 to-black dark:from-white dark:to-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-medium text-white dark:text-black mb-3 sm:mb-4">
                        <BarChart3 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        Real-time Insights
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-black mb-2 sm:mb-3">
                        Advanced Dashboard & Analytics
                      </h3>
                      <p className="text-white/80 dark:text-black/70 text-sm sm:text-base mb-4 sm:mb-6 max-w-xl">
                        Realtime dashboards plus historie en trends. Rapporten die ook buiten het tech-team te lezen zijn, met context per incident en duidelijke SLA-inslag.
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ Real-time overview
                        </span>
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ Historical data
                        </span>
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ Custom reports
                        </span>
                      </div>
                    </div>
                    <div className="absolute -right-8 -bottom-8 opacity-10 dark:opacity-5">
                      <BarChart3 className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" />
                    </div>
                  </div>

                  {/* Uptime Statistics */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Uptime Statistics</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Gedetailleerde uptime berekeningen met historische trends en location-based vergelijkingen.
                      SLA monitoring en uptime rapporten.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                      SLA monitoring
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Gauge className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Performance Metrics</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Uitgebreide performance analytics met response time tracking, latency monitoring
                      en performance anomaly detectie.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Gauge className="w-3 h-3 sm:w-4 sm:h-4" />
                      Latency monitoring
                    </div>
                  </div>

                  {/* Status Pages */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Globe2 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Public Status Pages</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Branded status pagina&apos;s voor transparante communicatie met klanten.
                      Incident management en maintenance windows.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Globe2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      Custom branding
                    </div>
                  </div>

                  {/* Incident Management */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Incident Management</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Complete incident lifecycle management met automatische detectie,
                      escalatie en resolution tracking.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4" />
                      Auto-resolution
                    </div>
                  </div>

                  {/* Reports & Export */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Reports & Export</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Automatische rapporten en data export in PDF, CSV en JSON format.
                      Scheduled reports en custom dashboards.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                      Multi-format export
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'ai' && (
                <>
                  {/* Hero Feature - PulseAI Assistant */}
                  <div className="lg:col-span-2 group relative bg-gradient-to-br from-gray-900 to-black dark:from-white dark:to-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-medium text-white dark:text-black mb-3 sm:mb-4">
                        <Brain className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        AI-Powered Intelligence
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-black mb-2 sm:mb-3">
                        PulseAI Chat Assistant
                      </h3>
                      <p className="text-white/80 dark:text-black/70 text-sm sm:text-base mb-4 sm:mb-6 max-w-xl">
                        Stel gewone vragen over je eigen data en krijg concrete antwoorden. PulseAI ziet patronen, komt met next steps en onthoudt je context zodat je sneller besluit.
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ Natural language queries
                        </span>
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ Proactive detection
                        </span>
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ Multi-task processing
                        </span>
                      </div>
                    </div>
                    <div className="absolute -right-8 -bottom-8 opacity-10 dark:opacity-5">
                      <Brain className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" />
                    </div>
                  </div>

                  {/* MCP Integration */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">MCP Integration</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Integreer PulseGuard met ChatGPT, Claude Desktop, VS Code en Cursor AI.
                      Veilige API toegang via MCP tokens en custom instructions.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                      Multi-platform support
                    </div>
                  </div>

                  {/* AI Capabilities */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">AI Capabilities</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Dashboard analyses, incident onderzoek, security insights en predictive analytics.
                      AI-gedreven aanbevelingen voor performance optimalisatie.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Target className="w-3 h-3 sm:w-4 sm:h-4" />
                      Predictive insights
                    </div>
                  </div>

                  {/* MCP Tools */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">MCP Tools</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Dashboard stats, domain monitoring, incident management, DNS scanning,
                      port scanning en security scanning via AI interface.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Settings className="w-3 h-3 sm:w-4 sm:h-4" />
                      Automated tool usage
                    </div>
                  </div>

                  {/* Conversation History */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Conversation History</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Bewaar chat geschiedenis voor context en vervolg gesprekken.
                      Snelle toegang tot eerder gestelde vragen en antwoorden.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                      Persistent context
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Quick Actions</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Snelle acties via chat interface voor monitoring taken,
                      rapporten genereren en configuratie wijzigingen.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                      Instant execution
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'api' && (
                <>
                  {/* Hero Feature - REST API */}
                  <div className="lg:col-span-2 group relative bg-gradient-to-br from-gray-900 to-black dark:from-white dark:to-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-medium text-white dark:text-black mb-3 sm:mb-4">
                        <Code className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        Developer Friendly
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-black mb-2 sm:mb-3">
                        Complete REST API
                      </h3>
                      <p className="text-white/80 dark:text-black/70 text-sm sm:text-base mb-4 sm:mb-6 max-w-xl">
                        REST API met versiebeheer, rate limiting en logging. Sluit soepel aan op je CI/CD, chatops of ITSM; stabiel, voorspelbaar en goed gedocumenteerd.
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ Versioned endpoints
                        </span>
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ Rate limiting
                        </span>
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ Request logging
                        </span>
                      </div>
                    </div>
                    <div className="absolute -right-8 -bottom-8 opacity-10 dark:opacity-5">
                      <Code className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" />
                    </div>
                  </div>

                  {/* API Authentication */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Key className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">API Authentication</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Veilige API toegang met API keys, scoped permissions en key rotation.
                      Gebruikersspecifieke toegang en usage tracking.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Key className="w-3 h-3 sm:w-4 sm:h-4" />
                      Scoped permissions
                    </div>
                  </div>

                  {/* Webhooks */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Webhook className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Webhooks</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Custom webhook URLs voor real-time integratie. Automatische retries,
                      custom payloads en secure webhook delivery.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Webhook className="w-3 h-3 sm:w-4 sm:h-4" />
                      Auto retries
                    </div>
                  </div>

                  {/* Notification Integrations */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Notification Integrations</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Direct integratie met Slack, Discord, Microsoft Teams, Telegram en email.
                      Custom notification rules en escalation policies.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Bell className="w-3 h-3 sm:w-4 sm:h-4" />
                      Multi-channel alerts
                    </div>
                  </div>

                  {/* Billing API */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Billing Integration</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Stripe integratie voor veilige betalingen. Subscription management,
                      usage tracking en billing history via API.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <CreditCard className="w-3 h-3 sm:w-4 sm:h-4" />
                      Stripe integration
                    </div>
          </div>

                  {/* Device Agent API */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Device Agent API</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Remote device management via API. Agent configuratie, updates,
                      restart requests en bulk operations voor device fleets.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
                      Remote management
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Additional Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-14 md:mb-16">
              <div className="p-3 sm:p-4 bg-gray-50 dark:bg-black rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900 dark:text-white mb-1.5 sm:mb-2" />
                <h5 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Team Management</h5>
                <p className="text-[10px] sm:text-xs text-gray-400">Role-based access control</p>
              </div>

              <div className="p-3 sm:p-4 bg-gray-50 dark:bg-black rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900 dark:text-white mb-1.5 sm:mb-2" />
                <h5 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Maintenance Windows</h5>
                <p className="text-[10px] sm:text-xs text-gray-400">Scheduled maintenance</p>
              </div>

              <div className="p-3 sm:p-4 bg-gray-50 dark:bg-black rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900 dark:text-white mb-1.5 sm:mb-2" />
                <h5 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Email Reports</h5>
                <p className="text-[10px] sm:text-xs text-gray-400">Automated reporting</p>
              </div>

              <div className="p-3 sm:p-4 bg-gray-50 dark:bg-black rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                <Send className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900 dark:text-white mb-1.5 sm:mb-2" />
                <h5 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Data Export</h5>
                <p className="text-[10px] sm:text-xs text-gray-400">CSV, JSON, PDF</p>
              </div>

              <div className="p-3 sm:p-4 bg-gray-50 dark:bg-black rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                <Hash className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900 dark:text-white mb-1.5 sm:mb-2" />
                <h5 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Slack Integration</h5>
                <p className="text-[10px] sm:text-xs text-gray-400">Channel notifications</p>
              </div>

              <div className="p-3 sm:p-4 bg-gray-50 dark:bg-black rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900 dark:text-white mb-1.5 sm:mb-2" />
                <h5 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Discord Integration</h5>
                <p className="text-[10px] sm:text-xs text-gray-400">Server notifications</p>
              </div>

            </div>

            {/* Trust Badges */}
            <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 opacity-60 px-4">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 dark:text-white" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 dark:text-white" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">ISO 27001</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 dark:text-white" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Globe2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 dark:text-white" />
                <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">15+ Global Locations</span>
              </div>
            </div>
          </div>
        </section>


        {/* Final CTA */}
        <section className="relative py-24 px-4">
          <div className="relative max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
              <Sparkles className="w-4 h-4" />
              Start vandaag nog
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Klaar om je{" "}
              <span className="relative inline-block">
                monitoring
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C70 2.5 130 2.5 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-50" />
                </svg>
              </span>{" "}
              te optimaliseren?
            </h2>

            <p className="text-xl md:text-2xl mb-10 text-gray-700 dark:text-white/90 max-w-3xl mx-auto leading-relaxed">
              Start je <span className="font-bold">gratis trial</span> en zie binnen minuten wat er goed gaat, wat niet, en welke stap je nu zet. Minder tijd kwijt aan zoeken, meer aan oplossen.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://guard.ipulse.one"
                className="bg-white text-black hover:bg-gray-100 rounded-xl px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all hover:scale-105 group inline-flex items-center"
              >
                Start gratis trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://guard.ipulse.one"
                className="rounded-xl px-8 py-6 text-lg font-semibold border-2 border-gray-300 dark:border-gray-700 text-white hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105 inline-flex items-center"
              >
                Bekijk demo
              </a>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm mb-12 text-gray-700 dark:text-white/80">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-medium">Geen creditcard nodig</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-medium">14 dagen gratis</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-medium">Setup in 5 minuten</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pt-12 border-t border-gray-200 dark:border-gray-800">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">99.9%</div>
                <div className="text-sm text-gray-600 dark:text-white/70">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">&lt;2s</div>
                <div className="text-sm text-gray-600 dark:text-white/70">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">15+</div>
                <div className="text-sm text-gray-600 dark:text-white/70">Global Locations</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8 border-t border-gray-200 dark:border-gray-800">
              <a
                href="https://www.linkedin.com/company/107398117/"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 border border-gray-200 dark:border-gray-800"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/ipulsedev"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 border border-gray-200 dark:border-gray-800"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/pulseguard_/"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 border border-gray-200 dark:border-gray-800"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/iPulseHQ"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 border border-gray-200 dark:border-gray-800"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
        </div>
      </section>
    </div>
    </>
  );
}