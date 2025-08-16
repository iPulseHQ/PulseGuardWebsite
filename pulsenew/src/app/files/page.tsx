"use client";
import { Shield, Clock, Eye, Server, Github } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function PulseFiles() {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-background min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-[48px] font-bold text-black dark:text-foreground leading-[52px] tracking-[-1.5px] mb-6">
          PulseFiles
        </h1>
        <p className="text-xl text-gray-600 dark:text-muted-foreground mb-12 max-w-3xl mx-auto">{t('pulseFilesHeroSubtitle2')}</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="https://files.pulseguard.pro/signup" className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
            {t('getStartedCta2')}
          </a>
          <a href="https://files.pulseguard.pro/login" className="text-black dark:text-foreground font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            {t('signInArrow')}
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AES-256 Encryption */}
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('aes256Title')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{t('aes256Desc')}</p>
          </div>

          {/* Auto-deletion */}
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('autoDeletionTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{t('autoDeletionDesc')}</p>
          </div>

          {/* Zero Knowledge */}
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('zeroKnowledgeStorageTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{t('zeroKnowledgeStorageDesc')}</p>
          </div>

          {/* Dutch Datacenter */}
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Server className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('dutchDatacenterTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{t('dutchDatacenterDesc')}</p>
          </div>

          {/* Open Source */}
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Github className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('openSourceTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{t('openSourceDesc')}</p>
          </div>

          {/* No Tracking */}
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('noTrackingTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{t('noTrackingDesc')}</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-[#F6F5F4] dark:bg-secondary py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black dark:text-foreground text-center mb-12">{t('howPulseFilesWorksTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-foreground mb-3">{t('uploadEncryptTitle')}</h3>
              <p className="text-gray-600 dark:text-muted-foreground">{t('uploadEncryptDesc')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-foreground mb-3">{t('shareLinkTitle')}</h3>
              <p className="text-gray-600 dark:text-muted-foreground">{t('shareLinkDesc')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-foreground mb-3">{t('autoDeleteStepTitle')}</h3>
              <p className="text-gray-600 dark:text-muted-foreground">{t('autoDeleteStepDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-black mb-6">{t('filesCtaTitle')}</h2>
        <p className="text-xl text-gray-600 dark:text-muted-foreground mb-8">{t('filesCtaDesc')}</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://files.pulseguard.pro" className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">{t('visitPulseFiles')}</a>
        </div>
      </section>
    </div>
  );
}