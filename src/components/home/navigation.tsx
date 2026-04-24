
"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Mail, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site-config";

const navItems = [
  { label: "Start", href: "#hero" },
  { label: "O mnie", href: "#about" },
  { label: "Usługi", href: "#services" },
  { label: "Proces", href: "#process" },
  // { label: "Realizacje", href: "/realizacje", isExternal: true },
  // { label: "Opinie", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#contact" },
  { label: "Brief", href: "/brief", isExternal: true },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (!element) return;
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(11, 18, 32, 0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleAnchorClick("#hero")}
              className="flex items-center gap-3 text-2xl font-bold cursor-pointer"
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              <img src="/logo.svg" alt={`${siteConfig.brandName} logo`} className="h-8 w-8 shrink-0" />
              <span
                style={{
                  background: "linear-gradient(135deg, #00E0C6, #2E90FA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {siteConfig.brandName}
              </span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) =>
                item.isExternal ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium transition-colors duration-300 text-[rgba(230,237,246,0.75)] hover:text-[#00E0C6] cursor-pointer"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleAnchorClick(item.href)}
                    className="text-sm font-medium transition-colors duration-300 text-[rgba(230,237,246,0.75)] hover:text-[#00E0C6] cursor-pointer"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.label}
                  </button>
                ),
              )}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border transition-all duration-300 hover:border-[rgba(0,224,198,0.3)]"
              style={{ backgroundColor: "#121A2B", borderColor: "rgba(255,255,255,0.08)" }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="fixed inset-0 z-50 md:hidden" style={{ backgroundColor: "#0B1220" }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1.5, opacity: 0.3 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(0,224,198,0.3) 0%, transparent 70%)" }} />
            </div>
            <div className="relative h-full flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-[rgba(255,255,255,0.08)]">
                <div className="flex items-center gap-3">
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
                </div>
                <button onClick={() => setIsOpen(false)} className="w-12 h-12 flex items-center justify-center rounded-xl border transition-all duration-300" style={{ backgroundColor: "#182235", borderColor: "rgba(255,255,255,0.08)" }}>
                  <X className="h-6 w-6 text-[#00E0C6]" />
                </button>
              </div>
              <nav className="flex-1 flex items-center justify-center p-8">
                <div className="space-y-2 w-full max-w-md">
                  {navItems.map((item, index) => (
                    item.isExternal ? (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block w-full rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(0,224,198,0.3)] cursor-pointer"
                        style={{ backgroundColor: "rgba(18,26,43,0.7)", borderColor: "rgba(255,255,255,0.08)" }}
                      >
                        <span className="text-lg font-semibold">{item.label}</span>
                      </Link>
                    ) : (
                      <motion.button
                        key={item.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleAnchorClick(item.href)}
                        className="block w-full rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(0,224,198,0.3)] cursor-pointer"
                        style={{ backgroundColor: "rgba(18,26,43,0.7)", borderColor: "rgba(255,255,255,0.08)" }}
                      >
                        <span className="text-lg font-semibold">{item.label}</span>
                      </motion.button>
                    )
                  ))}
                </div>
              </nav>
              <div className="p-8 space-y-4">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center justify-center gap-2 w-full px-8 py-4 rounded-xl font-bold" style={{ fontFamily: "var(--font-body)", background: "linear-gradient(135deg, #00E0C6, #2E90FA)", color: "#0B1220" }}>
                  <Mail className="w-5 h-5" />
                  <span>Napisz wiadomość</span>
                </a>
                <div className="flex justify-center gap-4">
                  <a href={siteConfig.social.facebook} className="w-12 h-12 rounded-full border flex items-center justify-center" style={{ borderColor: "rgba(255,255,255,0.08)" }}><Facebook className="w-5 h-5" /></a>
                  <a href={siteConfig.social.instagram} className="w-12 h-12 rounded-full border flex items-center justify-center" style={{ borderColor: "rgba(255,255,255,0.08)" }}><Instagram className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
