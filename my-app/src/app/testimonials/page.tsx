"use client";
import { useState } from "react";
import Section from "../components/Section";
import Testimonial from "../components/Testimonial";
import FadeIn from "../components/FadeIn";
import AnimatedCounter from "../components/AnimatedCounter";
import Carousel from "../components/Carousel";
import { submitTestimonial } from "../../lib/api";

export default function TestimonialsPage() {
  const testimonials = [
    { quote: "Sterling & Associates delivered outstanding representation and a swift resolution.", author: "C. Morgan", rating: 5 },
    { quote: "Professional, responsive, and strategic — exactly what we needed.", author: "A. Patel", rating: 5 },
    { quote: "Their counsel was invaluable during a critical transaction.", author: "R. Chen", rating: 5 },
    { quote: "Exceptional service and attention to detail. Highly recommend.", author: "L. Davis", rating: 5 },
    { quote: "They fought for us every step of the way. Couldn't be happier.", author: "M. Johnson", rating: 5 },
    { quote: "Knowledgeable, compassionate, and results-driven.", author: "S. Williams", rating: 5 },
  ];

  const caseResults = [
    { title: "$2.5M Settlement", desc: "Commercial dispute resolved favorably for client." },
    { title: "$1.8M Verdict", desc: "Employment discrimination case won at trial." },
    { title: "$5M Transaction", desc: "Successfully closed complex M&A deal." },
    { title: "Charges Dismissed", desc: "Criminal defense case resolved with full dismissal." },
  ];

  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleReviewSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const review = formData.get('review') as string;

    const result = await submitTestimonial(name, review);
    
    setFormStatus(result.message);
    setIsSubmitting(false);
    
    if (result.success) {
      form.reset();
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold text-[--navy] dark:text-white">Client Testimonials</h1>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              What our clients say about working with us.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Animated Stats */}
      <Section title="Our Track Record">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <AnimatedCounter end={20} suffix="+" />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Years in Practice</p>
            </div>
            <div>
              <AnimatedCounter end={500} suffix="+" />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Clients Served</p>
            </div>
            <div>
              <AnimatedCounter end={95} suffix="%" />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Success Rate</p>
            </div>
            <div>
              <AnimatedCounter end={15} suffix="+" />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Expert Attorneys</p>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Testimonial Carousel */}
      <Section title="What Clients Say">
        <FadeIn>
          <Carousel
            items={testimonials.map((t) => ({
              title: `⭐⭐⭐⭐⭐ — ${t.author}`,
              content: t.quote,
            }))}
          />
        </FadeIn>
      </Section>

      {/* All Testimonials Grid */}
      <Section title="Client Reviews">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 50}>
              <Testimonial quote={t.quote} author={t.author} />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Case Results */}
      <Section title="Case Results" subtitle="Notable outcomes for our clients.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseResults.map((c, i) => (
            <FadeIn key={i} delay={i * 50}>
              <div className="p-6 rounded-lg border border-black/5 dark:border-white/10 bg-gray-50 dark:bg-[#0f1420] text-center">
                <h3 className="text-xl font-bold text-[--accent]">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{c.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="mt-6 text-xs text-center text-gray-500">
          *Past results do not guarantee future outcomes. Each case is unique.
        </p>
      </Section>

      {/* Submit Review Form */}
      <Section title="Submit Your Review" subtitle="We'd love to hear about your experience.">
        <FadeIn>
          <form onSubmit={handleReviewSubmit} className="max-w-xl mx-auto space-y-4">
            <div>
              <label className="block text-sm font-medium">Your Name</label>
              <input name="name" className="mt-1 w-full rounded-md border border-gray-300 dark:border-white/20 bg-white dark:bg-[#0f1420] p-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Your Review</label>
              <textarea name="review" rows={4} className="mt-1 w-full rounded-md border border-gray-300 dark:border-white/20 bg-white dark:bg-[#0f1420] p-2" required />
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full rounded-md bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 cursor-pointer px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </button>
            {formStatus && (
              <p className={`text-sm text-center ${formStatus.includes('Thank you') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {formStatus}
              </p>
            )}
          </form>
        </FadeIn>
      </Section>
    </div>
  );
}
