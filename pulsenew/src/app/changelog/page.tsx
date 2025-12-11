"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
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

interface ChangelogContent {
  type: string;
  text?: string;
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

// Notion API configuration
const NOTION_API_KEY = 'ntn_b16840128489vSt7VYFXALWZHJa6djiE5gX7CAKwdxNaWz';
const DATABASE_ID = '2c10645fff30803d97b1e65ad67af91d';

function getAppColor(app: string): string {
  const colors: Record<string, string> = { 'PulseFlow': 'yellow', 'PulseFiles': 'purple', 'Pulseguard': 'orange' };
  return colors[app] || 'gray';
}

function getVersionColor(version: string): string {
  const colors: Record<string, string> = { '2.7': 'brown', 'v2.7.1': 'yellow', 'v2.7.0': 'blue', 'v2.6.9': 'pink' };
  return colors[version] || 'gray';
}

export default function Changelog() {
  const [entries, setEntries] = useState<ChangelogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState('all');
  const [expandedEntries, setExpandedEntries] = useState<Set<string>>(new Set());
  const [loadingContent, setLoadingContent] = useState<Set<string>>(new Set());
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [useStaticData, setUseStaticData] = useState(false);

  // Fetch from Notion API via CORS proxy
  const fetchFromNotion = useCallback(async () => {
    try {
      const corsProxy = 'https://corsproxy.io/?';
      const notionUrl = `https://api.notion.com/v1/databases/${DATABASE_ID}/query`;
      
      const response = await fetch(corsProxy + encodeURIComponent(notionUrl), {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${NOTION_API_KEY}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sorts: [
            { property: 'Nummer', direction: 'descending' },
            { timestamp: 'created_time', direction: 'descending' },
          ],
        }),
      });

      if (!response.ok) throw new Error('Notion API failed');
      return (await response.json()).results;
    } catch (error) {
      console.error('Notion API error:', error);
      return null;
    }
  }, []);

  // Fetch page content from Notion
  const fetchPageContent = useCallback(async (pageId: string): Promise<ChangelogContent[]> => {
    try {
      const corsProxy = 'https://corsproxy.io/?';
      const notionUrl = `https://api.notion.com/v1/blocks/${pageId}/children?page_size=100`;
      
      const response = await fetch(corsProxy + encodeURIComponent(notionUrl), {
        headers: {
          'Authorization': `Bearer ${NOTION_API_KEY}`,
          'Notion-Version': '2022-06-28',
        },
      });

      if (!response.ok) return [];

      const data = await response.json();
      
      interface NotionRichText { plain_text: string; }
      interface NotionBlock {
        type: string;
        paragraph?: { rich_text: NotionRichText[] };
        heading_1?: { rich_text: NotionRichText[] };
        heading_2?: { rich_text: NotionRichText[] };
        heading_3?: { rich_text: NotionRichText[] };
        bulleted_list_item?: { rich_text: NotionRichText[] };
        numbered_list_item?: { rich_text: NotionRichText[] };
        image?: { type: 'external' | 'file'; external?: { url: string }; file?: { url: string }; caption?: NotionRichText[]; };
        video?: { type: 'external' | 'file'; external?: { url: string }; file?: { url: string }; };
      }
      
      return data.results.map((block: NotionBlock) => {
        const content: ChangelogContent = { type: block.type };
        switch (block.type) {
          case 'paragraph': content.text = block.paragraph?.rich_text?.map(t => t.plain_text).join('') || ''; break;
          case 'heading_1': content.text = block.heading_1?.rich_text?.map(t => t.plain_text).join('') || ''; break;
          case 'heading_2': content.text = block.heading_2?.rich_text?.map(t => t.plain_text).join('') || ''; break;
          case 'heading_3': content.text = block.heading_3?.rich_text?.map(t => t.plain_text).join('') || ''; break;
          case 'bulleted_list_item': content.text = block.bulleted_list_item?.rich_text?.map(t => t.plain_text).join('') || ''; break;
          case 'numbered_list_item': content.text = block.numbered_list_item?.rich_text?.map(t => t.plain_text).join('') || ''; break;
          case 'image':
            content.url = block.image?.type === 'external' ? block.image.external?.url : block.image?.file?.url;
            content.caption = block.image?.caption?.map(t => t.plain_text).join('') || '';
            break;
          case 'video':
            content.url = block.video?.type === 'external' ? block.video.external?.url : block.video?.file?.url;
            break;
        }
        return content;
      }).filter((c: ChangelogContent) => c.text || c.url);
    } catch (error) {
      console.error('Error fetching page content:', error);
      return [];
    }
  }, []);

  // Fetch static JSON data as fallback
  const fetchStaticData = useCallback(async () => {
    try {
      const response = await fetch('/changelog-data.json');
      if (!response.ok) throw new Error('Static data not found');
      return await response.json();
    } catch { return null; }
  }, []);

  // Main fetch function
  const fetchChangelog = useCallback(async (forceRefresh = false) => {
    setLoading(true);
    
    try {
      if (forceRefresh || !useStaticData) {
        const notionPages = await fetchFromNotion();
        
        if (notionPages && notionPages.length > 0) {
          interface NotionProperty { title?: Array<{ plain_text: string }>; select?: { name: string } | null; }
          interface NotionPage { id: string; created_time: string; properties: { Naam: NotionProperty; App: NotionProperty; Nummer: NotionProperty; }; }
          
          const newEntries: ChangelogEntry[] = notionPages.map((page: NotionPage) => ({
            id: page.id,
            name: page.properties.Naam?.title?.[0]?.plain_text || 'Untitled',
            app: page.properties.App?.select?.name || '',
            appColor: getAppColor(page.properties.App?.select?.name || ''),
            version: page.properties.Nummer?.select?.name || '',
            versionColor: getVersionColor(page.properties.Nummer?.select?.name || ''),
            createdTime: page.created_time,
            content: [],
          }));

          newEntries.sort((a, b) => {
            const versionCompare = b.version.localeCompare(a.version);
            if (versionCompare !== 0) return versionCompare;
            return new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime();
          });

          setEntries(newEntries);
          setLastUpdated(new Date().toISOString());
          setUseStaticData(false);
          setLoading(false);
          return;
        }
      }

      const staticData = await fetchStaticData();
      if (staticData) {
        setEntries(staticData.entries || []);
        setLastUpdated(staticData.lastUpdated);
        setUseStaticData(true);
      } else {
        setEntries([]);
      }
    } catch (error) {
      console.error('Error fetching changelog:', error);
      const staticData = await fetchStaticData();
      if (staticData) {
        setEntries(staticData.entries || []);
        setLastUpdated(staticData.lastUpdated);
        setUseStaticData(true);
      }
    } finally {
      setLoading(false);
    }
  }, [fetchFromNotion, fetchStaticData, useStaticData]);

  useEffect(() => {
    fetchChangelog();
  }, []);

  // Fetch content for a specific entry
  const fetchEntryContent = async (entryId: string) => {
    const pageId = entryId.replace(/-/g, '');
    setLoadingContent(prev => new Set(prev).add(entryId));
    
    try {
      const content = await fetchPageContent(pageId);
      setEntries(prev => prev.map(entry => 
        entry.id === entryId ? { ...entry, content } : entry
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
      if (next.has(entryId)) next.delete(entryId);
      else next.add(entryId);
      return next;
    });

    if (isExpanding) {
      const entry = entries.find(e => e.id === entryId);
      if (entry && entry.content.length === 0) {
        await fetchEntryContent(entryId);
      }
    }
  };

  // Filter entries by app
  const filteredEntries = useMemo(() => {
    if (selectedApp === 'all') return entries;
    return entries.filter(entry => entry.app.toLowerCase() === selectedApp.toLowerCase());
  }, [entries, selectedApp]);

  // Group entries by version
  const groupedEntries = useMemo(() => {
    const groups: Record<string, ChangelogEntry[]> = {};
    filteredEntries.forEach(entry => {
      const version = entry.version || 'Overig';
      if (!groups[version]) groups[version] = [];
      groups[version].push(entry);
    });
    return Object.keys(groups).sort((a, b) => b.localeCompare(a)).map(version => ({
      version,
      entries: groups[version],
    }));
  }, [filteredEntries]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('nl-NL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const renderContent = (content: ChangelogContent[]) => {
    return content.map((block, index) => {
      switch (block.type) {
        case 'paragraph':
          return block.text ? (
            <p key={index} className="text-gray-300 mb-3 leading-relaxed">{block.text}</p>
          ) : null;
        case 'heading_1':
          return <h3 key={index} className="text-2xl font-bold text-white mb-4 mt-6">{block.text}</h3>;
        case 'heading_2':
          return <h4 key={index} className="text-xl font-semibold text-white mb-3 mt-5">{block.text}</h4>;
        case 'heading_3':
          return <h5 key={index} className="text-lg font-medium text-white mb-2 mt-4">{block.text}</h5>;
        case 'bulleted_list_item':
          return <li key={index} className="text-gray-300 ml-4 mb-1 list-disc">{block.text}</li>;
        case 'numbered_list_item':
          return <li key={index} className="text-gray-300 ml-4 mb-1 list-decimal">{block.text}</li>;
        case 'image':
          return block.url ? (
            <div key={index} className="my-6">
              <div className="relative w-full rounded-xl overflow-hidden border border-gray-700">
                <Image src={block.url} alt={block.caption || 'Changelog afbeelding'} width={1200} height={800} className="w-full h-auto object-contain" unoptimized />
              </div>
              {block.caption && <p className="text-sm text-gray-400 mt-2 text-center italic">{block.caption}</p>}
            </div>
          ) : null;
        case 'video':
          return block.url ? (
            <div key={index} className="my-6">
              <video src={block.url} controls className="w-full rounded-xl border border-gray-700" />
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
            onClick={() => fetchChangelog(true)}
            disabled={loading}
            className="shrink-0"
            title="Ververs data"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </Button>
        </div>

        {lastUpdated && (
          <p className="text-sm text-gray-500 mt-4">
            Laatst bijgewerkt: {formatDate(lastUpdated)}
            {useStaticData && <span className="ml-2 text-yellow-500">(cache)</span>}
          </p>
        )}
      </section>

      {/* Changelog Content */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
          </div>
        ) : filteredEntries.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">Geen changelog entries gevonden.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {groupedEntries.map(({ version, entries: versionEntries }) => (
              <div key={version} className="relative">
                {/* Version Header */}
                <div className="sticky top-4 z-10 mb-6">
                  <Badge 
                    variant="outline" 
                    className={`text-sm font-semibold px-4 py-1.5 ${VERSION_COLORS[versionEntries[0]?.versionColor] || VERSION_COLORS.gray}`}
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
                        <div 
                          className="group bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-200 dark:border-white/10 transition-all duration-300 cursor-pointer"
                          onClick={() => toggleExpanded(entry.id)}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                            <div className="flex-1">
                              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                                {entry.name}
                              </h3>
                              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(entry.createdTime)}</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <Badge variant="outline" className={`text-xs ${APP_COLORS[entry.appColor] || APP_COLORS.gray}`}>
                                {entry.app}
                              </Badge>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={(e) => { e.stopPropagation(); toggleExpanded(entry.id); }}
                              >
                                {isLoadingContent ? <Loader2 className="w-4 h-4 animate-spin" /> : isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                              </Button>
                            </div>
                          </div>

                          {isExpanded && (
                            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10">
                              {isLoadingContent ? (
                                <div className="flex items-center justify-center py-8">
                                  <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
                                </div>
                              ) : hasContent ? (
                                <div className="prose prose-invert max-w-none">{renderContent(entry.content)}</div>
                              ) : (
                                <p className="text-gray-500 italic">Geen aanvullende informatie beschikbaar.</p>
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
