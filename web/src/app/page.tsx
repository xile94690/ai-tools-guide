"use client";

import { Suspense } from "react";
import Link from "next/link";
import { categories } from "@/lib/site";
import { t } from "@/lib/i18n";
import { localizedPath } from "@/lib/paths";
import { tools, featuredTools } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";
import SearchBox from "@/components/SearchBox";
import TypewriterTitle from "@/components/TypewriterTitle";
import { useLocale } from "@/components/LocaleProvider";

export default function HomePage() {
  const { locale } = useLocale();
  const d = t(locale);

  return (
    <div className="flex flex-1 flex-col">
      <section className="home-hero">
        <div className="shell py-14 text-center">
          <TypewriterTitle text={d.siteName} />
          <p className="mx-auto mt-3 max-w-xl text-zinc-500">{d.tagline}</p>
          <div className="mx-auto mt-6 max-w-xl">
            <Suspense
              fallback={
                <div className="h-12 rounded-full border border-zinc-200 bg-white" />
              }
            >
              <SearchBox locale={locale} tone="page" />
            </Suspense>
          </div>
        </div>
      </section>

      <main className="shell flex-1 py-10">
        <h2 className="text-lg font-bold">{d.categories}</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => {
            const count = tools.filter((x) => x.category === c.id).length;
            return (
              <Link
                key={c.id}
                href={localizedPath(locale, `/category/${c.id}`)}
                className="rounded-2xl border border-zinc-200 bg-white p-4 text-center transition-shadow hover:shadow-md"
              >
                <div className="font-semibold">{locale === "zh" ? c.zh : c.en}</div>
                <div className="mt-1 text-xs text-zinc-500">
                  {d.toolsCount(count)}
                </div>
              </Link>
            );
          })}
        </div>

        <h2 className="mt-10 text-lg font-bold">{d.featured}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} locale={locale} />
          ))}
        </div>

        <h2 className="mt-10 text-lg font-bold">{d.allTools}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} locale={locale} />
          ))}
        </div>
      </main>
    </div>
  );
}
