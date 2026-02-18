"use client"

import { useState } from "react"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

// --- DATA ---

const COMPANIES = [
  // TECH & SAAS
  { company: "Bloomreach", sector: "Tech & SaaS", size: "500+", fit: "AI-driven e-commerce platform. Already building with AI daily.", website: "bloomreach.com", contact: "VP Engineering / Head of People", tier: 1 },
  { company: "CloudTalk", sector: "Tech & SaaS", size: "200+", fit: "Cloud phone B2B. $42M funding. Scaling fast, needs AI strategy alignment.", website: "cloudtalk.io", contact: "CTO / VP Product", tier: 1 },
  { company: "Vacuumlabs", sector: "Tech & SaaS", size: "150+", fit: "Fintech engineering + design. FinTech Hub co-founder. Natural fit.", website: "vacuumlabs.com", contact: "CEO / Head of Design", tier: 1 },
  { company: "Sygic", sector: "Tech & SaaS", size: "100+", fit: "Navigation/logistics B2B pivot. AI integration opportunity.", website: "sygic.com", contact: "CTO / Product Lead", tier: 1 },
  { company: "GoodRequest", sector: "Tech & SaaS", size: "80+", fit: "Digital studio. Web + mobile. Fintech, health, enterprise clients.", website: "goodrequest.com", contact: "CEO / Head of Delivery", tier: 1 },
  { company: "Photoneo", sector: "Tech & SaaS", size: "100+", fit: "3D vision + robotics. $53M funding. Deep tech, AI-native.", website: "photoneo.com", contact: "CTO / Head of Engineering", tier: 2 },
  { company: "Powerful Medical", sector: "Tech & SaaS", size: "30+", fit: "AI medical device (PMcardio). AI-first company.", website: "powerfulmedical.com", contact: "CEO / CTO", tier: 2 },
  { company: "Sensoneo", sector: "Tech & SaaS", size: "50+", fit: "Smart waste management. AI/IoT solutions for cities.", website: "sensoneo.com", contact: "CEO / Head of Product", tier: 2 },
  { company: "Fuergy", sector: "Tech & SaaS", size: "30+", fit: "Energy AI + hardware. AI-powered energy optimization.", website: "fuergy.com", contact: "CEO / CTO", tier: 2 },
  { company: "Minit (Gradient ECM)", sector: "Tech & SaaS", size: "50+", fit: "Process mining AI. Data-driven business analysis.", website: "minit.io", contact: "Head of Product", tier: 2 },
  { company: "Innovatrics", sector: "Tech & SaaS", size: "100+", fit: "Biometric AI solutions. Identity verification. AI-native.", website: "innovatrics.com", contact: "CTO / VP Engineering", tier: 1 },
  { company: "Rare Crew", sector: "Tech & SaaS", size: "150+", fit: "Custom software + mobile. Global presence from Bratislava.", website: "rarecrew.com", contact: "CEO / Head of Delivery", tier: 2 },
  { company: "Pixel Federation", sector: "Tech & SaaS", size: "200+", fit: "Gaming company. Creative + tech intersection.", website: "pixelfederation.com", contact: "CEO / Head of Studio", tier: 2 },
  { company: "PosAm", sector: "Tech & SaaS", size: "200+", fit: "IT services. Enterprise clients. Digital transformation.", website: "posam.sk", contact: "CEO / Head of Innovation", tier: 2 },
  { company: "Touch4IT", sector: "Tech & SaaS", size: "50+", fit: "Cloud + AI consulting. Already in AI space.", website: "touch4it.com", contact: "CEO / Head of Consulting", tier: 1 },
  { company: "Panaxeo", sector: "Tech & SaaS", size: "20+", fit: "Software dev + IT strategy consulting.", website: "panaxeo.com", contact: "CEO", tier: 3 },
  { company: "elv.ai", sector: "Tech & SaaS", size: "15+", fit: "AI internet safety. AI-native startup.", website: "elv.ai", contact: "CEO / CTO", tier: 2 },
  { company: "CloseRocket", sector: "Tech & SaaS", size: "15+", fit: "AI sales platform. €1.1M funding.", website: "closerocket.com", contact: "CEO", tier: 3 },
  { company: "Auglio", sector: "Tech & SaaS", size: "15+", fit: "Virtual try-on AI. E-commerce + AI.", website: "auglio.com", contact: "CEO", tier: 3 },
  { company: "ableneo", sector: "Tech & SaaS", size: "50+", fit: "Digital transformation services.", website: "ableneo.com", contact: "CEO / Managing Director", tier: 2 },
  { company: "SOFTIP", sector: "Tech & SaaS", size: "200+", fit: "Enterprise IT. Large SK IT company.", website: "softip.sk", contact: "Head of Innovation", tier: 2 },
  { company: "Younics", sector: "Tech & SaaS", size: "30+", fit: "Scalable digital products. Product-focused.", website: "younics.com", contact: "CEO", tier: 2 },
  { company: "BRACKETS by TRIAD", sector: "Tech & SaaS", size: "30+", fit: "Strategy + UX + dev. Product studio.", website: "brackets.sk", contact: "CEO / Head of Strategy", tier: 2 },
  { company: "Bookee.ai", sector: "Tech & SaaS", size: "15+", fit: "AI accounting. AI-native.", website: "bookee.ai", contact: "CEO", tier: 3 },
  { company: "ScopilotAI", sector: "Tech & SaaS", size: "10+", fit: "AI project scoping tool.", website: "scopilot.ai", contact: "CEO", tier: 3 },

  // CREATIVE & MARKETING  
  { company: "Zaraguza", sector: "Creative & Marketing", size: "50+", fit: "Full-service ad agency. Multichannel campaigns. Major clients.", website: "zaraguza.com", contact: "CEO / Creative Director", tier: 1 },
  { company: "TRIAD Advertising", sector: "Creative & Marketing", size: "50+", fit: "Major ad agency. Branding + innovation focus.", website: "triad.sk", contact: "Managing Director / CD", tier: 1 },
  { company: "Basta digital", sector: "Creative & Marketing", size: "30+", fit: "Digital Agency of the Year 2023. Performance + strategy.", website: "bastadigital.com", contact: "CEO / Head of Strategy", tier: 1 },
  { company: "Kremsa Digital", sector: "Creative & Marketing", size: "30+", fit: "Brand experiences in digital. Creative + tech.", website: "kremsa.com", contact: "CEO / Creative Director", tier: 1 },
  { company: "Leiter Advertising", sector: "Creative & Marketing", size: "30+", fit: "Full-service agency. Creative campaigns + strategy.", website: "leiter.sk", contact: "Managing Director", tier: 1 },
  { company: "Vivantina", sector: "Creative & Marketing", size: "20+", fit: "Digital marketing + PPC + social. Growing agency.", website: "vivantina.sk", contact: "CEO", tier: 2 },
  { company: "Sidera Digital", sector: "Creative & Marketing", size: "20+", fit: "Digital marketing + web + branding.", website: "sidera.sk", contact: "CEO", tier: 2 },
  { company: "Madviso", sector: "Creative & Marketing", size: "20+", fit: "PPC + digital advertising. Data-driven.", website: "madviso.sk", contact: "CEO", tier: 2 },
  { company: "UPVISION", sector: "Creative & Marketing", size: "15+", fit: "Web dev + UX/UI + digital marketing.", website: "upvision.sk", contact: "CEO", tier: 2 },
  { company: "GALTON Brands", sector: "Creative & Marketing", size: "15+", fit: "Branding + digital strategy specialist.", website: "galtonbrands.com", contact: "CEO / Strategy Director", tier: 2 },
  { company: "Contedy", sector: "Creative & Marketing", size: "15+", fit: "Content marketing + social media focus.", website: "contedy.com", contact: "CEO", tier: 3 },
  { company: "Moodive", sector: "Creative & Marketing", size: "15+", fit: "Video production. Creative commercials + explainers.", website: "moodive.sk", contact: "Producer / CEO", tier: 2 },
  { company: "CREATIVE PRO", sector: "Creative & Marketing", size: "20+", fit: "Event + live marketing. BTL activities.", website: "creativepro.sk", contact: "CEO", tier: 3 },
  { company: "PIX Creative", sector: "Creative & Marketing", size: "15+", fit: "Social media + web + branding.", website: "pixcreative.sk", contact: "CEO", tier: 3 },
  { company: "Rodller", sector: "Creative & Marketing", size: "15+", fit: "Digital strategy + content marketing.", website: "rodller.com", contact: "CEO", tier: 3 },
  { company: "IQs Digital", sector: "Creative & Marketing", size: "15+", fit: "Social media + conversion optimization.", website: "iqsdigital.sk", contact: "CEO", tier: 3 },
  { company: "Civitta Slovakia", sector: "Creative & Marketing", size: "50+", fit: "Digital + consultancy integrated. Innovation services.", website: "civitta.com", contact: "Country Manager", tier: 1 },
  { company: "Vidadu", sector: "Creative & Marketing", size: "15+", fit: "Targeted ad campaigns + digital strategy.", website: "vidadu.com", contact: "CEO", tier: 3 },

  // FINTECH & FINANCE
  { company: "Tatra banka", sector: "Fintech & Finance", size: "2000+", fit: "EXISTING RELATIONSHIP (Roland campaigns). Innovation department. Elevator Lab program.", website: "tatrabanka.sk", contact: "Head of Innovation / Digital", tier: 1 },
  { company: "Finax", sector: "Fintech & Finance", size: "50+", fit: "App-based financial planning. Licensed securities. AI opportunity.", website: "finax.eu", contact: "CEO / CTO", tier: 1 },
  { company: "TrustPay", sector: "Fintech & Finance", size: "50+", fit: "Payment gateway solutions. PISP. Fintech growth stage.", website: "trustpay.eu", contact: "CEO / CTO", tier: 2 },
  { company: "365.bank", sector: "Fintech & Finance", size: "100+", fit: "Challenger bank. App-first. Innovation-driven.", website: "365.bank", contact: "Head of Digital / CTO", tier: 1 },
  { company: "VESTBERRY", sector: "Fintech & Finance", size: "20+", fit: "Portfolio intelligence for VCs. Data + AI.", website: "vestberry.com", contact: "CEO", tier: 2 },
  { company: "Datamolino", sector: "Fintech & Finance", size: "15+", fit: "AI invoice processing. Eliminates manual entry.", website: "datamolino.com", contact: "CEO", tier: 2 },
  { company: "DLT Software", sector: "Fintech & Finance", size: "20+", fit: "Fintech + blockchain dev tools.", website: "dltsoftware.com", contact: "CEO / CTO", tier: 3 },
  { company: "WE s.r.o.", sector: "Fintech & Finance", size: "20+", fit: "Fintech consultancy. Payments CEE/MEA/Asia.", website: "wefintech.com", contact: "Managing Director", tier: 3 },
  { company: "BinarBase", sector: "Fintech & Finance", size: "15+", fit: "Financial data integration platform.", website: "binarbase.com", contact: "CEO", tier: 3 },
  { company: "Viamo", sector: "Fintech & Finance", size: "20+", fit: "P2P payments. Partnered with major SK banks.", website: "viamo.sk", contact: "CEO", tier: 2 },

  // CONSULTING & SERVICES
  { company: "ICG Slovakia", sector: "Consulting & Services", size: "20+", fit: "Product/service innovation consulting. Six Sigma, Lean, TRIZ.", website: "integratedconsulting.sk", contact: "Managing Director", tier: 1 },
  { company: "BIC Bratislava", sector: "Consulting & Services", size: "15+", fit: "Innovation + technology transfer. 2000+ SME clients.", website: "bic.sk", contact: "Director", tier: 2 },
  { company: "Kreston Slovakia", sector: "Consulting & Services", size: "30+", fit: "Management consulting. Digital transformation.", website: "krestonslovakia.com", contact: "Managing Partner", tier: 2 },
  { company: "RSM SK", sector: "Consulting & Services", size: "50+", fit: "Management consulting. Tech + digital solutions.", website: "rsmsk.sk", contact: "Partner / Head of Advisory", tier: 2 },
  { company: "Mantu Bratislava", sector: "Consulting & Services", size: "50+", fit: "Global consulting. Innovation + creativity focus.", website: "mantu.com", contact: "Country Manager", tier: 2 },
  { company: "HIC Slovakia", sector: "Consulting & Services", size: "15+", fit: "Change management. Corporate transformation.", website: "hic.sk", contact: "Managing Director", tier: 2 },
  { company: "CIOneer", sector: "Consulting & Services", size: "20+", fit: "IT managed services. Digital transformation.", website: "cioneer.com", contact: "CEO", tier: 3 },
  { company: "Industry Innovation Cluster", sector: "Consulting & Services", size: "15+", fit: "Innovation ecosystem. Digital transformation for SMEs.", website: "industryinnovationcluster.sk", contact: "Director", tier: 2 },
  { company: "Devoteam Slovakia", sector: "Consulting & Services", size: "30+", fit: "AI-driven tech consulting. Guides AI transformations.", website: "devoteam.com", contact: "Country Manager", tier: 1 },
  { company: "Adastra", sector: "Consulting & Services", size: "50+", fit: "Data + AI consulting. Enterprise clients.", website: "adastra.com", contact: "Country Manager / Head of AI", tier: 1 },
  { company: "transformio", sector: "Consulting & Services", size: "15+", fit: "AI Transformation Partner. Directly in AI adoption space.", website: "transformio.ai", contact: "CEO", tier: 1 },
  { company: "Profinit", sector: "Consulting & Services", size: "50+", fit: "Data + AI development. Enterprise solutions.", website: "profinit.eu", contact: "Director", tier: 2 },

  // DESIGN & ARCHITECTURE
  { company: "Diorama", sector: "Design & Architecture", size: "15+", fit: "Branding + marketing strategy + web + UX.", website: "diorama.sk", contact: "CEO / Creative Director", tier: 2 },
  { company: "Studio Echt", sector: "Design & Architecture", size: "15+", fit: "Branding + web + video production.", website: "studioecht.com", contact: "Founder", tier: 3 },
  { company: "detaility", sector: "Design & Architecture", size: "10+", fit: "UX/UI + branding + packaging design.", website: "detaility.com", contact: "Founder", tier: 3 },
  { company: "Art4web", sector: "Design & Architecture", size: "15+", fit: "Branding + visual identity + strategy.", website: "art4web.sk", contact: "CEO", tier: 3 },
  { company: "PLATFORM", sector: "Design & Architecture", size: "15+", fit: "UX/UI agency. Web + mobile apps.", website: "platform.sk", contact: "CEO", tier: 3 },
  { company: "guy.sk", sector: "Design & Architecture", size: "10+", fit: "Digital studio. Clean design + UX + dev.", website: "guy.sk", contact: "Founder", tier: 3 },
  { company: "Human Creative", sector: "Design & Architecture", size: "15+", fit: "Brand identity + logo + web design.", website: "humancreative.sk", contact: "CEO", tier: 3 },
  { company: "VALMAX", sector: "Design & Architecture", size: "10+", fit: "Brand identity + visual identity + strategy.", website: "valmax.sk", contact: "Founder", tier: 3 },
  { company: "Creative Concept", sector: "Design & Architecture", size: "15+", fit: "Graphic design + architecture. 17+ years.", website: "creativeconcept.sk", contact: "Director", tier: 3 },

  // E-COMMERCE & MEDIA
  { company: "Heureka Group", sector: "E-commerce & Media", size: "200+", fit: "E-commerce comparison. Data-heavy. AI in product discovery.", website: "heureka.sk", contact: "CTO / Head of Product", tier: 2 },
  { company: "Websupport", sector: "E-commerce & Media", size: "100+", fit: "Hosting + domains. Digital infrastructure.", website: "websupport.sk", contact: "CEO / CTO", tier: 2 },
  { company: "Staffino", sector: "E-commerce & Media", size: "30+", fit: "Customer experience platform. AI in CX.", website: "staffino.com", contact: "CEO / CTO", tier: 2 },
  { company: "Anasoft", sector: "E-commerce & Media", size: "50+", fit: "AI + enterprise software. EMANS platform.", website: "anasoft.com", contact: "CEO / CTO", tier: 1 },
  { company: "Profesia", sector: "E-commerce & Media", size: "50+", fit: "SK's #1 job portal. Data + AI in HR tech.", website: "profesia.sk", contact: "CEO / Head of Product", tier: 2 },
  { company: "Slido (Cisco)", sector: "E-commerce & Media", size: "100+", fit: "Interactive presentations. Product-led. BA engineering center.", website: "slido.com", contact: "Site Lead / Engineering Director", tier: 2 },
]

