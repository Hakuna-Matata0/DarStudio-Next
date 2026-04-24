
"use client";

import { motion } from "motion/react";
import { Navigation } from "@/components/home/navigation";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { ServicesSection } from "@/components/home/services-section";
import { ProcessSection } from "@/components/home/process-section";
import { PortfolioSection } from "@/components/home/portfolio-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FAQSection } from "@/components/home/faq-section";
import { CTASection } from "@/components/home/cta-section";
import { Footer } from "@/components/home/footer";
import { SiteBackground } from "@/components/shared/site-background";

// Główny komponent strony głównej. Tu tylko składamy sekcje.
export function HomePageClient() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF6] overflow-x-hidden relative">
      <SiteBackground />

      {/* Dodatkowe animowane poświaty w tle */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] opacity-20" animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} style={{ background: "radial-gradient(circle, rgba(0,224,198,0.2) 0%, transparent 70%)" }} />
        <motion.div className="absolute bottom-0 right-0 w-[800px] h-[800px] opacity-15" animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }} style={{ background: "radial-gradient(circle, rgba(46,144,250,0.25) 0%, transparent 70%)" }} />
      </div>

      <Navigation />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        {/* <PortfolioSection /> */}
        {/* <TestimonialsSection /> */}
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}
