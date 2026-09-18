"use client";

import Link from "next/link";
import { t } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";

export default function NotFound() {
  const { locale } = useLocale();
  const d = t(locale);
  return (
    <main className="shell flex-1 py-20 text-center">
      <h1 className="text-2xl font-black">{d.notFoundTitle}</h1>
      <p className="mt-3 text-zinc-600">{d.notFoundBody}</p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-bold text-white"
      >
        {d.back}
      </Link>
    </main>
  );
}