const SECTORS = [
  "All",
  "Tech & SaaS",
  "Creative & Marketing",
  "Fintech & Finance",
  "Consulting & Services",
  "Design & Architecture",
  "E-commerce & Media"
]

export default function ProspectsPage() {
  const [activeTab, setActiveTab] = useState("All")
  const [expandedTemplate, setExpandedTemplate] = useState<number | null>(null)

  const filteredCompanies = activeTab === "All" 
    ? COMPANIES 
    : COMPANIES.filter(c => c.sector === activeTab)

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a] font-mono selection:bg-[#0047BB] selection:text-white">
      <TopNav />

      <main className="max-w-5xl mx-auto pt-32 pb-24 px-6">
        
        {/* 1. HERO HEADER */}
        <header className="mb-16 border-b border-black/10 pb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB] mb-4">B2B OUTREACH — BRATISLAVA</p>
              <h1 className="font-serif text-4xl md:text-6xl italic leading-tight text-black">
                Prospect Database
              </h1>
            </div>
            <div className="text-right">
              <p className="text-3xl md:text-5xl font-bold text-[#0047BB] tracking-tighter">~100 TARGETS</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mt-1">Across 6 sectors</p>
            </div>
          </div>
          
          <p className="text-sm text-black/60 max-w-2xl">
            Companies in Bratislava, Slovakia. Organized by sector, prioritized by fit. Two offers: corporate workshop (€5,900) or public event gateway (€99).
          </p>
        </header>

        {/* 2. IDEAL CLIENT PROFILE */}
        <section className="mb-16 bg-[#0047BB] text-white p-6 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl md:text-3xl italic">Ideal Client Profile</h2>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Targeting Criteria</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/10 border border-white/20 p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">Company Size</p>
              <p className="text-sm font-bold">15-200 employees</p>
              <p className="text-xs text-white/60 mt-2">Big enough for team training budget. Small enough for leadership access.</p>
            </div>
            <div className="bg-white/10 border border-white/20 p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">Decision Maker</p>
              <p className="text-sm font-bold">CEO, CTO, Head of Innovation</p>
              <p className="text-xs text-white/60 mt-2">Someone who controls €5K+ training budget.</p>
            </div>
            <div className="bg-white/10 border border-white/20 p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">AI Signal</p>
              <p className="text-sm font-bold">Using or Exploring</p>
              <p className="text-xs text-white/60 mt-2">Not asking "what is AI?" but "how do we use it better?"</p>
            </div>
            <div className="bg-white/10 border border-white/20 p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">Budget Signal</p>
              <p className="text-sm font-bold">Invests in Growth</p>
              <p className="text-xs text-white/60 mt-2">Sends people to conferences. Has done workshops before.</p>
            </div>
          </div>
        </section>

        {/* 3. DUAL OFFER STRATEGY */}
        <section className="mb-16 border border-black/10 p-6 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl md:text-3xl italic">Dual Offer Strategy</h2>
            <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">The Funnel</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-2 border-[#0047BB] pl-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">CORPORATE WORKSHOP</h3>
                <span className="bg-[#0047BB] text-white text-[10px] font-bold px-2 py-1">€5,900</span>
              </div>
              <p className="text-sm text-black/60 mb-4">Half day, 10-15 people, we come to you, 30-day follow-up.</p>
              <p className="text-xs text-black/40 uppercase tracking-widest">For companies ready to invest in their team.</p>
            </div>

            <div className="border-l-2 border-black/20 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">PUBLIC EVENT GATEWAY</h3>
                <span className="bg-black text-white text-[10px] font-bold px-2 py-1">€99</span>
              </div>
              <p className="text-sm text-black/60 mb-4">THE MINDSHIFT, Feb 26, 40 seats. "Send 1-2 people to see what we do."</p>
              <p className="text-xs text-black/40 uppercase tracking-widest">For companies who want to test first.</p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-black/5 text-center">
            <p className="text-xs font-bold text-[#0047BB] uppercase tracking-widest">
              The public event is a funnel to corporate. Every attendee is a potential corporate lead.
            </p>
          </div>
        </section>

        {/* 4. COMPANY DATABASE */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <h2 className="font-serif text-2xl md:text-3xl italic">Company Database</h2>
            <div className="text-xs text-black/40 font-bold uppercase tracking-widest">
              Showing {filteredCompanies.length} of {COMPANIES.length} companies
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-black/10 pb-4">
            {SECTORS.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveTab(sector)}
                className={cn(
                  "px-3 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors",
                  activeTab === sector 
                    ? "bg-[#0047BB] text-white" 
                    : "bg-black/5 text-black/60 hover:bg-black/10"
                )}
              >
                {sector}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-black/10">
            <table className="w-full text-left text-xs">
              <thead className="bg-black/5 text-black/40 uppercase tracking-widest font-bold border-b border-black/10">
                <tr>
                  <th className="p-4 w-[200px]">Company</th>
                  <th className="p-4 w-[150px]">Sector</th>
                  <th className="p-4 w-[100px]">Size Est.</th>
                  <th className="p-4">Why They Fit</th>
                  <th className="p-4 w-[150px]">Website</th>
                  <th className="p-4 w-[200px]">Contact Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {filteredCompanies.map((company, i) => (
                  <tr key={i} className="hover:bg-black/[0.02]">
                    <td className="p-4 font-bold">
                      <div className="flex items-center gap-2">
                        <div className={cn(
                          "w-2 h-2 rounded-full",
                          company.tier === 1 ? "bg-[#0047BB]" : 
                          company.tier === 2 ? "bg-black/40" : "bg-black/10"
                        )} />
                        <span className={cn(company.tier === 1 ? "text-black" : "text-black/60")}>
                          {company.company}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-black/60">{company.sector}</td>
                    <td className="p-4 text-black/60">{company.size}</td>
                    <td className="p-4 text-black/80">{company.fit}</td>
                    <td className="p-4 text-[#0047BB] underline decoration-1 underline-offset-2">
                      <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer">
                        {company.website}
                      </a>
                    </td>
                    <td className="p-4 text-black/60">{company.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. CONTACT DISCOVERY GUIDE */}
        <section className="mb-16 bg-black/[0.02] border border-black/10 p-6 md:p-8">
          <h2 className="font-serif text-2xl md:text-3xl italic mb-6">How to Find Emails</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="font-bold text-[#0047BB]">01</span>
                <p className="text-sm">Go to company website → About/Team page → Find decision maker name</p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-[#0047BB]">02</span>
                <p className="text-sm">Use email pattern: <span className="font-mono bg-black/5 px-1">meno.priezvisko@firma.sk</span> or <span className="font-mono bg-black/5 px-1">meno@firma.sk</span></p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-[#0047BB]">03</span>
                <p className="text-sm">Verify with Hunter.io (free tier: 25 searches/month) or verify via LinkedIn</p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-[#0047BB]">04</span>
                <p className="text-sm">Alternative: Use LinkedIn to find the person → Send connection request with note</p>
              </div>
            </div>
            
            <div className="bg-white border border-black/10 p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-4">Common Slovak Patterns</p>
              <ul className="space-y-2 text-sm font-mono text-black/60">
                <li>firstname.lastname@company.sk</li>
                <li>firstname@company.sk</li>
                <li>f.lastname@company.sk</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. EMAIL TEMPLATES */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl md:text-3xl italic mb-8">Email Templates</h2>
          
          <div className="space-y-4">
            {/* Template 1 */}
            <div className="border border-black/10">
              <button 
                onClick={() => setExpandedTemplate(expandedTemplate === 1 ? null : 1)}
                className="w-full flex items-center justify-between p-4 bg-black/[0.02] hover:bg-black/[0.05] transition-colors text-left"
              >
                <span className="font-bold text-sm">Template 1: Corporate Workshop Intro (Cold)</span>
                <span className="text-xs uppercase tracking-widest text-black/40">{expandedTemplate === 1 ? "Close" : "View"}</span>
              </button>
              
              {expandedTemplate === 1 && (
                <div className="p-6 bg-white border-t border-black/10">
                  <pre className="whitespace-pre-wrap font-mono text-xs text-black/80 leading-relaxed">
{`Subject: AI pre váš tím — krátka otázka

Dobrý deň [Meno],

volám sa Roman a spolu s Rolandom Vraníkom (SORRYWECAN) a Jánom Koscelanským (SUDOLABS) vedieme Research Lab — AI vzdelávanie pre tímy, ktoré s AI už pracujú.

Nie sme kurz na prompting. Pomáhame firmám premýšľať o tom, ako AI mení ich rozhodovanie, procesy a výsledky.

Robia sme workshopy pre tímy 10-15 ľudí. Pol dňa. Priamo u vás.

Mal by som krátku otázku: používa váš tím AI nástroje v každodennej práci? Ak áno, rád by som sa porozprával o tom, kde vidíte najväčší potenciál.

Žiadny záväzok — len 15-minútový call.

S pozdravom,
Roman Pii Wagner
Research Lab | researchlab.sorrywecan.com`}
                  </pre>
                </div>
              )}
            </div>

            {/* Template 2 */}
            <div className="border border-black/10">
              <button 
                onClick={() => setExpandedTemplate(expandedTemplate === 2 ? null : 2)}
                className="w-full flex items-center justify-between p-4 bg-black/[0.02] hover:bg-black/[0.05] transition-colors text-left"
              >
                <span className="font-bold text-sm">Template 2: Public Event Invite (Warmer)</span>
                <span className="text-xs uppercase tracking-widest text-black/40">{expandedTemplate === 2 ? "Close" : "View"}</span>
              </button>
              
              {expandedTemplate === 2 && (
                <div className="p-6 bg-white border-t border-black/10">
                  <pre className="whitespace-pre-wrap font-mono text-xs text-black/80 leading-relaxed">
{`Subject: 26. februára — THE MINDSHIFT (Bratislava)

Dobrý deň [Meno],

26. februára robíme THE MINDSHIFT — 3-hodinový AI workshop pre ľudí, ktorí s AI už pracujú.

40 miest. €99. Žiadna teória — len to, čo reálne funguje.

Roland na TASTE — čo odlišuje dobrú prácu od zabudnuteľnej.
Ján na LEVERAGE — čo dnes zvládne jeden človek.
Roman na CLARITY — ako sa rozhodovať, keď sa všetko mení.

Ak chcete najprv vidieť, čo robíme, pred tým než zvážite niečo pre celý tím — toto je ideálna príležitosť. Pošlite 1-2 ľudí.

Link: [LINK]

S pozdravom,
Roman`}
                  </pre>
                </div>
              )}
            </div>

            {/* Template 3 */}
            <div className="border border-black/10">
              <button 
                onClick={() => setExpandedTemplate(expandedTemplate === 3 ? null : 3)}
                className="w-full flex items-center justify-between p-4 bg-black/[0.02] hover:bg-black/[0.05] transition-colors text-left"
              >
                <span className="font-bold text-sm">Template 3: Follow-up (After No Response)</span>
                <span className="text-xs uppercase tracking-widest text-black/40">{expandedTemplate === 3 ? "Close" : "View"}</span>
              </button>
              
              {expandedTemplate === 3 && (
                <div className="p-6 bg-white border-t border-black/10">
                  <pre className="whitespace-pre-wrap font-mono text-xs text-black/80 leading-relaxed">
{`Subject: Re: AI pre váš tím

Dobrý deň [Meno],

len krátky follow-up k môjmu predchádzajúcemu emailu.

Rozumiem, že je toho veľa. Ak to nie je relevantné, žiadny problém.

Ak áno — budúci týždeň 26.2. robíme THE MINDSHIFT (€99, 3 hodiny, 40 ľudí). Ak by ste chceli najprv vidieť, čo robíme, toto je najjednoduchší spôsob.

Dajte vedieť.

Roman`}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 7. LINKEDIN OUTREACH STRATEGY */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl md:text-3xl italic mb-8">LinkedIn Outreach Strategy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border border-black/10 p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] mb-2">Step 1</p>
              <p className="text-sm">Find decision maker on LinkedIn</p>
            </div>
            <div className="border border-black/10 p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] mb-2">Step 2</p>
              <p className="text-sm">Send connection request WITH note (max 300 chars)</p>
              <p className="text-xs text-black/40 mt-2 italic">"Dobrý deň [Meno], vidím že [firma] robí zaujímavé veci v [oblast]. Venujem sa AI vzdelávaniu pre tímy — rád by som sa spojil. Roman"</p>
            </div>
            <div className="border border-black/10 p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] mb-2">Step 3</p>
              <p className="text-sm">After accepted, send message (NOT a pitch — start conversation)</p>
            </div>
            <div className="border border-black/10 p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] mb-2">Step 4</p>
              <p className="text-sm">Mention public event as low-commitment entry point</p>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-red-50 border border-red-100 text-red-800 text-xs font-bold text-center uppercase tracking-widest">
            Key rule: Never pitch in first message. Ask about their AI usage first.
          </div>
        </section>

        {/* 8. OUTREACH WORKFLOW */}
        <section className="mb-16 border border-black/10 p-8">
          <h2 className="font-serif text-2xl md:text-3xl italic mb-8">Daily Workflow</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <div className="flex gap-4 items-start">
              <span className="font-bold text-black/20 text-xl">1</span>
              <p className="text-sm pt-1">Pick 10 companies per day from the list (start with Tier 1)</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="font-bold text-black/20 text-xl">2</span>
              <p className="text-sm pt-1">Find decision maker name + email (website → LinkedIn → Hunter.io)</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="font-bold text-black/20 text-xl">3</span>
              <p className="text-sm pt-1">Send personalized email (Template 1 or 2 based on fit)</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="font-bold text-black/20 text-xl">4</span>
              <p className="text-sm pt-1">Same day: Send LinkedIn connection request</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="font-bold text-black/20 text-xl">5</span>
              <p className="text-sm pt-1">Day 3-4: Follow up if no response (Template 3)</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="font-bold text-black/20 text-xl">6</span>
              <p className="text-sm pt-1">Track everything in shared Google Sheet</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="font-bold text-black/20 text-xl">7</span>
              <p className="text-sm pt-1">If they show interest: Book 15-min call</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="font-bold text-black/20 text-xl">8</span>
              <p className="text-sm pt-1">On call: Qualify → Corporate workshop pitch OR Public event invite</p>
            </div>
          </div>
        </section>

        {/* 9. TRACKING TEMPLATE */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl md:text-3xl italic mb-8">Tracking Template</h2>
          
          <div className="overflow-x-auto border border-black/10">
            <table className="w-full text-left text-xs">
              <thead className="bg-black/5 text-black/40 uppercase tracking-widest font-bold border-b border-black/10">
                <tr>
                  <th className="p-3">Company</th>
                  <th className="p-3">Contact</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">LinkedIn</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Channel</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 text-black/60">
                <tr>
                  <td className="p-3 font-bold text-black">Bloomreach</td>
                  <td className="p-3">Jozef K.</td>
                  <td className="p-3">jozef@bloom...</td>
                  <td className="p-3 text-[#0047BB]">Profile</td>
                  <td className="p-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-[10px] font-bold uppercase">Reached out</span></td>
                  <td className="p-3">Email</td>
                  <td className="p-3">Feb 18</td>
                  <td className="p-3">Sent T1 intro</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-black">Tatra banka</td>
                  <td className="p-3">Maria S.</td>
                  <td className="p-3">maria@tatra...</td>
                  <td className="p-3 text-[#0047BB]">Profile</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-[10px] font-bold uppercase">Meeting booked</span></td>
                  <td className="p-3">LinkedIn</td>
                  <td className="p-3">Feb 17</td>
                  <td className="p-3">Call on Friday 10am</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-black">Sygic</td>
                  <td className="p-3">Peter M.</td>
                  <td className="p-3">peter@sygic...</td>
                  <td className="p-3 text-[#0047BB]">Profile</td>
                  <td className="p-3"><span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-[10px] font-bold uppercase">Not interested</span></td>
                  <td className="p-3">Email</td>
                  <td className="p-3">Feb 16</td>
                  <td className="p-3">Already have internal training</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <footer className="text-center border-t border-black/10 pt-8 pb-8">
          <p className="text-[10px] font-bold uppercase tracking-widest text-black/30">
            SORRYWECAN // RESEARCH LAB // PROSPECT DATABASE // 2026
          </p>
        </footer>

      </main>
    </div>
  )
}
