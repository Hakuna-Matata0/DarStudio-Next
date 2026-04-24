
import type { Metadata } from "next";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { siteConfig } from "@/content/site-config";
import { SideActions } from "@/components/shared/side-actions";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.brandName} — ${siteConfig.defaultTitle}`,
    template: `%s — ${siteConfig.brandName}`,
  },
  description: siteConfig.defaultDescription,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    siteName: siteConfig.brandName,
    title: `${siteConfig.brandName} — ${siteConfig.defaultTitle}`,
    description: siteConfig.defaultDescription,
    locale: "pl_PL",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.brandName} — ${siteConfig.defaultTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} — ${siteConfig.defaultTitle}`,
    description: siteConfig.defaultDescription,
    images: ["/og.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const hasRealPhone = siteConfig.phone && !siteConfig.phone.includes("123 456 789");
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.brandName,
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    ...(hasRealPhone ? { telephone: siteConfig.phone } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.legal.address.streetAddress,
      postalCode: siteConfig.legal.address.postalCode,
      addressLocality: siteConfig.legal.address.addressLocality,
      addressCountry: siteConfig.legal.address.addressCountry,
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram].filter(Boolean),
  } as const;

  return (
    <html lang="pl">
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="794d7735-9c6c-43a8-9e67-765086a3fc62"
          data-blockingmode="auto"
          type="text/javascript"
          strategy="beforeInteractive"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        {children}
        <SideActions />
        <SpeedInsights />
      </body>
    </html>
  );
}
