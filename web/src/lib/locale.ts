import { defaultLocale, isLocale, type Locale } from "./site";

export const LOCALE_COOKIE = "locale";

export function parseLocale(value: string | undefined | null): Locale {
  if (value && isLocale(value)) return value;
  return defaultLocale;
}

function cookiePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || "/";
}

/** Client-safe Set-Cookie value. Not HttpOnly so the language switch can write it. */
export function localeCookieString(locale: Locale): string {
  return `${LOCALE_COOKIE}=${locale}; Path=${cookiePath()}; Max-Age=31536000; SameSite=Lax`;
}

export function readLocaleCookie(): Locale | undefined {
  if (typeof document === "undefined") return undefined;
  const m = document.cookie.match(/(?:^|; )locale=(zh|en)(?:;|$)/);
  return m?.[1] as Locale | undefined;
}
