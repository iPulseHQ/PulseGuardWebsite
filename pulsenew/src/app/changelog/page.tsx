"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { 
  Calendar, 
  Sparkles, 
  Filter, 
  ChevronDown, 
  ChevronUp,
  RefreshCw,
  Tag,
  Loader2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface RichTextSegment {
  text: string;
  href?: string;
}

interface ChangelogContent {
  type: 'paragraph' | 'heading_1' | 'heading_2' | 'heading_3' | 'bulleted_list_item' | 'numbered_list_item' | 'image' | 'video';
  text?: string;
  richText?: RichTextSegment[];
  url?: string;
  caption?: string;
}

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

const APP_FILTERS = [
  { value: 'all', label: 'Alle Apps', color: 'gray' },
  { value: 'pulseguard', label: 'PulseGuard', color: 'orange' },
  { value: 'pulseflow', label: 'PulseFlow', color: 'yellow' },
  { value: 'pulsefiles', label: 'PulseFiles', color: 'purple' },
];

const APP_COLORS: Record<string, string> = {
  orange: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  yellow: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  gray: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
};

const VERSION_COLORS: Record<string, string> = {
  brown: 'bg-amber-700/20 text-amber-500 border-amber-700/30',
  yellow: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  pink: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  gray: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
};

export default function Changelog() {
  const [entries, setEntries] = useState<ChangelogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState('all');
  const [expandedEntries, setExpandedEntries] = useState<Set<string>>(new Set());
  const [loadingContent, setLoadingContent] = useState<Set<string>>(new Set());
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  // Fetch changelog entries
  const fetchChangelog = async (app?: string, forceRefresh?: boolean) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (app && app !== 'all') {
        params.set('app', app);
      }
      params.set('content', 'true');
      if (forceRefresh) {
        params.set('refresh', Date.now().toString());
      }
      
      const response = await fetch(`/api/changelog?${params.toString()}`, {
        cache: forceRefresh ? 'no-store' : 'default',
      });
      const data = await response.json();
      
      setEntries(data.entries || []);
      setLastUpdated(data.lastUpdated);
    } catch (error) {
      console.error('Error fetching changelog:', error);
      setEntries([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChangelog(selectedApp);
  }, [selectedApp]);

  // Fetch content for a specific entry
  const fetchEntryContent = async (entryId: string) => {
    const pageId = entryId.replace(/-/g, '');
    setLoadingContent(prev => new Set(prev).add(entryId));
    
    try {
      const response = await fetch(`/api/changelog?pageId=${pageId}`);
      const data = await response.json();
      
      setEntries(prev => prev.map(entry => 
        entry.id === entryId 
          ? { ...entry, content: data.content || [] }
          : entry
      ));
    } catch (error) {
      console.error('Error fetching entry content:', error);
    } finally {
      setLoadingContent(prev => {
        const next = new Set(prev);
        next.delete(entryId);
        return next;
      });
    }
  };

  const toggleExpanded = async (entryId: string) => {
    const isExpanding = !expandedEntries.has(entryId);
    
    setExpandedEntries(prev => {
      const next = new Set(prev);
      if (next.has(entryId)) {
        next.delete(entryId);
      } else {
        next.add(entryId);
      }
      return next;
    });

    // Fetch content if expanding and content not loaded
    if (isExpanding) {
      const entry = entries.find(e => e.id === entryId);
      if (entry && entry.content.length === 0) {
        await fetchEntryContent(entryId);
      }
    }
  };

  // Group entries by version
  const groupedEntries = useMemo(() => {
    const groups: Record<string, ChangelogEntry[]> = {};
    
    entries.forEach(entry => {
      const version = entry.version || 'Overig';
      if (!groups[version]) {
        groups[version] = [];
      }
      groups[version].push(entry);
    });
    
    // Sort versions (descending)
    const sortedVersions = Object.keys(groups).sort((a, b) => b.localeCompare(a));
    
    return sortedVersions.map(version => ({
      version,
      entries: groups[version],
    }));
  }, [entries]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('nl-NL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Helper function to render rich text with links
  const renderRichText = (block: ChangelogContent) => {
    if (!block.richText || block.richText.length === 0) {
      return block.text || '';
    }

    return block.richText.map((segment, segmentIndex) => {
      if (segment.href) {
        return (
          <a
            key={segmentIndex}
            href={segment.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 underline transition-colors"
          >
            {segment.text}
          </a>
        );
      }
      return <span key={segmentIndex}>{segment.text}</span>;
    });
  };

  const renderContent = (content: ChangelogContent[]) => {
    return content.map((block, index) => {
      switch (block.type) {
        case 'paragraph':
          return block.text ? (
            <p key={index} className="text-gray-300 mb-3 leading-relaxed">
              {renderRichText(block)}
            </p>
          ) : null;
        case 'heading_1':
          return (
            <h3 key={index} className="text-2xl font-bold text-white mb-4 mt-6">
              {renderRichText(block)}
            </h3>
          );
        case 'heading_2':
          return (
            <h4 key={index} className="text-xl font-semibold text-white mb-3 mt-5">
              {renderRichText(block)}
            </h4>
          );
        case 'heading_3':
          return (
            <h5 key={index} className="text-lg font-medium text-white mb-2 mt-4">
              {renderRichText(block)}
            </h5>
          );
        case 'bulleted_list_item':
          return (
            <li key={index} className="text-gray-300 ml-4 mb-1 list-disc">
              {renderRichText(block)}
            </li>
          );
        case 'numbered_list_item':
          return (
            <li key={index} className="text-gray-300 ml-4 mb-1 list-decimal">
              {renderRichText(block)}
            </li>
          );
        case 'image':
          return block.url ? (
            <div key={index} className="my-6">
              <div className="relative w-full rounded-xl overflow-hidden border border-gray-700">
                <Image
                  src={block.url}
                  alt={block.caption || 'Changelog afbeelding'}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                  unoptimized // For external Notion images
                />
              </div>
              {block.caption && (
                <p className="text-sm text-gray-400 mt-2 text-center italic">
                  {block.caption}
                </p>
              )}
            </div>
          ) : null;
        case 'video':
          return block.url ? (
            <div key={index} className="my-6">
              <video
                src={block.url}
                controls
                className="w-full rounded-xl border border-gray-700"
              />
            </div>
          ) : null;
        default:
          return null;
      }
    });
  };

  return (
    <div className="min-h-screen text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative max-w-4xl mx-auto px-4 py-16 sm:py-20 text-center">
        <Badge variant="outline" className="mb-6 text-sm">
          <Sparkles className="w-3 h-3 mr-2" />
          Changelog
        </Badge>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
          Wat is er nieuw?
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Blijf op de hoogte van de nieuwste updates, verbeteringen en bugfixes 
          voor alle PulseGuard producten.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="min-w-[180px] justify-between">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  {APP_FILTERS.find(f => f.value === selectedApp)?.label}
                </div>
                <ChevronDown className="w-4 h-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-[180px]">
              {APP_FILTERS.map((filter) => (
                <DropdownMenuItem
                  key={filter.value}
                  onClick={() => setSelectedApp(filter.value)}
                  className={selectedApp === filter.value ? 'bg-accent' : ''}
                >
                  <span className={`w-2 h-2 rounded-full mr-2 ${
                    filter.color === 'orange' ? 'bg-orange-500' :
                    filter.color === 'yellow' ? 'bg-yellow-500' :
                    filter.color === 'purple' ? 'bg-purple-500' :
                    'bg-gray-500'
                  }`} />
                  {filter.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => fetchChangelog(selectedApp, true)}
            disabled={loading}
            className="shrink-0"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </Button>
        </div>

        {lastUpdated && (
          <p className="text-sm text-gray-500 mt-4">
            Laatst bijgewerkt: {formatDate(lastUpdated)}
          </p>
        )}
      </section>

      {/* Changelog Content */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
          </div>
        ) : entries.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              Geen changelog entries gevonden.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {groupedEntries.map(({ version, entries: versionEntries }) => (
              <div key={version} className="relative">
                {/* Version Header */}
                <div className="sticky top-4 z-10 mb-6">
                  <Badge 
                    variant="outline" 
                    className={`text-sm font-semibold px-4 py-1.5 ${
                      VERSION_COLORS[versionEntries[0]?.versionColor] || VERSION_COLORS.gray
                    }`}
                  >
                    <Tag className="w-3 h-3 mr-2" />
                    {version}
                  </Badge>
                </div>

                {/* Entries */}
                <div className="space-y-6">
                  {versionEntries.map((entry) => {
                    const isExpanded = expandedEntries.has(entry.id);
                    const isLoadingContent = loadingContent.has(entry.id);
                    const hasContent = entry.content && entry.content.length > 0;

                    return (
                      <div key={entry.id}>
                        {/* Entry Card */}
                        <div 
                          className="group bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-200 dark:border-white/10 transition-all duration-300 cursor-pointer"
                          onClick={() => toggleExpanded(entry.id)}
                        >
                          {/* Entry Header */}
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                            <div className="flex-1">
                              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                                {entry.name}
                              </h3>
                              
                              {/* Date */}
                              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(entry.createdTime)}</span>
                              </div>
                            </div>

                            {/* Badges */}
                            <div className="flex items-center gap-2 shrink-0">
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${APP_COLORS[entry.appColor] || APP_COLORS.gray}`}
                              >
                                {entry.app}
                              </Badge>
                              
                              {/* Expand/Collapse Indicator */}
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleExpanded(entry.id);
                                }}
                              >
                                {isLoadingContent ? (
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                ) : isExpanded ? (
                                  <ChevronUp className="w-4 h-4" />
                                ) : (
                                  <ChevronDown className="w-4 h-4" />
                                )}
                              </Button>
                            </div>
                          </div>

                          {/* Expanded Content */}
                          {isExpanded && (
                            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10">
                              {isLoadingContent ? (
                                <div className="flex items-center justify-center py-8">
                                  <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
                                </div>
                              ) : hasContent ? (
                                <div className="prose prose-invert max-w-none">
                                  {renderContent(entry.content)}
                                </div>
                              ) : (
                                <p className="text-gray-500 italic">
                                  Geen aanvullende informatie beschikbaar.
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
