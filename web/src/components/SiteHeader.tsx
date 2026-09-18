import { Suspense } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/site";
import { t } from "@/lib/i18n";
import { localizedPath } from "@/lib/paths";
import LangSwitch from "@/components/LangSwitch";
import SearchBox from "@/components/SearchBox";

export default function SiteHeader({ locale }: { locale: Locale }) {
  const d = t(locale);
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-4 sm:py-3.5">
        <Link
          href={localizedPath(locale, "/")}
          className="shrink-0 text-lg font-black tracking-tight sm:text-xl"
        >
          {d.siteName}
        </Link>
        <div className="min-w-0 flex-1">
          <Suspense
            fallback={
              <div className="h-9 rounded-full border border-zinc-200 bg-zinc-50" />
            }
          >
            <SearchBox locale={locale} tone="header" />
          </Suspense>
        </div>
        <LangSwitch locale={locale} />
      </div>
    </header>
  );
}
