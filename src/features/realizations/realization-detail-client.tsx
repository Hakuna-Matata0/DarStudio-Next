
"use client";

import { motion } from "motion/react";
import { ArrowLeft, Calendar, Tag, ExternalLink, CheckCircle2, Target, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function RealizationDetailClient({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF6] overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />
      </div>

      <div className="fixed inset-0 pointer-events-none">
        <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-20" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} style={{ background: "radial-gradient(circle, rgba(0,224,198,0.15) 0%, transparent 70%)" }} />
      </div>

      <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "rgba(11, 18, 32, 0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)", background: "linear-gradient(135deg, #00E0C6, #2E90FA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>WebDev</Link>
            <Link href="/realizacje" className="flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-[#00E0C6]" style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.75)" }}>
              <ArrowLeft className="h-4 w-4" />
              Powrót do realizacji
            </Link>
          </div>
        </div>
      </motion.nav>

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-2 rounded-full text-sm border" style={{ backgroundColor: "rgba(0,224,198,0.12)", borderColor: "rgba(0,224,198,0.3)", color: "#00E0C6" }}>{project.category}</span>
              <span className="inline-flex items-center gap-2 text-sm" style={{ color: "rgba(230,237,246,0.7)" }}><Calendar className="w-4 h-4" />{project.year}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>{project.title}</h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-4xl" style={{ color: "rgba(230,237,246,0.75)" }}>{project.longDescription}</p>
          </motion.div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start mb-14">
            <motion.img initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} src={project.image} alt={project.title} className="w-full h-[420px] object-cover rounded-3xl border" style={{ borderColor: "rgba(255,255,255,0.08)" }} />
            <div className="space-y-6">
              <InfoCard title="Opis projektu" icon={Target} content={project.overview} />
              <InfoCard title="Główne wyzwanie" icon={Zap} content={project.challenge} />
              <InfoCard title="Rezultaty" icon={TrendingUp} list={project.results} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <SectionCard title="Rozwiązanie" content={project.solution} />
            <SectionCard title="Stack technologiczny" list={project.techStack || []} icon={Tag} />
          </div>

          {project.keyFeatures && (
            <SectionCard title="Najważniejsze funkcje" list={project.keyFeatures} icon={CheckCircle2} />
          )}

          <div className="mt-12 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full border text-sm" style={{ backgroundColor: "rgba(18,26,43,0.8)", borderColor: "rgba(255,255,255,0.08)" }}>{tag}</span>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/brief" className="inline-flex items-center gap-3 px-6 py-4 rounded-xl font-bold" style={{ background: "linear-gradient(135deg, #00E0C6, #2E90FA)", color: "#0B1220" }}>
              <ExternalLink className="w-5 h-5" />
              Chcę podobny projekt
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title, icon: Icon, content, list }: { title: string; icon: any; content?: string; list?: string[] }) {
  return (
    <div className="rounded-2xl border p-6" style={{ backgroundColor: "#121A2B", borderColor: "rgba(255,255,255,0.08)" }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(0,224,198,0.12)", color: "#00E0C6" }}><Icon className="w-5 h-5" /></div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      {content ? <p style={{ color: "rgba(230,237,246,0.75)", lineHeight: 1.8 }}>{content}</p> : null}
      {list ? <ul className="space-y-3">{list.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="w-5 h-5 mt-0.5 text-[#00E0C6]" /><span style={{ color: "rgba(230,237,246,0.75)" }}>{item}</span></li>)}</ul> : null}
    </div>
  );
}

function SectionCard({ title, content, list, icon: Icon }: { title: string; content?: string; list?: string[]; icon?: any }) {
  return (
    <div className="rounded-2xl border p-8" style={{ backgroundColor: "#121A2B", borderColor: "rgba(255,255,255,0.08)" }}>
      <div className="flex items-center gap-3 mb-5">
        {Icon ? <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(46,144,250,0.12)", color: "#2E90FA" }}><Icon className="w-5 h-5" /></div> : null}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      {content ? <p style={{ color: "rgba(230,237,246,0.75)", lineHeight: 1.8 }}>{content}</p> : null}
      {list ? <div className="flex flex-wrap gap-3">{list.map((item) => <span key={item} className="px-4 py-2 rounded-full border text-sm" style={{ backgroundColor: "rgba(18,26,43,0.8)", borderColor: "rgba(255,255,255,0.08)" }}>{item}</span>)}</div> : null}
    </div>
  );
}
