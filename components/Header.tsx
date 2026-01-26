"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X, ChevronDown, Zap, Upload, QrCode, Calendar, BookOpen, Users, FileText, Mail, Newspaper, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";
import { GB, NL } from "country-flag-icons/react/3x2";
import { analytics, trackEvent, AnalyticsEvents } from "@/lib/analytics";
import { useUser } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the correct app URL based on current page
  const getAppUrl = () => {
    if (pathname?.includes('/pulsefiles')) {
      return 'https://files.ipulse.one';
    } else if (pathname?.includes('/pulseqr')) {
      return 'https://qr.ipulse.one';
    } else if (pathname?.includes('/pulseguard')) {
      return 'https://guard.ipulse.one';
    } else if (pathname?.includes('/pulsesync')) {
      return 'https://sync.ipulse.one';
    }
    return 'https://guard.ipulse.one'; // Default to PulseGuard
  };

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    analytics.trackThemeToggle(newTheme);
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

  const resources = [
    {
      name: t("about"),
      description: language === "nl" ? "Leer ons team kennen" : "Meet our team",
      href: "/about",
      icon: Users,
    },
    {
      name: t("blog"),
      description: language === "nl" ? "Artikelen en updates" : "Articles and updates",
      href: "/blog",
      icon: Newspaper,
    },
    {
      name: t("changelog"),
      description: language === "nl" ? "Laatste wijzigingen" : "Latest changes",
      href: "/changelog",
      icon: FileText,
    },
    {
      name: t("contact"),
      description: language === "nl" ? "Neem contact met ons op" : "Get in touch with us",
      href: "/contact",
      icon: Mail,
    },
    {
      name: "Documentation",
      description: language === "nl" ? "Technische documentatie" : "Technical documentation",
      href: "https://docs.ipulse.one",
      icon: BookOpen,
      external: true,
    },
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
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo - Left aligned */}
          <div className="flex-shrink-0 z-10">
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
          </div>

          {/* Desktop Navigation - Absolute Centered */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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

            {/* Pricing Link */}
            <Link
              href="/pricing"
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                isActive("/pricing")
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-foreground/80 hover:text-foreground hover:bg-muted"
              }`}
              onClick={() => analytics.trackNavigation("/pricing", "pricing")}
            >
              {t("pricing")}
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-1 ${
                  pathname?.includes('/about') || pathname?.includes('/blog') || pathname?.includes('/changelog') || pathname?.includes('/contact')
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted"
                }`}
              >
                {language === "nl" ? "Meer" : "Resources"}
                <ChevronDown className="h-3 w-3" />
              </button>

              {/* Dropdown Menu */}
              {resourcesOpen && (
                <div className="absolute top-full right-0 pt-2">
                  <div className="w-72 glassmorphism rounded-xl border border-border/50 shadow-xl p-2">
                    {resources.map((resource) => (
                      resource.external ? (
                        <a
                          key={resource.name}
                          href={resource.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-3 p-3 rounded-lg transition-all group hover:bg-muted"
                          onClick={() => analytics.trackExternalLink(resource.href, resource.name)}
                        >
                          <div className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                            <resource.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm mb-0.5 group-hover:text-primary transition-colors">
                              {resource.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {resource.description}
                            </div>
                          </div>
                        </a>
                      ) : (
                        <Link
                          key={resource.name}
                          href={resource.href}
                          className={`flex items-start gap-3 p-3 rounded-lg transition-all group ${
                            isActive(resource.href)
                              ? "bg-primary/10 border border-primary/20"
                              : "hover:bg-muted"
                          }`}
                          onClick={() => analytics.trackNavigation(resource.href, resource.name)}
                        >
                          <div className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                            <resource.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm mb-0.5 group-hover:text-primary transition-colors">
                              {resource.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {resource.description}
                            </div>
                          </div>
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Actions - Right aligned */}
          <div className="flex items-center gap-2 z-10">
            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
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

              {/* CTA Buttons / User Profile */}
              {isLoaded && (
                <>
                  {isSignedIn ? (
                    <div className="flex items-center gap-3">
                      <a
                        href={getAppUrl()}
                        className="px-5 py-2 text-sm font-medium text-foreground border border-border/50 hover:border-primary hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200"
                        onClick={() => analytics.trackLogin("header_desktop")}
                      >
                        {language === "nl" ? "Inloggen" : "Sign In"}
                      </a>
                      <a
                        href={getAppUrl()}
                        className="h-9 w-9 rounded-full overflow-hidden ring-2 ring-border/50 hover:ring-primary/50 transition-all flex items-center justify-center bg-primary/10"
                      >
                        {user?.imageUrl ? (
                          <Image
                            src={user.imageUrl}
                            alt={user.firstName || "Profile"}
                            width={36}
                            height={36}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Users className="h-5 w-5 text-primary" />
                        )}
                      </a>
                    </div>
                  ) : (
                    <a
                      href={`${getAppUrl()}/sign-in`}
                      className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 hover:-translate-y-0.5"
                      onClick={() => analytics.trackRegister("header_desktop")}
                    >
                      {language === "nl" ? "Aan de slag" : "Get Started"}
                    </a>
                  )}
                </>
              )}
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-2">
              {isLoaded && isSignedIn && (
                <a
                  href={getAppUrl()}
                  className="h-9 w-9 rounded-full overflow-hidden ring-2 ring-border/50 hover:ring-primary/50 transition-all flex items-center justify-center bg-primary/10 mr-1"
                >
                  {user?.imageUrl ? (
                    <Image
                      src={user.imageUrl}
                      alt={user.firstName || "Profile"}
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Users className="h-5 w-5 text-primary" />
                  )}
                </a>
              )}
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
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100dvh" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden fixed inset-x-0 top-16 bg-white dark:bg-black z-[100] overflow-y-auto border-t border-border"
            >
              <div className="p-4 space-y-6 pb-20">
                {/* Home Link */}
                <Link
                  href="/"
                  className={`block px-4 py-3 text-base font-bold rounded-xl transition-all ${
                    isActive("/")
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    analytics.trackNavigation("/", "home_mobile");
                  }}
                >
                  {t("home")}
                </Link>

                {/* Solutions Section */}
                <div className="space-y-2">
                  <button
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                    className="w-full flex items-center justify-between px-4 py-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors"
                  >
                    {t("solutions")}
                    <ChevronDown className={`h-3 w-3 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileSolutionsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 gap-1 pb-2">
                          {solutions.map((solution) => (
                            <Link
                              key={solution.name}
                              href={solution.href}
                              className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                                isActive(solution.href)
                                  ? "bg-primary/10 border border-primary/20 text-primary"
                                  : "hover:bg-muted"
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                <solution.icon className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <div className="font-bold text-sm">
                                  {solution.name}
                                </div>
                                <div className="text-[11px] text-muted-foreground line-clamp-1">
                                  {solution.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Pricing Link */}
                <Link
                  href="/pricing"
                  className={`block px-4 py-3 text-base font-bold rounded-xl transition-all ${
                    isActive("/pricing")
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    analytics.trackNavigation("/pricing", "pricing_mobile");
                  }}
                >
                  {t("pricing")}
                </Link>

                {/* Resources Section */}
                <div className="space-y-2">
                  <button
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="w-full flex items-center justify-between px-4 py-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors"
                  >
                    {language === "nl" ? "Meer" : "Resources"}
                    <ChevronDown className={`h-3 w-3 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileResourcesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-2 gap-2 pb-2">
                          {resources.map((resource) => (
                            resource.external ? (
                              <a
                                key={resource.name}
                                href={resource.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col gap-2 p-3 rounded-xl border border-border/50 bg-muted/30 hover:bg-muted transition-all"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  analytics.trackExternalLink(resource.href, resource.name);
                                }}
                              >
                                <resource.icon className="h-4 w-4 text-primary" />
                                <span className="font-bold text-xs">{resource.name}</span>
                              </a>
                            ) : (
                              <Link
                                key={resource.name}
                                href={resource.href}
                                className={`flex flex-col gap-2 p-3 rounded-xl border border-border/50 transition-all ${
                                  isActive(resource.href)
                                    ? "bg-primary/10 border border-primary/20 text-primary"
                                    : "bg-muted/30 hover:bg-muted"
                                }`}
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  analytics.trackNavigation(resource.href, `${resource.name}_mobile`);
                                }}
                              >
                                <resource.icon className="h-4 w-4 text-primary" />
                                <span className="font-bold text-xs">{resource.name}</span>
                              </Link>
                            )
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-col gap-3">
                  {isLoaded && (
                    <>
                      {isSignedIn ? (
                        <>
                          <a
                            href={getAppUrl()}
                            className="flex items-center justify-between p-4 rounded-xl border-2 border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all group"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-primary/20">
                                {user?.imageUrl ? (
                                  <Image
                                    src={user.imageUrl}
                                    alt={user.firstName || "Profile"}
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <Users className="h-5 w-5 text-primary" />
                                )}
                              </div>
                              <div>
                                <div className="font-bold text-sm">{user?.firstName || "Account"}</div>
                                <div className="text-[11px] text-muted-foreground">{language === "nl" ? "Naar Dashboard" : "Go to Dashboard"}</div>
                              </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                          </a>
                        </>
                      ) : (
                        <a
                          href={`${getAppUrl()}/sign-in`}
                          className="w-full h-14 bg-white text-black text-base font-bold rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition-all"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            analytics.trackRegister("header_mobile");
                          }}
                        >
                          {language === "nl" ? "Aan de slag" : "Get Started"}
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
