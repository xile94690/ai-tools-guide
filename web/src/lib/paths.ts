import { defaultLocale, type Locale } from "./site";

/** Public URL for a path. Chinese (default) has no prefix; English is `/en/...`. */
export function localizedPath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const clean = normalized.replace(/\/{2,}/g, "/") || "/";
  if (locale === defaultLocale) return clean;
  if (clean === "/") return `/${locale}`;
  return `/${locale}${clean}`;
}

export function stripLocalePrefix(pathname: string): string {
  const stripped = pathname.replace(/^\/(zh|en)(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

export function withQuery(path: string, search: string): string {
  if (!search || search === "?") return path;
  return path + (search.startsWith("?") ? search : `?${search}`);
}

export function switchLocalePath(
  pathname: string,
  search: string,
  nextLocale: Locale,
): string {
  return withQuery(localizedPath(nextLocale, stripLocalePrefix(pathname)), search);
}
