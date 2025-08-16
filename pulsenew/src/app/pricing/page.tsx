"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function Pricing() {
  const { t } = useTranslation();
  const [enterpriseConfig, setEnterpriseConfig] = useState({
    domains: 10,
    devices: 7,
    services: 5,
  });
  const [enterprisePrice, setEnterprisePrice] = useState(15);

  useEffect(() => {
    const basePrice = 15;
    const domainCost = (enterpriseConfig.domains - 10) * 0.50;
    const deviceCost = (enterpriseConfig.devices - 7) * 2.00; 
    const serviceCost = (enterpriseConfig.services - 5) * 3.00;

    let calculatedPrice = basePrice;
    if (enterpriseConfig.domains > 10) calculatedPrice += domainCost;
    if (enterpriseConfig.devices > 7) calculatedPrice += deviceCost;
    if (enterpriseConfig.services > 5) calculatedPrice += serviceCost;

    setEnterprisePrice(calculatedPrice);
  }, [enterpriseConfig]);

  const handleSliderChange = (type: 'domains' | 'devices' | 'services', value: string) => {
    setEnterpriseConfig(prev => ({ ...prev, [type]: parseInt(value, 10) }));
  };
  const plans = [
    {
      name: t('freePlan'),
      price: "€0",
      originalPrice: null,
      period: t('forever'),
      features: [
        "2 domains (without page resources)",
        "1 device monitoring",
        "1 service monitor",
        "PulseAI included",
        "Reports without email",
        "❌ No status pages",
        "❌ No email notifications",
        "❌ No Telegram notifications"
      ],
      cta: t('getStartedCta'),
      popular: false,
      trial: false
    },
    {
      name: t('standardPlan'),
      price: "€5.99",
      originalPrice: "€7.50",
      period: t('perMonth'),
      features: [
        "5 domains (full monitoring)",
        "2 devices (full)",
        "3 service monitors",
        "PulseAI included",
        "Full reports with email",
        "1 status page",
        "Toolbox with DNS",
        "Email notifications",
        "❌ No Telegram notifications"
      ],
      cta: t('startTrial14'),
      popular: true,
      trial: true
    },
    {
      name: t('proPlan'),
      price: "€12.50",
      originalPrice: "€15.00",
      period: t('perMonth'),
      features: [
        "10 domains (full monitoring)",
        "7 devices (full)",
        "5 service monitors",
        "PulseAI included",
        "Full reports with email",
        "Multiple status pages",
        "Full toolbox",
        "Email & Telegram notifications",
        "API access"
      ],
      cta: t('startTrial14'),
      popular: false,
      trial: true
    },
    {
      name: t('enterprisePlan'),
      price: `€${enterprisePrice.toFixed(2)}`,
      originalPrice: null,
      period: t('perMonth'),
      features: [
        `${enterpriseConfig.domains} ${t('domainsLabel')} (€0.50 ${t('enterprisePriceExtra')})`,
        `${enterpriseConfig.devices} ${t('devicesLabel')} (€2.00 ${t('enterprisePriceExtra')})`,
        `${enterpriseConfig.services} ${t('servicesLabel')} (€3.00 ${t('enterprisePriceExtra')})`,
        "PulseAI included",
        "Organization roles & MFA",
        "API access & integrations",
        "All notification channels",
        "Accessibility features"
      ],
      cta: t('contactSales'),
      popular: false,
      trial: false,
      isEnterprise: true
    }
  ];

  return (
    <div className="bg-white dark:bg-background min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-[48px] font-bold text-black dark:text-foreground leading-[52px] tracking-[-1.5px] mb-6">
          {t('pricingHeroTitle')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-muted-foreground mb-12 max-w-3xl mx-auto">
          {t('pricingHeroSubtitle')}
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white dark:bg-card rounded-xl border-2 p-8 ${
                plan.popular 
                  ? 'border-black dark:border-foreground shadow-xl scale-105' 
                  : 'border-gray-200 dark:border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                    {t('mostPopular')}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black dark:text-foreground mb-2">{plan.name}</h3>
                <div className="mb-4">
                  {plan.originalPrice && (
                    <div className="text-sm text-gray-500 dark:text-muted-foreground line-through mb-1">
                      {plan.originalPrice} {plan.period}
                    </div>
                  )}
                  <span className="text-4xl font-bold text-black dark:text-foreground">{plan.price}</span>
                  <span className="text-gray-600 dark:text-muted-foreground ml-2">{plan.period}</span>
                  {plan.trial && (
                    <div className="text-sm text-green-600 font-medium mt-1">
                      {t('freeTrialBadge14')}
                    </div>
                  )}
                </div>
              </div>

              {plan.isEnterprise && (
                <div className="mb-8 space-y-6">
                  <h4 className="font-semibold text-gray-800 mb-4">{t('configureYourPlan')}</h4>
                  
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      {t('domainsLabel')}: {enterpriseConfig.domains}
                    </label>
                    <input 
                      type="range" 
                      min="10" 
                      max="100" 
                      value={enterpriseConfig.domains} 
                      onChange={(e) => handleSliderChange('domains', e.target.value)} 
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer hover:bg-gray-300 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      {t('devicesLabel')}: {enterpriseConfig.devices}
                    </label>
                    <input 
                      type="range" 
                      min="7" 
                      max="100" 
                      value={enterpriseConfig.devices} 
                      onChange={(e) => handleSliderChange('devices', e.target.value)} 
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer hover:bg-gray-300 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      {t('servicesLabel')}: {enterpriseConfig.services}
                    </label>
                    <input 
                      type="range" 
                      min="5" 
                      max="100" 
                      value={enterpriseConfig.services} 
                      onChange={(e) => handleSliderChange('services', e.target.value)} 
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer hover:bg-gray-300 transition-colors"
                    />
                  </div>
                </div>
              )}

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    {feature.startsWith('❌') ? (
                      <span className="w-5 h-5 mr-3 flex-shrink-0 text-red-500">✕</span>
                    ) : (
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    )}
                    <span className={`${feature.startsWith('❌') ? 'text-gray-500' : 'text-gray-700 dark:text-muted-foreground'}`}>
                      {feature.replace('❌ ', '')}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-3 ${
                  plan.popular 
                    ? 'bg-black text-white hover:bg-gray-800' 
                    : 'bg-gray-100 dark:bg-input/30 text-black dark:text-foreground hover:bg-gray-200 dark:hover:bg-input/50'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F6F5F4] dark:bg-secondary py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black dark:text-foreground text-center mb-12">{t('pricingFaqTitle')}</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-black dark:text-foreground mb-3">{t('pricingFaqPaymentTitle')}</h3>
              <p className="text-gray-600 dark:text-muted-foreground">{t('pricingFaqPaymentDesc')}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black dark:text-foreground mb-3">{t('pricingFaqChangePlanTitle')}</h3>
              <p className="text-gray-600 dark:text-muted-foreground">{t('pricingFaqChangePlanDesc')}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black dark:text-foreground mb-3">{t('pricingFaqTrialTitle')}</h3>
              <p className="text-gray-600 dark:text-muted-foreground">{t('pricingFaqTrialDesc')}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-black dark:text-foreground mb-3">{t('pricingFaqEnterpriseTitle')}</h3>
              <p className="text-gray-600 dark:text-muted-foreground">{t('pricingFaqEnterpriseDesc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}