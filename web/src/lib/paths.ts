import type { Locale } from "./site";

function normalize(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized.replace(/\/{2,}/g, "/") || "/";
}

/** Prefix a `/public` path with the GitHub Pages basePath when one is set. */
export function publicUrl(path: string): string {
  if (!path || /^(https?:|data:|blob:)/i.test(path)) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export function stripLocalePrefix(pathname: string): string {
  const stripped = normalize(pathname).replace(/^\/(zh|en)(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

/** Public URL. Language is a cookie, so the path is the same for zh and en. */
export function localizedPath(_locale: Locale, path: string): string {
  return stripLocalePrefix(path);
}

export function withQuery(path: string, search: string): string {
  if (!search || search === "?") return path;
  return path + (search.startsWith("?") ? search : `?${search}`);
}

export function switchLocalePath(
  pathname: string,
  search: string,
  _nextLocale?: Locale,
): string {
  return withQuery(stripLocalePrefix(pathname), search);
}
