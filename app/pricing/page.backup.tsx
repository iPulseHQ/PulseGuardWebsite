"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { Check, Star, Crown, Rocket, Zap, X, Tag, FileText, QrCode, Calendar, Gift, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import CTA from "@/components/CTA";
import StructuredData from "@/components/StructuredData";

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

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const freeApps = [
    {
      name: "PulseFiles",
      description: t("pulseFilesDesc"),
      icon: FileText,
      href: "/pulsefiles",
      features: language === "nl"
        ? ["Veilig bestanden delen", "End-to-end encryptie", "Tot 2GB gratis"]
        : ["Secure file sharing", "End-to-end encryption", "Up to 2GB free"],
    },
    {
      name: "PulseQR",
      description: t("pulseQRDesc"),
      icon: QrCode,
      href: "/pulseqr",
      features: language === "nl"
        ? ["Onbeperkte QR-codes", "Geen account nodig", "Dynamische codes"]
        : ["Unlimited QR codes", "No account needed", "Dynamic codes"],
    },
    {
      name: "PulseSync",
      description: t("pulseSyncDesc"),
      icon: Calendar,
      href: "/pulsesync",
      features: language === "nl"
        ? ["Agenda sync", "Geen login voor deelnemers", "Tijdzone support"]
        : ["Calendar sync", "No login for participants", "Timezone support"],
    },
  ];

  const plans: Plan[] = [
    {
      id: "free",
      name: "Free",
      description: language === "nl"
        ? "Perfect om te beginnen"
        : "Perfect to get started",
      price: 0,
      currency: "eur",
      features: [
        language === "nl" ? "2 domeinen" : "2 domains",
        language === "nl" ? "1 apparaat monitoring" : "1 device monitoring",
        language === "nl" ? "1 service monitor" : "1 service monitor",
        language === "nl" ? "PulseAI inbegrepen" : "PulseAI included",
        language === "nl" ? "Basis rapporten" : "Basic reports",
      ],
      isContactUs: false,
    },
    {
      id: "standard",
      name: "Standard",
      description: language === "nl"
        ? "Ideaal voor kleine teams"
        : "Ideal for small teams",
      price: 5.99,
      currency: "eur",
      features: [
        language === "nl" ? "5 domeinen (volledig)" : "5 domains (full)",
        language === "nl" ? "2 apparaten (volledig)" : "2 devices (full)",
        language === "nl" ? "3 service monitors" : "3 service monitors",
        language === "nl" ? "E-mail notificaties" : "Email notifications",
        language === "nl" ? "1 status pagina" : "1 status page",
        language === "nl" ? "Toolbox met DNS" : "Toolbox with DNS",
      ],
      isContactUs: false,
    },
    {
      id: "pro",
      name: "Pro",
      description: language === "nl"
        ? "Voor groeiende bedrijven"
        : "For growing businesses",
      price: 12.50,
      currency: "eur",
      features: [
        language === "nl" ? "10 domeinen (volledig)" : "10 domains (full)",
        language === "nl" ? "7 apparaten (volledig)" : "7 devices (full)",
        language === "nl" ? "5 service monitors" : "5 service monitors",
        language === "nl" ? "Meerdere status pagina's" : "Multiple status pages",
        language === "nl" ? "E-mail & Telegram" : "Email & Telegram",
        language === "nl" ? "Volledige toolbox" : "Full toolbox",
        language === "nl" ? "API toegang" : "API access",
      ],
      isContactUs: false,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: language === "nl"
        ? "Volledig configureerbaar"
        : "Fully configurable",
      price: 15.00,
      currency: "eur",
      features: [
        language === "nl" ? "10+ domeinen (€0,50/extra)" : "10+ domains (€0.50/extra)",
        language === "nl" ? "7+ apparaten (€2,00/extra)" : "7+ devices (€2.00/extra)",
        language === "nl" ? "5+ services (€3,00/extra)" : "5+ services (€3.00/extra)",
        language === "nl" ? "Organisatie rollen & MFA" : "Organization roles & MFA",
        language === "nl" ? "Alle notificatie kanalen" : "All notification channels",
        language === "nl" ? "API & integraties" : "API & integrations",
      ],
      isContactUs: false,
    },
  ];

  return (
    <>
      <StructuredData
        type="Product"
        data={{
          name: "iPulse - Website Monitoring & Infrastructure Management",
          description: "Professional monitoring solutions starting from free. Choose the plan that fits your needs.",
          lowPrice: "0",
          highPrice: "15",
          offerCount: "4",
          rating: {
            value: "4.8",
            count: "150"
          }
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="text-center space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted border border-border/50 text-sm font-medium shadow-sm">
                <Tag className="h-4 w-4 text-primary" />
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

        {/* Free Apps Banner */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glassmorphism rounded-2xl border border-green-500/30 bg-gradient-to-r from-green-500/5 via-green-500/10 to-green-500/5 p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/20 border border-green-500/30 text-sm font-semibold text-green-600 dark:text-green-400">
                    <Gift className="h-4 w-4" />
                    {t("pricingFreeAppsTitle")}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 max-w-xs">
                    {t("pricingFreeAppsDescription")}
                  </p>
                </div>

                <div className="flex-grow grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {freeApps.map((app, index) => (
                    <Link
                      key={app.name}
                      href={app.href}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-green-500/50 hover:shadow-lg transition-all"
                    >
                      <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <app.icon className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold truncate">{app.name}</h3>
                          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-500/20 text-green-600 dark:text-green-400 whitespace-nowrap">
                            {t("freeForever")}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{app.description}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-green-500 group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PulseGuard Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/30 text-sm font-semibold text-primary mb-4">
                <Zap className="h-4 w-4" />
                {t("pricingPulseGuardTitle")}
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("pricingPulseGuardDescription")}
              </p>
            </motion.div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {plans.map((plan, index) => {
                const isPopular = plan.id === "pro";
                const isFree = plan.id === "free";

                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className={`relative flex flex-col glassmorphism rounded-2xl border transition-all hover:shadow-xl ${
                      isPopular
                        ? "border-primary ring-2 ring-primary/20 scale-[1.02]"
                        : "border-border/50"
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="bg-primary text-primary-foreground shadow-lg px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current" />
                          {language === "nl" ? "Populair" : "Popular"}
                        </div>
                      </div>
                    )}

                    <div className="p-6 border-b border-border/50">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                          isPopular ? "bg-primary/20" : isFree ? "bg-muted" : "bg-primary/10"
                        }`}>
                          {plan.id === "enterprise" && <Crown className="h-5 w-5 text-yellow-600" />}
                          {plan.id === "pro" && <Star className="h-5 w-5 text-primary" />}
                          {plan.id === "standard" && <Rocket className="h-5 w-5 text-primary" />}
                          {plan.id === "free" && <Zap className="h-5 w-5 text-muted-foreground" />}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{plan.name}</h3>
                          <p className="text-xs text-muted-foreground">{plan.description}</p>
                        </div>
                      </div>

                      <div className="flex items-baseline gap-1">
                        <span className={`text-4xl font-bold ${isFree ? "text-muted-foreground" : isPopular ? "text-primary" : ""}`}>
                          {formatPrice(plan.price, plan.currency)}
                        </span>
                        {plan.price !== null && plan.price !== undefined && (
                          <span className="text-sm text-muted-foreground">
                            {t("perMonth")}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex-grow p-6">
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm">
                            <Check className={`h-4 w-4 flex-shrink-0 mt-0.5 ${isPopular ? "text-primary" : "text-green-600"}`} />
                            <span>{feature}</span>
                          </li>
                        ))}
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
    </>
  );
}
