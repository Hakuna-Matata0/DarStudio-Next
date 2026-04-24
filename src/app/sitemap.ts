import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { projectsData } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.siteUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.siteUrl}/brief`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.siteUrl}/realizacje`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.siteUrl}/polityka-prywatnosci`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.siteUrl}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projectsData.map((p) => ({
    url: `${siteConfig.siteUrl}/realizacje/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}

