"use client";
import { useState } from "react";
import Link from "next/link";
import { Linkedin, Github, Instagram, Twitter, Monitor, FileText, Building2, ArrowRight, Shield, Zap, BarChart3, Clock, CheckCircle2, Users, Lock, Bell, Activity, TrendingUp, Globe2, Sparkles, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [activeTab, setActiveTab] = useState<'guard' | 'files' | 'flow'>('guard');

  // Structured data for homepage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "iPulse",
    "description": "Unified Business Platform: PulseGuard voor monitoring, PulseFiles voor secure file sharing, PulseFlow voor ERP & CRM. Alles voor Nederlandse ondernemers.",
    "url": "https://ipulse.one",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ipulse.one/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
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

  const products = [
    {
      icon: Monitor,
      name: "PulseGuard",
      tagline: "Monitoring & Uptime",
      description: "Monitor je volledige digitale infrastructuur 24/7. Ontvang directe notificaties bij downtime of performance issues.",
      gradient: "from-blue-500 to-blue-600",
      features: ["Uptime Monitoring", "SSL Certificaat Check", "Performance Metrics", "Status Pages"],
      urlSlug: "guard"
    },
    {
      icon: FileText,
      name: "PulseFiles",
      tagline: "Secure File Sharing",
      description: "Deel bestanden veilig met je team en klanten. End-to-end encrypted met geavanceerde access control.",
      gradient: "from-green-500 to-green-600",
      features: ["E2E Encryption", "Access Control", "Version History", "Real-time Sync"],
      urlSlug: "files"
    }
  ];


  const stats = [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "<2s", label: "Avg Response" },
    { value: "24/6", label: "Support" }
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
                  <Sparkles className="w-3 h-3 mr-1.5 sm:mr-2" />
                  Trusted by IMDigital
                </Badge>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight px-4 sm:px-0 text-gray-900 dark:text-white">
                  Your digital{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">peacemaker</span>
                </h1>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0">
                  Monitor, beheer en optimaliseer je volledige digitale ecosysteem vanaf één platform.
                  Gebouwd voor moderne teams.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-4 sm:mb-6 px-4 sm:px-0 justify-center lg:justify-start">
                  <Link href="/guard">
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-gray-100 rounded-lg group w-full sm:w-auto"
                    >
                      Start gratis trial
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/features">
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-lg border-2 w-full sm:w-auto"
                    >
                      Bekijk demo
                    </Button>
                  </Link>
                </div>

                {/* Feature checkmarks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm max-w-md mx-auto lg:mx-0">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 justify-center lg:justify-start">
                    <CheckCircle2 className="w-4 h-4 text-gray-900 dark:text-gray-100 flex-shrink-0" />
                    <span>24/7 Monitoring</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 justify-center lg:justify-start">
                    <CheckCircle2 className="w-4 h-4 text-gray-900 dark:text-gray-100 flex-shrink-0" />
                    <span>Instant alerts</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 justify-center lg:justify-start">
                    <CheckCircle2 className="w-4 h-4 text-gray-900 dark:text-gray-100 flex-shrink-0" />
                    <span>Advanced analytics</span>
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
                      <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-2 sm:p-3 border border-red-200 dark:border-red-800">
                        <div className="text-xl sm:text-2xl font-bold text-red-600 dark:text-red-400">3</div>
                        <div className="text-[10px] sm:text-xs text-red-700 dark:text-red-300">Critical</div>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-2 sm:p-3 border border-yellow-200 dark:border-yellow-800">
                        <div className="text-xl sm:text-2xl font-bold text-yellow-600 dark:text-yellow-400">12</div>
                        <div className="text-[10px] sm:text-xs text-yellow-700 dark:text-yellow-300">Warnings</div>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-2 sm:p-3 border border-green-200 dark:border-green-800">
                        <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">98%</div>
                        <div className="text-[10px] sm:text-xs text-green-700 dark:text-green-300">Uptime</div>
                      </div>
                    </div>

                    {/* Recent Issues */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <h4 className="text-[10px] sm:text-xs font-semibold text-gray-400 mb-2">Recent Issues</h4>
                      <div className="bg-red-50 dark:bg-red-900/20 rounded-md p-1.5 sm:p-2 border border-red-200 dark:border-red-800">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] sm:text-xs text-gray-300">SSL expires soon</span>
                          <span className="text-[10px] sm:text-xs text-gray-500">3 sites</span>
                        </div>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-md p-1.5 sm:p-2 border border-yellow-200 dark:border-yellow-800">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] sm:text-xs text-gray-300">High response time</span>
                          <span className="text-[10px] sm:text-xs text-gray-500">2 servers</span>
                        </div>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-md p-1.5 sm:p-2 border border-yellow-200 dark:border-yellow-800">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] sm:text-xs text-gray-300">Low disk space</span>
                          <span className="text-[10px] sm:text-xs text-gray-500">1 server</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-gray-200 dark:border-gray-700 mt-2 sm:mt-3">
                        <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500">
                          <span>Last scan: 2m ago</span>
                          <span className="text-blue-600 hover:text-blue-700 cursor-pointer">View all →</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stat Badge - Hidden on small mobile */}
                <div className="hidden sm:block absolute -bottom-3 -left-3 bg-white dark:bg-black rounded-lg shadow-xl p-2 sm:p-3 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-xs text-gray-500">Uptime</div>
                      <div className="text-base sm:text-lg font-bold text-green-600">99.95%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 sm:py-10 md:py-12">
          <div className="max-w-7xl mx-auto px-4 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-16 max-w-4xl">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12 sm:py-16 md:py-20 ">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <Badge variant="outline" className="mb-2 sm:mb-3 text-xs sm:text-sm">
                Our Platform
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 px-4">
                Everything you need
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
                Een compleet platform voor monitoring, files en business management
              </p>
            </div>

            <div className="space-y-12 sm:space-y-14 md:space-y-16">
              {products.map((product, index) => {
                const isReversed = index % 2 === 1;

                return (
                  <div
                    key={index}
                    className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}
                  >
                    {/* Dashboard Mockup */}
                    <div className={`${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative group max-w-lg mx-auto lg:max-w-none">
                        {/* Floating gradient background */}
                        <div className="absolute inset-0 bg-white opacity-20 blur-3xl transition-opacity duration-500 rounded-3xl"></div>

                        {/* Main dashboard container */}
                        <div className="relative rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-black/40 backdrop-blur-md transition-transform duration-300">
                          {/* Browser Chrome */}
                          <div className="bg-gray-100 dark:bg-black/30 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
                            <div className="flex gap-1 sm:gap-1.5">
                              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="flex-1 text-center">
                              <span className="text-gray-500 text-[10px] sm:text-sm font-medium">{product.urlSlug}.ipulse.one</span>
                            </div>
                          </div>

                          {/* Dashboard Content */}
                          <div className="bg-white dark:bg-black/20 backdrop-blur-sm p-4 sm:p-5 md:p-6">
                            {/* PulseGuard Monitoring Dashboard */}
                            {index === 0 && (
                              <div className="space-y-3 sm:space-y-4">
                                <div className="flex items-center justify-between mb-3 sm:mb-4">
                                  <h3 className="text-base sm:text-lg font-bold text-white">Monitoring Dashboard</h3>
                                  <Badge variant="outline" className="text-xs sm:text-sm px-1.5 sm:px-2">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 mr-1 sm:mr-2 animate-pulse"></div>
                                    Live
                                  </Badge>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 border border-green-200 dark:border-green-800">
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400">99.9%</div>
                                    <div className="text-[10px] sm:text-sm text-green-700 dark:text-green-300 mt-0.5 sm:mt-1">Uptime</div>
                                  </div>
                                  <div className="bg-blue-50 dark:bg-black rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 border border-blue-200 dark:border-gray-700">
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">142ms</div>
                                    <div className="text-[10px] sm:text-sm text-blue-700 dark:text-blue-300 mt-0.5 sm:mt-1">Response</div>
                                  </div>
                                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 border border-purple-200 dark:border-purple-800">
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">24</div>
                                    <div className="text-[10px] sm:text-sm text-purple-700 dark:text-purple-300 mt-0.5 sm:mt-1">Services</div>
                                  </div>
                                </div>

                                {/* Recent Activity */}
                                <div className="space-y-1.5 sm:space-y-2">
                                  <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2 sm:mb-3">Recent Activity</h4>
                                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-2 sm:p-3 border border-green-200 dark:border-green-800 flex items-center gap-2 sm:gap-3">
                                    <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                                    <div className="flex-1 min-w-0">
                                      <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100 truncate">All systems operational</div>
                                      <div className="text-[10px] sm:text-xs text-gray-500 truncate">Last checked 30 seconds ago</div>
                                    </div>
                                  </div>
                                  <div className="bg-blue-50 dark:bg-black rounded-lg p-2 sm:p-3 border border-blue-200 dark:border-gray-700 flex items-center gap-2 sm:gap-3">
                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                                    <div className="flex-1 min-w-0">
                                      <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100 truncate">SSL certificates renewed</div>
                                      <div className="text-[10px] sm:text-xs text-gray-500 truncate">3 sites updated</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* PulseFiles File Sharing Dashboard */}
                            {index === 1 && (
                              <div className="space-y-3 sm:space-y-4">
                                <div className="flex items-center justify-between mb-3 sm:mb-4">
                                  <h3 className="text-base sm:text-lg font-bold text-white">Your Files</h3>
                                  <Badge variant="outline" className="text-xs sm:text-sm px-1.5 sm:px-2">
                                    <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 sm:mr-2" />
                                    Encrypted
                                  </Badge>
                                </div>

                                {/* Storage Stats */}
                                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 border border-green-200 dark:border-green-800">
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400">847</div>
                                    <div className="text-[10px] sm:text-sm text-green-700 dark:text-green-300 mt-0.5 sm:mt-1">Total Files</div>
                                  </div>
                                  <div className="bg-blue-50 dark:bg-black rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 border border-blue-200 dark:border-gray-700">
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">24GB</div>
                                    <div className="text-[10px] sm:text-sm text-blue-700 dark:text-blue-300 mt-0.5 sm:mt-1">Used Space</div>
                                  </div>
                                </div>

                                {/* Recent Files */}
                                <div className="space-y-1.5 sm:space-y-2">
                                  <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2 sm:mb-3">Recent Files</h4>
                                  <div className="bg-gray-50 dark:bg-black rounded-lg p-2 sm:p-3 border border-gray-200 dark:border-gray-700 flex items-center gap-2 sm:gap-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-black rounded-lg flex items-center justify-center flex-shrink-0 border border-transparent dark:border-gray-700">
                                      <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100 truncate">Q4_Financial_Report.pdf</div>
                                      <div className="text-[10px] sm:text-xs text-gray-500 truncate">Shared with 3 people · 4.2 MB</div>
                                    </div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-black rounded-lg p-2 sm:p-3 border border-gray-200 dark:border-gray-700 flex items-center gap-2 sm:gap-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                      <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100 truncate">Marketing_Strategy_2024.docx</div>
                                      <div className="text-[10px] sm:text-xs text-gray-500 truncate">Private · 1.8 MB</div>
                                    </div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-black rounded-lg p-2 sm:p-3 border border-gray-200 dark:border-gray-700 flex items-center gap-2 sm:gap-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                      <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100 truncate">Client_Presentation.pptx</div>
                                      <div className="text-[10px] sm:text-xs text-gray-500 truncate">Shared with team · 8.7 MB</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* PulseFlow Business Dashboard */}
                            {index === 2 && (
                              <div className="space-y-3 sm:space-y-4">
                                <div className="flex items-center justify-between mb-3 sm:mb-4">
                                  <h3 className="text-base sm:text-lg font-bold text-white">Business Overview</h3>
                                  <Badge variant="outline" className="text-xs sm:text-sm px-1.5 sm:px-2">
                                    <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 sm:mr-2" />
                                    Growing
                                  </Badge>
                                </div>

                                {/* Business Stats */}
                                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 border border-purple-200 dark:border-purple-800">
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">247</div>
                                    <div className="text-[10px] sm:text-sm text-purple-700 dark:text-purple-300 mt-0.5 sm:mt-1">Clients</div>
                                  </div>
                                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 border border-green-200 dark:border-green-800">
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400">€45K</div>
                                    <div className="text-[10px] sm:text-sm text-green-700 dark:text-green-300 mt-0.5 sm:mt-1">Revenue</div>
                                  </div>
                                  <div className="bg-blue-50 dark:bg-black rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 border border-blue-200 dark:border-gray-700">
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">12</div>
                                    <div className="text-[10px] sm:text-sm text-blue-700 dark:text-blue-300 mt-0.5 sm:mt-1">Projects</div>
                                  </div>
                                </div>

                                {/* Active Projects */}
                                <div className="space-y-1.5 sm:space-y-2">
                                  <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-2 sm:mb-3">Active Projects</h4>
                                  <div className="bg-gray-50 dark:bg-black rounded-lg p-2 sm:p-3 border border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                                      <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100 truncate">Website Redesign</div>
                                      <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">75%</Badge>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                                      <div className="bg-purple-600 h-1.5 sm:h-2 rounded-full" style={{width: '75%'}}></div>
                                    </div>
                                  </div>
                                  <div className="bg-gray-50 dark:bg-black rounded-lg p-2 sm:p-3 border border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                                      <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100 truncate">Mobile App Development</div>
                                      <Badge variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">45%</Badge>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                                      <div className="bg-blue-600 h-1.5 sm:h-2 rounded-full" style={{width: '45%'}}></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${isReversed ? 'lg:order-1' : 'lg:order-2'} text-center lg:text-left px-4 sm:px-0`}>
                      <Badge variant="outline" className="mb-3 sm:mb-4 text-xs sm:text-sm">
                        {product.tagline}
                      </Badge>

                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                        {product.name}
                      </h2>

                      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
                        {product.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-black dark:bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-white dark:text-black" />
                            </div>
                            <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link href={`/${product.urlSlug}`}>
                        <Button
                          size="lg"
                          className="bg-white text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors rounded-lg group w-full sm:w-auto"
                        >
                          Learn more about {product.name}
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
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
              Klaar om te{" "}
              <span className="relative inline-block">
                beginnen?
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C70 2.5 130 2.5 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-50" />
                </svg>
              </span>
            </h2>

            <p className="text-xl md:text-2xl mb-10 text-gray-700 dark:text-white/90 max-w-3xl mx-auto leading-relaxed">
              Start je <span className="font-bold">gratis trial</span> vandaag en ontdek hoe iPulse je bedrijf kan helpen.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/guard">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 rounded-xl px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all hover:scale-105 group"
                >
                  Start gratis trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl px-8 py-6 text-lg font-semibold border-2 border-gray-300 dark:border-gray-700 text-white hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105"
                >
                  Bekijk prijzen
                </Button>
              </Link>
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
