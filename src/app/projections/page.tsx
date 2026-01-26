"use client"

import React, { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { TopNav } from "@/components/navigation/top-nav"

interface FixedCost {
    label: string
    value: number
}

interface VariableCost {
    label: string
    value: number
}

function NumberInput({ 
    value, 
    onChange, 
    prefix = "€",
    min = 0,
    max = 100000,
    step = 50
}: { 
    value: number
    onChange: (v: number) => void
    prefix?: string
    min?: number
    max?: number
    step?: number
}) {
    return (
        <div className="flex items-center gap-1">
            <span className="text-white/40">{prefix}</span>
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(Math.max(min, Math.min(max, Number(e.target.value))))}
                min={min}
                max={max}
                step={step}
                className="bg-transparent border-b border-white/20 focus:border-[#0047BB] outline-none w-20 text-right font-bold transition-colors"
            />
        </div>
    )
}

function SmallNumberInput({ 
    value, 
    onChange, 
    min = 0,
    max = 100,
    step = 1,
    suffix = ""
}: { 
    value: number
    onChange: (v: number) => void
    min?: number
    max?: number
    step?: number
    suffix?: string
}) {
    return (
        <span className="inline-flex items-center">
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(Math.max(min, Math.min(max, Number(e.target.value))))}
                min={min}
                max={max}
                step={step}
                className="bg-white/10 border border-white/20 focus:border-[#0047BB] outline-none w-12 text-center rounded px-1 transition-colors"
            />
            {suffix && <span className="ml-1">{suffix}</span>}
        </span>
    )
}

