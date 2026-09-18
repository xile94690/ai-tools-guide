import Link from "next/link";
import type { Locale } from "@/lib/site";
import { t } from "@/lib/i18n";
import { localizedPath } from "@/lib/paths";
import LangSwitch from "@/components/LangSwitch";

export default function SiteHeader({ locale }: { locale: Locale }) {
  const d = t(locale);
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="shell flex items-center justify-between py-4">
        <Link
          href={localizedPath(locale, "/")}
          className="text-xl font-black tracking-tight"
        >
          {d.siteName}
        </Link>
        <LangSwitch locale={locale} />
      </div>
    </header>
  );
}
