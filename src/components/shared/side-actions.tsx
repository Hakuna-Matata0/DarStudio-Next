"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { FileText } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { ScrollToTop } from "@/components/shared/scroll-to-top";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.53c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.31.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.61-1.47-.84-2.01-.22-.53-.45-.45-.61-.46h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27s.97 2.63 1.1 2.82c.13.18 1.9 2.9 4.6 4.07.64.28 1.15.45 1.54.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.82-1.28.22-.63.22-1.17.16-1.28-.06-.11-.24-.18-.5-.31Z" />
      <path d="M16 3C8.83 3 3 8.83 3 16c0 2.31.62 4.56 1.8 6.53L3 29l6.66-1.74A12.9 12.9 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16 3Zm0 23.5c-2.09 0-4.13-.56-5.91-1.62l-.42-.25-3.95 1.03 1.06-3.85-.27-.44A10.44 10.44 0 0 1 5.5 16C5.5 10.2 10.2 5.5 16 5.5S26.5 10.2 26.5 16 21.8 26.5 16 26.5Z" />
    </svg>
  );
}

function whatsappLinkFromPhone(phone: string) {
  const digits = phone.replace(/[^\d]/g, "");
  return digits ? `https://wa.me/${digits}` : "https://wa.me/";
}

export function SideActions() {
  const whatsappHref = whatsappLinkFromPhone(siteConfig.phone);

  const baseStyle: React.CSSProperties = {
    backgroundColor: "#121A2B",
    borderColor: "rgba(255,255,255,0.10)",
    boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
  };

  return (
    <div className="fixed right-6 bottom-6 z-[60] flex flex-col gap-3">
      <motion.a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Business"
        className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300"
        style={baseStyle}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <WhatsAppIcon className="h-5 w-5 text-[#00E0C6]" />
      </motion.a>

      <Link href="/brief" aria-label="Przejdź do briefu">
        <motion.div
          className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300"
          style={baseStyle}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <FileText className="h-5 w-5 text-[#00E0C6]" />
        </motion.div>
      </Link>

      <ScrollToTop fixed={false} />
    </div>
  );
}

