"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { Code2, Palette, Zap, CheckCircle2, ArrowRight, Mail, Facebook, Instagram, Star, Menu, X, Send, MapPin, Phone, Clock, FileText, Building2, Target, Shield, Plus, Minus } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { useState, useEffect, useRef } from "react";
import { LaptopIllustration } from "@/components/LaptopIllustration";
import { SectionBadge, GlowButton } from "@/components/shared/home-shared";
import { siteConfig } from "@/content/site-config";

function FAQSection() {
  const faqs = [
    {
      question: "Ile trwa realizacja projektu?",
      answer: "Czas realizacji zależy od złożoności projektu. Proste strony mogą powstać w ciągu 1–2 tygodni, natomiast bardziej rozbudowane realizacje zajmują zazwyczaj od 3 do 6 tygodni. Na początku współpracy ustalam dokładny harmonogram.",
    },
    {
      question: "Czy zapewniasz wsparcie po wdrożeniu?",
      answer: "Tak! Po każdym projekcie oferuję okres wsparcia technicznego. Mogę też zostać Twoim developerem na stałe w modelu współpracy miesięcznej.",
    },
    {
      question: "Czy strona będzie działać na telefonach?",
      answer: "Tak — każda strona jest w pełni responsywna i dostosowana do urządzeń mobilnych, tabletów oraz różnych przeglądarek.",
    },
    {
      question: "Czy strona będzie szybka i zoptymalizowana?",
      answer: "Tak — dbam o wydajność, optymalizację oraz dobre praktyki techniczne, aby strona ładowała się szybko i działała sprawnie.",
    },
    {
      question: "Czy mogę rozwijać stronę w przyszłości?",
      answer: "Oczywiście. Strona może być rozbudowywana o nowe funkcjonalności, podstrony czy integracje w miarę rozwoju Twojego biznesu.",
    },
    {
      question: "Jak zaczynamy współpracę?",
      answer: "Wystarczy, że się ze mną skontaktujesz. Na początku omawiamy Twoje potrzeby, a następnie przygotowuję propozycję i wycenę projektu."
    },
    
  ];

  return (
    <section id="faq" className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,224,198,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionBadge>FAQ</SectionBadge>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Najczęściej zadawane pytania
          </h2>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} value={`item-${index}`} />
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, value }: { question: string; answer: string; value: string }) {
  return (
    <Accordion.Item value={value} className="group">
      <Accordion.Header>
        <Accordion.Trigger
          className="w-full flex justify-between items-center p-6 rounded-2xl border transition-all duration-300 hover:border-[rgba(0,224,198,0.3)] data-[state=open]:border-[rgba(0,224,198,0.3)] data-[state=open]:bg-[#182235] relative overflow-hidden"
          style={{
            backgroundColor: "#121A2B",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          {/* Glow effect on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 50% 0%, rgba(0,224,198,0.1), transparent 70%)",
            }}
          />

          <span className="text-left font-bold relative z-10" style={{ fontFamily: "var(--font-display)" }}>
            {question}
          </span>

          {/* Animated icon container */}
          <div className="relative w-10 h-10 flex-shrink-0 ml-4 rounded-lg flex items-center justify-center transition-all duration-300 group-data-[state=open]:bg-[#00E0C6]" style={{ backgroundColor: "rgba(0,224,198,0.1)" }}>
            <Plus className="absolute h-5 w-5 transition-all duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0 text-[#00E0C6] group-data-[state=open]:text-[#0B1220]" />
            <Minus className="absolute h-5 w-5 transition-all duration-300 group-data-[state=closed]:rotate-90 group-data-[state=closed]:opacity-0 text-[#0B1220]" />
          </div>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
        <div className="relative mt-2 mx-2 mb-2 rounded-xl overflow-hidden border" style={{ borderColor: "rgba(0,224,198,0.2)" }}>
          {/* Multi-layer background */}
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(18, 26, 43, 0.6)" }} />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: "linear-gradient(135deg, rgba(0,224,198,0.1) 0%, rgba(46,144,250,0.1) 100%)",
            }}
          />

          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(0,224,198,0.3) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Glow effect in corner */}
          <div
            className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-30"
            style={{
              background: "radial-gradient(circle, rgba(0,224,198,0.4) 0%, transparent 70%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 px-6 py-5" style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.85)", lineHeight: "1.8" }}>
            {answer}
          </div>
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}

export { FAQSection };
