"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";
import { analytics } from "@/lib/analytics";
import { GB, NL } from "country-flag-icons/react/3x2";

const STATUS_URL = "https://guard.ipulse.one/status/ipulse";
const STATUS_API = "https://api.ipulse.one/public/status/ipulse/check";

export default function Footer() {
  const { t, language, setLanguage } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<"operational" | "degraded" | "loading">("loading");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);

    const checkStatus = async () => {
      try {
        const response = await fetch(STATUS_API);
        const data = await response.json();
        if (data.status === "operational") {
          setStatus("operational");
        } else {
          setStatus("degraded");
        }
      } catch (error) {
        setStatus("degraded");
      }
    };

    checkStatus();
  }, []);

  const footerLinks = {
    product: [
      { name: "Solutions", href: "#solutions" },
      { name: "Pricing", href: "#pricing" },
      { name: "Documentation", href: "https://docs.ipulse.one", external: true },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "/blog" },
      { name: t("support"), href: "https://ipulse.notion.site/2ca4306c6bc6816aa871d3413fdac5ad?pvs=105", external: true },
    ],
    legal: [
      { name: t("privacy"), href: "/privacy" },
      { name: t("terms"), href: "/terms" },
    ],
  };

  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link 
              href="/" 
              className="flex items-center mb-4"
              onClick={() => analytics.trackFooterLink("/", "logo")}
            >
              {mounted && (
                <Image
                  src={resolvedTheme === "dark" ? "/logowhite.png" : "/logodark.png"}
                  alt="iPulse Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              )}
              {!mounted && (
                <div className="h-8 w-[120px]" />
              )}
            </Link>
            <p className="text-sm text-muted-foreground">
              {t("tagline")}
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold mb-4">{t("product")}</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  {(link as any).external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => analytics.trackExternalLink(link.href, link.name)}
                      suppressHydrationWarning
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => analytics.trackFooterLink(link.href, link.name)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-4">{t("company")}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {(link as any).external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      suppressHydrationWarning
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold mb-4">{t("legal")}</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => analytics.trackFooterLink(link.href, link.name)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} iPulse. {t("allRightsReserved")}
            </p>

            {/* Status Indicator */}
            {mounted && (
              <a
                href={STATUS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-background border border-border/50 hover:bg-muted transition-all text-[10px] font-medium text-muted-foreground shadow-sm"
              >
                <div className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${status === "operational" ? "bg-emerald-400" : status === "degraded" ? "bg-yellow-400" : "bg-muted"}`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${status === "operational" ? "bg-emerald-500" : status === "degraded" ? "bg-yellow-500" : "bg-muted"}`}></span>
                </div>
                <span>
                  {status === "loading" 
                    ? (language === "nl" ? "Status Laden..." : "Loading Status...") 
                    : status === "degraded" 
                      ? (language === "nl" ? "Systeemfout" : "Degraded Status") 
                      : (language === "nl" ? "Systemen Operationeel" : "Systems Operational")}
                </span>
              </a>
            )}
          </div>
          
          {/* Language Toggle */}
          <button
            onClick={() => {
              const newLanguage = language === "en" ? "nl" : "en";
              setLanguage(newLanguage);
              analytics.trackLanguageToggle(newLanguage);
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-border/50 hover:bg-muted transition-all text-sm font-medium"
            aria-label="Toggle language"
          >
            <div className="w-5 h-3.5 overflow-hidden rounded-sm border border-border/30">
              {language === "en" ? (
                <NL className="w-full h-full object-cover" />
              ) : (
                <GB className="w-full h-full object-cover" />
              )}
            </div>
            <span className="text-xs">{language === "en" ? "Nederlands" : "English"}</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
