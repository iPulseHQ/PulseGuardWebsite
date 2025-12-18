import { getAllPosts, getAllCategories } from "@/lib/blog";
import BlogClient from "./BlogClient";

export default function BlogPage() {
  const blogPosts = getAllPosts();
  const availableCategories = getAllCategories();

  return <BlogClient blogPosts={blogPosts} availableCategories={availableCategories} />;
}
