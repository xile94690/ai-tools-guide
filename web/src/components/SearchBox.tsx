"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import type { Locale } from "@/lib/site";
import { categoryById } from "@/lib/site";
import { t } from "@/lib/i18n";
import { localizedPath, publicUrl } from "@/lib/paths";
import { searchTools } from "@/lib/search";
import { toolIcon, type Tool } from "@/lib/tools";

const MAX_HITS = 8;

export default function SearchBox({
  locale,
  tone = "hero",
}: {
  locale: Locale;
  tone?: "hero" | "page" | "header";
}) {
  const params = useSearchParams();
  const [q, setQ] = useState(params.get("q") ?? "");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const d = t(locale);
  const compact = tone === "header";
  const hero = tone === "hero";
  const listId = useId();
  const hits = q.trim() ? searchTools(q, locale).slice(0, MAX_HITS) : [];
  const showPanel = open && q.trim().length > 0;

  useEffect(() => {
    setActive(-1);
  }, [q]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const goTool = (tool: Tool) => {
    setOpen(false);
    router.push(localizedPath(locale, `/tool/${tool.slug}`));
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setOpen(false);
      return;
    }
    if (!showPanel) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => {
        if (!hits.length) return -1;
        return i < 0 ? 0 : (i + 1) % hits.length;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => {
        if (!hits.length) return -1;
        return i < 0 ? hits.length - 1 : (i - 1 + hits.length) % hits.length;
      });
    } else if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div ref={rootRef} className="relative w-full text-left">
      <input
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        placeholder={compact ? d.headerSearchPlaceholder : d.searchPlaceholder}
        aria-label={d.search}
        aria-expanded={showPanel}
        aria-controls={listId}
        aria-autocomplete="list"
        role="combobox"
        autoComplete="off"
        className={
          hero
            ? "h-12 w-full rounded-full border border-zinc-700 bg-zinc-800 px-5 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-white"
            : compact
              ? "h-9 w-full rounded-full border border-zinc-200 bg-zinc-50 px-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
              : "h-12 w-full rounded-full border border-zinc-200 bg-white px-5 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
        }
      />
      {showPanel && (
        <div className="absolute inset-x-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-zinc-200 bg-white text-zinc-900 shadow-xl">
          {hits.length === 0 ? (
            <p className="px-4 py-3 text-sm text-zinc-500">{d.noResult}</p>
          ) : (
            <>
              <p className="border-b border-zinc-100 px-4 py-2 text-xs text-zinc-400">
                {d.searchHits(hits.length)} · {d.searchLiveHint}
              </p>
              <ul id={listId} role="listbox">
                {hits.map((tool, i) => {
                  const cat = categoryById(tool.category);
                  const tagline =
                    locale === "zh" ? tool.taglineZh : tool.taglineEn;
                  const selected = i === active;
                  return (
                    <li key={tool.slug} role="option" aria-selected={selected}>
                      <button
                        type="button"
                        onMouseEnter={() => setActive(i)}
                        onClick={() => goTool(tool)}
                        className={`flex w-full items-center gap-3 px-4 py-2.5 text-left ${
                          selected ? "bg-zinc-100" : "bg-white hover:bg-zinc-50"
                        }`}
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white">
                          <Image
                            src={publicUrl(toolIcon(tool.slug))}
                            alt=""
                            width={28}
                            height={28}
                            className="h-6 w-6 object-contain"
                          />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate font-bold">
                            {tool.name}
                          </span>
                          <span className="block truncate text-xs text-zinc-500">
                            {tagline}
                          </span>
                        </span>
                        <span className="shrink-0 text-[11px] text-zinc-400">
                          {cat ? (locale === "zh" ? cat.zh : cat.en) : ""}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}
