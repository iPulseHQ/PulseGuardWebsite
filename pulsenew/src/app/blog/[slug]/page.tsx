"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getTeamMemberByName } from "@/data/team";
import { useTranslation } from "@/hooks/useTranslation";

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  author: string;
  date: string;
  image: string;
}

const blogPosts: Record<string, BlogPost> = {
  "welcome-to-our-blog": {
    slug: "welcome-to-our-blog",
    title: "Welcome to Our Blog!",
    content: `
      <p>We&apos;re excited to launch the PulseGuard blog! This is your go-to resource for insights, updates, and best practices about website monitoring, server management, and digital infrastructure.</p>
      
      <h2>What you can expect</h2>
      <p>Our blog will cover a wide range of topics including:</p>
      <ul>
        <li>Website monitoring best practices</li>
        <li>Server performance optimization</li>
        <li>Security monitoring and alerts</li>
        <li>Platform updates and new features</li>
        <li>Case studies and success stories</li>
      </ul>
      
      <h2>Our mission</h2>
      <p>At PulseGuard, we believe that reliable monitoring is the foundation of any successful digital business. Through this blog, we aim to share our knowledge and help you build more resilient systems.</p>
      
      <p>Stay tuned for regular updates, and don&apos;t hesitate to reach out if you have specific topics you&apos;d like us to cover!</p>
    `,
    author: "Arjan den Hartog",
    date: "2024-01-15",
    image: "/assets/dashboard.png"
  },
  "website-security-performance": {
    slug: "website-security-performance",
    title: "Veiligheid en websiteprestaties: een win-win",
    content: `
      <p>In de digitale wereld van vandaag zijn veiligheid en prestaties niet alleen belangrijke factoren voor de gebruikerservaring, maar ook voor SEO-rankings en bedrijfssucces.</p>
      
      <h2>Waarom veiligheid belangrijk is</h2>
      <p>Website beveiliging beschermt niet alleen uw gegevens, maar beïnvloedt ook:</p>
      <ul>
        <li>Gebruikersvertrouwen en conversies</li>
        <li>SEO-rankings (Google beloont veilige sites)</li>
        <li>Bedrijfsreputatie en merkwaarde</li>
        <li>Compliance met regelgeving</li>
      </ul>
      
      <h2>Prestaties die ertoe doen</h2>
      <p>Snelle websites leveren betere resultaten op:</p>
      <ul>
        <li>Lagere bounce rates</li>
        <li>Hogere conversieratio&apos;s</li>
        <li>Betere gebruikerservaring</li>
        <li>Hogere SEO-rankings</li>
      </ul>
      
      <h2>De PulseGuard aanpak</h2>
      <p>Met PulseGuard monitort u beide aspecten in één platform. Onze tools helpen u:</p>
      <ul>
        <li>SSL-certificaten te monitoren</li>
        <li>Website prestaties te meten</li>
        <li>Uptime te bewaken</li>
        <li>Problemen proactief te detecteren</li>
      </ul>
      
      <p>Investeren in monitoring is investeren in uw digitale succes!</p>
    `,
    author: "Noah van den Broek",
    date: "2024-01-10",
    image: "/assets/bigstock-Cyber-Security-Concept-Login-464450397.webp"
  }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { t, currentLang } = useTranslation();
  const { slug } = params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="bg-white dark:bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-black dark:text-foreground mb-6">{t('postNotFound')}</h1>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            ← {t('backToBlog')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-background min-h-screen">
      {/* Back to Blog */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-gray-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('backToBlog')}
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-foreground leading-tight mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center text-gray-600 dark:text-muted-foreground">
            {(() => {
              const teamMember = getTeamMemberByName(post.author);
              return teamMember ? (
                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-4">
                  <Image
                    src={teamMember.image}
                    alt={teamMember.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
              );
            })()}
            <div>
              <div className="font-medium text-black dark:text-foreground">{post.author}</div>
              <div className="text-sm">
                {new Date(post.date).toLocaleDateString(currentLang === 'nl' ? 'nl-NL' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-xl max-w-none dark:prose-invert prose-headings:text-black dark:prose-headings:text-foreground prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-gray-700 dark:prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-gray-700 dark:prose-li:text-muted-foreground prose-ul:list-disc prose-ol:list-decimal prose-strong:text-black dark:prose-strong:text-foreground prose-a:text-blue-600 hover:prose-a:text-blue-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Related Posts */}
      <section className="bg-[#F6F5F4] dark:bg-secondary py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black dark:text-foreground mb-8">{t('moreFromBlog')}</h2>
          <Link 
            href="/blog"
            className="inline-flex items-center bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            {t('viewAllPosts')}
          </Link>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}