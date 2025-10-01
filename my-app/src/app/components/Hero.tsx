import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-[#0b0e14] dark:to-[#0d121a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-block text-xs uppercase tracking-widest text-[--accent] font-semibold">Trusted. Strategic. Proven.</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight text-[--navy] dark:text-white">
            Legal Excellence for Your Most Important Matters
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Sterling & Associates provides client-focused advocacy in corporate, litigation, and private client matters.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-[--accent] px-6 py-3 text-base font-semibold text-white hover:opacity-90">
              Schedule a Consultation
            </Link>
            <Link href="/practice-areas" className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-white/20 px-6 py-3 text-base font-semibold text-[--navy] dark:text-white hover:bg-gray-100/60">
              Explore Practice Areas
            </Link>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 hidden lg:block" aria-hidden>
        <div className="h-full w-full bg-[--navy] opacity-5" />
      </div>
    </section>
  );
}
