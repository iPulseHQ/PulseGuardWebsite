// Build script to fetch changelog data from Notion and save as static JSON
const fs = require('fs');
const path = require('path');

const NOTION_API_KEY = process.env.NOTION_API_KEY || 'ntn_b16840128489vSt7VYFXALWZHJa6djiE5gX7CAKwdxNaWz';
const DATABASE_ID = '2c10645fff30803d97b1e65ad67af91d';

async function fetchNotionDatabase() {
  console.log('Fetching changelog from Notion...');
  
  const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
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

  if (!response.ok) {
    throw new Error(`Notion API error: ${response.statusText}`);
  }

  return response.json();
}

async function fetchPageContent(pageId) {
  const response = await fetch(`https://api.notion.com/v1/blocks/${pageId}/children?page_size=100`, {
    headers: {
      'Authorization': `Bearer ${NOTION_API_KEY}`,
      'Notion-Version': '2022-06-28',
    },
  });

  if (!response.ok) return [];

  const data = await response.json();
  return data.results.map((block) => {
    const content = { type: block.type };

    switch (block.type) {
      case 'paragraph':
        content.text = block.paragraph?.rich_text?.map(t => t.plain_text).join('') || '';
        break;
      case 'heading_1':
        content.text = block.heading_1?.rich_text?.map(t => t.plain_text).join('') || '';
        break;
      case 'heading_2':
        content.text = block.heading_2?.rich_text?.map(t => t.plain_text).join('') || '';
        break;
      case 'heading_3':
        content.text = block.heading_3?.rich_text?.map(t => t.plain_text).join('') || '';
        break;
      case 'bulleted_list_item':
        content.text = block.bulleted_list_item?.rich_text?.map(t => t.plain_text).join('') || '';
        break;
      case 'numbered_list_item':
        content.text = block.numbered_list_item?.rich_text?.map(t => t.plain_text).join('') || '';
        break;
      case 'image':
        content.url = block.image?.type === 'external' 
          ? block.image.external?.url 
          : block.image?.file?.url;
        content.caption = block.image?.caption?.map(t => t.plain_text).join('') || '';
        break;
      case 'video':
        content.url = block.video?.type === 'external' 
          ? block.video.external?.url 
          : block.video?.file?.url;
        break;
    }

    return content;
  }).filter(c => c.text || c.url);
}

function getAppColor(app) {
  const colors = { 'PulseFlow': 'yellow', 'PulseFiles': 'purple', 'Pulseguard': 'orange' };
  return colors[app] || 'gray';
}

function getVersionColor(version) {
  const colors = { '2.7': 'brown', 'v2.7.1': 'yellow', 'v2.7.0': 'blue', 'v2.6.9': 'pink' };
  return colors[version] || 'gray';
}

async function main() {
  try {
    const data = await fetchNotionDatabase();
    const pages = data.results;

    console.log(`Found ${pages.length} changelog entries`);

    const entries = await Promise.all(
      pages.map(async (page) => {
        const name = page.properties.Naam?.title?.[0]?.plain_text || 'Untitled';
        const app = page.properties.App?.select?.name || '';
        const version = page.properties.Nummer?.select?.name || '';
        const pageId = page.id.replace(/-/g, '');

        console.log(`Fetching content for: ${name}`);
        const content = await fetchPageContent(pageId);

        return {
          id: page.id,
          name,
          app,
          appColor: getAppColor(app),
          version,
          versionColor: getVersionColor(version),
          createdTime: page.created_time,
          content,
        };
      })
    );

    // Sort by version and created time
    entries.sort((a, b) => {
      const versionCompare = b.version.localeCompare(a.version);
      if (versionCompare !== 0) return versionCompare;
      return new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime();
    });

    const outputPath = path.join(__dirname, '..', 'public', 'changelog-data.json');
    fs.writeFileSync(outputPath, JSON.stringify({
      entries,
      lastUpdated: new Date().toISOString(),
    }, null, 2));

    console.log(`✓ Changelog data saved to ${outputPath}`);
  } catch (error) {
    console.error('Error fetching changelog:', error);
    process.exit(1);
  }
}

main();
