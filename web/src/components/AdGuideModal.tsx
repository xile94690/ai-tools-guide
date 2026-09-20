"use client";

import { useEffect } from "react";
import { t } from "@/lib/i18n";
import type { AdSlot } from "@/lib/ads";
import { useLocale } from "@/components/LocaleProvider";
import Shot from "@/components/Shot";
import RichText from "@/components/RichText";

export default function AdGuideModal({
  slot,
  onClose,
}: {
  slot: AdSlot;
  onClose: () => void;
}) {
  const { locale } = useLocale();
  const d = t(locale);
  const name = locale === "zh" ? slot.nameZh : slot.nameEn;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="ad-guide" role="dialog" aria-modal="true" aria-labelledby="ad-guide-title">
      <button type="button" className="ad-guide-backdrop" aria-label={d.adCancel} onClick={onClose} />
      <div className="ad-guide-panel">
        <div className="ad-guide-head">
          <button
            type="button"
            className="ad-guide-x"
            aria-label={d.adCancel}
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
              <path
                d="M6 6l12 12M18 6L6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <p className="ad-guide-kicker">{d.adSponsor}</p>
          <h2 id="ad-guide-title" className="ad-guide-title">
            {d.adGuideTitle(name)}
          </h2>
          <p className="ad-guide-hint">{d.adGuideHint}</p>
        </div>
        <div className="ad-guide-body">
          <ol className="ad-guide-steps">
            {slot.guide.map((step, i) => (
              <li key={step.src} className="ad-guide-step">
                <div className="ad-guide-step-head">
                  <span className="ad-guide-num">{i + 1}</span>
                  <h3>
                    {locale === "zh" ? step.titleZh : step.titleEn}
                  </h3>
                </div>
                <p className="ad-guide-text">
                  <RichText
                    text={locale === "zh" ? step.textZh : step.textEn}
                  />
                </p>
                <Shot
                  src={step.src}
                  caption={locale === "zh" ? step.captionZh : step.captionEn}
                  hint={d.shotHint}
                  label={d.shotLabel}
                  guide={d.shotGuide}
                />
              </li>
            ))}
          </ol>
        </div>
        <div className="ad-guide-foot">
          <button type="button" className="ad-guide-cancel" onClick={onClose}>
            {d.adCancel}
          </button>
          <a
            href={slot.href}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="ad-guide-go"
          >
            {d.adGo}
          </a>
        </div>
      </div>
    </div>
  );
}
