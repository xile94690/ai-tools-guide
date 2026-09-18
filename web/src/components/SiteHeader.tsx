"use client";

import Link from "next/link";
import { t } from "@/lib/i18n";
import LangSwitch from "@/components/LangSwitch";
import { useLocale } from "@/components/LocaleProvider";

export default function SiteHeader() {
  const { locale } = useLocale();
  const d = t(locale);
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="shell flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-black tracking-tight">
          {d.siteName}
        </Link>
        <LangSwitch />
      </div>
    </header>
  );
}
