"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Moon, Sun, Globe, Menu, X, ChevronDown, Zap, Upload } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
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
  ];

  const navigation = [
    { name: t("pricing"), href: "#pricing" },
    { name: t("about"), href: "/about" },
    { name: "Changelog", href: "/changelog" },
    { name: t("blog"), href: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
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
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-all flex items-center gap-1"
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
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-all group"
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
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-all"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "nl" : "en")}
              className="h-9 w-9 rounded-md border border-border/50 hover:bg-muted transition-all flex items-center justify-center"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
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
              href="#login"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-all"
            >
              {t("login")}
            </Link>
            <Link
              href="#register"
              className="h-9 px-6 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:opacity-90 transition-all shadow-sm inline-flex items-center justify-center"
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
            {/* Solutions Section */}
            <div className="px-4 py-2">
              <div className="text-xs font-semibold text-muted-foreground mb-2">
                {t("solutions")}
              </div>
              {solutions.map((solution) => (
                <Link
                  key={solution.name}
                  href={solution.href}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-all"
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
                className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setLanguage(language === "en" ? "nl" : "en");
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-all text-left flex items-center gap-2"
              >
                <Globe className="h-4 w-4" />
                {language === "en" ? "Nederlands" : "English"}
              </button>
              <Link
                href="#login"
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("login")}
              </Link>
              <Link
                href="#register"
                className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:opacity-90 transition-all shadow-sm text-center"
                onClick={() => setMobileMenuOpen(false)}
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
