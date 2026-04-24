"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { Code2, Palette, Zap, CheckCircle2, ArrowRight, Mail, Facebook, Instagram, Star, Menu, X, Send, MapPin, Phone, Clock, FileText, Building2, Target, Shield, Plus, Minus } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { useState, useEffect, useRef } from "react";
import { LaptopIllustration } from "@/components/LaptopIllustration";
import { SectionBadge, GlowButton } from "@/components/shared/home-shared";
import { siteConfig } from "@/content/site-config";

function ServicesSection() {
  const services = [
    {
      icon: FileText,
      title: "Strony wizytówki",
      description:
        "Przejrzyste i estetyczne strony, które w klarowny sposób prezentują ofertę, wzmacniają wiarygodność marki i ułatwiają klientom szybki kontakt.",
      features: ["1-5 podstron", "Formularz kontaktowy", "Szybkie wdrożenie", "Responsywny design"],
    },
    {
      icon: Building2,
      title: "Strony firmowe",
      description:
        "Kompleksowa strona internetowa z rozbudowaną strukturą. Idealna dla średnich i dużych firm potrzebujących zaawansowanej funkcjonalności i rozwiązań szytych na miarę.",
      features: ["5+ podstron", "System zarządzania treścią CMS", "Indywidualna struktura i UX", "Integracje (np. formularze, analityka) "],
    },
    {
      icon: Zap,
      title: "Landing pages",
      description:
        "Wysokokonwertujące strony sprzedażowe zaprojektowane do jednego celu. Perfekcyjne do kampanii reklamowych, produktów lub usług wymagających szybkiej konwersji.",
      features: ["Jednostronnicowy układ (one-page)", "Struktura nastawiona na konwersję", "Integracje (formularze, analityka, pixel) ", "Optymalizacja szybkośc"],
    },
    {
      icon: Code2,
      title: "Blogi",
      description:
        "Platformy blogowe z intuicyjnym systemem zarządzania treścią. Idealne dla firm i twórców, którzy chcą budować zasięg, autorytet i relację z odbiorcami.",
      features: ["System zarządzania treścią (CMS)", "Struktura artykułów i kategorii", "Intuicyjna edycja treści", "Integracje (np. nwesletter, analityka)", "Możliwość dalszej rozbudowy"],
    },
  ];

  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle, rgba(46,144,250,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionBadge>Usługi</SectionBadge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Jak mogę Ci{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00E0C6, #2E90FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              pomóc
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.75)" }}>
            Kompleksowe rozwiązania webowe dostosowane do Twoich potrzeb
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
  features,
}: {
  icon: any;
  title: string;
  description: string;
  index: number;
  features?: string[];
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const cardY = useTransform(scrollYProgress, [0, 1], [index * 10, -index * 10]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        style={{
          y: cardY,
          backgroundColor: "#121A2B",
        }}
        className="h-full p-8 rounded-2xl border transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
        animate={{
          borderColor: isHovered ? "rgba(0,224,198,0.3)" : "rgba(255,255,255,0.08)",
          boxShadow: isHovered ? "0 0 30px rgba(0,224,198,0.15)" : "none",
        }}
        whileHover={{ y: -5 }}
      >
        {/* Animated gradient on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(135deg, rgba(0,224,198,0.05), rgba(46,144,250,0.05))",
          }}
        />

        {/* Corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            background: "linear-gradient(135deg, #00E0C6, #2E90FA)",
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
          }}
        />

        <motion.div
          className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center transition-all duration-300 relative z-10"
          animate={{
            background: isHovered ? "linear-gradient(135deg, #00E0C6, #2E90FA)" : "#182235",
          }}
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className={`h-7 w-7 transition-colors duration-300 ${isHovered ? "text-[#0B1220]" : "text-[#00E0C6]"}`} />
        </motion.div>
        <h3 className="text-xl font-bold mb-3 relative z-10" style={{ fontFamily: "var(--font-display)" }}>
          {title}
        </h3>
        <p className="relative z-10 mb-6" style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.75)", lineHeight: "1.7" }}>
          {description}
        </p>

        {/* Feature tags */}
        {features && (
          <div className="flex flex-wrap gap-2 relative z-10">
            {features.map((feature, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                className="px-3 py-1 rounded-full text-xs border"
                style={{
                  backgroundColor: "rgba(0,224,198,0.05)",
                  borderColor: "rgba(0,224,198,0.2)",
                  color: "#00E0C6",
                  fontFamily: "var(--font-body)",
                }}
              >
                {feature}
              </motion.span>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export { ServicesSection };
