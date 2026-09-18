"use client";

import { useState } from "react";
import type { Locale } from "@/lib/site";
import { t } from "@/lib/i18n";

export default function CodeBlock({
  code,
  lang,
  caption,
  locale,
}: {
  code: string;
  lang?: string;
  caption?: string;
  locale: Locale;
}) {
  const [copied, setCopied] = useState(false);
  const d = t(locale);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <figure className="my-4 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
      <figcaption className="flex items-center justify-between gap-3 border-b border-zinc-800 px-4 py-2">
        <span className="truncate text-xs text-zinc-400">
          {caption ?? lang ?? "shell"}
        </span>
        <button
          type="button"
          onClick={copy}
          className="shrink-0 rounded-md px-2 py-1 text-xs text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
        >
          {copied ? d.copied : d.copy}
        </button>
      </figcaption>
      <pre className="overflow-x-auto px-4 py-3 text-[13px] leading-6">
        <code className="font-mono text-zinc-100">{code}</code>
      </pre>
    </figure>
  );
}
