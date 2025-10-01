import { ReactNode } from "react";

export default function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[--navy] dark:text-white">{title}</h2>
          {subtitle && <p className="mt-2 text-gray-700 dark:text-gray-300">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
