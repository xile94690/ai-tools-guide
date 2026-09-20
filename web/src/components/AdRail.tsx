"use client";

import { useState } from "react";
import { t } from "@/lib/i18n";
import { adRails, type AdKind, type AdSlot } from "@/lib/ads";
import { useLocale } from "@/components/LocaleProvider";
import AdGuideModal from "@/components/AdGuideModal";

function CloudMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <path
        fill="currentColor"
        d="M10.2 22.5h12.6c2.6 0 4.7-2 4.7-4.5 0-2.2-1.6-4-3.8-4.4C23.4 10.4 20.6 8 17.2 8c-2.8 0-5.2 1.6-6.4 4-3.2.2-5.8 2.8-5.8 6 0 2.5 2.1 4.5 4.7 4.5Z"
        opacity="0.95"
      />
    </svg>
  );
}

function ShieldMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <path
        fill="currentColor"
        d="M16 4.5 7 8.2v7.1c0 6 4.1 10.4 9 12.2 4.9-1.8 9-6.2 9-12.2V8.2L16 4.5Z"
        opacity="0.95"
      />
    </svg>
  );
}

function RocketMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
      <path
        fill="currentColor"
        d="M16 3.8c3.5 2.3 5.5 6 5.5 10.3 0 2.7-.9 5.2-2.6 7.1h-5.8a11.2 11.2 0 0 1-2.6-7.1c0-4.3 2-8 5.5-10.3Z"
        opacity="0.95"
      />
      <path
        fill="currentColor"
        d="M13.4 22.6h5.2l-1.5 3.8a1 1 0 0 1-.9.6h-.4a1 1 0 0 1-.9-.6l-1.5-3.8Z"
        opacity="0.65"
      />
      <circle cx="16" cy="12" r="2.4" fill="#0f172a" opacity="0.35" />
    </svg>
  );
}

function Mark({ kind }: { kind: AdKind }) {
  if (kind === "vpn") return <ShieldMark />;
  if (kind === "proxy") return <RocketMark />;
  return <CloudMark />;
}

function AdCard({
  slot,
  onOpen,
}: {
  slot: AdSlot;
  onOpen: (slot: AdSlot) => void;
}) {
  const { locale } = useLocale();
  const d = t(locale);
  const name = locale === "zh" ? slot.nameZh : slot.nameEn;
  const tagline = locale === "zh" ? slot.taglineZh : slot.taglineEn;
  const cta = locale === "zh" ? slot.ctaZh : slot.ctaEn;
  const hasGuide = Boolean(slot.guide?.length);

  const body = (
    <>
      <span className={`ad-card-fill ad-card-${slot.theme}`} aria-hidden />
      <span className="ad-card-shine" aria-hidden />
      <span className="ad-card-grid" aria-hidden />
      <span className="ad-card-orb ad-card-orb-a" aria-hidden />
      <span className="ad-card-orb ad-card-orb-b" aria-hidden />
      <span className="ad-card-glass" aria-hidden />

      <p className="ad-card-badge">{d.adSponsor}</p>
      <div className="ad-card-mark">
        <Mark kind={slot.kind} />
      </div>
      <p className="ad-card-name">{name}</p>
      <p className="ad-card-tagline">{tagline}</p>
      <span className="ad-card-cta">{cta}</span>
    </>
  );

  // 没有分步引导的位直接跳转，不再弹层。
  if (!hasGuide) {
    return (
      <a
        className="ad-card"
        href={slot.href}
        target="_blank"
        rel="sponsored noopener noreferrer"
      >
        {body}
      </a>
    );
  }

  return (
    <button type="button" className="ad-card" onClick={() => onOpen(slot)}>
      {body}
    </button>
  );
}

export default function AdRails() {
  const [open, setOpen] = useState<AdSlot | null>(null);
  const { locale } = useLocale();
  const d = t(locale);

  return (
    <>
      <aside className="ad-rail ad-rail-left" aria-label={d.adSponsor}>
        {adRails.left.map((slot) => (
          <AdCard key={slot.id} slot={slot} onOpen={setOpen} />
        ))}
        <p className="ad-rail-note">{d.adRailNote}</p>
      </aside>
      <aside className="ad-rail ad-rail-right" aria-label={d.adSponsor}>
        {adRails.right.map((slot) => (
          <AdCard key={slot.id} slot={slot} onOpen={setOpen} />
        ))}
        <p className="ad-rail-note">{d.adRailNote}</p>
      </aside>
      {open ? (
        <AdGuideModal slot={open} onClose={() => setOpen(null)} />
      ) : null}
    </>
  );
}
