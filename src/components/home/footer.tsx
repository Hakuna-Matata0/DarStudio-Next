"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { Code2, Palette, Zap, CheckCircle2, ArrowRight, Mail, Facebook, Instagram, Star, Menu, X, Send, MapPin, Phone, Clock, FileText, Building2, Target, Shield, Plus, Minus } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { useState, useEffect, useRef } from "react";
import { LaptopIllustration } from "@/components/LaptopIllustration";
import { SectionBadge, GlowButton } from "@/components/shared/home-shared";
import { siteConfig } from "@/content/site-config";

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-8">
          {/* Top row - Logo and Social */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <a href="#hero" className="inline-flex items-center gap-3 mb-2">
                <img src="/logo.svg" alt={`${siteConfig.brandName} logo`} className="h-8 w-8 shrink-0" />
                <span
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "var(--font-display)",
                    background: "linear-gradient(135deg, #00E0C6, #2E90FA)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {siteConfig.brandName}
                </span>
              </a>
              <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "rgba(230, 237, 246, 0.55)" }}>
                © 2026 Wszelkie prawa zastrzeżone
              </p>
            </div>

            <div className="flex gap-4">
              <SocialLink href={siteConfig.social.facebook} icon={Facebook} label="Facebook" />
              <SocialLink href={siteConfig.social.instagram} icon={Instagram} label="Instagram" />
            </div>
          </div>

          {/* Bottom row - Footer Menu */}
          <div className="flex justify-center gap-6 pt-6 border-t border-[rgba(255,255,255,0.08)]">
            <a
              href="/polityka-prywatnosci"
              className="text-sm transition-colors duration-300 text-[rgba(230,237,246,0.75)] hover:text-[#00E0C6] cursor-pointer"
              style={{
                fontFamily: "var(--font-body)",
              }}
            >
              Polityka prywatności
            </a>
            <a
              href="/brief"
              className="text-sm transition-colors duration-300 text-[rgba(230,237,246,0.75)] hover:text-[#00E0C6] cursor-pointer"
              style={{
                fontFamily: "var(--font-body)",
              }}
            >
              Brief
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300"
      style={{
        backgroundColor: isHovered ? "#182235" : "#121A2B",
        borderColor: isHovered ? "rgba(0,224,198,0.3)" : "rgba(255,255,255,0.08)",
      }}
    >
      <Icon className={`h-5 w-5 transition-colors duration-300 ${isHovered ? "text-[#00E0C6]" : "text-[rgba(230,237,246,0.75)]"}`} />
    </a>
  );
}

export { Footer };
