"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Shield, Upload, Zap, Globe2, Activity, Check, Star, ArrowRight, Lock, Bell, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import CTA from "@/components/CTA";

export default function Home() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const products = [
    {
      name: t("pulseGuard"),
      description: t("pulseGuardFullDesc"),
      icon: Zap,
      href: "/pulseguard",
      color: "primary",
      features: [
        t("uptimeMonitoring"),
        t("sslMonitoring"),
        t("instantAlerts"),
        t("multiLocation"),
      ],
    },
    {
      name: t("pulseFiles"),
      description: t("pulseFilesFullDesc"),
      icon: Upload,
      href: "/pulsefiles",
      color: "primary",
      features: [
        t("dragDropUpload"),
        t("endToEndEncryption"),
        t("easySharing"),
        t("teamCollaboration"),
      ],
    },
    {
      name: t("pulseQR"),
      description: t("pulseQRFullDesc"),
      icon: QrCode,
      href: "/pulseqr",
      color: "primary",
      features: [
        t("pulseQRInstant"),
        t("pulseQRDynamic"),
        t("pulseQRAnalytics"),
        t("pulseQRPincode"),
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO at TechCorp",
      content: t("testimonial1"),
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "DevOps Engineer",
      content: t("testimonial2"),
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Product Manager",
      content: t("testimonial3"),
      rating: 5,
    },
  ];

  const trustedCompanies = ["IMDigital", "CHE", "ArjanDenHartog", "VanDenBroek Heteren"];

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
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted border border-border/50 text-sm font-medium shadow-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              {t("iPulseEcosystem")}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {t("iPulseHeroTitle")}
              <br />
              <span className="text-gradient">{t("iPulseHeroAccent")}</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("iPulseHeroDesc")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href="#products"
                className="h-10 px-6 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:opacity-90 transition-all shadow-lg inline-flex items-center justify-center"
              >
                {t("exploreSolutions")}
              </a>
              <a
                href="/about"
                className="h-10 px-6 border border-border/50 text-sm font-semibold rounded-md hover:bg-muted transition-all inline-flex items-center justify-center"
              >
                {t("learnMore")}
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                {t("twoProducts")}
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                {t("freeTrial")}
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                {t("enterpriseGrade")}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 px-4 border-y border-border/50 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-semibold text-muted-foreground mb-8 tracking-wide">
            {t("trustedBy")}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {trustedCompanies.map((company) => (
              <div
                key={company}
                className="text-xl font-bold text-muted-foreground hover:text-foreground transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-md bg-muted border border-border/50 text-sm font-medium mb-4">
              {t("ourSolutions")}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("twoProductsOnePlatform")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("twoProductsDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="glassmorphism rounded-2xl p-8 border border-border/50 hover:shadow-2xl transition-all group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`h-14 w-14 rounded-xl bg-${product.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <product.icon className={`h-7 w-7 text-${product.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground">{product.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={product.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  {t("learnMore")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "99.8%", label: t("uptime") },
              { number: "5K+", label: t("monitorsActive") },
              { number: "3+", label: t("countries") },
              { number: "24/6", label: t("support") },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-md bg-muted border border-border/50 text-sm font-medium mb-4">
              {t("whyiPulse")}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("builtForModernTeams")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("builtForModernTeamsDesc")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: t("enterpriseSecurity"),
                description: t("enterpriseSecurityDesc"),
              },
              {
                icon: Zap,
                title: t("lightningFast"),
                description: t("lightningFastDesc"),
              },
              {
                icon: Globe2,
                title: t("globalInfrastructure"),
                description: t("globalInfrastructureDesc"),
              },
              {
                icon: Activity,
                title: t("realTimeInsights"),
                description: t("realTimeInsightsDesc"),
              },
              {
                icon: Lock,
                title: t("dataPrivacy"),
                description: t("dataPrivacyDesc"),
              },
              {
                icon: Bell,
                title: t("smartAlerts"),
                description: t("smartAlertsDesc"),
              },
            ].map((feature, i) => (
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

      {/* Testimonials */}
      {/* <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-md bg-card border border-border/50 text-sm font-medium mb-4">
              {t("testimonials")}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {t("testimonialsTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glassmorphism rounded-xl p-6 border border-border/50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm mb-6">{testimonial.content}</p>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
