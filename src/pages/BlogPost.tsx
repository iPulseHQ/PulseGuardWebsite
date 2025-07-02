import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

interface Post {
  id: number;
  slug: string;
  title: string;
  author: string;
  date: string;
  content: string;
  image?: string;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/blogs.json')
      .then(response => response.json())
      .then((data: Post[]) => {
        const currentPost = data.find(p => p.slug === slug);
        setPost(currentPost || null);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div className="container mx-auto px-4 py-8 text-center">Loading...</div>;
  }

  if (!post) {
    return <div className="container mx-auto px-4 py-8 text-center">Post not found.</div>;
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <article className="prose lg:prose-xl dark:prose-invert mx-auto pt-8">
          {post.image && (
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-auto rounded mb-6"
            />
          )}
          <h1>{post.title}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              By {post.author} on {new Date(post.date).toLocaleDateString()}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
           <Link to="/blog" className="inline-block mt-8 text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 no-underline">
              &larr; Back to Blog
          </Link>
        </article>
      </div>
    </Layout>
  );
};

export default BlogPost; 