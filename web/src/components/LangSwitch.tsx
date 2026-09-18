"use client";

import { t } from "@/lib/i18n";
import { useLocale } from "@/components/LocaleProvider";

export default function LangSwitch() {
  const { locale, setLocale } = useLocale();
  const d = t(locale);

  return (
    <nav aria-label={d.langSwitch} className="shrink-0">
      <div className="rounded-full bg-zinc-200 p-1">
        <div className="relative grid h-7 grid-cols-2">
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-zinc-900 shadow-md will-change-transform"
            style={{
              transform: locale === "en" ? "translateX(100%)" : "translateX(0)",
              transition: "transform 260ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
          <button
            type="button"
            aria-pressed={locale === "zh"}
            onClick={() => setLocale("zh")}
            className={`relative z-10 flex min-w-[4.5rem] items-center justify-center px-3 text-sm font-semibold transition-colors duration-200 ${
              locale === "zh" ? "text-white" : "text-zinc-600"
            }`}
          >
            {d.langZh}
          </button>
          <button
            type="button"
            aria-pressed={locale === "en"}
            onClick={() => setLocale("en")}
            className={`relative z-10 flex min-w-[4.5rem] items-center justify-center px-3 text-sm font-semibold transition-colors duration-200 ${
              locale === "en" ? "text-white" : "text-zinc-600"
            }`}
          >
            {d.langEn}
          </button>
        </div>
      </div>
    </nav>
  );
}
