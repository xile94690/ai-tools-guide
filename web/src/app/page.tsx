"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { categories } from "@/lib/site";
import { t } from "@/lib/i18n";
import { localizedPath } from "@/lib/paths";
import {
  tools,
  toolsByRegionFilter,
  type RegionFilter,
} from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";
import SearchBox from "@/components/SearchBox";
import TypewriterTitle from "@/components/TypewriterTitle";
import { useLocale } from "@/components/LocaleProvider";

export default function HomePage() {
  const { locale } = useLocale();
  const d = t(locale);
  const [region, setRegion] = useState<RegionFilter>("all");
  const list = toolsByRegionFilter(region);
  const listTitle =
    region === "all" ? d.featured : region === "domestic" ? d.domestic : d.global;

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

        <div className="mt-10 flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-lg font-bold">{listTitle}</h2>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label={d.filterRegion}
          >
            {(
              [
                ["all", d.filterAll],
                ["domestic", d.domestic],
                ["global", d.global],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setRegion(id)}
                className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                  region === id
                    ? "bg-zinc-900 text-white"
                    : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-1 text-sm text-zinc-500">{d.toolsCount(list.length)}</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} locale={locale} />
          ))}
        </div>
      </main>
    </div>
  );
}
