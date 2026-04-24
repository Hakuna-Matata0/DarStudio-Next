
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { RealizationDetailClient } from "@/features/realizations/realization-detail-client";

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return <RealizationDetailClient project={project} />;
}
