"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { Code2, Palette, Zap, CheckCircle2, ArrowRight, Mail, Facebook, Instagram, Star, Menu, X, Send, MapPin, Phone, Clock, FileText, Building2, Target, Shield, Plus, Minus } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { useState, useEffect, useRef } from "react";
import { LaptopIllustration } from "@/components/LaptopIllustration";
import { SectionBadge, GlowButton } from "@/components/shared/home-shared";
import { siteConfig } from "@/content/site-config";

function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-0 md:min-h-screen flex items-start md:items-center justify-center px-6 pt-32 pb-10 md:py-20 relative overflow-hidden"
    >

      {/* 3D Visual Element - Right Side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden xl:block pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative w-full h-full flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          {/* Main visual card */}
          <motion.div
            animate={{
              rotateY: [0, 5, 0, -5, 0],
              rotateX: [0, 2, 0, -2, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[500px] h-[600px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 rounded-3xl blur-3xl opacity-40"
              style={{
                background: "linear-gradient(135deg, rgba(0,224,198,0.4), rgba(46,144,250,0.4))",
              }}
            />

            {/* Modern Laptop Mockup */}
            <motion.div
              className="relative w-full h-full rounded-3xl overflow-hidden"
              style={{
                backgroundColor: "transparent",
              }}
            >
              {/* Laptop body */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Screen bezel */}
                <div
                  className="relative w-[90%] h-[75%] rounded-2xl overflow-hidden border-8"
                  style={{
                    backgroundColor: "#0A0F1A",
                    borderColor: "#1A2332",
                    boxShadow: "0 25px 70px rgba(0,224,198,0.25), inset 0 0 60px rgba(0,224,198,0.1)",
                  }}
                >
                  {/* Screen content - Vector Illustration */}
                  <div className="relative w-full h-full overflow-hidden flex items-center justify-center p-8">
                    <LaptopIllustration />
                  </div>

                  {/* Webcam notch */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 rounded-b-xl"
                    style={{
                      backgroundColor: "#0A0F1A",
                    }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-700" />
                  </div>
                </div>

                {/* Laptop base/keyboard */}
                <div
                  className="absolute bottom-0 w-full h-[12%] rounded-b-3xl"
                  style={{
                    background: "linear-gradient(180deg, #1A2332 0%, #0F1520 100%)",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  {/* Trackpad indicator */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-6 rounded-lg border"
                    style={{
                      backgroundColor: "rgba(18, 26, 43, 0.6)",
                      borderColor: "rgba(0, 224, 198, 0.1)",
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating elements around the laptop */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-8 -left-8 w-24 h-24 rounded-2xl border backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(18, 26, 43, 0.6)",
                borderColor: "rgba(0, 224, 198, 0.3)",
                boxShadow: "0 10px 30px rgba(0,224,198,0.2)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <Palette className="w-12 h-12 text-[#00E0C6]" />
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -right-6 w-20 h-20 rounded-xl border backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(18, 26, 43, 0.6)",
                borderColor: "rgba(46, 144, 250, 0.3)",
                boxShadow: "0 10px 30px rgba(46,144,250,0.2)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <Zap className="w-10 h-10 text-[#2E90FA]" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[#121A2B] backdrop-blur-sm relative overflow-hidden group">
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(0,224,198,0.1), transparent)",
              }}
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <span className="text-sm relative z-10" style={{ fontFamily: "var(--font-body)" }}>
              <span className="text-[#00E0C6]">Strony Internetowe dla Firm</span>
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-6 space-y-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="block text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            Strony Internetowe,
          </span>
          <motion.span
            className="block text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight leading-[1.1] relative inline-block"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: "linear-gradient(135deg, #00E0C6, #2E90FA, #00E0C6)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            które zamieniają odwiedzających w klientów
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed"
          style={{
            fontFamily: "var(--font-body)",
            color: "rgba(230, 237, 246, 0.75)",
          }}
        >
          Tworzę nowoczesne strony internetowe oparte na strategii i doświadczeniu użytkownika. Każdy element jest zaprojektowany tak, aby maksymalnie wykorzystać potencjał Twojej obecności online i skutecznie zamieniać ruch w klientów.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-6 md:mb-16"
        >
          <GlowButton href="#contact" primary className="w-full sm:w-auto">
            Porozmawiajmy o projekcie
            <ArrowRight className="ml-2 h-5 w-5" />
          </GlowButton>
          <GlowButton href="#services" className="w-full sm:w-auto">
            Usługi
          </GlowButton>
        </motion.div>

          </div>

          {/* Right side - Visual for mobile/tablet (xl hides this, shows absolute positioned one) */}
          <div className="xl:hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative w-full max-w-md mx-auto aspect-[4/5]"
            >
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-40"
                style={{
                  background: "linear-gradient(135deg, rgba(0,224,198,0.4), rgba(46,144,250,0.4))",
                }}
              />
              {/* Vector illustration for mobile */}
              <div className="relative w-full h-full flex items-center justify-center p-3 md:p-4">
                <LaptopIllustration />
              </div>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-[rgba(255,255,255,0.2)] flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[#00E0C6]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export { HeroSection };
