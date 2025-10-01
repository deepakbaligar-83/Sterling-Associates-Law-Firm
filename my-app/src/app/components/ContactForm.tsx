"use client";
import { useState } from "react";
import { submitContactForm } from "../../lib/api";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    const newErrors: { [key: string]: string } = {};

    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const phone = form.get("phone") as string;
    const message = form.get("message") as string;
    const legalArea = form.get("legalArea") as string;

    if (!name || name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    if (!email || !validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!message || message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }
    if (!legalArea) {
      newErrors.legalArea = "Please select a legal area.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus(null);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setStatus(null);

    const result = await submitContactForm(name, email, phone, legalArea, message);
    
    setStatus(result.message);
    setIsSubmitting(false);
    
    if (result.success) {
      formElement.reset();
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
      <div>
        <label className="block text-sm font-medium">Name *</label>
        <input
          name="name"
          className={`mt-1 w-full rounded-md border ${errors.name ? "border-red-500" : "border-gray-300 dark:border-white/20"} bg-white dark:bg-[#0f1420] p-2`}
          onChange={() => setErrors((prev) => ({ ...prev, name: "" }))}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">Email *</label>
        <input
          type="email"
          name="email"
          className={`mt-1 w-full rounded-md border ${errors.email ? "border-red-500" : "border-gray-300 dark:border-white/20"} bg-white dark:bg-[#0f1420] p-2`}
          onChange={() => setErrors((prev) => ({ ...prev, email: "" }))}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">Phone</label>
        <input name="phone" className="mt-1 w-full rounded-md border border-gray-300 dark:border-white/20 bg-white dark:bg-[#0f1420] p-2" />
      </div>
      <div>
        <label className="block text-sm font-medium">Legal Area *</label>
        <select
          name="legalArea"
          className={`mt-1 w-full rounded-md border ${errors.legalArea ? "border-red-500" : "border-gray-300 dark:border-white/20"} bg-white dark:bg-[#0f1420] p-2`}
          onChange={() => setErrors((prev) => ({ ...prev, legalArea: "" }))}
        >
          <option value="">Select an area</option>
          <option value="Corporate">Corporate & M&A</option>
          <option value="Litigation">Litigation</option>
          <option value="Employment">Employment Law</option>
          <option value="Real Estate">Real Estate</option>
          <option value="IP">Intellectual Property</option>
          <option value="Family">Family Law</option>
          <option value="Other">Other</option>
        </select>
        {errors.legalArea && <p className="mt-1 text-xs text-red-500">{errors.legalArea}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">Message *</label>
        <textarea
          name="message"
          rows={5}
          className={`mt-1 w-full rounded-md border ${errors.message ? "border-red-500" : "border-gray-300 dark:border-white/20"} bg-white dark:bg-[#0f1420] p-2`}
          onChange={() => setErrors((prev) => ({ ...prev, message: "" }))}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="mt-2 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 cursor-pointer px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {status && (
        <p className={`text-sm ${status.includes('Thank you') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
          {status}
        </p>
      )}
    </form>
  );
}
