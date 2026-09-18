import { Suspense } from "react";
import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/site";
import { t } from "@/lib/i18n";
import { searchTools } from "@/lib/search";
import { featuredTools } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";
import BackLink from "@/components/BackLink";
import SearchBox from "@/components/SearchBox";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { q = "" } = await searchParams;
  return { title: q ? q : undefined };
}

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { locale: raw } = await params;
  const { q = "" } = await searchParams;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const d = t(locale);
  const kw = q.trim();
  const list = kw ? searchTools(kw, locale) : [];

  return (
    <main className="shell flex-1 py-10">
      <BackLink locale={locale} />
      <h1 className="mt-2 text-2xl font-black">
        {kw ? `${d.search}：${kw}` : d.search}
      </h1>
      <div className="mt-4 max-w-xl">
        <Suspense
          fallback={<div className="h-12 rounded-full border border-zinc-200" />}
        >
          <SearchBox locale={locale} tone="page" />
        </Suspense>
      </div>
      {kw ? (
        <p className="mt-1 text-sm text-zinc-500">{d.toolsCount(list.length)}</p>
      ) : (
        <p className="mt-1 text-sm text-zinc-500">{d.searchAllHint}</p>
      )}
      {!kw ? (
        <p className="mt-6 text-zinc-500">{d.searchEmpty}</p>
      ) : list.length === 0 ? (
        <>
          <p className="mt-6 text-zinc-500">{d.noResult}</p>
          <h2 className="mt-10 text-lg font-bold">{d.featured}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTools.slice(0, 6).map((tool) => (
              <ToolCard key={tool.slug} tool={tool} locale={locale} />
            ))}
          </div>
        </>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} locale={locale} />
          ))}
        </div>
      )}
    </main>
  );
}
