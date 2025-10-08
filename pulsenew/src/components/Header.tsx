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
  const isFlowPage = pathname === '/flow';

  // Dynamic login/signup links based on current page
  const getLoginLink = () => {
    if (pathname === '/guard') return 'https://guard.ipulse.one/login';
    if (pathname === '/files') return 'https://files.ipulse.one/login';
    if (pathname === '/flow') return 'https://flow.ipulse.one/login';
    return 'https://guard.ipulse.one/login';
  };

  const getSignupLink = () => {
    if (pathname === '/guard') return 'https://guard.ipulse.one/register';
    if (pathname === '/files') return 'https://files.ipulse.one';
    if (pathname === '/flow') return 'https://flow.ipulse.one/sign-up';
    return 'https://guard.ipulse.one/register';
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 py-6 px-6 pointer-events-none">
      <header className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl max-w-[1400px] mx-auto pointer-events-auto">
        <div className="px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
          <span className="relative inline-block">
            <Image
              src="/assets/logodark.png"
              alt="iPulse Logo"
              width={140}
              height={140}
              className="block dark:hidden"
            />
            <Image
              src="/assets/logowhite.png"
              alt="iPulse Logo"
              width={140}
              height={140}
              className="hidden dark:block"
            />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="px-4 py-2 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-black rounded-xl transition-all duration-200 flex items-center gap-2"
            >
              Solutions
              <svg className={`w-4 h-4 transition-transform duration-300 ${solutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {solutionsOpen && (
              <div className="absolute top-full left-0 mt-3 w-80 bg-white/98 dark:bg-black/98 backdrop-blur-2xl rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-800 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                {/* Header */}
                <div className="px-5 py-4 border-b-2 border-gray-100 dark:border-gray-900">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">Our Solutions</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Choose your perfect tool</p>
                </div>
                
                {/* Menu Items */}
                <div className="p-3 space-y-1">
                  <Link href="/guard" className="group block px-4 py-4 text-black dark:text-foreground hover:bg-white dark:hover:bg-black rounded-xl transition-all duration-200 border-2 border-transparent hover:border-black dark:hover:border-white" onClick={() => setSolutionsOpen(false)}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center border-2 border-black dark:border-white group-hover:scale-110 transition-transform">
                        <Image src="/assets/uptime-icon.svg" alt="" width={20} height={20} className="invert dark:invert-0" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-base text-gray-900 dark:text-white mb-1">PulseGuard</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 leading-snug">24/7 monitoring & uptime tracking</div>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/files" className="group block px-4 py-4 text-black dark:text-foreground hover:bg-white dark:hover:bg-black rounded-xl transition-all duration-200 border-2 border-transparent hover:border-black dark:hover:border-white" onClick={() => setSolutionsOpen(false)}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center border-2 border-black dark:border-white group-hover:scale-110 transition-transform">
                        <Image src="/assets/files-icon.svg" alt="" width={20} height={20} className="invert dark:invert-0" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-base text-gray-900 dark:text-white mb-1">PulseFiles</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 leading-snug">Secure file sharing & storage</div>
                      </div>
                    </div>
                  </Link>
                  
                  <Link href="/flow" className="group block px-4 py-4 text-black dark:text-foreground hover:bg-white dark:hover:bg-black rounded-xl transition-all duration-200 border-2 border-transparent hover:border-black dark:hover:border-white" onClick={() => setSolutionsOpen(false)}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center border-2 border-black dark:border-white group-hover:scale-110 transition-transform">
                        <Image src="/assets/crm-icon.svg" alt="" width={20} height={20} className="invert dark:invert-0" />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-base text-gray-900 dark:text-white mb-1">PulseFlow</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 leading-snug">Business management & CRM</div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Footer CTA */}
                <div className="px-5 py-4 bg-white dark:bg-black border-t-2 border-gray-200 dark:border-gray-800">
                  <Link href="/pricing" className="flex items-center justify-between group" onClick={() => setSolutionsOpen(false)}>
                    <div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white">View all pricing</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Compare plans & features</div>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/pricing" className="px-4 py-2 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-black rounded-xl transition-all duration-200">
            {t('pricing')}
          </Link>
          <Link href="/team" className="px-4 py-2 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-black rounded-xl transition-all duration-200">
            {t('team')}
          </Link>
          <Link href="/blog" className="px-4 py-2 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-black rounded-xl transition-all duration-200">
            {t('blog')}
          </Link>
          <a href="https://docs.ipulse.one/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-black rounded-xl transition-all duration-200">
            {t('docs')}
          </a>
        </nav>

        {/* Desktop Right side buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="h-10 w-10 inline-flex items-center justify-center rounded-xl hover:bg-gray-100 dark:hover:bg-black transition-all duration-200"
          >
            <Sun size={20} className="text-white hidden dark:block" />
            <Moon size={20} className="text-black dark:text-foreground block dark:hidden" />
          </button>
          {isFlowPage ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 text-yellow-800 px-4 py-2 text-sm font-semibold">
              {t('comingSoonBadge')}
            </span>
          ) : (
            <>
              <a href={getLoginLink()} className="px-5 py-2.5 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-black rounded-xl transition-all duration-200">
                {t('login')}
              </a>
              <a href={getSignupLink()} className="bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                {t('register')} →
              </a>
            </>
          )}
        </div>

        {/* Mobile buttons */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center h-11 w-11 text-black dark:text-foreground hover:bg-gray-100 dark:hover:bg-black rounded-xl transition-all duration-200"
          >
            <Sun size={22} className="text-white hidden dark:block" />
            <Moon size={22} className="text-black dark:text-foreground block dark:hidden" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center h-11 w-11 text-black dark:text-foreground hover:bg-gray-100 dark:hover:bg-black rounded-xl transition-all duration-200"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 dark:bg-black/95 backdrop-blur-2xl border-t border-gray-200/50 dark:border-gray-700/50 absolute top-full left-0 right-0 z-50 shadow-2xl rounded-b-3xl mt-2">
            <div className="py-6 px-6 space-y-2">
            <div className="space-y-1">
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="flex items-center justify-between w-full py-3 px-5 text-black dark:text-foreground font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 rounded-xl transition-all duration-200"
              >
                Solutions
                <svg className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileSolutionsOpen && (
                <div className="pl-2 pr-2 space-y-2 pt-2">
                  <Link 
                    href="/guard" 
                    className="flex items-center gap-4 py-4 px-4 text-black dark:text-foreground font-medium bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 rounded-xl border-2 border-black dark:border-white transition-all"
                    onClick={() => {setMobileMenuOpen(false); setMobileSolutionsOpen(false);}}
                  >
                    <div className="w-10 h-10 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                      <Image src="/assets/uptime-icon.svg" alt="" width={20} height={20} className="invert dark:invert-0" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-base">PulseGuard</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Monitoring & Uptime</div>
                    </div>
                  </Link>
                  <Link 
                    href="/files" 
                    className="flex items-center gap-4 py-4 px-4 text-black dark:text-foreground font-medium bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 rounded-xl border-2 border-black dark:border-white transition-all"
                    onClick={() => {setMobileMenuOpen(false); setMobileSolutionsOpen(false);}}
                  >
                    <div className="w-10 h-10 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                      <Image src="/assets/files-icon.svg" alt="" width={20} height={20} className="invert dark:invert-0" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-base">PulseFiles</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Secure File Sharing</div>
                    </div>
                  </Link>
                  <Link 
                    href="/flow" 
                    className="flex items-center gap-4 py-4 px-4 text-black dark:text-foreground font-medium bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 rounded-xl border-2 border-black dark:border-white transition-all"
                    onClick={() => {setMobileMenuOpen(false); setMobileSolutionsOpen(false);}}
                  >
                    <div className="w-10 h-10 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                      <Image src="/assets/crm-icon.svg" alt="" width={20} height={20} className="invert dark:invert-0" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-base">PulseFlow</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Business Management</div>
                    </div>
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
              href="https://docs.ipulse.one/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block py-3 px-4 text-black dark:text-foreground font-medium hover:bg-gray-100 dark:hover:bg-input/50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('docs')}
            </a>
            
            <div className="pt-4 border-t border-gray-200 mt-4">
              {isFlowPage ? (
                <div className="py-3 px-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 text-yellow-800 px-3 py-1 text-sm font-medium">
                    {t('comingSoonBadge')}
                  </span>
                </div>
              ) : (
                <>
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
                </>
              )}
            </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}