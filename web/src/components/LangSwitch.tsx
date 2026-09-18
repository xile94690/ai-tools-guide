"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Locale } from "@/lib/site";
import { t } from "@/lib/i18n";
import { localizedPath, stripLocalePrefix, withQuery } from "@/lib/paths";

function Switcher({
  locale,
  pathname,
  search,
}: {
  locale: Locale;
  pathname: string;
  search: string;
}) {
  const d = t(locale);
  const router = useRouter();
  const rest = stripLocalePrefix(pathname);
  const zhHref = withQuery(localizedPath("zh", rest), search);
  const enHref = withQuery(localizedPath("en", rest), search);
  const [knob, setKnob] = useState<Locale>(locale);

  useEffect(() => {
    setKnob(locale);
  }, [locale]);

  const go = (next: Locale, href: string) => {
    if (next === knob) return;
    setKnob(next);
    window.setTimeout(() => router.push(href), 260);
  };

  return (
    <nav aria-label={d.langSwitch} className="shrink-0">
      <div className="rounded-full bg-zinc-200 p-1">
        <div className="relative grid h-7 grid-cols-2">
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-zinc-900 shadow-md will-change-transform"
            style={{
              transform: knob === "en" ? "translateX(100%)" : "translateX(0)",
              transition: "transform 260ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
          <a
            href={zhHref}
            hrefLang="zh-CN"
            onClick={(e) => {
              e.preventDefault();
              go("zh", zhHref);
            }}
            className={`relative z-10 flex min-w-[4.5rem] items-center justify-center px-3 text-sm font-semibold transition-colors duration-200 ${
              knob === "zh" ? "text-white" : "text-zinc-600"
            }`}
          >
            {d.langZh}
          </a>
          <a
            href={enHref}
            hrefLang="en"
            onClick={(e) => {
              e.preventDefault();
              go("en", enHref);
            }}
            className={`relative z-10 flex min-w-[4.5rem] items-center justify-center px-3 text-sm font-semibold transition-colors duration-200 ${
              knob === "en" ? "text-white" : "text-zinc-600"
            }`}
          >
            {d.langEn}
          </a>
        </div>
      </div>
    </nav>
  );
}

function LangSwitchInner({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const search = searchParams.toString();
  return (
    <Switcher
      locale={locale}
      pathname={pathname}
      search={search ? `?${search}` : ""}
    />
  );
}

export default function LangSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  return (
    <Suspense
      fallback={<Switcher locale={locale} pathname={pathname} search="" />}
    >
      <LangSwitchInner locale={locale} />
    </Suspense>
  );
}
