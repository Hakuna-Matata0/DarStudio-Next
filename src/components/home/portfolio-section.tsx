"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { Code2, Palette, Zap, CheckCircle2, ArrowRight, Mail, Facebook, Instagram, Star, Menu, X, Send, MapPin, Phone, Clock, FileText, Building2, Target, Shield, Plus, Minus } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { useState, useEffect, useRef } from "react";
import { LaptopIllustration } from "@/components/LaptopIllustration";
import { SectionBadge, GlowButton } from "@/components/shared/home-shared";
import { siteConfig } from "@/content/site-config";

function PortfolioSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "SaaS • React • TypeScript",
      description: "Platforma sprzedażowa dla fashion branży z zaawansowanym systemem filtrów i real-time inventory.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      title: "Fintech Dashboard",
      category: "Fintech • Next.js • GraphQL",
      description: "Dashboard analityczny z wizualizacją danych finansowych i integracja z API bankowymi.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      title: "Marketing Agency",
      category: "Landing Page • Framer Motion",
      description: "Strona korporacyjna z animacjami scroll-triggered i CMS dla zarządzania case studies.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    },
  ];

  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionBadge>Portfolio</SectionBadge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Wybrane projekty
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.75)" }}>
            Z dumą pracowałem dla startupów z całego świata, agencji marketingowych i rosnących firm technologicznych
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/realizacje">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#0B1220] transition-all duration-300 relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #00E0C6, #2E90FA)",
                boxShadow: "0 10px 40px rgba(0,224,198,0.3)",
              }}
            >
              <span className="relative z-10">Zobacz wszystkie realizacje</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioCard({ title, category, description, image, index }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8 }}
      className="group cursor-pointer relative"
    >
      <motion.div
        className="rounded-2xl overflow-hidden border transition-all duration-300 relative"
        animate={{
          borderColor: isHovered ? "rgba(0,224,198,0.3)" : "rgba(255,255,255,0.08)",
          boxShadow: isHovered ? "0 0 30px rgba(0,224,198,0.15)" : "none",
        }}
        style={{
          backgroundColor: "#121A2B",
        }}
      >
        {/* Spotlight effect on hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,224,198,0.1), transparent 40%)`,
            }}
          />
        )}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "linear-gradient(135deg, rgba(0,224,198,0.3), rgba(46,144,250,0.3))",
            }}
          />
          {/* Corner accent */}
          <motion.div
            className="absolute top-0 right-0 w-20 h-20"
            initial={{ x: 100, y: -100, rotate: 0 }}
            animate={{
              x: isHovered ? 0 : 100,
              y: isHovered ? 0 : -100,
              rotate: isHovered ? 0 : 45,
            }}
            transition={{ duration: 0.4 }}
            style={{
              background: "linear-gradient(135deg, #00E0C6, #2E90FA)",
              clipPath: "polygon(100% 0, 0 0, 100% 100%)",
            }}
          />
        </div>
        <div className="p-6">
          <motion.div
            className="text-xs mb-2"
            animate={{ color: isHovered ? "#1AF0D4" : "#00E0C6" }}
            style={{ fontFamily: "var(--font-body)" }}
          >
            {category}
          </motion.div>
          <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
            {title}
          </h3>
          <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.75)", lineHeight: "1.6" }}>
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export { PortfolioSection };
