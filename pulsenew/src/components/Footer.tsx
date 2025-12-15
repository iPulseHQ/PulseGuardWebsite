"use client";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Github, Instagram, Twitter } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { Language } from "@/utils/translations";

export default function Footer() {
  const { t, currentLang, changeLanguage } = useTranslation();
  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: t('english') },
    { code: 'nl', label: t('dutch') },
  ];

  return (
    <footer className="relative border-t border-gray-200 dark:border-white/10 text-gray-900 dark:text-white pt-12 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {/* Company Info */}
          <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300">
            <div className="mb-6">
              <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                <Image
                  src="/assets/logodark.png"
                  alt="iPulse Logo"
                  width={150}
                  height={150}
                  className="block dark:hidden"
                />
                <Image
                  src="/assets/logowhite.png"
                  alt="iPulse Logo"
                  width={150}
                  height={150}
                  className="hidden dark:block"
                />
              </Link>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
              {t('homeSection1Desc')}
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.linkedin.com/company/107398117/"
                className="bg-gray-900 dark:bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white dark:text-gray-300 group-hover:text-gray-100 dark:group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://x.com/ipulsedev"
                className="bg-gray-900 dark:bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white dark:text-gray-300 group-hover:text-gray-100 dark:group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/pulseguard_/"
                className="bg-gray-900 dark:bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white dark:text-gray-300 group-hover:text-gray-100 dark:group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://github.com/iPulseHQ"
                className="bg-gray-900 dark:bg-white/10 backdrop-blur-sm p-3 rounded-xl hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-white dark:text-gray-300 group-hover:text-gray-100 dark:group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Language Switcher */}
            <div>
              <label htmlFor="language-select" className="block text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">
                {t('language')}
              </label>
              <select
                id="language-select"
                value={currentLang}
                onChange={(e) => changeLanguage(e.target.value as Language)}
                className="w-full bg-gray-200 dark:bg-white/10 backdrop-blur-sm border border-gray-300 dark:border-white/20 rounded-xl px-4 py-2.5 text-sm text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-white/30"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-white dark:bg-black text-gray-900 dark:text-white">
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Links */}
          <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300">
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{t('footerLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-3 group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors"></span>
                  {t('footerHome')}
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-3 group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors"></span>
                  {t('footerFeatures')}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-3 group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors"></span>
                  {t('footerPricing')}
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-3 group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors"></span>
                  {t('footerOurTeam')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-3 group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors"></span>
                  {t('footerBlog')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Platform */}
          <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300">
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{t('footerPlatform')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://guard.ipulse.one" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-3 group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors"></span>
                  {t('footerDashboard')}
                </a>
              </li>
              <li>
                <a href="https://guard.ipulse.one/domains" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-3 group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors"></span>
                  {t('footerDomains')}
                </a>
              </li>
              <li>
                <a href="https://guard.ipulse.one/device-monitoring" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-3 group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors"></span>
                  {t('footerDevices')}
                </a>
              </li>
              <li>
                <a href="https://guard.ipulse.one/subscriptions" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-3 group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors"></span>
                  {t('footerSubscriptions')}
                </a>
              </li>
              <li>
                <a href="https://docs.pulseguard.pro/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-3 group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors"></span>
                  {t('footerDocumentation')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300">
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{t('footerSupport')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://ipulse.notion.site/2ca4306c6bc6816aa871d3413fdac5ad?pvs=105" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-3 group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors"></span>
                  {t('footerHelpCenter')}
                </a>
              </li>
              <li>
                <a href="mailto:info@ipulse.one" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-3 group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors"></span>
                  {t('footerEmailSupport')}
                </a>
              </li>
              <li>
                <a href="https://guard.ipulse.one/privacy" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-3 group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors"></span>
                  {t('footerPrivacyPolicy')}
                </a>
              </li>
              <li>
                <a href="https://guard.ipulse.one/terms" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mr-3 group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors"></span>
                  {t('footerTerms')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-white/10 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} iPulse {t('footerIsPartOf')}{" "}
              <a href="https://imdigital.info" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-medium">
                IMDigital
              </a>
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span>{t('footerCopyright')}</span>
              <span className="hidden md:inline">•</span>
              <a href="mailto:info@ipulse.one" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-medium">
                info@ipulse.one
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}