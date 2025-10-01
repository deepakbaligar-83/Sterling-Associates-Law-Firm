import { ReactNode } from "react";

export default function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-black/5 dark:border-white/10 bg-white dark:bg-[#0f1420] p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-[--navy] dark:text-white">{title}</h3>
      <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">{children}</div>
    </div>
  );
}
