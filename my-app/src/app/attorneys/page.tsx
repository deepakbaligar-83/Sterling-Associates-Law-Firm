"use client";
import { useState, useEffect } from "react";
import Section from "../components/Section";
import Modal from "../components/Modal";
import FadeIn from "../components/FadeIn";
import { fetchAttorneys } from "../../lib/api";
import type { Attorney } from "../../lib/api";

export default function AttorneysPage() {
  const [team, setTeam] = useState<Attorney[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("All");
  const [selectedAttorney, setSelectedAttorney] = useState<Attorney | null>(null);

  useEffect(() => {
    async function loadAttorneys() {
      try {
        const attorneysData = await fetchAttorneys();
        setTeam(attorneysData);
      } catch (error) {
        console.error('Error loading attorneys:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadAttorneys();
  }, []);

  const expertiseAreas = ["All", ...Array.from(new Set(team.map((t) => t.expertise)))];
  const filtered = filter === "All" ? team : team.filter((t) => t.expertise === filter);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold text-[--navy] dark:text-white">Our Attorneys</h1>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Experienced advocates dedicated to your success.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section title="">
        {/* Filter */}
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {expertiseAreas.map((area) => (
              <button
                key={area}
                onClick={() => setFilter(area)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                  filter === area
                    ? "bg-[--accent] text-white"
                    : "bg-gray-200 dark:bg-[#0f1420] text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#1a1f2e]"
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Attorney Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">Loading attorneys...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">No attorneys found.</p>
            </div>
          ) : (
            filtered.map((attorney, i) => (
              <FadeIn key={attorney.id} delay={i * 50}>
                <div
                  className="group cursor-pointer text-center p-6 rounded-lg border border-black/5 dark:border-white/10 bg-white dark:bg-[#0f1420] hover:shadow-xl hover:scale-105 transition"
                  onClick={() => setSelectedAttorney(attorney)}
                >
                  <div className="h-28 w-28 mx-auto overflow-hidden rounded-full ring-2 ring-[--accent]/30 group-hover:ring-[--accent] transition">
                    {attorney.image?.url ? (
                      <img 
                        src={attorney.image.url.startsWith('http') ? attorney.image.url : `http://localhost:1337${attorney.image.url}`}
                        alt={attorney.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                        {attorney.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-[--navy] dark:text-white group-hover:text-[--accent] transition">
                    {attorney.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{attorney.title}</p>
                  <p className="mt-1 text-xs text-[--accent]">{attorney.expertise}</p>
                  <button className="mt-3 text-sm font-semibold text-[--accent] hover:underline">Read Bio →</button>
                </div>
              </FadeIn>
            ))
          )}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <FadeIn>
            <h3 className="text-2xl font-semibold text-[--navy] dark:text-white">Work With Our Experts</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Schedule a consultation to discuss your legal needs with one of our experienced attorneys.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-flex items-center rounded-md bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 px-6 py-3 text-white font-semibold hover:opacity-90 transition"
            >
              Contact Us
            </a>
          </FadeIn>
        </div>
      </Section>

      {/* Modal */}
      <Modal isOpen={!!selectedAttorney} onClose={() => setSelectedAttorney(null)}>
        {selectedAttorney && (
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-20 w-20 rounded-full overflow-hidden ring-2 ring-[--accent]/30">
                <img 
                  src={[
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300",
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300",
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300",
                    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300",
                    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300",
                    "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300",
                  ][team.findIndex(t => t.name === selectedAttorney.name)]}
                  alt={selectedAttorney.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[--navy] dark:text-white">{selectedAttorney.name}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">{selectedAttorney.title}</p>
                <p className="text-xs text-[--accent]">{selectedAttorney.expertise}</p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <p>{selectedAttorney.bio}</p>
              <div>
                <strong>Education:</strong> {selectedAttorney.education}
              </div>
              <div>
                <strong>Bar Admissions:</strong> {selectedAttorney.barAdmissions}
              </div>
              <div>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${selectedAttorney.email}`} className="text-[--accent] hover:underline">
                  {selectedAttorney.email}
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
