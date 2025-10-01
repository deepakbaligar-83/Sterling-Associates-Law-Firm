"use client";
import { useState } from "react";
import Section from "../components/Section";
import Accordion from "../components/Accordion";
import FadeIn from "../components/FadeIn";
import Testimonial from "../components/Testimonial";
import { submitJobApplication } from "../../lib/api";

export default function CareersPage() {
  const scrollToApplication = () => {
    const applicationSection = document.getElementById('apply-today');
    if (applicationSection) {
      applicationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const jobs = [
    {
      title: "Litigation Associate (3-5 years)",
      content: (
        <div className="space-y-2">
          <p><strong>Location:</strong> New York, NY</p>
          <p><strong>Type:</strong> Full-time</p>
          <p><strong>Requirements:</strong> 3-5 years litigation experience, strong writing and advocacy skills, bar admission required.</p>
          <button 
            onClick={scrollToApplication}
            className="mt-3 rounded-md bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600  px-4 py-2 text-sm font-semibold text-white hover:opacity-90 cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      ),
    },
    {
      title: "Corporate Associate (2-4 years)",
      content: (
        <div className="space-y-2">
          <p><strong>Location:</strong> San Francisco, CA</p>
          <p><strong>Type:</strong> Full-time</p>
          <p><strong>Requirements:</strong> 2-4 years M&A or corporate experience, top law school, bar admission required.</p>
          <button 
            onClick={scrollToApplication}
            className="mt-3 rounded-md bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600  px-4 py-2 text-sm font-semibold text-white hover:opacity-90 cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      ),
    },
    {
      title: "Paralegal",
      content: (
        <div className="space-y-2">
          <p><strong>Location:</strong> New York, NY</p>
          <p><strong>Type:</strong> Full-time</p>
          <p><strong>Requirements:</strong> 1-2 years experience, detail-oriented, client-focused, strong organizational skills.</p>
          <button 
            onClick={scrollToApplication}
            className="mt-3 rounded-md bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600  px-4 py-2 text-sm font-semibold text-white hover:opacity-90 cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      ),
    },
    {
      title: "Legal Intern (Summer 2025)",
      content: (
        <div className="space-y-2">
          <p><strong>Location:</strong> Multiple offices</p>
          <p><strong>Type:</strong> Internship</p>
          <p><strong>Requirements:</strong> Current law student (2L/3L), strong academic record, interest in corporate or litigation.</p>
          <button 
            onClick={scrollToApplication}
            className="mt-3 rounded-md bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600  px-4 py-2 text-sm font-semibold text-white hover:opacity-90 cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      ),
    },
  ];

  const benefits = [
    { 
      icon: (
        <svg className="w-12 h-12 text-[--accent]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Competitive Compensation", 
      desc: "Market-leading salaries and bonuses." 
    },
    { 
      icon: (
        <svg className="w-12 h-12 text-[--accent]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Comprehensive Benefits", 
      desc: "Health, dental, vision, and 401(k) matching." 
    },
    { 
      icon: (
        <svg className="w-12 h-12 text-[--accent]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Professional Development", 
      desc: "CLE, mentorship, and career growth opportunities." 
    },
    { 
      icon: (
        <svg className="w-12 h-12 text-[--accent]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Work-Life Balance", 
      desc: "Flexible schedules and generous PTO." 
    },
  ];

  const employeeTestimonials = [
    { quote: "Sterling & Associates invests in its people. I've grown tremendously here.", author: "Associate Attorney" },
    { quote: "A collaborative, supportive culture where everyone's voice matters.", author: "Paralegal" },
  ];

  const [appStatus, setAppStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleAppSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setAppStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const position = formData.get('position') as string;
    const resume = formData.get('resume') as File;
    const coverLetter = formData.get('cover') as string;

    const result = await submitJobApplication(name, email, position, resume, coverLetter);
    
    setAppStatus(result.message);
    setIsSubmitting(false);
    
    if (result.success) {
      form.reset();
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl font-bold">Grow Your Career With Us</h1>
            <p className="mt-4 text-lg text-gray-200">
              Join a team committed to excellence, collaboration, and professional growth.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Work With Us */}
      <Section title="Why Work With Us">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <FadeIn key={b.title} delay={i * 100}>
              <div className="text-center p-6 rounded-lg border border-black/5 dark:border-white/10 bg-white dark:bg-[#0f1420]">
                <div className="flex justify-center mb-4">{b.icon}</div>
                <h3 className="text-lg font-semibold text-[--navy] dark:text-white">{b.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{b.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Employee Testimonials */}
      <Section title="What Our Team Says">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {employeeTestimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 100}>
              <Testimonial quote={t.quote} author={t.author} />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Job Openings */}
      <Section title="Current Openings" subtitle="Explore opportunities to join our team.">
        <FadeIn>
          <Accordion items={jobs} />
        </FadeIn>
      </Section>

      {/* Application Form */}
      <Section title="Apply Today" subtitle="Submit your application and resume.">
        <FadeIn>
          <div id="apply-today" className="scroll-mt-20">
            <form onSubmit={handleAppSubmit} className="max-w-xl mx-auto space-y-4">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input name="name" className="mt-1 w-full rounded-md border border-gray-300 dark:border-white/20 bg-white dark:bg-[#0f1420] p-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" name="email" className="mt-1 w-full rounded-md border border-gray-300 dark:border-white/20 bg-white dark:bg-[#0f1420] p-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Position Applying For</label>
              <select name="position" className="mt-1 w-full rounded-md border border-gray-300 dark:border-white/20 bg-white dark:bg-[#0f1420] p-2" required>
                <option value="">Select a position</option>
                {jobs.map((j) => (
                  <option key={j.title} value={j.title}>
                    {j.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Resume (PDF or Word)</label>
              <input type="file" name="resume" accept=".pdf,.doc,.docx" className="mt-1 w-full rounded-md border border-gray-300 dark:border-white/20 bg-white dark:bg-[#0f1420] p-2" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Description (optional)</label>
              <textarea name="cover" rows={4} className="mt-1 w-full rounded-md border border-gray-300 dark:border-white/20 bg-white dark:bg-[#0f1420] p-2" />
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full rounded-md bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 cursor-pointer px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
            {appStatus && (
              <p className={`text-sm text-center ${appStatus.includes('Thank you') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {appStatus}
              </p>
            )}
          </form>
          </div>
        </FadeIn>
      </Section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[--navy] to-[#0d1b2a] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold">Join Our Team Today</h2>
            <p className="mt-3 text-lg text-gray-200">
              Be part of a firm that values excellence, collaboration, and growth.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
