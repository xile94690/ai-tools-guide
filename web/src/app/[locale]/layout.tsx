import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { htmlLang, isLocale, locales, type Locale } from "@/lib/site";
import { t } from "@/lib/i18n";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "zh";
  const d = t(locale);
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return {
    metadataBase: new URL(site),
    title: {
      default:
        locale === "zh" ? `${d.siteName} · AI Tools Guide` : d.siteName,
      template: `%s · ${d.siteName}`,
    },
    description: d.tagline,
    openGraph: {
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      siteName: d.siteName,
      title: d.siteName,
      description: d.tagline,
    },
    twitter: { card: "summary", title: d.siteName, description: d.tagline },
    alternates: {
      languages: {
        "zh-CN": "/",
        en: "/en",
        "x-default": "/",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const d = t(locale);

  return (
    <html lang={htmlLang(locale)} className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-zinc-50 text-zinc-900">
        <SiteHeader locale={locale} />
        {children}
        <SiteFooter locale={locale} text={d.footer} />
      </body>
    </html>
  );
}
