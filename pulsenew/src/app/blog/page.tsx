"use client";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import { getTeamMemberByName } from "@/data/team";
import { useTranslation } from "@/hooks/useTranslation";

export default function Blog() {
  const { t, currentLang } = useTranslation();
  const blogPosts = [
    {
      slug: "welcome-to-our-blog",
      title: "Welcome to Our Blog!",
      excerpt: "We're excited to share insights, updates, and best practices about website monitoring, server management, and digital infrastructure.",
      author: "Arjan den Hartog",
      date: "2024-01-15",
      image: "/assets/dashboard.png"
    },
    {
      slug: "website-security-performance",
      title: "Veiligheid en websiteprestaties: een win-win",
      excerpt: "Ontdek hoe goede beveiliging en prestaties hand in hand gaan voor een betere gebruikerservaring en SEO-rankings.",
      author: "Noah van den Broek",
      date: "2024-01-10",
      image: "/assets/bigstock-Cyber-Security-Concept-Login-464450397.webp"
    }
  ];

  return (
    <div className="min-h-screen text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-gray-100 dark:bg-white/10 backdrop-blur-sm rounded-full border border-gray-200 dark:border-white/20">
          <span className="text-sm font-medium flex items-center gap-2 text-gray-900 dark:text-white">
            <BookOpen className="w-4 h-4" />
            Latest Insights
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
          {t('blogHeroTitle')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {t('blogHeroSubtitle')}
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="group relative bg-gray-50 dark:bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-500 border border-gray-200 dark:border-white/10 h-full flex flex-col">
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 dark:from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image */}
                <div className="relative h-56 bg-black/20 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="relative z-10 p-6 flex-1 flex flex-col">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(post.date).toLocaleDateString(currentLang === 'nl' ? 'nl-NL' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                    {post.title}
                  </h2>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 flex-1 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {/* Author & Read More */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-white/10">
                    <div className="flex items-center gap-3">
                      {(() => {
                        const teamMember = getTeamMemberByName(post.author);
                        return teamMember ? (
                          <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-white/20">
                            <Image
                              src={teamMember.image}
                              alt={teamMember.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-10 h-10 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                          </div>
                        );
                      })()}
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{post.author}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      <span className="hidden sm:inline">Read more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}