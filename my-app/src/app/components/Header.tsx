"use client";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/attorneys", label: "Our Attorneys" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  // { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-[#0b0e14]/90 backdrop-blur border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-sm bg-[--accent]" aria-hidden />
            <span className="font-semibold tracking-wide text-[--navy] text-xl md:text-2xl -ml-10 md:ml-0 font-[family-name:var(--font-dm-sans)] dark:text-white">Sterling & Associates</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <Link key={n.href} href={n.href} className="text-sm text-gray-700 hover:text-[--navy] dark:text-gray-200">
                {n.label}
              </Link>
            ))}
            <Link href="/contact" className="inline-flex items-center rounded-md bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 cursor-pointer  px-4 py-2 text-sm font-medium text-white hover:opacity-90">
              Schedule a Consultation
            </Link>
          </nav>

          <button
            aria-label="Toggle navigation"
            className="md:hidden p-2 border  border-black/10 dark:border-white/20"
            onClick={() => setOpen(!open)}
          >
            <span className="i-[hamburger] block w-5" aria-hidden />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-700 dark:text-gray-200">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 space-y-3">
            {navItems.map((n) => (
              <Link key={n.href} href={n.href} className="block text-sm text-gray-700 dark:text-gray-200" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="-mt-4 inline-flex items-center rounded-md  cursor-pointer  text-sm font-medium text-white">
              Schedule a Consultation
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
