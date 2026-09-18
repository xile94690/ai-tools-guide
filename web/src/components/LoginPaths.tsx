import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/site";
import { t } from "@/lib/i18n";
import { localizedPath } from "@/lib/paths";
import {
  CC_SWITCH_SLUG,
  ccSwitchTools,
  getTool,
  toolIcon,
  type Tool,
} from "@/lib/tools";
import { IconKey, IconTerminal, IconUser, SectionTitle } from "@/components/Icons";
import ArrowRight from "@/components/ArrowRight";

export default function LoginPaths({
  tool,
  locale,
  installAnchor,
}: {
  tool: Tool;
  locale: Locale;
  installAnchor?: "desktop" | "cli";
}) {
  const d = t(locale);

  if (tool.slug === CC_SWITCH_SLUG) {
    const apps = ccSwitchTools();
    return (
      <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6">
        <SectionTitle icon={IconKey} size="md">
          {d.ccSwitchApps}
        </SectionTitle>
        <p className="mt-2 text-sm leading-6 text-zinc-600">{d.ccSwitchAppsHint}</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {apps.map((app) => (
            <li key={app.slug}>
              <Link
                href={localizedPath(locale, `/tool/${app.slug}`)}
                className="flex items-center gap-3 rounded-xl border border-zinc-200 px-3 py-3 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
              >
                <Image
                  src={toolIcon(app.slug)}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
                <span className="min-w-0 flex-1">
                  <span className="block font-bold text-zinc-900">{app.name}</span>
                  <span className="block truncate text-xs text-zinc-500">
                    {locale === "zh" ? app.taglineZh : app.taglineEn}
                  </span>
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-700">
                  {d.seeToolGuide}
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (tool.companionCli) {
    const cli = getTool(tool.companionCli);
    if (!cli) return null;
    return (
      <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6">
        <SectionTitle icon={IconKey} size="md">
          {d.companionTitle}
        </SectionTitle>
        <p className="mt-2 text-sm leading-6 text-zinc-600">{d.companionHint}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <a
            href={`#${installAnchor ?? "desktop"}`}
            className="rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
          >
            <p className="flex items-center gap-2 font-bold text-zinc-900">
              <IconUser className="h-4 w-4" />
              {d.loginAccount}
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{d.loginAccountHint}</p>
            <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-zinc-900">
              {d.loginAccountCta}
              <ArrowRight className="h-3.5 w-3.5" />
            </p>
          </a>
          <Link
            href={localizedPath(locale, `/tool/${cli.slug}`)}
            className="rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
          >
            <p className="flex items-center gap-2 font-bold text-zinc-900">
              <IconTerminal className="h-4 w-4" />
              {cli.name}
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              {locale === "zh" ? cli.taglineZh : cli.taglineEn}
            </p>
            <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-zinc-900">
              {d.companionCliCta}
              <ArrowRight className="h-3.5 w-3.5" />
            </p>
          </Link>
          <Link
            href={localizedPath(locale, `/tool/${CC_SWITCH_SLUG}`)}
            className="rounded-xl border border-zinc-900 p-4 ring-1 ring-zinc-900 transition-colors hover:bg-zinc-50"
          >
            <p className="flex items-center gap-2 font-bold text-zinc-900">
              <IconKey className="h-4 w-4" />
              {d.loginApi}
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{d.loginApiHint}</p>
            <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-zinc-900">
              {d.loginApiCta}
              <ArrowRight className="h-3.5 w-3.5" />
            </p>
          </Link>
        </div>
      </section>
    );
  }

  if (!tool.ccSwitch) return null;

  return (
    <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6">
      <SectionTitle icon={IconKey} size="md">
        {d.loginPaths}
      </SectionTitle>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <a
          href={`#${installAnchor ?? "cli"}`}
          className="rounded-xl border border-zinc-200 p-4 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
        >
          <p className="flex items-center gap-2 font-bold text-zinc-900">
            <IconUser className="h-4 w-4" />
            {d.loginAccount}
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-600">{d.loginAccountHint}</p>
          <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-zinc-900">
            {d.loginAccountCta}
            <ArrowRight className="h-3.5 w-3.5" />
          </p>
        </a>
        <Link
          href={localizedPath(locale, `/tool/${CC_SWITCH_SLUG}`)}
          className="rounded-xl border border-zinc-900 p-4 ring-1 ring-zinc-900 transition-colors hover:bg-zinc-50"
        >
          <p className="flex items-center gap-2 font-bold text-zinc-900">
            <IconKey className="h-4 w-4" />
            {d.loginApi}
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-600">{d.loginApiHint}</p>
          <p className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-zinc-900">
            {d.loginApiCta}
            <ArrowRight className="h-3.5 w-3.5" />
          </p>
        </Link>
      </div>
    </section>
  );
}
