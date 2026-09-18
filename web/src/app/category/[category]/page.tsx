import type { Metadata } from "next";
import { categories } from "@/lib/site";
import CategoryView from "@/components/CategoryView";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.id === category);
  return { title: cat ? cat.zh : category };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  return <CategoryView category={category} />;
}
