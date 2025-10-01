"use client";
import { useState } from "react";

export default function Accordion({ items }: { items: { title: string; content: string | React.ReactNode }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="rounded-lg border border-black/5 dark:border-white/10 bg-white dark:bg-[#0f1420] overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between p-4 text-left cursor-pointer hover:bg-gray-50 dark:hover:bg-[#0b0e14]"
          >
            <span className="font-semibold text-[--navy] dark:text-white">{item.title}</span>
            <svg
              className={`h-5 w-5 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="border-t border-black/5 dark:border-white/10 p-4 text-sm text-gray-700 dark:text-gray-300">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
