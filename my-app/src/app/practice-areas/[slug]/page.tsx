"use client";
import { use } from "react";
import Link from "next/link";
import FadeIn from "../../components/FadeIn";

const practiceAreas = {
  "corporate-ma": {
    title: "Corporate & M&A",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
    content: `
      <div class="intro-section">
        <p class="lead-text">Our Corporate & M&A practice provides comprehensive legal counsel for businesses navigating complex transactions, governance matters, and regulatory compliance. We represent clients across all industries, from startups to Fortune 500 companies.</p>
      </div>

      <div class="content-section">
        <div class="section-header">
          <svg class="section-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <h2>Mergers & Acquisitions</h2>
        </div>
        <p>We guide clients through every stage of M&A transactions, including due diligence, deal structuring, negotiation, and post-closing integration. Our team has extensive experience with:</p>
        <ul class="bullet-list">
          <li>Stock and asset purchases</li>
          <li>Mergers and consolidations</li>
          <li>Joint ventures and strategic alliances</li>
          <li>Divestitures and spin-offs</li>
          <li>Cross-border transactions</li>
        </ul>
      </div>

      <div class="content-section">
        <div class="section-header">
          <svg class="section-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <h2>Corporate Governance</h2>
        </div>
        <p>We advise boards of directors, special committees, and management teams on corporate governance best practices, fiduciary duties, and compliance with securities laws and stock exchange requirements.</p>
      </div>

      <div class="content-section">
        <div class="section-header">
          <svg class="section-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <h2>Securities & Capital Markets</h2>
        </div>
        <p>Our securities practice covers public offerings, private placements, debt financings, and ongoing SEC compliance. We help companies access capital markets efficiently while maintaining regulatory compliance.</p>
      </div>

      <div class="content-section">
        <div class="section-header">
          <svg class="section-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h2>Private Equity & Venture Capital</h2>
        </div>
        <p>We represent both investors and portfolio companies in private equity and venture capital transactions, including fund formation, investments, exits, and ongoing portfolio management.</p>
      </div>
    `
  },
  "litigation-dispute-resolution": {
    title: "Litigation & Dispute Resolution",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200",
    content: `
      <div class="intro-section">
        <p class="lead-text">Our litigation team provides strategic advocacy in complex commercial disputes, combining courtroom excellence with business-minded counsel. We represent clients in federal and state courts, arbitrations, and mediations.</p>
      </div>

      <div class="content-section">
        <h2>⚖️ Commercial Litigation</h2>
        <p>We handle a wide range of business disputes with a focus on achieving favorable outcomes efficiently:</p>
        <div class="feature-grid">
          <div class="feature-item">✓ Breach of contract claims</div>
          <div class="feature-item">✓ Business torts and fraud</div>
          <div class="feature-item">✓ Partnership disputes</div>
          <div class="feature-item">✓ Shareholder conflicts</div>
        </div>
      </div>

      <div class="content-section">
        <h2>👥 Class Action Defense</h2>
        <p>We defend companies against class action lawsuits involving consumer protection, securities, employment, and antitrust claims. Our team has successfully defeated class certification and achieved favorable settlements.</p>
      </div>

      <div class="content-section">
        <h2>💡 Intellectual Property Litigation</h2>
        <p>We litigate patent, trademark, copyright, and trade secret disputes in federal courts and before the Patent Trial and Appeal Board. Our attorneys combine legal expertise with technical knowledge.</p>
      </div>

      <div class="content-section">
        <h2>🤝 Alternative Dispute Resolution</h2>
        <p>We represent clients in arbitrations and mediations, often achieving faster and more cost-effective resolutions than traditional litigation. Our attorneys serve as arbitrators and mediators.</p>
      </div>

      <div class="content-section">
        <h2>📜 Appellate Practice</h2>
        <p>Our appellate team handles appeals in state and federal courts, including the U.S. Supreme Court. We also assist trial counsel with preserving issues for appeal and developing appellate strategy.</p>
      </div>
    `
  },
  "employment-law": {
    title: "Employment Law",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200",
    content: `
      <div class="intro-section">
        <p class="lead-text">Our Employment Law practice provides comprehensive counsel on all aspects of the employer-employee relationship. We help businesses develop compliant policies, navigate complex regulations, and resolve workplace disputes.</p>
      </div>

      <div class="content-section">
        <h2>👔 Employment Counseling</h2>
        <p>We advise employers on day-to-day employment matters with a proactive approach:</p>
        <div class="feature-grid">
          <div class="feature-item">✓ Hiring and onboarding</div>
          <div class="feature-item">✓ Discipline and termination</div>
          <div class="feature-item">✓ Leaves of absence</div>
          <div class="feature-item">✓ Disability accommodations</div>
        </div>
      </div>

      <div class="content-section">
        <h2>⚖️ Employment Litigation</h2>
        <p>We defend employers against claims of discrimination, harassment, retaliation, wrongful termination, and wage and hour violations. Our litigation team has extensive trial experience.</p>
      </div>

      <div class="content-section">
        <h2>💰 Wage & Hour Compliance</h2>
        <p>We help employers comply with federal and state wage and hour laws, including classification of employees and independent contractors, overtime requirements, and meal and rest break obligations.</p>
      </div>

      <div class="content-section">
        <h2>📊 Employee Benefits & Executive Compensation</h2>
        <p>We advise on the design, implementation, and administration of employee benefit plans, including retirement plans, health and welfare plans, and executive compensation arrangements.</p>
      </div>

      <div class="content-section">
        <h2>🤝 Labor Relations</h2>
        <p>We represent employers in union organizing campaigns, collective bargaining negotiations, and labor arbitrations. We also handle unfair labor practice charges before the NLRB.</p>
      </div>
    `
  },
  "real-estate": {
    title: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200",
    content: `
      <div class="intro-section">
        <p class="lead-text">Our Real Estate practice represents developers, investors, lenders, and businesses in all aspects of commercial real estate transactions and disputes. We provide practical, business-oriented counsel.</p>
      </div>

      <div class="content-section">
        <h2>🏢 Acquisitions & Dispositions</h2>
        <p>We handle purchases and sales of all property types with comprehensive due diligence:</p>
        <div class="feature-grid">
          <div class="feature-item">✓ Office buildings</div>
          <div class="feature-item">✓ Retail centers</div>
          <div class="feature-item">✓ Industrial facilities</div>
          <div class="feature-item">✓ Multifamily properties</div>
        </div>
      </div>

      <div class="content-section">
        <h2>📝 Leasing</h2>
        <p>We represent landlords and tenants in negotiating office, retail, industrial, and ground leases. Our attorneys understand market terms and help clients achieve their business objectives.</p>
      </div>

      <div class="content-section">
        <h2>💰 Real Estate Finance</h2>
        <p>We represent borrowers and lenders in acquisition, construction, and refinancing transactions. Our experience includes traditional mortgages, mezzanine loans, and preferred equity investments.</p>
      </div>

      <div class="content-section">
        <h2>🏗️ Development & Construction</h2>
        <p>We guide developers through the entitlement process, negotiate construction contracts, and resolve construction disputes. Our team includes attorneys with engineering backgrounds.</p>
      </div>

      <div class="content-section">
        <h2>⚖️ Real Estate Litigation</h2>
        <p>We litigate disputes involving purchase agreements, leases, easements, title issues, and construction defects. We also handle landlord-tenant disputes and evictions.</p>
      </div>
    `
  },
  "private-client": {
    title: "Private Client",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200",
    content: `
      <div class="intro-section">
        <p class="lead-text">Our Private Client practice provides sophisticated estate planning, wealth management, and fiduciary services to high-net-worth individuals and families. We help clients preserve and transfer wealth efficiently.</p>
      </div>

      <div class="content-section">
        <h2>📋 Estate Planning</h2>
        <p>We design comprehensive estate plans that minimize taxes and protect assets:</p>
        <div class="feature-grid">
          <div class="feature-item">✓ Wills and trusts</div>
          <div class="feature-item">✓ Powers of attorney</div>
          <div class="feature-item">✓ Healthcare directives</div>
          <div class="feature-item">✓ Tax minimization strategies</div>
        </div>
      </div>

      <div class="content-section">
        <h2>🏛️ Trust Administration</h2>
        <p>We advise trustees on their fiduciary duties, tax compliance, and distribution decisions. We also represent beneficiaries in trust disputes and accountings.</p>
      </div>

      <div class="content-section">
        <h2>⚖️ Probate & Estate Administration</h2>
        <p>We guide personal representatives through the probate process, including asset collection, creditor claims, tax returns, and distributions. We handle both simple and complex estates.</p>
      </div>

      <div class="content-section">
        <h2>💼 Wealth Transfer Planning</h2>
        <p>We help clients transfer wealth to future generations using sophisticated techniques such as grantor retained annuity trusts (GRATs), charitable remainder trusts, and family limited partnerships.</p>
      </div>

      <div class="content-section">
        <h2>⚔️ Fiduciary Litigation</h2>
        <p>We represent fiduciaries and beneficiaries in will contests, trust disputes, conservatorships, and breach of fiduciary duty claims. Our litigation team has extensive probate court experience.</p>
      </div>
    `
  },
  "intellectual-property": {
    title: "Intellectual Property",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200",
    content: `
      <div class="intro-section">
        <p class="lead-text">Our Intellectual Property practice helps clients protect, commercialize, and enforce their IP assets. We serve technology companies, life sciences firms, manufacturers, and creative industries.</p>
      </div>

      <div class="content-section">
        <h2>📜 Patent Prosecution</h2>
        <p>We prepare and prosecute patent applications before the USPTO:</p>
        <div class="feature-grid">
          <div class="feature-item">✓ Utility patents</div>
          <div class="feature-item">✓ Design patents</div>
          <div class="feature-item">✓ Plant patents</div>
          <div class="feature-item">✓ International filings</div>
        </div>
      </div>

      <div class="content-section">
        <h2>®️ Trademark & Copyright</h2>
        <p>We handle trademark and copyright registration, clearance searches, and portfolio management. We also advise on brand protection strategies and domain name disputes.</p>
      </div>

      <div class="content-section">
        <h2>🔒 Trade Secrets</h2>
        <p>We help clients identify, protect, and enforce trade secrets through confidentiality agreements, employee policies, and litigation. We handle misappropriation claims and defend against theft allegations.</p>
      </div>

      <div class="content-section">
        <h2>🤝 IP Licensing & Transactions</h2>
        <p>We negotiate and draft licenses, assignments, and other IP agreements. Our experience includes exclusive and non-exclusive licenses, cross-licenses, and technology transfer agreements.</p>
      </div>

      <div class="content-section">
        <h2>🔍 IP Due Diligence</h2>
        <p>We conduct IP due diligence for M&A transactions, investments, and financings. Our comprehensive reviews identify ownership issues, infringement risks, and valuation concerns.</p>
      </div>
    `
  },
  "criminal-defense": {
    title: "Criminal Defense",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200",
    content: `
      <div class="intro-section">
        <p class="lead-text">Our Criminal Defense practice provides aggressive representation for individuals and businesses facing criminal charges. We handle white-collar crimes, regulatory investigations, and traditional criminal matters.</p>
      </div>

      <div class="content-section">
        <h2>💼 White-Collar Defense</h2>
        <p>We defend clients against financial crimes with former federal prosecutors on our team:</p>
        <div class="feature-grid">
          <div class="feature-item">✓ Fraud and embezzlement</div>
          <div class="feature-item">✓ Money laundering</div>
          <div class="feature-item">✓ Securities violations</div>
          <div class="feature-item">✓ Tax crimes</div>
        </div>
      </div>

      <div class="content-section">
        <h2>🔍 Government Investigations</h2>
        <p>We represent clients in investigations by the DOJ, SEC, IRS, and other agencies. Our early intervention often prevents charges from being filed.</p>
      </div>

      <div class="content-section">
        <h2>🏢 Corporate Criminal Defense</h2>
        <p>We defend corporations and their executives against criminal charges, including environmental crimes, healthcare fraud, and FCPA violations. We also conduct internal investigations.</p>
      </div>

      <div class="content-section">
        <h2>⚖️ Trial Defense</h2>
        <p>Our trial attorneys have extensive courtroom experience defending clients against all types of criminal charges. We have achieved not guilty verdicts and favorable plea agreements.</p>
      </div>

      <div class="content-section">
        <h2>📜 Appeals & Post-Conviction Relief</h2>
        <p>We handle criminal appeals and post-conviction motions, including habeas corpus petitions and sentence reductions. Our appellate team has successfully overturned convictions.</p>
      </div>
    `
  },
  "family-law": {
    title: "Family Law",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200",
    content: `
      <div class="intro-section">
        <p class="lead-text">Our Family Law practice provides compassionate yet strategic representation in divorce, custody, and other domestic relations matters. We help clients navigate difficult transitions while protecting their interests.</p>
      </div>

      <div class="content-section">
        <h2>💔 Divorce & Separation</h2>
        <p>We handle contested and uncontested divorces, legal separations, and annulments. Our approach balances zealous advocacy with efforts to minimize conflict and expense.</p>
      </div>

      <div class="content-section">
        <h2>👨‍👩‍👧 Child Custody & Visitation</h2>
        <p>We represent parents in custody and visitation disputes:</p>
        <div class="feature-grid">
          <div class="feature-item">✓ Initial custody determinations</div>
          <div class="feature-item">✓ Custody modifications</div>
          <div class="feature-item">✓ Visitation schedules</div>
          <div class="feature-item">✓ Relocation cases</div>
        </div>
      </div>

      <div class="content-section">
        <h2>💵 Child & Spousal Support</h2>
        <p>We handle child support and spousal support matters, including calculations, modifications, and enforcement. We also represent clients in contempt proceedings.</p>
      </div>

      <div class="content-section">
        <h2>🏠 Property Division</h2>
        <p>We assist clients with the division of marital property, including real estate, businesses, retirement accounts, and other assets. We work with forensic accountants and appraisers as needed.</p>
      </div>

      <div class="content-section">
        <h2>📝 Prenuptial & Postnuptial Agreements</h2>
        <p>We draft and review marital agreements that protect assets and clarify financial expectations. Our agreements are designed to be enforceable while fair to both parties.</p>
      </div>

      <div class="content-section">
        <h2>🛑 Domestic Violence</h2>
        <p>We represent victims seeking restraining orders and defendants facing domestic violence allegations. We handle emergency protective orders and contested hearings.</p>
      </div>
    `
  }
};

