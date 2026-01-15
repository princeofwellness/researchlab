"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

type TaskStatus = "pending" | "in_progress" | "completed"

interface Task {
    id: string
    title: string
    description: string
    owner: string
    status: TaskStatus
    priority: "critical" | "high" | "medium"
    subtasks?: string[]
}

interface Category {
    id: string
    title: string
    description: string
    icon: string
    tasks: Task[]
}

const initialCategories: Category[] = [
    {
        id: "product",
        title: "Finalize Product",
        description: "Define and document the complete offer",
        icon: "01",
        tasks: [
            {
                id: "p1",
                title: "Define Pricing Strategy",
                description: "Finalize pricing for all three tiers with clear value propositions",
                owner: "Team",
                status: "pending",
                priority: "critical",
                subtasks: [
                    "Review current pricing (€3,690 / €6,930 / €12,690)",
                    "Validate against market rates",
                    "Define early-bird or package deals"
                ]
            },
            {
                id: "p2",
                title: "Create Curriculum Document",
                description: "Detailed breakdown of what each tier includes",
                owner: "Roland + Team",
                status: "pending",
                priority: "critical",
                subtasks: [
                    "Risk Audit deliverables list",
                    "Taste Sprint workshop agenda",
                    "Cognitive Shift full program outline"
                ]
            },
            {
                id: "p3",
                title: "Build Pitch PDF",
                description: "Professional one-pager for outreach and sales calls",
                owner: "Roland",
                status: "pending",
                priority: "critical",
                subtasks: [
                    "Problem statement section",
                    "Solution overview",
                    "Pricing & packages",
                    "Team credentials",
                    "Case studies / proof points"
                ]
            },
            {
                id: "p4",
                title: "Define The Offer",
                description: "Clear articulation of what clients get",
                owner: "Team",
                status: "pending",
                priority: "high",
                subtasks: [
                    "Tangible deliverables list",
                    "Digital toolkit contents",
                    "Post-workshop support terms"
                ]
            }
        ]
    },
    {
        id: "website",
        title: "Finalize Website",
        description: "Polish copy and optimize for conversions",
        icon: "02",
        tasks: [
            {
                id: "w1",
                title: "Review Homepage Copy",
                description: "Ensure messaging is clear, compelling, and conversion-focused",
                owner: "Roland",
                status: "pending",
                priority: "high",
                subtasks: [
                    "Hero section messaging",
                    "Problem/Solution framing",
                    "CTA language optimization"
                ]
            },
            {
                id: "w2",
                title: "Update Pricing Section",
                description: "Align website pricing with finalized strategy",
                owner: "Dev",
                status: "pending",
                priority: "high",
                subtasks: [
                    "Update tier descriptions",
                    "Add clear feature comparison",
                    "Improve CTA buttons"
                ]
            },
            {
                id: "w3",
                title: "Add Testimonials / Social Proof",
                description: "Include client logos, quotes, or case studies",
                owner: "Team",
                status: "pending",
                priority: "medium",
                subtasks: [
                    "Gather client approval for logos",
                    "Write up case study snippets",
                    "Add to website"
                ]
            }
        ]
    },
    {
        id: "sales",
        title: "Sales Outreach",
        description: "Warm leads and direct outreach",
        icon: "03",
        tasks: [
            {
                id: "s1",
                title: "Warm Leads Outreach",
                description: "Contact all existing warm leads and previous contacts",
                owner: "Roland",
                status: "pending",
                priority: "critical",
                subtasks: [
                    "List all warm leads",
                    "Prepare personalized outreach",
                    "Schedule calls",
                    "Track responses"
                ]
            },
            {
                id: "s2",
                title: "Agency & Production Outreach",
                description: "Reach out to agencies and production companies",
                owner: "Tepi",
                status: "pending",
                priority: "critical",
                subtasks: [
                    "List target agencies",
                    "List production companies",
                    "Prepare pitch approach",
                    "Begin outreach calls",
                    "Gather feedback on product interest"
                ]
            },
            {
                id: "s3",
                title: "Partner Network Activation",
                description: "Leverage existing partnerships for referrals",
                owner: "Team",
                status: "pending",
                priority: "high",
                subtasks: [
                    "Identify potential referral partners",
                    "Create referral materials",
                    "Reach out to partners"
                ]
            }
        ]
    },
    {
        id: "admin",
        title: "Administrative Setup",
        description: "Systems, tools, and automation",
        icon: "04",
        tasks: [
            {
                id: "a1",
                title: "Email System Setup",
                description: "Configure professional email for inquiries",
                owner: "Dev",
                status: "pending",
                priority: "high",
                subtasks: [
                    "Setup hello@sorrywecan.com routing",
                    "Create email templates",
                    "Setup auto-responders"
                ]
            },
            {
                id: "a2",
                title: "Scheduling System",
                description: "Know availability for workshops",
                owner: "Team",
                status: "pending",
                priority: "high",
                subtasks: [
                    "Define monthly workshop capacity",
                    "Block calendar for availability",
                    "Create booking process (manual first)"
                ]
            },
            {
                id: "a3",
                title: "CRM / Lead Tracking",
                description: "Simple system to track leads and follow-ups",
                owner: "Team",
                status: "pending",
                priority: "medium",
                subtasks: [
                    "Choose tool (Notion/Airtable/simple spreadsheet)",
                    "Setup lead tracking columns",
                    "Define follow-up process"
                ]
            },
            {
                id: "a4",
                title: "Automation Workflow",
                description: "Automate repetitive tasks as volume grows",
                owner: "Dev",
                status: "pending",
                priority: "medium",
                subtasks: [
                    "Identify automation opportunities",
                    "Setup email sequences",
                    "Calendar booking integration (future)"
                ]
            }
        ]
    }
]

