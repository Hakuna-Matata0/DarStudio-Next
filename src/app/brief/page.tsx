import { BriefPageClient } from "@/features/brief/brief-page-client";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Brief",
  description: "Wypełnij brief i opowiedz o swoim projekcie — odpowiem w ciągu 24 godzin.",
  alternates: { canonical: "/brief" },
  openGraph: {
    title: `Brief — ${siteConfig.brandName}`,
    description: "Wypełnij brief i opowiedz o swoim projekcie — odpowiem w ciągu 24 godzin.",
    url: "/brief",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: `${siteConfig.brandName}` }],
  },
};

export default function Page() {
  return <BriefPageClient />;
}
