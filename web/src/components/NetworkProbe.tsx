"use client";

import { useState } from "react";
import type { Locale } from "@/lib/site";
import { t } from "@/lib/i18n";
import type { Region } from "@/lib/network";
import {
  networkVerdict,
  type NetworkInfo,
  type NetworkVerdict,
} from "@/lib/network";

type Status = "idle" | "loading" | "done" | "error";

function verdictCopy(
  locale: Locale,
  toolName: string,
  toolRegion: Region,
  info: NetworkInfo,
): { tone: NetworkVerdict; title: string; body: string } {
  const d = t(locale);
  const zh = locale === "zh";
  const code = (info.countryCode || "").toUpperCase();
  const inCn = code === "CN";
  const place = [info.country, info.region, info.city].filter(Boolean).join(" · ");
  const tone = networkVerdict(toolRegion, code || "XX");

  if (toolRegion === "global" && inCn) {
    return {
      tone,
      title: d.netBad,
      body: zh
        ? `当前出口在中国大陆（${place || "CN"}）。${toolName} 需要能访问外网的网络。换节点后重新点检测。`
        : `Your exit is in mainland China (${place || "CN"}). ${toolName} needs a network that can reach its site. Switch nodes and test again.`,
    };
  }
  if (toolRegion === "global") {
    return {
      tone,
      title: d.netOk,
      body: zh
        ? `当前出口在 ${place || code || "海外"}，对 ${toolName} 这种需外网的工具通常可用。`
        : `Exit is ${place || code || "outside CN"}, which is usually enough for ${toolName}.`,
    };
  }
  if (toolRegion === "domestic" && (inCn || !code)) {
    return {
      tone,
      title: d.netOk,
      body: zh
        ? `当前出口${place ? `在${place}` : "已测到"}，${toolName} 可直连。`
        : `Exit ${place || "detected"} — ${toolName} works without a tunnel.`,
    };
  }
  if (toolRegion === "domestic") {
    return {
      tone,
      title: d.netWarn,
      body: zh
        ? `当前出口在 ${place || code}。${toolName} 面向国内用户，海外访问可能变慢，一般仍能打开。`
        : `Exit is ${place || code}. ${toolName} is built for China; it may be slower from abroad.`,
    };
  }
  return {
    tone,
    title: d.netOk,
    body: zh
      ? `当前出口在 ${place || code || "未知地区"}。${toolName} 国内外都可用。`
      : `Exit is ${place || code || "unknown"}. ${toolName} works in China and abroad.`,
  };
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 py-2 text-sm">
      <span className="shrink-0 text-zinc-500">{k}</span>
      <span className="min-w-0 break-all text-right font-medium text-zinc-900">
        {v || "—"}
      </span>
    </div>
  );
}

export default function NetworkProbe({
  locale,
  toolName,
  toolRegion,
}: {
  locale: Locale;
  toolName: string;
  toolRegion: Region;
  website?: string;
}) {
  const d = t(locale);
  const [status, setStatus] = useState<Status>("idle");
  const [info, setInfo] = useState<NetworkInfo | null>(null);
  const [error, setError] = useState("");

  const run = () => {
    setStatus("loading");
    setError("");
    setInfo(null);

    const ctrl = new AbortController();
    const timer = window.setTimeout(() => ctrl.abort(), 8000);

    void (async () => {
      try {
        const started = performance.now();
        const res = await fetch("/api/network", {
          cache: "no-store",
          signal: ctrl.signal,
        });
        const json = (await res.json()) as NetworkInfo & {
          error?: boolean;
          message?: string;
        };
        if (!res.ok || json.error || !json.ip) {
          throw new Error(json.message || "lookup failed");
        }
        setInfo({
          ...json,
          latencyMs: Math.round(performance.now() - started),
        });
        setStatus("done");
      } catch (e) {
        setStatus("error");
        setError(
          e instanceof DOMException && e.name === "AbortError"
            ? d.netError
            : d.netError,
        );
      } finally {
        window.clearTimeout(timer);
      }
    })();
  };

  const copy = info ? verdictCopy(locale, toolName, toolRegion, info) : null;
  const toneClass =
    copy?.tone === "bad"
      ? "border-amber-300 bg-amber-50 text-amber-950"
      : copy?.tone === "warn"
        ? "border-sky-200 bg-sky-50 text-sky-950"
        : "border-emerald-200 bg-emerald-50 text-emerald-950";
  const place = info
    ? [info.country, info.region, info.city].filter(Boolean).join(" · ")
    : "";

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-bold text-zinc-900">{d.netTitle}</p>
          <p className="mt-1 text-sm text-zinc-500">{d.netHint}</p>
        </div>
        <form
          action="/api/network"
          method="get"
          onSubmit={(e) => {
            e.preventDefault();
            if (status !== "loading") run();
          }}
        >
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-zinc-700 disabled:cursor-wait disabled:bg-zinc-400"
          >
            {status === "loading"
              ? d.netRunning
              : status === "done"
                ? d.netRetest
                : d.netRun}
          </button>
        </form>
      </div>

      {status === "loading" && (
        <p className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600">
          {d.netRunning}
        </p>
      )}

      {status === "error" && (
        <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {error}
        </p>
      )}

      {status === "done" && info && copy && (
        <div className="mt-4">
          <div
            className={`rounded-xl border px-4 py-3 text-sm leading-6 ${toneClass}`}
          >
            <p className="font-bold">{copy.title}</p>
            <p className="mt-1">{copy.body}</p>
          </div>
          <div className="mt-3 divide-y divide-zinc-100 rounded-xl border border-zinc-200 px-4">
            <Row k={d.netIp} v={info.ip} />
            <Row k={d.netPlace} v={place} />
            <Row k={d.netOrg} v={info.org} />
            <Row k={d.netTz} v={info.timezone} />
            <Row k={d.netRtt} v={`${info.latencyMs} ms`} />
          </div>
        </div>
      )}
    </div>
  );
}
