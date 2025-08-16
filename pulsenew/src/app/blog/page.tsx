import Image from "next/image";
import Link from "next/link";

export default function Blog() {
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
      author: "Noah van de Broek",
      date: "2024-01-10",
      image: "/assets/shield.png"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-[48px] font-bold text-black leading-[52px] tracking-[-1.5px] mb-6">
          PulseGuard Blog
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Stay updated with the latest insights on website monitoring, server management, 
          and digital infrastructure best practices.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="bg-[#f6f5f4] rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  
                  <h2 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <div className="text-sm font-medium text-black">{post.author}</div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-[#F6F5F4] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Stay updated
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter to get the latest updates, tips, and insights 
            delivered directly to your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}