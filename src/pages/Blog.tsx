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
  image?: string;
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
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
              {post.image ? (
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              ) : (
                <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l-1.586-1.586a2 2 0 00-2.828 0L6 18" />
                  </svg>
                </div>
              )}
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold mb-2">
                  <Link to={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  By {post.author} on {new Date(post.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700 dark:text-gray-300 flex-grow">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="inline-block mt-4 text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 self-start">
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