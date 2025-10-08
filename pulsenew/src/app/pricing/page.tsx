"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight, Sparkles, Zap, Star, Crown, Rocket } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function Pricing() {
  const { t } = useTranslation();

  const plans = [
    {
      id: "free",
      name: "Free",
      description: "2 domeinen (without page resources), 1 device monitoring, 1 service monitor, PulseAI included, Reports without email",
      price: 0,
      originalPrice: null,
      period: "maand",
      features: [
        "2 domeinen (without page resources)",
        "1 device monitoring",
        "1 service monitor",
        "PulseAI included",
        "Reports without email",
        "No status pages",
        "No email notifications",
        "No Telegram notifications"
      ],
      cta: "Start Gratis",
      popular: false,
      trial: false
    },
    {
      id: "standard",
      name: "Standard",
      description: "5 domains (full monitoring), 2 devices (full), 3 service monitors, PulseAI included, Full reports with email, 1 status page, Toolbox with DNS, Email notifications",
      price: 5.99,
      originalPrice: null,
      period: "maand",
      features: [
        "5 domains (full monitoring)",
        "2 devices (full)",
        "3 service monitors",
        "PulseAI included",
        "Full reports with email",
        "1 status page",
        "Toolbox with DNS",
        "Email notifications",
        "No Telegram notifications"
      ],
      cta: "Start Nu",
      popular: false,
      trial: true,
      trialDays: 14
    },
    {
      id: "pro",
      name: "Pro",
      description: "10 domains (full monitoring), 7 devices (full), 5 service monitors, PulseAI included, Full reports with email, Multiple status pages, Full toolbox, Email & Telegram notifications, API access",
      price: 12.50,
      originalPrice: null,
      period: "maand",
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
      cta: "Start Nu",
      popular: true,
      trial: true,
      trialDays: 14
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Configure your plan: 10+ Domains, 7+ Devices, 5+ Services, PulseAI included, Organization roles & MFA, API access & integrations, All notification channels, Accessibility features",
      price: 15.00,
      originalPrice: null,
      period: "maand",
      features: [
        "Configure your plan:",
        "Domains: 10 (€0.50 each extra)",
        "Devices: 7 (€2.00 each extra)",
        "Services: 5 (€3.00 each extra)",
        "PulseAI included",
        "Organization roles & MFA",
        "API access & integrations",
        "All notification channels",
        "Accessibility features"
      ],
      cta: "Start Nu",
      popular: false,
      trial: false,
      isEnterprise: false,
      isContactUs: false
    }
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 sm:mb-6 text-xs sm:text-sm">
              <Sparkles className="w-3 h-3 mr-1.5 sm:mr-2" />
              Flexibele Prijzen
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight px-4 sm:px-0">
              Kies het perfecte plan{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                voor jouw organisatie
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              Start gratis of kies een betaald plan. Upgrade, downgrade of annuleer op elk moment.
              Geen verborgen kosten, geen verrassingen.
            </p>
            
            {/* Feature checkmarks */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm md:text-base text-gray-400 px-4">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gray-900 dark:text-gray-100 flex-shrink-0" />
                <span>14 dagen gratis proberen</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gray-900 dark:text-gray-100 flex-shrink-0" />
                <span>Geen creditcard nodig</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gray-900 dark:text-gray-100 flex-shrink-0" />
                <span>Altijd opzegbaar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => {
              const isPopular = plan.id === 'pro';

              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 ${
                    isPopular 
                      ? 'border-black dark:border-white shadow-2xl scale-105' 
                      : 'border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white'
                  } transition-all duration-300 shadow-sm hover:shadow-lg`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-black dark:bg-white text-white dark:text-black font-semibold px-3 sm:px-4 py-1 sm:py-1.5 text-xs shadow-lg">
                        <Star className="h-3 w-3 mr-1 fill-white dark:fill-black" />
                        Meest Populair
                      </Badge>
                    </div>
                  )}

                  <div className="text-center pb-4 sm:pb-6 pt-4 sm:pt-6">
                    <div className="flex items-center justify-center mb-3 sm:mb-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${
                        plan.id === 'enterprise' ? 'bg-yellow-500/10' :
                        'bg-black dark:bg-white'
                      }`}>
                        {plan.id === 'enterprise' && <Crown className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />}
                        {plan.id === 'pro' && <Star className="h-5 w-5 sm:h-6 sm:w-6 text-white dark:text-black" />}
                        {plan.id === 'standard' && <Rocket className="h-5 w-5 sm:h-6 sm:w-6 text-white dark:text-black" />}
                        {plan.id === 'free' && <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-white dark:text-black" />}
                      </div>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{plan.name}</h3>
                    
                    <p className="text-gray-400 text-xs mb-4 sm:mb-6 px-2 leading-relaxed min-h-[60px]">
                      {plan.description}
                    </p>
                    
                    <div className="mb-2">
                      <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                        €{plan.price.toFixed(2).replace('.', ',')}
                      </div>
                      <div className="text-gray-500 text-sm">/maand</div>
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col px-2 sm:px-4 pb-4 sm:pb-6">
                    <ul className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm flex-grow mb-6 sm:mb-8">
                      {plan.features.map((feature, index) => {
                        const hasNegativePrefix = feature.toLowerCase().startsWith('geen ') || 
                                                 feature.toLowerCase().startsWith('niet ');
                        
                        const isNegative = hasNegativePrefix ||
                                         feature.toLowerCase().includes('❌') ||
                                         feature.startsWith('×') ||
                                         feature.startsWith('✗') ||
                                         feature.startsWith('-') ||
                                         (plan.id === 'free' && index >= (plan.features?.length || 0) - 3 && !hasNegativePrefix) ||
                                         (plan.id === 'standard' && index === (plan.features?.length || 0) - 1 && !hasNegativePrefix);
                        
                        const cleanFeature = feature
                          .replace(/^(❌|×|✗|✕|-)\s*/, '')
                          .replace(/\s*(×|✗|✕)\s*$/g, '')
                          .replace(/\s*x\s*$/i, '')
                          .replace(/✕/g, '')
                          .trim();
                        
                        return (
                          <li key={index} className="flex items-start gap-2 sm:gap-3">
                            {isNegative ? (
                              <X className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 flex-shrink-0 mt-0.5" />
                            ) : (
                              <Check className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            )}
                            <span className={`leading-tight ${
                              isNegative ? 'text-gray-500' : 'text-gray-300'
                            }`}>
                              {cleanFeature}
                            </span>
                          </li>
                        )
                      })}
                    </ul>

                    <div className="mt-auto">
                      <Button
                        className={`w-full font-semibold py-5 sm:py-6 rounded-lg group ${
                          isPopular 
                            ? 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200' 
                            : 'bg-transparent border-2 border-gray-700 text-white hover:bg-white/5'
                        }`}
                        size="lg"
                      >
                        {plan.cta}
                        <ArrowRight className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <Badge variant="outline" className="mb-2 sm:mb-3 text-xs sm:text-sm">
              Veelgestelde Vragen
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 px-4">
              Alles wat je moet weten
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              Nog vragen over onze prijzen of functionaliteiten? We hebben de antwoorden.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-5 md:gap-6">
            <div className="bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">
                {t('pricingFaqPaymentTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {t('pricingFaqPaymentDesc')}
              </p>
            </div>

            <div className="bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">
                {t('pricingFaqChangePlanTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {t('pricingFaqChangePlanDesc')}
              </p>
            </div>

            <div className="bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">
                {t('pricingFaqTrialTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {t('pricingFaqTrialDesc')}
              </p>
            </div>

            <div className="bg-white dark:bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-lg">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">
                {t('pricingFaqEnterpriseTitle')}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {t('pricingFaqEnterpriseDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-3 sm:mb-4 text-xs sm:text-sm">
            <Sparkles className="w-3 h-3 mr-1.5" />
            Start vandaag nog
          </Badge>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-4">
            Heb je nog vragen?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-4">
            Ons team staat klaar om je te helpen het juiste plan te kiezen en al je vragen te beantwoorden.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 px-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 rounded-lg group font-semibold px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Neem Contact Op
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="rounded-lg border-2 px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-base sm:text-lg font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Bekijk Demo
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12 pt-8 sm:pt-10 md:pt-12 border-t border-gray-200 dark:border-gray-800">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">99.9%</div>
              <div className="text-xs sm:text-sm text-gray-400">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">&lt;2s</div>
              <div className="text-xs sm:text-sm text-gray-400">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">150+</div>
              <div className="text-xs sm:text-sm text-gray-400">Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
