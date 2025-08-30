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
    <footer className="bg-white dark:bg-secondary border-t border-gray-200 dark:border-border text-gray-800 dark:text-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* ProductHunt Badge */}
        <div className="text-center mb-12 pb-8 border-b border-gray-200 dark:border-border">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-foreground">{t('footerRateUs')}</h3>
          <a href="https://www.producthunt.com/products/pulseguard-2/reviews" target="_blank" rel="noopener noreferrer">
            <Image 
              src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1074601&theme=light" 
              alt="PulseGuard - Complete monitoring solution for websites, devices & services | Product Hunt" 
              width={250} 
              height={54} 
              className="hover:scale-105 transition-transform duration-300 mx-auto dark:hidden"
              unoptimized
            />
            <Image 
              src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1074601&theme=dark" 
              alt="PulseGuard - Complete monitoring solution for websites, devices & services | Product Hunt" 
              width={250} 
              height={54} 
              className="hover:scale-105 transition-transform duration-300 mx-auto hidden dark:block"
              unoptimized
            />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <span className="relative inline-block">
                <Image
                  src="/assets/logodark.png"
                  alt="PulseGuard Logo"
                  width={150}
                  height={150}
                  className="block dark:hidden"
                />
                <Image
                  src="/assets/logofinal.png"
                  alt="PulseGuard Logo"
                  width={150}
                  height={150}
                  className="hidden dark:block"
                />
              </span>
            </div>
            <p className="text-gray-600 dark:text-muted-foreground mb-6">
              {t('homeSection1Desc')}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/pulseguardnl" className="text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-gray-300 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/pulseguard_hq" className="text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-gray-300 transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/pulseguard_/" className="text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-gray-300 transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://github.com/pulseguardhq" className="text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-gray-300 transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Language Switcher */}
            <div className="mt-6">
              <label htmlFor="language-select" className="block text-sm text-gray-600 mb-2">
                {t('language')}
              </label>
              <select
                id="language-select"
                value={currentLang}
                onChange={(e) => changeLanguage(e.target.value as Language)}
                className="border border-gray-300 dark:border-border rounded-md px-3 py-2 text-sm text-gray-800 dark:text-foreground bg-white dark:bg-input/30"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800 dark:text-foreground">{t('footerLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-gray-300 transition-colors">
                  {t('footerHome')}
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-gray-300 transition-colors">
                  {t('footerFeatures')}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-gray-300 transition-colors">
                  {t('footerPricing')}
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-gray-300 transition-colors">
                  {t('footerOurTeam')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-gray-300 transition-colors">
                  {t('footerBlog')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Platform */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800 dark:text-foreground">{t('footerPlatform')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://guard.ipulse.one" className="text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-gray-300 transition-colors">
                  {t('footerDashboard')}
                </a>
              </li>
              <li>
                <a href="https://guard.ipulse.one/domains" className="text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-gray-300 transition-colors">
                  {t('footerDomains')}
                </a>
              </li>
              <li>
                <a href="https://guard.ipulse.one/device-monitoring" className="text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-gray-300 transition-colors">
                  {t('footerDevices')}
                </a>
              </li>
              <li>
                <a href="https://guard.ipulse.one/subscriptions" className="text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-gray-300 transition-colors">
                  {t('footerSubscriptions')}
                </a>
              </li>
              <li>
                <a href="https://docs.pulseguard.pro/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-gray-300 transition-colors">
                  {t('footerDocumentation')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800 dark:text-foreground">{t('footerSupport')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://arjandh.notion.site/1ff0645fff30819ab883fe1e29743e7c?pvs=105" className="text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-gray-300 transition-colors">
                  {t('footerHelpCenter')}
                </a>
              </li>
              <li>
                <a href="mailto:info@ipulse.one" className="text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-gray-300 transition-colors">
                  {t('footerEmailSupport')}
                </a>
              </li>
              <li>
                <a href="https://guard.ipulse.one/privacy" className="text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-gray-300 transition-colors">
                  {t('footerPrivacyPolicy')}
                </a>
              </li>
              <li>
                <a href="https://guard.ipulse.one/terms" className="text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-gray-300 transition-colors">
                  {t('footerTerms')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-border pt-8 text-center text-gray-500 dark:text-muted-foreground text-sm">
          <p>
            &copy; {new Date().getFullYear()} iPulse {t('footerIsPartOf')}{" "}
            <a href="https://imdigital.info" className="text-blue-400 hover:text-blue-300">
              IM Digital
            </a>
            {" "}- {t('footerCopyright')} - {t('footerContact')}: {" "}
            <a href="mailto:info@ipulse.one" className="text-blue-400 hover:text-blue-300">
              info@ipulse.one
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}