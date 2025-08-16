"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";
import { useTheme } from "next-themes";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();
  const { resolvedTheme, setTheme } = useTheme();

  // Dynamic login/signup links based on current page
  const getLoginLink = () => {
    if (pathname === '/guard') return 'https://app.pulseguard.pro/login';
    if (pathname === '/files') return 'https://files.pulseguard.pro/login';
    if (pathname === '/crm') return 'https://crm.pulseguard.pro/login';
    return 'https://app.pulseguard.pro/login';
  };

  const getSignupLink = () => {
    if (pathname === '/guard') return 'https://app.pulseguard.pro/register';
    if (pathname === '/files') return 'https://files.pulseguard.pro';
    if (pathname === '/crm') return 'https://crm.pulseguard.pro/sign-up';
    return 'https://app.pulseguard.pro/register';
  };

  return (
    <header className="bg-white dark:bg-secondary h-[62px] border-b border-black/10 dark:border-border relative">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
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
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative">
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="text-black dark:text-foreground font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors flex items-center gap-1"
            >
              Solutions
              <svg className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-card rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
                <div className="py-2">
                  <Link href="/guard" className="block px-4 py-2 text-black dark:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={() => setSolutionsOpen(false)}>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#fff6d6] rounded flex items-center justify-center">
                        <Image src="/assets/pulseguard-logo.svg" alt="" width={16} height={16} />
                      </div>
                      PulseGuard
                    </div>
                  </Link>
                  <Link href="/files" className="block px-4 py-2 text-black dark:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={() => setSolutionsOpen(false)}>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#fce9e8] rounded flex items-center justify-center">
                        <Image src="/assets/files-icon.svg" alt="" width={16} height={16} />
                      </div>
                      PulseFiles
                    </div>
                  </Link>
                  <Link href="/crm" className="block px-4 py-2 text-black dark:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" onClick={() => setSolutionsOpen(false)}>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#e2ecf3] rounded flex items-center justify-center">
                        <Image src="/assets/crm-icon.svg" alt="" width={16} height={16} />
                      </div>
                      PulseCRM
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/pricing" className="text-black dark:text-foreground font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            {t('pricing')}
          </Link>
          <Link href="/team" className="text-black dark:text-foreground font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            {t('team')}
          </Link>
          <Link href="/blog" className="text-black dark:text-foreground font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            {t('blog')}
          </Link>
          <a href="https://docs.pulseguard.pro/" target="_blank" rel="noopener noreferrer" className="text-black dark:text-foreground font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            {t('docs')}
          </a>
        </nav>

        {/* Desktop Right side buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-transparent hover:bg-gray-100 dark:hover:bg-input/50 transition-colors"
          >
            <Sun size={18} className="text-white hidden dark:block" />
            <Moon size={18} className="text-black dark:text-foreground block dark:hidden" />
          </button>
          <a href={getLoginLink()} className="text-black dark:text-foreground font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            {t('login')}
          </a>
          <a href={getSignupLink()} className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90">
            {t('register')} →
          </a>
        </div>

        {/* Mobile buttons */}
        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center h-10 w-10 text-black dark:text-foreground hover:bg-gray-100 dark:hover:bg-input/50 rounded-lg focus:outline-none"
          >
            <Sun size={20} className="text-white hidden dark:block" />
            <Moon size={20} className="text-black dark:text-foreground block dark:hidden" />
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center h-10 w-10 text-black dark:text-foreground hover:bg-gray-100 dark:hover:bg-input/50 rounded-lg focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-secondary border-t border-gray-200 dark:border-border absolute top-full left-0 right-0 z-50 shadow-lg">
          <div className="py-4 px-4 space-y-2">
            <div className="space-y-1">
              <button 
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="flex items-center justify-between w-full py-3 px-4 text-black dark:text-foreground font-medium hover:bg-gray-100 dark:hover:bg-input/50 rounded-lg"
              >
                Solutions
                <svg className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileSolutionsOpen && (
                <div className="pl-4 space-y-1">
                  <Link 
                    href="/guard" 
                    className="flex items-center gap-3 py-3 px-4 text-black dark:text-foreground font-medium hover:bg-gray-100 dark:hover:bg-input/50 rounded-lg"
                    onClick={() => {setMobileMenuOpen(false); setMobileSolutionsOpen(false);}}
                  >
                    <div className="w-6 h-6 bg-[#fff6d6] rounded flex items-center justify-center">
                      <Image src="/assets/pulseguard-logo.svg" alt="" width={16} height={16} />
                    </div>
                    PulseGuard
                  </Link>
                  <Link 
                    href="/files" 
                    className="flex items-center gap-3 py-3 px-4 text-black dark:text-foreground font-medium hover:bg-gray-100 dark:hover:bg-input/50 rounded-lg"
                    onClick={() => {setMobileMenuOpen(false); setMobileSolutionsOpen(false);}}
                  >
                    <div className="w-6 h-6 bg-[#fce9e8] rounded flex items-center justify-center">
                      <Image src="/assets/files-icon.svg" alt="" width={16} height={16} />
                    </div>
                    PulseFiles
                  </Link>
                  <Link 
                    href="/crm" 
                    className="flex items-center gap-3 py-3 px-4 text-black dark:text-foreground font-medium hover:bg-gray-100 dark:hover:bg-input/50 rounded-lg"
                    onClick={() => {setMobileMenuOpen(false); setMobileSolutionsOpen(false);}}
                  >
                    <div className="w-6 h-6 bg-[#e2ecf3] rounded flex items-center justify-center">
                      <Image src="/assets/crm-icon.svg" alt="" width={16} height={16} />
                    </div>
                    PulseCRM
                  </Link>
                </div>
              )}
            </div>
            <Link 
              href="/pricing" 
              className="block py-3 px-4 text-black dark:text-foreground font-medium hover:bg-gray-100 dark:hover:bg-input/50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('pricing')}
            </Link>
            <Link 
              href="/team" 
              className="block py-3 px-4 text-black dark:text-foreground font-medium hover:bg-gray-100 dark:hover:bg-input/50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('team')}
            </Link>
            <Link 
              href="/blog" 
              className="block py-3 px-4 text-black dark:text-foreground font-medium hover:bg-gray-100 dark:hover:bg-input/50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('blog')}
            </Link>
            <a 
              href="https://docs.pulseguard.pro/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block py-3 px-4 text-black dark:text-foreground font-medium hover:bg-gray-100 dark:hover:bg-input/50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('docs')}
            </a>
            
            <div className="pt-4 border-t border-gray-200 mt-4">
              <a 
                href={getLoginLink()} 
                className="block py-3 px-4 text-black dark:text-foreground font-medium hover:bg-gray-100 dark:hover:bg-input/50 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('login')}
              </a>
              <a 
                href={getSignupLink()} 
                className="block py-3 px-4 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors mt-2 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('register')} →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}