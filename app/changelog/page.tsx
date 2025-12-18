"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Clock, Package, ChevronDown, Loader2, ChevronRight } from "lucide-react";

interface ChangelogEntry {
  id: string;
  name: string;
  app: string;
  appColor: string;
  version: string;
  versionColor: string;
  createdTime: string;
  url: string;
  content: ChangelogContent[];
}

interface ChangelogContent {
  type: 'paragraph' | 'heading_1' | 'heading_2' | 'heading_3' | 'bulleted_list_item' | 'numbered_list_item' | 'image' | 'video';
  text?: string;
  richText?: Array<{ text: string; href?: string }>;
  url?: string;
  caption?: string;
}

export default function ChangelogPage() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [entries, setEntries] = useState<ChangelogEntry[]>([]);
  const [availableApps, setAvailableApps] = useState<string[]>([]);
  const [selectedApp, setSelectedApp] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [expandedEntries, setExpandedEntries] = useState<Set<string>>(new Set());

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fetch available apps from Notion
  useEffect(() => {
    async function fetchApps() {
      try {
        const response = await fetch('/api/changelog?appsOnly=true');
        if (!response.ok) throw new Error('Failed to fetch apps');
        const data = await response.json();
        setAvailableApps(data.apps || []);
      } catch (err) {
        console.error('Error fetching apps:', err);
      }
    }
    fetchApps();
  }, []);

  // Fetch changelog entries
  useEffect(() => {
    async function fetchChangelog() {
      setLoading(true);
      setError(null);
      try {
        const url = selectedApp === 'all'
          ? '/api/changelog'
          : `/api/changelog?app=${encodeURIComponent(selectedApp)}`;

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch changelog');
        }

        setEntries(data.entries || []);
      } catch (err) {
        console.error('Error fetching changelog:', err);
        const errorMessage = err instanceof Error ? err.message : 'Failed to load changelog. Please try again later.';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }

    fetchChangelog();
  }, [selectedApp]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const getAppColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      orange: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
      purple: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      yellow: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
      green: 'bg-green-500/10 text-green-500 border-green-500/20',
      blue: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      pink: 'bg-pink-500/10 text-pink-500 border-pink-500/20',
      gray: 'bg-gray-500/10 text-gray-500 border-gray-500/20',
    };
    return colorMap[color] || colorMap.gray;
  };

  const toggleEntry = (entryId: string) => {
    setExpandedEntries((prev) => {
      const next = new Set(prev);
      if (next.has(entryId)) {
        next.delete(entryId);
      } else {
        next.add(entryId);
      }
      return next;
    });
  };

  const renderRichText = (richText?: Array<{ text: string; href?: string }>) => {
    if (!richText) return null;
    return richText.map((segment, i) =>
      segment.href ? (
        <a
          key={i}
          href={segment.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline underline"
        >
          {segment.text}
        </a>
      ) : (
        <span key={i}>{segment.text}</span>
      )
    );
  };

  const renderContent = (content: ChangelogContent, index: number) => {
    switch (content.type) {
      case 'heading_1':
        return (
          <h1 key={index} className="text-2xl font-bold mt-6 mb-3">
            {renderRichText(content.richText) || content.text}
          </h1>
        );
      case 'heading_2':
        return (
          <h2 key={index} className="text-xl font-bold mt-5 mb-2">
            {renderRichText(content.richText) || content.text}
          </h2>
        );
      case 'heading_3':
        return (
          <h3 key={index} className="text-lg font-semibold mt-4 mb-2">
            {renderRichText(content.richText) || content.text}
          </h3>
        );
      case 'paragraph':
        if (!content.text && !content.richText?.length) return null;
        return (
          <p key={index} className="text-muted-foreground mb-3 leading-relaxed">
            {renderRichText(content.richText) || content.text}
          </p>
        );
      case 'bulleted_list_item':
        return (
          <li key={index} className="text-muted-foreground ml-6 mb-2 list-disc">
            {renderRichText(content.richText) || content.text}
          </li>
        );
      case 'numbered_list_item':
        return (
          <li key={index} className="text-muted-foreground ml-6 mb-2 list-decimal">
            {renderRichText(content.richText) || content.text}
          </li>
        );
      case 'image':
        return (
          <div key={index} className="my-4">
            <img
              src={content.url}
              alt={content.caption || 'Changelog image'}
              className="rounded-lg w-full max-w-2xl border border-border/50"
            />
            {content.caption && (
              <p className="text-sm text-muted-foreground mt-2 text-center">
                {content.caption}
              </p>
            )}
          </div>
        );
      case 'video':
        return (
          <div key={index} className="my-4">
            <video
              src={content.url}
              controls
              className="rounded-lg w-full max-w-2xl border border-border/50"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        );
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('nl-NL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted border border-border/50 text-sm font-medium shadow-sm">
              <Package className="h-4 w-4 text-primary" />
              Changelog
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Product Updates
              <br />
              <span className="text-gradient">& Release Notes</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay up to date with the latest features, improvements, and bug fixes across all iPulse products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">Filter by app:</span>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-4 py-2 pr-10 rounded-lg border border-border/50 bg-card text-sm font-medium hover:bg-muted transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary min-w-[150px] text-left"
              >
                {selectedApp === 'all' ? 'All Apps' : selectedApp}
                <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setDropdownOpen(false)}
                  />
                  <div className="absolute top-full left-0 mt-2 w-full min-w-[200px] glassmorphism rounded-lg border border-border/50 shadow-xl py-2 z-20">
                    <button
                      onClick={() => {
                        setSelectedApp('all');
                        setDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-sm text-left hover:bg-muted transition-colors ${
                        selectedApp === 'all' ? 'bg-muted font-semibold' : ''
                      }`}
                    >
                      All Apps
                    </button>
                    {availableApps.map((app) => (
                      <button
                        key={app}
                        onClick={() => {
                          setSelectedApp(app);
                          setDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-sm text-left hover:bg-muted transition-colors ${
                          selectedApp === app ? 'bg-muted font-semibold' : ''
                        }`}
                      >
                        {app}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Changelog Entries */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 text-primary animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">{error}</p>
            </div>
          ) : entries.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No changelog entries found.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {entries.map((entry, i) => {
                const isExpanded = expandedEntries.has(entry.id);
                return (
                  <motion.article
                    key={entry.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="glassmorphism rounded-xl border border-border/50 hover:shadow-lg transition-all overflow-hidden"
                  >
                    {/* Compact Header - Always Visible */}
                    <button
                      onClick={() => toggleEntry(entry.id)}
                      className="w-full p-4 sm:p-5 text-left hover:bg-muted/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <ChevronRight
                          className={`h-5 w-5 text-muted-foreground transition-transform flex-shrink-0 ${
                            isExpanded ? 'rotate-90' : ''
                          }`}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${getAppColorClass(
                                entry.appColor
                              )}`}
                            >
                              {entry.app}
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${getAppColorClass(
                                entry.versionColor
                              )}`}
                            >
                              {entry.version}
                            </span>
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {formatDate(entry.createdTime)}
                            </div>
                          </div>
                          <h2 className="text-lg font-bold truncate">{entry.name}</h2>
                        </div>
                      </div>
                    </button>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-border/50"
                      >
                        <div className="p-4 sm:p-6 prose prose-sm max-w-none dark:prose-invert">
                          {entry.content.map((content, idx) => renderContent(content, idx))}
                        </div>
                      </motion.div>
                    )}
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
