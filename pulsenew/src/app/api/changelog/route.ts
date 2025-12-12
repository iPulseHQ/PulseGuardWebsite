import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Notion API configuration
const NOTION_API_KEY = process.env.NOTION_API_KEY;
const DATABASE_ID = '2c10645fff30803d97b1e65ad67af91d';

// Cache configuration - revalidate every 5 minutes
export const revalidate = 300;

interface NotionProperty {
  type: string;
  title?: Array<{ plain_text: string }>;
  select?: { name: string; color: string } | null;
  created_time?: string;
}

interface NotionPage {
  id: string;
  url: string;
  created_time: string;
  properties: {
    Naam: NotionProperty;
    App: NotionProperty;
    Nummer: NotionProperty;
  };
}

interface NotionBlock {
  id: string;
  type: string;
  paragraph?: {
    rich_text: Array<{ plain_text: string }>;
  };
  heading_1?: {
    rich_text: Array<{ plain_text: string }>;
  };
  heading_2?: {
    rich_text: Array<{ plain_text: string }>;
  };
  heading_3?: {
    rich_text: Array<{ plain_text: string }>;
  };
  bulleted_list_item?: {
    rich_text: Array<{ plain_text: string }>;
  };
  numbered_list_item?: {
    rich_text: Array<{ plain_text: string }>;
  };
  image?: {
    type: 'external' | 'file';
    external?: { url: string };
    file?: { url: string };
    caption?: Array<{ plain_text: string }>;
  };
  video?: {
    type: 'external' | 'file';
    external?: { url: string };
    file?: { url: string };
  };
}

export interface ChangelogEntry {
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

export interface ChangelogContent {
  type: 'paragraph' | 'heading_1' | 'heading_2' | 'heading_3' | 'bulleted_list_item' | 'numbered_list_item' | 'image' | 'video';
  text?: string;
  url?: string;
  caption?: string;
}

async function fetchNotionDatabase(forceRefresh?: boolean): Promise<NotionPage[]> {
  if (!NOTION_API_KEY) {
    console.error('NOTION_API_KEY is not set');
    return [];
  }

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sorts: [
          {
            property: 'Nummer',
            direction: 'descending',
          },
          {
            timestamp: 'created_time',
            direction: 'descending',
          },
        ],
      }),
      cache: forceRefresh ? 'no-store' : 'default',
      next: forceRefresh ? undefined : { revalidate: 300 },
    });

    if (!response.ok) {
      console.error('Notion API error:', response.statusText);
      return [];
    }

    const data = await response.json();
    return data.results as NotionPage[];
  } catch (error) {
    console.error('Error fetching Notion database:', error);
    return [];
  }
}

async function fetchPageContent(pageId: string): Promise<ChangelogContent[]> {
  if (!NOTION_API_KEY) return [];

  try {
    const response = await fetch(`https://api.notion.com/v1/blocks/${pageId}/children?page_size=100`, {
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28',
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) return [];

    const data = await response.json();
    const blocks = data.results as NotionBlock[];

    return blocks.map((block) => {
      const content: ChangelogContent = { type: 'paragraph' };

      switch (block.type) {
        case 'paragraph':
          content.type = 'paragraph';
          content.text = block.paragraph?.rich_text.map(t => t.plain_text).join('') || '';
          break;
        case 'heading_1':
          content.type = 'heading_1';
          content.text = block.heading_1?.rich_text.map(t => t.plain_text).join('') || '';
          break;
        case 'heading_2':
          content.type = 'heading_2';
          content.text = block.heading_2?.rich_text.map(t => t.plain_text).join('') || '';
          break;
        case 'heading_3':
          content.type = 'heading_3';
          content.text = block.heading_3?.rich_text.map(t => t.plain_text).join('') || '';
          break;
        case 'bulleted_list_item':
          content.type = 'bulleted_list_item';
          content.text = block.bulleted_list_item?.rich_text.map(t => t.plain_text).join('') || '';
          break;
        case 'numbered_list_item':
          content.type = 'numbered_list_item';
          content.text = block.numbered_list_item?.rich_text.map(t => t.plain_text).join('') || '';
          break;
        case 'image':
          content.type = 'image';
          content.url = block.image?.type === 'external' 
            ? block.image.external?.url 
            : block.image?.file?.url;
          content.caption = block.image?.caption?.map(t => t.plain_text).join('') || '';
          break;
        case 'video':
          content.type = 'video';
          content.url = block.video?.type === 'external' 
            ? block.video.external?.url 
            : block.video?.file?.url;
          break;
      }

      return content;
    }).filter(c => c.text || c.url);
  } catch (error) {
    console.error('Error fetching page content:', error);
    return [];
  }
}

function getAppColor(app: string | null): string {
  const colors: Record<string, string> = {
    'PulseFlow': 'yellow',
    'PulseFiles': 'purple',
    'Pulseguard': 'orange',
  };
  return colors[app || ''] || 'gray';
}

function getVersionColor(version: string | null): string {
  const colors: Record<string, string> = {
    '2.7': 'brown',
    'v2.7.1': 'yellow',
    'v2.7.0': 'blue',
    'v2.6.9': 'pink',
  };
  return colors[version || ''] || 'gray';
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const appFilter = searchParams.get('app');
  const withContent = searchParams.get('content') === 'true';
  const pageId = searchParams.get('pageId');
  const forceRefresh = searchParams.get('refresh');

  // If requesting specific page content
  if (pageId) {
    const content = await fetchPageContent(pageId);
    return NextResponse.json({ content });
  }

  const pages = await fetchNotionDatabase(!!forceRefresh);

  let entries: ChangelogEntry[] = await Promise.all(
    pages.map(async (page) => {
      const name = page.properties.Naam?.title?.[0]?.plain_text || 'Untitled';
      const app = page.properties.App?.select?.name || '';
      const version = page.properties.Nummer?.select?.name || '';
      
      // Format page ID for content fetching
      const pageIdFormatted = page.id.replace(/-/g, '');
      
      const entry: ChangelogEntry = {
        id: page.id,
        name,
        app,
        appColor: getAppColor(app),
        version,
        versionColor: getVersionColor(version),
        createdTime: page.created_time,
        url: page.url,
        content: withContent ? await fetchPageContent(pageIdFormatted) : [],
      };

      return entry;
    })
  );

  // Apply app filter
  if (appFilter && appFilter !== 'all') {
    entries = entries.filter(entry => 
      entry.app.toLowerCase() === appFilter.toLowerCase()
    );
  }

  // Sort by version (descending) and then by created time
  entries.sort((a, b) => {
    // First sort by version
    const versionCompare = b.version.localeCompare(a.version);
    if (versionCompare !== 0) return versionCompare;
    // Then by created time
    return new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime();
  });

  return NextResponse.json({ 
    entries,
    lastUpdated: new Date().toISOString(),
  });
}
