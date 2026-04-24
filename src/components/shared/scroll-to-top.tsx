"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

type Props = {
  /**
   * Show button when user is within this many pixels
   * from the bottom of the page.
   */
  showWhenBottomDistancePx?: number;
  /**
   * When true, the button positions itself fixed
   * at bottom-right. When false, it renders inline
   * (useful for stacking with other floating actions).
   */
  fixed?: boolean;
};

export function ScrollToTop({ showWhenBottomDistancePx = 900, fixed = true }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const doc = document.documentElement;
      const total = doc.scrollHeight;
      const viewport = window.innerHeight;
      const distanceFromBottom = total - (scrollY + viewport);
      setIsVisible(distanceFromBottom <= showWhenBottomDistancePx);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [showWhenBottomDistancePx]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          aria-label="Wróć na górę"
          onClick={handleClick}
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={[
            fixed ? "fixed bottom-6 right-6 z-[60]" : "",
            "w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300",
          ].join(" ")}
          style={{
            backgroundColor: "#121A2B",
            borderColor: "rgba(255,255,255,0.10)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
          }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowUp className="h-5 w-5 text-[#00E0C6]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

