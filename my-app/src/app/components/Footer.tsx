import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5 dark:border-white/10 bg-gray-50 dark:bg-[#0b0e14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-sm bg-[--accent]" aria-hidden />
              <span className="font-semibold tracking-wide text-[--navy] dark:text-white">Sterling & Associates</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Trusted legal counsel dedicated to protecting your interests with integrity and excellence.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-[--navy]">About Us</Link></li>
              <li><Link href="/practice-areas" className="hover:text-[--navy]">Practice Areas</Link></li>
              <li><Link href="/attorneys" className="hover:text-[--navy]">Our Attorneys</Link></li>
              <li><Link href="/careers" className="hover:text-[--navy]">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-[--navy]">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/legal/privacy-policy" className="hover:text-[--navy]">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="hover:text-[--navy]">Terms & Conditions</Link></li>
              <li><Link href="/legal/disclaimer" className="hover:text-[--navy]">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>Phone: (555) 123-4567</li>
              <li>Email: contact@sterlinglaw.com</li>
              <li>123 Main Street, Suite 500, City, ST 10001</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Sterling & Associates. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[--navy]">LinkedIn</a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[--navy]">Twitter/X</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[--navy]">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
