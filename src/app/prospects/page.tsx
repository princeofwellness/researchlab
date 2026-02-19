"use client"

import { useState } from "react"
import { TopNav } from "@/components/navigation/top-nav"
import { cn } from "@/lib/utils"

const COMPANIES = [
  { company: "Slovak Telekom", sector: "Telecom & Media", size: "3000+", fit: "Largest telco. €645M revenue. Digital transformation leader.", website: "telekom.sk", contact: "Head of Innovation / HR Director", tier: 1 },
  { company: "Orange Slovakia", sector: "Telecom & Media", size: "2000+", fit: "€576M revenue. Vaculik does their creative. Innovation lab.", website: "orange.sk", contact: "Head of Innovation / HR Director", tier: 1 },
  { company: "O2 Slovakia", sector: "Telecom & Media", size: "1000+", fit: "€363M revenue. ALREADY INTERESTED — want to send people.", website: "o2.sk", contact: "HR Director / Head of Digital", tier: 1 },
  { company: "Petit Press (SME)", sector: "Telecom & Media", size: "500+", fit: "Publisher of SME daily. 2M+ users monthly. Digital-first.", website: "petitpress.sk", contact: "CEO / Digital Director", tier: 1 },
  { company: "Ringier Slovakia", sector: "Telecom & Media", size: "200+", fit: "Aktuality.sk — biggest digital media house.", website: "ringier.sk", contact: "CEO / Editor-in-Chief", tier: 1 },
  { company: "TV Markíza (CME)", sector: "Telecom & Media", size: "500+", fit: "Largest private TV. Part of CME group.", website: "markiza.sk", contact: "Director / Head of Digital", tier: 1 },
  { company: "STVR (ex-RTVS)", sector: "Telecom & Media", size: "1500+", fit: "National public broadcaster. Digital transformation.", website: "stvr.sk", contact: "Director of Digital / HR", tier: 2 },
  { company: "TV JOJ Group", sector: "Telecom & Media", size: "300+", fit: "Second largest private TV. JOJ, Plus, WAU.", website: "joj.sk", contact: "Director / Head of Content", tier: 2 },
  { company: "Denník N", sector: "Telecom & Media", size: "100+", fit: "Independent digital-first news. Tech-forward.", website: "dennikn.sk", contact: "CEO / CTO", tier: 2 },
  { company: "Forbes Slovakia", sector: "Telecom & Media", size: "30+", fit: "Business media. AI/tech coverage. Visibility play.", website: "forbes.sk", contact: "Editor-in-Chief", tier: 2 },
  { company: "Startitup", sector: "Telecom & Media", size: "20+", fit: "Startup/business media. Large audience.", website: "startitup.sk", contact: "CEO / Editor", tier: 2 },
  { company: "Rádio Expres", sector: "Telecom & Media", size: "100+", fit: "Biggest private radio. Bauer Media.", website: "expres.sk", contact: "Program Director", tier: 3 },
  { company: "Zoznam.sk", sector: "Telecom & Media", size: "50+", fit: "Major web portal. Digital media.", website: "zoznam.sk", contact: "CEO / CTO", tier: 3 },
  { company: "Trend", sector: "Telecom & Media", size: "50+", fit: "Business weekly. Innovation coverage.", website: "trend.sk", contact: "Editor-in-Chief", tier: 3 },
  { company: "Made by Vaculik", sector: "Marketing & Agencies", size: "30+", fit: "Full-service agency. Won Orange creative budget 2023.", website: "vaculik.com", contact: "CEO / Creative Director", tier: 1 },
  { company: "JANDL", sector: "Marketing & Agencies", size: "50+", fit: "#1 TAAS ranking. Largest ad agency in Slovakia.", website: "jandl.sk", contact: "CEO / Managing Director", tier: 1 },
  { company: "PS:Digital", sector: "Marketing & Agencies", size: "30+", fit: "Most recognized digital agency (2024 survey).", website: "psdigital.sk", contact: "CEO / Head of Strategy", tier: 1 },
  { company: "Zaraguza", sector: "Marketing & Agencies", size: "50+", fit: "Full-service ad agency. Major national clients.", website: "zaraguza.com", contact: "CEO / Creative Director", tier: 1 },
  { company: "Basta digital", sector: "Marketing & Agencies", size: "30+", fit: "Digital Agency of the Year 2023.", website: "bastadigital.com", contact: "CEO / Head of Strategy", tier: 1 },
  { company: "TRIAD Advertising", sector: "Marketing & Agencies", size: "50+", fit: "Major ad agency. Branding + innovation.", website: "triad.sk", contact: "Managing Director / CD", tier: 1 },
  { company: "Visibility", sector: "Marketing & Agencies", size: "30+", fit: "Top-3 most recognized agency. SEO + strategy.", website: "visibility.sk", contact: "CEO / Strategy Director", tier: 1 },
  { company: "Dexfinity", sector: "Marketing & Agencies", size: "40+", fit: "€3.4M revenue. Performance marketing.", website: "dexfinity.com", contact: "CEO / Managing Director", tier: 1 },
  { company: "Kremsa Digital", sector: "Marketing & Agencies", size: "30+", fit: "Brand experiences in digital. Creative + tech.", website: "kremsa.com", contact: "CEO / Creative Director", tier: 1 },
  { company: "Civitta Slovakia", sector: "Marketing & Agencies", size: "50+", fit: "Digital + consultancy. Innovation services.", website: "civitta.com", contact: "Country Manager", tier: 1 },
  { company: "Leiter Advertising", sector: "Marketing & Agencies", size: "30+", fit: "Full-service agency. Creative campaigns.", website: "leiter.sk", contact: "Managing Director", tier: 2 },
  { company: "Madviso", sector: "Marketing & Agencies", size: "20+", fit: "PPC + digital advertising. Data-driven.", website: "madviso.sk", contact: "CEO", tier: 2 },
  { company: "iFocus", sector: "Marketing & Agencies", size: "30+", fit: "Integrated digital. Online PR. Mobile.", website: "ifocus.sk", contact: "CEO / Managing Director", tier: 2 },
  { company: "daren&curtis", sector: "Marketing & Agencies", size: "20+", fit: "Creative agency. Brand + digital.", website: "darenandcurtis.com", contact: "Creative Director", tier: 2 },
  { company: "AMI Communications", sector: "Marketing & Agencies", size: "30+", fit: "PR agency. Crisis communications.", website: "amicommunications.sk", contact: "Managing Director", tier: 2 },
  { company: "RIESENIA.com", sector: "Marketing & Agencies", size: "30+", fit: "E-commerce solutions + digital marketing.", website: "riesenia.com", contact: "CEO", tier: 2 },
  { company: "Promiseo", sector: "Marketing & Agencies", size: "20+", fit: "€2.3M revenue. SEO + performance.", website: "promiseo.sk", contact: "CEO", tier: 2 },
  { company: "oh my DOT", sector: "Marketing & Agencies", size: "20+", fit: "€2.3M revenue. Digital agency.", website: "ohmydot.com", contact: "CEO", tier: 3 },
  { company: "ideahunter", sector: "Marketing & Agencies", size: "15+", fit: "Influencer marketing. Native ads.", website: "ideahunter.sk", contact: "CEO", tier: 3 },
  { company: "Paravan Interactive", sector: "Marketing & Agencies", size: "15+", fit: "Digital agency. Web + marketing.", website: "paravan.sk", contact: "CEO", tier: 3 },
  { company: "Tatra banka", sector: "Banks & Finance", size: "3000+", fit: "EXISTING RELATIONSHIP (Roland). Elevator Lab.", website: "tatrabanka.sk", contact: "Head of Innovation / Digital", tier: 1 },
  { company: "Slovenská sporiteľňa", sector: "Banks & Finance", size: "4000+", fit: "Largest retail bank. Erste Group. Massive HR budget.", website: "slsp.sk", contact: "Head of HR / Innovation", tier: 1 },
  { company: "VÚB banka", sector: "Banks & Finance", size: "3000+", fit: "Intesa Sanpaolo group. Digital banking push.", website: "vub.sk", contact: "Head of Digital / HR Director", tier: 1 },
  { company: "ČSOB", sector: "Banks & Finance", size: "2000+", fit: "KBC Group. Full-service bank. Innovation team.", website: "csob.sk", contact: "Head of Innovation / HR", tier: 1 },
  { company: "365.bank", sector: "Banks & Finance", size: "500+", fit: "Challenger bank. App-first. Digital native.", website: "365.bank", contact: "Head of Digital / CTO", tier: 1 },
  { company: "Finax", sector: "Banks & Finance", size: "50+", fit: "App-based financial planning. AI opportunity.", website: "finax.eu", contact: "CEO / CTO", tier: 1 },
  { company: "Finportal", sector: "Banks & Finance", size: "100+", fit: "€60.7M revenue. #1 financial intermediary.", website: "finportal.sk", contact: "CEO / Managing Director", tier: 1 },
  { company: "Prima banka", sector: "Banks & Finance", size: "1000+", fit: "Retail-focused bank. Growing digital.", website: "primabanka.sk", contact: "Head of Digital / HR", tier: 2 },
  { company: "Privatbanka", sector: "Banks & Finance", size: "200+", fit: "Private banking. Wealth management.", website: "privatbanka.sk", contact: "CEO / Managing Director", tier: 2 },
  { company: "TrustPay", sector: "Banks & Finance", size: "50+", fit: "Payment gateway. PISP. Fintech.", website: "trustpay.eu", contact: "CEO / CTO", tier: 2 },
  { company: "Viamo", sector: "Banks & Finance", size: "20+", fit: "P2P payments. Major SK bank partners.", website: "viamo.sk", contact: "CEO", tier: 2 },
  { company: "VESTBERRY", sector: "Banks & Finance", size: "20+", fit: "Portfolio intelligence for VCs. Data + AI.", website: "vestberry.com", contact: "CEO", tier: 2 },
  { company: "Datamolino", sector: "Banks & Finance", size: "15+", fit: "AI invoice processing.", website: "datamolino.com", contact: "CEO", tier: 3 },
  { company: "mBank Slovakia", sector: "Banks & Finance", size: "200+", fit: "Digital bank. Tech-forward.", website: "mbank.sk", contact: "Country Manager", tier: 3 },
  { company: "Deloitte Slovakia", sector: "Law & Consulting", size: "500+", fit: "Big4. AI transformation practice.", website: "deloitte.sk", contact: "Managing Partner / Innovation Lead", tier: 1 },
  { company: "PwC Slovakia", sector: "Law & Consulting", size: "500+", fit: "Big4. Strategy + digital consulting.", website: "pwc.com/sk", contact: "Managing Partner", tier: 1 },
  { company: "KPMG Slovakia", sector: "Law & Consulting", size: "400+", fit: "Big4. Digital transformation advisory.", website: "kpmg.sk", contact: "Managing Partner", tier: 1 },
  { company: "EY Slovakia", sector: "Law & Consulting", size: "400+", fit: "Big4. AI strategy practice.", website: "ey.com/sk", contact: "Managing Partner", tier: 1 },
  { company: "McKinsey (Bratislava)", sector: "Law & Consulting", size: "100+", fit: "Top management consulting. AI thought leaders.", website: "mckinsey.com", contact: "Partner / Office Manager", tier: 1 },
  { company: "Dentons Slovakia", sector: "Law & Consulting", size: "100+", fit: "World's largest law firm. 2nd in SK.", website: "dentons.com", contact: "Managing Partner", tier: 1 },
  { company: "Allen & Overy", sector: "Law & Consulting", size: "50+", fit: "Global law firm. SK market leader.", website: "allenovery.com", contact: "Managing Partner", tier: 1 },
  { company: "Accenture Slovakia", sector: "Law & Consulting", size: "200+", fit: "Global consulting. Technology + AI practice.", website: "accenture.com", contact: "Country Lead / MD", tier: 1 },
  { company: "Devoteam Slovakia", sector: "Law & Consulting", size: "30+", fit: "AI-driven tech consulting. Google Cloud partner.", website: "devoteam.com", contact: "Country Manager", tier: 1 },
  { company: "Adastra", sector: "Law & Consulting", size: "50+", fit: "Data + AI consulting. AI-native.", website: "adastra.com", contact: "Country Manager / Head of AI", tier: 1 },
  { company: "Kinstellar", sector: "Law & Consulting", size: "50+", fit: "CEE law firm. Commercial law.", website: "kinstellar.com", contact: "Managing Partner", tier: 2 },
  { company: "Cechová & Partners", sector: "Law & Consulting", size: "30+", fit: "Leading Slovak commercial law firm.", website: "cechova.sk", contact: "Managing Partner", tier: 2 },
  { company: "FALATH & PARTNERS", sector: "Law & Consulting", size: "20+", fit: "Business law. Corporate + M&A.", website: "falath.sk", contact: "Managing Partner", tier: 2 },
  { company: "TMF Slovakia", sector: "Law & Consulting", size: "50+", fit: "Accounting, tax, HR, payroll.", website: "tmf-group.com", contact: "Country Manager", tier: 2 },
  { company: "Kreston Slovakia", sector: "Law & Consulting", size: "30+", fit: "Management consulting.", website: "krestonslovakia.com", contact: "Managing Partner", tier: 3 },
  { company: "RSM Slovakia", sector: "Law & Consulting", size: "50+", fit: "Management consulting. Tech + digital.", website: "rsmsk.sk", contact: "Partner", tier: 3 },
  { company: "Allianz – Slovenská poisťovňa", sector: "Insurance & Pharma", size: "2000+", fit: "Largest insurance company. Innovation + digital.", website: "allianz.sk", contact: "Head of HR / Innovation", tier: 1 },
  { company: "Generali Poisťovňa", sector: "Insurance & Pharma", size: "1000+", fit: "Major insurer. Generali group.", website: "generali.sk", contact: "Head of HR / CEO", tier: 1 },
  { company: "Kooperativa poisťovňa", sector: "Insurance & Pharma", size: "1000+", fit: "Vienna Insurance Group. Large workforce.", website: "kooperativa.sk", contact: "Head of HR / Director", tier: 1 },
  { company: "NN Životná poisťovňa", sector: "Insurance & Pharma", size: "500+", fit: "Life insurance + pensions. Data-driven.", website: "nn.sk", contact: "CEO / Head of Digital", tier: 2 },
  { company: "Dôvera zdravotná poisťovňa", sector: "Insurance & Pharma", size: "1000+", fit: "2nd largest health insurer. Digital push.", website: "dovera.sk", contact: "CEO / Head of Innovation", tier: 2 },
  { company: "Union zdravotná poisťovňa", sector: "Insurance & Pharma", size: "500+", fit: "Health insurance. Achmea group.", website: "union.sk", contact: "CEO / Director", tier: 2 },
  { company: "Pfizer Slovakia", sector: "Insurance & Pharma", size: "50+", fit: "Global pharma. AI in drug research.", website: "pfizer.sk", contact: "Country Manager", tier: 2 },
  { company: "Roche Slovensko", sector: "Insurance & Pharma", size: "50+", fit: "Global pharma. AI in diagnostics.", website: "roche.sk", contact: "Country Manager", tier: 2 },
  { company: "MSD Slovakia", sector: "Insurance & Pharma", size: "50+", fit: "Pharma. AIFP co-founder in Slovakia.", website: "msd.sk", contact: "Country Manager", tier: 2 },
  { company: "PHOENIX Zdravotnícke zásobovanie", sector: "Insurance & Pharma", size: "300+", fit: "Largest pharma wholesale distributor.", website: "phoenix.sk", contact: "CEO / Director", tier: 2 },
  { company: "Wüstenrot", sector: "Insurance & Pharma", size: "300+", fit: "Building savings + insurance.", website: "wuestenrot.sk", contact: "CEO / HR Director", tier: 3 },
  { company: "Takeda Slovakia", sector: "Insurance & Pharma", size: "30+", fit: "Global pharma. Innovation culture.", website: "takeda.com", contact: "Country Manager", tier: 3 },
  { company: "JTRE (J&T Real Estate)", sector: "Real Estate & Dev", size: "200+", fit: "Top developer. Sky Park, Eurovea.", website: "jtre.sk", contact: "CEO / Head of Development", tier: 1 },
  { company: "HB Reavis", sector: "Real Estate & Dev", size: "500+", fit: "Major commercial developer. PropTech.", website: "hbreavis.com", contact: "CEO / Head of Innovation", tier: 1 },
  { company: "Penta Real Estate", sector: "Real Estate & Dev", size: "200+", fit: "Penta Investments. Major projects.", website: "pentarealestate.com", contact: "CEO / Managing Director", tier: 1 },
  { company: "Doprastav", sector: "Real Estate & Dev", size: "1000+", fit: "Largest construction co. in SK.", website: "doprastav.sk", contact: "CEO / Head of HR", tier: 1 },
  { company: "Cresco Real Estate", sector: "Real Estate & Dev", size: "100+", fit: "Top developer. Residential + commercial.", website: "crescogroup.sk", contact: "CEO", tier: 2 },
  { company: "YIT Slovakia", sector: "Real Estate & Dev", size: "100+", fit: "Finnish developer. Sustainability.", website: "yit.sk", contact: "Country Manager", tier: 2 },
  { company: "EUROVIA SK", sector: "Real Estate & Dev", size: "500+", fit: "Top construction. VINCI group.", website: "eurovia.sk", contact: "CEO / HR Director", tier: 2 },
  { company: "Skanska SK", sector: "Real Estate & Dev", size: "300+", fit: "Global construction. Green building.", website: "skanska.sk", contact: "Country Manager", tier: 2 },
  { company: "VÁHOSTAV – SK", sector: "Real Estate & Dev", size: "500+", fit: "Major construction. Infrastructure.", website: "vahostav-sk.sk", contact: "CEO / Director", tier: 2 },
  { company: "FINEP SK", sector: "Real Estate & Dev", size: "50+", fit: "Residential developer.", website: "finep.sk", contact: "CEO", tier: 2 },
  { company: "Immocap", sector: "Real Estate & Dev", size: "50+", fit: "Admin centers. Established.", website: "immocap.sk", contact: "CEO", tier: 3 },
  { company: "Metrostav Slovakia", sector: "Real Estate & Dev", size: "200+", fit: "Transport constructions.", website: "metrostav.sk", contact: "CEO", tier: 3 },
  { company: "Alza.sk", sector: "E-commerce & Retail", size: "1000+", fit: "€539M revenue. Dominant e-shop. AI in logistics.", website: "alza.sk", contact: "Country Manager / Head of Tech", tier: 1 },
  { company: "GymBeam", sector: "E-commerce & Retail", size: "300+", fit: "€165M revenue. Fast-growing. BA HQ.", website: "gymbeam.sk", contact: "CEO / CTO", tier: 1 },
  { company: "Heureka Group", sector: "E-commerce & Retail", size: "200+", fit: "E-commerce comparison. AI in discovery.", website: "heureka.sk", contact: "CTO / Head of Product", tier: 1 },
  { company: "Nay", sector: "E-commerce & Retail", size: "500+", fit: "Largest electronics retailer. 30+ stores.", website: "nay.sk", contact: "CEO / Head of E-commerce", tier: 1 },
  { company: "Lidl Slovensko", sector: "E-commerce & Retail", size: "5000+", fit: "#1 most popular e-shop 5 years running.", website: "lidl.sk", contact: "Head of HR / Marketing", tier: 1 },
  { company: "Kaufland Slovensko", sector: "E-commerce & Retail", size: "5000+", fit: "Major retailer. Schwarz Group.", website: "kaufland.sk", contact: "Head of HR / Marketing", tier: 1 },
  { company: "Mall.sk (Allegro)", sector: "E-commerce & Retail", size: "200+", fit: "Major marketplace. Allegro group.", website: "mall.sk", contact: "Country Manager / CTO", tier: 2 },
  { company: "Profesia", sector: "E-commerce & Retail", size: "50+", fit: "SK's #1 job portal. AI in HR tech.", website: "profesia.sk", contact: "CEO / Head of Product", tier: 2 },
  { company: "Websupport", sector: "E-commerce & Retail", size: "100+", fit: "Hosting + domains. Digital infrastructure.", website: "websupport.sk", contact: "CEO / CTO", tier: 2 },
  { company: "Staffino", sector: "E-commerce & Retail", size: "30+", fit: "Customer experience platform. AI in CX.", website: "staffino.com", contact: "CEO / CTO", tier: 2 },
  { company: "IKEA Bratislava", sector: "E-commerce & Retail", size: "500+", fit: "Global retailer. Innovation-focused.", website: "ikea.sk", contact: "Store Manager / HR", tier: 2 },
  { company: "DrMax", sector: "E-commerce & Retail", size: "300+", fit: "Largest pharmacy chain. Online + retail.", website: "drmax.sk", contact: "CEO / Head of Digital", tier: 2 },
  { company: "eyerim", sector: "E-commerce & Retail", size: "30+", fit: "E-commerce eyewear. Virtual try-on.", website: "eyerim.sk", contact: "CEO", tier: 3 },
  { company: "Slovnaft", sector: "Energy & Industry", size: "3000+", fit: "€5.89B revenue. Largest company in SK.", website: "slovnaft.sk", contact: "Head of HR / Innovation", tier: 1 },
  { company: "ZSE", sector: "Energy & Industry", size: "2000+", fit: "100+ years. Energy for western SK.", website: "zse.sk", contact: "Head of HR / Innovation", tier: 1 },
  { company: "SPP", sector: "Energy & Industry", size: "2000+", fit: "Dominant gas utility. National coverage.", website: "spp.sk", contact: "Head of Innovation / HR", tier: 1 },
  { company: "Slovenské elektrárne", sector: "Energy & Industry", size: "3000+", fit: "€4.79B revenue. Nuclear + hydro + solar.", website: "seas.sk", contact: "Head of HR / Innovation", tier: 1 },
  { company: "Volkswagen Slovakia", sector: "Energy & Industry", size: "10000+", fit: "Largest private employer. VW, Audi, Porsche.", website: "volkswagen.sk", contact: "Head of HR / Training", tier: 1 },
  { company: "DSV Slovakia", sector: "Energy & Industry", size: "200+", fit: "Global transport & logistics.", website: "dsv.com", contact: "Country Manager", tier: 2 },
  { company: "Prologis Slovakia", sector: "Energy & Industry", size: "50+", fit: "Global logistics real estate.", website: "prologis.com", contact: "Country Manager", tier: 2 },
  { company: "STRABAG Slovakia", sector: "Energy & Industry", size: "500+", fit: "Construction + engineering. Global group.", website: "strabag.sk", contact: "Managing Director / HR", tier: 2 },
  { company: "Galliker Bratislava", sector: "Energy & Industry", size: "100+", fit: "Logistics + transport. Warehousing.", website: "galliker.com", contact: "Branch Manager", tier: 3 },
  { company: "BOSTA TRANS", sector: "Energy & Industry", size: "50+", fit: "Leading SK transport. Eco fleet.", website: "bosta.sk", contact: "CEO", tier: 3 },
  { company: "Bloomreach", sector: "Tech & SaaS", size: "500+", fit: "AI-driven e-commerce platform.", website: "bloomreach.com", contact: "VP Engineering / Head of People", tier: 1 },
  { company: "CloudTalk", sector: "Tech & SaaS", size: "200+", fit: "Cloud phone B2B. $42M funding.", website: "cloudtalk.io", contact: "CTO / VP Product", tier: 1 },
  { company: "Vacuumlabs", sector: "Tech & SaaS", size: "150+", fit: "Fintech engineering + design.", website: "vacuumlabs.com", contact: "CEO / Head of Design", tier: 1 },
  { company: "Sygic", sector: "Tech & SaaS", size: "100+", fit: "Navigation/logistics B2B. AI opportunity.", website: "sygic.com", contact: "CTO / Product Lead", tier: 1 },
  { company: "GoodRequest", sector: "Tech & SaaS", size: "80+", fit: "Digital studio. Fintech, health clients.", website: "goodrequest.com", contact: "CEO / Head of Delivery", tier: 1 },
  { company: "Innovatrics", sector: "Tech & SaaS", size: "100+", fit: "Biometric AI solutions. AI-native.", website: "innovatrics.com", contact: "CTO / VP Engineering", tier: 1 },
  { company: "Touch4IT", sector: "Tech & SaaS", size: "50+", fit: "Cloud + AI consulting.", website: "touch4it.com", contact: "CEO / Head of Consulting", tier: 1 },
  { company: "Anasoft", sector: "Tech & SaaS", size: "50+", fit: "AI + enterprise software. EMANS.", website: "anasoft.com", contact: "CEO / CTO", tier: 1 },
  { company: "Pixel Federation", sector: "Tech & SaaS", size: "200+", fit: "Gaming. Creative + tech.", website: "pixelfederation.com", contact: "CEO / Head of Studio", tier: 2 },
  { company: "PosAm", sector: "Tech & SaaS", size: "200+", fit: "IT services. Enterprise. Digital transformation.", website: "posam.sk", contact: "CEO / Head of Innovation", tier: 2 },
  { company: "Photoneo", sector: "Tech & SaaS", size: "100+", fit: "3D vision + robotics. $53M funding.", website: "photoneo.com", contact: "CTO / Head of Engineering", tier: 2 },
  { company: "Slido (Cisco)", sector: "Tech & SaaS", size: "100+", fit: "Interactive presentations. BA engineering.", website: "slido.com", contact: "Site Lead / Engineering Director", tier: 2 },
  { company: "SOFTIP", sector: "Tech & SaaS", size: "200+", fit: "Enterprise IT. Large SK IT company.", website: "softip.sk", contact: "Head of Innovation", tier: 2 },
  { company: "Powerful Medical", sector: "Tech & SaaS", size: "30+", fit: "AI medical device. AI-first.", website: "powerfulmedical.com", contact: "CEO / CTO", tier: 2 },
  { company: "Sensoneo", sector: "Tech & SaaS", size: "50+", fit: "Smart waste. AI/IoT for cities.", website: "sensoneo.com", contact: "CEO / Head of Product", tier: 2 },
  { company: "Rare Crew", sector: "Tech & SaaS", size: "150+", fit: "Custom software. Global from BA.", website: "rarecrew.com", contact: "CEO / Head of Delivery", tier: 2 },
  { company: "ableneo", sector: "Tech & SaaS", size: "50+", fit: "Digital transformation services.", website: "ableneo.com", contact: "CEO / Managing Director", tier: 2 },
  { company: "Fuergy", sector: "Tech & SaaS", size: "30+", fit: "Energy AI. AI-powered optimization.", website: "fuergy.com", contact: "CEO / CTO", tier: 2 },
  { company: "Minit", sector: "Tech & SaaS", size: "50+", fit: "Process mining AI. Data-driven.", website: "minit.io", contact: "Head of Product", tier: 2 },
  { company: "Younics", sector: "Tech & SaaS", size: "30+", fit: "Scalable digital products.", website: "younics.com", contact: "CEO", tier: 2 },
  { company: "BRACKETS by TRIAD", sector: "Tech & SaaS", size: "30+", fit: "Strategy + UX + dev studio.", website: "brackets.sk", contact: "CEO / Head of Strategy", tier: 2 },
  { company: "elv.ai", sector: "Tech & SaaS", size: "15+", fit: "AI internet safety. AI-native.", website: "elv.ai", contact: "CEO / CTO", tier: 3 },
  { company: "Panaxeo", sector: "Tech & SaaS", size: "20+", fit: "Software dev + IT consulting.", website: "panaxeo.com", contact: "CEO", tier: 3 },
  { company: "Bookee.ai", sector: "Tech & SaaS", size: "15+", fit: "AI accounting. AI-native.", website: "bookee.ai", contact: "CEO", tier: 3 },
  { company: "Auglio", sector: "Tech & SaaS", size: "15+", fit: "Virtual try-on AI. E-commerce.", website: "auglio.com", contact: "CEO", tier: 3 },
  { company: "Diorama", sector: "Creative & Design", size: "15+", fit: "Branding + strategy + web + UX.", website: "diorama.sk", contact: "CEO / Creative Director", tier: 2 },
  { company: "Moodive", sector: "Creative & Design", size: "15+", fit: "Video production. Commercials.", website: "moodive.sk", contact: "Producer / CEO", tier: 2 },
  { company: "DEVLEV Architekti", sector: "Creative & Design", size: "30+", fit: "500+ projects. Architecture + 3D.", website: "devlev.sk", contact: "CEO / Director", tier: 2 },
  { company: "Studio Echt", sector: "Creative & Design", size: "15+", fit: "Branding + web + video.", website: "studioecht.com", contact: "Founder", tier: 3 },
  { company: "detaility", sector: "Creative & Design", size: "10+", fit: "UX/UI + branding + packaging.", website: "detaility.com", contact: "Founder", tier: 3 },
  { company: "Art4web", sector: "Creative & Design", size: "15+", fit: "Branding + visual identity.", website: "art4web.sk", contact: "CEO", tier: 3 },
  { company: "PLATFORM", sector: "Creative & Design", size: "15+", fit: "UX/UI agency. Web + mobile.", website: "platform.sk", contact: "CEO", tier: 3 },
  { company: "guy.sk", sector: "Creative & Design", size: "10+", fit: "Digital studio. Clean design + UX.", website: "guy.sk", contact: "Founder", tier: 3 },
  { company: "Architekti Šebo Lichý", sector: "Creative & Design", size: "15+", fit: "Architecture since 2004.", website: "sebolichy.sk", contact: "Partner", tier: 3 },
]

