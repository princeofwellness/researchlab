"use client"

import React from "react"
import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { 
  Target, 
  Users, 
  Mail, 
  BarChart3, 
  Zap, 
  CheckCircle2, 
  Calendar, 
  TrendingUp,
  ArrowRight,
  Flag,
  Layout,
  MessageSquare,
  Clock,
  Briefcase,
  Globe,
  Award
} from "lucide-react"


const currentMetrics = [
  { label: "First Event", value: "Feb 26", sub: "12 days", icon: Calendar },
  { label: "Email List", value: "~0", sub: "subscribers", icon: Mail },
  { label: "IG Followers", value: "—", sub: "research lab account", icon: Users },
  { label: "Corporate Pipeline", value: "0", sub: "deals in progress", icon: Briefcase },
  { label: "Community Members", value: "0", sub: "alumni network", icon: Users },
  { label: "Toolkit Editions", value: "4", sub: "published", icon: Layout },
]

const phases = [
  {
    id: 1,
    title: "PROVE IT",
    timeline: "Now — Month 2",
    owner: "Everyone",
    status: "active",
    items: [
      "Deliver THE SHIFT Feb 26 — fill 40 seats",
      "Capture testimonials + video from first session",
      "Launch THE SIGNAL newsletter (biweekly, Slovak)",
      "Instagram content system: 3x/week minimum",
      "Internal SWC education: first quarterly session",
      "Build post-workshop email sequence",
      "Compile full contact database"
    ]
  },
  {
    id: 2,
    title: "GROW THE ROOM",
    timeline: "Month 2-4",
    owner: "Tepi + Sasha",
    status: "upcoming",
    items: [
      "Monthly public sessions — at least 1x/month",
      "Corporate outreach — target 1-2 workshops/month",
      "Launch alumni Slack/Circle community",
      "5 strategic partnerships (agencies, chambers, conferences)",
      "LinkedIn thought leadership: Roland 2x/week, Ján 1x/week",
      "Research EU training subsidies for marketing angle",
      "Build referral program for past attendees"
    ]
  },
  {
    id: 3,
    title: "BUILD RECURRING",
    timeline: "Month 5-8",
    owner: "Tepi + Roland",
    status: "upcoming",
    items: [
      "Launch paid community tier (€29/month, Circle)",
      "Certification program: 'AI-Ready Team' (€299-499)",
      "Workshop series model: themed quarterly editions",
      "Content flywheel: session footage → IG → newsletter → community",
      "Corporate retainer model: quarterly check-ins (€2k/quarter)",
      "Grow email list to 1,000+ subscribers"
    ]
  },
  {
    id: 4,
    title: "SCALE",
    timeline: "Month 9-12",
    owner: "Roland + Ján",
    status: "upcoming",
    items: [
      "Test DACH market: Vienna workshop (English)",
      "Expand to Czech Republic: Prague session",
      "Launch digital products / premium toolkit",
      "Become the recognized AI education brand in SK/CZ",
      "Target: 50+ community members, 2,000+ email list"
    ]
  }
]

const initiatives = [
  { name: "THE SHIFT — Feb 26 session", owner: "Everyone", status: "active", priority: "high" },
  { name: "THE SIGNAL — biweekly newsletter", owner: "Sasha + Roman", status: "planned", priority: "high" },
  { name: "Instagram content system (3x/week)", owner: "Brano + Sasha", status: "planned", priority: "high" },
  { name: "Post-workshop email sequence", owner: "Andrea + Tepi", status: "planned", priority: "high" },
  { name: "Internal SWC quarterly training", owner: "Roland + Ján + Roman", status: "planned", priority: "medium" },
  { name: "Alumni community (Slack/Circle)", owner: "Tepi", status: "planned", priority: "medium" },
  { name: "LinkedIn founder content", owner: "Roland + Ján", status: "planned", priority: "medium" },
  { name: "EU subsidy research", owner: "Andrea", status: "planned", priority: "low" },
  { name: "Strategic partnerships (5x)", owner: "Andrea + Roland", status: "planned", priority: "medium" },
  { name: "Referral program", owner: "Tepi", status: "planned", priority: "low" },
]

