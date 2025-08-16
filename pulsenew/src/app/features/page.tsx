"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

export default function Features() {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-background min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-[48px] font-bold text-black dark:text-foreground leading-[52px] tracking-[-1.5px] mb-6">
          {t('featuresPageTitle')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-muted-foreground mb-12 max-w-3xl mx-auto">
          {t('featuresPageSubtitle')}
        </p>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Website Monitoring */}
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Image
                src="/assets/uptime-icon.svg"
                alt="Website monitoring"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">Website Monitoring</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{t('featureWebsiteMonitoringDesc')}</p>
          </div>

          {/* SSL Monitoring */}
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Image
                src="/assets/shield.png"
                alt="SSL monitoring"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('featureSslMonitoringTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{t('featureSslMonitoringDesc')}</p>
          </div>

          {/* Server Monitoring */}
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Image
                src="/assets/services.png"
                alt="Server monitoring"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('featureServerMonitoringTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{t('featureServerMonitoringDesc')}</p>
          </div>

          {/* PulseAI Assistant */}
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <Image
                src="/assets/pulseai.png"
                alt="AI assistant"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('featurePulseAiTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{t('featurePulseAiDesc')}</p>
          </div>

          {/* API & Integrations */}
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <Image
                src="/assets/api.png"
                alt="API integration"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('featureApiIntegrationsTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{t('featureApiIntegrationsDesc')}</p>
          </div>

          {/* Status Pages */}
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <Image
                src="/assets/dashboard.png"
                alt="Status pages"
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('featureStatusPagesTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{t('featureStatusPagesDesc')}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F6F5F4] dark:bg-secondary py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black dark:text-foreground mb-6">{t('ctaReadyTitle')}</h2>
          <p className="text-xl text-gray-600 dark:text-muted-foreground mb-8">{t('ctaReadyDesc')}</p>
          <Button className="bg-black text-white px-8 py-3 text-lg rounded-md">
            {t('ctaStartTrial')}
          </Button>
        </div>
      </section>
    </div>
  );
}