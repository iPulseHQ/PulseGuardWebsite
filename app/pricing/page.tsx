"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { Check, Star, Crown, Rocket, Zap, X } from "lucide-react";
import { useEffect, useState } from "react";
import CTA from "@/components/CTA";

interface Plan {
  id: string;
  name: string;
  description?: string;
  price?: number;
  currency: string;
  features: string[];
  isContactUs: boolean;
  promoPrice?: number;
}

const formatPrice = (price?: number, currency = "eur") => {
  if (price === null || price === undefined) return "Contact Ons";
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(price);
};

export default function PricingPage() {
  const { t, language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const plans: Plan[] = [
    {
      id: "free",
      name: "Free",
      description: language === "nl"
        ? "2 domeinen (zonder page resources), 1 apparaat monitoring, 1 service monitor, PulseAI inbegrepen, Rapporten zonder e-mail"
        : "2 domains (without page resources), 1 device monitoring, 1 service monitor, PulseAI included, Reports without email",
      price: 0,
      currency: "eur",
      features: [
        language === "nl" ? "2 domeinen (zonder page resources)" : "2 domains (without page resources)",
        language === "nl" ? "1 apparaat monitoring" : "1 device monitoring",
        language === "nl" ? "1 service monitor" : "1 service monitor",
        language === "nl" ? "PulseAI inbegrepen" : "PulseAI included",
        language === "nl" ? "Rapporten zonder e-mail" : "Reports without email",
        language === "nl" ? "Geen status pagina's" : "No status pages",
        language === "nl" ? "Geen e-mail notificaties" : "No email notifications",
        language === "nl" ? "Geen Telegram notificaties" : "No Telegram notifications",
      ],
      isContactUs: false,
    },
    {
      id: "standard",
      name: "Standard",
      description: language === "nl"
        ? "5 domeinen (volledige monitoring), 2 apparaten (volledig), 3 service monitors, PulseAI inbegrepen, Volledige rapporten met e-mail, 1 status pagina, Toolbox met DNS, E-mail notificaties"
        : "5 domains (full monitoring), 2 devices (full), 3 service monitors, PulseAI included, Full reports with email, 1 status page, Toolbox with DNS, Email notifications",
      price: 5.99,
      currency: "eur",
      features: [
        language === "nl" ? "5 domeinen (volledige monitoring)" : "5 domains (full monitoring)",
        language === "nl" ? "2 apparaten (volledig)" : "2 devices (full)",
        language === "nl" ? "3 service monitors" : "3 service monitors",
        language === "nl" ? "PulseAI inbegrepen" : "PulseAI included",
        language === "nl" ? "Volledige rapporten met e-mail" : "Full reports with email",
        language === "nl" ? "1 status pagina" : "1 status page",
        language === "nl" ? "Toolbox met DNS" : "Toolbox with DNS",
        language === "nl" ? "E-mail notificaties" : "Email notifications",
        language === "nl" ? "Geen Telegram notificaties" : "No Telegram notifications",
      ],
      isContactUs: false,
    },
    {
      id: "pro",
      name: "Pro",
      description: language === "nl"
        ? "10 domeinen (volledige monitoring), 7 apparaten (volledig), 5 service monitors, PulseAI inbegrepen, Volledige rapporten met e-mail, Meerdere status pagina's, Volledige toolbox, E-mail & Telegram notificaties, API toegang"
        : "10 domains (full monitoring), 7 devices (full), 5 service monitors, PulseAI included, Full reports with email, Multiple status pages, Full toolbox, Email & Telegram notifications, API access",
      price: 12.50,
      currency: "eur",
      features: [
        language === "nl" ? "10 domeinen (volledige monitoring)" : "10 domains (full monitoring)",
        language === "nl" ? "7 apparaten (volledig)" : "7 devices (full)",
        language === "nl" ? "5 service monitors" : "5 service monitors",
        language === "nl" ? "PulseAI inbegrepen" : "PulseAI included",
        language === "nl" ? "Volledige rapporten met e-mail" : "Full reports with email",
        language === "nl" ? "Meerdere status pagina's" : "Multiple status pages",
        language === "nl" ? "Volledige toolbox" : "Full toolbox",
        language === "nl" ? "E-mail & Telegram notificaties" : "Email & Telegram notifications",
        language === "nl" ? "API toegang" : "API access",
      ],
      isContactUs: false,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: language === "nl"
        ? "Configureer je plan: 10+ Domeinen, 7+ Apparaten, 5+ Services, PulseAI inbegrepen, Organisatie rollen & MFA, API toegang & integraties, Alle notificatie kanalen, Toegankelijkheids features"
        : "Configure your plan: 10+ Domains, 7+ Devices, 5+ Services, PulseAI included, Organization roles & MFA, API access & integrations, All notification channels, Accessibility features",
      price: 15.00,
      currency: "eur",
      features: [
        language === "nl" ? "Configureer je plan:" : "Configure your plan:",
        language === "nl" ? "Domeinen: 10 (€0,50 per extra)" : "Domains: 10 (€0.50 each extra)",
        language === "nl" ? "Apparaten: 7 (€2,00 per extra)" : "Devices: 7 (€2.00 each extra)",
        language === "nl" ? "Services: 5 (€3,00 per extra)" : "Services: 5 (€3.00 each extra)",
        language === "nl" ? "PulseAI inbegrepen" : "PulseAI included",
        language === "nl" ? "Organisatie rollen & MFA" : "Organization roles & MFA",
        language === "nl" ? "API toegang & integraties" : "API access & integrations",
        language === "nl" ? "Alle notificatie kanalen" : "All notification channels",
        language === "nl" ? "Toegankelijkheids features" : "Accessibility features",
      ],
      isContactUs: false,
    },
  ];

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
    // Here you would typically redirect to a checkout or contact form
    console.log("Selected plan:", plan);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <div className="inline-block px-4 py-1 rounded-md bg-muted border border-border/50 text-sm font-medium mb-4">
              {t("pricing")}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {t("pricingTitle")}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("pricingDescription")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, index) => {
              const isPopular = plan.id === "pro";

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative flex flex-col glassmorphism rounded-xl border transition-all hover:shadow-xl ${
                    isPopular ? "border-primary ring-2 ring-primary/20" : "border-border/50"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-white dark:bg-white text-black shadow-md px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current" />
                        {language === "nl" ? "Populair" : "Popular"}
                      </div>
                    </div>
                  )}

                  <div className="text-center p-6 border-b border-border/50">
                    <div className="flex items-center justify-center mb-3">
                      {plan.id === "enterprise" && <Crown className="h-6 w-6 text-yellow-600" />}
                      {plan.id === "pro" && <Star className="h-6 w-6 text-primary" />}
                      {plan.id === "standard" && <Rocket className="h-6 w-6 text-primary" />}
                      {plan.id === "free" && <Zap className="h-6 w-6 text-primary" />}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold">
                      {plan.promoPrice ? (
                        <div>
                          <span className="line-through text-xl text-muted-foreground">
                            {formatPrice(plan.price, plan.currency)}
                          </span>
                          <div className="text-primary">
                            {formatPrice(plan.promoPrice, plan.currency)}
                          </div>
                        </div>
                      ) : (
                        <span className={plan.price === 0 ? "text-primary" : ""}>
                          {formatPrice(plan.price, plan.currency)}
                        </span>
                      )}
                      {plan.price !== null && plan.price !== undefined && (
                        <span className="text-sm font-normal text-muted-foreground">
                          {t("perMonth")}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col p-6">
                    <ul className="space-y-3 text-sm flex-grow mb-6">
                      {plan.features.map((feature, featureIndex) => {
                        const hasNegativePrefix =
                          feature.toLowerCase().startsWith("geen ") ||
                          feature.toLowerCase().startsWith("niet ") ||
                          feature.toLowerCase().startsWith("no ");

                        const isNegative =
                          hasNegativePrefix ||
                          feature.toLowerCase().includes("❌") ||
                          feature.startsWith("×") ||
                          feature.startsWith("✗") ||
                          feature.startsWith("-");

                        const cleanFeature = feature
                          .replace(/^(❌|×|✗|✕|-)\s*/, "")
                          .replace(/\s*(×|✗|✕)\s*$/g, "")
                          .trim();

                        return (
                          <li key={featureIndex} className="flex items-start gap-2">
                            {isNegative ? (
                              <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                            ) : (
                              <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            )}
                            <span className={isNegative ? "text-muted-foreground line-through" : ""}>
                              {cleanFeature}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