function TaskCard({ task, onStatusChange }: { task: Task, onStatusChange: (id: string, status: TaskStatus) => void }) {
    const [expanded, setExpanded] = useState(false)

    const statusColors = {
        pending: "bg-black/5 text-black/60",
        in_progress: "bg-amber-100 text-amber-800",
        completed: "bg-green-100 text-green-800"
    }

    const priorityColors = {
        critical: "text-red-600",
        high: "text-amber-600",
        medium: "text-black/40"
    }

    const nextStatus: Record<TaskStatus, TaskStatus> = {
        pending: "in_progress",
        in_progress: "completed",
        completed: "pending"
    }

    return (
        <motion.div
            layout
            className={cn(
                "border transition-all duration-300",
                task.status === "completed" ? "border-green-200 bg-green-50/30" : "border-black/10 bg-white hover:border-black/30"
            )}
        >
            <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <span className={cn("text-[9px] font-bold uppercase tracking-widest", priorityColors[task.priority])}>
                                {task.priority}
                            </span>
                            <span className="text-[9px] font-bold uppercase tracking-widest text-black/30">
                                {task.owner}
                            </span>
                        </div>
                        <h4 className={cn(
                            "text-lg font-bold transition-colors",
                            task.status === "completed" && "line-through text-black/40"
                        )}>
                            {task.title}
                        </h4>
                    </div>
                    <button
                        onClick={() => onStatusChange(task.id, nextStatus[task.status])}
                        className={cn(
                            "px-3 py-1 text-[9px] font-bold uppercase tracking-widest transition-all hover:scale-105",
                            statusColors[task.status]
                        )}
                    >
                        {task.status.replace("_", " ")}
                    </button>
                </div>

                <p className="text-sm text-black/60 mb-4">{task.description}</p>

                {task.subtasks && task.subtasks.length > 0 && (
                    <div>
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] hover:underline"
                        >
                            {expanded ? "Hide" : "Show"} {task.subtasks.length} subtasks
                        </button>

                        {expanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                className="mt-4 space-y-2 pl-4 border-l-2 border-[#0047BB]/20"
                            >
                                {task.subtasks.map((subtask, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <div className="w-1 h-1 rounded-full bg-[#0047BB] mt-2 shrink-0" />
                                        <span className="text-xs text-black/60">{subtask}</span>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    )
}

function CategorySection({ category, onStatusChange }: { category: Category, onStatusChange: (taskId: string, status: TaskStatus) => void }) {
    const completedCount = category.tasks.filter(t => t.status === "completed").length
    const totalCount = category.tasks.length
    const progress = (completedCount / totalCount) * 100

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
        >
            <div className="flex items-start justify-between">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#0047BB]">{category.icon}</span>
                        <div className="flex-1 h-[1px] bg-black/10 w-20" />
                    </div>
                    <h3 className="text-4xl font-serif-instrument italic mb-2">{category.title}</h3>
                    <p className="text-sm text-black/60">{category.description}</p>
                </div>
                <div className="text-right">
                    <div className="text-3xl font-serif-instrument italic text-[#0047BB]">
                        {completedCount}/{totalCount}
                    </div>
                    <div className="w-32 h-1 bg-black/10 mt-2">
                        <div
                            className="h-full bg-[#0047BB] transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.tasks.map(task => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onStatusChange={onStatusChange}
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default function GamePlanPage() {
    const [categories, setCategories] = useState<Category[]>(initialCategories)

    const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
        setCategories(prev =>
            prev.map(category => ({
                ...category,
                tasks: category.tasks.map(task =>
                    task.id === taskId ? { ...task, status: newStatus } : task
                )
            }))
        )
    }

    const totalTasks = categories.reduce((acc, cat) => acc + cat.tasks.length, 0)
    const completedTasks = categories.reduce((acc, cat) => acc + cat.tasks.filter(t => t.status === "completed").length, 0)
    const criticalTasks = categories.reduce((acc, cat) => acc + cat.tasks.filter(t => t.priority === "critical" && t.status !== "completed").length, 0)

    return (
        <div className="min-h-screen bg-[#f5f5f3] text-[#0a0a0a] font-mono selection:bg-[#0047BB]/20">
            <TopNav />

            {/* Hero */}
            <section className="min-h-[60vh] flex flex-col justify-center px-6 md:px-20 pt-20 border-b border-black relative">
                <div className="max-w-7xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#0047BB]">
                            STRATEGIC EXECUTION
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif-instrument text-[10vw] md:text-[8vw] leading-[0.95] tracking-tighter mb-12"
                    >
                        The Game Plan.
                    </motion.h1>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-black/10 pt-12">
                        <div className="p-6 bg-white border border-black/10">
                            <div className="text-4xl font-serif-instrument italic text-[#0047BB] mb-2">
                                Jan 21
                            </div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-black/40">
                                Target Launch
                            </div>
                        </div>
                        <div className="p-6 bg-white border border-black/10">
                            <div className="text-4xl font-serif-instrument italic mb-2">
                                {completedTasks}/{totalTasks}
                            </div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-black/40">
                                Tasks Complete
                            </div>
                        </div>
                        <div className="p-6 bg-white border border-black/10">
                            <div className="text-4xl font-serif-instrument italic text-red-600 mb-2">
                                {criticalTasks}
                            </div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-black/40">
                                Critical Pending
                            </div>
                        </div>
                        <div className="p-6 bg-black text-white">
                            <div className="text-4xl font-serif-instrument italic text-[#0047BB] mb-2">
                                {Math.round((completedTasks / totalTasks) * 100)}%
                            </div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                                Progress
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-16 px-6 md:px-20 border-b border-black/10 bg-[#0047BB]/5">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xl md:text-2xl font-serif-instrument italic leading-relaxed">
                        Finalize. Reach out. Get feedback. <br />
                        <span className="text-[#0047BB]">If positive — scale production. If not — pivot fast.</span>
                    </p>
                    <p className="text-sm text-black/60 mt-6">
                        Keep it simple: Fix the product, fix the website, start sales, automate as we go.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="py-24 px-6 md:px-20">
                <div className="max-w-7xl mx-auto space-y-24">
                    {categories.map(category => (
                        <CategorySection
                            key={category.id}
                            category={category}
                            onStatusChange={handleStatusChange}
                        />
                    ))}
                </div>
            </section>

            {/* Sales Flow */}
            <section className="py-24 px-6 md:px-20 bg-white border-t border-black/10">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-16">
                        <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#0047BB] block mb-4">THE FLOW</span>
                        <h2 className="font-serif-instrument text-5xl md:text-6xl tracking-tighter leading-none">
                            Sales Process
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                        {/* Step 1 */}
                        <div className="bg-black text-white p-8 relative">
                            <div className="absolute top-4 right-4 text-[#0047BB] text-xs font-bold">01</div>
                            <h3 className="font-serif-instrument text-2xl italic mb-2">Roland</h3>
                            <p className="text-xs uppercase tracking-widest text-white/40 mb-6">OPENER</p>
                            <p className="text-sm text-white/70 leading-relaxed">
                                Best connections in the market. Opens the call, qualifies interest, gets market feedback.
                            </p>
                            <div className="mt-6 pt-6 border-t border-white/10 space-y-2">
                                <p className="text-xs text-white/50">"Are you interested in AI workshops?"</p>
                                <p className="text-xs text-white/50">Yes → hand to Tepi</p>
                                <p className="text-xs text-white/50">No → "What's holding you back?"</p>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="hidden md:flex items-center justify-center">
                            <div className="text-4xl text-black/20">→</div>
                        </div>
                        <div className="md:hidden flex items-center justify-center py-4">
                            <div className="text-2xl text-black/20">↓</div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-[#0047BB] text-white p-8 relative">
                            <div className="absolute top-4 right-4 text-white/40 text-xs font-bold">02</div>
                            <h3 className="font-serif-instrument text-2xl italic mb-2">Tepi</h3>
                            <p className="text-xs uppercase tracking-widest text-white/40 mb-6">CLOSER</p>
                            <p className="text-sm text-white/80 leading-relaxed">
                                Discovery call, explains tiers, handles objections, closes the deal.
                            </p>
                            <div className="mt-6 pt-6 border-t border-white/20 space-y-2">
                                <p className="text-xs text-white/60">Brief discovery (team size, AI usage)</p>
                                <p className="text-xs text-white/60">Recommend mid-tier (€6,930)</p>
                                <p className="text-xs text-white/60">Close: "When do you want to do this?"</p>
                                <p className="text-xs text-white/60">Send invoice</p>
                            </div>
                        </div>
                    </div>

                    {/* Pre-Workshop + Workshop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 border border-green-200 p-6">
                            <p className="text-xs uppercase tracking-widest text-green-600 mb-3">AFTER CLOSE — 3 QUESTIONS</p>
                            <h3 className="font-serif-instrument text-xl italic mb-4">Pre-Workshop Form</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-start gap-3">
                                    <span className="text-green-600 font-bold">1.</span>
                                    <span className="text-black/70">How many people attending?</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-green-600 font-bold">2.</span>
                                    <span className="text-black/70">What are their roles? (designers, marketers, C-level, mixed)</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-green-600 font-bold">3.</span>
                                    <span className="text-black/70">What AI tools does your team currently use?</span>
                                </div>
                            </div>
                            <p className="text-[10px] text-black/40 mt-4">Takes 2 min. Zero prep for you. Just know who's in the room.</p>
                        </div>

                        <div className="bg-black/5 border border-black/10 p-6 flex flex-col justify-center">
                            <p className="text-xs uppercase tracking-widest text-black/40 mb-3">03 — DELIVERY</p>
                            <h3 className="font-serif-instrument text-xl italic mb-2">Standard Workshop</h3>
                            <p className="text-sm text-black/60">
                                Same curriculum every time. Your method IS the product. No customization = no overhead.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Responsibilities */}
            <section className="py-24 px-6 md:px-20 bg-black text-white border-t border-black">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#0047BB] block mb-8">
                            OWNERSHIP
                        </span>
                        <h2 className="font-serif-instrument text-6xl md:text-7xl tracking-tighter leading-none">
                            Who Does What.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-8 border border-white/20">
                            <p className="text-[10px] uppercase tracking-widest text-[#0047BB] mb-2">OPENER</p>
                            <h3 className="font-serif-instrument text-2xl italic mb-4">Roland</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-[#0047BB] mt-2 shrink-0" />
                                    <span className="text-xs opacity-70">Call warm leads (best connections)</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-[#0047BB] mt-2 shrink-0" />
                                    <span className="text-xs opacity-70">Qualify interest (yes/no)</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-[#0047BB] mt-2 shrink-0" />
                                    <span className="text-xs opacity-70">Gather market feedback</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-[#0047BB] mt-2 shrink-0" />
                                    <span className="text-xs opacity-70">Hand interested → Tepi</span>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/10">
                                <p className="text-[9px] uppercase tracking-widest opacity-40 mb-2">Also</p>
                                <p className="text-[10px] opacity-50">Pitch PDF, website copy</p>
                            </div>
                        </div>

                        <div className="p-8 border border-[#0047BB] bg-[#0047BB]/10">
                            <p className="text-[10px] uppercase tracking-widest text-[#0047BB] mb-2">CLOSER</p>
                            <h3 className="font-serif-instrument text-2xl italic mb-4">Tepi</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-white mt-2 shrink-0" />
                                    <span className="text-xs opacity-70">Run discovery calls</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-white mt-2 shrink-0" />
                                    <span className="text-xs opacity-70">Explain tiers, recommend mid</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-white mt-2 shrink-0" />
                                    <span className="text-xs opacity-70">Handle objections</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-white mt-2 shrink-0" />
                                    <span className="text-xs opacity-70">Close deals, send invoices</span>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/10">
                                <p className="text-[9px] uppercase tracking-widest opacity-40 mb-2">Also</p>
                                <p className="text-[10px] opacity-50">Agencies, production cos</p>
                            </div>
                        </div>

                        <div className="p-8 border border-white/20">
                            <p className="text-[10px] uppercase tracking-widest text-amber-400 mb-2">CFO</p>
                            <h3 className="font-serif-instrument text-2xl italic mb-4">Tibor</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-amber-400 mt-2 shrink-0" />
                                    <span className="text-xs opacity-70">Finance & invoicing</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-amber-400 mt-2 shrink-0" />
                                    <span className="text-xs opacity-70">Call warm leads (his network)</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-amber-400 mt-2 shrink-0" />
                                    <span className="text-xs opacity-70">Budget & cash flow</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-amber-400 mt-2 shrink-0" />
                                    <span className="text-xs opacity-70">Contracts & legal</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 border border-green-500/30 bg-green-500/5">
                            <p className="text-[10px] uppercase tracking-widest text-green-400 mb-2">LEADER + COMMS</p>
                            <h3 className="font-serif-instrument text-2xl italic mb-4">Andrea</h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-green-400 mt-2 shrink-0" />
                                    <span className="text-xs opacity-70">Project management</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-green-400 mt-2 shrink-0" />
                                    <span className="text-xs opacity-70">Internal team coordination</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-green-400 mt-2 shrink-0" />
                                    <span className="text-xs opacity-70">External communication</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 rounded-full bg-green-400 mt-2 shrink-0" />
                                    <span className="text-xs opacity-70">Support & follow-ups</span>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/10">
                                <p className="text-[9px] uppercase tracking-widest opacity-40 mb-2">Keeps it moving</p>
                                <p className="text-[10px] opacity-50">Scheduling, emails, CRM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marketing & Ads Strategy */}
            <section className="py-24 px-6 md:px-20 bg-[#f5f5f3] border-t border-black/10">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-amber-600">PHASE 2</span>
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-red-500 bg-red-50 px-3 py-1 border border-red-200">NO OWNER YET</span>
                        </div>
                        <h2 className="font-serif-instrument text-5xl md:text-6xl tracking-tighter leading-none">
                            Marketing Video + Ads
                        </h2>
                        <p className="text-sm text-black/40 mt-4">€300-400 test budget to find target audience</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Video Concept */}
                        <div className="bg-white border border-black/10 p-8 space-y-6">
                            <h3 className="font-serif-instrument text-2xl italic">Video Concept</h3>
                            <p className="text-xs text-black/40 uppercase tracking-widest">30-60 seconds, hook-first</p>

                            <div className="space-y-4 text-sm text-black/70">
                                <div className="p-4 bg-black/5 border-l-2 border-[#0047BB]">
                                    <p className="font-medium text-black mb-2">Hook (0-5 sec)</p>
                                    <p className="italic">"Your AI output looks like everyone else's. Here's why."</p>
                                </div>
                                <div className="p-4 bg-black/5 border-l-2 border-black/20">
                                    <p className="font-medium text-black mb-2">Problem (5-20 sec)</p>
                                    <p>Show side-by-side: generic AI slop vs curated quality. The Sea of Sameness is real.</p>
                                </div>
                                <div className="p-4 bg-black/5 border-l-2 border-black/20">
                                    <p className="font-medium text-black mb-2">Solution (20-40 sec)</p>
                                    <p>We teach your team to stop prompting and start curating. One workshop changes how they see.</p>
                                </div>
                                <div className="p-4 bg-black/5 border-l-2 border-amber-500">
                                    <p className="font-medium text-black mb-2">CTA (40-60 sec)</p>
                                    <p>"Book a discovery call. Limited spots monthly."</p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-black/10">
                                <p className="text-[10px] uppercase tracking-widest text-black/40 mb-3">Video Formats</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-black/5 text-[10px]">9:16 (Stories/Reels)</span>
                                    <span className="px-2 py-1 bg-black/5 text-[10px]">1:1 (Feed)</span>
                                    <span className="px-2 py-1 bg-black/5 text-[10px]">16:9 (LinkedIn)</span>
                                </div>
                            </div>
                        </div>

                        {/* Target Audience */}
                        <div className="bg-white border border-black/10 p-8 space-y-6">
                            <h3 className="font-serif-instrument text-2xl italic">Target Audience</h3>
                            <p className="text-xs text-black/40 uppercase tracking-widest">Who we're talking to</p>

                            <div className="space-y-4 text-sm text-black/70">
                                <div>
                                    <p className="font-medium text-black mb-3">Primary: Decision Makers</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <span className="px-3 py-2 bg-[#0047BB]/10 text-[11px] text-center">Creative Directors</span>
                                        <span className="px-3 py-2 bg-[#0047BB]/10 text-[11px] text-center">Marketing Directors</span>
                                        <span className="px-3 py-2 bg-[#0047BB]/10 text-[11px] text-center">CMOs / CEOs</span>
                                        <span className="px-3 py-2 bg-[#0047BB]/10 text-[11px] text-center">Agency Founders</span>
                                    </div>
                                </div>

                                <div>
                                    <p className="font-medium text-black mb-3">Industries</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        <span className="px-3 py-2 bg-black/5 text-[11px] text-center">Advertising / Marketing</span>
                                        <span className="px-3 py-2 bg-black/5 text-[11px] text-center">Creative Agencies</span>
                                        <span className="px-3 py-2 bg-black/5 text-[11px] text-center">Production Companies</span>
                                        <span className="px-3 py-2 bg-black/5 text-[11px] text-center">Brand Teams (In-house)</span>
                                    </div>
                                </div>

                                <div>
                                    <p className="font-medium text-black mb-3">Company Size</p>
                                    <p className="text-black/60">10-500 employees (sweet spot: 20-100)</p>
                                    <p className="text-black/40 text-xs mt-1">Big enough to have budget, small enough to decide fast</p>
                                </div>

                                <div>
                                    <p className="font-medium text-black mb-3">Geography</p>
                                    <div className="space-y-1">
                                        <p className="text-black/60">Tier 1: Slovakia, Czech Republic</p>
                                        <p className="text-black/40 text-xs">Tier 2: Austria, Germany (DACH)</p>
                                        <p className="text-black/40 text-xs">Tier 3: Poland, Hungary (CEE)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Platform Strategy */}
                        <div className="bg-white border border-black/10 p-8 space-y-6">
                            <h3 className="font-serif-instrument text-2xl italic">Platform Strategy</h3>
                            <p className="text-xs text-black/40 uppercase tracking-widest">Where to spend €300-400</p>

                            <div className="space-y-4 text-sm">
                                <div className="p-4 border border-[#0047BB]/30 bg-[#0047BB]/5">
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="font-bold text-[#0047BB]">LinkedIn Ads</p>
                                        <span className="text-xs bg-[#0047BB] text-white px-2 py-0.5">RECOMMENDED</span>
                                    </div>
                                    <p className="text-black/60 mb-3">Best B2B targeting. Target by job title, industry, company size.</p>
                                    <div className="text-xs text-black/50">
                                        <p>• Budget: €200-250</p>
                                        <p>• CPM higher but leads more qualified</p>
                                        <p>• Direct targeting of Creative Directors, CMOs</p>
                                    </div>
                                </div>

                                <div className="p-4 border border-black/10">
                                    <p className="font-bold text-black mb-2">Meta (Instagram/Facebook)</p>
                                    <p className="text-black/60 mb-3">Broader reach, lower CPM. Interest-based targeting.</p>
                                    <div className="text-xs text-black/50">
                                        <p>• Budget: €100-150</p>
                                        <p>• Target: Business interests, marketing, AI tools</p>
                                        <p>• Good for retargeting website visitors</p>
                                    </div>
                                </div>

                                <div className="p-4 border border-black/10 opacity-60">
                                    <p className="font-bold text-black mb-2">YouTube (Later)</p>
                                    <p className="text-black/60 text-xs">Skip for now. Better for Phase 2 with bigger budget.</p>
                                </div>
                            </div>
                        </div>

                        {/* Success Metrics */}
                        <div className="bg-white border border-black/10 p-8 space-y-6">
                            <h3 className="font-serif-instrument text-2xl italic">Success Metrics</h3>
                            <p className="text-xs text-black/40 uppercase tracking-widest">How we measure the test</p>

                            <div className="space-y-4 text-sm text-black/70">
                                <div>
                                    <p className="font-medium text-black mb-3">Primary Goal</p>
                                    <p className="text-2xl font-serif-instrument italic text-[#0047BB]">Discovery Call Bookings</p>
                                    <p className="text-black/40 text-xs mt-1">Not impressions. Not clicks. Actual calls booked.</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="p-4 bg-black/5 text-center">
                                        <p className="text-2xl font-serif-instrument italic">2-3</p>
                                        <p className="text-[10px] uppercase tracking-widest text-black/40">Calls from €400</p>
                                    </div>
                                    <div className="p-4 bg-black/5 text-center">
                                        <p className="text-2xl font-serif-instrument italic">€130-200</p>
                                        <p className="text-[10px] uppercase tracking-widest text-black/40">Cost per Lead</p>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-black/10">
                                    <p className="font-medium text-black mb-2">ROI Check</p>
                                    <p className="text-black/60 text-xs">1 closed deal (€6,930) from €400 ad spend = 17x ROI</p>
                                    <p className="text-black/60 text-xs">Even 1 deal from €1,000 spend = 7x ROI</p>
                                    <p className="text-black/40 text-xs mt-2 italic">If test works → scale. If not → learn why.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Action Plan */}
                    <div className="mt-12 p-8 bg-red-50 border border-red-200">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="font-serif-instrument text-xl italic">Marketing Checklist</h4>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-red-500">Owner: TBD</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div className="space-y-2">
                                <p className="font-medium">Week 1:</p>
                                <p className="text-black/60">□ Script the video (30-60 sec)</p>
                                <p className="text-black/60">□ Shoot/edit the video</p>
                                <p className="text-black/60">□ Create 3 versions (different hooks)</p>
                            </div>
                            <div className="space-y-2">
                                <p className="font-medium">Week 2:</p>
                                <p className="text-black/60">□ Set up LinkedIn campaign</p>
                                <p className="text-black/60">□ Set up Meta campaign</p>
                                <p className="text-black/60">□ Run for 7 days, measure results</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Steps */}
            <section className="py-24 px-6 md:px-20 bg-[#0047BB] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-serif-instrument text-5xl md:text-6xl italic mb-8">
                        The Simple Plan
                    </h2>
                    <div className="space-y-6 text-xl">
                        <p className="opacity-80">1. Finalize product & website by Jan 21</p>
                        <p className="opacity-80">2. Roland + Tibor: Call warm leads</p>
                        <p className="opacity-80">3. Tepi: Close interested leads</p>
                        <p className="opacity-60">4. (TBD): Launch video ads (€300-400 test)</p>
                        <p className="opacity-60">5. If ROI positive → scale ads</p>
                    </div>
                    <div className="mt-16 p-8 bg-white/10 border border-white/20 inline-block">
                        <p className="text-sm font-bold uppercase tracking-widest mb-2">Philosophy</p>
                        <p className="font-serif-instrument text-2xl italic">
                            Start manual. Automate as we go.
                        </p>
                    </div>
                </div>
            </section>

            {/* Things to Consider - Expanded */}
            <section className="py-24 px-6 md:px-20 border-t border-black/10 bg-[#f5f5f3]">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#0047BB] block mb-4">05</span>
                        <h2 className="font-serif-instrument text-5xl md:text-6xl tracking-tighter leading-none">Things to Think About</h2>
                        <p className="text-sm text-black/40 mt-4">Future considerations as you scale</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Discovery Call Script */}
                        <div className="bg-white border border-black/10 p-8 space-y-6">
                            <h3 className="font-serif-instrument text-2xl italic">Discovery Call Script</h3>
                            <p className="text-xs text-black/40 uppercase tracking-widest">Key questions to ask</p>
                            <div className="space-y-3 text-sm text-black/70">
                                <p className="font-medium text-black">Understand their situation:</p>
                                <div className="pl-4 space-y-2">
                                    <p>• "What AI tools is your team currently using?"</p>
                                    <p>• "How would you describe your team's AI adoption level?"</p>
                                    <p>• "What's your biggest frustration with AI output right now?"</p>
                                </div>
                                <p className="font-medium text-black pt-4">Diagnose the pain:</p>
                                <div className="pl-4 space-y-2">
                                    <p>• "Do you feel your work is starting to look like everyone else's?"</p>
                                    <p>• "Is your team prompting or curating?"</p>
                                    <p>• "Where do you lose the most time in your creative process?"</p>
                                </div>
                                <p className="font-medium text-black pt-4">Qualify & close:</p>
                                <div className="pl-4 space-y-2">
                                    <p>• "How many people would attend the workshop?"</p>
                                    <p>• "What's your timeline for making a decision?"</p>
                                    <p>• "Who else needs to be involved in this decision?"</p>
                                </div>
                            </div>
                        </div>

                        {/* Contract / Terms */}
                        <div className="bg-white border border-black/10 p-8 space-y-6">
                            <h3 className="font-serif-instrument text-2xl italic">Simple Contract / Terms</h3>
                            <p className="text-xs text-black/40 uppercase tracking-widest">What to include</p>
                            <div className="space-y-3 text-sm text-black/70">
                                <p className="font-medium text-black">Scope of work:</p>
                                <div className="pl-4 space-y-2">
                                    <p>• Workshop duration and format (in-person/remote)</p>
                                    <p>• Number of participants included</p>
                                    <p>• Deliverables (toolkit, materials, recordings?)</p>
                                </div>
                                <p className="font-medium text-black pt-4">Payment terms:</p>
                                <div className="pl-4 space-y-2">
                                    <p>• 50% deposit to confirm booking</p>
                                    <p>• 50% due before workshop date</p>
                                    <p>• Payment methods accepted</p>
                                </div>
                                <p className="font-medium text-black pt-4">Cancellation policy:</p>
                                <div className="pl-4 space-y-2">
                                    <p>• 14+ days notice: full refund</p>
                                    <p>• 7-14 days: 50% refund or reschedule</p>
                                    <p>• Less than 7 days: reschedule only</p>
                                </div>
                                <p className="font-medium text-black pt-4">Confidentiality:</p>
                                <div className="pl-4 space-y-2">
                                    <p>• NDA for sensitive client information</p>
                                    <p>• Permission to use logo/testimonial</p>
                                </div>
                            </div>
                        </div>

                        {/* Payment Process */}
                        <div className="bg-white border border-black/10 p-8 space-y-6">
                            <h3 className="font-serif-instrument text-2xl italic">Payment Process</h3>
                            <p className="text-xs text-black/40 uppercase tracking-widest">How money flows</p>
                            <div className="space-y-3 text-sm text-black/70">
                                <p className="font-medium text-black">Simple flow:</p>
                                <div className="pl-4 space-y-2">
                                    <p>1. Send proposal/quote after discovery call</p>
                                    <p>2. Client confirms → send invoice for 50% deposit</p>
                                    <p>3. Deposit received → date is locked</p>
                                    <p>4. Send final invoice 7 days before workshop</p>
                                    <p>5. Workshop happens after full payment</p>
                                </div>
                                <p className="font-medium text-black pt-4">Payment methods:</p>
                                <div className="pl-4 space-y-2">
                                    <p>• Bank transfer (primary)</p>
                                    <p>• Stripe/card payment (optional, adds fees)</p>
                                </div>
                                <p className="font-medium text-black pt-4">Invoice details:</p>
                                <div className="pl-4 space-y-2">
                                    <p>• Company name, VAT number</p>
                                    <p>• Clear description of service</p>
                                    <p>• Payment deadline (7-14 days)</p>
                                </div>
                            </div>
                        </div>

                        {/* Pre-Workshop Questionnaire */}
                        <div className="bg-green-50 border border-green-200 p-8 space-y-6">
                            <div className="flex items-center gap-3">
                                <h3 className="font-serif-instrument text-2xl italic">Pre-Workshop Form</h3>
                                <span className="text-[9px] font-bold uppercase tracking-widest text-green-600 bg-green-100 px-2 py-1">DECIDED</span>
                            </div>
                            <p className="text-xs text-green-700 uppercase tracking-widest">3 questions only — send after close</p>
                            <div className="space-y-4 text-sm text-black/70">
                                <div className="flex items-start gap-3 p-3 bg-white border border-green-100">
                                    <span className="text-green-600 font-bold">1.</span>
                                    <span>How many people attending?</span>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-white border border-green-100">
                                    <span className="text-green-600 font-bold">2.</span>
                                    <span>What are their roles? (designers, marketers, C-level, mixed)</span>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-white border border-green-100">
                                    <span className="text-green-600 font-bold">3.</span>
                                    <span>What AI tools does your team currently use?</span>
                                </div>
                            </div>
                            <p className="text-xs text-black/50 italic">Takes 2 min for client. Zero prep for you. Just know who's in the room.</p>
                        </div>

                        {/* Calendar Capacity */}
                        <div className="bg-white border border-black/10 p-8 space-y-6">
                            <h3 className="font-serif-instrument text-2xl italic">Calendar Capacity</h3>
                            <p className="text-xs text-black/40 uppercase tracking-widest">Define your limits</p>
                            <div className="space-y-3 text-sm text-black/70">
                                <p className="font-medium text-black">Questions to answer:</p>
                                <div className="pl-4 space-y-2">
                                    <p>• How many workshops per month max? (2? 4? 6?)</p>
                                    <p>• Which days of the week work best?</p>
                                    <p>• How much prep time needed per workshop?</p>
                                    <p>• Buffer days between workshops?</p>
                                </div>
                                <p className="font-medium text-black pt-4">Consider:</p>
                                <div className="pl-4 space-y-2">
                                    <p>• Travel time if not local</p>
                                    <p>• Energy/quality — don't overbook</p>
                                    <p>• Other commitments (SORRYWECAN projects)</p>
                                </div>
                                <p className="font-medium text-black pt-4">Suggested start:</p>
                                <div className="pl-4 space-y-2">
                                    <p>• 2-3 workshops per month maximum</p>
                                    <p>• Tuesdays, Wednesdays, Thursdays</p>
                                    <p>• Minimum 3 days prep time</p>
                                    <p>• Block Mondays and Fridays</p>
                                </div>
                            </div>
                        </div>

                        {/* Post-Workshop Feedback */}
                        <div className="bg-white border border-black/10 p-8 space-y-6">
                            <h3 className="font-serif-instrument text-2xl italic">Post-Workshop Feedback</h3>
                            <p className="text-xs text-black/40 uppercase tracking-widest">Collect within 48 hours</p>
                            <div className="space-y-3 text-sm text-black/70">
                                <p className="font-medium text-black">Quick survey (5 questions max):</p>
                                <div className="pl-4 space-y-2">
                                    <p>• "How would you rate the workshop? (1-10)"</p>
                                    <p>• "What was the most valuable insight?"</p>
                                    <p>• "What would you improve?"</p>
                                    <p>• "Would you recommend this to others?"</p>
                                    <p>• "Can we use your feedback as a testimonial?"</p>
                                </div>
                                <p className="font-medium text-black pt-4">Testimonial request:</p>
                                <div className="pl-4 space-y-2">
                                    <p>• Ask for 2-3 sentence quote</p>
                                    <p>• Permission to use name + company</p>
                                    <p>• LinkedIn recommendation request</p>
                                </div>
                                <p className="font-medium text-black pt-4">Follow-up sequence:</p>
                                <div className="pl-4 space-y-2">
                                    <p>• Day 1: Thank you email + survey link</p>
                                    <p>• Day 7: "How's the toolkit working?" check-in</p>
                                    <p>• Day 30: Results check + upsell opportunity</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-xs text-black/30 mt-12 italic text-center">
                        Target tier: Mid (€6,930 Taste Sprint) • Lead = anyone interested who wants to know more
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-black/10 text-center bg-[#f5f5f3]">
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-20">
                    SORRYWECAN // GAME PLAN // UPDATED DAILY
                </p>
            </footer>
        </div>
    )
}
