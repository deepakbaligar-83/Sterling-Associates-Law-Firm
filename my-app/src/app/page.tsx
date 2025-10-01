"use client";

import Link from "next/link";
import FadeIn from "./components/FadeIn";
import { useEffect, useState } from "react";
import { fetchServices, fetchHeroImage, fetchTeamMembers, getStrapiImageUrl } from "../lib/api";
import type { Service, TeamMember } from "../lib/api";

export default function Home() {
  const [services, setServices] = useState<Service[]>([]);
  const [heroImage, setHeroImage] = useState<string>("");
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [servicesData, heroImageData, teamMembersData] = await Promise.all([
          fetchServices(),
          fetchHeroImage(),
          fetchTeamMembers()
        ]);
        
        setServices(servicesData);
        setHeroImage(heroImageData || "");
        setTeamMembers(teamMembersData);
      } catch (error) {
        console.error('Error loading data from Strapi:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadData();
  }, []);

  
  return (
    <div className="bg-white dark:bg-[#0b0e14]">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-[#0b0e14] pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Headline */}
            <FadeIn>
              <div className="pt-0">
                <h1 className="text-3xl sm:text-3xl lg:text-5xl font-serif font-normal text-[--navy] dark:text-white leading-tight">
                Defending Your Interests. 
                <br />
                Securing Your Future with Expertise.
                </h1>
              </div>
            </FadeIn>

            {/* Right: Description */}
            <FadeIn delay={200}>
              <div className="pt-8 lg:pt-16">
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Experience business excellence with our array of tailored solutions. Our services are crafted to meet the unique demands of your industry, ensuring strategic alignment and maximum impact.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative overflow-hidden">
              {/* Team Photo */}
              <div className="relative h-[500px] bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url('${heroImage}')` }}
                />
                
      
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tailored Business Solutions Section */}
      <section className="py-24 bg-gray-50 dark:bg-[#0d121a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Title */}
            <FadeIn>
              <div>
                <h2 className="text-4xl sm:text-5xl font-serif font-normal text-[--navy] dark:text-white leading-tight">
                  Tailored<br />
                  Business Solutions
                </h2>
              </div>
            </FadeIn>

            {/* Right: Description */}
            <FadeIn delay={200}>
              <div className="space-y-6">
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Experience business excellence with our array of tailored solutions. Our services are crafted to meet the unique demands of your industry, ensuring strategic alignment and maximum impact.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">
                  At Sterling & Associates, we don't just deliver services—we forge partnerships. Our team of seasoned professionals brings decades of combined experience across multiple industries, ensuring that every solution is not only effective but also sustainable. We pride ourselves on our ability to adapt to the ever-changing business landscape, providing innovative strategies that drive growth and success.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">
                  Whether you're navigating complex legal challenges, seeking financial guidance, or looking to optimize your real estate portfolio, we're here to help. Our holistic approach means we consider every aspect of your business, delivering comprehensive solutions that address both immediate needs and long-term goals.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Services Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">Loading services...</p>
              </div>
            ) : (
              services.map((service, i) => {
                console.log('🖼️ Processing service:', service);
                const imageUrl = service.image ? getStrapiImageUrl(service.image) : '';
                const linkUrl = service.link || '/practice-areas';
                
                // Skip rendering if no image URL
                if (!imageUrl) {
                  console.warn(`⚠️ Service "${service.title || 'Unknown'}" (ID: ${service.id}) has no image URL. Image data:`, service.image);
                  return null;
                }
                
                return (
                  <FadeIn key={service.id} delay={i * 100}>
                    <div className="group">
                      <div className="mb-6 h-48 overflow-hidden rounded-lg">
                        <img 
                          src={imageUrl} 
                          alt={service.title || 'Service'}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="text-2xl font-serif font-normal text-[--navy] dark:text-white mb-4">{service.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {service.desc}
                      </p>
                      <Link href={linkUrl} className="inline-flex items-center text-sm font-semibold text-[--navy] dark:text-white hover:text-[--accent] transition">
                        MORE INFORMATION →
                      </Link>
                    </div>
                  </FadeIn>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Granny Hero Section */}
      <section className="py-24 dark:bg-[#0d121a] relative overflow-hidden">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 mb-8">
               Your case. Our commitment.
              </h3>
      
            </div>
          </FadeIn>

          {/* Granny's Golden Advice Box */}
          <FadeIn delay={200}>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-gray-400 text-base leading-relaxed">
               Trusted Legal Guidance for Life’s Biggest Decisions.
              </p>
            </div>
          </FadeIn>

          {/* Team Members Carousel */}
          <div className="relative overflow-hidden mt-16">
            <div className="flex animate-scroll">
              {/* Duplicate team members for infinite scroll effect */}
              {teamMembers.concat(teamMembers).map((member, i) => {
                const imageUrl = member.image ? getStrapiImageUrl(member.image) : '';
                
                if (!imageUrl) {
                  console.warn(`⚠️ Team member "${member.name || 'Unknown'}" has no image`);
                  return null;
                }
                
                return (
                  <div key={i} className="flex-shrink-0 w-80 mx-6">
                    <div className="dark:bg-[#0b0e14] overflow-hidden transform hover:scale-105 transition-transform duration-300">
                      <div className="relative h-96 overflow-hidden">
                        <img 
                          src={imageUrl}
                          alt={member.name || "Team Member"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
            
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#0d121a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[--navy] dark:text-white mb-6">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              Let's discuss how our tailored solutions can help you achieve your strategic goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 cursor-pointer dark:bg-white px-10 py-4 text-base font-semibold text-white dark:text-[--navy] hover:opacity-90 transition"
            >
              Get Started
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
