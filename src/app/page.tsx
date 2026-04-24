import { HomePageClient } from "@/components/home/home-page-client";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${siteConfig.brandName} — ${siteConfig.defaultTitle}`,
    description: siteConfig.defaultDescription,
    url: "/",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: `${siteConfig.brandName}` }],
  },
};

export default function Page() {
  return <HomePageClient />;
}
