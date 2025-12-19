"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { Bell, Globe2, Activity, Zap, Lock, BarChart3, Clock, Check, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import PulseGuardDashboardMockup from "@/components/PulseGuardDashboardMockup";
import FeatureShowcase from "@/components/FeatureShowcase";

// Note: Metadata is handled in layout.tsx for this page
// Consider creating a separate metadata export if this becomes a server component

export default function PulseGuardPage() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: Activity,
      title: t("uptimeMonitoring"),
      description: t("uptimeMonitoringDesc"),
    },
    {
      icon: Lock,
      title: t("sslMonitoring"),
      description: t("sslMonitoringDesc"),
    },
    {
      icon: Bell,
      title: t("instantAlerts"),
      description: t("instantAlertsDesc"),
    },
    {
      icon: Globe2,
      title: t("multiLocation"),
      description: t("multiLocationDesc"),
    },
    {
      icon: BarChart3,
      title: t("detailedReports"),
      description: t("detailedReportsDesc"),
    },
    {
      icon: Zap,
      title: t("fastChecks"),
      description: t("fastChecksDesc"),
    },
  ];

  const benefits = [
    t("benefit1"),
    t("benefit2"),
    t("benefit3"),
    t("benefit4"),
    t("benefit5"),
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-sm font-medium shadow-sm">
              <Zap className="h-4 w-4 text-primary" />
              {t("pulseGuard")}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {t("pulseGuardTitle")}
              <br />
              <span className="text-gradient">{t("pulseGuardAccent")}</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("pulseGuardHeroDesc")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href="https://guard.ipulse.one/sign-in"
                className="h-10 px-6 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 inline-flex items-center justify-center"
              >
                {t("startFreeTrial")}
              </a>
              <a
                href="#dashboard-preview"
                className="h-10 px-6 border border-white/50 text-foreground hover:text-white hover:border-white hover:bg-white/5 text-sm font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center"
              >
                {t("viewDemo")}
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                {t("noCreditCard")}
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                {t("freeTrial")}
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                {t("cancelAnytime")}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Mockup */}
      <section id="dashboard-preview" className="py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <PulseGuardDashboardMockup />
          </motion.div>
        </div>
      </section>

      {/* Feature Showcase - Notion Style */}
      <FeatureShowcase />

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-md bg-card border border-border/50 text-sm font-medium mb-4">
              {t("features")}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("everythingYouNeed")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("comprehensiveMonitoring")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glassmorphism rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all"
              >
                <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 rounded-md bg-muted border border-border/50 text-sm font-medium mb-4">
                {t("whyPulseGuard")}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                {t("stayAhead")}
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-2xl p-8 border border-border/50"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-md bg-emerald-500/10 flex items-center justify-center">
                    <Activity className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm text-muted-foreground">{t("uptime")}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-md bg-blue-500/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">30s</div>
                    <div className="text-sm text-muted-foreground">{t("checkInterval")}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-md bg-purple-500/10 flex items-center justify-center">
                    <Globe2 className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm text-muted-foreground">{t("locations")}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1 rounded-md bg-card border border-border/50 text-sm font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("faqPulseGuardTitle")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("faqPulseGuardSubtitle")}
            </p>
          </motion.div>

          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map((num, index) => (
              <motion.details
                key={num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group glassmorphism rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-lg">
                  <span>{t(`faqPulseGuard${num}Q` as keyof typeof translations.en)}</span>
                  <div className="ml-4 flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-primary transition-transform group-open:rotate-90" />
                  </div>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {t(`faqPulseGuard${num}A` as keyof typeof translations.en)}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-xl p-12 text-center border border-border/50 shadow-xl"
          >
            <div className="h-16 w-16 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("readyToStart")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("readyToStartDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://guard.ipulse.one/sign-in"
                className="h-10 px-6 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 inline-flex items-center justify-center gap-2"
              >
                {t("getStarted")}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/pricing"
                className="h-10 px-6 border border-white/50 text-foreground hover:text-white hover:border-white hover:bg-white/5 text-sm font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center"
              >
                {t("viewPricing")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
