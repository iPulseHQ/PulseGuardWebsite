"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { termsTranslations } from "@/lib/terms-translations";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useState, useEffect } from "react";

export default function TermsPage() {
  const { language } = useLanguage();
  const t = termsTranslations[language];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-sm font-medium shadow-sm">
              <FileText className="h-4 w-4 text-primary" />
              Legal
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              {t.title}
            </h1>

            <p className="text-lg text-muted-foreground">
              {t.lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glassmorphism rounded-2xl p-8 md:p-12 border border-border/50"
          >
            <div className="space-y-12 prose prose-lg dark:prose-invert max-w-none">
              {Object.entries(t.sections).map(([key, section]) => (
                <section key={key}>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">
                    {section.title}
                  </h2>
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
