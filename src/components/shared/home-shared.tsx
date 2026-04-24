
"use client";

import Link from "next/link";
import { useState } from "react";

// Mały badge używany nad nagłówkami sekcji.
export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-block mb-6 px-4 py-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[#121A2B] backdrop-blur-sm">
      <span className="text-sm font-medium" style={{ fontFamily: "var(--font-body)", color: "#00E0C6" }}>
        {children}
      </span>
    </div>
  );
}

// Przyciski z efektem poświaty, wykorzystywane w wielu sekcjach.
export function GlowButton({
  href,
  children,
  primary = false,
  large = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  large?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isInternal = href.startsWith("/");
  const className = `inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 ${large ? "px-8 py-4 text-lg" : "px-6 py-3"}`;
  const style = {
    fontFamily: "var(--font-body)",
    background: primary
      ? isHovered
        ? "linear-gradient(135deg, #1AF0D4, #2E90FA)"
        : "linear-gradient(135deg, #00E0C6, #2E90FA)"
      : isHovered
      ? "#182235"
      : "#121A2B",
    color: primary ? "#0B1220" : "#E6EDF6",
    border: primary ? "none" : "1px solid rgba(255,255,255,0.08)",
    boxShadow: primary && isHovered ? "0 0 40px rgba(0,224,198,0.4)" : "none",
  } as const;

  if (isInternal) {
    return (
      <Link href={href} className={className} style={style} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} style={style} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {children}
    </a>
  );
}
