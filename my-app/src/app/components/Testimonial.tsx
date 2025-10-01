export default function Testimonial({ quote, author, role }: { quote: string; author: string; role?: string }) {
  return (
    <blockquote className="rounded-lg border-l-4 border-[--accent] bg-white/70 dark:bg-[#0f1420] p-6 shadow-sm">
      <p className="text-[17px] italic text-gray-800 dark:text-gray-200">“{quote}”</p>
      <footer className="mt-3 text-sm font-medium text-[--navy] dark:text-gray-300">— {author}{role ? `, ${role}` : ""}</footer>
    </blockquote>
  );
}
