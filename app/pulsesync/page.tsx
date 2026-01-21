"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { Calendar, Zap, Users, Globe2, Bell, Shield, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import CTA from "@/components/CTA";
import { analytics } from "@/lib/analytics";

export default function PulseSyncPage() {
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
      icon: Zap,
      title: t("pulseSyncFeatureFast"),
      description: t("pulseSyncFeatureFastDesc"),
    },
    {
      icon: Calendar,
      title: t("pulseSyncFeatureSync"),
      description: t("pulseSyncFeatureSyncDesc"),
    },
    {
      icon: Users,
      title: t("pulseSyncFeatureShare"),
      description: t("pulseSyncFeatureShareDesc"),
    },
    {
      icon: Globe2,
      title: t("pulseSyncFeatureTimezones"),
      description: t("pulseSyncFeatureTimezonesDesc"),
    },
    {
      icon: Bell,
      title: t("pulseSyncFeatureNotifications"),
      description: t("pulseSyncFeatureNotificationsDesc"),
    },
    {
      icon: Shield,
      title: t("pulseSyncFeaturePrivacy"),
      description: t("pulseSyncFeaturePrivacyDesc"),
    },
  ];

  const howItWorks = [
    {
      number: "1",
      title: t("pulseSyncStep1Title"),
      description: t("pulseSyncStep1Desc"),
    },
    {
      number: "2",
      title: t("pulseSyncStep2Title"),
      description: t("pulseSyncStep2Desc"),
    },
    {
      number: "3",
      title: t("pulseSyncStep3Title"),
      description: t("pulseSyncStep3Desc"),
    },
  ];

  const benefits = [
    t("pulseSyncBenefit1"),
    t("pulseSyncBenefit2"),
    t("pulseSyncBenefit3"),
    t("pulseSyncBenefit4"),
    t("pulseSyncBenefit5"),
    t("pulseSyncBenefit6"),
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-sm font-medium shadow-sm">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              {t("pulseSyncBadge")}
            </div>

            <div className="flex justify-center mb-8">
              <Image
                src="https://sync.ipulse.one/_next/image?url=%2Fapple-touch-icon.png&w=64&q=75&dpl=dpl_7N4XDALPwCLwEh9ZSD4PQUTEW8KG"
                alt="PulseSync Logo"
                width={64}
                height={64}
                className="rounded-xl"
              />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {t("pulseSyncTitle")}
              <br />
              <span className="text-gradient">{t("pulseSyncAccent")}</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("pulseSyncHeroDesc")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href="https://sync.ipulse.one"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-8 bg-white text-black text-base font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 inline-flex items-center justify-center gap-2"
                onClick={() => analytics.trackCTAClick("get_started", "pulsesync_hero")}
              >
                {t("pulseSyncGetStarted")}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://sync.ipulse.one/sign-in"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-8 border border-white/50 text-foreground hover:text-white hover:border-white hover:bg-white/5 text-base font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center"
                onClick={() => analytics.trackLogin("pulsesync_hero")}
              >
                {t("login")}
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {t("pulseSyncAutoSync")}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {t("pulseSyncNoLogin")}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {t("pulseSyncFastScheduling")}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-md bg-muted border border-border/50 text-sm font-medium mb-4">
              {t("pulseSyncHowTitle")}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("pulseSyncHowSubtitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("pulseSyncHowDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glassmorphism rounded-xl p-8 border border-border/50 hover:shadow-lg transition-all group text-center"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-md bg-card border border-border/50 text-sm font-medium mb-4">
              {t("pulseSyncFeatures")}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("pulseSyncFeaturesTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("pulseSyncFeaturesDesc")}
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 rounded-md bg-muted border border-border/50 text-sm font-medium mb-4">
                {t("pulseSyncBenefitsTitle")}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                {t("pulseSyncBenefitsSubtitle")}
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
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
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{t("pulseSyncAutoSync")}</div>
                    <div className="text-sm text-muted-foreground">{t("pulseSyncFeatureSyncDesc")}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-md bg-green-500/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{t("pulseSyncNoLogin")}</div>
                    <div className="text-sm text-muted-foreground">{t("pulseSyncFeatureShareDesc")}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-md bg-blue-500/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{t("pulseSyncFastScheduling")}</div>
                    <div className="text-sm text-muted-foreground">{t("pulseSyncFeatureFastDesc")}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer branding */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl font-bold mb-2">{t("pulseSyncFooter")}</p>
          <p className="text-muted-foreground">{t("pulseSyncFooterBy")}</p>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
