"use client";
import { useState } from "react";
import Section from "../components/Section";
import FadeIn from "../components/FadeIn";

export default function BlogPage() {
  const posts = [
    { 
      title: "Navigating M&A in 2025", 
      desc: "Key diligence and regulatory trends for buyers and sellers.", 
      category: "Corporate", 
      date: "Jan 15, 2025", 
      author: "Alex Sterling",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800"
    },
    { 
      title: "Employment Law Update", 
      desc: "Recent developments leaders should know.", 
      category: "Employment", 
      date: "Jan 10, 2025", 
      author: "Taylor Kim",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800"
    },
    { 
      title: "Protecting IP in Contracts", 
      desc: "Practical steps to avoid costly disputes.", 
      category: "IP", 
      date: "Jan 5, 2025", 
      author: "Riley Patel",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800"
    },
    { 
      title: "Real Estate Trends 2025", 
      desc: "What buyers and sellers need to know.", 
      category: "Real Estate", 
      date: "Dec 28, 2024", 
      author: "Morgan Chen",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
    },
    { 
      title: "Litigation Best Practices", 
      desc: "Strategies for successful dispute resolution.", 
      category: "Litigation", 
      date: "Dec 20, 2024", 
      author: "Jordan Lee",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800"
    },
    { 
      title: "Family Law FAQs", 
      desc: "Common questions about divorce and custody.", 
      category: "Family", 
      date: "Dec 15, 2024", 
      author: "Casey Brooks",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800"
    },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
  const filtered = posts.filter(
    (p) => (category === "All" || p.category === category) && (search === "" || p.title.toLowerCase().includes(search.toLowerCase()))
  );

  const [newsletterStatus, setNewsletterStatus] = useState<string | null>(null);

  function handleNewsletterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNewsletterStatus("Thank you for subscribing! Check your inbox for updates.");
    e.currentTarget.reset();
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold text-[--navy] dark:text-white">Insights & Resources</h1>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Articles, FAQs, and legal updates from our team.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section title="">
        {/* Search & Filter */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 rounded-md border border-gray-300 dark:border-white/20 bg-white dark:bg-[#0f1420] p-2 text-sm"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-md border border-gray-300 dark:border-white/20 bg-white dark:bg-[#0f1420] p-2 text-sm"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </FadeIn>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, i) => (
            <FadeIn key={post.title} delay={i * 50}>
              <a 
                href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                className="group flex flex-col rounded-lg border border-black/5 dark:border-white/10 bg-white dark:bg-[#0f1420] overflow-hidden hover:shadow-xl transition h-full"
              >
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-[--accent] mb-2">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[--navy] dark:text-white group-hover:text-[--accent] transition line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3 flex-grow">{post.desc}</p>
                  <p className="mt-3 text-xs text-gray-500">By {post.author}</p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-8">No articles found. Try a different search or category.</p>
        )}
      </Section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-[--navy] to-[#0d1b2a] text-white py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold">Stay Informed With Legal Updates</h2>
            <p className="mt-3 text-lg text-gray-200">
              Subscribe to our newsletter for the latest insights, articles, and firm news.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border-0 p-3 text-gray-900"
                required
              />
              <button type="submit" className="rounded-md bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 cursor-pointer px-6 py-3 font-semibold hover:opacity-90 transition">
                Subscribe
              </button>
            </form>
            {newsletterStatus && <p className="mt-3 text-sm">{newsletterStatus}</p>}
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
