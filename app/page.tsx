"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Shield, Upload, Zap, Globe2, Activity, Check, ArrowRight, Lock, Bell, Sparkles, QrCode, Users, Building2, ShoppingCart, Rocket, Mail, Webhook, ChevronDown, UserPlus, Settings, BellRing } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CTA from "@/components/CTA";
import StructuredData from "@/components/StructuredData";
import { analytics } from "@/lib/analytics";

export default function Home() {
  const { t, language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [currentTeamPhoto, setCurrentTeamPhoto] = useState(0);

  const teamPhotos = ["team1.jpeg", "team2.jpeg", "team3.jpeg", "team4.jpeg", "team5.jpeg"];

  useEffect(() => {
    setMounted(true);

    // Rotate team photos every 3 seconds
    const interval = setInterval(() => {
      setCurrentTeamPhoto((prev) => (prev + 1) % teamPhotos.length);
    }, 3000);

    return () => clearInterval(interval);
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
    {
      name: t("pulseSync"),
      description: t("pulseSyncFullDesc"),
      icon: Activity,
      href: "/pulsesync",
      color: "primary",
      features: [
        t("pulseSyncFastScheduling"),
        t("pulseSyncAutoSync"),
        t("pulseSyncNoLogin"),
        t("pulseSyncFeatureTimezones"),
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

  const trustedCompanies = ["IMDigital", "CHE", "Van den Broek Heteren"];

  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData
        type="Organization"
        data={{
          name: "iPulse",
          url: "https://ipulse.one",
          logo: "https://ipulse.one/logofinal.png",
          description: "The ultimate monitoring solution for modern teams. Real-time insights, instant alerts, and complete control over your digital infrastructure.",
          socialLinks: [
            "https://twitter.com/ipulse",
            "https://linkedin.com/company/ipulse"
          ],
          email: "support@ipulse.one"
        }}
      />
      <StructuredData
        type="WebSite"
        data={{
          name: "iPulse",
          url: "https://ipulse.one",
          description: "Monitor Everything. Miss Nothing. The ultimate monitoring solution for modern teams.",
          logo: "https://ipulse.one/logofinal.png"
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          {/* Gradient Mesh */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center space-y-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 text-sm font-medium shadow-lg backdrop-blur-sm"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </div>
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-foreground font-semibold">{t("iPulseEcosystem")}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                {t("iPulseHeroTitle")}
                <br />
                <span className="relative inline-block">
                  <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground animate-gradient bg-[length:200%_auto]">
                    {t("iPulseHeroAccent")}
                  </span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={mounted ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
                  />
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium"
              >
                {t("iPulseHeroDesc")}
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6"
            >
              <a
                href="#products"
                className="group relative h-14 px-10 bg-primary text-primary-foreground text-base font-bold rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-2xl shadow-primary/25 inline-flex items-center justify-center overflow-hidden"
                onClick={() => analytics.trackButtonClick("explore_solutions", "hero")}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t("exploreSolutions")}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-foreground/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/about"
                className="group h-14 px-10 border-2 border-border/50 text-base font-bold rounded-xl hover:border-primary/50 hover:bg-primary/5 active:scale-95 transition-all duration-200 inline-flex items-center justify-center backdrop-blur-sm"
                onClick={() => analytics.trackNavigation("/about", "learn_about_team")}
              >
                <span className="flex items-center gap-2">
                  {language === "nl" ? "Meer over ons team" : "Learn about our team"}
                  <Users className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </span>
              </a>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-wrap justify-center gap-4 text-sm pt-8"
            >
              {[
                { icon: Check, text: t("twoProducts") },
                { icon: Check, text: t("freeTrial") },
                { icon: Check, text: t("enterpriseGrade") }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={mounted ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card/50 border border-border/50 shadow-sm backdrop-blur-sm hover:shadow-md hover:border-primary/30 transition-all group"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-3 w-3 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Floating Cards Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 1 }}
              className="relative pt-20 pb-8"
            >
              <div className="flex justify-center items-center gap-4 flex-wrap">
                {[
                  { icon: Shield, label: "Security", color: "from-blue-500/10 to-cyan-500/10" },
                  { icon: Zap, label: "Performance", color: "from-yellow-500/10 to-orange-500/10" },
                  { icon: Activity, label: "Analytics", color: "from-green-500/10 to-emerald-500/10" },
                  { icon: Globe2, label: "Global", color: "from-purple-500/10 to-pink-500/10" }
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={mounted ? { 
                      opacity: 1, 
                      y: 0,
                      rotate: [0, 2, -2, 0]
                    } : {}}
                    transition={{ 
                      delay: 1 + i * 0.1, 
                      duration: 0.6,
                      rotate: {
                        delay: 1.5 + i * 0.1,
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }
                    }}
                    className={`glassmorphism rounded-2xl p-6 border border-border/50 shadow-xl bg-gradient-to-br ${card.color} hover:scale-105 transition-transform cursor-pointer`}
                  >
                    <card.icon className="h-8 w-8 text-primary mb-2" />
                    <p className="text-sm font-semibold text-foreground">{card.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1, y: [0, 10, 0] } : {}}
          transition={{ 
            opacity: { delay: 1.5, duration: 0.5 },
            y: { delay: 2, duration: 2, repeat: Infinity }
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {language === "nl" ? "Scroll voor meer" : "Scroll for more"}
            </span>
            <ChevronDown className="h-5 w-5 text-primary" />
          </div>
        </motion.div>
      </section>

      {/* Team Photos & Trusted By Combined Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Team Photo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium">
                  <Users className="h-3.5 w-3.5 text-primary" />
                  <span className="font-semibold">{language === "nl" ? "Ons Team" : "Our Team"}</span>
                </div>
                <h2 className="text-xl font-bold tracking-tight">
                  {language === "nl" ? "Maak kennis met het team" : "Meet the team"}
                </h2>
              </div>

              <Link href="/about" className="block group">
                <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden glassmorphism border-2 border-border/50 group-hover:border-primary/50 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
                  <Image
                    src="/teamfotos/team1.jpeg"
                    alt="iPulse Team"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* CTA Text Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center bg-background/95 backdrop-blur-sm rounded-xl px-6 py-4 border border-primary/50 shadow-2xl">
                      <p className="text-sm font-bold text-foreground mb-1">
                        {language === "nl" ? "Leer ons beter kennen" : "Get to know us better"}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-semibold text-xs">
                        <span>{language === "nl" ? "Bekijk ons verhaal" : "View our story"}</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Trusted By */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="mb-8">
                <p className="text-xs font-bold text-muted-foreground tracking-widest uppercase mb-2">
                  {t("trustedBy")}
                </p>
                <h3 className="text-2xl font-bold tracking-tight">
                  {language === "nl" ? "Onze Partners" : "Our Partners"}
                </h3>
              </div>

              <div className="space-y-6">
                {/* IMDigital */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-xl glassmorphism border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all group"
                >
                  <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-white p-2">
                    <Image
                      src="https://imdigital.info/logo.png"
                      alt="IMDigital logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors">IMDigital</p>
                  </div>
                </motion.div>

                {/* CHE */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-xl glassmorphism border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all group"
                >
                  <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-white p-2">
                    <Image
                      src="https://che.nl/images/christelijke-hogeschool-ede-logo.svg"
                      alt="CHE logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors">CHE</p>
                  </div>
                </motion.div>

                {/* Van den Broek Heteren */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-xl glassmorphism border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all group"
                >
                  <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-white p-2">
                    <Image
                      src="https://vandenbroekheteren.nl/wp-content/uploads/2020/08/vandenbroek-logo-header.svg"
                      alt="Van den Broek Heteren logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold text-foreground group-hover:text-primary transition-colors">Van den Broek Heteren</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="glassmorphism rounded-2xl p-6 border border-border/50 hover:shadow-2xl transition-all group flex flex-col h-full"
              >
                <div className="mb-4">
                  <div className={`h-12 w-12 rounded-xl bg-${product.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform mb-4`}>
                    <product.icon className={`h-6 w-6 text-${product.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={product.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all mt-auto"
                  aria-label={`${language === "nl" ? "Meer over" : "Learn more about"} ${product.name}`}
                  onClick={() => analytics.trackProductLinkClick(product.name, "home_products")}
                >
                  {language === "nl" ? `Ontdek ${product.name}` : `Discover ${product.name}`}
                  <ArrowRight className="h-4 w-4" />
                </Link>
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



      {/* Use Cases Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-md bg-muted border border-border/50 text-sm font-medium mb-4">
              {t("useCasesSubtitle")}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("useCasesTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("useCasesDesc")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Rocket,
                title: t("useCaseStartupTitle"),
                description: t("useCaseStartupDesc"),
                color: "from-blue-500/20 to-cyan-500/20",
              },
              {
                icon: Users,
                title: t("useCaseAgencyTitle"),
                description: t("useCaseAgencyDesc"),
                color: "from-purple-500/20 to-pink-500/20",
              },
              {
                icon: Building2,
                title: t("useCaseEnterpriseTitle"),
                description: t("useCaseEnterpriseDesc"),
                color: "from-orange-500/20 to-red-500/20",
              },
              {
                icon: ShoppingCart,
                title: t("useCaseEcommerceTitle"),
                description: t("useCaseEcommerceDesc"),
                color: "from-green-500/20 to-emerald-500/20",
              },
            ].map((useCase, i) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`glassmorphism rounded-2xl p-6 border border-border/50 h-full hover:shadow-xl transition-all bg-gradient-to-br ${useCase.color}`}>
                  <div className="h-12 w-12 rounded-xl bg-background/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <useCase.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-md bg-card border border-border/50 text-sm font-medium mb-4">
              {t("integrationsTitle")}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("integrationsSubtitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("integrationsDesc")}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.4 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-2xl p-6 border border-border/50 flex flex-col items-center justify-center gap-3 hover:shadow-xl hover:border-primary/50 transition-all group"
            >
              <div className="h-12 w-12 flex items-center justify-center">
                <Mail className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm font-semibold">Email</span>
            </motion.div>

            {/* Push Notifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-2xl p-6 border border-border/50 flex flex-col items-center justify-center gap-3 hover:shadow-xl hover:border-primary/50 transition-all group"
            >
              <div className="h-12 w-12 flex items-center justify-center">
                <Bell className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm font-semibold">Push</span>
            </motion.div>

            {/* Telegram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-2xl p-6 border border-border/50 flex flex-col items-center justify-center gap-3 hover:shadow-xl hover:border-primary/50 transition-all group"
            >
              <div className="h-12 w-12 flex items-center justify-center">
                <svg className="h-10 w-10 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="#26A5E4">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <span className="text-sm font-semibold">Telegram</span>
            </motion.div>

            {/* Discord */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-2xl p-6 border border-border/50 flex flex-col items-center justify-center gap-3 hover:shadow-xl hover:border-primary/50 transition-all group"
            >
              <div className="h-12 w-12 flex items-center justify-center">
                <svg className="h-10 w-10 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="#5865F2">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                </svg>
              </div>
              <span className="text-sm font-semibold">Discord</span>
            </motion.div>

            {/* Slack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-2xl p-6 border border-border/50 flex flex-col items-center justify-center gap-3 hover:shadow-xl hover:border-primary/50 transition-all group"
            >
              <div className="h-12 w-12 flex items-center justify-center">
                <svg className="h-10 w-10 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"/>
                  <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"/>
                  <path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"/>
                  <path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                </svg>
              </div>
              <span className="text-sm font-semibold">Slack</span>
            </motion.div>

            {/* Microsoft Teams */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-2xl p-6 border border-border/50 flex flex-col items-center justify-center gap-3 hover:shadow-xl hover:border-primary/50 transition-all group"
            >
              <div className="h-12 w-12 flex items-center justify-center">
                <svg className="h-10 w-10 group-hover:scale-110 transition-transform" viewBox="0 0 2228.833 2073.333">
                  <path fill="#5059C9" d="M1554.637,777.5h575.713c54.391,0,98.483,44.092,98.483,98.483v524.398 c0,199.901-162.051,361.952-361.952,361.952h0c-199.901,0-361.952-162.051-361.952-361.952V875.98 C1505.93,821.589,1500.246,777.5,1554.637,777.5z"/>
                  <circle fill="#5059C9" cx="1943.75" cy="440.583" r="233.25"/>
                  <circle fill="#7B83EB" cx="1218.083" cy="336.917" r="336.917"/>
                  <path fill="#7B83EB" d="M1667.323,777.5H717.01c-53.743,1.33-96.257,45.931-95.01,99.676v598.105 c-7.505,322.519,247.657,590.16,570.167,598.053c322.51-7.893,577.671-275.534,570.167-598.053V877.176 C1763.58,823.431,1721.066,778.83,1667.323,777.5z"/>
                  <path fill="#000000" opacity="0.1" d="M1244,777.5v838.145c-0.258,38.435-23.549,72.964-59.09,87.598 c-11.316,4.787-23.478,7.254-35.765,7.257H667.613c-6.738-17.105-12.958-34.21-18.142-51.833 c-18.144-59.477-27.402-121.307-27.472-183.49V877.02c-1.246-53.659,41.198-98.19,94.855-99.52H1244z"/>
                  <path fill="#000000" opacity="0.2" d="M1192.167,777.5v889.978c0,12.287-2.47,24.449-7.257,35.765 c-14.634,35.541-49.163,58.833-87.598,59.09H691.975c-8.812-17.105-17.105-34.21-24.362-51.833 c-7.257-17.623-12.958-34.21-18.142-51.833c-18.144-59.476-27.402-121.307-27.472-183.49V877.02 c-1.246-53.659,41.198-98.19,94.855-99.52H1192.167z"/>
                  <path fill="#000000" opacity="0.2" d="M1192.167,777.5v786.312c-0.395,52.223-42.632,94.46-94.855,94.855h-447.84 c-18.144-59.476-27.402-121.307-27.472-183.49V877.02c-1.246-53.659,41.198-98.19,94.855-99.52H1192.167z"/>
                  <path fill="#000000" opacity="0.2" d="M1140.333,777.5v786.312c-0.395,52.223-42.632,94.46-94.855,94.855H649.472 c-18.144-59.476-27.402-121.307-27.472-183.49V877.02c-1.246-53.659,41.198-98.19,94.855-99.52H1140.333z"/>
                  <linearGradient id="teams_gradient" gradientUnits="userSpaceOnUse" x1="198.0993" y1="1683.0726" x2="942.2344" y2="394.2611" gradientTransform="matrix(1 0 0 -1 0 2075.3333)">
                    <stop offset="0" style={{stopColor:"#5A62C3"}}/>
                    <stop offset="0.5" style={{stopColor:"#4D55BD"}}/>
                    <stop offset="1" style={{stopColor:"#3940AB"}}/>
                  </linearGradient>
                  <path fill="url(#teams_gradient)" d="M95.01,777.5h950.312c52.473,0,95.01,42.538,95.01,95.01v950.312c0,52.473-42.538,95.01-95.01,95.01 H95.01c-52.473,0-95.01-42.538-95.01-95.01V872.51C0,820.038,42.538,777.5,95.01,777.5z"/>
                  <path fill="#FFFFFF" d="M820.211,1100.5H630.241v517.297H509.211V1100.5H320.122V999.161h500.089V1100.5z"/>
                </svg>
              </div>
              <span className="text-sm font-semibold">Teams</span>
            </motion.div>

            {/* Webhooks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-2xl p-6 border border-border/50 flex flex-col items-center justify-center gap-3 hover:shadow-xl hover:border-primary/50 transition-all group"
            >
              <div className="h-12 w-12 flex items-center justify-center">
                <Webhook className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm font-semibold">Webhooks</span>
            </motion.div>

            {/* MCP / AI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-2xl p-6 border border-border/50 flex flex-col items-center justify-center gap-3 hover:shadow-xl hover:border-primary/50 transition-all group bg-gradient-to-br from-primary/5 to-primary/10"
            >
              <div className="h-12 w-12 flex items-center justify-center">
                <Sparkles className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm font-semibold">MCP (AI)</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes iPulse Special Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-md bg-muted border border-border/50 text-sm font-medium mb-4">
              {t("comparisonSubtitle")}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("comparisonTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("comparisonDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe2,
                title: t("comparisonAllInOne"),
                description: t("comparisonAllInOneDesc"),
              },
              {
                icon: Bell,
                title: t("comparisonMultiChannel"),
                description: t("comparisonMultiChannelDesc"),
              },
              {
                icon: Sparkles,
                title: t("comparisonMCP"),
                description: t("comparisonMCPDesc"),
              },
              {
                icon: Shield,
                title: t("comparisonDutchHosting"),
                description: t("comparisonDutchHostingDesc"),
              },
              {
                icon: Settings,
                title: t("comparisonCustomIntervals"),
                description: t("comparisonCustomIntervalsDesc"),
              },
              {
                icon: Lock,
                title: t("comparisonE2EEncryption"),
                description: t("comparisonE2EEncryptionDesc"),
              },
              {
                icon: QrCode,
                title: t("comparisonQRCodes"),
                description: t("comparisonQRCodesDesc"),
              },
              {
                icon: Zap,
                title: t("comparisonFreeForever"),
                description: t("comparisonFreeForeverDesc"),
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="glassmorphism rounded-2xl p-6 border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all group"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-md bg-card border border-border/50 text-sm font-medium mb-4">
              {t("homeFaqSubtitle")}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {t("homeFaqTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("homeFaqDesc")}
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: t("homeFaq1Q"), a: t("homeFaq1A") },
              { q: t("homeFaq2Q"), a: t("homeFaq2A") },
              { q: t("homeFaq3Q"), a: t("homeFaq3A") },
              { q: t("homeFaq4Q"), a: t("homeFaq4A") },
              { q: t("homeFaq5Q"), a: t("homeFaq5A") },
              { q: t("homeFaq6Q"), a: t("homeFaq6A") },
            ].map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="group glassmorphism rounded-xl border border-border/50 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-semibold hover:bg-muted/50 transition-colors">
                  {faq.q}
                  <ChevronDown className="h-5 w-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-muted-foreground">
                  {faq.a}
                </div>
              </motion.details>
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
    </>
  );
}
