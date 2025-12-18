"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function CTA() {
  const { t } = useLanguage();
  const pathname = usePathname();

  // Determine sign-in URL based on current page
  const getSignInUrl = () => {
    if (pathname?.includes('/pulsefiles')) {
      return 'https://files.ipulse.one/sign-in';
    } else if (pathname?.includes('/pulseqr')) {
      return 'https://qr.ipulse.one/sign-in';
    } else if (pathname?.includes('/pulseguard')) {
      return 'https://guard.ipulse.one/sign-in';
    }
    return 'https://guard.ipulse.one/sign-in'; // Default to PulseGuard
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="inline-block px-4 py-1 rounded-md bg-muted border border-border/50 text-sm font-medium mb-4">
            {t("freeTrial")}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {t("ctaTitle")}
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("ctaDescription")}
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              {t("freeTrial")}
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              {t("twoProducts")}
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              {t("support")}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href={getSignInUrl()}
              className="h-10 px-6 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 inline-flex items-center justify-center gap-2 group"
            >
              {t("startFreeTrial")}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/about"
              className="h-10 px-6 border border-white/50 text-foreground hover:text-white hover:border-white hover:bg-white/5 text-sm font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center"
            >
              {t("contactUs")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
