import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/site";
import { t } from "@/lib/i18n";
import { localizedPath } from "@/lib/paths";
import { toolIcon, type Tool } from "@/lib/tools";
import { getTutorial } from "@/lib/tutorials";
import ArrowRight from "@/components/ArrowRight";

export function ToolCard({ tool, locale }: { tool: Tool; locale: Locale }) {
  const d = t(locale);
  const tagline = locale === "zh" ? tool.taglineZh : tool.taglineEn;
  const hasTutorial = Boolean(getTutorial(tool.slug, locale));
  return (
    <Link
      href={localizedPath(locale, `/tool/${tool.slug}`)}
      className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 transition-shadow hover:shadow-lg"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white">
          <Image
            src={toolIcon(tool.slug)}
            alt={tool.name}
            width={44}
            height={44}
            className="h-7 w-7 object-contain"
          />
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
          <h3 className="truncate text-lg font-bold group-hover:text-zinc-600">
            {tool.name}
          </h3>
          <span
            className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
              tool.region === "domestic"
                ? "bg-emerald-50 text-emerald-700"
                : tool.region === "global"
                  ? "bg-amber-50 text-amber-700"
                  : "bg-sky-50 text-sky-700"
            }`}
          >
            {d[tool.region]}
          </span>
        </div>
      </div>
      <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">{tagline}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {(tool.ccSwitch || tool.companionCli) && (
          <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-xs font-medium text-white">
            {d.ccSwitchBadge}
          </span>
        )}
        {tool.tags.slice(0, tool.ccSwitch || tool.companionCli ? 2 : 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-zinc-900">
        {d.viewTutorial}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
      {hasTutorial && (
        <span className="mt-2 text-xs font-medium text-emerald-600">
          ✓ {d.detailed}
        </span>
      )}
    </Link>
  );
}
