"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { t } from "@/lib/i18n";
import { localizedPath } from "@/lib/paths";
import type { Locale } from "@/lib/site";

export default function NotFound() {
  const pathname = usePathname() || "/";
  const locale: Locale = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "zh";
  const d = t(locale);
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-20 text-center">
      <h1 className="text-2xl font-black">{d.notFoundTitle}</h1>
      <p className="mt-3 text-zinc-600">{d.notFoundBody}</p>
      <Link
        href={localizedPath(locale, "/")}
        className="mt-6 inline-block rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-bold text-white"
      >
        {d.back}
      </Link>
    </main>
  );
}