const keyMetrics = [
  {
    category: "Attention",
    items: [
      { label: "IG followers", goal: "2,000 in 6 months" },
      { label: "IG engagement rate", goal: "3%+" },
      { label: "LinkedIn impressions", goal: "—" },
      { label: "Workshop inquiries/month", goal: "—" },
    ]
  },
  {
    category: "Email",
    items: [
      { label: "Total subscribers", goal: "1,000 in 6 months" },
      { label: "Open rate", goal: "35%+" },
      { label: "Click rate", goal: "5%+" },
      { label: "Newsletter → workshop conversion", goal: "—" },
    ]
  },
  {
    category: "Community",
    items: [
      { label: "Total alumni", goal: "—" },
      { label: "Paid community members", goal: "—" },
      { label: "Monthly active rate", goal: "40%" },
      { label: "Peer contributions", goal: "—" },
    ]
  },
  {
    category: "Revenue",
    items: [
      { label: "Public ticket revenue/month", goal: "—" },
      { label: "Corporate deals/month", goal: "—" },
      { label: "Community MRR", goal: "—" },
      { label: "Average deal size", goal: "—" },
    ]
  }
]

const principles = [
  "Internal first, then external. Test everything on ourselves.",
  "Frictionless for speakers. Content comes from Research Lab's side.",
  "Build the brand, not just the events. Research Lab = the name on the market.",
  "Community > followers. Depth > reach.",
  "Document everything. Every session = 10 pieces of content."
]


const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="space-y-2 border-l-2 border-[#0047BB] pl-6 mb-12">
    <h2 className="text-4xl md:text-5xl font-syne font-bold tracking-tighter text-[#0a0a0a]">{title}</h2>
    <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.3em] text-black/40">{subtitle}</p>
  </div>
)

const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    active: "bg-[#0047BB] text-white",
    planned: "bg-black/10 text-black/60",
    blocked: "bg-red-100 text-red-700",
    done: "bg-green-100 text-green-700"
  }
  return (
    <span className={`px-2 py-1 rounded text-[10px] font-code-brand font-bold uppercase tracking-wider ${styles[status as keyof typeof styles] || styles.planned}`}>
      {status}
    </span>
  )
}

const PriorityBadge = ({ priority }: { priority: string }) => {
  const styles = {
    high: "text-[#0047BB] font-bold",
    medium: "text-black/60",
    low: "text-black/30"
  }
  return (
    <span className={`text-[10px] font-code-brand uppercase tracking-wider ${styles[priority as keyof typeof styles] || styles.medium}`}>
      {priority}
    </span>
  )
}

