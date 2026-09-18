import type { Metadata } from "next";
import { categories, isLocale, type Locale } from "@/lib/site";
import { t } from "@/lib/i18n";
import { toolsByCategory } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";
import BackLink from "@/components/BackLink";

export function generateStaticParams() {
  const locales = ["zh", "en"];
  const cats = categories.map((c) => c.id);
  return locales.flatMap((locale) =>
    cats.map((category) => ({ locale, category })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale: raw, category } = await params;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const cat = categories.find((c) => c.id === category);
  const name = cat ? (locale === "zh" ? cat.zh : cat.en) : category;
  return { title: name };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale: raw, category } = await params;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const d = t(locale);
  const cat = categories.find((c) => c.id === category);
  const list = toolsByCategory(category);

  return (
    <main className="shell flex-1 py-10">
      <BackLink locale={locale} />
      <h1 className="mt-2 text-2xl font-black">
        {cat ? (locale === "zh" ? cat.zh : cat.en) : category}
      </h1>
      <p className="mt-1 text-sm text-zinc-500">{d.toolsCount(list.length)}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} locale={locale} />
        ))}
      </div>
    </main>
  );
}
