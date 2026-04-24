"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { Code2, Palette, Zap, CheckCircle2, ArrowRight, Mail, Facebook, Instagram, Star, Menu, X, Send, MapPin, Phone, Clock, FileText, Building2, Target, Shield, Plus, Minus } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { useState, useEffect, useRef } from "react";
import { LaptopIllustration } from "@/components/LaptopIllustration";
import { SectionBadge, GlowButton } from "@/components/shared/home-shared";
import { siteConfig } from "@/content/site-config";

function AboutSection() {
  // const stats = [
  //   { value: "50+", label: "Zrealizowanych projektów" },
  //   { value: "5+", label: "Lat doświadczenia" },
  //   { value: "98%", label: "Zadowolonych klientów" },
  // ];

  const values = [
    {
      icon: Target,
      title: "Skupienie na rezultatach",
      description: "Skupiam się na rezultatach biznesowych. Każdy element strony ma jasno określony cel — nie tworzę jedynie estetycznych projektów, ale rozwiązania, które realnie wspierają zwrot z inwestycji."
    },
    {
      icon: Zap,
      title: "Szybkość i transparentność",
      description: "Jasna komunikacja, realne terminy, żadnych ukrytych kosztów. Zawsze wiesz na jakim etapie jest projekt.",
    },
    {
      icon: Shield,
      title: "Jakość bez kompromisów",
      description: "Strony tworzone z myślą o przyszłości. Responsywność, wydajność i bezpieczeństwo to standard, nie dodatek.",
    },
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <SectionBadge>O mnie</SectionBadge>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Pasja do kodu,{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00E0C6, #2E90FA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                biznesowe podejście
              </span>
            </motion.h2>
            <div className="space-y-4 text-lg" style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.75)" }}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Specjalizuję się w tworzeniu nowoczesnych stron internetowych, które stanowią realne wsparcie dla biznesu. Każdy projekt łączy estetykę z funkcjonalnością, tworząc spójne i dopracowane doświadczenie użytkownika.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Każdy projekt opieram na analizie — od zrozumienia marki, przez strukturę treści, aż po doświadczenie użytkownika. Dzięki temu powstają strony, które nie tylko dobrze wyglądają, ale przede wszystkim działają i wspierają rozwój biznesu.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Współpracuję bezpośrednio z klientami, dbając o jasną komunikację i spójność na każdym etapie projektu. Moim celem jest tworzenie rozwiązań, które mają wartość nie tylko wizualną, ale przede wszystkim biznesową.
              </motion.p>
            </div>
          </motion.div>

          {/* Right side - Stats & Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/*
            // Stats Grid (do przywrócenia w przyszłości)
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="rounded-xl p-6 border backdrop-blur-sm relative overflow-hidden group hover:border-[#00E0C6]/30 transition-all duration-300"
                  style={{
                    backgroundColor: "#121A2B",
                    borderColor: "rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(circle at center, rgba(0,224,198,0.15), transparent)",
                    }}
                  />

                  <div className="relative z-10 text-center">
                    <motion.div
                      className="text-3xl md:text-4xl font-bold mb-2"
                      style={{
                        fontFamily: "var(--font-display)",
                        background: "linear-gradient(135deg, #00E0C6, #2E90FA)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 + idx * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div
                      className="text-xs opacity-75"
                      style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.75)" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            */}

            {/* Values Cards */}
            <div className="space-y-4">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                    className="rounded-xl p-6 border backdrop-blur-sm relative overflow-hidden group hover:border-[#00E0C6]/30 transition-all duration-300"
                    style={{
                      backgroundColor: "#121A2B",
                      borderColor: "rgba(255,255,255,0.08)",
                    }}
                  >
                    {/* Gradient overlay */}
                    <div
                      className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                      style={{
                        background: "radial-gradient(circle, rgba(0,224,198,0.6) 0%, transparent 70%)",
                      }}
                    />

                    <div className="flex items-start gap-4 relative z-10">
                      <div
                        className="p-3 rounded-lg"
                        style={{
                          background: "linear-gradient(135deg, rgba(0,224,198,0.1), rgba(46,144,250,0.1))",
                          border: "1px solid rgba(0,224,198,0.2)",
                        }}
                      >
                        <Icon className="w-5 h-5" style={{ color: "#00E0C6" }} />
                      </div>

                      <div className="flex-1">
                        <h4
                          className="font-bold mb-2"
                          style={{ fontFamily: "var(--font-display)", color: "rgba(230, 237, 246, 0.95)" }}
                        >
                          {value.title}
                        </h4>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.65)" }}
                        >
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { AboutSection };