export default function GrowthPlanPage() {
  return (
    <div className="min-h-screen bg-[#e8e1da] text-[#0a0a0a] font-sans-brand selection:bg-[#0047BB]/20">
      <TopNav />
      
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden border-b border-black/[0.06]">
        <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-black/10 bg-white/40 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#0047BB] animate-pulse" />
              <span className="text-[10px] font-code-brand font-bold uppercase tracking-[0.2em] text-[#0047BB]">
                Research Lab // Living Document // 2026
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-syne font-bold tracking-tighter leading-[0.9]">
              GROWTH<br/>PLAN
            </h1>
            
            <p className="text-xl md:text-2xl font-serif-instrument italic text-black/60 max-w-2xl">
              From first session to market leadership. Updated as we grow.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-[#f4ede6]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="WHERE WE ARE NOW" subtitle="STATUS DASHBOARD" />
          
          <div className="mb-12">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-[#0047BB] text-white rounded-lg shadow-lg shadow-[#0047BB]/20">
              <span className="text-[10px] font-code-brand font-bold uppercase tracking-[0.2em] opacity-80">Current Phase</span>
              <span className="text-lg font-syne font-bold">PHASE 1: PROVE IT</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {currentMetrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 bg-white/50 border border-black/[0.06] rounded-lg hover:border-[#0047BB]/30 transition-colors group"
              >
                <div className="flex justify-between items-start mb-3">
                  <metric.icon className="w-4 h-4 text-black/30 group-hover:text-[#0047BB] transition-colors" />
                </div>
                <div className="text-2xl font-syne font-bold text-[#0a0a0a] mb-1">{metric.value}</div>
                <div className="text-[10px] font-code-brand font-bold uppercase tracking-wider text-black/40 mb-1">{metric.label}</div>
                <div className="text-xs font-serif-instrument italic text-black/50">{metric.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-[#e8e1da] border-t border-black/[0.06]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="THE FOUR PHASES" subtitle="TIMELINE 2026" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-black/10 z-0" />
            
            {phases.map((phase, i) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative z-10 ${phase.status === 'active' ? 'opacity-100' : 'opacity-70 hover:opacity-100 transition-opacity'}`}
              >
                <div className={`w-4 h-4 rounded-full border-2 mb-6 relative z-10 
                  ${phase.status === 'active' 
                    ? 'bg-[#0047BB] border-[#0047BB] ring-4 ring-[#0047BB]/20' 
                    : 'bg-[#e8e1da] border-black/20'}`} 
                />
                
                <div className="space-y-4">
                  <div>
                    <h3 className={`text-xl font-syne font-bold mb-1 ${phase.status === 'active' ? 'text-[#0047BB]' : 'text-[#0a0a0a]'}`}>
                      {phase.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] font-code-brand font-bold uppercase tracking-wider text-black/50">
                      <span>{phase.timeline}</span>
                    </div>
                  </div>
                  
                  <div className="text-xs font-serif-instrument italic text-black/60 border-b border-black/10 pb-2">
                    Owner: {phase.owner}
                  </div>
                  
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm leading-snug text-black/80">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-black/30 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-[#f4ede6] border-t border-black/[0.06]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="INITIATIVES BOARD" subtitle="ACTIVE WORKSTREAMS" />
          
          <div className="bg-white/50 border border-black/[0.06] rounded-lg overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-black/[0.06] bg-black/[0.02] text-[10px] font-code-brand font-bold uppercase tracking-wider text-black/40">
              <div className="col-span-5 md:col-span-6">Initiative</div>
              <div className="col-span-3 md:col-span-3">Owner</div>
              <div className="col-span-2 md:col-span-2 text-center">Status</div>
              <div className="col-span-2 md:col-span-1 text-right">Priority</div>
            </div>
            
            <div className="divide-y divide-black/[0.06]">
              {initiatives.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-white/80 transition-colors"
                >
                  <div className="col-span-5 md:col-span-6 font-medium text-sm md:text-base">{item.name}</div>
                  <div className="col-span-3 md:col-span-3 text-xs md:text-sm text-black/60">{item.owner}</div>
                  <div className="col-span-2 md:col-span-2 text-center">
                    <StatusBadge status={item.status} />
                  </div>
                  <div className="col-span-2 md:col-span-1 text-right">
                    <PriorityBadge priority={item.priority} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-[#e8e1da] border-t border-black/[0.06]">
        <div className="max-w-5xl mx-auto">
          <SectionHeader title="KEY METRICS" subtitle="WHAT WE TRACK" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((category, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-syne font-bold border-b-2 border-[#0047BB]/20 pb-2 text-[#0047BB]">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, j) => (
                    <div key={j} className="group">
                      <div className="text-sm font-medium text-[#0a0a0a] group-hover:text-[#0047BB] transition-colors">
                        {item.label}
                      </div>
                      <div className="text-[10px] font-code-brand font-bold uppercase tracking-wider text-black/40 mt-1">
                        Goal: {item.goal}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-[#f4ede6] border-t border-black/[0.06]">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="w-12 h-1 bg-[#0047BB] mx-auto" />
          <div className="space-y-8">
            {principles.map((principle, i) => (
              <motion.p 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-xl md:text-2xl font-serif-instrument italic text-black/80 leading-relaxed"
              >
                "{principle}"
              </motion.p>
            ))}
          </div>
          <div className="w-12 h-1 bg-[#0047BB] mx-auto" />
        </div>
      </section>

      <footer className="py-12 px-6 md:px-12 bg-[#e8e1da] border-t border-black/[0.06] text-center">
        <p className="text-[10px] font-code-brand font-bold uppercase tracking-[0.4em] opacity-20">
          SORRYWECAN // RESEARCH LAB // GROWTH PLAN // 2026
        </p>
      </footer>
    </div>
  )
}
