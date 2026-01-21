"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X, ChevronDown, Zap, Upload, QrCode, Calendar } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";
import { GB, NL } from "country-flag-icons/react/3x2";
import { analytics, trackEvent, AnalyticsEvents } from "@/lib/analytics";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    analytics.trackThemeToggle(newTheme);
  };

  // Determine sign-in URL based on current page
  const getSignInUrl = () => {
    if (pathname?.includes('/pulsefiles')) {
      return 'https://files.ipulse.one/sign-in';
    } else if (pathname?.includes('/pulseqr')) {
      return 'https://qr.ipulse.one/sign-in';
    } else if (pathname?.includes('/pulseguard')) {
      return 'https://guard.ipulse.one/sign-in';
    } else if (pathname?.includes('/pulsesync')) {
      return 'https://sync.ipulse.one/sign-in';
    }
    return 'https://guard.ipulse.one/sign-in'; // Default to PulseGuard
  };

  // Determine register URL based on current page
  const getRegisterUrl = () => {
    if (pathname?.includes('/pulsefiles')) {
      return 'https://files.ipulse.one/sign-in';
    } else if (pathname?.includes('/pulseqr')) {
      return 'https://qr.ipulse.one/sign-in';
    } else if (pathname?.includes('/pulseguard')) {
      return 'https://guard.ipulse.one/sign-in';
    } else if (pathname?.includes('/pulsesync')) {
      return 'https://sync.ipulse.one/sign-in';
    }
    return 'https://guard.ipulse.one/sign-in'; // Default to PulseGuard
  };

  const solutions = [
    {
      name: t("pulseGuard"),
      description: t("pulseGuardDesc"),
      href: "/pulseguard",
      icon: Zap,
    },
    {
      name: t("pulseFiles"),
      description: t("pulseFilesDesc"),
      href: "/pulsefiles",
      icon: Upload,
    },
    {
      name: "PulseQR",
      description: t("pulseQRDesc"),
      href: "/pulseqr",
      icon: QrCode,
    },
    {
      name: "PulseSync",
      description: t("pulseSyncDesc"),
      href: "/pulsesync",
      icon: Calendar,
    },
  ];

  const navigation = [
    { name: t("pricing"), href: "/pricing" },
    { name: t("about"), href: "/about" },
    { name: t("changelog"), href: "/changelog" },
    { name: t("blog"), href: "/blog" },
    { name: t("contact"), href: "/contact" },
  ];

  // Helper function to check if a path is active
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname?.startsWith(href + "/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center hover:opacity-80 transition-opacity"
            onClick={() => analytics.trackNavigation("/", "logo")}
          >
            {mounted && (
              <Image
                src={resolvedTheme === "dark" ? "/logowhite.png" : "/logodark.png"}
                alt="iPulse Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            )}
            {!mounted && (
              <div className="h-8 w-[120px]" />
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Home Link */}
            <Link
              href="/"
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                isActive("/")
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-foreground/80 hover:text-foreground hover:bg-muted"
              }`}
              onClick={() => analytics.trackNavigation("/", "home")}
            >
              {t("home")}
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                setSolutionsOpen(true);
                trackEvent(AnalyticsEvents.SOLUTIONS_DROPDOWN_OPEN, { location: 'header_desktop' });
              }}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-1 ${
                  pathname?.includes('/pulseguard') || pathname?.includes('/pulsefiles') || pathname?.includes('/pulseqr') || pathname?.includes('/pulsesync')
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted"
                }`}
              >
                {t("solutions")}
                <ChevronDown className="h-3 w-3" />
              </button>

              {/* Dropdown Menu */}
              {solutionsOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-80 glassmorphism rounded-xl border border-border/50 shadow-xl p-2">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.name}
                        href={solution.href}
                        className={`flex items-start gap-3 p-3 rounded-lg transition-all group ${
                          isActive(solution.href)
                            ? "bg-primary/10 border border-primary/20"
                            : "hover:bg-muted"
                        }`}
                        onClick={() => analytics.trackSolutionClick(solution.name)}
                      >
                        <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <solution.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm mb-0.5 group-hover:text-primary transition-colors">
                            {solution.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {solution.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  isActive(item.href)
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted"
                }`}
                onClick={() => analytics.trackNavigation(item.href, item.name)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={() => {
                const newLanguage = language === "en" ? "nl" : "en";
                setLanguage(newLanguage);
                analytics.trackLanguageToggle(newLanguage);
              }}
              className="h-9 w-9 rounded-md border border-border/50 hover:bg-muted transition-all flex items-center justify-center overflow-hidden p-1"
              aria-label="Toggle language"
              title={language === "en" ? t("switchToNL") : t("switchToEN")}
            >
              {language === "en" ? (
                <NL className="w-full h-full object-cover rounded-md" />
              ) : (
                <GB className="w-full h-full object-cover rounded-md" />
              )}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="h-9 w-9 rounded-md border border-border/50 hover:bg-muted transition-all flex items-center justify-center"
              aria-label="Toggle theme"
              disabled={!mounted}
            >
              {mounted ? (
                <>
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </>
              ) : (
                <div className="h-4 w-4" />
              )}
            </button>

            {/* CTA Buttons */}
            <Link
              href={getSignInUrl()}
              className="px-5 py-2 text-sm font-medium text-foreground border border-border/50 hover:border-primary hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
              onClick={() => analytics.trackLogin("header_desktop")}
            >
              {t("login")}
            </Link>
            <Link
              href={getRegisterUrl()}
              className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 hover:-translate-y-0.5"
              onClick={() => analytics.trackRegister("header_desktop")}
            >
              {t("register")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="h-9 w-9 rounded-md border border-border/50 hover:bg-muted transition-all flex items-center justify-center"
              aria-label="Toggle theme"
              disabled={!mounted}
            >
              {mounted ? (
                <>
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </>
              ) : (
                <div className="h-4 w-4" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-9 w-9 rounded-md border border-border/50 hover:bg-muted transition-all flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border/50">
            {/* Home Link */}
            <Link
              href="/"
              className={`block px-4 py-2 text-sm font-medium rounded-md transition-all ${
                isActive("/")
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-foreground/80 hover:text-foreground hover:bg-muted"
              }`}
              onClick={() => {
                setMobileMenuOpen(false);
                analytics.trackNavigation("/", "home_mobile");
              }}
            >
              {t("home")}
            </Link>

            {/* Solutions Section */}
            <div className="px-4 py-2">
              <div className="text-xs font-semibold text-muted-foreground mb-2">
                {t("solutions")}
              </div>
              {solutions.map((solution) => (
                <Link
                  key={solution.name}
                  href={solution.href}
                  className={`flex items-start gap-3 p-3 rounded-lg transition-all ${
                    isActive(solution.href)
                      ? "bg-primary/10 border border-primary/20"
                      : "hover:bg-muted"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <solution.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm mb-0.5">
                      {solution.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {solution.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  isActive(item.href)
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted"
                }`}
                onClick={() => {
                  setMobileMenuOpen(false);
                  analytics.trackNavigation(item.href, `${item.name}_mobile`);
                }}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  const newLanguage = language === "en" ? "nl" : "en";
                  setLanguage(newLanguage);
                  setMobileMenuOpen(false);
                  analytics.trackLanguageToggle(newLanguage);
                }}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-all text-left flex items-center gap-2"
              >
                <div className="w-6 h-4 overflow-hidden rounded-sm border border-border/30">
                  {language === "en" ? (
                    <NL className="w-full h-full object-cover rounded-sm" />
                  ) : (
                    <GB className="w-full h-full object-cover rounded-sm" />
                  )}
                </div>
                {language === "en" ? t("languageNL") : t("languageEN")}
              </button>
              <Link
                href={getSignInUrl()}
                className="px-5 py-2.5 text-sm font-medium text-foreground border border-border/50 hover:border-primary hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200 text-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  analytics.trackLogin("header_mobile");
                }}
              >
                {t("login")}
              </Link>
              <Link
                href={getRegisterUrl()}
                className="px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg shadow-white/10 text-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  analytics.trackRegister("header_mobile");
                }}
              >
                {t("register")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
