"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Instagram, Twitter, Monitor, FileText, Building2, ArrowRight, Shield, Zap, BarChart3, Clock, CheckCircle2, Star, Users, Lock, Bell, Activity, TrendingUp, Globe2, Sparkles, Code2, Gauge } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const { t } = useTranslation();
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
      features: ["Uptime Monitoring", "SSL Certificaat Check", "Performance Metrics", "Status Pages"]
    },
    {
      icon: FileText,
      name: "PulseFiles",
      tagline: "Secure File Sharing",
      description: "Deel bestanden veilig met je team en klanten. End-to-end encrypted met geavanceerde access control.",
      gradient: "from-green-500 to-green-600",
      features: ["E2E Encryption", "Access Control", "Version History", "Real-time Sync"]
    },
    {
      icon: Building2,
      name: "PulseFlow",
      tagline: "Business Management",
      description: "Beheer je hele bedrijf vanaf één platform. Van klanten tot facturatie, alles in één overzicht.",
      gradient: "from-purple-500 to-purple-600",
      features: ["CRM System", "Invoicing", "Project Management", "Team Tools"]
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level beveiliging met end-to-end encryptie"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimale performance met lokale NL servers"
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Alleen relevante notificaties via je kanaal"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Data-driven beslissingen met custom dashboards"
    },
    {
      icon: Users,
      title: "Team Ready",
      description: "Role-based permissions voor je hele team"
    },
    {
      icon: Globe2,
      title: "24/7 Monitoring",
      description: "Altijd in de gaten vanuit meerdere locaties"
    }
  ];

  const stats = [
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "150+", label: "Happy Customers" },
    { value: "<2s", label: "Avg Response" },
    { value: "24/7", label: "Support" }
  ];

  const testimonials = [
    {
      quote: "iPulse heeft onze uptime naar 99.9% gebracht. De monitoring is precies wat we nodig hadden.",
      author: "Mark Jansen",
      role: "CTO, TechStartup NL",
      rating: 5
    },
    {
      quote: "Super gebruiksvriendelijk. We weten direct wanneer er iets mis gaat. Echt een aanrader!",
      author: "Sophie de Vries",
      role: "Founder, E-commerce",
      rating: 5
    },
    {
      quote: "De combinatie van monitoring, files en CRM is perfect. Scheelt tijd en geld.",
      author: "Thomas Bakker",
      role: "IT Manager, FinTech",
      rating: 5
    }
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
                  Trusted by 150+ businesses
                </Badge>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight px-4 sm:px-0">
                  Your digital{" "}
                  <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">peacemaker</span>
                </h1>

                <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0">
                  Monitor, beheer en optimaliseer je volledige digitale ecosysteem vanaf één platform.
                  Gebouwd voor moderne teams.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-4 sm:mb-6 px-4 sm:px-0 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-gray-100 rounded-lg group w-full sm:w-auto"
                  >
                    Start gratis trial
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-lg border-2 w-full sm:w-auto"
                  >
                    Bekijk demo
                  </Button>
                </div>

                {/* Feature checkmarks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm max-w-md mx-auto lg:mx-0">
                  <div className="flex items-center gap-2 text-gray-400 justify-center lg:justify-start">
                    <CheckCircle2 className="w-4 h-4 text-gray-900 dark:text-gray-100 flex-shrink-0" />
                    <span>24/7 Monitoring</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 justify-center lg:justify-start">
                    <CheckCircle2 className="w-4 h-4 text-gray-900 dark:text-gray-100 flex-shrink-0" />
                    <span>Instant alerts</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 justify-center lg:justify-start">
                    <CheckCircle2 className="w-4 h-4 text-gray-900 dark:text-gray-100 flex-shrink-0" />
                    <span>Advanced analytics</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 justify-center lg:justify-start">
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
                      <h3 className="text-sm sm:text-base font-bold text-white">Monitoring Dashboard</h3>
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
                <div className="hidden sm:block absolute -bottom-3 -left-3 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-2 sm:p-3 border border-gray-200 dark:border-gray-700">
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
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 px-4">
                Everything you need
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
                Een compleet platform voor monitoring, files en business management
              </p>
            </div>

            <div className="space-y-12 sm:space-y-14 md:space-y-16">
              {products.map((product, index) => {
                const Icon = product.icon;
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
                              <span className="text-gray-500 text-[10px] sm:text-sm font-medium">{product.name.toLowerCase()}.ipulse.one</span>
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

                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                        {product.name}
                      </h2>

                      <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
                        {product.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-black dark:bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-white dark:text-black" />
                            </div>
                            <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        size="lg"
                        className="bg-white text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors rounded-lg group w-full sm:w-auto"
                      >
                        Learn more about {product.name}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* All Features Section - Comprehensive Overview */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 ">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <Badge variant="outline" className="mb-3 sm:mb-4 border-gray-300 dark:border-gray-700 text-xs sm:text-sm">
                Krachtige Features
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
                Alles wat je bedrijf nodig heeft,{" "}
                <span className="bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-400 dark:to-gray-500 bg-clip-text text-transparent">
                  geïntegreerd in één platform
                </span>
              </h2>
              <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
                Ontdek de meest gebruikte features die teams helpen om efficiënter te werken
              </p>
            </div>

            {/* Feature Categories - Tab Style */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-2">
              <button
                onClick={() => setActiveTab('guard')}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all ${
                  activeTab === 'guard'
                    ? 'bg-white text-black shadow-lg scale-105'
                    : 'bg-white dark:bg-black text-white border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white'
                }`}
              >
                <Monitor className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">PulseGuard</span>
                <span className="xs:hidden">Guard</span>
              </button>
              <button
                onClick={() => setActiveTab('files')}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all ${
                  activeTab === 'files'
                    ? 'bg-white text-black shadow-lg scale-105'
                    : 'bg-white dark:bg-black text-white border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white'
                }`}
              >
                <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">PulseFiles</span>
                <span className="xs:hidden">Files</span>
              </button>
              <button
                onClick={() => setActiveTab('flow')}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all ${
                  activeTab === 'flow'
                    ? 'bg-white text-black shadow-lg scale-105'
                    : 'bg-white dark:bg-black text-white border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white'
                }`}
              >
                <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">PulseFlow</span>
                <span className="xs:hidden">Flow</span>
              </button>
            </div>

            </div>

            {/* Highlighted Features Grid - Dynamic based on tab */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-14 md:mb-16">
              {activeTab === 'guard' && (
                <>
                  {/* Hero Feature - 24/7 Monitoring */}
                  <div className="lg:col-span-2 group relative bg-gradient-to-br from-black to-gray-900 dark:from-white dark:to-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-medium text-white dark:text-black mb-3 sm:mb-4">
                        <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        Meest gebruikt
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white dark:text-black mb-2 sm:mb-3">
                        24/7 Uptime Monitoring
                      </h3>
                      <p className="text-white/80 dark:text-black/70 text-sm sm:text-base mb-4 sm:mb-6 max-w-xl">
                        Continue monitoring van al je websites en servers vanuit 15+ locaties wereldwijd. 
                        Krijg direct alerts bij downtime en hou je uptime percentage altijd in de gaten.
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ Multi-locatie checks
                        </span>
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ 30-sec intervals
                        </span>
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ Instant alerts
                        </span>
                      </div>
                    </div>
                    <div className="absolute -right-8 -bottom-8 opacity-10 dark:opacity-5">
                      <Activity className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" />
                    </div>
                  </div>

                  {/* SSL Certificate Monitoring */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-black" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">SSL Certificate Check</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Automatische controle van SSL certificaten met waarschuwingen voordat ze verlopen.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      Auto-renewal reminders
                    </div>
                  </div>

                  {/* Performance Analytics */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-black" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">Advanced Analytics</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Gedetailleerde analytics over response times, uptime en performance trends.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                      Real-time insights
                    </div>
                  </div>

                  {/* Smart Alerts */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-black" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">Multi-channel Alerts</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Ontvang notificaties via email, SMS, Slack, Discord, Teams of webhooks.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                      Instant notifications
                    </div>
                  </div>

                  {/* Status Pages */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Globe2 className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-black" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">Custom Status Pages</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Branded status pagina's voor transparante communicatie met klanten.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Globe2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      Public status pages
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'files' && (
                <>
                  {/* Hero Feature - File Encryption */}
                  <div className="lg:col-span-2 group relative bg-gradient-to-br from-black to-gray-900 dark:from-white dark:to-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-medium text-white dark:text-black mb-3 sm:mb-4">
                        <Shield className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        Maximum Security
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white dark:text-black mb-2 sm:mb-3">
                        End-to-End Encryptie
                      </h3>
                      <p className="text-white/80 dark:text-black/70 text-sm sm:text-base mb-4 sm:mb-6 max-w-xl">
                        Militaire-grade 256-bit AES encryptie voor maximale beveiliging van al je bestanden. 
                        Jouw data is altijd veilig, zowel tijdens upload als opslag.
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ 256-bit AES
                        </span>
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ Zero-knowledge
                        </span>
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ GDPR compliant
                        </span>
                      </div>
                    </div>
                    <div className="absolute -right-8 -bottom-8 opacity-10 dark:opacity-5">
                      <Shield className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" />
                    </div>
                  </div>

                  {/* Smart Sharing */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-black" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">Smart Sharing</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Veilige deellinks met expiration dates en password protection.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
                      Password protected
                    </div>
                  </div>

                  {/* Real-time Sync */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-black" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">Real-time Sync</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Automatische sync tussen al je apparaten met instant updates.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                      Cross-platform sync
                    </div>
                  </div>

                  {/* Version History */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-black" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">Version History</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Complete versiegeschiedenis met mogelijkheid tot restore.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <Activity className="w-3 h-3 sm:w-4 sm:h-4" />
                      30-day history
                    </div>
                  </div>

                  {/* File Preview */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-black" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">File Preview</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      In-browser preview van 100+ bestandstypes.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                      100+ file types
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'flow' && (
                <>
                  {/* Hero Feature - CRM */}
                  <div className="lg:col-span-2 group relative bg-gradient-to-br from-black to-gray-900 dark:from-white dark:to-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full text-[10px] sm:text-xs font-medium text-white dark:text-black mb-3 sm:mb-4">
                        <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        Business Growth
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white dark:text-black mb-2 sm:mb-3">
                        Complete CRM & ERP Suite
                      </h3>
                      <p className="text-white/80 dark:text-black/70 text-sm sm:text-base mb-4 sm:mb-6 max-w-xl">
                        Beheer al je klanten, projecten en facturatie vanuit één centrale plek. 
                        Automatiseer je workflow en laat je bedrijf groeien.
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ Contact management
                        </span>
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ Project tracking
                        </span>
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg text-xs sm:text-sm text-white dark:text-black">
                          ✓ Invoicing
                        </span>
                      </div>
                    </div>
                    <div className="absolute -right-8 -bottom-8 opacity-10 dark:opacity-5">
                      <Building2 className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" />
                    </div>
                  </div>

                  {/* Sales Pipeline */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-black" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">Sales Pipeline</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Visuele sales pipeline met drag-and-drop voor deal tracking.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                      Visual deal tracking
                    </div>
                  </div>

                  {/* Project Management */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-black" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">Project Management</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Taken en deadlines managen met team collaboration tools.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                      Task management
                    </div>
                  </div>

                  {/* Invoicing */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-black" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">Facturatie</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Professionele facturen maken en automatisch versturen.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                      Auto invoicing
                    </div>
                  </div>

                  {/* Business Reports */}
                  <div className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                      <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white dark:text-black" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">Business Reports</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      Uitgebreide rapportages over sales en revenue.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400">
                      <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4" />
                      Advanced analytics
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Additional Features - Compact Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-14 md:mb-16">
              <div className="p-3 sm:p-4 bg-gray-50 dark:bg-black rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                <Globe2 className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-1.5 sm:mb-2" />
                <h5 className="font-semibold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Custom Status Pages</h5>
                <p className="text-[10px] sm:text-xs text-gray-400">Branded status pagina's</p>
              </div>

              <div className="p-3 sm:p-4 bg-gray-50 dark:bg-black rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-1.5 sm:mb-2" />
                <h5 className="font-semibold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Team Collaboration</h5>
                <p className="text-[10px] sm:text-xs text-gray-400">Real-time samenwerken</p>
              </div>

              <div className="p-3 sm:p-4 bg-gray-50 dark:bg-black rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-1.5 sm:mb-2" />
                <h5 className="font-semibold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">File Preview</h5>
                <p className="text-[10px] sm:text-xs text-gray-400">100+ bestandstypes</p>
              </div>

              <div className="p-3 sm:p-4 bg-gray-50 dark:bg-black rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-1.5 sm:mb-2" />
                <h5 className="font-semibold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Real-time Sync</h5>
                <p className="text-[10px] sm:text-xs text-gray-400">Cross-device sync</p>
              </div>

              <div className="p-3 sm:p-4 bg-gray-50 dark:bg-black rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-1.5 sm:mb-2" />
                <h5 className="font-semibold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Version History</h5>
                <p className="text-[10px] sm:text-xs text-gray-400">Complete versie-tracking</p>
              </div>

              <div className="p-3 sm:p-4 bg-gray-50 dark:bg-black rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-1.5 sm:mb-2" />
                <h5 className="font-semibold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Access Control</h5>
                <p className="text-[10px] sm:text-xs text-gray-400">Granulaire permissies</p>
              </div>

              <div className="p-3 sm:p-4 bg-gray-50 dark:bg-black rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-1.5 sm:mb-2" />
                <h5 className="font-semibold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Sales Pipeline</h5>
                <p className="text-[10px] sm:text-xs text-gray-400">Visual deal tracking</p>
              </div>

              <div className="p-3 sm:p-4 bg-gray-50 dark:bg-black rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-1.5 sm:mb-2" />
                <h5 className="font-semibold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Project Management</h5>
                <p className="text-[10px] sm:text-xs text-gray-400">Task & deadline tracking</p>
              </div>

              <div className="p-3 sm:p-4 bg-gray-50 dark:bg-black rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                <Gauge className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-1.5 sm:mb-2" />
                <h5 className="font-semibold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Performance Metrics</h5>
                <p className="text-[10px] sm:text-xs text-gray-400">Detailed load times</p>
              </div>

              <div className="p-3 sm:p-4 bg-gray-50 dark:bg-black rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-1.5 sm:mb-2" />
                <h5 className="font-semibold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Smart Sharing</h5>
                <p className="text-[10px] sm:text-xs text-gray-400">Veilige deellinks</p>
              </div>

              <div className="p-3 sm:p-4 bg-gray-50 dark:bg-black rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-1.5 sm:mb-2" />
                <h5 className="font-semibold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Contact Management</h5>
                <p className="text-[10px] sm:text-xs text-gray-400">Centraal klantoverzicht</p>
              </div>

              <div className="p-3 sm:p-4 bg-gray-50 dark:bg-black rounded-lg sm:rounded-xl border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-1.5 sm:mb-2" />
                <h5 className="font-semibold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Invoicing</h5>
                <p className="text-[10px] sm:text-xs text-gray-400">Automatische facturatie</p>
              </div>
            </div>


            {/* Trust Badges */}
            <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 opacity-60 px-4">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span className="text-xs sm:text-sm font-medium text-white">ISO 27001</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span className="text-xs sm:text-sm font-medium text-white">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span className="text-xs sm:text-sm font-medium text-white">99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Globe2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <span className="text-xs sm:text-sm font-medium text-white">15+ Regio's</span>
              </div>
            </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-4  relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 dark:via-gray-900/20 to-transparent pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-gray-300 dark:border-gray-700">
                <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                Testimonials
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Vertrouwd door{" "}
                <span className="bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-400 dark:to-gray-500 bg-clip-text text-transparent">
                  150+ teams
                </span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Ontdek waarom bedrijven kiezen voor iPulse
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white dark:bg-black/40 backdrop-blur-md rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Quote icon decoration */}
                  <div className="absolute top-6 right-6 opacity-10 dark:opacity-5">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <div className="relative">
                    {/* Star rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-base text-gray-300 mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t-2 border-gray-100 dark:border-gray-800">
                      <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 dark:from-white dark:to-gray-200 rounded-full flex items-center justify-center text-white dark:text-black text-lg font-bold shadow-md">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-base font-bold text-white">{testimonial.author}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="mt-16 pt-12 border-t-2 border-gray-200 dark:border-gray-800">
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">150+</div>
                  <div className="text-sm text-gray-400">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">5.0</div>
                  <div className="text-sm text-gray-400 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    Average Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-24 px-4">
          <div className="relative max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-gray-200 dark:border-gray-800">
              <Sparkles className="w-4 h-4" />
              Start vandaag nog
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Klaar om te{" "}
              <span className="relative inline-block">
                beginnen?
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C70 2.5 130 2.5 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-50" />
                </svg>
              </span>
            </h2>

            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Sluit je aan bij <span className="font-bold">150+ teams</span> die hun infrastructuur monitoren met iPulse.
              Start je <span className="font-bold">gratis trial</span> vandaag.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 rounded-xl px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all hover:scale-105 group"
              >
                Start gratis trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-8 py-6 text-lg font-semibold border-2 border-gray-300 dark:border-gray-700 text-white hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105"
              >
                Bekijk prijzen
              </Button>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm mb-12 text-white/80">
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
                <span className="font-medium">Altijd opzegbaar</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pt-12 border-t border-gray-200 dark:border-gray-800">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">99.9%</div>
                <div className="text-sm text-white/70">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">&lt;2s</div>
                <div className="text-sm text-white/70">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">150+</div>
                <div className="text-sm text-white/70">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm text-white/70">Support</div>
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
