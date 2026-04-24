import { RealizationsPageClient } from "@/features/realizations/realizations-page-client";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Realizacje",
  description: "Wybrane realizacje i case studies — przykłady stron i aplikacji z naciskiem na UX, wydajność i konwersję.",
  alternates: { canonical: "/realizacje" },
  openGraph: {
    title: `Realizacje — ${siteConfig.brandName}`,
    description: "Wybrane realizacje i case studies — przykłady stron i aplikacji z naciskiem na UX, wydajność i konwersję.",
    url: "/realizacje",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: `${siteConfig.brandName}` }],
  },
};

export default function Page() {
  return <RealizationsPageClient />;
}
