"use client";
import Link from "next/link";

export default function PracticeAreaCard({ image, title, desc, slug }: { image: string; title: string; desc: string; slug: string }) {
  return (
    <Link href={`/practice-areas/${slug}`} className="group relative overflow-hidden rounded-lg border border-black/5 dark:border-white/10 bg-white dark:bg-[#0f1420] shadow-sm hover:shadow-xl transition-all hover:scale-105 block">
      <div className="absolute inset-0 bg-gradient-to-br from-[--accent]/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
      <div className="relative">
        <div className="h-48 overflow-hidden rounded-t-lg -mx-0 -mt-0">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-[--navy] dark:text-white group-hover:text-[--accent] transition">{title}</h3>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{desc}</p>
          <span className="mt-4 inline-flex items-center text-sm font-semibold text-[--accent] hover:underline">
            Learn More →
          </span>
        </div>
      </div>
    </Link>
  );
}
