
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { RealizationDetailClient } from "@/features/realizations/realization-detail-client";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Realizacja",
      alternates: { canonical: "/realizacje" },
      robots: { index: false, follow: false },
    };
  }

  const title = project.title;
  const description = project.description;

  return {
    title,
    description,
    alternates: { canonical: `/realizacje/${project.slug}` },
    openGraph: {
      title: `${title} — ${siteConfig.brandName}`,
      description,
      url: `/realizacje/${project.slug}`,
      type: "article",
      images: project.image
        ? [{ url: project.image, alt: title }]
        : [{ url: "/og.svg", width: 1200, height: 630, alt: `${siteConfig.brandName}` }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <RealizationDetailClient project={project} />;
}
