"use client";

import { useLanguage } from "@/lib/LanguageContext";
import {
  Activity,
  Shield,
  Globe2,
  Zap,
  AlertTriangle,
  BarChart3,
  Eye,
  Film,
  Code,
  Lock,
  Scan,
  Bell,
  Clock,
  CheckCircle,
  XCircle,
  TrendingUp
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  preview: React.ReactNode;
}

export default function FeatureShowcase() {
  const { t } = useLanguage();
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [expandedFeatures, setExpandedFeatures] = useState<Set<number>>(new Set());
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Initialize random expanded features on mount and detect touch device
  useEffect(() => {
    const numFeatures = 12; // Total number of features
    const numToExpand = Math.floor(Math.random() * 3) + 2; // Random 2-4 features
    const randomIndices = new Set<number>();

    while (randomIndices.size < numToExpand) {
      randomIndices.add(Math.floor(Math.random() * numFeatures));
    }

    setExpandedFeatures(randomIndices);

    // Detect touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Handle click/tap for touch devices
  const handleFeatureInteraction = (index: number) => {
    if (isTouchDevice) {
      setExpandedFeatures(prev => {
        const newSet = new Set(prev);
        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
        return newSet;
      });
    }
  };

  const features: Feature[] = [
    {
      icon: Activity,
      title: t("featureUptimeTitle"),
      description: t("featureUptimeDesc"),
      color: "text-emerald-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
      preview: (
        <div className="mt-4 p-4 bg-card rounded-lg border border-border shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{t("allSystemsOperational")}</span>
            </div>
            <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">99.9%</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-muted-foreground">{t("responseTimeLabel")}</span>
              <span className="font-semibold text-foreground">124ms</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-emerald-500 rounded-full"
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground pt-1">
              <span>{t("lastChecked")} 30s {t("ago")}</span>
              <span>{t("nextCheck")} 30s</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Shield,
      title: t("featureSSLTitle"),
      description: t("featureSSLDesc"),
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      preview: (
        <div className="mt-4 p-4 bg-card rounded-lg border border-border shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Lock className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-semibold text-foreground">{t("sslCertificateStatus")}</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center p-2 bg-blue-50 dark:bg-blue-950/20 rounded">
              <span className="text-muted-foreground">{t("expiresIn")}</span>
              <span className="font-semibold text-blue-600">90 days</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-emerald-50 dark:bg-emerald-950/20 rounded">
              <span className="text-muted-foreground">{t("securityGrade")}</span>
              <span className="font-bold text-emerald-600">A+</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-muted rounded">
              <span className="text-muted-foreground">{t("issuer")}</span>
              <span className="font-medium text-foreground">Let's Encrypt</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Globe2,
      title: t("featureMultiLocationTitle"),
      description: t("featureMultiLocationDesc"),
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      preview: (
        <div className="mt-4 p-4 bg-card rounded-lg border border-border shadow-sm">
          <div className="text-xs font-semibold text-foreground mb-3">{t("monitoringLocations")}</div>
          <div className="space-y-1.5">
            {[
              { flag: "🇳🇱", name: t("netherlands"), time: "98ms", status: "online" },
              { flag: "🇩🇪", name: t("germany"), time: "112ms", status: "online" },
              { flag: "🇺🇸", name: t("unitedStates"), time: "245ms", status: "online" },
              { flag: "🇬🇧", name: t("unitedKingdom"), time: "134ms", status: "online" },
            ].map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-2 bg-muted rounded"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{loc.flag}</span>
                  <span className="text-xs font-medium text-foreground">{loc.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{loc.time}</span>
                  <CheckCircle className="h-3 w-3 text-emerald-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      icon: Eye,
      title: t("featureAccessibilityTitle"),
      description: t("featureAccessibilityDesc"),
      color: "text-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-950/20",
      preview: (
        <div className="mt-4 p-4 bg-card rounded-lg border border-border shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-foreground">{t("wcagCompliance")}</span>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-pink-600">92</span>
              <span className="text-xs text-muted-foreground">/100</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="p-2 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-900">
              <div className="font-bold text-red-600 text-lg">2</div>
              <div className="text-muted-foreground text-[10px] font-medium">{t("criticalIssues")}</div>
            </div>
            <div className="p-2 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-900">
              <div className="font-bold text-orange-600 text-lg">5</div>
              <div className="text-muted-foreground text-[10px] font-medium">{t("majorIssues")}</div>
            </div>
            <div className="p-2 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-900">
              <div className="font-bold text-blue-600 text-lg">8</div>
              <div className="text-muted-foreground text-[10px] font-medium">{t("minorIssues")}</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Scan,
      title: t("featureDNSTitle"),
      description: t("featureDNSDesc"),
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      preview: (
        <div className="mt-4 p-4 bg-card rounded-lg border border-border shadow-sm">
          <div className="text-xs font-semibold text-foreground mb-3">{t("dnsRecords")}</div>
          <div className="space-y-1.5 text-xs">
            {[
              { type: "A", value: "192.0.2.1", status: "ok" },
              { type: "AAAA", value: "2001:db8::1", status: "ok" },
              { type: "MX", value: "mail.example.com", status: "ok" },
              { type: "TXT", value: "v=spf1 include...", status: "ok" },
            ].map((record) => (
              <div key={record.type} className="flex items-center justify-between p-2 bg-muted rounded">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-orange-600 w-12">{record.type}</span>
                  <span className="text-muted-foreground truncate">{record.value}</span>
                </div>
                <CheckCircle className="h-3 w-3 text-emerald-500 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      icon: Lock,
      title: t("featureSecurityTitle"),
      description: t("featureSecurityDesc"),
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      preview: (
        <div className="mt-4 p-4 bg-card rounded-lg border border-border shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-foreground">{t("securityScoreLabel")}</span>
            <span className="text-2xl font-bold text-emerald-600">A</span>
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="flex items-center justify-between p-2 bg-emerald-50 dark:bg-emerald-950/20 rounded">
              <span className="text-muted-foreground">{t("httpsEnforced")}</span>
              <CheckCircle className="h-3 w-3 text-emerald-500" />
            </div>
            <div className="flex items-center justify-between p-2 bg-emerald-50 dark:bg-emerald-950/20 rounded">
              <span className="text-muted-foreground">{t("securityHeaders")}</span>
              <CheckCircle className="h-3 w-3 text-emerald-500" />
            </div>
            <div className="flex items-center justify-between p-2 bg-yellow-50 dark:bg-yellow-950/20 rounded">
              <span className="text-muted-foreground">{t("hstsMissing")}</span>
              <AlertTriangle className="h-3 w-3 text-yellow-500" />
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Film,
      title: t("featureFilmstripTitle"),
      description: t("featureFilmstripDesc"),
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/50/20",
      preview: (
        <div className="mt-4 p-4 bg-card rounded-lg border border-border shadow-sm">
          <div className="text-xs font-semibold text-foreground mb-3">{t("pageLoadTimeline")}</div>
          <div className="flex gap-1 mb-2">
            {[30, 50, 70, 85, 95, 100].map((progress, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 aspect-square bg-indigo-100 dark:bg-indigo-950/50 rounded border border-indigo-300 dark:border-indigo-800 flex items-center justify-center"
              >
                <span className="text-[8px] font-bold text-indigo-600">{progress}%</span>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-muted-foreground">
            <span>0ms</span>
            <span>500ms</span>
            <span>1000ms</span>
            <span>1500ms</span>
          </div>
        </div>
      ),
    },
    {
      icon: BarChart3,
      title: t("featureResourceTimingsTitle"),
      description: t("featureResourceTimingsDesc"),
      color: "text-cyan-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
      preview: (
        <div className="mt-4 p-4 bg-card rounded-lg border border-border shadow-sm">
          <div className="text-xs font-semibold text-foreground mb-3">{t("topResources")}</div>
          <div className="space-y-2">
            {[
              { name: "bundle.js", time: 245, size: "2.1 MB" },
              { name: "styles.css", time: 89, size: "156 KB" },
              { name: "image.jpg", time: 156, size: "432 KB" },
            ].map((resource, i) => (
              <motion.div
                key={resource.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-1"
              >
                <div className="flex justify-between text-xs">
                  <span className="font-mono text-foreground">{resource.name}</span>
                  <span className="text-muted-foreground">{resource.time}ms</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(resource.time / 300) * 100}%` }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="h-full bg-cyan-500 rounded-full"
                    />
                  </div>
                  <span className="text-[10px] text-muted-foreground w-12 text-right">{resource.size}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      icon: AlertTriangle,
      title: t("featureIncidentTitle"),
      description: t("featureIncidentDesc"),
      color: "text-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
      preview: (
        <div className="mt-4 p-4 bg-card rounded-lg border border-border shadow-sm">
          <div className="text-xs font-semibold text-foreground mb-3">{t("recentIncidents")}</div>
          <div className="space-y-2">
            {[
              { title: t("siteDowntime"), severity: "critical", time: `2m ${t("ago")}`, color: "red" },
              { title: t("slowResponse"), severity: "warning", time: `15m ${t("ago")}`, color: "yellow" },
              { title: t("highCPUUsage"), severity: "info", time: `1h ${t("ago")}`, color: "blue" },
            ].map((incident, i) => (
              <motion.div
                key={incident.title}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-2 bg-muted rounded"
              >
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full bg-${incident.color}-500`}></div>
                  <span className="text-xs font-medium text-foreground">{incident.title}</span>
                </div>
                <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded">{incident.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      icon: Bell,
      title: t("featureNotificationsTitle"),
      description: t("featureNotificationsDesc"),
      color: "text-teal-600",
      bgColor: "bg-teal-50 dark:bg-teal-950/20",
      preview: (
        <div className="mt-4 p-4 bg-card rounded-lg border border-border shadow-sm">
          <div className="text-xs font-semibold text-foreground mb-3">{t("alertChannels")}</div>
          <div className="space-y-2">
            {[
              { name: t("email"), icon: "📧", enabled: true },
              { name: t("slack"), icon: "💬", enabled: true },
              { name: t("discord"), icon: "🎮", enabled: false },
              { name: t("webhook"), icon: "🔗", enabled: true },
            ].map((channel, i) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-2 bg-muted rounded"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{channel.icon}</span>
                  <span className="text-xs font-medium text-foreground">{channel.name}</span>
                </div>
                <div className={`h-5 w-9 rounded-full transition-colors ${
                  channel.enabled ? 'bg-teal-500' : 'bg-muted-foreground/30'
                } flex items-center px-0.5`}>
                  <motion.div
                    animate={{ x: channel.enabled ? 14 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="h-4 w-4 bg-white rounded-full shadow-sm"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      icon: Code,
      title: t("featureWidgetsTitle"),
      description: t("featureWidgetsDesc"),
      color: "text-violet-600",
      bgColor: "bg-violet-50 dark:bg-violet-950/20",
      preview: (
        <div className="mt-4 p-4 bg-card rounded-lg border border-border shadow-sm">
          <div className="text-xs font-semibold text-foreground mb-3">{t("statusWidget")}</div>
          <div className="p-3 bg-violet-50 dark:bg-violet-950/20 rounded-lg border border-violet-200 dark:border-violet-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-foreground">{t("serviceStatus")}</span>
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-medium text-emerald-600">{t("operational")}</span>
              </div>
            </div>
            <div className="space-y-1">
              {[t("api"), t("website"), t("database")].map((service, i) => (
                <div key={service} className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{service}</span>
                  <CheckCircle className="h-3 w-3 text-emerald-500" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2 text-[10px] text-center text-muted-foreground">
            &lt;iframe src="..." /&gt;
          </div>
        </div>
      ),
    },
    {
      icon: Clock,
      title: t("featurePerformanceTitle"),
      description: t("featurePerformanceDesc"),
      color: "text-lime-600",
      bgColor: "bg-lime-50 dark:bg-lime-950/20",
      preview: (
        <div className="mt-4 p-4 bg-card rounded-lg border border-border shadow-sm">
          <div className="text-xs font-semibold text-foreground mb-3">{t("performanceStats")}</div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: t("avgResponse"), value: "124ms", trend: "down" },
              { label: t("p95Latency"), value: "289ms", trend: "down" },
              { label: t("successRate"), value: "99.9%", trend: "up" },
              { label: t("totalRequests"), value: "52.4K", trend: "up" },
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-2 bg-lime-50 dark:bg-lime-950/20 rounded-lg border border-lime-200 dark:border-lime-800"
              >
                <div className="text-[10px] text-muted-foreground mb-1">{metric.label}</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-foreground">{metric.value}</span>
                  <TrendingUp className={`h-3 w-3 ${
                    metric.trend === "up" ? "text-emerald-500" : "text-red-500 rotate-180"
                  }`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium mb-6 shadow-sm">
              <Zap className="h-4 w-4 text-primary" />
              <span>{t("powerfulFeatures")}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              {t("featureShowcaseTitle")}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("featureShowcaseDesc")}
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isSelected = selectedFeature === index;
            const isExpanded = expandedFeatures.has(index);
            const shouldShowPreview = isSelected || isExpanded;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                onMouseEnter={() => !isTouchDevice && setSelectedFeature(index)}
                onMouseLeave={() => !isTouchDevice && setSelectedFeature(null)}
                onClick={() => handleFeatureInteraction(index)}
                className={`
                  group relative overflow-hidden rounded-2xl p-6
                  border-2 transition-all duration-300 ease-out cursor-pointer
                  ${shouldShowPreview
                    ? `${feature.bgColor} border-primary/50 shadow-2xl shadow-primary/10 scale-[1.02]`
                    : 'bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-lg active:scale-[0.98]'
                  }
                `}
              >
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`
                    h-14 w-14 rounded-xl flex items-center justify-center mb-4
                    transition-all duration-300
                    ${shouldShowPreview
                      ? `${feature.color} bg-card shadow-lg scale-110`
                      : 'bg-muted/50 group-hover:bg-muted'
                    }
                  `}>
                    <Icon className={`h-7 w-7 transition-all duration-300 ${
                      shouldShowPreview ? feature.color : 'text-muted-foreground group-hover:text-foreground'
                    }`} />
                  </div>

                  {/* Title */}
                  <h3 className={`
                    text-lg font-bold mb-2 transition-colors duration-300
                    ${shouldShowPreview ? 'text-foreground' : 'text-foreground/90 group-hover:text-foreground'}
                  `}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className={`
                    text-sm leading-relaxed transition-colors duration-300 mb-2
                    ${shouldShowPreview ? 'text-foreground/80' : 'text-muted-foreground group-hover:text-foreground/70'}
                  `}>
                    {feature.description}
                  </p>

                  {/* Preview */}
                  <AnimatePresence>
                    {shouldShowPreview && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {feature.preview}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
