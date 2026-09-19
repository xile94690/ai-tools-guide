"use client";

import { t } from "@/lib/i18n";
import { adSlots, type AdSlot } from "@/lib/ads";
import { useLocale } from "@/components/LocaleProvider";

function AdCard({ slot }: { slot: AdSlot }) {
  const { locale } = useLocale();
  const d = t(locale);
  const tagline = locale === "zh" ? slot.taglineZh : slot.taglineEn;
  const cta = locale === "zh" ? slot.ctaZh : slot.ctaEn;
  const dark = slot.id === "vultr";

  return (
    <a
      href={slot.href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={`flex h-full min-h-[22rem] w-full flex-col justify-between rounded-2xl border p-3 shadow-sm transition-shadow hover:shadow-md ${
        dark
          ? "border-zinc-800 bg-zinc-900 text-white"
          : "border-orange-200 bg-orange-50 text-zinc-900"
      }`}
    >
      <div>
        <p
          className={`text-[10px] font-semibold uppercase tracking-wider ${
            dark ? "text-zinc-400" : "text-orange-700/80"
          }`}
        >
          {d.adSponsor}
        </p>
        <p className="mt-3 text-lg font-black tracking-tight">{slot.name}</p>
        <p
          className={`mt-2 text-xs leading-5 ${
            dark ? "text-zinc-300" : "text-zinc-600"
          }`}
        >
          {tagline}
        </p>
      </div>
      <p
        className={`text-xs font-bold ${
          dark ? "text-white" : "text-orange-800"
        }`}
      >
        {cta} →
      </p>
    </a>
  );
}

export default function AdRails() {
  return (
    <>
      <aside className="ad-rail ad-rail-left" aria-label="Sponsored">
        <AdCard slot={adSlots.left} />
      </aside>
      <aside className="ad-rail ad-rail-right" aria-label="Sponsored">
        <AdCard slot={adSlots.right} />
      </aside>
    </>
  );
}