export default function PracticeAreaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const area = practiceAreas[slug as keyof typeof practiceAreas];

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[--navy] dark:text-white mb-4">Practice Area Not Found</h1>
          <Link href="/practice-areas" className="text-[--accent] hover:underline">
            ← Back to Practice Areas
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white dark:bg-[#0b0e14]">
      {/* Hero Section with Overlay */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src={area.image} 
          alt={area.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
            <FadeIn>
              <Link href="/practice-areas" className="inline-flex items-center text-sm text-white/90 hover:text-white mb-6 transition">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Practice Areas
              </Link>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                {area.title}
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl">
                Expert legal counsel tailored to your specific needs
              </p>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <FadeIn>
              <style jsx>{`
                .intro-section {
                  margin-bottom: 3rem;
                  padding: 2rem;
                  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                  border-left: 4px solid var(--accent);
                  border-radius: 0.5rem;
                }
                :global(.dark) .intro-section {
                  background: linear-gradient(135deg, #1a1f2e 0%, #0f1420 100%);
                }
                .lead-text {
                  font-size: 1.25rem;
                  line-height: 1.8;
                  color: #374151;
                  margin: 0;
                }
                :global(.dark) .lead-text {
                  color: #d1d5db;
                }
                .content-section {
                  margin-bottom: 3rem;
                  padding: 2rem;
                  background: white;
                  border-radius: 0.75rem;
                  border: 1px solid rgba(0, 0, 0, 0.05);
                  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
                }
                :global(.dark) .content-section {
                  background: #0f1420;
                  border-color: rgba(255, 255, 255, 0.1);
                }
                .section-header {
                  display: flex;
                  align-items: center;
                  gap: 1rem;
                  margin-bottom: 1.5rem;
                  padding-bottom: 0.75rem;
                  border-bottom: 2px solid rgba(207, 161, 58, 0.2);
                }
                .section-icon {
                  width: 2rem;
                  height: 2rem;
                  color: var(--accent);
                  flex-shrink: 0;
                }
                .content-section h2 {
                  font-size: 1.75rem;
                  font-weight: 700;
                  color: var(--navy);
                  margin: 0;
                }
                :global(.dark) .content-section h2 {
                  color: white;
                }
                .content-section p {
                  font-size: 1.125rem;
                  line-height: 1.8;
                  color: #4b5563;
                  margin-bottom: 1.5rem;
                }
                :global(.dark) .content-section p {
                  color: #d1d5db;
                }
                .bullet-list {
                  list-style: none;
                  padding: 0;
                  margin: 1.5rem 0;
                }
                .bullet-list li {
                  position: relative;
                  padding-left: 2rem;
                  margin-bottom: 0.75rem;
                  font-size: 1.05rem;
                  line-height: 1.6;
                  color: #4b5563;
                }
                :global(.dark) .bullet-list li {
                  color: #d1d5db;
                }
                .bullet-list li:before {
                  content: "•";
                  position: absolute;
                  left: 0.5rem;
                  color: var(--accent);
                  font-size: 1.5rem;
                  line-height: 1;
                }
                .feature-grid {
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                  gap: 1rem;
                  margin-top: 1.5rem;
                }
                .feature-item {
                  padding: 1rem 1.5rem;
                  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
                  border-left: 3px solid var(--accent);
                  border-radius: 0.5rem;
                  font-size: 0.95rem;
                  color: #374151;
                  transition: all 0.3s ease;
                }
                :global(.dark) .feature-item {
                  background: linear-gradient(135deg, #1a1f2e 0%, #0d121a 100%);
                  color: #d1d5db;
                }
                .feature-item:hover {
                  transform: translateX(5px);
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
              `}</style>
              <div 
                className="practice-content"
                dangerouslySetInnerHTML={{ __html: area.content }}
              />
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FadeIn delay={200}>
              {/* Contact Card */}
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-[--navy] to-[#0d1b2a] rounded-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Need Legal Assistance?</h3>
                  <p className="text-gray-200 mb-6">
                    Contact us today to discuss your {area.title.toLowerCase()} needs with one of our experienced attorneys.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full text-center rounded-md bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 cursor-pointer px-6 py-3 text-base font-semibold hover:opacity-90 transition"
                  >
                    Schedule a Consultation
                  </Link>
                  <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[--accent]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm">(555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[--accent]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">contact@sterlinglaw.com</span>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-white dark:bg-[#0f1420] rounded-lg border border-black/5 dark:border-white/10 p-6">
                  <h4 className="font-semibold text-[--navy] dark:text-white mb-4">Related Services</h4>
                  <div className="space-y-3">
                    <Link href="/practice-areas" className="flex items-center justify-between group">
                      <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-[--accent] transition">View All Practice Areas</span>
                      <svg className="w-4 h-4 text-[--accent]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link href="/attorneys" className="flex items-center justify-between group">
                      <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-[--accent] transition">Meet Our Attorneys</span>
                      <svg className="w-4 h-4 text-[--accent]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link href="/testimonials" className="flex items-center justify-between group">
                      <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-[--accent] transition">Client Testimonials</span>
                      <svg className="w-4 h-4 text-[--accent]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </article>
  );
}
