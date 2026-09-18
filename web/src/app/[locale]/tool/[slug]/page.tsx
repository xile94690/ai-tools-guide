import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { catalogVerified, isLocale, type Locale } from "@/lib/site";
import { t } from "@/lib/i18n";
import { tools, getTool, toolIcon, type Tool } from "@/lib/tools";
import { getTutorial } from "@/lib/tutorials";
import BackLink from "@/components/BackLink";
import ArrowRight from "@/components/ArrowRight";
import Tutorial from "@/components/Tutorial";
import LoginPaths from "@/components/LoginPaths";
import RelatedTools from "@/components/RelatedTools";
import {
  IconCheck,
  IconDownload,
  IconFile,
  IconHelp,
  IconSparkle,
  SectionTitle,
} from "@/components/Icons";

const regionStyles: Record<Tool["region"], string> = {
  domestic: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
  global: "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
  both: "bg-sky-50 text-sky-700 ring-1 ring-sky-100",
};

export function generateStaticParams() {
  return ["zh", "en"].flatMap((locale) =>
    tools.map((tool) => ({ locale, slug: tool.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const tool = getTool(slug);
  if (!tool) return {};
  const tagline = locale === "zh" ? tool.taglineZh : tool.taglineEn;
  return { title: tool.name, description: tagline };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const d = t(locale);
  const tool = getTool(slug);
  if (!tool) notFound();

  const desc = locale === "zh" ? tool.descZh : tool.descEn;
  const install = locale === "zh" ? tool.installZh : tool.installEn;
  const usage = locale === "zh" ? tool.usageZh : tool.usageEn;
  const faq = locale === "zh" ? tool.faqZh : tool.faqEn;
  const pricing = locale === "zh" ? tool.pricingZh : tool.pricingEn;
  const tagline = locale === "zh" ? tool.taglineZh : tool.taglineEn;
  const tutorial = getTutorial(tool.slug, locale);

  return (
    <div className="flex flex-1 flex-col">
      <main className="shell flex-1 py-10">
        <BackLink locale={locale} />

        <section className="relative mt-4 overflow-hidden rounded-3xl border border-zinc-200 bg-white px-5 py-7 sm:px-10 sm:py-8">
          <div className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full bg-gradient-to-br from-violet-200/60 to-fuchsia-100/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-sky-200/60 to-cyan-100/50 blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm">
                <Image
                  src={toolIcon(tool.slug)}
                  alt={tool.name}
                  width={64}
                  height={64}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h1 className="text-3xl font-black tracking-tight text-zinc-900">
                    {tool.name}
                  </h1>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${regionStyles[tool.region]}`}
                  >
                    {d[tool.region]}
                  </span>
                  {(tool.ccSwitch || tool.companionCli) && (
                    <span className="rounded-full bg-zinc-900 px-2.5 py-1 text-xs font-medium text-white">
                      {d.ccSwitchBadge}
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-sm text-zinc-500">{tagline}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {tool.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={tool.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-zinc-700"
              >
                {d.officialSite}
                <ArrowRight />
              </a>
              <span className="rounded-full bg-zinc-100 px-4 py-2.5 text-sm text-zinc-600">
                <span className="text-zinc-400">{d.pricing}：</span>
                {pricing}
              </span>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6">
          <SectionTitle icon={IconFile} size="md">
            {d.intro}
          </SectionTitle>
          <p className="mt-2 leading-7 text-zinc-700">{desc}</p>
        </section>

        <LoginPaths
          tool={tool}
          locale={locale}
          installAnchor={
            tutorial?.cli?.length ? "cli" : tutorial?.desktop?.length ? "desktop" : "cli"
          }
        />

        {tutorial ? (
          <Tutorial
            data={tutorial}
            locale={locale}
            toolName={tool.name}
            toolRegion={tool.region}
            website={tool.website}
          />
        ) : (
          <>
            <section className="mt-4 rounded-2xl border border-zinc-200 bg-white p-6">
              <SectionTitle icon={IconDownload} size="md">
                {d.install}
              </SectionTitle>
              <ol className="mt-3 space-y-2.5">
                {install.map((step, i) => (
                  <li key={i} className="flex gap-3 leading-7 text-zinc-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-4 rounded-2xl border border-zinc-200 bg-white p-6">
              <SectionTitle icon={IconSparkle} size="md">
                {d.usage}
              </SectionTitle>
              <ul className="mt-3 space-y-2.5">
                {usage.map((u, i) => (
                  <li key={i} className="flex gap-2 leading-7 text-zinc-700">
                    <IconCheck className="mt-1 h-4 w-4 text-emerald-600" />
                    {u}
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}

        <section className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6">
          <SectionTitle icon={IconHelp} size="md">
            {d.faq}
          </SectionTitle>
          <div className="mt-3 space-y-4">
            {faq.map((f, i) => (
              <div key={i}>
                <p className="font-bold text-zinc-900">Q：{f.q}</p>
                <p className="mt-1 leading-7 text-zinc-700">A：{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-8 text-xs leading-5 text-zinc-400">
          {d.verified} {catalogVerified} · {d.staleHint}
        </p>

        <RelatedTools tool={tool} locale={locale} />
      </main>
    </div>
  );
}
