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

function Mark({ kind }: { kind: AdKind }) {
  return kind === "vpn" ? <ShieldMark /> : <CloudMark />;
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

  return (
    <button type="button" className="ad-card" onClick={() => onOpen(slot)}>
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
    </button>
  );
}

export default function AdRails() {
  const [open, setOpen] = useState<AdSlot | null>(null);

  return (
    <>
      <aside className="ad-rail ad-rail-left" aria-label="Sponsored">
        {adRails.left.map((slot) => (
          <AdCard key={slot.id} slot={slot} onOpen={setOpen} />
        ))}
      </aside>
      <aside className="ad-rail ad-rail-right" aria-label="Sponsored">
        {adRails.right.map((slot) => (
          <AdCard key={slot.id} slot={slot} onOpen={setOpen} />
        ))}
      </aside>
      {open ? (
        <AdGuideModal slot={open} onClose={() => setOpen(null)} />
      ) : null}
    </>
  );
}
