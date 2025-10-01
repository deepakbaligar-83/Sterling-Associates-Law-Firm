"use client";

import Link from "next/link";
import Section from "../components/Section";
import FadeIn from "../components/FadeIn";
import TeamProfile from "../components/TeamProfile";
import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
  const timeline = [
    { year: "2001", event: "Firm founded by Alex Sterling with a vision for client-centered advocacy." },
    { year: "2008", event: "Expanded practice to include corporate M&A and employment law." },
    { year: "2015", event: "Opened second office and grew team to 15+ attorneys." },
    { year: "2020", event: "Recognized as a top regional firm for litigation excellence." },
    { year: "2025", event: "Continuing to serve clients with integrity and innovation." },
  ];

  const pillars = [
    { 
      icon: (
        <svg className="w-12 h-12 text-[--accent]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: "Integrity", 
      desc: "Upholding the highest ethical standards in every matter." 
    },
    { 
      icon: (
        <svg className="w-12 h-12 text-[--accent]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Advocacy", 
      desc: "Fierce representation and strategic counsel." 
    },
    { 
      icon: (
        <svg className="w-12 h-12 text-[--accent]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Client Success", 
      desc: "Your goals are our mission, now and always." 
    },
    { 
      icon: (
        <svg className="w-12 h-12 text-[--accent]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Community", 
      desc: "Committed to giving back and pro bono work." 
    },
  ];

  const teamPreview = [
    { name: "Alex Sterling", title: "Managing Partner", bio: "Leader in complex corporate transactions." },
    { name: "Jordan Lee", title: "Litigation Partner", bio: "Trial advocate with proven results." },
    { name: "Taylor Kim", title: "Employment Counsel", bio: "Trusted advisor on workplace matters." },
  ];

  return (
    <div>
      {/* Mission Hero */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-[--navy] dark:text-white">
                Our Mission
              </h1>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                To deliver exceptional legal counsel with integrity, precision, and an unwavering commitment to our clients' success.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Firm History Timeline */}
      <Section title="Our Story" subtitle="A legacy of integrity, advocacy, and results.">
        <FadeIn>
          <TimelineWithProgress timeline={timeline} />
        </FadeIn>
      </Section>

      {/* What We Stand For */}
      <Section title="What We Stand For" subtitle="Our core values guide everything we do.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={i * 100}>
              <div className="text-center p-6 rounded-lg border border-black/5 dark:border-white/10 bg-white dark:bg-[#0f1420] hover:shadow-lg transition">
                <div className="flex justify-center mb-4">{p.icon}</div>
                <h3 className="text-lg font-semibold text-[--navy] dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Image Grid / Office Life */}
      <Section title="Our Workplace">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600" 
                alt="Modern office workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition">
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600" 
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600" 
                alt="Conference room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600" 
                alt="Office meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Meet Our Team Preview */}
      <Section title="Meet Our Team" subtitle="Experienced advocates dedicated to your success.">
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-28 w-28 overflow-hidden rounded-full ring-2 ring-[--accent]/30">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300" 
                  alt="Alex Sterling"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-3 text-base font-semibold text-[--navy] dark:text-white">Alex Sterling</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Managing Partner</p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Leader in complex corporate transactions.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-28 w-28 overflow-hidden rounded-full ring-2 ring-[--accent]/30">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300" 
                  alt="Jordan Lee"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-3 text-base font-semibold text-[--navy] dark:text-white">Jordan Lee</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Litigation Partner</p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Trial advocate with proven results.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-28 w-28 overflow-hidden rounded-full ring-2 ring-[--accent]/30">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300" 
                  alt="Taylor Kim"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-3 text-base font-semibold text-[--navy] dark:text-white">Taylor Kim</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Employment Counsel</p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Trusted advisor on workplace matters.</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/attorneys"
              className="inline-flex items-center rounded-md bg-[--accent] px-6 py-3 text-white font-semibold hover:opacity-90 transition"
            >
              View Full Team
            </Link>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}

function TimelineWithProgress({ timeline }: { timeline: { year: string; event: string }[] }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineHeight = rect.height;

      // Calculate how much of the timeline is visible
      const timelineTop = rect.top;
      const timelineBottom = rect.bottom;

      // Start progress when timeline enters viewport
      if (timelineBottom > 0 && timelineTop < windowHeight) {
        // Calculate progress based on scroll position
        const visibleHeight = Math.min(windowHeight, timelineBottom) - Math.max(0, timelineTop);
        const scrollProgress = Math.max(0, windowHeight - timelineTop);
        const progressPercent = Math.min(100, (scrollProgress / (timelineHeight + windowHeight)) * 50);
        
        setProgress(progressPercent);
      } else if (timelineTop >= windowHeight) {
        setProgress(0);
      } else if (timelineBottom <= 0) {
        setProgress(50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isItemActive = (index: number) => {
    // First item is always active
    if (index === 0) return true;
    const itemProgress = ((index + 1) / timeline.length) * 80;
    return progress >= itemProgress;
  };

  return (
    <div ref={timelineRef} className="relative space-y-6">
      {/* Progress Bar */}
      <div className="absolute left-[7.9rem] top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700">
        <div 
          className="w-full bg-gradient-to-b from-purple-600 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
          style={{ height: `${progress}%` }}
        />
      </div>

      {timeline.map((t, i) => (
        <div key={i} className="flex -gap-3 items-start relative" ref={el => { itemRefs.current[i] = el; }}>
          <div className="flex-shrink-0 w-20 text-right mr-10">
            <span className="text-lg font-bold text-[--accent]">{t.year}</span>
          </div>
          <div 
            className={`flex-shrink-0 w-4 h-4 rounded-full ring-4 relative z-10 transition-all duration-500 ${
              isItemActive(i) 
                ? 'bg-gradient-to-br from-purple-600 to-pink-500 ring-purple-500/30' 
                : 'bg-white dark:bg-gray-800 ring-white dark:ring-gray-800'
            }`}
          />
          <div className="flex-1 pl-6 pb-4">
            <p className="text-gray-700 dark:text-gray-300">{t.event}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