export default function ProjectionsPage() {
    const [fixedCosts, setFixedCosts] = useState<FixedCost[]>([
        { label: "Blueroom (venue)", value: 2000 },
        { label: "Andrea (PM)", value: 2200 },
        { label: "Saši (Research)", value: 900 },
        { label: "Tepi (Sales/Tech)", value: 1000 },
    ])

    const [lecturerFee, setLecturerFee] = useState(500)
    const [lecturerCount, setLecturerCount] = useState(3)
    const [catering, setCatering] = useState(150)
    const [chairs, setChairs] = useState(100)
    const [production, setProduction] = useState(100)
    const [marketing, setMarketing] = useState(200)

    const [publicPrice, setPublicPrice] = useState(99)
    const [corporatePrice, setCorporatePrice] = useState(6900)

    const [pessPublicSessions, setPessPublicSessions] = useState(1)
    const [pessPublicAttendees, setPessPublicAttendees] = useState(25)
    const [pessCorporate, setPessCorporate] = useState(1)

    const [realPublicSessions, setRealPublicSessions] = useState(2)
    const [realPublicAttendees, setRealPublicAttendees] = useState(30)
    const [realCorporate, setRealCorporate] = useState(2)

    const [optPublicSessions, setOptPublicSessions] = useState(2)
    const [optPublicAttendees, setOptPublicAttendees] = useState(40)
    const [optCorporate, setOptCorporate] = useState(3)

    const [projectionMonths, setProjectionMonths] = useState(10)

    const totalFixed = useMemo(() => 
        fixedCosts.reduce((sum, c) => sum + c.value, 0), 
        [fixedCosts]
    )

    const perWorkshopCost = useMemo(() => 
        (lecturerFee * lecturerCount) + catering + chairs + production + marketing,
        [lecturerFee, lecturerCount, catering, chairs, production, marketing]
    )

    const updateFixedCost = (index: number, value: number) => {
        setFixedCosts(prev => prev.map((c, i) => i === index ? { ...c, value } : c))
    }

    const calcScenario = (publicSessions: number, publicAttendees: number, corporate: number) => {
        const publicRevenue = publicSessions * publicAttendees * publicPrice
        const corporateRevenue = corporate * corporatePrice
        const totalRevenue = publicRevenue + corporateRevenue
        const totalWorkshops = publicSessions + corporate
        const totalCosts = totalFixed + (totalWorkshops * perWorkshopCost)
        const profit = totalRevenue - totalCosts
        return { publicRevenue, corporateRevenue, totalRevenue, totalWorkshops, totalCosts, profit }
    }

    const pessScenario = calcScenario(pessPublicSessions, pessPublicAttendees, pessCorporate)
    const realScenario = calcScenario(realPublicSessions, realPublicAttendees, realCorporate)
    const optScenario = calcScenario(optPublicSessions, optPublicAttendees, optCorporate)

    const corporateCoverFixed = totalFixed > 0 ? Math.round((corporatePrice / totalFixed) * 100) : 0
    const publicSeatsForFixed = publicPrice > 0 ? Math.ceil(totalFixed / publicPrice) : 0

    const yearRevenue = realScenario.totalRevenue * projectionMonths
    const yearCosts = realScenario.totalCosts * projectionMonths
    const yearProfit = yearRevenue - yearCosts

    const formatCurrency = (n: number) => {
        if (Math.abs(n) >= 1000) {
            return `€${Math.round(n / 1000)}k`
        }
        return `€${n.toLocaleString()}`
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-mono selection:bg-[#0047BB]/20">
            <TopNav variant="dark" />

            <section className="min-h-[50vh] flex flex-col justify-center px-6 md:px-20 pt-20 border-b border-white/10">
                <div className="max-w-6xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#0047BB]">
                            INTERNAL • INTERACTIVE
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif-instrument text-[10vw] md:text-[8vw] leading-[0.95] tracking-tighter"
                    >
                        Financial Projections
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/40 mt-6 max-w-xl"
                    >
                        Edit any number to see how it affects the bottom line. All calculations update live.
                    </motion.p>
                </div>
            </section>

            <section className="py-24 px-6 md:px-20">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 p-8 border border-[#0047BB]/30 bg-[#0047BB]/5">
                        <h3 className="font-serif-instrument text-2xl italic mb-6">Pricing</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex justify-between items-center">
                                <span className="text-white/60">Public session ticket</span>
                                <NumberInput value={publicPrice} onChange={setPublicPrice} step={10} />
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-white/60">Corporate workshop</span>
                                <NumberInput value={corporatePrice} onChange={setCorporatePrice} step={100} />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <div className="p-8 border border-white/20">
                            <h3 className="font-serif-instrument text-2xl italic mb-6">Fixed Monthly Costs</h3>
                            <div className="space-y-4">
                                {fixedCosts.map((cost, i) => (
                                    <div key={i} className="flex justify-between items-center pb-3 border-b border-white/10">
                                        <span className="text-white/60">{cost.label}</span>
                                        <NumberInput value={cost.value} onChange={(v) => updateFixedCost(i, v)} />
                                    </div>
                                ))}
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-[#0047BB] font-bold">Total Fixed</span>
                                    <span className="text-2xl font-serif-instrument">€{totalFixed.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 border border-white/20">
                            <h3 className="font-serif-instrument text-2xl italic mb-6">Per-Workshop Costs</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                                    <span className="text-white/60">
                                        Lecturers (<SmallNumberInput value={lecturerCount} onChange={setLecturerCount} max={10} /> × €<input 
                                            type="number" 
                                            value={lecturerFee} 
                                            onChange={(e) => setLecturerFee(Number(e.target.value))}
                                            className="bg-white/10 border border-white/20 focus:border-[#0047BB] outline-none w-16 text-center rounded px-1"
                                        />)
                                    </span>
                                    <span className="font-bold">€{(lecturerFee * lecturerCount).toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                                    <span className="text-white/60">Catering</span>
                                    <NumberInput value={catering} onChange={setCatering} />
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                                    <span className="text-white/60">Chairs rental</span>
                                    <NumberInput value={chairs} onChange={setChairs} />
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                                    <span className="text-white/60">Production reserve</span>
                                    <NumberInput value={production} onChange={setProduction} />
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                                    <span className="text-white/60">Marketing</span>
                                    <NumberInput value={marketing} onChange={setMarketing} />
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-amber-400 font-bold">Total per Workshop</span>
                                    <span className="text-2xl font-serif-instrument">€{perWorkshopCost.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16">
                        <h3 className="font-serif-instrument text-3xl italic mb-8 text-center">Monthly Scenarios</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-8 border border-red-500/30 bg-red-500/5">
                                <div className="text-center mb-6">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-red-400">Pessimistic</span>
                                    <h4 className="font-serif-instrument text-2xl italic mt-2">Minimum Viable</h4>
                                </div>
                                <div className="space-y-3 text-sm mb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/60">
                                            Public: <SmallNumberInput value={pessPublicSessions} onChange={setPessPublicSessions} max={10} /> × <SmallNumberInput value={pessPublicAttendees} onChange={setPessPublicAttendees} max={100} /> @ €{publicPrice}
                                        </span>
                                    </div>
                                    <div className="text-right text-white/80">€{pessScenario.publicRevenue.toLocaleString()}</div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/60">
                                            Corporate: <SmallNumberInput value={pessCorporate} onChange={setPessCorporate} max={10} /> × €{corporatePrice.toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="text-right text-white/80">€{pessScenario.corporateRevenue.toLocaleString()}</div>
                                    <div className="flex justify-between pt-3 border-t border-white/10">
                                        <span className="text-white/60">Revenue</span>
                                        <span className="font-bold">€{pessScenario.totalRevenue.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Costs (fixed + {pessScenario.totalWorkshops} workshops)</span>
                                        <span className="text-red-400">-€{pessScenario.totalCosts.toLocaleString()}</span>
                                    </div>
                                </div>
                                <div className={`text-center p-4 border ${pessScenario.profit >= 0 ? 'bg-green-500/20 border-green-500/30' : 'bg-red-500/20 border-red-500/30'}`}>
                                    <span className={`text-2xl font-serif-instrument ${pessScenario.profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                        {pessScenario.profit >= 0 ? '+' : ''}€{pessScenario.profit.toLocaleString()}
                                    </span>
                                    <p className={`text-[10px] mt-1 ${pessScenario.profit >= 0 ? 'text-green-400/60' : 'text-red-400/60'}`}>
                                        {pessScenario.profit >= 0 ? 'Profitable' : 'Not sustainable'}
                                    </p>
                                </div>
                            </div>

                            <div className="p-8 border border-[#0047BB] bg-[#0047BB]/10">
                                <div className="text-center mb-6">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB]">Realistic</span>
                                    <h4 className="font-serif-instrument text-2xl italic mt-2">Target</h4>
                                </div>
                                <div className="space-y-3 text-sm mb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/60">
                                            Public: <SmallNumberInput value={realPublicSessions} onChange={setRealPublicSessions} max={10} /> × <SmallNumberInput value={realPublicAttendees} onChange={setRealPublicAttendees} max={100} /> @ €{publicPrice}
                                        </span>
                                    </div>
                                    <div className="text-right text-white/80">€{realScenario.publicRevenue.toLocaleString()}</div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/60">
                                            Corporate: <SmallNumberInput value={realCorporate} onChange={setRealCorporate} max={10} /> × €{corporatePrice.toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="text-right text-white/80">€{realScenario.corporateRevenue.toLocaleString()}</div>
                                    <div className="flex justify-between pt-3 border-t border-white/10">
                                        <span className="text-white/60">Revenue</span>
                                        <span className="font-bold">€{realScenario.totalRevenue.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Costs (fixed + {realScenario.totalWorkshops} workshops)</span>
                                        <span className="text-red-400">-€{realScenario.totalCosts.toLocaleString()}</span>
                                    </div>
                                </div>
                                <div className={`text-center p-4 border ${realScenario.profit >= 0 ? 'bg-green-500/20 border-green-500/30' : 'bg-red-500/20 border-red-500/30'}`}>
                                    <span className={`text-2xl font-serif-instrument ${realScenario.profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                        {realScenario.profit >= 0 ? '+' : ''}€{realScenario.profit.toLocaleString()}
                                    </span>
                                    <p className={`text-[10px] mt-1 ${realScenario.profit >= 0 ? 'text-green-400/60' : 'text-red-400/60'}`}>
                                        {realScenario.profit >= 0 ? 'Healthy margin' : 'Not sustainable'}
                                    </p>
                                </div>
                            </div>

                            <div className="p-8 border border-green-500/30 bg-green-500/5">
                                <div className="text-center mb-6">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-green-400">Optimistic</span>
                                    <h4 className="font-serif-instrument text-2xl italic mt-2">Stretch Goal</h4>
                                </div>
                                <div className="space-y-3 text-sm mb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/60">
                                            Public: <SmallNumberInput value={optPublicSessions} onChange={setOptPublicSessions} max={10} /> × <SmallNumberInput value={optPublicAttendees} onChange={setOptPublicAttendees} max={100} /> @ €{publicPrice}
                                        </span>
                                    </div>
                                    <div className="text-right text-white/80">€{optScenario.publicRevenue.toLocaleString()}</div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/60">
                                            Corporate: <SmallNumberInput value={optCorporate} onChange={setOptCorporate} max={10} /> × €{corporatePrice.toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="text-right text-white/80">€{optScenario.corporateRevenue.toLocaleString()}</div>
                                    <div className="flex justify-between pt-3 border-t border-white/10">
                                        <span className="text-white/60">Revenue</span>
                                        <span className="font-bold">€{optScenario.totalRevenue.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/60">Costs (fixed + {optScenario.totalWorkshops} workshops)</span>
                                        <span className="text-red-400">-€{optScenario.totalCosts.toLocaleString()}</span>
                                    </div>
                                </div>
                                <div className={`text-center p-4 border ${optScenario.profit >= 0 ? 'bg-green-500/20 border-green-500/30' : 'bg-red-500/20 border-red-500/30'}`}>
                                    <span className={`text-2xl font-serif-instrument ${optScenario.profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                        {optScenario.profit >= 0 ? '+' : ''}€{optScenario.profit.toLocaleString()}
                                    </span>
                                    <p className={`text-[10px] mt-1 ${optScenario.profit >= 0 ? 'text-green-400/60' : 'text-red-400/60'}`}>
                                        {optScenario.profit >= 0 ? 'Strong growth' : 'Not sustainable'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 border border-white/20 bg-white/5 mb-16">
                        <h3 className="font-serif-instrument text-2xl italic mb-6 text-center">Break-Even Analysis</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <p className="text-4xl font-serif-instrument text-[#0047BB]">1</p>
                                <p className="text-sm text-white/60 mt-2">Corporate deal covers fixed costs</p>
                                <p className="text-xs text-white/40">€{corporatePrice.toLocaleString()} / €{totalFixed.toLocaleString()} = {corporateCoverFixed}%</p>
                            </div>
                            <div>
                                <p className="text-4xl font-serif-instrument text-[#0047BB]">{publicSeatsForFixed}</p>
                                <p className="text-sm text-white/60 mt-2">Public seats to cover fixed</p>
                                <p className="text-xs text-white/40">€{totalFixed.toLocaleString()} / €{publicPrice} = {publicSeatsForFixed} people</p>
                            </div>
                            <div>
                                <p className="text-4xl font-serif-instrument text-[#0047BB]">{realPublicSessions}+{realCorporate}</p>
                                <p className="text-sm text-white/60 mt-2">Monthly target for profit</p>
                                <p className="text-xs text-white/40">{realPublicSessions} public + {realCorporate} corporate</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <h3 className="font-serif-instrument text-3xl italic mb-4">Year 1 Projection</h3>
                        <p className="text-white/40 mb-8">
                            (<SmallNumberInput value={projectionMonths} onChange={setProjectionMonths} max={12} suffix="months" /> @ realistic scenario)
                        </p>
                        <div className="inline-grid grid-cols-3 gap-8">
                            <div>
                                <p className="text-5xl font-serif-instrument text-white">{formatCurrency(yearRevenue)}</p>
                                <p className="text-sm text-white/40 mt-2">Revenue</p>
                            </div>
                            <div>
                                <p className="text-5xl font-serif-instrument text-red-400">{formatCurrency(yearCosts)}</p>
                                <p className="text-sm text-white/40 mt-2">Costs</p>
                            </div>
                            <div>
                                <p className={`text-5xl font-serif-instrument ${yearProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                    {formatCurrency(yearProfit)}
                                </p>
                                <p className="text-sm text-white/40 mt-2">Profit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-12 px-6 border-t border-white/10 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-20">
                    SORRYWECAN // PROJECTIONS // INTERNAL
                </p>
            </footer>
        </div>
    )
}
