import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { tools, getTool } from "@/lib/tools";
import { getTutorial } from "@/lib/tutorials";
import ToolView from "@/components/ToolView";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return {
    title: tool.name,
    description: tool.taglineZh,
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  return (
    <ToolView
      tool={tool}
      tutorialZh={getTutorial(tool.slug, "zh")}
      tutorialEn={getTutorial(tool.slug, "en")}
    />
  );
}
