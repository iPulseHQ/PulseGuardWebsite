"use client";
import Image from "next/image";
import { useState } from "react";
import { Linkedin, Github, Instagram, Twitter, Monitor, FileText, Building2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { GridBackground } from "@/components/GridBackground";

export default function Home() {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  // Structured data for homepage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "iPulse",
    "description": "Unified Business Platform: PulseGuard voor monitoring, PulseFiles voor secure file sharing, PulseFlow voor ERP & CRM. Alles voor Nederlandse ondernemers.",
    "url": "https://ipulse.one",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ipulse.one/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "iPulse B.V.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ipulse.one/assets/ipulse-logo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <div className="bg-white dark:bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full px-4 py-20 text-center overflow-hidden bg-white dark:bg-black min-h-screen flex items-center">
        <GridBackground onHoverChange={setIsHovered} />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="relative z-20 max-w-4xl mx-auto w-full">
                      <h1
            className="text-[61px] font-bold leading-[65px] tracking-[-1.921px] mb-6 text-black dark:text-white"
          >
            {t('heroTitle')}
          </h1>
          <p className="text-2xl font-medium text-gray-600 dark:text-gray-300 tracking-[-0.42px] mb-12">
            {t('heroSubtitle')}
          </p>

          {/* Action buttons */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="mailto:info@ipulse.one"
              className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center gap-3"
            >
              {t('requestDemo')}
              <span className="text-xl">→</span>
            </a>
          </div>



          {/* Heartbeat graphic */}
          <div className="relative z-10 flex justify-center mb-16">
            <div className="animate-pulse-continuous">
              <Image
                src="/assets/heartbeat.svg"
                alt="Heartbeat monitor"
                width={1000}
                height={120}
                className="max-w-full h-auto dark:invert dark:brightness-0"
              />
            </div>
          </div>

          {/* Platform Overview */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 mb-16 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              {t('platformOverviewTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">PulseGuard</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {t('pulseGuardOverviewDesc')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">PulseFiles</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {t('pulseFilesOverviewDesc')}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">PulseFlow</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {t('pulseFlowOverviewDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-8">
            <a href="https://www.linkedin.com/company/ipulseone" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://x.com/ipulse_one" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/ipulse_one/" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-pink-900/30 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://github.com/ipulse-one" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-110" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Trusted by section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="border-t border-gray-200 dark:border-gray-700 mb-8"></div>
        <p className="text-center text-black dark:text-foreground font-medium mb-8">{t('heroTrustedBy')}</p>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          <div className="flex items-center justify-center h-16" title="IM Digital">
            <Image 
              src="https://imdigital.info/logo(gray-google).png" 
              alt="IM Digital" 
              width={120}
              height={48}
              className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              unoptimized
            />
          </div>
          <div className="flex items-center justify-center h-16" title="CHE">
            <Image 
              src="https://www.che.nl/themes/custom/che/images/logos/logo.svg" 
              alt="CHE" 
              width={120}
              height={48}
              className="h-12 opacity-60 hover:opacity-100 transition-opacity"
              unoptimized
            />
          </div>
          <div className="flex items-center justify-center h-16" title="Arjan den Hartog">
            <Image 
              src="https://arjandenhartog.com/favicon.ico" 
              alt="Arjan den Hartog" 
              width={48}
              height={48}
              className="h-12 opacity-60 hover:opacity-100 transition-opacity"
              unoptimized
            />
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8"></div>
      </section>

     
      {/* Dashboard Preview Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#F6F5F4] dark:bg-secondary rounded-xl p-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/security-icon.svg"
                alt="Monitor icon"
                width={26}
                height={26}
              />
            </div>
            <h2 className="text-[18px] font-bold text-black dark:text-foreground tracking-[-0.13px] mb-4">
              {t('homeSection1Title')}
            </h2>
            <p className="text-base text-[#121212] dark:text-muted-foreground tracking-[0.008px] leading-[23px] max-w-[508px]">
              {t('homeSection1Desc')}
            </p>
          </div>

          {/* Dashboard mockup */}
          <div className="flex justify-center">
            <div className="w-full max-w-[956px] aspect-[956/493] bg-white dark:bg-card rounded-xl border border-black/10 dark:border-border shadow-sm overflow-hidden">
              <Image
                src="/assets/pulsedashboard.png"
                alt="Dashboard Preview"
                width={3801}
                height={1914}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Domain Information Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#F6F5F4] dark:bg-secondary rounded-xl p-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/security-icon.svg"
                alt="Domain info icon"
                width={26}
                height={26}
              />
            </div>
            <h2 className="text-[18px] font-bold text-black dark:text-foreground tracking-[-0.13px] mb-4">
              {t('homeSection2Title')}
            </h2>
            <p className="text-base text-[#121212] dark:text-muted-foreground tracking-[0.008px] leading-[23px] max-w-[508px]">
              {t('homeSection2Desc')}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[956px] aspect-[956/493] bg-white dark:bg-card rounded-xl border border-black/10 dark:border-border shadow-sm overflow-hidden">
              <Image
                src="/assets/website-monitoring.png"
                alt="Website monitoring preview"
                width={956}
                height={493}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* PulseAI Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#F6F5F4] dark:bg-secondary rounded-xl p-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/security-icon.svg"
                alt="AI icon"
                width={26}
                height={26}
              />
            </div>
            <h2 className="text-[18px] font-bold text-black dark:text-foreground tracking-[-0.13px] mb-4">
              {t('homeAiTitle')}
            </h2>
            <p className="text-base text-[#121212] dark:text-muted-foreground tracking-[0.008px] leading-[23px] max-w-[508px]">
              {t('homeAiDesc')}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-[956px] aspect-[956/493] bg-white dark:bg-card rounded-xl border border-black/10 dark:border-border shadow-sm overflow-hidden">
              <Image
                src="/assets/pulseai.png"
                alt="PulseAI preview"
                width={956}
                height={493}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        </div>
      </section>

      </div>
    </>
  );
}
