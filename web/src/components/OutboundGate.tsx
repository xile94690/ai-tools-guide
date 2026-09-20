"use client";

import { useEffect, useState } from "react";
import { t } from "@/lib/i18n";
import type { AdSlot } from "@/lib/ads";
import { useLocale } from "@/components/LocaleProvider";

type ProbeState = "checking" | "ok" | "fail";

const PROBE_TIMEOUT_MS = 6000;

/**
 * 只判断「连不连得上」：no-cors 请求拿到不透明响应即算可达，
 * DNS 失败 / 超时 / 网络不通算不可达。
 * 浏览器同源策略下读不到对方内容，所以这里**无法**判断站点是否安全。
 */
async function probeReachable(
  url: string,
  signal: AbortSignal,
): Promise<boolean> {
  try {
    await fetch(url, {
      mode: "no-cors",
      cache: "no-store",
      redirect: "follow",
      signal,
    });
    return true;
  } catch {
    return false;
  }
}

export default function OutboundGate({
  slot,
  onClose,
}: {
  slot: AdSlot;
  onClose: () => void;
}) {
  const { locale } = useLocale();
  const d = t(locale);
  const name = locale === "zh" ? slot.nameZh : slot.nameEn;
  const [state, setState] = useState<ProbeState>("checking");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timer = window.setTimeout(
      () => controller.abort(),
      PROBE_TIMEOUT_MS,
    );

    probeReachable(slot.href, controller.signal)
      .then((ok) => {
        if (!cancelled) setState(ok ? "ok" : "fail");
      })
      .finally(() => window.clearTimeout(timer));

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [slot.href, attempt]);

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

  const retry = () => {
    setState("checking");
    setAttempt((n) => n + 1);
  };

  return (
    <div
      className="ad-guide"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ad-gate-title"
    >
      <button
        type="button"
        className="ad-guide-backdrop"
        aria-label={d.adStayHere}
        onClick={onClose}
      />
      <div className="ad-guide-panel">
        <div className="ad-guide-head">
          <button
            type="button"
            className="ad-guide-x"
            aria-label={d.adStayHere}
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
          <h2 id="ad-gate-title" className="ad-guide-title">
            {d.adLeaveTitle}
          </h2>
          <p className="ad-guide-hint">{d.adLeaveTo(name)}</p>
        </div>

        <div className="ad-guide-body">
          <p className="ad-gate-note">{d.adLeaveNote}</p>

          <div
            className={`ad-gate-status ad-gate-status-${state}`}
            role="status"
            aria-live="polite"
          >
            {state === "checking" ? (
              <span className="ad-gate-spin" aria-hidden />
            ) : null}
            <span>
              {state === "checking"
                ? d.adChecking
                : state === "ok"
                  ? d.adCheckOk
                  : d.adCheckFail}
            </span>
          </div>

          {state === "fail" ? (
            <button type="button" className="ad-gate-retry" onClick={retry}>
              {d.adCheckRetry}
            </button>
          ) : null}
        </div>

        <div className="ad-guide-foot">
          <button type="button" className="ad-guide-cancel" onClick={onClose}>
            {d.adStayHere}
          </button>
          {state === "ok" ? (
            <a
              className="ad-guide-go"
              href={slot.href}
              target="_blank"
              rel="sponsored noopener noreferrer"
            >
              {d.adContinue}
            </a>
          ) : (
            <span className="ad-guide-go ad-gate-go-off" aria-disabled="true">
              {d.adContinue}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
