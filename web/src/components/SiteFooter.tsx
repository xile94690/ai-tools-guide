"use client";

import { t } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";

export default function SiteFooter() {
  const { locale } = useLocale();
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white" lang={locale}>
      <p className="shell py-6 text-center text-sm text-zinc-500">
        {t(locale).footer}
      </p>
    </footer>
  );
}
