import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { defaultLocale, htmlLang } from "@/lib/site";
import { t } from "@/lib/i18n";
import { LocaleProvider } from "@/components/LocaleProvider";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AdRails from "@/components/AdRail";

const d = t(defaultLocale);
const site = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: `${d.siteName} · AI Tools Guide`,
    template: `%s · ${d.siteName}`,
  },
  description: d.tagline,
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: d.siteName,
    title: d.siteName,
    description: d.tagline,
  },
  twitter: { card: "summary", title: d.siteName, description: d.tagline },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={htmlLang(defaultLocale)} className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-zinc-50 text-zinc-900">
        <LocaleProvider>
          <AdRails />
          <SiteHeader />
          {children}
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
