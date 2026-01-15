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
                owner: "Tibor",
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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-10 border border-white/20">
                            <h3 className="font-serif-instrument text-3xl italic mb-6">Roland</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0047BB] mt-2 shrink-0" />
                                    <span className="text-sm opacity-70">Track and call all warm leads</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0047BB] mt-2 shrink-0" />
                                    <span className="text-sm opacity-70">Finalize pitch PDF and curriculum</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0047BB] mt-2 shrink-0" />
                                    <span className="text-sm opacity-70">Review and approve website copy</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-10 border border-white/20">
                            <h3 className="font-serif-instrument text-3xl italic mb-6">Tibor</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0047BB] mt-2 shrink-0" />
                                    <span className="text-sm opacity-70">Call all contacts from network</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0047BB] mt-2 shrink-0" />
                                    <span className="text-sm opacity-70">Reach out to agencies</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0047BB] mt-2 shrink-0" />
                                    <span className="text-sm opacity-70">Reach out to production companies</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0047BB] mt-2 shrink-0" />
                                    <span className="text-sm opacity-70">Gather market feedback</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-10 border border-[#0047BB] bg-[#0047BB]/10">
                            <h3 className="font-serif-instrument text-3xl italic mb-6">Team</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                                    <span className="text-sm opacity-70">Define pricing strategy together</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                                    <span className="text-sm opacity-70">Set up scheduling system</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                                    <span className="text-sm opacity-70">Email & CRM setup</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                                    <span className="text-sm opacity-70">Automation workflows (as we go)</span>
                                </div>
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
                        <p className="opacity-80">2. Start outreach mid next week</p>
                        <p className="opacity-80">3. Gather feedback from market</p>
                        <p className="opacity-60">4. If positive feedback → scale production</p>
                        <p className="opacity-60">5. If negative feedback → pivot fast</p>
                    </div>
                    <div className="mt-16 p-8 bg-white/10 border border-white/20 inline-block">
                        <p className="text-sm font-bold uppercase tracking-widest mb-2">Philosophy</p>
                        <p className="font-serif-instrument text-2xl italic">
                            Start manual. Automate as we go.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 border-t border-black/10 text-center bg-[#f5f5f3]">
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-20">
                    SORRYWECAN // GAME PLAN // UPDATED DAILY
                </p>
            </footer>
        </div>
    )
}
