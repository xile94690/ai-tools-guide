"use client";

import { t } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";

export default function SiteFooter() {
  const { locale } = useLocale();
  const d = t(locale);
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white" lang={locale}>
      <div className="shell py-6 text-center">
        <p className="text-sm text-zinc-500">{d.footer}</p>
        <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-zinc-400">
          {d.adDisclaimer}
        </p>
      </div>
    </footer>
  );
}
