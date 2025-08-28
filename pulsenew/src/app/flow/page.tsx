"use client";
import { Users, Calendar, FileText, BarChart3, Mail, Phone, Zap, Headphones } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function PulseFlow() {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-background min-h-screen">
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-[48px] font-bold text-black dark:text-foreground leading-[52px] tracking-[-1.5px] mb-6">
          PulseFlow
        </h1>
        <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 text-yellow-800 px-3 py-1 text-sm font-medium mb-4">
          {t('comingSoonBadge')}
        </div>
        <p className="text-xl text-gray-600 dark:text-muted-foreground mb-12 max-w-3xl mx-auto">{t('crmHeroSubtitle')}</p>
      </section>

      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('customerManagementTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{t('customerManagementDesc')}</p>
          </div>
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('projectPlanningTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{t('projectPlanningDesc')}</p>
          </div>
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('invoiceManagementTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{t('invoiceManagementDesc')}</p>
          </div>
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('businessAnalyticsTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{t('businessAnalyticsDesc')}</p>
          </div>
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('communicationToolsTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{t('communicationToolsDesc')}</p>
          </div>
          <div className="bg-[#f6f5f4] dark:bg-secondary rounded-xl p-8">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-black dark:text-foreground mb-4">{t('integrationReadyTitle')}</h3>
            <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">{t('integrationReadyDesc')}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F5F4] dark:bg-secondary py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black dark:text-foreground text-center mb-12">{t('whyChooseCrmTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">€</div>
              <h3 className="text-xl font-semibold text-black dark:text-foreground mb-3">{t('affordablePricingTitle')}</h3>
              <p className="text-gray-600 dark:text-muted-foreground">{t('affordablePricingDesc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">🇳🇱</div>
              <h3 className="text-xl font-semibold text-black dark:text-foreground mb-3">{t('dutchDataStorageTitle')}</h3>
              <p className="text-gray-600 dark:text-muted-foreground">{t('dutchDataStorageDesc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4"><Zap className="w-8 h-8 text-white" /></div>
              <h3 className="text-xl font-semibold text-black dark:text-foreground mb-3">{t('easySetupTitle')}</h3>
              <p className="text-gray-600 dark:text-muted-foreground">{t('easySetupDesc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4"><Headphones className="w-8 h-8 text-white" /></div>
              <h3 className="text-xl font-semibold text-black dark:text-foreground mb-3">{t('localSupportTitle')}</h3>
              <p className="text-gray-600 dark:text-muted-foreground">{t('localSupportDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-black dark:text-foreground mb-6">{t('beFirstToKnowTitle')}</h2>
        <p className="text-xl text-gray-600 dark:text-muted-foreground mb-8">{t('crmInDevDesc')}</p>
        <div className="text-gray-500 dark:text-muted-foreground text-sm">
          {t('questionsContact')} {" "}
          <a href="mailto:info@pulseguard.nl" className="text-blue-600 hover:text-blue-800">info@pulseguard.nl</a>
        </div>
      </section>
    </div>
  );
}


