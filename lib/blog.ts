import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
  author?: string;
  tags?: string[];
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  formattedDate: string;
  readTime: string;
  image: string;
  author?: string;
  tags?: string[];
}

// Haal alle blog posts op (gesorteerd op datum)
export function getAllPosts(): BlogPostMetadata[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md') && fileName !== 'README.md')
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      const dateStr = data.date || new Date().toISOString();
      const formattedDate = new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });

      return {
        slug,
        title: data.title || '',
        excerpt: data.excerpt || '',
        category: data.category || 'Algemeen',
        date: dateStr,
        formattedDate,
        readTime: data.readTime || '5 min',
        image: data.image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
        author: data.author,
        tags: data.tags || [],
      } as BlogPostMetadata;
    });

  // Sorteer op datum (nieuwste eerst)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Haal een specifieke blog post op
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      category: data.category || 'Algemeen',
      date: data.date || new Date().toISOString(),
      readTime: data.readTime || '5 min',
      image: data.image || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      content,
      author: data.author,
      tags: data.tags || [],
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

// Haal alle slugs op (voor static generation)
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md') && fileName !== 'README.md')
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

// Haal posts op per categorie
export function getPostsByCategory(category: string): BlogPostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === category);
}

// Haal alle unieke categorieën op
export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = allPosts.map((post) => post.category);
  return Array.from(new Set(categories));
}
