import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('/blogs.json')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  <Link to={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  By {post.author} on {new Date(post.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="inline-block mt-4 text-blue-500 hover:text-blue-700 dark:hover:text-blue-300">
                  Read More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog; 