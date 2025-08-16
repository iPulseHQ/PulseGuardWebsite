"use client";
import Image from "next/image";
import { Shield, Globe, Server, Zap, Bell, BarChart3 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function Guard() {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-background min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-[48px] font-bold text-black dark:text-foreground leading-[52px] tracking-[-1.5px] mb-6">
          PulseGuard
        </h1>
        <p className="text-xl text-gray-600 dark:text-muted-foreground mb-12 max-w-3xl mx-auto">{t('guardHeroSubtitle')}</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="https://app.pulseguard.pro/register" className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">{t('ctaStartTrial')}</a>
          <a href="https://app.pulseguard.pro/login" className="text-black dark:text-foreground font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{t('signInArrow')}</a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-black dark:text-foreground text-center mb-12">{t('guardFeaturesTitle')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Website Monitoring */}
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('featureWebsiteMonitoringTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed mb-4">
              Monitor HTTP/HTTPS endpoints, check response times, and get alerted 
              when your websites go down. Track performance metrics and uptime statistics.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• HTTP/HTTPS monitoring</li>
              <li>• Response time tracking</li>
              <li>• Page resource monitoring</li>
              <li>• Custom intervals (1min - 24h)</li>
            </ul>
          </div>

          {/* SSL Certificate Monitoring */}
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('sslMonitoringTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed mb-4">
              Track SSL certificate expiration dates and get warnings before they expire. 
              Monitor certificate validity and security configurations.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Certificate expiration alerts</li>
              <li>• Security configuration checks</li>
              <li>• Certificate chain validation</li>
              <li>• Automatic renewal reminders</li>
            </ul>
          </div>

          {/* Server Monitoring */}
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Server className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('featureServerMonitoringTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed mb-4">
              Monitor CPU usage, memory consumption, disk space, and network performance. 
              Track running processes and system health metrics.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• CPU & Memory monitoring</li>
              <li>• Disk space tracking</li>
              <li>• Network performance</li>
              <li>• Process monitoring</li>
            </ul>
          </div>

          {/* PulseAI Assistant */}
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('featurePulseAiTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed mb-4">
              AI-powered insights and natural language queries. Get proactive detection 
              of issues and intelligent performance analysis.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Natural language queries</li>
              <li>• Proactive issue detection</li>
              <li>• Performance analysis</li>
              <li>• Intelligent recommendations</li>
            </ul>
          </div>

          {/* Notifications & Alerts */}
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <Bell className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('smartNotificationsTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed mb-4">
              Get instant alerts via email, Telegram, Discord, Slack, and webhooks. 
              Configure custom notification rules and escalation policies.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Email notifications</li>
              <li>• Telegram & Discord</li>
              <li>• Slack integration</li>
              <li>• Custom webhooks</li>
            </ul>
          </div>

          {/* Reports & Analytics */}
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('reportsAnalyticsTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed mb-4">
              Detailed reports and analytics on your infrastructure performance. 
              Track trends, uptime statistics, and historical data.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Uptime statistics</li>
              <li>• Performance trends</li>
              <li>• Historical data</li>
              <li>• Custom dashboards</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#F6F5F4] dark:bg-secondary rounded-xl p-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-black dark:text-foreground mb-4">{t('guardSeeInActionTitle')}</h2>
              <p className="text-xl text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto">{t('guardSeeInActionDesc')}</p>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-[956px] aspect-[956/493] bg-white dark:bg-card rounded-xl border border-black/10 dark:border-border shadow-sm overflow-hidden">
                <Image
                  src="/assets/pulsedashboard.png"
                  alt="PulseGuard Dashboard"
                  width={956}
                  height={493}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-black dark:text-foreground mb-6">{t('guardCtaTitle')}</h2>
        <p className="text-xl text-gray-600 dark:text-muted-foreground mb-8">{t('guardCtaDesc')}</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://app.pulseguard.pro/register" className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">{t('ctaStartTrial')}</a>
          <a href="/pricing" className="text-black dark:text-foreground font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">{t('viewPricing')}</a>
        </div>
      </section>
    </div>
  );
}