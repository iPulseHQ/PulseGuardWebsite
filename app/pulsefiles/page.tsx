"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { Upload, Lock, Share2, FileText, Zap, Shield, Users, Cloud, Check, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import PulseFilesDashboardMockup from "@/components/PulseFilesDashboardMockup";
import { analytics } from "@/lib/analytics";

export default function PulseFilesPage() {
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
      icon: Upload,
      title: t("dragDropUpload"),
      description: t("dragDropUploadDesc"),
    },
    {
      icon: Lock,
      title: t("endToEndEncryption"),
      description: t("endToEndEncryptionDesc"),
    },
    {
      icon: Share2,
      title: t("easySharing"),
      description: t("easySharingDesc"),
    },
    {
      icon: Cloud,
      title: t("cloudStorage"),
      description: t("cloudStorageDesc"),
    },
    {
      icon: Users,
      title: t("teamCollaboration"),
      description: t("teamCollaborationDesc"),
    },
    {
      icon: Zap,
      title: t("fastTransfer"),
      description: t("fastTransferDesc"),
    },
  ];

  const benefits = [
    t("filesBenefit1"),
    t("filesBenefit2"),
    t("filesBenefit3"),
    t("filesBenefit4"),
    t("filesBenefit5"),
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-sm font-medium shadow-sm">
              <Upload className="h-4 w-4 text-primary" />
              {t("pulseFiles")}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {t("pulseFilesTitle")}
              <br />
              <span className="text-gradient">{t("pulseFilesAccent")}</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("pulseFilesHeroDesc")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href="https://files.ipulse.one/sign-in"
                className="h-10 px-6 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 inline-flex items-center justify-center"
                onClick={() => analytics.trackCTAClick("start_free_trial", "pulsefiles_hero")}
              >
                {t("startFreeTrial")}
              </a>
              <a
                href="#demo"
                className="h-10 px-6 border border-white/50 text-foreground hover:text-white hover:border-white hover:bg-white/5 text-sm font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center"
                onClick={() => analytics.trackButtonClick("view_demo", "pulsefiles_hero")}
              >
                {t("viewDemo")}
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                {t("freeUpTo2GB")}
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                {t("noCreditCard")}
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
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <PulseFilesDashboardMockup />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-md bg-card border border-border/50 text-sm font-medium mb-4">
              {t("features")}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("powerfulFileSharing")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("secureAndFast")}
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
                {t("whyPulseFiles")}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                {t("shareWithConfidence")}
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
                      <Check className="h-4 w-4 text-primary" />
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
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{t("allFileTypes")}</div>
                    <div className="text-sm text-muted-foreground">{t("supported")}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-md bg-emerald-500/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">256-bit</div>
                    <div className="text-sm text-muted-foreground">{t("encryption")}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-md bg-purple-500/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{t("instant")}</div>
                    <div className="text-sm text-muted-foreground">{t("fileSharing")}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-md bg-card border border-border/50 text-sm font-medium mb-4">
              {t("howItWorks")}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("simpleSteps")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "1", title: t("uploadFiles"), icon: Upload },
              { step: "2", title: t("shareLink"), icon: Share2 },
              { step: "3", title: t("trackActivity"), icon: FileText },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary/30 mb-4">
                    {item.step}
                  </div>
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-xl p-12 text-center border border-border/50 shadow-xl"
          >
            <div className="h-16 w-16 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("readyToShare")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("readyToShareDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://files.ipulse.one/sign-in"
                className="h-10 px-6 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 inline-flex items-center justify-center gap-2"
                onClick={() => analytics.trackCTAClick("get_started", "pulsefiles_cta")}
              >
                {t("getStarted")}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/pricing"
                className="h-10 px-6 border border-white/50 text-foreground hover:text-white hover:border-white hover:bg-white/5 text-sm font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center"
                onClick={() => analytics.trackNavigation("/pricing", "view_pricing_pulsefiles")}
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
