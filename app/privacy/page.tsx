"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { privacyTranslations } from "@/lib/privacy-translations";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { useState, useEffect } from "react";

export default function PrivacyPage() {
  const { language } = useLanguage();
  const t = privacyTranslations[language];
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
              <Shield className="h-4 w-4 text-primary" />
              Legal
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              {t.title}
            </h1>

            <p className="text-lg text-muted-foreground">
              {t.lastUpdated}: {new Date().toLocaleDateString()}
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
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {t.sections.introduction.title}
                </h2>
                {t.sections.introduction.content.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </section>

              {/* Data Controller */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {t.sections.dataController.title}
                </h2>
                {t.sections.dataController.content.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {t.sections.informationCollected.title}
                </h2>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {t.sections.informationCollected.personalData.title}
                </h3>
                <p className="mb-3 text-muted-foreground leading-relaxed">
                  {t.sections.informationCollected.personalData.intro}
                </p>
                <ul className="list-disc ml-6 mb-6 space-y-2">
                  {t.sections.informationCollected.personalData.items.map(
                    (item, index) => (
                      <li key={index} className="text-muted-foreground">{item}</li>
                    )
                  )}
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {t.sections.informationCollected.automaticallyCollected.title}
                </h3>
                <p className="mb-3 text-muted-foreground leading-relaxed">
                  {t.sections.informationCollected.automaticallyCollected.intro}
                </p>
                <ul className="list-disc ml-6 mb-6 space-y-2">
                  {t.sections.informationCollected.automaticallyCollected.items.map(
                    (item, index) => (
                      <li key={index} className="text-muted-foreground">{item}</li>
                    )
                  )}
                </ul>
              </section>

              {/* Legal Basis */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {t.sections.legalBasis.title}
                </h2>
                <p className="mb-3 text-muted-foreground leading-relaxed">{t.sections.legalBasis.intro}</p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  {t.sections.legalBasis.items.map((item, index) => (
                    <li key={index} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
                <p className="mb-4 text-muted-foreground leading-relaxed">{t.sections.legalBasis.outro}</p>
              </section>

              {/* How We Use */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {t.sections.howWeUse.title}
                </h2>
                <p className="mb-3 text-muted-foreground leading-relaxed">{t.sections.howWeUse.intro}</p>
                <ul className="list-disc ml-6 mb-6 space-y-2">
                  {t.sections.howWeUse.items.map((item, index) => (
                    <li key={index} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </section>

              {/* Data Sharing */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {t.sections.dataSharing.title}
                </h2>
                <p className="mb-3 text-muted-foreground leading-relaxed">{t.sections.dataSharing.intro}</p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  {t.sections.dataSharing.items.map((item, index) => (
                    <li key={index} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
                <p className="mb-4 text-muted-foreground leading-relaxed">{t.sections.dataSharing.outro}</p>
              </section>

              {/* International Transfers */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {t.sections.internationalTransfers.title}
                </h2>
                <p className="mb-4 text-muted-foreground leading-relaxed">{t.sections.internationalTransfers.intro}</p>
                <ul className="list-disc ml-6 mb-6 space-y-2">
                  {t.sections.internationalTransfers.items.map((item, index) => (
                    <li key={index} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {t.sections.dataSecurity.title}
                </h2>
                <p className="mb-4 text-muted-foreground leading-relaxed">{t.sections.dataSecurity.intro}</p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  {t.sections.dataSecurity.items.map((item, index) => (
                    <li key={index} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
                <p className="mb-4 text-muted-foreground leading-relaxed">{t.sections.dataSecurity.outro}</p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {t.sections.dataRetention.title}
                </h2>
                {t.sections.dataRetention.content.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {t.sections.yourRights.title}
                </h2>
                <p className="mb-3 text-muted-foreground leading-relaxed">{t.sections.yourRights.intro}</p>
                <ul className="list-disc ml-6 mb-4 space-y-2">
                  {t.sections.yourRights.items.map((item, index) => (
                    <li key={index} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
                <p className="mb-4 text-muted-foreground leading-relaxed">{t.sections.yourRights.contact}</p>
                <p className="mb-4 text-muted-foreground leading-relaxed">{t.sections.yourRights.fees}</p>
                <p className="mb-4 text-muted-foreground leading-relaxed">{t.sections.yourRights.timeline}</p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {t.sections.cookies.title}
                </h2>
                <p className="mb-4 text-muted-foreground leading-relaxed">{t.sections.cookies.content}</p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {t.sections.childrens.title}
                </h2>
                <p className="mb-4 text-muted-foreground leading-relaxed">{t.sections.childrens.content}</p>
              </section>

              {/* Third-Party Links */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {t.sections.thirdParty.title}
                </h2>
                <p className="mb-4 text-muted-foreground leading-relaxed">{t.sections.thirdParty.content}</p>
              </section>

              {/* Changes */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {t.sections.changes.title}
                </h2>
                {t.sections.changes.content.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {t.sections.contact.title}
                </h2>
                <p className="mb-4 text-muted-foreground leading-relaxed">{t.sections.contact.intro}</p>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">{t.sections.contact.company}</strong>
                  <br />
                  {t.sections.contact.address}
                </p>
              </section>

              {/* Complaints */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  {t.sections.complaints.title}
                </h2>
                <p className="mb-4 text-muted-foreground leading-relaxed">{t.sections.complaints.intro}</p>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">{t.sections.complaints.authority}</strong>
                  <br />
                  {t.sections.complaints.postal}
                  <br />
                  {t.sections.complaints.phone}
                  <br />
                  {t.sections.complaints.website}:{" "}
                  <a
                    href="https://autoriteitpersoonsgegevens.nl"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://autoriteitpersoonsgegevens.nl
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
