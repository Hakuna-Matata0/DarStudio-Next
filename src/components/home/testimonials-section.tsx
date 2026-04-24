"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { Code2, Palette, Zap, CheckCircle2, ArrowRight, Mail, Facebook, Instagram, Star, Menu, X, Send, MapPin, Phone, Clock, FileText, Building2, Target, Shield, Plus, Minus } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { useState, useEffect, useRef } from "react";
import { LaptopIllustration } from "@/components/LaptopIllustration";
import { SectionBadge, GlowButton } from "@/components/shared/home-shared";
import { siteConfig } from "@/content/site-config";

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Michał Kowalski",
      role: "CEO, TechStart",
      content: "Współpraca przebiegła bez zarzutu. Otrzymaliśmy nie tylko świetnie działający kod, ale też cenne uwagi biznesowe. Strona przekroczyła nasze oczekiwania pod kątem wydajności i UX.",
      rating: 5,
    },
    {
      name: "Anna Wiśniewska",
      role: "Marketing Manager, GrowthLab",
      content: "Profesjonalizm na najwyższym poziomie. Terminowość, komunikacja i jakość kodu – wszystko 10/10. Nasza konwersja wzrosła o 40% po wdrożeniu nowej strony.",
      rating: 5,
    },
    {
      name: "Piotr Nowak",
      role: "Founder, FinFlow",
      content: "To była najlepsza decyzja technologiczna w historii naszego startupu. Otrzymaliśmy skalowalną platformę, która rośnie razem z nami. Gorąco polecam!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionBadge>Opinie</SectionBadge>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Co mówią klienci
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, content, rating, index }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

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
      initial={{ opacity: 0, y: 50, rotateY: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02, y: -5 }}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="p-8 rounded-2xl border h-full flex flex-col transition-all duration-300 relative overflow-hidden"
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
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,224,198,0.08), transparent 50%)`,
            }}
          />
        )}

        {/* Animated gradient border effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          animate={{
            background: isHovered
              ? [
                  "linear-gradient(0deg, rgba(0,224,198,0.1), rgba(46,144,250,0.1))",
                  "linear-gradient(360deg, rgba(0,224,198,0.1), rgba(46,144,250,0.1))",
                ]
              : "transparent",
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Quote mark decoration */}
        <motion.div
          className="absolute -top-4 -right-4 text-9xl opacity-5 pointer-events-none select-none z-0"
          animate={{ rotate: isHovered ? 10 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            fontFamily: "var(--font-display)",
            color: "#00E0C6",
          }}
        >
          "
        </motion.div>

        <div className="flex gap-1 mb-4 relative z-10">
          {[...Array(rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
            >
              <Star className="h-5 w-5 fill-[#00E0C6] text-[#00E0C6]" />
            </motion.div>
          ))}
        </div>
        <p className="mb-6 flex-1 relative z-10" style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.75)", lineHeight: "1.7" }}>
          "{content}"
        </p>
        <div className="relative z-10">
          <div className="font-bold" style={{ fontFamily: "var(--font-display)" }}>
            {name}
          </div>
          <div className="text-sm" style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.55)" }}>
            {role}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export { TestimonialsSection };
