"use client";
import { useState } from "react";
import Section from "../components/Section";
import PracticeAreaCard from "../components/PracticeAreaCard";
import FadeIn from "../components/FadeIn";
import Link from "next/link";

export default function PracticeAreasPage() {
  const areas = [
    { image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400", title: "Corporate & M&A", desc: "Advising on transactions, governance, and regulatory compliance.", category: "Business", slug: "corporate-ma" },
    { image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400", title: "Litigation & Dispute Resolution", desc: "Strategic advocacy in complex commercial disputes.", category: "Litigation", slug: "litigation-dispute-resolution" },
    { image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400", title: "Employment Law", desc: "Counsel on workforce strategy, investigations, and disputes.", category: "Business", slug: "employment-law" },
    { image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400", title: "Real Estate", desc: "Acquisitions, leasing, financing, and development.", category: "Personal", slug: "real-estate" },
    { image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400", title: "Private Client", desc: "Estate planning, wealth management, and fiduciary disputes.", category: "Personal", slug: "private-client" },
    { image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400", title: "Intellectual Property", desc: "Protection and commercialization of IP assets.", category: "Business", slug: "intellectual-property" },
    { image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400", title: "Criminal Defense", desc: "Aggressive defense for individuals facing charges.", category: "Litigation", slug: "criminal-defense" },
    { image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400", title: "Family Law", desc: "Divorce, custody, and domestic relations matters.", category: "Personal", slug: "family-law" },
  ];

  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", "Business", "Personal", "Litigation"];

  const filtered = filter === "All" ? areas : areas.filter((a) => a.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold text-[--navy] dark:text-white">Practice Areas</h1>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Comprehensive legal services tailored to your needs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter Buttons */}
      <Section title="">
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                  filter === cat
                    ? "bg-[--accent] text-white"
                    : "bg-gray-200 dark:bg-[#0f1420] text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#1a1f2e]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Practice Area Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((a, i) => (
            <FadeIn key={a.title} delay={i * 50}>
              <PracticeAreaCard image={a.image} title={a.title} desc={a.desc} slug={a.slug} />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Featured Consultation CTA */}
      <section className="bg-gradient-to-r from-[--navy] to-[#0d1b2a] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold">Not Sure What You Need?</h2>
            <p className="mt-3 text-lg text-gray-200">
              Contact us for a free consultation. We'll help you understand your options and chart the best path forward.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-md bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 cursor-pointer px-8 py-3 text-base font-semibold hover:opacity-90 transition"
            >
              Schedule a Free Consultation
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
