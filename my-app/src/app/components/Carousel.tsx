"use client";
import { useState, useEffect } from "react";

export default function Carousel({ items }: { items: { title: string; content: string }[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="relative overflow-hidden rounded-lg border border-black/5 dark:border-white/10 bg-white dark:bg-[#0f1420] p-8 shadow-sm">
      <div className="min-h-[120px]">
        <h3 className="text-lg font-semibold text-[--navy] dark:text-white">{items[current].title}</h3>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{items[current].content}</p>
      </div>
      <div className="mt-4 flex items-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-[--accent]" : "w-2 bg-gray-300 dark:bg-gray-600"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
