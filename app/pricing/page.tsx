"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import {
  FileText,
  Users,
  Send,
  Calculator,
  Gift,
  ArrowRight,
  QrCode,
  Calendar,
  Check
} from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

interface QuoteFormData {
  requirements: string;
  companyName: string;
  email: string;
  message: string;
}

export default function PricingPage() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState<QuoteFormData>({
    requirements: "",
    companyName: "",
    email: "",
    message: "",
  });

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
      description: language === "nl"
        ? "Veilig bestanden delen met end-to-end encryptie"
        : "Secure file sharing with end-to-end encryption",
      icon: FileText,
      href: "/pulsefiles",
      features: language === "nl"
        ? ["Veilig bestanden delen", "End-to-end encryptie", "Tot 2GB gratis"]
        : ["Secure file sharing", "End-to-end encryption", "Up to 2GB free"],
    },
    {
      name: "PulseQR",
      description: language === "nl"
        ? "Genereer onbeperkt QR-codes zonder account"
        : "Generate unlimited QR codes without an account",
      icon: QrCode,
      href: "/pulseqr",
      features: language === "nl"
        ? ["Onbeperkte QR-codes", "Geen account nodig", "Dynamische codes"]
        : ["Unlimited QR codes", "No account needed", "Dynamic codes"],
    },
    {
      name: "PulseSync",
      description: language === "nl"
        ? "Deel agenda's eenvoudig met iedereen"
        : "Share calendars easily with anyone",
      icon: Calendar,
      href: "/pulsesync",
      features: language === "nl"
        ? ["Agenda sync", "Geen login voor deelnemers", "Tijdzone support"]
        : ["Calendar sync", "No login for participants", "Timezone support"],
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Er is een fout opgetreden");
      }

      setSubmitSuccess(true);
    } catch (error) {
      console.error("Error submitting quote request:", error);
      alert(language === "nl"
        ? "Er is een fout opgetreden bij het verzenden. Probeer het opnieuw."
        : "An error occurred while sending. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <StructuredData
        type="Product"
        data={{
          name: "iPulse - Website Monitoring & Infrastructure Management",
          description: "Professional monitoring solutions with custom pricing. Request a quote based on your needs.",
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
                <Calculator className="h-4 w-4 text-primary" />
                {language === "nl" ? "Prijs Op Maat" : "Custom Pricing"}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                {language === "nl" ? "Wat heeft u nodig?" : "What do you need?"}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                {language === "nl"
                  ? "Configureer uw ideale monitoring pakket en ontvang een persoonlijke offerte. Betaal alleen voor wat u gebruikt."
                  : "Configure your ideal monitoring package and receive a personalized quote. Pay only for what you use."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quote Request Form */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {submitSuccess ? (
                <div className="glassmorphism rounded-2xl border border-green-500/30 bg-gradient-to-r from-green-500/5 via-green-500/10 to-green-500/5 p-12 text-center">
                  <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">
                    {language === "nl" ? "Aanvraag Verzonden!" : "Request Sent!"}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {language === "nl"
                      ? "Wij nemen binnen 24 uur contact met u op met een persoonlijke offerte."
                      : "We'll get back to you within 24 hours with a personalized quote."}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({
                        requirements: "",
                        companyName: "",
                        email: "",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                  >
                    {language === "nl" ? "Nieuwe Aanvraag" : "New Request"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information */}
                  <div className="glassmorphism rounded-2xl border border-border/50 p-6 sm:p-8">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      {language === "nl" ? "Contactgegevens" : "Contact Information"}
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {language === "nl" ? "Bedrijfsnaam" : "Company Name"}
                        </label>
                        <input
                          type="text"
                          value={formData.companyName}
                          onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          placeholder={language === "nl" ? "Uw bedrijf" : "Your company"}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {language === "nl" ? "E-mailadres" : "Email Address"}
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          placeholder="naam@bedrijf.nl"
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium mb-2">
                        {language === "nl" ? "Wat heeft u nodig?" : "What do you need?"}
                      </label>
                      <p className="text-xs text-muted-foreground mb-2">
                        {language === "nl"
                          ? "Beschrijf wat u wilt monitoren. Bijvoorbeeld: 50 domeinen, 10 servers, 5 API endpoints, notificaties via Telegram, etc."
                          : "Describe what you want to monitor. For example: 50 domains, 10 servers, 5 API endpoints, notifications via Telegram, etc."}
                      </p>
                      <textarea
                        value={formData.requirements}
                        onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                        rows={5}
                        placeholder={language === "nl"
                          ? "Bijv: Ik wil 100 domeinen monitoren, 25 servers, en 10 API endpoints. Ook heb ik 3 status pagina's nodig en notificaties via e-mail en Telegram..."
                          : "E.g: I want to monitor 100 domains, 25 servers, and 10 API endpoints. I also need 3 status pages and notifications via email and Telegram..."}
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-foreground text-background font-semibold text-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          {language === "nl" ? "Verzenden..." : "Sending..."}
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          {language === "nl" ? "Offerte Aanvragen" : "Request Quote"}
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* Free Apps Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/30 text-sm font-semibold text-green-600 dark:text-green-400 mb-4">
                <Gift className="h-4 w-4" />
                {language === "nl" ? "Altijd Gratis" : "Always Free"}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {language === "nl" ? "Gratis Tools" : "Free Tools"}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === "nl"
                  ? "Deze tools zijn en blijven gratis. Geen creditcard nodig, geen verborgen kosten."
                  : "These tools are and will remain free. No credit card required, no hidden fees."}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {freeApps.map((app, index) => (
                <motion.div
                  key={app.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={app.href}
                    className="group flex flex-col h-full glassmorphism rounded-2xl border border-green-500/20 hover:border-green-500/50 p-6 transition-all hover:shadow-xl"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <app.icon className="h-6 w-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{app.name}</h3>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-500/20 text-green-600 dark:text-green-400">
                          {language === "nl" ? "Altijd Gratis" : "Always Free"}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 grow">{app.description}</p>
                    <ul className="space-y-2 mb-4">
                      {app.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium group-hover:gap-3 transition-all">
                      {language === "nl" ? "Meer Info" : "Learn More"}
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
