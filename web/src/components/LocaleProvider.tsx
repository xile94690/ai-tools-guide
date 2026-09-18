"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { defaultLocale, htmlLang, isLocale, type Locale } from "@/lib/site";
import { t } from "@/lib/i18n";
import {
  localeCookieString,
  parseLocale,
  readLocaleCookie,
} from "@/lib/locale";
import { stripLocalePrefix } from "@/lib/paths";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function applyTitle(next: Locale) {
  const d = t(next);
  const title = document.title;
  const sep = " · ";
  const at = title.indexOf(sep);
  if (at === -1) {
    document.title =
      next === "zh" ? `${d.siteName} · AI Tools Guide` : d.siteName;
    return;
  }
  const left = title.slice(0, at).trim();
  document.title =
    next === "zh" && left === d.siteName
      ? `${d.siteName} · AI Tools Guide`
      : `${left} · ${d.siteName}`;
}

function publicPathname(): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  let path = window.location.pathname;
  if (base && (path === base || path.startsWith(`${base}/`))) {
    path = path.slice(base.length) || "/";
  }
  return path;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const path = publicPathname();
    const match = path.match(/^\/(zh|en)(?=\/|$)/);
    const fromPath = match?.[1];
    if (fromPath && isLocale(fromPath)) {
      document.cookie = localeCookieString(fromPath);
      setLocaleState(fromPath);
      document.documentElement.lang = htmlLang(fromPath);
      applyTitle(fromPath);
      const next = stripLocalePrefix(path);
      const search = window.location.search;
      router.replace(`${next}${search}`);
      return;
    }

    const saved = parseLocale(readLocaleCookie());
    if (saved !== defaultLocale) {
      setLocaleState(saved);
      document.documentElement.lang = htmlLang(saved);
      applyTitle(saved);
    }
  }, [router]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState((current) => {
      if (next === current) return current;
      document.cookie = localeCookieString(next);
      document.documentElement.lang = htmlLang(next);
      applyTitle(next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
