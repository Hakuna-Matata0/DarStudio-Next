"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { Code2, Palette, Zap, CheckCircle2, ArrowRight, Mail, Facebook, Instagram, Star, Menu, X, Send, MapPin, Phone, Clock, FileText, Building2, Target, Shield, Plus, Minus } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { useState, useEffect, useRef } from "react";
import { LaptopIllustration } from "@/components/LaptopIllustration";
import { SectionBadge, GlowButton } from "@/components/shared/home-shared";
import { siteConfig } from "@/content/site-config";

function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Analiza Potrzeb",
      description: "Poznaję Twój biznes, cele oraz grupę docelową, aby dokładnie zrozumieć kontekst projektu. Na tej podstawie określam zakres prac oraz dobieram rozwiązania, które najlepiej wspierają realizację Twoich celów.",
    },
    {
      number: "02",
      title: "Koncepcja i Projekt",
      description: "Opracowuję koncepcję strony, łącząc strategię, strukturę i design w spójne doświadczenie użytkownika. Projekt wizualny powstaje w oparciu o charakter marki i jest dopracowany w każdym detalu — od typografii po hierarchię informacji.",
    },
    {
      number: "03",
      title: "Wdrożenie",
      description: "Realizuję wdrożenie projektu, tworząc wydajną i stabilną stronę internetową. Dbam o optymalizację, responsywność oraz zgodność z aktualnymi standardami, aby zapewnić bezproblemowe działanie i wysoką jakość użytkowania.",
    },
    {
      number: "04",
      title: "Testy i wdrożenie",
      description: "Projekt kończy się pełnym wdrożeniem i publikacją strony, poprzedzoną szczegółową weryfikacją jakości. Po uruchomieniu zapewniam wsparcie, które pozwala utrzymać stronę w dobrej kondycji i rozwijać ją wraz z Twoim biznesem.",
    },
  ];

  return (
    <section id="process" className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5 pointer-events-none"
        style={{
          background: "conic-gradient(from 0deg, transparent, rgba(0,224,198,0.3), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionBadge>Proces</SectionBadge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Jak wygląda{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00E0C6, #2E90FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              współpraca
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.75)" }}>
            Przejrzysty proces w 4 krokach – od pomysłu do wdrożenia
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ number, title, description, index }: { number: string; title: string; description: string; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Connecting line */}
      {index < 3 && (
        <div
          className="absolute left-8 top-16 w-0.5 h-full transition-all duration-300"
          style={{
            background: isHovered
              ? "linear-gradient(to bottom, rgba(0,224,198,0.5), rgba(0,224,198,0.1))"
              : "rgba(255,255,255,0.08)",
          }}
        />
      )}

      <div className="flex gap-6 items-start">
        <motion.div
          className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 relative overflow-hidden"
          style={{
            background: isHovered ? "linear-gradient(135deg, #00E0C6, #2E90FA)" : "#182235",
            boxShadow: isHovered ? "0 0 30px rgba(0,224,198,0.3)" : "none",
          }}
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.3 }}
        >
          {/* Pulse effect on hover */}
          {isHovered && (
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute inset-0 rounded-xl"
              style={{
                border: "2px solid #00E0C6",
              }}
            />
          )}
          <span
            className="text-2xl font-bold transition-colors duration-300 relative z-10"
            style={{
              fontFamily: "var(--font-display)",
              color: isHovered ? "#0B1220" : "#00E0C6",
            }}
          >
            {number}
          </span>
        </motion.div>

        <motion.div
          className="flex-1 pt-2 p-6 rounded-xl transition-all duration-300"
          animate={{
            backgroundColor: isHovered ? "rgba(18, 26, 43, 0.5)" : "transparent",
          }}
        >
          <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
            {title}
          </h3>
          <p style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.75)", lineHeight: "1.7" }}>
            {description}
          </p>

          {/* Decorative arrow */}
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="h-5 w-5 text-[#00E0C6]" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export { ProcessSection };
