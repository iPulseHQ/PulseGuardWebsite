"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { QrCode, Zap, BarChart3, Shield, Cloud, CheckCircle2, Link2, FileText, Wifi, ArrowRight, Lock, Sparkles, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

export default function PulseQRPage() {
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
      title: t("pulseQRInstant"),
      description: t("pulseQRInstantDesc"),
    },
    {
      icon: Shield,
      title: t("pulseQRPrivacy"),
      description: t("pulseQRPrivacyDesc"),
    },
    {
      icon: Cloud,
      title: t("pulseQRCloudSync"),
      description: t("pulseQRCloudSyncDesc"),
    },
    {
      icon: BarChart3,
      title: t("pulseQRAnalytics"),
      description: t("pulseQRAnalyticsDesc"),
    },
    {
      icon: Lock,
      title: t("pulseQRPincode"),
      description: t("pulseQRPincodeDesc"),
    },
    {
      icon: Link2,
      title: t("pulseQRDynamic"),
      description: t("pulseQRDynamicDesc"),
    },
  ];

  const qrTypes = [
    {
      icon: Link2,
      title: t("pulseQRLinks"),
      description: t("pulseQRLinksDesc"),
    },
    {
      icon: FileText,
      title: t("pulseQRText"),
      description: t("pulseQRTextDesc"),
    },
    {
      icon: Wifi,
      title: t("pulseQRWifi"),
      description: t("pulseQRWifiDesc"),
    },
  ];

  const benefits = [
    t("pulseQRBenefit1"),
    t("pulseQRBenefit2"),
    t("pulseQRBenefit3"),
    t("pulseQRBenefit4"),
    t("pulseQRBenefit5"),
    t("pulseQRBenefit6"),
  ];

  const dynamicBenefits = [
    t("pulseQRDynamicBenefit1"),
    t("pulseQRDynamicBenefit2"),
    t("pulseQRDynamicBenefit3"),
    t("pulseQRDynamicBenefit4"),
    t("pulseQRDynamicBenefit5"),
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

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
              {t("pulseQRBadge")}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {t("pulseQRTitle")}
              <br />
              <span className="text-gradient">{t("pulseQRAccent")}</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("pulseQRHeroDesc")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href="https://qr.ipulse.one"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-8 bg-primary text-primary-foreground text-base font-semibold rounded-md hover:opacity-90 transition-all shadow-lg inline-flex items-center justify-center gap-2"
              >
                {t("pulseQRCreateFree")}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://qr.ipulse.one/sign-in"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-8 border border-border/50 text-base font-semibold rounded-md hover:bg-muted transition-all inline-flex items-center justify-center"
              >
                {t("pulseQRSignIn")}
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {t("pulseQRNoAccount")}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {t("pulseQRFree")}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {t("pulseQRPrivacyFirst")}
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* QR Types Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-md bg-muted border border-border/50 text-sm font-medium mb-4">
              {t("pulseQRTypes")}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("pulseQRTypesTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("pulseQRTypesDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {qrTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glassmorphism rounded-xl p-8 border border-border/50 hover:shadow-lg transition-all group"
              >
                <div className="h-14 w-14 rounded-md bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <type.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                <p className="text-muted-foreground">{type.description}</p>
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
              {t("pulseQRFeatures")}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("pulseQRFeaturesTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("pulseQRFeaturesDesc")}
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
                {t("pulseQRWhyTitle")}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                {t("pulseQRWhySubtitle")}
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
                    <QrCode className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">∞</div>
                    <div className="text-sm text-muted-foreground">{t("pulseQRUnlimited")}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-md bg-green-500/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-muted-foreground">{t("pulseQRPrivacyFirst")}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-md bg-blue-500/10 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{t("pulseQRRealTime")}</div>
                    <div className="text-sm text-muted-foreground">{t("pulseQRAnalyticsTracking")}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dynamic QR Codes Feature Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-2xl p-8 border border-border/50"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <RefreshCw className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">{t("pulseQRDynamic")}</h3>
                <p className="text-muted-foreground">
                  {t("pulseQRDynamicDesc")}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                {t("pulseQRDynamicFeatureTitle")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t("pulseQRDynamicFeatureDesc")}
              </p>
              <ul className="space-y-4">
                {dynamicBenefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-xl p-12 text-center border border-border/50 shadow-xl bg-gradient-to-br from-primary/10 via-primary/5 to-background"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/20">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("pulseQRCTATitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("pulseQRCTADesc")}
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mb-8 text-sm max-w-lg mx-auto">
              <div className="flex items-center gap-2 text-muted-foreground justify-center">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {t("pulseQRNoRegistration")}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground justify-center">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {t("pulseQRFree")}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground justify-center">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {t("pulseQRDirectUse")}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://qr.ipulse.one"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-8 bg-primary text-primary-foreground text-base font-semibold rounded-md hover:opacity-90 transition-all shadow-lg inline-flex items-center justify-center gap-2"
              >
                {t("pulseQRStartNow")}
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="https://qr.ipulse.one/sign-in"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-8 border border-border/50 text-base font-semibold rounded-md hover:bg-muted transition-all inline-flex items-center justify-center"
              >
                {t("pulseQRCreateAccount")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