const SECTORS = ["All","Telecom & Media","Marketing & Agencies","Banks & Finance","Law & Consulting","Insurance & Pharma","Real Estate & Dev","E-commerce & Retail","Energy & Industry","Tech & SaaS","Creative & Design"]

export default function ProspectsPage() {
  const [activeTab, setActiveTab] = useState("All")
  const [activeTier, setActiveTier] = useState<number | null>(null)
  const [expandedTemplate, setExpandedTemplate] = useState<number | null>(null)
  const filteredCompanies = COMPANIES.filter(c => activeTab === "All" || c.sector === activeTab).filter(c => activeTier === null || c.tier === activeTier)
  const tier1Count = COMPANIES.filter(c => c.tier === 1).length
  const tier2Count = COMPANIES.filter(c => c.tier === 2).length
  const tier3Count = COMPANIES.filter(c => c.tier === 3).length

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a] font-mono selection:bg-[#0047BB] selection:text-white">
      <TopNav />
      <main className="max-w-5xl mx-auto pt-32 pb-24 px-6">
        <header className="mb-16 border-b border-black/10 pb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0047BB] mb-4">B2B OUTREACH — BRATISLAVA</p>
              <h1 className="font-serif text-4xl md:text-6xl italic leading-tight text-black">Prospect Database</h1>
            </div>
            <div className="text-right">
              <p className="text-3xl md:text-5xl font-bold text-[#0047BB] tracking-tighter">{COMPANIES.length} TARGETS</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mt-1">Across {SECTORS.length - 1} sectors</p>
            </div>
          </div>
          <p className="text-sm text-black/60 max-w-2xl">Companies in Bratislava. From telecoms and banks to agencies and law firms. Organized by sector, prioritized by tier. Two offers: corporate workshop (€5,900) or public event (€99).</p>
        </header>

        <section className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button onClick={() => setActiveTier(activeTier === 1 ? null : 1)} className={cn("p-6 border-2 text-left transition-all", activeTier === 1 ? "border-[#0047BB] bg-[#0047BB]/5" : "border-[#0047BB]/20 hover:border-[#0047BB]/40")}><div className="flex items-center justify-between mb-2"><span className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB]">Tier 1 — Priority</span><span className="text-2xl font-bold text-[#0047BB]">{tier1Count}</span></div><p className="text-xs text-black/50">Big companies, existing relationships. Attack first.</p></button>
          <button onClick={() => setActiveTier(activeTier === 2 ? null : 2)} className={cn("p-6 border-2 text-left transition-all", activeTier === 2 ? "border-black/40 bg-black/5" : "border-black/10 hover:border-black/20")}><div className="flex items-center justify-between mb-2"><span className="text-[10px] font-bold uppercase tracking-widest text-black/40">Tier 2 — Strong</span><span className="text-2xl font-bold text-black/40">{tier2Count}</span></div><p className="text-xs text-black/50">Good fit, substantial companies. Second wave.</p></button>
          <button onClick={() => setActiveTier(activeTier === 3 ? null : 3)} className={cn("p-6 border-2 text-left transition-all", activeTier === 3 ? "border-black/20 bg-black/[0.02]" : "border-black/5 hover:border-black/10")}><div className="flex items-center justify-between mb-2"><span className="text-[10px] font-bold uppercase tracking-widest text-black/20">Tier 3 — Warm</span><span className="text-2xl font-bold text-black/20">{tier3Count}</span></div><p className="text-xs text-black/50">Smaller or less certain. Batch outreach.</p></button>
        </section>

        <section className="mb-16 bg-[#0047BB] text-white p-6 md:p-8">
          <div className="flex items-center justify-between mb-8"><h2 className="font-serif text-2xl md:text-3xl italic">Ideal Client Profile</h2><span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Targeting</span></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/10 border border-white/20 p-4"><p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">Company Size</p><p className="text-sm font-bold">Any company with 1M+ revenue</p><p className="text-xs text-white/60 mt-2">From 15-person agencies to 10K+ corporations.</p></div>
            <div className="bg-white/10 border border-white/20 p-4"><p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">Decision Maker</p><p className="text-sm font-bold">CEO, CTO, HR Director, Head of Innovation</p><p className="text-xs text-white/60 mt-2">Controls training budget or signs off on €5K+.</p></div>
            <div className="bg-white/10 border border-white/20 p-4"><p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">AI Signal</p><p className="text-sm font-bold">Using or Exploring</p><p className="text-xs text-white/60 mt-2">Not &quot;what is AI?&quot; but &quot;how do we use it better?&quot;</p></div>
            <div className="bg-white/10 border border-white/20 p-4"><p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2">Budget Signal</p><p className="text-sm font-bold">Invests in Growth</p><p className="text-xs text-white/60 mt-2">Sends people to conferences. Has done workshops.</p></div>
          </div>
        </section>

        <section className="mb-16 border border-black/10 p-6 md:p-8">
          <div className="flex items-center justify-between mb-8"><h2 className="font-serif text-2xl md:text-3xl italic">Dual Offer Strategy</h2><span className="text-[10px] font-bold uppercase tracking-widest text-black/40">The Funnel</span></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-2 border-[#0047BB] pl-6"><div className="flex justify-between items-start mb-2"><h3 className="font-bold text-lg">CORPORATE WORKSHOP</h3><span className="bg-[#0047BB] text-white text-[10px] font-bold px-2 py-1">€5,900</span></div><p className="text-sm text-black/60 mb-4">Half day, 10-15 people, we come to you, 30-day follow-up.</p><p className="text-xs text-black/40 uppercase tracking-widest">For companies ready to invest.</p></div>
            <div className="border-l-2 border-black/20 pl-6"><div className="flex justify-between items-start mb-2"><h3 className="font-bold text-lg">PUBLIC EVENT GATEWAY</h3><span className="bg-black text-white text-[10px] font-bold px-2 py-1">€99</span></div><p className="text-sm text-black/60 mb-4">THE MINDSHIFT, Feb 26, 40 seats. &quot;Send 1-2 people to see what we do.&quot;</p><p className="text-xs text-black/40 uppercase tracking-widest">For companies who want to test first.</p></div>
          </div>
          <div className="mt-8 pt-6 border-t border-black/5 text-center"><p className="text-xs font-bold text-[#0047BB] uppercase tracking-widest">The public event is a funnel to corporate. Every attendee is a potential corporate lead.</p></div>
        </section>

        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"><h2 className="font-serif text-2xl md:text-3xl italic">Company Database</h2><div className="text-xs text-black/40 font-bold uppercase tracking-widest">Showing {filteredCompanies.length} of {COMPANIES.length}{activeTier && <span className="ml-2 text-[#0047BB]">· Tier {activeTier}</span>}</div></div>
          <div className="flex flex-wrap gap-2 mb-4 border-b border-black/10 pb-4">{SECTORS.map((sector) => { const count = sector === "All" ? COMPANIES.length : COMPANIES.filter(c => c.sector === sector).length; return (<button key={sector} onClick={() => setActiveTab(sector)} className={cn("px-3 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors", activeTab === sector ? "bg-[#0047BB] text-white" : "bg-black/5 text-black/60 hover:bg-black/10")}>{sector} ({count})</button>) })}</div>
          <div className="flex gap-2 mb-8"><button onClick={() => setActiveTier(null)} className={cn("px-3 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors", activeTier === null ? "bg-black text-white" : "bg-black/5 text-black/40 hover:bg-black/10")}>All Tiers</button>{[1,2,3].map(t => (<button key={t} onClick={() => setActiveTier(activeTier === t ? null : t)} className={cn("px-3 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors", activeTier === t ? "bg-black text-white" : "bg-black/5 text-black/40 hover:bg-black/10")}>Tier {t}</button>))}</div>
          <div className="overflow-x-auto border border-black/10"><table className="w-full text-left text-xs"><thead className="bg-black/5 text-black/40 uppercase tracking-widest font-bold border-b border-black/10"><tr><th className="p-4 w-[200px]">Company</th><th className="p-4 w-[150px]">Sector</th><th className="p-4 w-[80px]">Size</th><th className="p-4">Why They Fit</th><th className="p-4 w-[140px]">Website</th><th className="p-4 w-[180px]">Contact Target</th></tr></thead><tbody className="divide-y divide-black/5">{filteredCompanies.map((company, i) => (<tr key={i} className="hover:bg-black/[0.02]"><td className="p-4 font-bold"><div className="flex items-center gap-2"><div className={cn("w-2 h-2 rounded-full shrink-0", company.tier === 1 ? "bg-[#0047BB]" : company.tier === 2 ? "bg-black/40" : "bg-black/10")} /><span className={cn(company.tier === 1 ? "text-black" : "text-black/60")}>{company.company}</span></div></td><td className="p-4 text-black/60">{company.sector}</td><td className="p-4 text-black/60">{company.size}</td><td className="p-4 text-black/80">{company.fit}</td><td className="p-4 text-[#0047BB] underline decoration-1 underline-offset-2"><a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer">{company.website}</a></td><td className="p-4 text-black/60">{company.contact}</td></tr>))}</tbody></table></div>
        </section>

        <section className="mb-16 bg-black/[0.02] border border-black/10 p-6 md:p-8">
          <h2 className="font-serif text-2xl md:text-3xl italic mb-6">How to Find Emails</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4"><div className="flex gap-4"><span className="font-bold text-[#0047BB]">01</span><p className="text-sm">Company website → About/Team → Find decision maker</p></div><div className="flex gap-4"><span className="font-bold text-[#0047BB]">02</span><p className="text-sm">Email pattern: <span className="font-mono bg-black/5 px-1">meno.priezvisko@firma.sk</span></p></div><div className="flex gap-4"><span className="font-bold text-[#0047BB]">03</span><p className="text-sm">Verify with Hunter.io or LinkedIn</p></div><div className="flex gap-4"><span className="font-bold text-[#0047BB]">04</span><p className="text-sm">Alternative: LinkedIn connection request with note</p></div></div>
            <div className="bg-white border border-black/10 p-4"><p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-4">Common Slovak Patterns</p><ul className="space-y-2 text-sm font-mono text-black/60"><li>firstname.lastname@company.sk</li><li>firstname@company.sk</li><li>f.lastname@company.sk</li><li>info@company.sk (fallback)</li></ul></div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl md:text-3xl italic mb-8">Email Templates</h2>
          <div className="space-y-4">
            <div className="border border-black/10"><button onClick={() => setExpandedTemplate(expandedTemplate === 1 ? null : 1)} className="w-full flex items-center justify-between p-4 bg-black/[0.02] hover:bg-black/[0.05] transition-colors text-left"><span className="font-bold text-sm">Template 1: Corporate Workshop Intro (Cold)</span><span className="text-xs uppercase tracking-widest text-black/40">{expandedTemplate === 1 ? "Close" : "View"}</span></button>{expandedTemplate === 1 && (<div className="p-6 bg-white border-t border-black/10"><pre className="whitespace-pre-wrap font-mono text-xs text-black/80 leading-relaxed">{`Subject: AI pre váš tím — krátka otázka\n\nDobrý deň [Meno],\n\nvolám sa Roman a spolu s Rolandom Vraníkom (SORRYWECAN) a Jánom Koscelanským (SUDOLABS) vedieme Research Lab — AI vzdelávanie pre tímy, ktoré s AI už pracujú.\n\nNie sme kurz na prompting. Pomáhame firmám premýšľať o tom, ako AI mení ich rozhodovanie, procesy a výsledky.\n\nRobia sme workshopy pre tímy 10-15 ľudí. Pol dňa. Priamo u vás.\n\nMal by som krátku otázku: používa váš tím AI nástroje v každodennej práci?\n\nŽiadny záväzok — len 15-minútový call.\n\nS pozdravom,\nRoman Pii Wagner\nResearch Lab | researchlab.sorrywecan.com`}</pre></div>)}</div>
            <div className="border border-black/10"><button onClick={() => setExpandedTemplate(expandedTemplate === 2 ? null : 2)} className="w-full flex items-center justify-between p-4 bg-black/[0.02] hover:bg-black/[0.05] transition-colors text-left"><span className="font-bold text-sm">Template 2: Public Event Invite (Warmer)</span><span className="text-xs uppercase tracking-widest text-black/40">{expandedTemplate === 2 ? "Close" : "View"}</span></button>{expandedTemplate === 2 && (<div className="p-6 bg-white border-t border-black/10"><pre className="whitespace-pre-wrap font-mono text-xs text-black/80 leading-relaxed">{`Subject: 26. februára — THE MINDSHIFT (Bratislava)\n\nDobrý deň [Meno],\n\n26. februára robíme THE MINDSHIFT — 3-hodinový AI workshop pre ľudí, ktorí s AI už pracujú.\n\n40 miest. €99. Žiadna teória — len to, čo reálne funguje.\n\nRoland na TASTE — čo odlišuje dobrú prácu od zabudnuteľnej.\nJán na LEVERAGE — čo dnes zvládne jeden človek.\nRoman na CLARITY — ako sa rozhodovať, keď sa všetko mení.\n\nPošlite 1-2 ľudí.\n\nLink: [LINK]\n\nS pozdravom,\nRoman`}</pre></div>)}</div>
            <div className="border border-black/10"><button onClick={() => setExpandedTemplate(expandedTemplate === 3 ? null : 3)} className="w-full flex items-center justify-between p-4 bg-black/[0.02] hover:bg-black/[0.05] transition-colors text-left"><span className="font-bold text-sm">Template 3: Follow-up (After No Response)</span><span className="text-xs uppercase tracking-widest text-black/40">{expandedTemplate === 3 ? "Close" : "View"}</span></button>{expandedTemplate === 3 && (<div className="p-6 bg-white border-t border-black/10"><pre className="whitespace-pre-wrap font-mono text-xs text-black/80 leading-relaxed">{`Subject: Re: AI pre váš tím\n\nDobrý deň [Meno],\n\nlen krátky follow-up. Rozumiem, že je toho veľa.\n\nAk áno — 26.2. robíme THE MINDSHIFT (€99, 3 hodiny, 40 ľudí). Najjednoduchší spôsob vidieť, čo robíme.\n\nDajte vedieť.\n\nRoman`}</pre></div>)}</div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl md:text-3xl italic mb-8">LinkedIn Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border border-black/10 p-4"><p className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] mb-2">Step 1</p><p className="text-sm">Find decision maker on LinkedIn</p></div>
            <div className="border border-black/10 p-4"><p className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] mb-2">Step 2</p><p className="text-sm">Connection request WITH note (300 chars)</p><p className="text-xs text-black/40 mt-2 italic">&quot;Dobrý deň [Meno], vidím že [firma] robí zaujímavé veci. Venujem sa AI vzdelávaniu — rád by som sa spojil. Roman&quot;</p></div>
            <div className="border border-black/10 p-4"><p className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] mb-2">Step 3</p><p className="text-sm">After accepted: conversation, NOT pitch</p></div>
            <div className="border border-black/10 p-4"><p className="text-[10px] font-bold uppercase tracking-widest text-[#0047BB] mb-2">Step 4</p><p className="text-sm">Public event as low-commitment entry</p></div>
          </div>
          <div className="mt-4 p-4 bg-red-50 border border-red-100 text-red-800 text-xs font-bold text-center uppercase tracking-widest">Never pitch first. Ask about their AI usage.</div>
        </section>

        <section className="mb-16 border border-black/10 p-8">
          <h2 className="font-serif text-2xl md:text-3xl italic mb-8">Daily Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">{["Pick 10 companies/day (start Tier 1)","Find decision maker + email","Send personalized email (Template 1 or 2)","Same day: LinkedIn connection request","Day 3-4: Follow up (Template 3)","Track in shared Google Sheet","Interest → Book 15-min call","On call: Qualify → Corporate or Public event"].map((s,i) => (<div key={i} className="flex gap-4 items-start"><span className="font-bold text-black/20 text-xl">{i+1}</span><p className="text-sm pt-1">{s}</p></div>))}</div>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-2xl md:text-3xl italic mb-8">Tracking Template</h2>
          <div className="overflow-x-auto border border-black/10"><table className="w-full text-left text-xs"><thead className="bg-black/5 text-black/40 uppercase tracking-widest font-bold border-b border-black/10"><tr><th className="p-3">Company</th><th className="p-3">Contact</th><th className="p-3">Email</th><th className="p-3">LinkedIn</th><th className="p-3">Status</th><th className="p-3">Channel</th><th className="p-3">Date</th><th className="p-3">Notes</th></tr></thead><tbody className="divide-y divide-black/5 text-black/60">
            <tr><td className="p-3 font-bold text-black">O2 Slovakia</td><td className="p-3">—</td><td className="p-3">—</td><td className="p-3 text-[#0047BB]">Find</td><td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-[10px] font-bold uppercase">Interested</span></td><td className="p-3">Direct</td><td className="p-3">Feb 18</td><td className="p-3">Want to send people</td></tr>
            <tr><td className="p-3 font-bold text-black">Tatra banka</td><td className="p-3">—</td><td className="p-3">—</td><td className="p-3 text-[#0047BB]">Find</td><td className="p-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-[10px] font-bold uppercase">Existing relationship</span></td><td className="p-3">Roland</td><td className="p-3">Feb 18</td><td className="p-3">Roland did their campaigns</td></tr>
            <tr><td className="p-3 font-bold text-black">Made by Vaculik</td><td className="p-3">—</td><td className="p-3">—</td><td className="p-3 text-[#0047BB]">Find</td><td className="p-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-[10px] font-bold uppercase">To reach out</span></td><td className="p-3">Email</td><td className="p-3">—</td><td className="p-3">Ideal for public event</td></tr>
          </tbody></table></div>
        </section>

        <footer className="text-center border-t border-black/10 pt-8 pb-8"><p className="text-[10px] font-bold uppercase tracking-widest text-black/30">SORRYWECAN // RESEARCH LAB // PROSPECT DATABASE // 2026</p></footer>
      </main>
    </div>
  )
}
